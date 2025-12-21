export const QUERY_SYNONYMS: Record<string, string[]> = {
  // Core product design
  product: ["product design", "product thinking", "product strategy"],
  "product design": [
    "ux",
    "ui",
    "interaction design",
    "service design",
    "experience design",
    "product strategy",
    "roadmap",
    "mvp",
    "user value",
    "business goals",
  ],
  "product designer": [
    "product design",
    "ux designer",
    "ux/ui",
    "experience designer",
    "interaction designer",
  ],

  // UX / UX research
  ux: [
    "user experience",
    "interaction design",
    "information architecture",
    "ia",
    "journey map",
    "user flow",
    "user journey",
    "wireframes",
    "prototyping",
    "usability testing",
    "heuristic evaluation",
  ],
  "user experience": [
    "ux",
    "ux design",
    "experience design",
    "interaction design",
  ],
  uxr: [
    "user research",
    "ux research",
    "research synthesis",
    "interviews",
    "usability testing",
    "surveys",
    "field studies",
    "diary studies",
  ],
  "user research": [
    "uxr",
    "ux research",
    "interviews",
    "usability testing",
    "surveys",
    "participant recruiting",
    "research synthesis",
  ],

  // UI / visual
  ui: [
    "user interface",
    "ui design",
    "interface design",
    "visual design",
    "visual hierarchy",
    "layout",
    "typography",
    "component library",
    "design system",
  ],
  "user interface": [
    "ui",
    "interface",
    "interaction",
    "controls",
    "navigation",
  ],
  "visual design": [
    "ui",
    "branding",
    "typography",
    "color system",
    "grid",
    "layout",
  ],

  // Artifacts & methods
  wireframe: ["wireframes", "lo-fi", "low fidelity", "user flow"],
  wireframes: ["wireframe", "flows", "screens"],
  prototype: [
    "prototyping",
    "prototype",
    "clickthrough",
    "interactive mockup",
    "figma prototype",
  ],
  "design system": [
    "component library",
    "tokens",
    "style guide",
    "ui kit",
    "reusable components",
  ],
  "user flow": ["flows", "journey", "journey map", "task flow"],
  "journey map": ["customer journey", "service blueprint", "experience map"],
  "information architecture": ["ia", "site map", "navigation", "content structure"],

  // Evaluation & strategy
  "usability testing": [
    "usability study",
    "user testing",
    "think aloud",
    "user feedback",
  ],
  "heuristic evaluation": ["ux audit", "expert review"],
  "product strategy": [
    "vision",
    "roadmap",
    "north star",
    "kpis",
    "metrics",
    "positioning",
  ],
  roadmap: ["product roadmap", "milestones", "release plan"],

  // Business / outcomes / AI & data (resume-aligned, business-owner vocabulary)
  "business outcomes": [
    "roi",
    "impact",
    "results",
    "metrics",
    "kpis",
    "business goals",
    "outcomes",
  ],
  roi: [
    "return on investment",
    "business impact",
    "value created",
    "efficiency gains",
  ],
  "digital transformation": [
    "enterprise modernization",
    "cloud migration",
    "data platforms",
    "workflow automation",
  ],
  "stakeholder alignment": [
    "executive buy-in",
    "cross-functional alignment",
    "workshops",
    "facilitation",
  ],
  "team leadership": [
    "managing designers",
    "mentorship",
    "creative direction",
    "cross-functional collaboration",
  ],
  "business intelligence": [
    "bi",
    "analytics",
    "dashboards",
    "data visualization",
    "esg",
  ],
  analytics: [
    "data",
    "dashboard",
    "dashboards",
    "insights",
    "metrics",
    "reporting",
  ],
  "data visualization": [
    "dashboards",
    "charts",
    "graphs",
    "bi",
    "analytics",
  ],
  "ai strategy": [
    "ai roadmap",
    "llm",
    "generative ai",
    "prompt engineering",
    "ml model",
    "machine learning",
    "rag",
    "retrieval augmented generation",
  ],
  "ai interaction design": [
    "conversation design",
    "chatbot",
    "voice assistant",
    "character ai",
    "multimodal interaction",
  ],
  "emerging technology": [
    "ai",
    "llm",
    "ar",
    "vr",
    "xr",
    "computer vision",
    "spatial computing",
  ],
  "systems thinking": [
    "systems design",
    "service design",
    "ecosystem map",
    "end-to-end journey",
  ],

  // Tools (helpful for portfolio narratives)
  figma: ["design system", "components", "prototyping"],
  "design ops": ["design operations", "workflow", "governance", "process"],
};

export function expandTokens(tokens: string[]): string[] {
  const extra: string[] = [];

  const joined = tokens.join(" ");
  for (const [phrase, synonyms] of Object.entries(QUERY_SYNONYMS)) {
    if (phrase.includes(" ") && joined.includes(phrase)) {
      extra.push(...synonyms);
    }
  }

  for (const t of tokens) {
    const synonyms = QUERY_SYNONYMS[t];
    if (synonyms) extra.push(...synonyms);
  }

  return Array.from(new Set([...tokens, ...extra]));
}
