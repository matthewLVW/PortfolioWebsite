import Link from "next/link";
import HeroSystem from "@/components/HeroSystem";
import WorkGrid from "@/components/WorkGrid";
import Contact from "@/components/Contact";
import { Arrow } from "@/components/Icons";
import { experience } from "@/content/projects";

export default function Home() {
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="role-label">Software engineer</p>
          <h1 id="intro-title">
            Matthew
            <br />
            Van Winkle
          </h1>
          <p className="hero-description">
            I build reliable data systems and make complex technology clear. My
            background spans research, software development, and technical
            teaching.
          </p>
          <p className="career-direction">
            Seeking sales &amp; solutions engineering opportunities.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View projects <Arrow />
            </a>
            <Link className="button button-secondary" href="/resume">
              Resume
            </Link>
          </div>
        </div>
        <HeroSystem />
      </section>
      <section id="work" className="work-section shell">
        <WorkGrid />
      </section>
      <section id="experience" className="experience-section shell">
        <div className="section-heading">
          <h2>Experience</h2>
          <Link className="text-link" href="/resume">
            Full resume <Arrow />
          </Link>
        </div>
        <div className="experience-overview">
          {experience.map((item) => (
            <article key={item.role}>
              <div>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-date">{item.date}</p>
              </div>
              <p className="experience-summary">{item.summary}</p>
            </article>
          ))}
        </div>
        <p className="education">
          <strong>B.A. Computer Science</strong>
          <span>University of Colorado Boulder · 2025</span>
        </p>
      </section>
      <Contact />
    </main>
  );
}
