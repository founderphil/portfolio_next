export const projects = [
  {
    slug: 'maia-experience',
    title: 'The MAIA Experience',
    kicker: 'Multi-sensory AI performance; real-time STT, CV, and voice.',
    tags: ['AI','XR','Live'],
    thumb: '/images/maia.jpg',
    featured: true
  },
  {
    slug: 'chalknotes',
    title: 'ChalkNotes',
    kicker: 'Mixed-reality authoring & discovery platform.',
    tags: ['XR','Platform','Creator'],
    thumb: '/images/chalknotes.jpg',
    featured: true
  },
  {
    slug: 'emily-was-here',
    title: 'Emily Was Here',
    kicker: 'Self-guided XR audio-AR walk across Brooklyn Bridge.',
    tags: ['XR','Audio AR'],
    thumb: '/images/emily.jpg',
    featured: true
  },
  {
    slug: 'fairyland',
    title: 'FAIRYLAND',
    kicker: 'Transmedia UX/tech lead for live+digital world.',
    tags: ['Transmedia','AI','Experience Design'],
    thumb: '/images/fairyland.jpg',
    featured: true
  },
  // ...add more projects as needed
];

export const allTags = Array.from(new Set(projects.flatMap(p=>p.tags))).sort();
