import React, { useEffect, useRef, useState } from "react";
import FaceDotsExperience from "./FaceDotsExperience";

export default function Hero() {
  return (
    <section className="pt-14 md:pt-20 pb-1 space-y-10">
      <div className="grid gap-10 md:grid-cols-1 items-start">
        <div className="space-y-8 ">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-400">
            Product Leadership · AI · Generative Interface Design · Storytelling
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
            Product Designer &amp; Design Engineer for the AI era.
          </h1>
          <p className="text-base md:text-lg text-neutral-300 max-w-4xl">
            I lead innovation across AI, enterprise software, and immersive live experiences—from research and strategy to working products.
            I’m an inventor at heart: I find new uses for technology, test what is feasible, and design and build the interactions that make it useful.
            I bring 15 years of experience and an M.S. in Emerging Technologies (AI/ML & HCI) from NYU Tandon.
          </p>         
          
          {/* 
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
          
          <div className="flex flex-wrap gap-3 pt-2">
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


      </div>
    </section>
  );
}
