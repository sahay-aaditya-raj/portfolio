"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const nav = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#leadership", label: "Leadership" },
    { href: "#awards", label: "Awards" },
    { href: "#workshops", label: "Workshops" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${
          scrolled || menuOpen
            ? "bg-[var(--background)] border-black/15 dark:border-white/10 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="section flex items-center justify-between py-4">
          <Link
            href="#top"
            onClick={closeMenu}
            className="text-xl font-semibold tracking-tight"
          >
            Aaditya Raj
          </Link>

          {/* Desktop */}

          <div className="hidden md:flex items-center gap-5">
            <nav className="flex gap-5 text-sm">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="opacity-70 hover:opacity-100 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <ThemeToggle />
          </div>

          {/* Mobile */}

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-md border border-black/20 dark:border-white/20 p-2"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}

      <div
        onClick={closeMenu}
        className={`fixed inset-0 top-16 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}

      <div
        className={`fixed left-0 right-0 top-16 z-50 bg-[var(--background)] border-b border-black/15 dark:border-white/10 shadow-xl transition-all duration-300 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="section flex flex-col py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}