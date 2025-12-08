import React from "react";

export default function Header() {
  return (
    <header className="sticky top-5 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-900">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a
          href="/home"
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-500 bg-clip-text text-transparent hover:from-sky-300 hover:via-orange-200 hover:to-sky-400 transition-colors duration-300"
        >
          Phil Olarte
        </a>
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
      </div>
    </header>
  );
}