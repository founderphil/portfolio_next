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
import { projects } from "@/data/projects";

export default function HomePage() {
  // Get featured projects and add slug
  const featured = Object.entries(projects)
    .filter(([_, p]) => p.featured)
    .map(([slug, p]) => ({ ...p, slug }));

  return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Header />
        <main className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10 xl:px-16">
          <Hero />
          {/* <CredStrip /> */}
          <FeaturedWork featured={featured} />
          <Approach />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    );
}