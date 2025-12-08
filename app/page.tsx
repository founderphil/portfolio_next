"use client";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredStrip from "@/components/CredStrip";
import FeaturedWork from "@/components/FeaturedWork";
import Approach from "@/components/Approach";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FaceDotsExperience from "@/components/FaceDotsExperience";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const [entered, setEntered] = useState(false);

  // If we came from a work detail page, skip FaceDots
  useEffect(() => {
    if (from === "work") {
      setEntered(true);
    }
  }, [from]);

  const featured = Object.entries(projects)
    .filter(([_, p]) => p.featured)
    .map(([slug, p]) => ({ ...p, slug }));

  if (!entered) {
    return <FaceDotsExperience onEnter={() => setEntered(true)} />;
  }

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
