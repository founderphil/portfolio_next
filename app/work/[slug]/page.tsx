import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectPageClient from './ProjectPageClient';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} slug={params.slug} />;
}