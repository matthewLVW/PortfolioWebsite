"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const home = usePathname() === "/";
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <nav className="nav-shell shell" aria-label="Main navigation">
        <Link
          className="wordmark"
          href="/"
          onClick={close}
          aria-label="Matthew Van Winkle home"
        >
          Matthew Van Winkle
          <span className="wordmark-dot" aria-hidden="true">
            .
          </span>
        </Link>
        <div className="nav-actions">
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
          <div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
            <Link href={home ? "#work" : "/#work"} onClick={close}>
              Projects
            </Link>
            <Link href={home ? "#experience" : "/#experience"} onClick={close}>
              Experience
            </Link>
            <Link href="/resume" onClick={close}>
              Resume
            </Link>
            <a href="mailto:matthewlvw@gmail.com" onClick={close}>
              Contact
            </a>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
