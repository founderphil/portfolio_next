import React from "react";

export default function Legend() {
  const items = [
    { label: "Divergent Thinking", desc: "Crafting new ideas and exploring possibilities." },
    { label: "Co‑creation", desc: "Make together. Combine. Remix." },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((it) => (
        <div key={it.label} className="border border-neutral-900 rounded-2xl p-4 bg-neutral-950/50">
          <p className="font-medium">{it.label}</p>
          <p className="text-neutral-400 text-sm">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}