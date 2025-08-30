"use client";
import { useEffect, useState } from "react";

// Simple dark/light toggle that persists preference and updates <html> class
export default function ThemeToggle({ className = "" }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(null); // 'light' | 'dark' | null

  // Apply theme to <html> element
  const applyTheme = (next) => {
    const root = document.documentElement.classList;
    if (next === "dark") {
      root.add("dark");
      root.remove("light");
    } else if (next === "light") {
      root.add("light");
      root.remove("dark");
    } else {
      root.remove("light");
      root.remove("dark");
    }
  };

  useEffect(() => {
    // Initialize from localStorage, else default to dark
    try {
      const stored = localStorage.getItem("theme");
      const initial = stored === "light" || stored === "dark" ? stored : "dark";
      setTheme(initial);
      applyTheme(initial);
    } catch {
      setTheme("dark");
      applyTheme("dark");
    }
    setMounted(true);
  }, []);

  const toggle = () => {
    // Add a temporary class to animate color transitions across the page
    const html = document.documentElement;
    html.classList.add("theme-changing");
    window.setTimeout(() => html.classList.remove("theme-changing"), 350);
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    applyTheme(next);
  };

  // Minimal icons (sun/moon) with no external deps
  const Icon = () => {
    if (!mounted) return null;
    return theme === "dark" ? (
      // Sun icon
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ) : (
      // Moon icon
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    );
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`cursor-pointer flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm opacity-90 hover:opacity-100 transition-opacity border border-white/10 bg-white/40 dark:bg-black/30 backdrop-blur ${className}`}
      aria-label="Toggle color theme"
      title={mounted ? (theme === "dark" ? "Switch to light" : "Switch to dark") : "Toggle theme"}
    >
      <Icon />
      <span className="hidden sm:inline">{mounted ? (theme === "dark" ? "Dark" : "Light") : "Theme"}</span>
    </button>
  );
}
