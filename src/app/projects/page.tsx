import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import Contact from "@/components/Contact";
export const metadata: Metadata = { title: "Selected work" };
export default function ProjectsPage() {
  return (
    <main id="main">
      <section className="shell work-section projects-index">
        <WorkGrid standalone />
      </section>
      <Contact />
    </main>
  );
}
