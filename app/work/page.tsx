'use client';
import { useState } from 'react';
import TagBar from '@/components/TagBar';
import ProjectCard from '@/components/ProjectCard';
import { projects, allTags } from '@/data/projects';

export default function WorkPage() {
  const [active, setActive] = useState<string[]>([]);
  const filtered = active.length ? projects.filter(p => active.every(t => p.tags.includes(t))) : projects;

  return (
    <div className="py-16 space-y-10">
      <h1 className="text-4xl font-semibold">Work</h1>
      <TagBar tags={allTags} active={active} onToggle={(t)=>setActive(prev=>prev.includes(t)?prev.filter(x=>x!==t):[...prev,t])}/>
      <div className="grid md:grid-cols-3 gap-8">{filtered.map(p => <ProjectCard key={p.slug} project={p}/>)}</div>
    </div>
  );
}
