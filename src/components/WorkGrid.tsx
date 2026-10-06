import Link from "next/link";
import { projects } from "@/content/projects";
import { Arrow } from "./Icons";

export default function WorkGrid({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <>
      <div className="section-heading">
        <Heading>Selected projects</Heading>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.slug}>
            <div className="project-name">
              <h3>
                <Link href={`/projects/${project.slug}`}>
                  {project.subtitle}
                </Link>
              </h3>
              <p className="project-stack">{project.stack.join(" · ")}</p>
            </div>
            <p className="project-summary">{project.summary}</p>
            <Link
              className="project-link"
              href={`/projects/${project.slug}`}
              aria-label={`View ${project.subtitle}`}
            >
              View project <Arrow />
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
