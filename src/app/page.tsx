"use client";
import React, { useMemo, useState } from "react";
import type { ProjectContent } from "@/content/projects";
import { projects, focusAreas, highlightStats } from "@/content/projects";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;

// --- Project Card -----------------------------------------------------
interface ProjectCardProps {
  project: ProjectContent;
  onSelect: (slug: string) => void;
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const stackLine = useMemo(
    () => project.stack.join(" | "),
    [project.stack]
  );

  return (
    <button
      onClick={() => onSelect(project.slug)}
      className="w-full sm:w-80 bg-black/80 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:shadow-lg hover:scale-[1.02] transition duration-200 text-left"
    >
      {project.thumbnail && (
        <img
          src={withBasePath(project.thumbnail)}
          alt={project.title}
          className="w-full h-40 object-cover rounded mb-4"
        />
      )}
      <h4 className="text-lg font-semibold text-white mb-1">{project.title}</h4>
      <p className="text-gray-300 text-sm mb-2">{project.summary}</p>
      <span className="text-xs text-indigo-200">{stackLine}</span>
    </button>
  );
}

// --- Modal Detail Widget ----------------------------------------------
interface ProjectModalProps {
  project: ProjectContent;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-auto max-w-3xl w-full mx-4 p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-200 hover:text-white text-2xl"
          aria-label="Close"
        >
          ×
        </button>

        {project.thumbnail && (
          <img
            src={withBasePath(project.thumbnail)}
            alt={`${project.title} thumbnail`}
            className="w-full h-48 object-cover rounded mb-6"
          />
        )}

        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
        <p className="text-gray-200 leading-relaxed mb-6">{project.longSummary}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-indigo-800 px-3 py-1 rounded-full text-indigo-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-5 mb-6">
          <div>
            <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wide mb-2">
              Challenges tackled
            </h3>
            <div className="space-y-3">
              {project.challenges.map((challenge) => (
                <div key={challenge.title} className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="text-white font-semibold text-base mb-1">
                    {challenge.title}
                  </h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {challenge.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wide mb-2">
              What I learned
            </h3>
            <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
              {project.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-sm font-medium"
        >
          View Repository
        </a>
      </div>
    </div>
  );
}

// --- Page ---------------------------------------------------------------
export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = projects.find((p) => p.slug === selected) || null;

  return (
    <>
      <main
        className="min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url("${withBasePath("/bg-tech.jpg")}")` }}
      >
        {/* Hero */}
        <section className="text-center py-16 bg-black/50 px-4">
          <h1 className="text-4xl font-extrabold mb-3">Matthew Van Winkle</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Data engineer delivering trustworthy batch ETL, performant medallion lakehouses, and real-time analytics pipelines ready for stakeholders.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="bg-indigo-700/60 border border-indigo-300/40 px-4 py-2 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlightStats.map((item) => (
              <div
                key={item.metric}
                className="bg-white/10 rounded-lg py-4 px-6 border border-white/10"
              >
                <p className="text-3xl font-bold text-white mb-1">{item.metric}</p>
                <p className="text-sm text-indigo-100">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Projects</h3>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {projects.map((proj) => (
              <ProjectCard key={proj.slug} project={proj} onSelect={setSelected} />
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      {active && <ProjectModal project={active} onClose={() => setSelected(null)} />}
    </>
  );
}
