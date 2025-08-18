import React from "react";

export default function FeaturedWork() {
  const items = [
    { slug: 'maia-experience', title: 'The MAIA Experience', blurb: 'A real‑time AI character that sees, listens, and converses—designed for small‑group awe; part of a larger game.', img: '/images/maia.png', tags: ['AI','Live','Social Play'] },
    { slug: 'chalknotes', title: 'ChalkNotes', blurb: 'XR authoring + trails that turn city blocks into collaborative story maps.', img: '/images/chalknotes.png', tags: ['XR','Platform','Co‑creation'] },
    { slug: 'fairyland', title: 'FAIRYLAND', blurb: 'A living storyworld connecting live shows, web, and AI—built for community.', img: '/images/fairyland.gif', tags: ['Transmedia','AI','Community'] },
    { slug: 'emily-was-here', title: 'Emily Was Here', blurb: 'A poetic audio walk across the Brooklyn Bridge—intimate, shared, memorable.', img: '/images/emily.png', tags: ['Audio','Place','Togetherness'] },
  ];
  return (
    <section id="work" className="py-20 space-y-8" aria-label="Selected work">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected work</h2>
        <a href="/work" className="text-sm underline text-neutral-300 hover:text-white">View all →</a>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((p)=> (
          <a key={p.slug} href={`/work/${p.slug}`} className="group block overflow-hidden border border-neutral-900 rounded-2xl hover:border-neutral-700 transition">
            <div className="aspect-[16/10] bg-neutral-900 overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-neutral-400 text-sm">{p.blurb}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {p.tags.map(t => <span key={t} className="text-[11px] border border-neutral-700 px-2 py-0.5 rounded-full text-neutral-300">{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}