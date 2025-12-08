import React from "react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20" aria-label="Contact">
      <div className="rounded-2xl border border-neutral-900 p-8 bg-gradient-to-br from-neutral-900/60 to-neutral-900/20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Let’s craft your next big innovation together.</h2>
        <p className="text-neutral-300 max-w-2xl mb-6">I’m based in NYC and open to Staff/Lead Product Design roles and select collaborations. Let’s talk.</p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:phil@storyversenyc.com" className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:opacity-90 transition">Email Phil</a>
        </div>
      </div>
    </section>
  );
}