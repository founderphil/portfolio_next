import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-900">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="/home" className="text-2xl md:text-4xl font-extrabold tracking-tight">Phil Olarte</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a className="hover:text-white transition" href="#work">Work</a>
          <a className="hover:text-white transition" href="#approach">Approach</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}