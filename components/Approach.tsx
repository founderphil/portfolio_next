import React from "react";

export default function Approach() {
  const pillars = [
    { title: 'Co‑presence', body: 'Make people aware of each other. Use spatial cues, subtle signals, and “we” feedback.' },
    { title: 'Co‑creation', body: 'Give simple tools to make together. Reward remixing. Celebrate small wins often.' },
    { title: 'Performance', body: 'Design for moments worth showing. Light‑touch spectacle that amplifies the group.' },
  ];
  return (
    <section id="approach" className="py-20 space-y-8" aria-label="Approach">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Approach</h2>
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
            <li>Product framing & outcome‑first case building</li>
            <li>UX for AI agents & conversational systems</li>
            <li>Multiplayer & co‑located interaction patterns</li>
            <li>XR prototyping, audio‑AR, spatial storytelling</li>
            <li>Design systems & front‑of‑frontend engineering</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-900 p-5">
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">Tooling</p>
          <ul className="space-y-1 text-neutral-300 text-sm list-disc list-inside">
            <li>Figma, Framer, After Effects</li>
            <li>Next.js, React, Tailwind</li>
            <li>OpenCV, MediaPipe, TTS/STT, LLM orchestration</li>
            <li>Web Audio, Canvas, lightweight GLSL</li>
            <li>Firebase, Vercel, basic AWS/GCP</li>
          </ul>
        </div>
      </div>
    </section>
  );
}