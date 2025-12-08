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
          <a className="hover:text-white transition" href="/thelab">The Lab</a>
          <a className="hover:text-white transition" href="/Phil_Olarte_AI_Product_Resume.pdf">Resume</a>
        </nav>
      </div>
    </header>
  );
}