import React, { useEffect, useRef, useState } from "react";
import FaceDotsExperience from "./FaceDotsExperience";

export default function Approach() {
    const parallaxRef = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const centerProgress = (rect.top + rect.height / 2) / viewportHeight;
      const translate = (centerProgress - 0.5) * -40; // subtle parallax
      setOffsetY(translate);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillars = [
    { 
      title: 'Human‑Centered First', 
      body: 'Start from real people, not features. Prioritize clarity, control, and trust so products feel intuitive, respectful, and empowering.' 
    },
        { 
      title: 'Scalable Systems', 
      body: 'Zoom out before zooming in. Map incentives, constraints, and feedback loops so solutions play nicely across the full ecosystem.' 
    },
    { 
      title: 'Outcome‑Driven', 
      body: 'Align craft to business and user outcomes. Ship lean experiments, measure impact, and iterate quickly without losing the story.' 
    },
  ];
  return (
    <section id="approach" className="py-0 space-y-8" aria-label="Approach">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">My Approach</h2>
      <div>
          <p className="text-base md:text-lg text-neutral-300 max-w-3xl">
          Design used to be about screens.<br/>
          Now it’s about behavior, systems, and decisions made by machines alongside humans.
          </p>
          <p className="text-base md:text-lg text-neutral-300 max-w-3xl">
          I am a lead product designer with a master’s degree in artificial intelligence and design from NYU, and my work lives in that shift. I’ve studied and built AI models, but more importantly, I’ve designed how people interact with them—how intent is expressed, how trust is earned, and how complex systems remain digestible when intelligence is no longer deterministic.
          </p>
          <p className="text-base md:text-lg text-neutral-300 max-w-3xl">
          My perspective is shaped by working across disciplines that are often siloed: design, product strategy, and applied AI. I’m comfortable discussing model capabilities and limitations with engineers, while translating those realities into interactions that feel clear, ethical, and useful to people. I don’t treat AI as a feature; I treat it as a new design material—one that requires restraint, judgment, and strong product thinking.
          </p>
          <p className="text-base md:text-lg text-neutral-300 max-w-3xl">
          I’ve also been a founder and product lead, which means I design with business reality in mind. I’m used to making decisions when the roadmap is incomplete, the data is imperfect, and the cost of getting it wrong is real. I care about craft, but I’m equally focused on adoption, leverage, and long-term value—building products that scale not just technically, but organizationally.
          </p>
          <p className="text-base md:text-lg text-neutral-300 max-w-3xl">
          I’m looking for a team that understands the next generation of products won’t be defined by interfaces alone, but by how intelligently they respond, adapt, and earn trust over time. If you’re building toward that future, I’d love to be part of the conversation.
          </p>
            <div
              ref={parallaxRef}
              className="relative h-64 md:h-72 lg:h-80 -mx-6 sm:-mx-10 lg:-mx-16 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
              style={{
                transform: `translateY(${offsetY}px)`,
                transition: "transform 0.08s linear",
                background: "white",
              }}
              >
                <FaceDotsExperience />
                          <p className="text-black text-neutral-100 max-w-xs">
                Click. Hold. Drag.
              </p>
            </div>


      </div>
      
      
      
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
            <li>End‑to‑end AI product design from discovery to launch</li>
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
            <li>Analytics, experimentation & research groups facilitation</li>
            <li>Working fluently with AI-integrated web stacks</li>
          </ul>
        </div>
      </div>
    </section>
  );
}