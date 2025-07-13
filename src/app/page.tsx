"use client";
import React, { useState } from "react";
import Image from "next/image";

// --- Shared Data & Types ---------------------------------------------
interface Project {
  slug: string;
  title: string;
  blurb: string;
  stats: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
  demoImage?: string;
}

const projects: Project[] = [
  {
    slug: "ai-video",
    title: "Automated Explanation Video Pipeline",
    blurb: "Turned “Explain X” prompts into 45s branded explainers, slashing edit time from 4h to 0.",
    stats: "+1000 videos rendered",
    tech: ["Python", "MoviePy", "FFmpeg", "ElevenLabs", "TailwindCSS"],
    problem: "Manual video editing took hours per explainer clip.",
    solution: "Built a serverless FFmpeg pipeline with voice cloning and auto captions.",
    impact: "Rendered 1080p TikToks in under 90s each—100× faster than manual.",
    demoImage: "/thumbnails/ai-video.gif",
  },
  {
    slug: "biological-links",
    title: "Biological Network Link-Prediction",
    blurb: "Bench-tested 5 algorithms on PPI graphs—first side-by-side social-network comparison.",
    stats: "+13× clustering variance improvement",
    tech: ["Python", "NetworkX", "NumPy", "scikit-learn", "PyTorch-Geometric"],
    problem: "Sparse protein networks lacked reliable interaction predictions.",
    solution: "Adapted Katz metrics and trained custom Graph Neural Network.",
    impact: "Achieved AUC +0.12 over baseline on 4 species graphs.",
    demoImage: "/thumbnails/bio-links.png",
  },
  {
    slug: "movie-recommender",
    title: "Movie Recommender — k-NN vs. Bipartite",
    blurb: "Compared k-NN and graph-based recommenders on MovieLens 100K dataset.",
    stats: "RMSE 0.91 vs 0.95 baseline",
    tech: ["Python", "Surprise", "NetworkX", "Pandas"],
    problem: "Standard k-NN struggled with niche discovery and diversity.",
    solution: "Built bipartite graph with Louvain clustering for taste clusters.",
    impact: "Genre diversity +15% while maintaining RMSE < 1.0.",
    demoImage: "/thumbnails/movie-rec.png",
  },
];

// --- Project Card -----------------------------------------------------
interface ProjectCardProps {
  project: Project;
  onSelect: (slug: string) => void;
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      onClick={() => onSelect(project.slug)}
      className="w-full sm:w-80 bg-black/80 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:shadow-lg hover:scale-[1.02] transition duration-200 text-left"
    >
      {project.demoImage && (
        <img src={project.demoImage} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
      )}
      <h4 className="text-lg font-semibold text-white mb-1">{project.title}</h4>
      <p className="text-gray-300 text-sm mb-2">{project.blurb}</p>
      <span className="text-xs text-indigo-200">{project.stats}</span>
    </button>
  );
}

// --- Modal Detail Widget ----------------------------------------------
interface ProjectModalProps {
  project: Project;
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
          ✕
        </button>
        {project.demoImage && (
          <img src={project.demoImage} alt="Demo" className="w-full h-48 object-cover rounded mb-6" />
        )}
        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <h5 className="text-sm font-semibold text-indigo-300 uppercase">Problem</h5>
            <p className="text-gray-200 mt-1">{project.problem}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-indigo-300 uppercase">Solution</h5>
            <p className="text-gray-200 mt-1">{project.solution}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-indigo-300 uppercase">Impact</h5>
            <p className="text-gray-200 mt-1">{project.impact}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-indigo-800 px-3 py-1 rounded-full text-indigo-100"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-block mt-4 text-sm text-white underline"
        >
          Download Full Resume
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
      <main className="min-h-screen bg-[url('/bg-tech.jpg')] bg-cover bg-center text-white">
        {/* Hero */}
        <section className="text-center py-16 bg-black/50">
          <h1 className="text-4xl font-extrabold mb-2">Matthew Van Winkle</h1>
          <p className="text-lg mb-4 max-w-xl mx-auto">
            Fast, Scalable AI & Data Engineering Solutions. Explore my key projects below.
          </p>
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
```
