import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { projects, type Project } from "@/data/projects";
import { labProjects, type LabProject } from "@/data/labProjects";
import { expandTokens } from "./synonyms";

const apiKey = process.env.OPENAI_API_KEY ?? process.env.OPENAI_API;
const client = apiKey ? new OpenAI({ apiKey }) : null;

function getQueryTokens(query: string): string[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const baseTokens = trimmed
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length >= 2);

  return expandTokens(baseTokens);
}

function findRelevantProjects(queryTokens: string[]): [string, Project][] {
  if (!queryTokens.length) return [] as [string, Project][];

  const entries = Object.entries(projects) as [
    string,
    (typeof projects)[string]
  ][];

  const scored = entries
    .map(([slug, p]) => {
      const haystack = [
        p.title,
        p.subtitle,
        p.overview,
        p.role,
        p.why,
        ...(p.tags || []),
      ]
        .join(" ")
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ");

      let score = 0;
      for (const token of queryTokens) {
        if (haystack.includes(token)) score += 1;
      }
      return { slug, project: p, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!scored.length) return [] as [string, Project][];

  const top = scored.slice(0, 2);
  if (top.length === 1) {
    return [[top[0].slug, top[0].project]];
  }

  const [first, second] = top;

  const keepSecond =
    second.score >= 2 && // needs at least a couple of strong overlaps
    second.score >= first.score - 1; // and not be much weaker than #1

  const final = keepSecond ? top : [first];

  return final.map<[string, Project]>((item) => [item.slug, item.project]);
}

function findRelevantLabProjects(queryTokens: string[]): LabProject[] {
  if (!queryTokens.length) return [];

  const scored = labProjects
    .map((p) => {
      const haystack = [p.label, ...(p.tags || [])]
        .join(" ")
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ");

      let score = 0;
      for (const token of queryTokens) {
        if (haystack.includes(token)) score += 1;
      }
      return { project: p, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!scored.length) return [];

  const top = scored.slice(0, 2);
  if (top.length === 1) return [top[0].project];

  const [first, second] = top;
  const keepSecond = second.score >= 2 && second.score >= first.score - 1;
  const final = keepSecond ? top : [first];

  return final.map((item) => item.project);
}

function buildProjectsContext(matching: [string, Project][]) {
  if (!matching.length) return "No directly matching projects were found.";

  return matching
    .map(([slug, p]) => {
      const base = {
        slug,
        title: p.title,
        subtitle: p.subtitle,
        overview: p.overview,
        role: p.role,
        tags: p.tags,
        why: p.why,
        img: p.img,
        link: p.link,
        featured: p.featured,
        outcomes: p.outcomes,
        snapshots: p.snapshots,
      };
      return base;
    })
    .map((p) => JSON.stringify(p))
    .join("\n");
}

export async function POST(req: NextRequest) {
  try {
    if (!apiKey || !client) {
      return NextResponse.json(
        { error: "Missing OpenAI API key (set OPENAI_API_KEY)" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const query = (body?.query ?? "").toString();

    if (!query.trim()) {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    const queryTokens = getQueryTokens(query);
    let matching = findRelevantProjects(queryTokens);
    const labMatching = findRelevantLabProjects(queryTokens);

    // Fallback: if the user is asking about websites/sites and
    // no specific projects were matched by keywords, surface
    // all projects that have an external link so Phil Bot can
    // still answer concretely.
    if (!matching.length) {
      const websiteTokens = ["websites", "website", "site", "sites", "web"];
      const isWebsiteQuery = queryTokens.some((t) => websiteTokens.includes(t));

      if (isWebsiteQuery) {
        const entries = Object.entries(projects) as [string, Project][];
        const withLinks = entries.filter(([, p]) => !!p.link);
        matching = withLinks;
      }
    }
    const projectsContext = buildProjectsContext(matching);

    const labContext = labMatching
      .map((p) =>
        JSON.stringify({
          id: p.id,
          label: p.label,
          url: p.url,
          group: p.group,
          tags: p.tags,
        })
      )
      .join("\n");

    const systemPrompt = `You are Phil Bot, an AI guide to Phil Olarte's portfolio.\n\nGoals:\n- Answer the user's question directly, in a friendly, concise tone.\n- Only talk about projects that are provided in the context below — do not invent new work.\n- When relevant, reference projects by name, and mention why they are connected to the question.\n- When it helps, suggest concrete links or slugs so the user can explore more on the site.\n\nRules:\n- At most, spotlight two specific projects for any given answer.\n- If no projects are clearly a match, still give a helpful answer about Phil's general focus and suggest what to ask instead.\n- Keep responses short, usually 1–3 short paragraphs or a few bullets.\n- If you reference a project, use its slug as /work/{slug} when suggesting navigation, or direct Notion/other URLs for Lab experiments.\n\nMain Work project context (one JSON object per line):\n${projectsContext}\n\nLab experiments and prototypes (one JSON object per line):\n${labContext}`;

    const userPrompt = `User question: ${query}`;

    const completion = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_output_tokens: 1000,
    });

    const answer = completion.output_text;

    return NextResponse.json({
      answer,
      projects: matching.map(([slug, p]) => ({
        slug,
        title: p.title,
        subtitle: p.subtitle,
        overview: p.overview,
        tags: p.tags,
        img: p.img,
      })),
    });
  } catch (error: any) {
    console.error("phil-bot error", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
