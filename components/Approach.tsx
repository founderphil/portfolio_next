import React, { useEffect, useRef, useState } from "react";
import FaceDotsExperience from "./FaceDotsExperience";

export default function Approach() {
    const parallaxRef = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const centerProgress = (rect.top + rect.height / 2) / viewportHeight;
      const translate = (centerProgress - 0.5) * -40; // subtle parallax
      setOffsetY(translate);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const approachPillars = [
    {
      title: "Human-Centered First",
      body:
        "Start from real people, not features. Prioritize clarity, control, and trust so products feel intuitive, respectful, and empowering.",
    },
    {
      title: "Scalable Systems Design",
      body:
        "Zoom out before zooming in. Map incentives, constraints, and feedback loops so solutions play nicely across the full ecosystem.",
    },
    {
      title: "Outcome-Driven",
      body:
        "Align craft to business and user outcomes. Ship lean experiments, measure impact, and iterate quickly without losing the story.",
    },
  ];
  const supportNodes = [
    {
      title: "Capabilities",
      body:
        "Human-AI interaction design (trust, grounding, transparency patterns). Multimodal UX (voice, XR, GenAI). B2B and ops-focused product design. UX research, field studies, and journey mapping. Interaction design and rapid prototyping (Figma to React). Design systems and component libraries. Information architecture and service blueprints. Accessibility (WCAG). Front-end delivery with AI-assisted development (Claude Code, Cursor). Product strategy, prioritization, and executive communication.",
    },
    {
      title: "Tooling",
      body:
        "Figma, Framer, Adobe Creative Cloud, After Effects, Blender. Next.js, React, React Native, TypeScript, Python, Unity, Three.js, p5.js. OpenAI APIs, LLMs, multimodal models, local inference, RAG, prompt engineering, computer vision, STT/TTS, spatial audio, AR/MR. AWS, GCP, GitHub, CI/CD, SQL/NoSQL. Claude Code, Cursor.",
    },
  ];
  return (
    <section
      id="approach"
      className="scroll-mt-24 md:scroll-mt-40 py-0 space-y-8"
      aria-label="Approach"
    >
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        My Approach
      </h2>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-6">
          <p className="text-base md:text-lg text-neutral-300 max-w-4xl">
            My work starts with people and the systems around them.
            <br /><br/>
            I explore where technology can improve a workflow, reveal new information,
            or make an experience possible.
            <br /><br/>
            That can mean an enterprise interface, a locally hosted AI character, or a physical object in a live production.
          </p>
          <p className="text-base md:text-lg text-neutral-300 max-w-4xl">
            I am a product designer and design engineer with an M.S. in Emerging Technologies
            from NYU Tandon, focused on AI and human-computer interaction.
            I’ve studied and built AI models, but more importantly, I’ve
            designed how people interact with these models: how intent is expressed, how
            trust is earned, and how complex systems remain digestible when
            intelligence is no longer deterministic.
          </p>
          <p className="text-base md:text-lg text-neutral-300 max-w-4xl">
            As a founder and product leader, I consider technical feasibility, operating constraints, and adoption alongside the experience.
             I focus on reducing the cognitive load of professional tools and ensuring that innovation 
             connects directly to business value. I care about craft, but I’m equally
            focused on adoption, measurable outcomes, and long-term value - building products
            that scale not just technically, but organizationally.
          </p>
          <p className="text-base md:text-lg text-neutral-300 max-w-4xl">
            Innovation connects this work across industries. At TAU Innovations, field research
            in Southeast Asia and Africa explored productivity and item provenance across supply
            chains. At Ford, I helped grantmakers discover themes across institutional knowledge;
            at BSR, I led a team turning ESG research into an enterprise platform. Today, I connect
            sensors, software, and AI with live interaction at Storyverse. Across these settings,
            I look for new applications for technology, test what is feasible, and bring the right
            people together to make it work.
          </p>
          <p className="text-base md:text-lg text-neutral-300 max-w-4xl">
            I’m looking for a team that understands the next generation of
            products won’t be defined by interfaces alone, but by how
            intelligently they respond, adapt, and earn trust over time. If
            you’re building toward that future, I’d love to be part of the
            conversation.
          </p>
          <p className="text-base md:text-lg text-neutral-300 max-w-4xl">
            Phil.
          </p>
        </div>
        <div className="space-y-4">
          <div
            ref={parallaxRef}
            className="relative aspect-square w-full overflow-hidden rounded-2xl border border-sky-400/30 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
            style={{
              transform: `translateY(${offsetY}px)`,
              transition: "transform 0.08s linear",
            }}
          >
            <FaceDotsExperience />
            <p className="absolute bottom-3 left-4 text-xs font-semibold text-black">
              Click. Hold. Drag.
            </p>
          </div>
          {approachPillars.map((node) => (
            <div
              key={node.title}
              className="rounded-2xl border border-sky-400/30 bg-neutral-950/70 p-5 shadow-[0_0_24px_rgba(56,189,248,0.18)]"
            >
              <p className="text-base font-semibold text-neutral-100">
                {node.title}
              </p>
              <p className="mt-2 text-sm text-neutral-300">{node.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {supportNodes.map((node) => (
          <div
            key={node.title}
            className="rounded-2xl border border-neutral-900/70 bg-neutral-950/40 p-5"
          >
            <p className="text-sm font-semibold text-neutral-100">{node.title}</p>
            <p className="mt-2 text-sm text-neutral-300">{node.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
