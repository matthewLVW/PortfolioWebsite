'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

// ----------------------------------------------------------------------
// Data Types
// ----------------------------------------------------------------------
interface Project {
  title: string;
  summary: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  media?: { type: 'image' | 'video'; src: string; alt?: string };
}

// ----------------------------------------------------------------------
// Projects
// ----------------------------------------------------------------------
const projects: Project[] = [
  {
    title: 'AI Explainer‑Video Pipeline',
    summary:
      'One‑click system that converts a sentence prompt into a caption‑perfect TikTok: GPT writes the script, ElevenLabs clones voices, MoviePy splices clips, and FFmpeg burns word‑level subtitles—all in under 90 seconds.',
    highlights: [
      'Serverless FFmpeg farm renders 1080p shorts for <0.3¢ each',
      'Voice chain: EQ → compression → RMS normalisation, preserving runtime',
      'Generates WebVTT + SRT captions for instant cross‑platform reuse',
    ],
    tech: ['Python', 'MoviePy', 'FFmpeg', 'ElevenLabs', 'GPT‑4o', 'TailwindCSS'],
    github: 'https://github.com/your-username/ai-video-pipeline',
    demo: 'https://ai-video.demo',
    media: { type: 'video', src: '/media/ai-video-demo.mp4' },
  },
  {
    title: 'Biological Link‑Prediction Study',
    summary:
      'Bench‑tested five link‑prediction algorithms—Jaccard, Adamic/Adar, and three Katz‑based meta methods—across four undirected PPI and gene‑regulatory graphs. Provided the first side‑by‑side comparison of social‑network heuristics inside sparse biological topologies.',
    highlights: [
      'Selected four biology graphs (yeast, worm x 2, malaria) from ICON/CommunityFitNet',
      'Hand‑coded clustering + Katz predictors in pure Python / NetworkX',
      'Ran 50 shuffled 20 % hold‑outs: Katz‑Clustering beat random by up to 13×, yet trailed social‑graph results—proof that biology needs custom models',
    ],
    tech: ['Python', 'NetworkX', 'NumPy', 'Pandas', 'scikit‑learn', 'PyTorch‑Geometric'],
    github: 'https://github.com/your-username/bio-link-pred',
    demo: '',
    media: { type: 'image', src: '/media/bio-link-results.png', alt: 'Katz vs. Jaccard performance chart' },
  },
  {
    title: 'Movie Recommender — k‑NN vs. Bipartite Graph',
    summary:
      'Implemented and compared two recommenders on MovieLens 100K: user‑based k‑NN collaborative filtering versus a bipartite user–movie graph with Louvain community detection. Measured rating RMSE and genre diversity to see which delivers the best balance of accuracy and discovery.',
    highlights: [
      'Grid‑searched k and similarity on k‑NN; best single layer model reached RMSE ≈ 0.91 on movie ratings out of 5',
      'Built 100 K‑edge bipartite graph and drove recs from Louvain taste clusters',
      'Graph model raised genre diversity 15 %, whereas k‑NN edged it on RMSE',
    ],
    tech: ['Python', 'scikit‑learn', 'Surprise', 'NetworkX', 'Pandas'],
    github: 'https://github.com/your-username/movie-layers-audit',
    demo: 'https://movie-audit.demo',
    media: { type: 'image', src: '/media/movie-layer-view.png', alt: 'Layer contribution treemap' },
  },
];

// ----------------------------------------------------------------------
// Card Component
// ----------------------------------------------------------------------
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col">
      {project.media && (
        <div className="mb-6 rounded-lg overflow-hidden">
          {project.media.type === 'image' ? (
            <Image
              src={project.media.src}
              alt={project.media.alt ?? project.title}
              width={640}
              height={360}
              className="w-full h-56 object-cover"
            />
          ) : (
            <video src={project.media.src} controls className="w-full h-56 object-cover" />
          )}
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.summary}</p>
      <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-gray-600 dark:text-gray-400">
        {project.highlights.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tag, i) => (
          <span
            key={i}
            className="bg-gray-100 dark:bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-6 mt-auto pt-4 text-sm font-medium">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
            <FaGithub /> Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
            <FaExternalLinkAlt /> Demo
          </a>
        )}
      </div>
    </div>
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
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
