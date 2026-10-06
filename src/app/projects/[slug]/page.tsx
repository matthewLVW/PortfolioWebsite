import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { Arrow } from "@/components/Icons";
import VideoWalkthrough from "@/components/VideoWalkthrough";
import Contact from "@/components/Contact";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.subtitle ?? "Project",
    description: project?.summary,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main id="main">
      <article className="case-study reading-shell">
        <Link className="back-link" href="/#work">
          ← All projects
        </Link>
        <header className="case-header">
          <h1>{project.subtitle}</h1>
          <p className="case-intro">{project.summary}</p>
          <p className="project-stack">{project.stack.join(" · ")}</p>
          <div className="case-actions">
            <a className="button button-primary" href="#walkthrough">
              Watch demo · {project.videoDuration}
              <Arrow />
            </a>
            <a
              className="button button-secondary"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              View code <Arrow diagonal />
            </a>
          </div>
        </header>
        <div className="case-content">
          <section>
            <h2>The problem</h2>
            <p>{project.challenge}</p>
          </section>
          <section>
            <h2>What I built</h2>
            <ul>
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="tradeoff-box">
            <h2>Key tradeoff</h2>
            <p>{project.tradeoff}</p>
          </section>
        </div>
        <div id="walkthrough">
          <VideoWalkthrough url={project.videoUrl} title={project.subtitle} />
        </div>
        <Link className="text-link case-back" href="/#work">
          Back to projects <Arrow />
        </Link>
      </article>
      <Contact />
    </main>
  );
}
