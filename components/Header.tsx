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

          {/* Social links */}
          <div className="ml-1 mb-1 flex items-center gap-4 text-neutral-400">
            <a
              href="https://linkedin.com/in/phillipolarte"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.25 8.5h4.5V24h-4.5V8.5zM8.75 8.5h4.31v2.11h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.86V24h-4.5v-7.18c0-1.71-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V24h-4.5V8.5z" />
              </svg>
            </a>
            <a
              href="https://github.com/founderphil/portfolio_next"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/philolarte"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2.5A5.51 5.51 0 0 0 6.5 12 5.51 5.51 0 0 0 12 17.5 5.51 5.51 0 0 0 17.5 12 5.51 5.51 0 0 0 12 6.5zm0 2A3.504 3.504 0 0 1 15.5 12 3.504 3.504 0 0 1 12 15.5 3.504 3.504 0 0 1 8.5 12 3.504 3.504 0 0 1 12 8.5zM18 6.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
              </svg>
            </a>
          </div>
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

            <div className="mt-3 flex items-center gap-4">
              <a
                href="https://linkedin.com/in/phillipolarte"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.25 8.5h4.5V24h-4.5V8.5zM8.75 8.5h4.31v2.11h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.86V24h-4.5v-7.18c0-1.71-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V24h-4.5V8.5z" />
                </svg>
              </a>
              <a
                href="https://github.com/founderphil/portfolio_next"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-neutral-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/philolarte"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-neutral-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2.5A5.51 5.51 0 0 0 6.5 12 5.51 5.51 0 0 0 12 17.5 5.51 5.51 0 0 0 17.5 12 5.51 5.51 0 0 0 12 6.5zm0 2A3.504 3.504 0 0 1 15.5 12 3.504 3.504 0 0 1 12 15.5 3.504 3.504 0 0 1 8.5 12 3.504 3.504 0 0 1 12 8.5zM18 6.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}