import Link from 'next/link';

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/work/${project.slug}`} className="group block border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition">
      <div className="aspect-[16/10] bg-neutral-900 overflow-hidden">
        {/* replace with next/image and your actual thumbnail paths */}
        <img src={project.thumb} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="text-neutral-400 text-sm">{project.kicker}</p>
        <div className="flex gap-2 pt-2 flex-wrap">{project.tags.map((t:string)=><span key={t} className="text-xs border border-neutral-700 px-2 py-0.5 rounded-full">{t}</span>)}</div>
      </div>
    </Link>
  );
}
