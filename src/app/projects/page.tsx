'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'GraphView',
    summary: 'A real-time protein interaction network visualizer for drug discovery.',
    tech: ['React', 'D3.js', 'Next.js', 'Neo4j'],
    github: 'https://github.com/your-username/graphview',
    demo: 'https://graphview.vercel.app',
  },
  {
    title: 'EVE Trade Optimizer',
    summary: 'An ISK-maximizing tool using regional arbitrage and API scraping in EVE Online.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Plotly'],
    github: 'https://github.com/your-username/eve-trade-optimizer',
    demo: '',
  },
  {
    title: 'PromptClips',
    summary: 'AI-generated TikTok short editor with subtitle automation and meme templates.',
    tech: ['Next.js', 'FFmpeg', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com/your-username/promptclips',
    demo: 'https://promptclips.vercel.app',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-20 px-8 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-16">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-auto pt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaGithub />
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
