"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const preference = document.documentElement.dataset.themePreference;
    setTheme(
      preference === "light" || preference === "dark" ? preference : "system",
    );
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    function followSystem() {
      if (document.documentElement.dataset.themePreference === "system") {
        document.documentElement.dataset.theme = media.matches
          ? "dark"
          : "light";
      }
    }
    function syncPreference(event: StorageEvent) {
      if (event.key !== "portfolio-theme" && event.key !== null) return;
      const next =
        event.newValue === "light" || event.newValue === "dark"
          ? event.newValue
          : "system";
      setTheme(next);
      document.documentElement.dataset.themePreference = next;
      document.documentElement.dataset.theme =
        next === "system" ? (media.matches ? "dark" : "light") : next;
    }
    media.addEventListener("change", followSystem);
    window.addEventListener("storage", syncPreference);
    followSystem();
    return () => {
      media.removeEventListener("change", followSystem);
      window.removeEventListener("storage", syncPreference);
    };
  }, []);

  function changeTheme(next: Theme) {
    setTheme(next);
    document.documentElement.dataset.themePreference = next;
    document.documentElement.dataset.theme =
      next === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : next;
    try {
      if (next === "system") localStorage.removeItem("portfolio-theme");
      else localStorage.setItem("portfolio-theme", next);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }

  return (
    <div
      className="theme-toggle"
      title={`Color theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
    >
      <select
        className="theme-select"
        aria-label="Color theme"
        value={theme}
        onChange={(event) => changeTheme(event.target.value as Theme)}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <svg
        className="theme-system"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M12 17v4m-4 0h8" />
      </svg>
      <svg
        className="theme-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.3 14.1A8.6 8.6 0 0 1 9.9 3.7a8.6 8.6 0 1 0 10.4 10.4Z" />
      </svg>
      <svg
        className="theme-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
    </div>
  );
}
