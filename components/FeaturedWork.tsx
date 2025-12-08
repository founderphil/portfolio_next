import React from "react";

export default function FeaturedWork({ featured = [] }: { featured?: any[] }) {
  return (
    <section id="work" className="py-10 space-y-8" aria-label="Selected work">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected work</h2>
        <a href="/work" className="text-sm underline text-neutral-300 hover:text-white">View all →</a>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {featured.map((p)=> (
          <a key={p.slug} href={`/work/${p.slug}`} className="group block overflow-hidden border border-neutral-900 rounded-2xl hover:border-neutral-700 transition">
            <div className="aspect-[16/10] bg-neutral-900 overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <h4 className="text-lg font-medium">{p.subtitle}</h4>
              <p className="text-neutral-400 text-sm">{p.overview}</p>
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