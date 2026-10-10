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
  processLabel?: string;
  processTitle?: string;
  processCaption?: string;
  processAlt?: string;
  overviewVisual?: string;
  featuredVideo?: string;
  architectureDesc?: string;
  teamSize?: string;
  technicalOverview?: string;
  designDesc?: string;
  uxVisual?: string;
  roleTitle?: string;
  decisions?: { title: string; body: string }[];
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
      "Replaced a dense, text-heavy results view with an organized layout that reveals findings in chunks, so executives read the story first and the evidence on demand.",
      "Introduced source attribution where none existed: every derived fact links back to its origin in the deck, and can be clarified at any point.",
      "Redesigned the upload and analysis flow with confidence scoring, so users could see how solid each extracted fact was before acting on it.",
      "Replaced an overlapping, non-MECE navigation model with a cleaner mental model of how the product organizes what it found.",
      "Designed a side-panel collaborator that edits the results as you talk to it, a mixed-initiative pattern rather than a bolt-on chatbot."
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
    decisions: [
      {
        "title": "Make AI findings inspectable",
        "body": "I moved the interface from a wall of generated prose to findings revealed in layers, with source attribution and confidence cues. Founder and user feedback showed that people needed to understand where a claim came from before acting on it."
      },
      {
        "title": "Let people revise the findings",
        "body": "I designed the conversational side panel to change the results, rather than only answer questions about them. This kept the executive involved in shaping the data without altering the story, commit their own time sensitive information, and made the AI’s output something they could question and refine."
      }
    ],
    roleTitle: "AI Interaction Design Lead",
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
    featured: true,
    decisions: [
      {
        "title": "Turn repeated consulting work into a shared product",
        "body": "I led the team toward a unified platform that structures research and aggregates findings across projects. The aim was to make complex ESG information useful for both the consultants doing the analysis and the clients making strategic decisions."
      },
      {
        "title": "Make priorities something people can explore",
        "body": "I replaced static tables with an interactive materiality matrix. People could adjust topic priorities and explore scenarios while a consistent layout kept more than 50 data points scannable."
      },{
        "title": "Predicting future ESG scenarios",
        "body": "I developed a business intelligence tool to forecast potential ESG outcomes based on current trends and data. This allowed stakeholders to anticipate and prepare for future challenges and opportunities, while a consistent layout kept more than 50 data points scannable."
      }
    ],
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
    decisions: [
      {
        "title": "Keep the story connected to the place",
        "body": "I made location-triggered audio the primary experience, with the map and AR available when needed. This let visitors pay attention to the bridge rather than continually operate a screen."
      },
      {
        "title": "Ship a focused product that could be reused",
        "body": "I rebuilt the concept as a lightweight app with a single-purchase model and a web continuation. Separating the story, route, audio, and branding from the app shell made the work reusable without carrying the overhead of a full creator platform."
      }
    ],
  },

  maia: {
    title: 'The MAIA Experience',
    subtitle: 'Private Embodied AI · Research & Design Engineering',
    link: 'https://the-maia-experience.framer.ai/',
    img: '/images/maia.png',
    tags: ['GenAI', 'Voice UI', 'Python', 'LLM', 'Latency Masking'],
    overview: `My NYU Tandon master’s capstone explored how people experience privacy and trust with embodied AI. I designed and built a locally hosted character that sees, listens, and converses in a physical story world, and evaluated the experience with 37 participants. The project connects AI engineering with interaction design and live experience.`,
    role: "NYU Tandon master’s capstone. Lead designer and engineer for the embodied AI experience: experience design, prompt engineering, the multilayered real-time pipeline, and the operational interface. Evaluated the experience with 37 participants.",
      outcomes: [
      "Reduced response time from around ten seconds to approximately 200 milliseconds to three seconds by overlapping inference with scripted elements in a multilayered pipeline.",
      "Designed 'thinking state' animations that maintained narrative immersion during processing.",
      "Personalized interaction pacing and conversation based on discussion with AI.",
      "Processed voice data locally to support privacy in the live AI experience.",
      "Produced personalized encounters and AI-generated physical mementos based on visitor input."
    ],
    why: "A ten-second wait disrupted the human quality of the encounter. I needed to improve response time while preserving the pacing, privacy, and trust of a live conversation with an embodied AI character.",
    architectureDesc: "A locally hosted multimodal stack combining computer vision, speech recognition, a language model, and voice synthesis. I engineered a multilayered pipeline that allowed inference to run while other scripted elements were running, bringing response times from around ten seconds to approximately 200 milliseconds to three seconds. A custom Python backend coordinated the experience, and an operational interface gave me control of the AI, audio, vision, and lighting.",
    key_components: [
      "Immersive production design that established the story world and the character’s believability.",
      "Dialogue states changed with audio and visual triggers. (camera → STT → LLM → TTS → led lighting).",
      "Overlapping inference and scripted elements to support conversational pacing.",
      "Privacy controls that prevented responses from being automatically saved to the cloud."
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
    overviewVisual: '/images/MAIA_overview.png',
    decisions: [
      {
        "title": "Replace a sequential wait with overlapping work",
        "body": "The first version took around ten seconds to respond, which did not support the human quality of the encounter. I engineered a multilayered pipeline so inference could run while other scripted elements were running. Response times came down to approximately 200 milliseconds to three seconds, depending on the interaction."
      },
      {
        "title": "Treat privacy and trust as experience decisions",
        "body": "I chose local processing and designed listening and thinking cues into the physical experience. The goal was for participants to understand the character’s behavior and retain agency while I evaluated usability, privacy, and trust with 37 participants."
      }
    ],
    roleTitle: "Lead Designer & Engineer",
  },

  aether: {
    title: 'AETHER',
    subtitle: 'Off-Broadway Immersive Production · Physical AI',
    link: 'https://aether-show.com/',
    img: '/images/aether_orb.jpg',
    tags: ['Experience Architecture', 'Physical Computing', 'ESP32 / IoT', 'Generative Narrative', 'Direction', 'P&L'],
    overview: `A live immersive off-Broadway production merging performance, original film, music, and retro-futurist interactive installations into a personalized journey. Every guest left with a story generated from what they actually did in the space. Produced by Storyverse, the studio I co-founded.`,
    role: "Founder, Executive Producer & Technical Director. Led the whole 28-person production across creative, technical, and operational disciplines, owning strategy, budget, financial forecasts, hiring, partnerships, and delivery. Invented, designed, and built the guest-facing interaction layer. Led specialist collaborators, including the ML engineer responsible for the Raspberry Pi fleet, telemetry fabric, and network infrastructure.",
    outcomes: [
      "Grew daily revenue fivefold within six weeks. Interactive social-media activations linked to the story and experience helped build word of mouth.",
      "Executive produced a 28-person company across performance, film, music, design, engineering, and production, from first rehearsal to sold-out run.",
      "Designed and built wireless light orbs carried by each character, with ESP32s inside reporting guest activity to the network through NPC card taps. Each orb had a scripted moment where it came to life through fluctuations in brightness.",
      "Built the AI \"hive mind\" that consumed the interaction stream and generated a personal story for each guest from their choices during the show.",
      "Ran a networked fleet of installations nightly (CRT video cluster, phonebooth, arcade, projector) with live telemetry, so the show could be diagnosed and tuned live during and between performances."
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
    designDesc: "Producing AETHER meant treating a 28-person company like a product team with a ship date. As executive producer, I led the whole production, including the guest journey, technology, marketing direction, finances, hiring, budgeting, forecasting and delivery. I worked with the director and specialist leads to bring each discipline into a shared production plan, and personally invented and built the interaction layer.\n\n    The orb was the central interface decision. A screen in the guests' hands would have broken the world, so the interface became light. Each character carried an orb; when a guest tapped their card with that character, the orb registered the encounter and the network knew. Every orb also had one scripted moment where it came to life, its brightness fluctuating as if breathing, which turned a piece of hardware into a story beat. This continued the \"invisible interface\" thinking from MAIA: the technology is present but never asks to be looked at.\n\n    The hive mind closed the loop. By the end of a performance, the network held a record of every encounter each guest had chosen. The AI read that record and wrote them a story that was theirs, not a template with their name inserted. The design challenge was less the generation itself than the constraints around it: the story had to stay inside the world's lore, reflect what the guest actually did, and hold up to the guest who had just lived it.",
    uxVisual: '/images/aether_ui.jpg',
    featured: true,
    decisions: [
      {
        "title": "Choose ideas that could earn their place in the production",
        "body": "I weighed visual impact and audience tests alongside budget, a favorable financial forecast, and the time left before opening. Working with creative and technical collaborators, I explored options and advanced ideas that were compelling, feasible, and solid in practice."
      },
      {
        "title": "Treat procurement as part of the interaction design",
        "body": "Visitor passes depended on NFC cards manufactured in China. I considered delivery timing and tariffs alongside the intended guest experience, because a working interaction had to arrive in time for the show. A shared checklist and delegated ownership kept the dependencies visible."
      },
      {
        "title": "Use partnerships to make constrained ideas possible",
        "body": "When the budget limited fabrication options, I brought in partners. I designed custom spheres using Autodesk tools and collaborated with NYU on fabrication, connecting the desired physical experience with available skills and resources."
      },
      {
        "title": "Lead through specialist insight and shared decisions",
        "body": "I led 28 people across executive, creative, technical, and production roles. I hired skilled contractors I could trust, gathered signals from people closest to the work, and set priorities from a view of the whole production. Once we reached a decision together, I delegated delivery and trusted the team to execute."
      }
    ],
    roleTitle: "Executive Producer & Technical Director",
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
    overviewVisual: '/images/FAIRYLAND_overview.png',
    decisions: [
      {
        "title": "Make the digital experience part of the story",
        "body": "I treated onboarding and ticketing as the start of the audience journey, rather than a separate transaction. The web experience introduced the world before guests entered the venue and continued it afterward."
      },
      {
        "title": "Give the production a shared source of truth",
        "body": "I connected the live and digital touchpoints through a shared story database and consistent interaction patterns. This helped design, development, and performance teams work toward the same narrative."
      }
    ],
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
    featured: false,
    decisions: [
      {
        "title": "Use audio to reduce screen dependence",
        "body": "Field research and usability testing informed an audio-first experience with high-contrast controls. The resulting interaction model reduced screen time by 60% while people explored real places."
      },
      {
        "title": "Design location triggers for real-world uncertainty",
        "body": "I used broader audio geofences rather than requiring precise visual anchors. This accounted for GPS drift and made the interaction less dependent on someone holding a phone in exactly the right position."
      }
    ],
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
    featured: false,
    decisions: [
      {
        "title": "Let the neighborhood shape the journey",
        "body": "I used a route with multiple stops and interviews with Broadway performers to connect narrative choices to physical places. Mobile listening and street-level accessibility and safety considerations informed the experience."
      }
    ],
  },

  tau_innovations: {
    "title": "TAU Innovations / Retovian",
    "subtitle": "Field Research · Productivity & Provenance",
    "img": "/images/retovian/dashboard-factory.jpg",
    "tags": [
        "Product Leadership",
        "Innovation",
        "Field Research",
        "Supply Chain",
        "Provenance",
        "Enterprise UX"
    ],
    "overview": "At TAU Investment Management, I led TAU Innovations and developed Retovian, a working production-tracking and supply-chain transparency product. We replaced paper-based factory records with simple tablet inputs over 3G and dashboards for production visibility. Field research in Southeast Asia and Africa connected productivity, item provenance, and the information needs of factory owners and brands.",
    "role": "Head of TAU Innovations · Lead Product Designer (2013–2016) — led field research and product development, connecting productivity and provenance needs with practical interfaces and technical constraints.",
    "why": "How could a supply-chain product help people understand productivity and item provenance while remaining usable in environments with limited connectivity and little prior tablet experience?",
    "designDesc": "The factories we studied operated through paper records: production quantities, material information, and test reports lived on sheets and cards. The challenge was to capture useful information digitally without imposing an interface that got in the way of production.\n\nI built a simple tablet interface for production-line tracking over a 3G signal, connected to a dashboard for factory owners. I worked and coded among the women on the factory floor, refining the product within the environment where it would be used. The photographs show Retovian after it was built and operating.\n\nThe planning extended across inventory, orders, manufacturing stages, and item provenance: how materials and their origins could remain connected to products and become useful information for brands further along the chain.\n\nAs an innovation hub, we also tested sensor devices in Bangladesh and explored blockchain. Those experiments were not fully implemented in the deployed product. The delivered Retovian experience centered on digital worker inputs and production visibility.",
    "outcomes": [
      "Built and operated Retovian’s tablet production-tracking interface and factory dashboard in an African factory.",
      "Replaced paper-based production inputs with a simple digital interface designed for a 3G connection.",
      "Connected field research on production and item provenance with the information needs of factory owners and brands.",
      "Tested sensor applications and explored blockchain as separate innovation experiments; these were not fully implemented in the Retovian deployment."
    ],
    "key_components": [
      "Production-line tablet inputs over 3G",
      "Factory-owner production dashboard",
      "Inventory, orders, and provenance planning",
      "Field research and on-site development"
    ],
    processVisual: '/images/tau_innovations.svg',
    processLabel: 'Innovation pathways',
    processTitle: 'From discovery to provenance',
    processCaption: 'Fig 1.0 — Innovation process',
    processAlt: 'Industry innovation discovery leads to field research, branches into location-tagged live sensor audit data, blockchain contracts, and an operational transparency platform, then converges on field testing and singular item ESG impact and provenance.',
    architectureDesc: 'Industry innovation discovery guided field research into factory operations and supply-chain information needs. The research informed three innovation pathways: location-tagged live sensor audit data, blockchain contracts, and an operational transparency platform. The pathways converged on field testing and the goal of understanding singular item ESG impact and provenance across the chain. Retovian’s operational platform was deployed; sensor and blockchain work remained exploratory.',
    "featured": true,
    decisions: [
      {
        "title": "Replace paper at the point where work happened",
        "body": "The factories we studied relied on paper records. I prioritized a simple production-line tablet interface that workers could use during the work itself, over a 3G connection. Digital inputs fed a dashboard so factory owners could see production activity without relying solely on paper aggregation."
      },
      {
        "title": "Develop the product inside its operating environment",
        "body": "I worked and coded alongside women on the factory floor. That proximity connected the interface to actual production routines, limited connectivity, and people with little tablet experience. The laptop dashboard and tablet inputs shown here were built and operating in an African factory."
      },
      {
        "title": "Separate the deployed product from exploratory technology",
        "body": "TAU Innovations also tested sensor applications in Bangladesh and explored blockchain for provenance. These were experiments within the innovation hub, not fully implemented components of the Retovian deployment. I kept the delivered product focused on usable digital inputs and production visibility."
      }
    ],
    roleTitle: "Head of TAU Innovations · Lead Product Designer",
    gallery: [
      {
        "src": "/images/retovian/dashboard-factory.jpg",
        "type": "image",
        "caption": "Retovian’s dashboard running on a laptop among sewing machines in an African factory."
      },
      {
        "src": "/images/retovian/tablet-production.jpg",
        "type": "image",
        "caption": "The production-line tablet interface alongside garments and paper labels, built for use over a 3G connection."
      },
      {
        "src": "/images/retovian/coding-factory.jpg",
        "type": "image",
        "caption": "Developing Retovian on the factory floor alongside the women using the production workflow."
      },
      {
        "src": "/images/retovian/workflow-planning.jpg",
        "type": "image",
        "caption": "Whiteboard planning across materials, manufacturing stages, order progress, and factory and brand views. These notes include both product plans and exploratory ideas."
      },
      {
        "src": "/images/retovian/provenance-planning.jpg",
        "type": "image",
        "caption": "Planning how materials, parts, suppliers, and orders could connect through a product’s provenance."
      },
      {
        "src": "/images/retovian/innovation-planning.jpg",
        "type": "image",
        "caption": "Innovation-hub planning for factory and brand needs, including proposed sensor and provenance experiments."
      },
      {
        "src": "/images/retovian/paper-machine-record.jpg",
        "type": "image",
        "caption": "A handwritten machine record illustrating the paper-based information practices encountered during fieldwork."
      },
      {
        "src": "/images/retovian/paper-test-report.jpg",
        "type": "image",
        "caption": "A paper fabric laboratory report: material, order, and quality information held in a physical document."
      },
      {
        "src": "/images/retovian/production-workflow.jpg",
        "type": "image",
        "caption": "Observing the physical production workflow that digital inputs needed to fit."
      }
    ],
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
    
    featured: false,
    decisions: [
      {
        "title": "Support discovery beyond keyword search",
        "body": "I designed taxonomy, facets, and discovery workflows to help grantmakers understand what grants were about and find relationships across institutional knowledge. I partnered with visiting Google researchers to evaluate machine learning and semantic search, translating the possibilities into tools for nontechnical staff."
      },
      {
        "title": "Make adoption part of the transformation",
        "body": "Research and workflow improvements were accompanied by training workshops. The goal was to make institutional knowledge usable in daily work, contributing to a tenfold increase in adoption."
      }
    ],
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
    featured: false,
    decisions: [
      {
        "title": "Explore physical interaction through working installations",
        "body": "I used light, projection, and fabrication to investigate how people respond to interactive environments. Building the installations gave me a way to observe interaction in physical space and document what happened."
      }
    ],
  },
};

/** Strips inline [label](/path) link markup down to its label, for plain-text contexts like cards. */
export const plainCopy = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

export const allTags = Array.from(new Set(Object.values(projects).flatMap(p => p.tags))).sort();
