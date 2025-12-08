"use client";

import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-5 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <a
          href="/home"
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-500 bg-clip-text text-transparent hover:from-sky-300 hover:via-orange-200 hover:to-sky-400 transition-colors duration-300"
        >
          Phil Olarte
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a className="hover:text-white transition" href="#work">Work</a>
          <a className="hover:text-white transition" href="#approach">Approach</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
          <a className="hover:text-white transition" href="/Phil_Olarte_AI_Product_Resume.pdf">Resume</a>
          <a
            href="/thelab"
            className="relative font-semibold tracking-wide text-sm text-cyan-200 hover:text-cyan-50 transition-transform transition-colors duration-200"
          >
            <span className="absolute -inset-x-1 -inset-y-1 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-amber-300 opacity-0 blur-md animate-[pulse_6s_ease-in-out_infinite] group-hover:opacity-70" aria-hidden="true" />
            <span className="relative inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 border border-cyan-500/60 shadow-[0_0_18px_rgba(34,211,238,0.6)] bg-[length:200%_200%] animate-[bg-shift_8s_linear_infinite] hover:scale-110">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300 animate-ping" />
              <span>The Lab</span>
            </span>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-full border border-cyan-400/60 bg-black/60/40 p-2 text-cyan-200 hover:bg-cyan-500/10 hover:text-cyan-50 shadow-[0_0_18px_rgba(34,211,238,0.6)] transition-colors"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="relative flex h-4 w-6 items-center justify-center">
            <span
              className={`absolute h-0.5 w-6 bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4 sm:px-6">
          <nav className="glass-tile border border-white/10 bg-white/5 backdrop-blur flex flex-col gap-3 rounded-2xl px-4 py-3 text-sm text-neutral-200 shadow-[0_18px_45px_rgba(15,23,42,0.85)]">
            <a className="hover:text-white transition" href="#work" onClick={closeMenu}>Work</a>
            <a className="hover:text-white transition" href="#approach" onClick={closeMenu}>Approach</a>
            <a className="hover:text-white transition" href="#contact" onClick={closeMenu}>Contact</a>
            <a className="hover:text-white transition" href="/Phil_Olarte_AI_Product_Resume.pdf" onClick={closeMenu}>Resume</a>
            <a
              href="/thelab"
              onClick={closeMenu}
              className="mt-1 inline-flex w-fit items-center gap-1 rounded-full border border-cyan-500/60 bg-black/40 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.6)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300 animate-ping" />
              <span>The Lab</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}