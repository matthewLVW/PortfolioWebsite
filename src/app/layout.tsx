import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: "Matthew Van Winkle | Software Engineer",
    template: "%s | Matthew Van Winkle",
  },
  description:
    "Software engineer with hands-on experience in data platforms, applied AI, and technical teaching. Bringing engineering depth and clear communication to sales engineering.",
  openGraph: {
    title: "Matthew Van Winkle | Software Engineer",
    description:
      "Software engineer with experience in data systems, research, and technical teaching. Explore selected projects and experience.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
