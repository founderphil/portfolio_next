// data/projects.ts — merged from phillipolarte.com and grad portfolio
// Replace image paths with your own. Keep slugs stable.

export type Project = {
  title: string;
  subtitle?: string;
  link?: string;
  img: string;
  tags: string[];
  overview: string;
  role: string;
  outcomes: string[];
  why: string;
  snapshots: string[];
  featured?: boolean;
  outcomesVisual?: string;
  processVisual?: string;
  overviewVisual?: string;
};

export const projects: Record<string, Project> = {
  // --- Flagship / main projects ---
  maia: {
    title: 'The MAIA Experience',
    subtitle: 'AI Character UX/UI',
    link: 'https://the-maia-experience.framer.ai/',
    img: '/images/maia.png',
    tags: ['AI', 'Conversational', 'Installation', 'Live', 'Social Play'],
    overview: `An intimate, 10‑minute encounter with MAIA — a real‑time AI character that sees, listens, and converses with visitors inside Prof. Dupin’s study as a pre‑show to a larger story world.`,
    role: `MS in Emerging Tech, AI & Design at NYU. Solo experience and systems lead across narrative interaction, dialogue pacing, interaction rules, and the full AI pipeline (STT/CV/LLM/TTS) integrated with lighting and set cues.`,
    outcomes: [
      'Delivered a 10‑minute, high‑intimacy AI encounter with full production design for dozens of participants.',
      'Established a reusable AI‑character pipeline for future activations (STT → CV → LLM → TTS → show control).',
      'Defined patterns for emotional, theatrical AI interaction that can transfer to other storyworlds and products.'
    ],
    why: `Natural language interaction is emerging as a primary UX surface. MAIA explores how AI characters can carry narrative and emotional weight in physical space, blending computation with performance while keeping latency low and privacy in the room.`,
    snapshots: [
      'Full production design for Prof. Dupin’s office.',
      'Dialogue state diagram with triggers.',
      'System schematic (camera → STT → LLM → TTS → led lighting).',
      'Participant privacy agency to prevent responses to go to the cloud.',
      'Local LLM running on edge device for low latency.'
    ],
    featured: true,
    outcomesVisual: '/images/maia_outcomes.png',
    processVisual: '/images/maia_process.png',
    overviewVisual: '/images/maia_overview.png'
  },

  fairyland: {
    title: 'FAIRYLAND',
    subtitle: 'Live + AI Storyworld',
    link: 'https://fairylandshow.com/',
    img: '/images/fairyland.png',
    tags: ['Transmedia', 'AI', 'Experience Design', 'Storyworld'],
    overview: `A living storyworld that connects audiences across live performance, web, film, and AI‑driven character encounters so engagement continues before, during, and after the show.`,
    role: `Head of Product UX, Designer, Creative Technologist & Full Stack Engineer — owned experience strategy across mediums, ticketing/onboarding UX, and cohesion between live and digital touchpoints.`,
    outcomes: [
      'Unified offline/online story loops across channels into a single cohesive journey.',
      'Designed frameworks for pre‑ and post‑show engagement that increased repeat touchpoints with fans.',
      'Codified brand and story cohesion across media so teams could ship faster without fragmenting the world.',
      'Drove strong ticketing and onboarding conversion through streamlined flows and clear narrative framing.'
    ],
    why: `Demonstrates systems‑level product design for hybrid media where narrative continuity drives retention.`,
    snapshots: [
      'Experience map linking live to digital follow‑ups.',
      'Ticketing & onboarding flows.',
      'AI chat UI tied to lore.',
      'System map of narrative loops.'
    ],
    featured: true,
    outcomesVisual: '/images/fairyland_outcomes.png',
    processVisual: '/images/fairyland_process.png',
    overviewVisual: '/images/fairyland_overview.png'
  },

  chalknotes: {
    title: 'ChalkNotes',
    subtitle: 'XR Storytelling Platform',
    link: 'https://chalknotes.com/',
    img: '/images/chalknotes.png',
    tags: ['XR', 'Audio', 'AR', 'No-Code', 'NYC', 'Social Play'],
    overview: `A mixed‑reality audio‑AR platform that lets creators drop stories onto real‑world maps and audiences discover them in situ. Piloted as a multi‑stop narrative trail in Shubert Alley in NYC.`,
    role: `Lead Product Designer & UX Strategist — owned end‑to‑end design across no‑code authoring and mobile discovery. Led research, prototyping, and usability testing with creators and audiences in uncontrolled real‑world environments.`,
    outcomes: [
      'Launched a self‑guided XR trail in the Broadway Theater District entitled "Wherefore Art Thou Juliet?"',
      'Observed repeat engagement across multi‑stop narratives and dwell time at key locations.',
      'Generated interest from festivals and cultural orgs for future commissions.',
      'Codified best practices for mixed‑reality experience design in open, unpredictable environments.'
    ],
    why: `Proved that non‑technical creators can author place‑based XR stories and audiences will explore them at their own pace.`,
    snapshots: [
      'Low‑fidelity map‑pin authoring prototypes.',
      'Final web interface showing story‑pin configuration.',
      'Mobile map/listen flow.'
    ],
    outcomesVisual: '/images/chalknotes_outcomes.png',
    processVisual: '/images/chalknotes_process.png',
    overviewVisual: '/images/chalknotes_overview.png',
    featured: true
  },

  emily_was_here: {
    title: 'Emily Was Here — Brooklyn Bridge Experience',
    subtitle: 'Geospatial Mixed Reality',
    img: '/images/emily.png',
    tags: ['Audio', 'AR', 'XR', 'Place‑based', 'NYC'],
    overview: `A poetic, GPS‑triggered audio walk across the Brooklyn Bridge. Voiceover, poetry, and ambient sound transform the crossing into an intimate narrative.`,
    role: `XR Experience Designer & Technical Director — route design, GPS trigger pacing, and sound layering using the ChalkNotes stack.`,
    outcomes: [
      'Shipped an on‑demand, location‑locked experience with no live performers or on‑site staff.',
      'Demonstrated emotional impact through sound‑first design, measured through qualitative feedback and replays.',
      'Extended the ChalkNotes architecture for more precise environmental and route control.'
    ],
    why: `Explores low‑friction, site‑specific storytelling that scales to city landmarks without heavy reliance on the device in the user's hand.`,
    snapshots: [
      'GPS triggers for location-based map content.',
      'Audio layering storyboard.',
      'Bridge video with participants in flow.',
      'Original scripts adapted for the Brooklyn Bridge historical landmark.'
    ],
    outcomesVisual: '/images/bridge_outcomes.png',
    processVisual: '/images/bridge_process.png',
    overviewVisual: '/images/bridge_overview.png',
    featured: true
  },

  // --- Additional portfolio projects (site) ---
  juliet_wherefore: {
    title: 'Wherefore Art Thou, Juliet?',
    img: '/images/juliet.png',
    tags: ['XR', 'Location‑based', 'Audio', 'Theatre District', 'NYC'],
    overview: `A choose‑your‑own‑adventure mixed‑reality journey across NYC’s Theater District, guided by interviews with Broadway performers.`,
    role: `Experience Designer — route/stop design, narrative framing, and mobile listening UX.`,
    outcomes: [
      'Piloted narrative traversal across multiple neighborhood stops.',
      'Prototyped creator‑led location authoring patterns.',
      'Documented accessibility and safety considerations for street‑level play.'
    ],
    why: `Tests scalable patterns for cultural‑district storytelling that can be authored by small teams.`,
    snapshots: [
      'Route map and stop list.',
      'Interview‑driven script fragments.',
      'Street‑level interaction captures.',
      'Authoring UI frames.'
    ],
    featured: false
  },

  esg_materiality: {
    title: 'ESG Materiality App',
    img: '/images/esg.png',
    tags: ['Enterprise', 'Data', 'Web App', 'ESG'],
    overview: `A web app to capture, prioritize, and aggregate ESG topics for global organizations, modeling impact trajectories over the next decade.`,
    role: `Lead Product/UX — research synthesis, information architecture, dashboards, and scenario modeling UX.`,
    outcomes: [
      'Unified survey inputs and topic scoring into a single workflow.',
      'Enabled strategy teams to compare present vs. future materiality.',
      'Improved clarity for stakeholder reporting.'
    ],
    why: `Turns abstract ESG frameworks into actionable, comparable productized workflows.`,
    snapshots: [
      'Materiality matrix explorations.',
      'Topic scoring UI.',
      'Executive dashboard frames.',
      'Export/report concepts.'
    ],
    featured: false
  },

  internal_ops_ford: {
    title: 'Internal Ops UX — Ford Foundation',
    img: '/images/ford_ops.png',
    tags: ['NLP', 'BI', 'Search', 'Enterprise'],
    overview: `Usability study and new BI tools across ~80 years of grantmaking artifacts; applied NLP to improve discovery and sense‑making.`,
    role: `Lead UX & Research — stakeholder interviews, IA, search/retrieval UX, and internal repo relaunch.`,
    outcomes: [
      'Consolidated multiple repositories into a single source of truth.',
      'Introduced NLP‑assisted search facets and document “about‑ness”.',
      'Increased internal findability for program officers.'
    ],
    why: `Brings modern retrieval patterns to legacy knowledge at institutional scale.`,
    snapshots: [
      'Usability maps and task flows.',
      'Search faceting & results views.',
      'Doc detail page with NLP highlights.',
      'Information architecture artifacts.'
    ],
    featured: false
  },

    // --- Grad portfolio (playful experiments & R&D) ---
  grad_labs: {
    title: 'Creative Labs',
    img: '/images/creative_labs.png',
    tags: ['Interactive', 'Light', 'Installation', 'Play'],
    overview: `A series of experimental installations exploring light, space, and interaction design through playful systems at NYU.`,
    role: `Designer & Engineer — ideation, prototyping, fabrication, and interaction design for physical installations.`,
    outcomes: [
      'Developed multiple interactive light installations using projection mapping and LED technologies.',
      'Explored user interaction patterns through light and spatial design.',
      'Documented installation processes and user engagement.'
    ],
    why: `Investigates the intersection of light, space, and user interaction through hands-on experimentation.`,
    snapshots: ['Installation photos', 'Projection mapping tests', 'Interaction diagrams', 'User engagement captures'
    ],
    featured: false
  },
};

export const allTags = Array.from(new Set(Object.values(projects).flatMap(p => p.tags))).sort();
