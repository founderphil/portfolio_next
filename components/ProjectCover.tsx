import BoardLensTimeline from '@/components/BoardLensTimeline';
import type { Project } from '@/data/projects';

type ProjectCoverProps = {
  project: Pick<Project, 'img' | 'title' | 'animatedCover'>;
  className?: string;
};

/** A project's cover image, with its animated canvas layered on top when it has one. */
export default function ProjectCover({ project, className = '' }: ProjectCoverProps) {
  if (project.animatedCover !== 'boardlens-timeline') {
    return <img src={project.img} alt={project.title} className={className} />;
  }

  // The static image keeps the box's size and shows until the canvas paints over it.
  return (
    <div className={`relative ${className}`}>
      <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
      <BoardLensTimeline />
    </div>
  );
}
