"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredStrip from "@/components/CredStrip";
import SocialPlayground from "@/components/SocialPlayground";
import Legend from "@/components/Legend";
import FeaturedWork from "@/components/FeaturedWork";
import Approach from "@/components/Approach";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <CredStrip />
        <section className="py-16 space-y-6" aria-label="Interactive demo">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Make it fun together</h2>
          <p className="text-neutral-300 max-w-2xl">A tiny taste of my approach: simple rules that invite people to co‑create, notice one another, and feel part of something. Click to add players. Drag to cluster them. See what emerges.</p>
          <SocialPlayground />
          <Legend />
        </section>
        <FeaturedWork />
        <Approach />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}