"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

type Theme = "system" | "light" | "dark";
const choices: { value: Theme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

function ThemeIcon({ theme }: { theme: Theme }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {theme === "system" ? (
        <>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M12 17v4m-4 0h8" />
        </>
      ) : theme === "dark" ? (
        <path d="M20.3 14.1A8.6 8.6 0 0 1 9.9 3.7a8.6 8.6 0 1 0 10.4 10.4Z" />
      ) : (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </>
      )}
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  const initialFocus = useRef(2);

  useEffect(() => {
    if (!open) return;
    items.current[initialFocus.current]?.focus({ preventScroll: true });
    function dismiss(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

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
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "Escape" || (event.key === "Tab" && event.shiftKey)) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      trigger.current?.focus({ preventScroll: true });
      return;
    }
    if (event.key === "ArrowDown") next = (index + 1) % choices.length;
    else if (event.key === "ArrowUp")
      next = (index + choices.length - 1) % choices.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = choices.length - 1;
    else if (event.key.length === 1 && /[a-z]/i.test(event.key)) {
      next = choices.findIndex((item) =>
        item.label.toLowerCase().startsWith(event.key.toLowerCase()),
      );
      if (next < 0) return;
    } else return;
    event.preventDefault();
    items.current[next]?.focus({ preventScroll: true });
  }

  return (
    <div className="theme-control" ref={root}>
      <button
        ref={trigger}
        className="theme-toggle"
        type="button"
        aria-label="Change color theme"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="theme-menu"
        title={`Appearance: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
        onClick={() => {
          initialFocus.current = choices.findIndex(
            (item) => item.value === theme,
          );
          setOpen(!open);
        }}
        onKeyDown={(event) => {
          if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
          event.preventDefault();
          initialFocus.current =
            event.key === "ArrowDown" ? 0 : choices.length - 1;
          setOpen(true);
        }}
      >
        <ThemeIcon theme={theme} />
      </button>
      {open && (
        <div
          className="theme-menu"
          id="theme-menu"
          role="menu"
          aria-label="Color theme"
          onBlur={(event) => {
            if (!root.current?.contains(event.relatedTarget))
              setOpen(false);
          }}
        >
          <p className="theme-menu-heading" aria-hidden="true">
            Appearance
          </p>
          {choices.map((item, index) => (
            <button
              key={item.value}
              type="button"
              role="menuitemradio"
              aria-checked={theme === item.value}
              aria-label={item.label}
              tabIndex={-1}
              ref={(node) => {
                items.current[index] = node;
              }}
              className="theme-option"
              onKeyDown={(event) => navigate(event, index)}
              onClick={() => changeTheme(item.value)}
            >
              <ThemeIcon theme={item.value} />
              <span>
                {item.label}
                {item.value === "system" && <small>Use device setting</small>}
              </span>
              {theme === item.value && (
                <svg
                  className="theme-check"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m3 8 3 3 7-7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
