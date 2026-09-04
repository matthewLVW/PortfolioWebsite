'use client';

import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import type { ProjectContent } from '@/content/projects';
import { projects } from '@/content/projects';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// ----------------------------------------------------------------------
// Card Component
// ----------------------------------------------------------------------
function ProjectCard({ project }: { project: ProjectContent }) {
  return (
    <article className="border border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col">
      <div className="mb-6 rounded-lg overflow-hidden bg-gray-900/40">
        <Image
          src={`${basePath}${project.thumbnail}`}
          alt={`${project.title} visual`}
          width={640}
          height={360}
          className="w-full h-56 object-cover"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.longSummary}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 dark:bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <section className="mb-6 space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-300">Challenges</h3>
        <div className="space-y-3">
          {project.challenges.map((challenge) => (
            <div key={challenge.title} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">{challenge.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{challenge.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-300">What I learned</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
          {project.learned.map((lesson) => (
            <li key={lesson}>{lesson}</li>
          ))}
        </ul>
      </section>

      <div className="flex gap-6 mt-auto pt-4 text-sm font-medium">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <FaGithub /> Repository
        </a>
      </div>
    </article>
  );
}

// ----------------------------------------------------------------------
// Page Component
// ----------------------------------------------------------------------
export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-20 px-8 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-16">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
