"use client";
import TagBar from '@/components/TagBar';

const PROJECTS = {
  'chalknotes': {
    title: 'ChalkNotes',
    img: '/images/chalknotes.png',
    tags: ['XR', 'Audio', 'AR', 'No-Code', 'NYC'],
    overview: `ChalkNotes is a mixed-reality audio-AR authoring and discovery platform...`,
    role: `Lead Product Designer & UX Strategist — owned end-to-end design...`,
    outcomes: [
      'First self-guided XR trail launched in Shubert Alley.',
      'Demonstrated sustained user engagement with multi-stop narratives.',
      'Attracted interest from arts festivals and cultural institutions for future commissions.'
    ],
    why: `Proved that immersive tech can be accessible to non-technical creators...`,
    snapshots: [
      'Low-fidelity map-pin authoring prototypes.',
      'Final web interface showing story pin configuration.',
      'Mobile map/listen flow.',
      'Pilot photos with participants in Shubert Alley.'
    ]
  },
  'emily-was-here': {
    title: 'Emily Was Here',
    img: '/images/emily.png',
    tags: ['Audio Walk', 'GPS', 'Brooklyn Bridge', 'Narrative'],
    overview: `Emily Was Here is an augmented audio walk that transforms the Brooklyn Bridge...`,
    role: `Experience Designer & Technical Director — adapted ChalkNotes’ core architecture...`,
    outcomes: [
      'Delivered an intimate, location-locked story that could only be experienced on-site.',
      'Positive participant feedback citing “feeling like the bridge was speaking.”',
      'Showcased how place-specific storytelling can be emotional without visual overload.'
    ],
    why: `Served as a proof-of-concept for scaling location-anchored audio narratives...`,
    snapshots: [
      'GPS trigger map of Brooklyn Bridge route.',
      'Audio layering storyboard (voiceover + environmental cues).',
      'Photos of participants mid-crossing with headphones.',
      'Excerpt of Emily’s script for tone reference.'
    ]
  },
  'maia-experience': {
    title: 'The MAIA Experience',
    img: '/images/maia.png',
    tags: ['AI', 'Immersive', 'LLM', 'Voice Synthesis', 'FAIRYLAND'],
    overview: `The MAIA Experience is a private, multisensory activation in the FAIRYLAND universe...`,
    role: `Lead Product Designer & Creative Technologist — wrote the interaction script...`,
    outcomes: [
      'Sold-out showcases, with participants describing the experience as “alive” and “intimate.”',
      'Established reusable AI character infrastructure for future FAIRYLAND activations.',
      'Demonstrated that conversational AI can be emotional, theatrical, and scalable.'
    ],
    why: `It was the clearest proof yet that AI characters can hold narrative weight...`,
    snapshots: [
      'Set design sketches for Prof. Dupin’s office.',
      'Dialogue state diagram with AI trigger mapping.',
      'Technical pipeline schematic (camera → STT → LLM → TTS → lighting).',
      'Participant feedback quotes.'
    ]
  },
  'fairyland': {
    title: 'FAIRYLAND',
    img: '/images/fairyland.gif',
    tags: ['Transmedia', 'Live', 'AI', 'Web', 'Narrative'],
    overview: `FAIRYLAND is a transmedia narrative world spanning live performances...`,
    role: `Head of Product & Creative Technologist — designed and integrated the UX...`,
    outcomes: [
      '66% ticket conversion from digital touchpoints to sold-out live events.',
      'Created a sustainable loop between live activations, web experiences, and AI interactions.',
      'Established FAIRYLAND as a model for cross-platform immersive storytelling.'
    ],
    why: `Showed how to weave multiple mediums into one living story ecosystem...`,
    snapshots: [
      'Experience map linking live shows to digital follow-up.',
      'Ticketing UX flow wireframes.',
      'AI chat UI connected to FAIRYLAND lore.',
      'System map of narrative loops.'
    ]
  }
};

const IMG_PLACEHOLDERS = [
  "/images/placeholder1.jpg",
  "/images/placeholder2.jpg",
  "/images/placeholder3.jpg",
  "/images/placeholder4.jpg"
];

export default function WorkProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS[params.slug];
  if (!project) return <div>Project not found.</div>;

  return (
    <main className="max-w-2xl mx-auto py-10 px-4 space-y-8">
      {/* Use the project card image as hero */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
        <img src={project.img} alt={`${project.title} hero`} className="w-full h-48 object-cover" />
      </div>
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <TagBar tags={project.tags} active={project.tags} onToggle={() => {}} />

      {/* Image between Overview and Role */}
      <section className="mt-6">
        <h2 className="font-semibold text-lg mb-1">Overview</h2>
        <p className="mb-4">{project.overview}</p>
        <div className="my-6 flex justify-center">
          <img src={IMG_PLACEHOLDERS[1]} alt="Overview visual" className="rounded-xl w-2/3 object-cover shadow" />
        </div>
        <h2 className="font-semibold text-lg mb-1">My Role</h2>
        <p className="mb-4">{project.role}</p>

        {/* Image after Outcomes */}
        <h2 className="font-semibold text-lg mb-1">Outcomes</h2>
        <ul className="list-disc pl-5 mb-4">
          {project.outcomes.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
        <div className="my-6 flex justify-end">
          <img src={IMG_PLACEHOLDERS[2]} alt="Outcomes visual" className="rounded-xl w-1/2 object-cover shadow" />
        </div>

        <h2 className="font-semibold text-lg mb-1">Why It Mattered</h2>
        <p className="mb-4">{project.why}</p>

        {/* Image before Process Snapshots */}
        <div className="my-6 flex justify-start">
          <img src={IMG_PLACEHOLDERS[3]} alt="Process visual" className="rounded-xl w-1/2 object-cover shadow" />
        </div>
        <h2 className="font-semibold text-lg mb-1">Process Snapshots</h2>
        <ul className="list-disc pl-5">
          {project.snapshots.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>
    </main>
  );
}