import React from "react";
import SocialPlayground from "./SocialPlayground";
import Legend from "./Legend";

export default function Hero() {
  return (
    <section className="pt-14 md:pt-20 pb-1 space-y-10">
      <div className="space-y-8">
        <div className="space-y-8 ">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-400">
            Product Leadership · AI · Experience Design
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
            Product design leader for emerging experiences.
          </h1>
          <p className="text-base md:text-lg text-neutral-300 max-w-3xl">
            I lead cross-disciplinary, international teams to ship AI-first products,
            experiential platforms, and complex systems that feel intuitive, human, and
            commercially meaningful.
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-sm text-neutral-300 pt-10">
            <div className="glass-tile p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400 mb-1">Focus</p>
              <p>AI interaction, cross-platform system thinking, experiential product UX.</p>
            </div>
            <div className="glass-tile p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400 mb-1">Strength</p>
              <p>Turning fuzzy, multi-stakeholder problems into shippable novel experiences.</p>
            </div>
            <div className="glass-tile p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400 mb-1">Working style</p>
              <p>Hands-on dev, collaborative, mentoring designers and engineers alike.</p>
            </div>
          </div>
          
          {/* <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#work"
              className="px-5 py-2.5 rounded-full bg-white/90 text-black font-medium hover:bg-white transition backdrop-blur border border-white/40"
            >
              View selected work
            </a>
            <a
              href="#approach"
              className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition text-neutral-100 backdrop-blur"
            >
              How I lead teams
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-sm text-neutral-300 hover:text-white transition"
            >
              Open to Director-level roles →
            </a>
          </div> */}
        </div>
        {/* <div className="relative max-w-2xl">
          <div className="pointer-events-auto glass-surface p-4 md:p-5">
            <div className="flex items-center justify-between mb-3 text-xs text-neutral-400">
              <span>Interactive: how I think about collaboration</span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>
            <SocialPlayground />
            <div className="mt-4">
              <Legend />
            </div>
          </div>
          <div className="pointer-events-none mt-2 text-xs text-neutral-500">
            Click to add participants. Drag to cluster. Notice patterns.
          </div>
        </div> */}
      </div>
    </section>
  );
}