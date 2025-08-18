import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  //  TODO: expand this with full case study content per project
  return (
    <div className="py-16 space-y-8">
      <h1 className="text-4xl font-semibold">{project.title}</h1>
      <img src={project.thumb} alt={project.title} className="w-full max-w-xl rounded-xl border border-neutral-800" />
      <p className="text-neutral-400 text-lg">{project.kicker}</p>
      <div className="flex gap-2 pt-2 flex-wrap">{project.tags.map((t:string)=><span key={t} className="text-xs border border-neutral-700 px-2 py-0.5 rounded-full">{t}</span>)}</div>
      <div className="mt-8">Full case study coming soon.</div>
    </div>
  );
}
