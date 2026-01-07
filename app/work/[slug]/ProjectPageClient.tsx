"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Target, Layers, Zap, ExternalLink, Layout } from 'lucide-react';
import type { projects } from '@/data/projects';

type Project = (typeof projects)[string];

type Props = {
  project: Project;
  slug: string;
};

export default function ProjectPageClient({ project, slug }: Props) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = (src?: string | null) => {
    if (src) setLightboxSrc(src);
  };

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-purple-500/30">
      {/* GLOBAL NAV (Back) */}
      <nav className="fixed top-6 left-6 z-50 mix-blend-difference">
        <Link
          href="/work"
          className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> BACK_TO_INDEX
        </Link>
      </nav>

      {/* 1. TECHNICAL HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] border-b border-gray-800">
        {/* Left: Data Context */}
        <div className="flex flex-col justify-center p-8 lg:p-20 border-r border-gray-800">
          <div className="mb-6">
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">
              CASE_ID: {slug.toUpperCase()}
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 text-white">{project.title}</h1>

          <p className="text-lg text-gray-400 max-w-md leading-relaxed mb-12">{project.overview}</p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-px bg-gray-800 border border-gray-800 font-mono text-sm">
            {/* Row 1: Role & Domain */}
            <div className="bg-[#0a0a0a] p-4">
              <span className="block text-gray-500 text-xs mb-1">ROLE</span>
              {project.role.split('—')[0]}
            </div>
            <div className="bg-[#0a0a0a] p-4">
              <span className="block text-gray-500 text-xs mb-1">DOMAIN</span>
              {project.subtitle}
            </div>

            {/* Row 2: Stack */}
            <div className="bg-[#0a0a0a] p-4 col-span-2">
              <span className="block text-gray-500 text-xs mb-1">STACK</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map(tag => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 bg-gray-900 border border-gray-700 rounded text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 3: Live Link (NEW) */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a0a0a] p-4 col-span-2 hover:bg-[#111] transition-colors group flex items-center justify-between cursor-pointer"
              >
                <div>
                  <span className="block text-gray-500 text-xs mb-1">DEPLOYMENT</span>
                  <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                    {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </span>
                </div>
                <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
              </a>
            )}
          </div>
        </div>

        {/* Right: Visual Hero */}
        <div className="relative bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
          {project.featuredVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
              src={project.featuredVideo}
            />
          ) : (
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            />
          )}

          {/* Overlay Tech Pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
        </div>
      </section>

      {/* 2. THE CONSTRAINT (The "Why") */}
      <section className="py-32 px-6 lg:px-20 border-b border-gray-800 bg-[#080808]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 text-purple-400 font-mono text-xs uppercase tracking-widest">
            <Target size={14} />
            The Challenge
          </div>
          <h2 className="text-3xl lg:text-5xl font-medium leading-tight text-gray-100">"{project.why}"</h2>
        </div>
      </section>

      {/* 3. SYSTEM ARCHITECTURE (Refined) */}
      {project.processVisual && (
        <section className="py-24 px-6 lg:px-20 border-b border-gray-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Left: Explanation */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4 text-purple-400 font-mono text-xs uppercase tracking-widest">
                <Layers size={14} />
                System Architecture
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">How it Works</h3>

              {/* DYNAMIC TEXT: No longer static boilerplate */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {project.architectureDesc ||
                  'A custom data pipeline designed to handle high-fidelity interactions with minimal latency.'}
              </p>

              {/* THE LEGEND: Styles the list to look like diagram annotations */}
              <div className="border-t border-gray-800 pt-6">
                <span className="block font-mono text-xs text-gray-500 mb-4 uppercase">Key Components</span>
                <ul className="space-y-3 font-mono text-xs text-gray-400">
                  {project.key_components.slice(0, 4).map((snap, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-gray-800 text-purple-400 text-[10px] border border-gray-700">
                        {i + 1}
                      </span>
                      <span className="leading-5">{snap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: The Diagram */}
            <button
              type="button"
              onClick={() => openLightbox(project.processVisual)}
              className="lg:col-span-2 bg-[#111] border border-gray-800 p-2 rounded-sm relative group focus:outline-none"
            >
              <img
                src={project.processVisual}
                alt="System Architecture Diagram"
                className="w-full h-auto opacity-90 invert-[.05] group-hover:opacity-100 transition-opacity cursor-zoom-in"
              />

              {/* Technical Caption */}
              <div className="p-3 border-t border-gray-800 font-mono text-[10px] text-gray-500 flex justify-between uppercase tracking-wider">
                <span>Fig 1.0 — Data Flow</span>
                <span>/images/{slug}_arch.png</span>
              </div>
            </button>
          </div>
        </section>
      )}

      {/* 4. THE PRODUCT SOLUTION (UX/UI Layer) */}
      <section className="py-24 px-6 lg:px-20 border-b border-gray-800 bg-[#080808]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
          
          {/* Left: Design Narrative */}
          <div>
            <div className="flex items-center gap-3 mb-6 text-blue-400 font-mono text-xs uppercase tracking-widest">
              <Layout size={14} /> 
              UX & Interaction Layer
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              Designing the Interface
            </h3>
            
            <p className="text-lg text-gray-400 whitespace-pre-line leading-relaxed mb-8">
              {project.designDesc || "Translating complex system logic into intuitive user controls."}
            </p>
          </div>

          {/* Right: The UI Visual */}
          <div className="relative group">
            {project.uxVisual ? (
              <button
                type="button"
                onClick={() => openLightbox(project.uxVisual)}
                className="block focus:outline-none"
              >
                <img 
                  src={project.uxVisual} 
                  alt="Product Interface Design" 
                  className="w-full h-auto shadow-2xl border border-gray-800 rounded-sm cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
            ) : (
              // Fallback placeholder if image missing
              <div className="aspect-video bg-[#111] border border-gray-800 flex items-center justify-center text-gray-600 font-mono text-xs">
                UI_VISUAL_PENDING
              </div>
            )}
            
            {/* Decorative Caption */}
            <div className="absolute -bottom-6 -right-6 font-mono text-xs text-gray-600 hidden lg:block">
              // INTERFACE_V1.0
            </div>
          </div>

        </div>
      </section>

      {/* 5. OUTCOMES & IMPACT */}
      <section className="grid lg:grid-cols-2 border-b border-gray-800">
        {/* Visual Outcome */}
        <div className="bg-[#0a0a0a] border-r border-gray-800 min-h-[50vh] flex flex-col items-center justify-center gap-8 p-12">
          {project.outcomesVisual ? (
            <button
              type="button"
              onClick={() => openLightbox(project.outcomesVisual)}
              className="group w-full max-w-3xl focus:outline-none"
            >
              <img
                src={project.outcomesVisual}
                className="shadow-2xl border border-gray-800 w-full object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.02]"
                alt={`${project.title} outcome visual 1`}
              />
            </button>
          ) : (
            <div className="font-mono text-gray-700">NO_VISUAL_DATA</div>
          )}
          {project.outcomesVisual2 ? (
            <button
              type="button"
              onClick={() => openLightbox(project.outcomesVisual2)}
              className="group w-full max-w-3xl focus:outline-none"
            >
              <img
                src={project.outcomesVisual2}
                className="shadow-2xl border border-gray-800 w-full object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.02]"
                alt={`${project.title} outcome visual 2`}
              />
            </button>
          ) : (
            <div className="font-mono text-gray-700">NO_VISUAL_DATA</div>
          )}
        </div>

        {/* Text Outcome */}
        <div className="p-12 lg:p-24 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6 text-green-400 font-mono text-xs uppercase tracking-widest">
            <Zap size={14} />
            Outcomes & Impact
          </div>
          <ul className="space-y-8">
            {project.outcomes.map((outcome, i) => (
              <li key={i} className="flex gap-4 group">
                <span className="font-mono text-gray-600 group-hover:text-white transition-colors">0{i + 1}</span>
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">{outcome}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER NAV */}
      <div className="py-20 text-center">
        <Link
          href="/work"
          className="inline-block border border-gray-700 hover:border-white text-gray-400 hover:text-white px-8 py-3 rounded-full font-mono text-sm transition-all"
        >
          VIEW_ALL_PROJECTS
        </Link>
      </div>

      {/* Lightbox Overlay */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 font-mono text-xs text-gray-400 hover:text-white tracking-widest"
          >
            CLOSE ✕
          </button>
          <img
            src={lightboxSrc}
            className="max-h-[85vh] max-w-[90vw] rounded border border-gray-700 shadow-2xl object-contain"
            alt="Expanded visual"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
