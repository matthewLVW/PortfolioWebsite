"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-[calc(100vh-4rem)] w-full bg-[url('/bg-tech.jpg')] bg-cover bg-center bg-fixed text-white px-6 py-8 flex flex-col justify-between relative">
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">
              Matthew Van Winkle
            </h1>
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-300">
              DATA ENGINEERING & AI MODELING — Fast, Scalable, Clean
            </h2>
            <p className="text-base md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0 text-gray-400">
              I build fast, reliable data pipelines and machine learning systems that scale. From ETL to predictive models, I turn raw data into streamlined, deployable products.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="bg-white text-black font-semibold px-5 py-2 rounded hover:bg-gray-200 transition"
              >
                View Résumé
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border border-white px-5 py-2 rounded hover:bg-white/10 transition text-white"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0">
            <Image
              src="/headshot.png"
              alt="Matthew Van Winkle"
              width={260}
              height={260}
              className="rounded-xl shadow-lg border-4 border-white/10"
              priority
            />
          </div>
        </div>

        {/* Project Showcase */}
        <section className="mt-10 max-w-6xl mx-auto w-full">
          <h3 className="text-2xl font-bold mb-4 text-center text-white">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProjectCard
              title="AI Explainer Video"
              description="Pipeline to auto-generate explainer videos with GPT + ElevenLabs + MoviePy."
              href="/projects/ai-video"
            />
            <ProjectCard
              title="Movie Recommender"
              description="ML model using collaborative filtering to compare film recommendations."
              href="/projects/movie-recommender"
            />
            <ProjectCard
              title="Academic Network Graphs"
              description="Visualized scholarly networks with NetworkX, clustering, and centrality."
              href="/projects/academic-network"
            />
          </div>
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center px-4">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <form
              action="https://formspree.io/f/xpwlazqe"
              method="POST"
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="border rounded px-3 py-2"
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Your Email"
                required
                className="border rounded px-3 py-2"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="border rounded px-3 py-2"
              />
              <button
                type="submit"
                className="bg-black text-white py-2 rounded hover:bg-gray-900"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function ProjectCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="bg-black p-4 rounded-lg border border-white/10 hover:scale-[1.015] hover:brightness-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] transition duration-200"
    >
      <h4 className="text-lg font-semibold mb-1 text-white">{title}</h4>
      <p className="text-sm text-gray-300">{description}</p>
    </Link>
  );
}
