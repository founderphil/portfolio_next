"use client";
import { useState } from "react";
import TagBar from '@/components/TagBar';
import { projects as PROJECTS } from '@/data/projects';
import { useRouter } from 'next/navigation';

export default function WorkProjectPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const project = PROJECTS[params.slug];
  const [modalImg, setModalImg] = useState<string | null>(null);

  if (!project) return <div>Project not found.</div>;

  // Modal component
  const Modal = ({ src, onClose }: { src: string, onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-black shadow hover:bg-gray-200"
          aria-label="Close"
        >
          ×
        </button>
        <img src={src} alt="Modal visual" className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-xl" />
      </div>
    </div>
  );

  return (
    <main className="max-w-2xl mx-auto py-10 px-4 space-y-8">
      {/* Back Button */}
      <button
		onClick={() => router.push('/home')}
        className="mb-4 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
        aria-label="Go back"
      >
        ← Back
      </button>
      {/* Use the project card image as hero */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
        <img
          src={project.img}
          alt={`${project.title} hero`}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => setModalImg(project.img)}
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <TagBar tags={project.tags} active={project.tags} onToggle={() => {}} />
      {/* Project Link at the top */}
      {project.link && (
        <div className="mb-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 underline font-medium"
          >
            View Project Site
          </a>
        </div>
      )}
      <section className="mt-6">
        <h2 className="font-semibold text-lg mb-1">Overview</h2>
        <p className="mb-4">{project.overview}</p>
        {project.overviewVisual && (
          <div className="my-6 flex justify-center">
            <img
              src={project.overviewVisual}
              alt="Overview visual"
              className="rounded-xl w-2/3 object-cover shadow cursor-pointer"
              onClick={() => setModalImg(project.overviewVisual)}
            />
          </div>
        )}
        <h2 className="font-semibold text-lg mb-1">My Role</h2>
        <p className="mb-4">{project.role}</p>

        <h2 className="font-semibold text-lg mb-1">Outcomes</h2>
        <ul className="list-disc pl-5 mb-4">
          {project.outcomes.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
        {project.outcomesVisual && (
          <div className="my-6 flex justify-end">
            <img
              src={project.outcomesVisual}
              alt="Outcomes visual"
              className="rounded-xlw-8/9 object-cover shadow cursor-pointer"
              onClick={() => setModalImg(project.outcomesVisual)}
            />
          </div>
        )}

        <h2 className="font-semibold text-lg mb-1">Why It Mattered</h2>
        <p className="mb-4">{project.why}</p>

        {project.processVisual && (
          <div className="my-6 flex justify-start">
            <img
              src={project.processVisual}
              alt="Process visual"
              className="rounded-xl w-8/9 object-cover shadow cursor-pointer"
              onClick={() => setModalImg(project.processVisual)}
            />
          </div>
        )}
        {/* <h2 className="font-semibold text-lg mb-1">Process Snapshots</h2>
        <ul className="list-disc pl-5">
          {project.snapshots.map((s, i) => <li key={i}>{s}</li>)}
        </ul> */}
      </section>
      {modalImg && <Modal src={modalImg} onClose={() => setModalImg(null)} />}
    </main>
  );
}