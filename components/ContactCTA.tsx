import React from "react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20" aria-label="Contact">
      <div className="rounded-2xl border border-neutral-900 p-8 bg-gradient-to-br from-neutral-900/60 to-neutral-900/20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Let’s build social play</h2>
        <p className="text-neutral-300 max-w-2xl mb-6">I’m based in NYC and open to Staff/Lead Product Design roles and select collaborations. If your team cares about bringing people closer—let’s talk.</p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:phil@storyversenyc.com" className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:opacity-90 transition">Email Phil</a>
          <a href="/resume.pdf" className="px-5 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-500 transition">View Resume</a>
        </div>
      </div>
    </section>
  );
}