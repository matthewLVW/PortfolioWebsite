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
    <html
      lang="en"
      data-theme="light"
      data-theme-preference="system"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){var p="system";try{var s=localStorage.getItem("portfolio-theme");if(s==="light"||s==="dark")p=s}catch{}var d=document.documentElement;d.dataset.themePreference=p;d.dataset.theme=p==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):p})()',
          }}
        />
      </head>
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
