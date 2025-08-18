"use client";
import Link from 'next/link';
import WorkConstellation from '@/components/WorkConstellation';
import TagBar from '@/components/TagBar';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import FaceDotsExperience from '@/components/FaceDotsExperience';
import { useState } from 'react';

export default function Page() {
  const [showDots, setShowDots] = useState(true);
  const [fadeInContent, setFadeInContent] = useState(false);
  const featured = projects.filter(p => p.featured);

  function handleEnter() {
    setShowDots(false);
    setTimeout(() => setFadeInContent(true), 100); 
  }

  return showDots ? (
    <FaceDotsExperience onEnter={handleEnter} />
  ) : (
    <div
      className="py-16 space-y-20"
      style={{
        opacity: fadeInContent ? 1 : 0,
        transition: 'opacity 1.2s',
      }}
    >
      <header className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          Product Design · AI · Mixed Reality
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">
          I design and ship story-driven systems where <b>AI, XR, and data</b> meet real people.
          NYC-based. Available for <b>Staff/Lead Product Design</b> roles & select collaborations.
        </p>
      </header>

      <section aria-label="Constellation">
        <WorkConstellation />
      </section>

      <section aria-label="Featured Work" className="space-y-10">
        <h2 className="text-2xl font-medium">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <div><Link href="/work" className="underline">View all work →</Link></div>
      </section>

      <section aria-label="Contact" className="pt-10">
        <a href="mailto:phil@olartedesign.com" className="inline-block underline">
          Email me
        </a>
      </section>
    </div>
  );
}
