// data/projects.ts — merged from phillipolarte.com and grad portfolio
// Replace image paths with your own. Keep slugs stable.

export type Project = {
  title: string;
  subtitle?: string;
  link?: string;
  img: string;
  animatedCover?: 'boardlens-timeline'; // animated canvas drawn over img
  tags: string[];
  overview: string;
  role: string;
  outcomes: string[];
  why: string;
  key_components: string[];
  featured?: boolean;
  outcomesVisual?: string;
  outcomesVisual2?: string;
  processVisual?: string;
  overviewVisual?: string;
  featuredVideo?: string;
  architectureDesc?: string;
  teamSize?: string;
  technicalOverview?: string;
  designDesc?: string;
  uxVisual?: string;
  codeSnippet?: {
    language: string; // e.g., "json" or "python"
    code: string;     // The actual prompt or logic snippet
    caption: string;  // e.g., "System Prompt Constraints"
  };
  gallery?: {
    src: string;
    type: 'video' | 'image';
    caption: string;
  }[];
};

export const projects: Record<string, Project> = {
  agentic_briefing: {
    title: 'Agentic Board Intelligence',
    subtitle: 'Enterprise Decision Support · Under NDA',
    img: '/images/agentic_briefing.jpg',
    animatedCover: 'boardlens-timeline',
    tags: ['Agentic AI', 'Human-AI Interaction', 'Trust & Transparency', 'Mixed-Initiative UX', 'Enterprise UX'],
    overview: `An agentic decision-support product that reads dense board decks and surfaces the story executives need in order to act. I led the human-AI interaction layer through five UI iterations, from a text-heavy first version to a grounded, chunked, collaborative interface. Client is under NDA: company name and client data are withheld, and screens are cropped to remove identifying details.`,
    role: `AI Interaction Design Lead (contract, Jan–May 2026). Owned the interaction model between executives and the agent: research, information architecture, trust cues, transparency patterns, and five rounds of UI iteration driven by founder and user feedback. Also designed the investor deck and marketing site.`,
    outcomes: [
      'Replaced a dense, text-heavy results view with an organized layout that reveals findings in chunks, so executives read the story first and the evidence on demand.',
      'Introduced source attribution where none existed: every derived fact links back to its origin in the deck, and can be clarified at any point.',
      'Redesigned the upload and analysis flow with confidence scoring, so users could see how solid each extracted fact was before acting on it.',
      'Replaced an overlapping, non-MECE navigation model with a cleaner mental model of how the product organizes what it found.',
      'Designed a side-panel collaborator that edits the results as you talk to it, a mixed-initiative pattern rather than a bolt-on chatbot.',
      'Engagement ended in May 2026 when the company restructured to its two founders; final shipping status is unknown.',
    ],
    why: `A board deck is 80-plus pages of text, tables, and charts. Executives don't want a summary; they want the story, and they need to trust it. The failure modes are opposite and both fatal: over-trust (act on a hallucination) or under-trust (ignore the tool). When I joined, the product had no references, no confidence signals, and an interface that buried findings in prose. The challenge was an interaction layer that brings people closer to the narrative inside the data while keeping every claim grounded and contestable.`,
    architectureDesc: `A retrieval-grounded agent over uploaded board decks. I designed the interaction layer, not the model: how extracted facts are scored, surfaced, sourced, and revised through conversation. Details of the underlying system are withheld under NDA.`,
    key_components: [
      'Chunked, narrative-first results: the story on top, evidence one click below, raw extracted facts below that.',
      'Grounding: every derived fact carries a reference to its source in the deck and can be clarified in place.',
      'Confidence scoring on the upload and analysis flow, replacing an open process with no signal of reliability.',
      'A MECE information architecture replacing an overlapping category model that made results hard to navigate.',
      'Side-panel collaborator: a conversational agent that can change data inside the results as you talk, not just answer questions about them.',
    ],
    designDesc: `The first version I inherited was a wall of words. Findings were correct but unreadable, nothing cited a source, and the navigation model overlapped with itself, so executives could not build a stable mental model of what the product had done with their deck. Feedback from founders and users pointed the same direction: people wanted to know where a claim came from before they would act on it.

    Across five iterations the interface moved from prose to structure. Findings are revealed in chunks, ordered by the story they tell, with the underlying facts one layer down and their source passages one layer below that. I introduced trust cues at each level: a confidence score on every extracted fact from the moment of upload, source attribution on every claim, and an explicit path to clarify anything that looked off. The navigation was rebuilt to be mutually exclusive and collectively exhaustive, so the same finding never appeared under two headings.

    The last major addition was a side-panel collaborator. Earlier versions treated chat as a way to ask questions about the results. I redesigned it as a way to change them: an executive could say "treat the Q3 forecast as provisional" and watch the results update. That shifted the product from a chatbot with a report attached to a mixed-initiative tool where the human and the agent revise the same artifact together.`,
    uxVisual: '/images/agentic_briefing_ui.png',
    processVisual: '/images/agentic_briefing_arch.png',
    featured: true,
  },

  esg_materiality: {
    title: 'ESG Materiality App',
    subtitle: 'Enterprise Product Leadership · ESG Intelligence',
    img: '/images/esg.png',
    tags: ['B2B SaaS', 'Data Viz', 'Complex Workflows', 'Strategy'],
    overview: `Led a 10-person product, design, and engineering team to turn complex ESG research into a unified enterprise platform. The product captures, prioritizes, and aggregates findings so consultants and Fortune 500 clients can explore material issues and plan strategy.`,
    role: `Head of Product, Materiality — led a 10-person product, design, and engineering team; owned research synthesis, information architecture, dashboards, and scenario modeling UX.`,
    outcomes: [
      "Productized a manual consulting service, creating a product that structured internal data.",
      "Unified 5+ disparate data streams into a single 'Materiality Matrix' dashboard.",
      "Reduced stakeholder reporting time by ~40% through automated visualization.",
      "Future proofed the platform for evolving ESG standards and reporting requirements.",
      "Facilitated cross-functional workshops to align on ESG priorities and data strategies.",
      "Created war-game scenarios to model long-term impact of ESG strategies."
    ],
    architectureDesc: "A B2B SaaS architecture transforming unstructured qualitative survey data into a structured SQL schema and quant reporting. The frontend utilizes complex D3.js visualization libraries to render dynamic 'Materiality Matrices,' allowing strategy teams to model risk trajectories in real-time rather than relying on static reports.",
    why: "Consulting data is often trapped in static PDFs. The challenge was transforming abstract strategy frameworks into a dynamic product used by Global 500 that allowed for year-over-year modeling and aggregation of ESG data.",
    key_components: [
      'Materiality topic priority system with unified taxonomy.',
      'New insights and trend discovery from multi-project data aggregation.',
      'Global 500 Executive dashboard protected by role-based access controls.',
      'Topic, Interview & Survey scoring, ingestion and scheduling.',
    ],
    designDesc: "I replaced static tabular data with a dynamic interactive scatter plot. The UX allows users to drag-and-drop 'topics' to reweight their priority, giving strategy teams a tactile way to model 'What-If' scenarios. I designed a rigid grid system to ensure that even when displaying 50+ data points, the dashboard remained scannable and never felt cluttered.",
    uxVisual: "/images/esg_ui.png",
    featuredVideo: '/video/esg_video.mp4',
    outcomesVisual: '/images/esg_outcomes.png',
    outcomesVisual2: '/images/esg_outcomes2.png',
    processVisual: '/images/esg_process.png',
    overviewVisual: '/images/esg_overview.png',
    featured: true
  },

  emily_was_here: {
    title: 'Emily Was Here',
    subtitle: 'Location-Based XR Audio Experience · Solo Build',
    link: 'https://apps.apple.com/us/app/emily-was-here/id6785517773',
    img: '/images/emily_was_here.jpg',
    tags: ['iOS', 'Geo-Triggered Audio', 'Augmented Reality', 'Freemium', 'AI-Assisted Development', 'Solo Shipped'],
    overview: `An immersive audio walk across the Brooklyn Bridge, narrated by Emily Warren Roebling, that reveals each chapter as you reach the place where it happened. Relaunched in August 2026 as a white-label experience template: the ChalkNotes concept rebuilt from the ground up as a lightweight, reusable iOS app. Designed, built, and shipped entirely by me using AI-assisted development end to end.`,
    role: `Designer, developer, and publisher. Owned everything from interaction design to App Store submission: geo-triggered audio playback, AR moments, the freemium model, and the buy-once cross-platform unlock. Built in weeks, solo, as the first product I shipped with an AI-assisted workflow from the first line to the release.`,
    outcomes: [
      'Live on the App Store (v1.0 August 11, v1.1 August 22, 2026) with a full-experience in-app purchase; 5.0 rating at launch.',
      'Buy once, walk anywhere: a single purchase unlocks the full experience on iPhone and in any web browser, so a visitor can start on the bridge and finish at home.',
      'Zero data collection. The app works without accounts or tracking, which simplified both the privacy story and the build.',
      'Turned a single-site experience into a template: the same codebase can be reskinned for another landmark, walk, or venue.',
    ],
    why: `ChalkNotes proved the concept but carried the weight of a platform: a CMS, accounts, creator tools. Most location-based audio experiences don't need any of that. The question was whether one person, with AI-assisted development, could ship a polished geo-aware audio and AR experience with a real business model in weeks rather than quarters, and end up with something reusable.`,
    architectureDesc: `A native iOS app with location-triggered audio chapters along a guided route, AR moments at key stops, a free opening section with a one-time in-app purchase for the full walk, and a web companion unlocked by an access code the app issues after purchase. Built with AI-assisted development throughout: design, code, copy, and store assets.`,
    key_components: [
      'Geo-recognizable audio playback: chapters trigger from position along the route, with a home mode for people who aren\'t on the bridge.',
      'Augmented reality moments layered onto the physical landmark at key stops.',
      'Freemium model: free opening, single in-app purchase for the full experience.',
      'Cross-platform unlock: purchase on iPhone, continue in any browser via an access code.',
      'White-label structure: story, route, audio, and branding separated from the app shell for reuse.',
    ],
    designDesc: `The design constraint was the same one that shaped MAIA and AETHER: the technology should never ask to be looked at. On a bridge, that means the phone stays in the pocket and the audio does the work, with the map and AR available when you want them rather than demanding attention. Chapters trigger where the events happened, so the story and the place stay locked together.

    Shipping it solo with an AI-assisted workflow changed how I think about scope. Things that used to be a sprint (the purchase flow, the cross-platform unlock, the App Store assets) became an afternoon, which meant more of the time went to the walk itself: pacing, narration, where to stop. That's the argument this project makes. A designer who can ship the whole thing gets to spend the saved time on design.`,
    // TODO(phil): supply /images/emily_was_here_ui.png (app screenshot). /images/bridge_ui.png is the old ChalkNotes-era UI if it still applies.
    // uxVisual: '/images/emily_was_here_ui.png',
    featured: true,
  },

  maia: {
    title: 'The MAIA Experience',
    subtitle: 'Private Embodied AI · Research & Design Engineering',
    link: 'https://the-maia-experience.framer.ai/',
    img: '/images/maia.png',
    tags: ['GenAI', 'Voice UI', 'Python', 'LLM', 'Latency Masking'],
    overview: `My NYU Tandon master’s capstone explored how people experience privacy and trust with embodied AI. I designed and built a locally hosted character that sees, listens, and converses in a physical story world, and evaluated the experience with 37 participants. The project connects AI engineering with interaction design and live experience.`,
    role: `M.S. in Emerging Technologies (AI/ML & HCI), NYU. Lead Designer & Engineer. End‑to‑end experience design, LLM prompt engineering, real‑time voice interaction system architecture, and front‑end development for the interactive installation.`,
      outcomes: [
      "Engineered a local-LLM multi-threaded architecture that reduced latency from 10s to <200ms.",
      "Designed 'thinking state' animations that maintained narrative immersion during processing.",
      "Personalized interaction pacing and conversation based on discussion with AI.",
      "Proved viability of 'Privacy-First' AI by processing all voice data locally (no cloud).",
      "Each experience was unique, with no two encounters alike based on visitor input, and take away physical mementos generated by AI character.",
    ],
    why: 'GenAI breaks immersion when latency is high and trust is low. The challenge was designing a "Latency Masking" system and "privacy-first" approach that kept users engaged during the 3-second compute window of early LLMs. Making the AI feel human required more than just dialogue design — it demanded a holistic system that considered pacing, lighting, trust and physical space.',
    architectureDesc: "A local-first stack designed to process voice-to-voice interaction in under 200ms using a quantized Llama model running on my local MacBook Pro M3 Metal/GPU. The system uses a multithreaded architecture to handle audio input (STT), LLM inference, and audio output (TTS) in parallel, minimizing wait times. A custom Python backend orchestrates the flow, while a React frontend manages the technical operating tools. Privacy is ensured by processing all data locally, with no cloud dependencies.",
    key_components: [
      'Immersive production design to establishing world/story and believability.',
      'Dialogue states changed with audio and visual triggers. (camera → STT → LLM → TTS → led lighting).',
      'Multi-threaded local LLM running on edge device for low latency and privacy.',
      'Participant privacy agency UI preventing responses automatically saved to cloud.'
    ],
    designDesc: `Really there were two interfaces: 
    1. The operation of the audio/visual/AI experience.
    2. The live audio chat interface with the AI. 

    To mitigate the 'Uncanny Valley,' I designed the interface to be an invisible layer. Instead of a chat window, the UX relied on LED cues—lighting changes and subtle sound design—to signal the AI's 'listening' and 'thinking' states. This reduced the cognitive load of a standard conversational UI, allowing users to maintain eye contact with the physical avatar.

    The second interface (shown right) is the workspace I custom made to give me operational control of lights, computer vision inputs and outputs, inference, and audio (DAW). The left image is the prototype wireframe and the right is the final product UI.`,
    uxVisual: "/images/maia_ui.png",  
    featured: true,
    featuredVideo: '/video/teaser_MAIA_vertical.mp4',
    outcomesVisual: '/images/MAIA_outcomes.png',
    outcomesVisual2: '/images/MAIA_process.png',
    processVisual: '/images/MAIA_process.png',
    overviewVisual: '/images/MAIA_overview.png'
  },

  aether: {
    title: 'AETHER',
    subtitle: 'Off-Broadway Immersive Production · Physical AI',
    link: 'https://aether-show.com/',
    img: '/images/aether_orb.jpg',
    tags: ['Experience Architecture', 'Physical Computing', 'ESP32 / IoT', 'Generative Narrative', 'Direction', 'P&L'],
    overview: `A live immersive off-Broadway production merging performance, original film, music, and retro-futurist interactive installations into a personalized journey. Every guest left with a story generated from what they actually did in the space. Produced by Storyverse, the studio I co-founded.`,
    role: `Founder, Executive Producer & Technical Director. Ran the business of the show: led a 28-person creative, technical, and production team to a fixed opening date, set the tone for the marketing team, and owned strategy, budget, and P&L. Personally designed and built the guest-facing interactive technology on the show network, working alongside an ML engineer who built the Raspberry Pi fleet, telemetry fabric, and network infrastructure.`,
    outcomes: [
      'Grew revenue 4x within six weeks of launch to roughly $25K per performance, with sold-out houses.',
      'Executive produced a 28-person company across performance, film, music, design, engineering, and production, from first rehearsal to sold-out run.',
      'Designed and built wireless light orbs carried by each character, with ESP32s inside reporting guest activity to the network through NPC card taps. Each orb had a scripted moment where it came to life through fluctuations in brightness.',
      'Built the AI "hive mind" that consumed the interaction stream and generated a personal story for each guest from their choices during the show.',
      'Ran a networked fleet of installations nightly (CRT video cluster, phonebooth, arcade, projector) with live telemetry, so the show could be diagnosed and tuned between performances.',
    ],
    why: `A live show is a product with a launch date, a funnel, and nightly live operations. The harder problem was personalization at theatrical scale: give every guest a story that is genuinely theirs, generated from real interactions in a dark, crowded, retro-futurist space, without a single screen breaking the world.`,
    architectureDesc: `The show ran on a dedicated network with a Raspberry Pi fleet, an MQTT telemetry fabric, and a VPN, built by my ML engineer collaborator (his write-up: vaillant.ai/projects/aether). On top of that layer I built the guest-facing technology: ESP32 orbs carried by characters that reported NPC card taps over the network, the interaction stream those taps produced, and the AI hive mind service that read that stream and wrote each guest a story. Installations on the same fabric included a synchronized CRT video cluster, a phonebooth that triggered environmental effects when lifted, an arcade cabinet reporting scores and endings, and a looping projector.`,
    key_components: [
      'Character orbs: wireless ESP32 light objects, one per character, reporting guest card taps and coming alive on cue through brightness fluctuations.',
      'NPC card taps as the interaction primitive: guests tap a card with a character, and the network records the encounter.',
      'AI hive mind: a service that turns each guest\'s encounter stream into a personal story.',
      'Networked installations: synchronized CRT cluster, phonebooth, arcade, projector, all reporting telemetry.',
      'Digital touchpoints before and after the show that extend the story world beyond the venue.',
    ],
    designDesc: `Producing AETHER meant treating a 28-person company like a product team with a ship date. The show's director owned the performance; I owned everything around it: the guest journey, the technology, the marketing tone, and the business, so that every department was building toward the same picture.

    The orb was the central interface decision. A screen in the guests' hands would have broken the world, so the interface became light. Each character carried an orb; when a guest tapped their card with that character, the orb registered the encounter and the network knew. Every orb also had one scripted moment where it came to life, its brightness fluctuating as if breathing, which turned a piece of hardware into a story beat. This continued the "invisible interface" thinking from MAIA: the technology is present but never asks to be looked at.

    The hive mind closed the loop. By the end of a performance, the network held a record of every encounter each guest had chosen. The AI read that record and wrote them a story that was theirs, not a template with their name inserted. The design challenge was less the generation itself than the constraints around it: the story had to stay inside the world's lore, reflect what the guest actually did, and hold up to the guest who had just lived it.`,
    uxVisual: '/images/aether_ui.jpg',
    featured: true,
    // TODO(phil): supply /video/aether_teaser.mp4 if you have a teaser cut.
    // featuredVideo: '/video/aether_teaser.mp4',
  },

  fairyland: {
    title: 'FAIRYLAND',
    subtitle: 'Multimodal Narrative System',
    link: 'https://fairylandshow.com/',
    img: '/images/fairyland.png',
    tags: ['Multimodal Systems', 'Web App', 'System Design', 'GenAI'],
    overview: `A living storyworld that connects audiences across live performance, web, film, and AI‑driven character encounters so engagement continues before, during, and after the show.`,
    role: `Head of Product UX, Designer, Creative Technologist & Full Stack Engineer — owned experience strategy across mediums, ticketing/onboarding UX, and cohesion between live and digital touchpoints.`,
    outcomes: [
      'Architected a "Story Operating System" that synchronized narrative state across live performance, web, and email, creating a persistent world for the audience.',
      'Designed a narrative-led ticketing flow that converted 20% of web visitors into registered users, and 66% of users into ticket purchasers.',
      'Reduced production fragmentation by building a shared "Story Bible" database that served as the single source of truth for design, dev, and performance teams.',
      'Extended the show’s lifecycle by 4 weeks through a pre-show digital onboarding experience that "primed" the audience before they entered the venue.'
    ],
    why: 'Engagement with live experiences often ends when the curtain falls. The challenge was designing a multimodal system that extended narrative immersion beyond the theater through web and AR.',
    architectureDesc: "A 'Story Operating System' that synchronizes user state across disjointed mediums. The architecture binds a Next.js web onboarding flow, Stripe ticketing API, and live venue entry systems into a single persistent user record, ensuring narrative choices made online trigger specific interactions in the physical venue.",
    key_components: [
      'Experience map linking live to digital follow‑ups.',
      'Ticketing & onboarding flows.',
      'AI chat UI tied to lore.',
      'AI-powered community engagement awareness',
    ],
    featured: true,
    designDesc: `Designing for narrative cohesion across mediums required a unified visual language and interaction patterns. I developed a modular UI system that adapted to both web and mobile contexts, ensuring users felt continuity whether they were engaging with the story online or in-person. The use of consistent typography, color schemes, and iconography reinforced brand identity while facilitating intuitive navigation through complex narrative layers.
    
    The ticketing flow was designed to be more than just a transaction; it was an entry point into the story. By integrating narrative elements into the purchase process, users were 'primed' for the experience ahead, increasing engagement and anticipation.
    
    The web onboarding experience served as a digital prologue, setting the stage for the live performance. Through interactive elements and character-driven content, users were immersed in the story world before stepping into the venue, enhancing overall engagement.
    
    Below is the profile UI that users interacted with during onboarding and post-show follow-ups. It was designed to be a central hub for narrative progression, allowing users to track their journey and access exclusive content tied to their in-show choices.`,
    uxVisual: "/images/FAIRYLAND_UI.png",
    outcomesVisual: '/images/FAIRYLAND_outcomes.png',
    outcomesVisual2: '/images/FAIRYLAND_outcomes2.png',
    processVisual: '/images/FAIRYLAND_process.png',
    overviewVisual: '/images/FAIRYLAND_overview.png'
  },

  chalknotes: {
    title: 'ChalkNotes',
    subtitle: 'Spatial Audio AR Platform',
    link: 'https://chalknotes.com/',
    img: '/images/chalknotes.png',
    tags: ['Spatial Audio', 'AR', 'Product Strategy', 'Mobile', 'No-Code Tools', "React Native", "Figma"],
    overview: `A mixed‑reality audio‑AR platform that lets creators drop stories onto real‑world maps and audiences discover them. Relaunched in 2026 as [Emily Was Here](/work/emily_was_here), a lightweight white-label version of the same idea.`,
    role: `Lead Product Designer, UX Strategist, Engineer Manager. Owned end‑to‑end design across no‑code authoring and mobile discovery. Led research, prototyping, and usability testing with creators and audiences in uncontrolled real‑world environments.`,
    outcomes: [
      "Validated an 'Audio-First' AR interaction model, reducing screen-time during the experience by 60%.",
      "Shipped a 'No-Code' spatial authoring tool allowing creators to place audio without technical skills.",
      "Solved for GPS drift by designing broad 'Audio Geofences' rather than precise visual anchors.",
      "Delivered a seamless user experience that balanced engagement with safety in urban environments.",
      "Codified best practices for mixed‑reality experience design in open, unpredictable environments."
    ],
    why: "Visual AR demands too much attention. The business problem was creating a 'Heads-Up' engagement model that allowed users to consume content while navigating busy city streets.",   
    architectureDesc: "A geospatial audio engine that triggers sound based on GPS radius, utilizing a React Native frontend and a Firebase real-time backend for creator updates. A dual-client ecosystem: a React Native mobile app for geospatial discovery and a React web dashboard for creator administration. The system relies on Firebase NoSQL for real-time authentication and state sync, integrating a web3 'XP' gamification layer to drive physical foot traffic via tokenized collectibles.",
    key_components: [
      'Location-based audio triggers on mobile map.',
      "No-code web authoring tool for spatial story placement.",
      'Content discovery feed with experience previews.',
      'Community engagement features (sharing, reviews).'
    ],
    designDesc: `The core design challenge was 'Heads-Up' usability. I moved the primary interaction controls to the bottom third of the screen (thumb zone) and designed high-contrast, bold typography that remains legible in direct sunlight. The 'Audio Radar' visualization gave users directional feedback without requiring map literacy, solving the 'blue dot' anxiety common in GPS apps.
    
    Below is the augmented reality element activation. Instead of relying on visual markers alone, I designed an audio-centric interface where users hear spatial cues as they approach points of interest. The UI provides subtle visual feedback, but the primary interaction is auditory, allowing users to stay aware of their surroundings while engaging with content.`,
    uxVisual: "/images/chalknotes_ui_grid.png",
    outcomesVisual: '/images/chalknotes_outcomes.png',
    outcomesVisual2: '/images/chalknotes_outcomes2.png',
    processVisual: '/images/chalknotes_process.png',
    overviewVisual: '/images/chalknotes_overview.png',
    featured: false
  },

  juliet_wherefore: {
    title: 'Wherefore Art Thou, Juliet?',
    link: 'https://storyversenyc.com/',
    img: '/images/juliet.png',
    tags: ['XR', 'Location‑based', 'Audio',],
    overview: `A choose‑your‑own‑adventure mixed‑reality journey across NYC’s Theater District, guided by interviews with Broadway performers.`,
    role: `Experience Designer — route/stop design, narrative framing, and mobile listening UX.`,
    outcomes: [
      'Piloted narrative traversal across multiple neighborhood stops.',
      'Prototyped creator‑led location authoring patterns.',
      'Documented accessibility and safety considerations for street‑level play.'
    ],
    why: `Tests scalable patterns for cultural‑district storytelling that can be authored by small teams.`,
    key_components: [
      'Route map and stop list.',
      'Interview‑driven script fragments.',
      'Street‑level interaction captures.',
      'Authoring UI frames.'
    ],
    featured: false
  },

  tau_innovations: {
    "title": "TAU Innovations / Retovian",
    "subtitle": "Field Research · Productivity & Provenance",
    "img": "/images/tau_innovations.svg",
    "tags": [
        "Product Leadership",
        "Innovation",
        "Field Research",
        "Supply Chain",
        "Provenance",
        "Enterprise UX"
    ],
    "overview": "At TAU Investment Management, I led TAU Innovations and developed Retovian, a cross-platform supply-chain transparency product. Fieldwork in Southeast Asia and Africa explored how technology could support productivity and connect item provenance with products across the chain. The work translated operating realities into product decisions for limited connectivity and people with little tablet experience.",
    "role": "Head of TAU Innovations · Lead Product Designer (2013–2016) — led field research and product development, connecting productivity and provenance needs with practical interfaces and technical constraints.",
    "why": "How could a supply-chain product help people understand productivity and item provenance while remaining usable in environments with limited connectivity and little prior tablet experience?",
    "designDesc": "I began with fieldwork in Southeast Asia and Africa to understand how people worked, where information was missing, needs of factory owners, the brands that buy from them thousands of miles away, and how items and their origins could be connected across the supply chain. Productivity and transparency were related questions: useful data had to reflect the work happening on the ground.\n\nThose observations informed Retovian, a cross-platform transparency product. My responsibility was to connect the opportunity with an experience that could work in context, accounting for limited connectivity and users with little tablet experience.\n\nThe innovation was in connecting an operational need, information about provenance, and a feasible product approach. This work established a pattern I still use: investigate the environment, identify a useful application for technology, and shape the product around real operating constraints.",
    "outcomes": [
        "Led TAU Innovations and developed Retovian, a cross-platform supply-chain transparency product. A mix of simple manufactuing inputs from workers and sensors turned into advanced factory owner awareness dashboards. Tying production, sensor data and provenance together created a new level of visibility for factory owners and brands.",
        "Conducted field research in Southeast Asia and Africa on productivity, item provenance, and information needs across the chain.",
        "Designed for limited connectivity and people with little tablet experience."
    ],
    "key_components": [
        "Field research in Southeast Asia and Africa",
        "Productivity and information needs",
        "Item provenance across the supply chain",
        "Interfaces suited to connectivity and user constraints"
    ],
    "featured": true
},

  internal_ops_ford: {
    title: 'Knowledge Discovery — Ford Foundation',
    subtitle: 'Information Management · Digital Transformation · Knowledge Discovery',
    img: '/images/ford_ops.png',
    tags: ['NLP', 'Semantic Search', 'Information Architecture', 'Enterprise BI'],
    overview: `Helped grantmakers discover themes and relationships across institutional knowledge. Combined research, information architecture, search redesign, and workflow improvements to increase adoption tenfold, and partnered with visiting Google researchers to evaluate machine learning and semantic search.`,
    role: `Information Management Specialist · Product and UX Design — stakeholder research, information architecture, search redesign, and technology adoption.`,
    why: "Institutional knowledge was trapped in siloed legacy repositories. The challenge was preventing 'organizational amnesia' by transforming 80 years of unstructured PDFs and grant letters into a searchable, semantic database without overwhelming non-technical Program Officers.", 
    outcomes: [
      'Consolidated 4 disparate legacy repositories into a Single Source of Truth for grant history.',
      'Reduced document retrieval time for Program Officers by introducing NLP-driven semantic facets.',
      'Recovered "lost" institutional knowledge by digitizing and tagging 80 years of physical and digital artifacts.',
      'Brought about cross-departmental alignment on knowledge management best practices.'
    ],
    architectureDesc: "A unified knowledge retrieval architecture. We consolidated disparate SQL databases and file servers into a single search index. The pipeline utilized NLP entity extraction to automatically tag documents with 'about-ness' (themes, regions, demographics), enabling semantic retrieval across decades of unstructured text.",
    designDesc: "Designing for 'Sense-Making,' not just search. I moved beyond simple keyword matching to design a faceted discovery interface. The UX introduced 'Topic Clusters' and 'Smart Filters' that allowed officers to drill down by era, grant type, or impact region, reducing the cognitive load of sifting through legal archives.",
    uxVisual: '/images/ford_ops.png', 
    processVisual: '/images/ford_ops_process.png',
    key_components: [
      'Taxonomy & Metadata Schema',
      'Entity Extraction Logic',
      'Intranet/SharePoint as Semantic Search Frontend',
      'Grantmaking data ingestion pipeline'
    ],
    
    featured: false
  },

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
    key_components: ['Installation photos', 'Projection mapping tests', 'Interaction diagrams', 'User engagement captures'
    ],
    featured: false
  },
};

/** Strips inline [label](/path) link markup down to its label, for plain-text contexts like cards. */
export const plainCopy = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

export const allTags = Array.from(new Set(Object.values(projects).flatMap(p => p.tags))).sort();
