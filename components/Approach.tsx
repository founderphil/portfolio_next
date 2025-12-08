import React from "react";

export default function Approach() {
  const pillars = [
    { 
      title: 'Systems First', 
      body: 'Zoom out before zooming in. Map incentives, constraints, and feedback loops so solutions play nicely across the full ecosystem.' 
    },
    { 
      title: 'Human‑Centered', 
      body: 'Start from real people, not features. Prioritize clarity, control, and trust so products feel intuitive, respectful, and empowering.' 
    },
    { 
      title: 'Outcome‑Driven', 
      body: 'Align craft to business and user outcomes. Ship lean experiments, measure impact, and iterate quickly without losing the story.' 
    },
  ];
  return (
    <section id="approach" className="py-0 space-y-8" aria-label="Approach">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">My Approach</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map(p => (
          <div key={p.title} className="rounded-2xl border border-neutral-900 p-5 bg-neutral-950/50">
            <p className="font-medium mb-1">{p.title}</p>
            <p className="text-neutral-400 text-sm">{p.body}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-neutral-900 p-5">
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">Capabilities</p>
          <ul className="space-y-1 text-neutral-300 text-sm list-disc list-inside">
            <li>Problem framing, vision setting & narrative decks</li>
            <li>End‑to‑end product design from discovery to launch</li>
            <li>Service blueprints, systems and interaction design</li>
            <li>Design systems, component libraries & design ops</li>
            <li>Partnering with product, eng & research to ship</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-900 p-5">
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">Tooling</p>
          <ul className="space-y-1 text-neutral-300 text-sm list-disc list-inside">
            <li>Figma, Framer, Adobe Creative Cloud, VS Code</li>
            <li>Next.js, React, Tailwind, React Native, OpenCV, RAG</li>
            <li>Prototyping across web, mobile & mixed fidelity</li>
            <li>Analytics, experimentation & qualitative research tools</li>
            <li>Working fluently with modern web stacks</li>
          </ul>
        </div>
      </div>
    </section>
  );
}