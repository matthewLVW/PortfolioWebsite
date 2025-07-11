import Image from "next/image";
import Link from "next/link";

// --- Shared Card Component ---------------------------------------------
interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
}

function ProjectCard({ title, description, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="bg-black/80 backdrop-blur-sm p-8 w-full sm:w-80 rounded-lg border border-white/10 hover:scale-[1.04] hover:brightness-110 hover:shadow-[0_0_18px_rgba(255,255,255,0.3)] transition duration-200 block"
    >
      <h4 className="text-xl font-semibold mb-3 text-white">{title}</h4>
      <p className="text-base text-gray-300 leading-snug">{description}</p>
    </Link>
  );
}

// --- Page ---------------------------------------------------------------
export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full bg-[url('/bg-tech.jpg')] bg-scroll md:bg-fixed bg-cover bg-center text-white flex flex-col">
      {/* Hero */}
      <section className="flex-grow flex items-center justify-center px-6">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-16 md:gap-24">
          {/* Text */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="whitespace-nowrap text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-3">
              Matthew Van Winkle
            </h1>
            <h2 className="text-lg md:text-xl font-semibold mb-5 text-gray-300">
              DATA ENGINEERING & AI MODELING — Fast, Scalable, Clean
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-400 max-w-3xl lg:pr-10">
              I build fast, reliable data pipelines and machine-learning systems that scale. From ETL to predictive models, I turn raw data into streamlined, deployable products.
            </p>
            {/* CTAs */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
              >
                View Resume
              </Link>
              <Link
                href="#contact"
                className="border border-white px-6 py-3 rounded hover:bg-white/10 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0">
            <Image
              src="/headshot.png"
              alt="Matthew Van Winkle"
              width={320}
              height={320}
              sizes="(max-width: 1024px) 200px, 320px"
              className="rounded-xl shadow-lg border-4 border-white/10 object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="w-full px-6 pb-24">
        <div className="w-full max-w-screen-xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            <ProjectCard
              title="Automated Explanation Video Pipeline"
              description="Turns a one‑line prompt into a fully‑branded, 45‑second TikTok: voice‑cloned narration, dynamic captions, and motion graphics—no human in the loop."
              href="/projects/ai-video"
            />
            <ProjectCard
              title="Biological Network Link-Prediction"
              description="Transplanted social‑network topology theory onto protein‑interaction graphs, boosting link‑prediction AUC and unveiling latent pathways."
              href="/projects/biological-links"
            />
            <ProjectCard
              title="Movie Recommender — ML Explainability Analysis"
              description="Audited K‑NN, community‑cluster, and other ML layers within a movie recommender—combining metric deep‑dives with hands‑on spot‑checks of real user queues to decode whether each layer drove niche discovery, genre fidelity, or serendipitous novelty."
              href="/projects/movie-recommender"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
