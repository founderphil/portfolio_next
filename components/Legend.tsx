import React from "react";

export default function Legend() {
  const items = [
    { label: "Co‑presence", desc: "See others. Move toward. Acknowledge." },
    { label: "Co‑creation", desc: "Make together. Combine. Remix." },
    { label: "Moments of flair", desc: "Give the room reasons to cheer." },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.label} className="border border-neutral-900 rounded-2xl p-4 bg-neutral-950/50">
          <p className="font-medium">{it.label}</p>
          <p className="text-neutral-400 text-sm">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}