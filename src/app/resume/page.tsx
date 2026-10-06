import type { Metadata } from "next";
import { experience, projects } from "@/content/projects";
import { Arrow } from "@/components/Icons";
import Link from "next/link";
export const metadata: Metadata = { title: "Resume" };
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export default function ResumePage() {
  return (
    <main id="main" className="resume-page shell">
      <header className="resume-heading">
        <div>
          <h1>Resume</h1>
          <p>Matthew Van Winkle · Software engineer</p>
        </div>
        <a
          className="button button-primary"
          href={`${basePath}/resume.pdf`}
          download="Matthew-Van-Winkle-Resume.pdf"
        >
          Download PDF <Arrow diagonal />
        </a>
      </header>
      <div className="resume-grid">
        <aside>
          <h2>Education</h2>
          <p>
            <strong>B.A. Computer Science</strong>
            <br />
            University of Colorado Boulder
            <br />
            Completed July 2025
          </p>
          <h2>Core tools</h2>
          <p>
            Python · SQL · Kafka · Snowflake · DuckDB · SQLite · Polars · dbt ·
            Playwright · Streamlit
          </p>
          <h2>Contact</h2>
          <a href="mailto:matthewlvw@gmail.com">matthewlvw@gmail.com</a>
        </aside>
        <div>
          <h2>Experience</h2>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.role}>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-date">{item.date}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <h2 className="resume-projects-title">Selected projects</h2>
          {projects.map((project) => (
            <Link
              className="resume-project"
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <span>{project.subtitle}</span>
              <Arrow diagonal />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
