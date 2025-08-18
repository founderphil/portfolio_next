import React from "react";

export default function Hero() {
  return (
    <section className="pt-16 md:pt-24 pb-10 space-y-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[.2em] text-neutral-400">Product Design · UX · AI · Creative Technology</p>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          I design <span className="text-white">social play</span>—systems where people feel <span className="text-white">together</span>.
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
          From AI characters to XR trails and mission-driven products, I craft simple mechanics that spark co‑presence, co‑creation, and delight—then engineer them into scalable products.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="#work" className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:opacity-90 transition">See social play in action</a>
        <a href="#contact" className="px-5 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-500 transition">Let's Collaborate</a>
      </div>
    </section>
  );
}