// src/app/lab/page.tsx
import React from "react";

const projects = {
  lightAndControl: [
    { label: "Temple of Light", url: "https://philolarte.notion.site/Temple-of-Light-11561f22995d80c1b2d6c21061c29ea5?pvs=74" },
    { label: "Simulate Synesthesia", url: "https://philolarte.notion.site/Simulate-Synesthesia-ff546fbf6f56418dbca50459093aede7" },
    { label: "DUI – A Data-Powered Sequence", url: "https://philolarte.notion.site/DUI-A-Sequence-11361f22995d80ef908ef1409e80588c" },
    { label: "Sounds of Starlight", url: "https://philolarte.notion.site/Sounds-of-Starlight-13561f22995d80ed884ce517c61eaba5" },
    { label: "Scale – Space chaos (LED art)", url: "https://www.notion.so/philolarte/Massive-LED-art-13561f22995d80008374e10f39436472" },
    { label: "API data and the Addressable LED", url: "https://philolarte.notion.site/API-data-the-Addressable-LED-14561f22995d803c8e5fed5548cbb4a6?pvs=4" },
  ],
  immersiveDesign: [
    { label: "Painting the Future: Collaborative Play and AI-powered Creativity in an Interactive 3D World", url: "https://philolarte.notion.site/Painting-the-Future-Collaborative-Play-and-AI-Powered-Creativity-in-an-Interactive-3D-World-15b61f22995d800b8b7ffec0c00cb0e3?pvs=4" },
    { label: "Non-linear Storytelling: Peter & Wendy", url: "https://philolarte.notion.site/Non-linear-retelling-Peter-Wendy-19161f22995d80ee8974fefafb6cc419?pvs=4" },
    { label: "Custom particle controller for TouchDesigner", url: "https://philolarte.notion.site/TouchDesigner-Particle-Controller-13e61f22995d80f19231ce953a195f89?pvs=4" },
  ],
};

const LabPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-fuchsia-900 via-slate-950 to-cyan-900 text-gray-100 px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-16 space-y-20">

      {/* Floating orbs / background chaos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
        <div className="absolute top-40 -right-16 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl animate-[ping_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl animate-[spin_18s_linear_infinite]" />
      </div>

      {/* Page Title */}
      <header className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-black/40 px-4 py-1 text-xs sm:text-sm uppercase tracking-[0.2em] text-cyan-200/80 mb-6 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-lime-300 animate-ping" />
          Experimental Zone · No Boring Allowed
        </p>
        <div className="inline-flex flex-wrap items-baseline justify-center gap-3 mb-4">
          <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">
            The Lab
          </span>
          <span className="text-base sm:text-lg font-mono bg-yellow-300 text-black px-3 py-1 rounded-md rotate-[-4deg] shadow-md">
            v∞.weird
          </span>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-cyan-100/90 max-w-3xl mx-auto leading-relaxed">
          AR spells, AI creatures, light rituals, and data that dances.
          This is where the experiments escape the notebook and take over the room.
        </p>
        
      </header>

      {/* Creative Technology Intro */}
      <section className="relative z-10 max-w-5xl mx-auto">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-start">
          <div className="space-y-6">
            <h2 className="inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-1 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-fuchsia-200 border border-fuchsia-500/60">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-[ping_2s_ease_out_infinite]" />
              Creative Technology
            </h2>
            <div className="space-y-4 text-gray-200/90 leading-relaxed">
          <p>
            As part of my deep dive into the forefront of creative technology, I set out to explore the latest innovations in frontend web development. Today’s creative technologists are pushing the boundaries of what’s possible by seamlessly integrating code with both software and hardware, fundamentally reimagining how we interact with computers. The interface between humans and machines is constantly evolving, opening new dimensions of interaction.
          </p>
          <p>
            At my time at NYU, I focused on not losing sight of the story, and was able to find my voice as a creative technologist while looking for the future of media and entertainment. I love spectacle and play — especially when play becomes social. The next level is focusing on tech that bridges real and virtual worlds. Whatever tool I am utilizing from now on — within business or consumer products — I will continue to integrate spectacle, play, and push it to move beyond the screen.
          </p>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="sm:col-span-1">
                <img
                  src="/images/empy_temple.png"
                  alt="Creative Technology Intro"
                  className="h-full w-full rounded-2xl border border-fuchsia-300/70 bg-black object-cover shadow-[0_0_35px_rgba(244,114,182,0.55)]"
                />
              </div>
              <div className="sm:col-span-3">
                <img
                  src="/images/people_light.jpg"
                  alt="Creative Technology Intro"
                  className="h-full w-full rounded-2xl border border-fuchsia-300/70 bg-black object-cover shadow-[0_0_35px_rgba(244,114,182,0.55)]"
                />
              </div>
            </div>
          </div>

          {/* Chaotic stat panel */}
          <div className="relative flex flex-col gap-4 text-xs sm:text-sm font-mono text-cyan-100">
            <div className="rounded-2xl border border-cyan-400/60 bg-slate-950/90 p-4 shadow-[0_0_35px_rgba(56,189,248,0.4)] backdrop-blur">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[0.7rem] uppercase tracking-[0.25em] text-cyan-300/80">Live Experiment Feed</span>
                <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[0.65rem] text-emerald-200 border border-emerald-400/60">
                  status: unstable
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-cyan-200/80">light rituals</span>
                  <div className="flex-1 h-1.5 rounded-full bg-cyan-900 overflow-hidden">
                    <div className="h-full w-[82%] bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 animate-[pulse_3s_ease-in-out_infinite]" />
                  </div>
                  <span className="text-amber-200">82%</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-cyan-200/80">AR mischief</span>
                  <div className="flex-1 h-1.5 rounded-full bg-fuchsia-900 overflow-hidden">
                    <div className="h-full w-[96%] bg-gradient-to-r from-fuchsia-400 via-emerald-300 to-cyan-300 animate-[pulse_2s_ease-in-out_infinite]" />
                  </div>
                  <span className="text-lime-200">max</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-cyan-200/80">data chaos</span>
                  <div className="flex-1 h-1.5 rounded-full bg-amber-900 overflow-hidden">
                    <div className="h-full w-[64%] bg-gradient-to-r from-amber-300 via-rose-400 to-sky-300 animate-[pulse_4s_ease-in-out_infinite]" />
                  </div>
                  <span className="text-rose-200">glitchy</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-amber-400/60 bg-black/60 p-3 rotate-[-2deg] shadow-[0_0_25px_rgba(251,191,36,0.4)]">
                <div className="text-[0.65rem] uppercase tracking-[0.18em] text-amber-200 mb-1">mood</div>
                <div className="text-lg font-semibold text-amber-100">spectacular chaos</div>
              </div>
              <div className="rounded-xl border border-lime-400/60 bg-black/60 p-3 rotate-[2deg] shadow-[0_0_25px_rgba(190,242,100,0.4)]">
                <div className="text-[0.65rem] uppercase tracking-[0.18em] text-lime-200 mb-1">input devices</div>
                <div className="text-sm text-lime-100">eyes · hands · crowd energy</div>
              </div>
            </div>
                          {/* TouchDesigner clip */}
              <div className="mt-5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full rounded-2xl border border-fuchsia-300/70 bg-black object-cover shadow-[0_0_35px_rgba(244,114,182,0.55)]"
                >
                  <source src="/video/creative_labs.mp4"/>
                </video>
              </div>
          </div>
        </div>
      </section>

      {/* Projects Overview (grouped) */}
      <section className="relative z-10 max-w-6xl mx-auto space-y-10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-slate-950 text-xl font-black rotate-[-8deg] shadow-lg">
              ✺
            </span>
            Featured Experiments
          </h2>
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyan-200/80 bg-black/40 px-3 py-1 rounded-full border border-cyan-400/40">
            tap anything · follow the rabbit holes
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.3fr)] gap-8 lg:gap-12">
          {/* Left: Light & Control */}
          <div className="rounded-3xl border border-cyan-400/60 bg-slate-950/80 p-5 shadow-[0_0_40px_rgba(34,211,238,0.45)] backdrop-blur">
              <h3 className="text-lg font-semibold text-cyan-100 mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                Light & Control
              </h3>
              <ul className="space-y-2.5 text-sm text-cyan-50/90">
                {projects.lightAndControl.map(p => (
                  <li key={p.url} className="flex items-start gap-2 group">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-300 group-hover:scale-150 transition-transform" />
                    <a
                      href={p.url}
                      className="inline-flex flex-col sm:flex-row sm:items-baseline sm:gap-1 hover:text-cyan-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{p.label}</span>
                      <span className="text-[0.7rem] uppercase tracking-[0.18em] text-cyan-300/70">
                        open lab notes ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
          </div>

          {/* Right: Immersive Design with overlapping sticky notes */}
          <div className="relative rounded-3xl border border-fuchsia-400/60 bg-slate-950/80 p-5 shadow-[0_0_40px_rgba(244,114,182,0.45)] backdrop-blur overflow-visible">
              <h3 className="text-lg font-semibold text-fuchsia-100 mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300 animate-[ping_2.4s_ease-out_infinite]" />
                Immersive Design
              </h3>
              <ul className="space-y-2.5 text-sm text-fuchsia-50/90">
                {projects.immersiveDesign.map(p => (
                  <li key={p.url} className="flex items-start gap-2 group">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-fuchsia-300 group-hover:scale-150 transition-transform" />
                    <a
                      href={p.url}
                      className="inline-flex flex-col sm:flex-row sm:items-baseline sm:gap-1 hover:text-fuchsia-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{p.label}</span>
                      <span className="text-[0.7rem] uppercase tracking-[0.18em] text-fuchsia-200/80">
                        see the world bend ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Overlapping sticky-note cluster */}
              <div className="pointer-events-none absolute -top-6 -right-4 w-40 sm:w-52 space-y-3">
                <div className="relative -rotate-3 rounded-2xl bg-yellow-300 text-slate-950 p-3 pr-4 shadow-[0_20px_45px_rgba(0,0,0,0.7)]">
                  <div className="absolute -top-2 left-8 h-4 w-4 rounded-full bg-slate-900/80 shadow-md" />
                  <div className="text-[0.65rem] uppercase tracking-[0.22em] mb-1">lab rule #1</div>
                  <div className="text-xs font-semibold leading-snug">If it behaves, make it weirder.</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[0.6rem] sm:text-[0.65rem] font-mono text-cyan-100">
                  <div className="rounded-xl border border-lime-300/70 bg-black/70 p-2 rotate-[-4deg]">
                    <div className="uppercase tracking-[0.2em] text-lime-200 mb-0.5">obsessions</div>
                    <ul className="space-y-0.5 list-disc list-inside">
                      <li>body as UI</li>
                      <li>AI sidekicks</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-sky-300/70 bg-black/70 p-2 rotate-[3deg]">
                    <div className="uppercase tracking-[0.2em] text-sky-200 mb-0.5">materials</div>
                    <ul className="space-y-0.5 list-disc list-inside">
                      <li>LED fog</li>
                      <li>AR portals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* AR + Generative AI Section */}
      <section className="relative z-10 max-w-6xl mx-auto space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-400 text-slate-950 text-lg font-black rotate-[-10deg]">
              AR
            </span>
            Interactive AR + Generative AI
          </h2>
          <div className="flex items-center gap-2 text-[0.7rem] sm:text-xs font-mono text-cyan-100 bg-black/40 px-3 py-1 rounded-full border border-fuchsia-300/50">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300 animate-pulse" />
            <span>body tracking</span>
            <span className="opacity-50">·</span>
            <span>style transfer</span>
            <span className="opacity-50">·</span>
            <span>AI textures</span>
          </div>
        </div>

        <div className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] gap-10 items-start">
          <div className="space-y-4 text-cyan-50/90 leading-relaxed">
          <p>
            Augmented Reality (AR) is rapidly reshaping the landscape of human-computer interaction, blurring the lines between the physical and digital worlds. My journey into AR involved pushing the boundaries of what’s possible with platforms like Niantic Lightship, Adobe Aero, Unreal, Snap Lens Studio, Meta Spark, and TikTok Effect House.
          </p>
          <p>
            By rigorously testing the limits of these tools, I sought to understand and expand the potential of mixed-reality experiences — using the entire body as an interface for AR effects and storytelling. On top of that, I leveraged generative AI to create a vast array of assets: from 2D images and animated video, to intricate 3D objects — all used across these projects.
          </p>
          <p>
            For small creative teams or independent creators, this is an exciting time. The tools and techniques are increasingly accessible. My work serves as a testament to the potential of AR + AI to revolutionize how we interact, communicate, and imagine.
          </p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-[0.7rem] sm:text-xs font-mono">
              <div className="rounded-xl border border-fuchsia-300/60 bg-black/60 px-3 py-2 rotate-[-2deg] text-fuchsia-100">
                <div className="uppercase tracking-[0.2em] mb-1">experiments</div>
                <div>face portals · eclipse spells · glitch halos</div>
              </div>
              <div className="rounded-xl border border-cyan-300/60 bg-black/60 px-3 py-2 rotate-[1deg] text-cyan-100">
                <div className="uppercase tracking-[0.2em] mb-1">constraints</div>
                <div>runs on your phone, not a render farm.</div>
              </div>
              <div className="rounded-xl border border-amber-300/60 bg-black/60 px-3 py-2 rotate-[3deg] text-amber-50">
                <div className="uppercase tracking-[0.2em] mb-1">secret mission</div>
                <div>turn passive scrollers into active performers.</div>
              </div>
            </div>
            <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-3xl shadow-[0_0_40px_rgba(251,191,36,0.45)] bg-black object-cover border border-amber-300/70 hover:rotate-[-1.5deg] hover:scale-[1.01] transition-transform"
            src="/video/musicalfingers_AR.mp4"
          />
          </div>

          {/* Example video cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-3xl shadow-[0_0_40px_rgba(251,191,36,0.45)] bg-black object-cover border border-amber-300/70 hover:rotate-[-1.5deg] hover:scale-[1.01] transition-transform"
            src="https://www.phillipolarte.com/wp-content/uploads/2025/03/eclipse2024lens-1.mp4"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-3xl shadow-[0_0_40px_rgba(244,114,182,0.55)] bg-black object-cover border border-fuchsia-300/70 hover:rotate-[1.5deg] hover:scale-[1.01] transition-transform"
            src="https://www.phillipolarte.com/wp-content/uploads/2025/03/usernameIsFire-1.mp4"
          />
          {/* Add more media items as needed */}
          </div>
        </div>
      </section>

      {/* Edge AI / AI + Computer Vision / VR / Emerging Tech */}
      <section className="relative z-10 max-w-5xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Edge AI & Computer Vision</h2>
          <span className="text-[0.7rem] sm:text-xs font-mono uppercase tracking-[0.2em] text-cyan-200/80 bg-black/40 px-3 py-1 rounded-full border border-cyan-400/50">
            tiny brains, loud personalities
          </span>
        </div>
        <blockquote className="border-l-4 border-cyan-400/80 pl-4 italic text-cyan-100/90 bg-black/30 rounded-2xl py-4 pr-4 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          “Hmm, just another day on the streets. Cars going by, people walking… nothing too exciting happening here. Oh wait! Is that a rock in the back seat of the white van? *giggles* Aahahahaha, I’m so glad someone’s got their priorities straight!”
        </blockquote>
        <img
          src="https://www.phillipolarte.com/wp-content/uploads/2024/08/its-an-angry-AI-1024x454.png"
          alt="AI PetRock screenshot"
          className="w-full rounded-3xl shadow-[0_0_40px_rgba(34,211,238,0.4)] object-cover border border-cyan-300/70"
        />
        <div className="space-y-4 text-cyan-50/90 leading-relaxed">
          <p>
            I have been working with NLP since 2018 — primarily understanding sentiment and context of massive transcript- or text-based libraries. For my grad work, I extended that into research with efficient language models, aiming to run fully functional AI with personality on constrained devices like Raspberry Pi CPUs.
          </p>
          <p>
            We proved the concept — latency wasn’t ideal, but the experiment showed what’s possible: energy-efficient, offline AI with character. It’s a glimpse at where AI on edge devices could go.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 text-[0.7rem] sm:text-xs font-mono text-cyan-100">
            <div className="rounded-2xl border border-emerald-300/70 bg-black/60 p-3 rotate-[-2deg]">
              <div className="uppercase tracking-[0.2em] mb-1">hardware toys</div>
              <div>raspberry pi · cameras · weird sensors</div>
            </div>
            <div className="rounded-2xl border border-amber-300/70 bg-black/60 p-3 rotate-[1deg]">
              <div className="uppercase tracking-[0.2em] mb-1">constraints</div>
              <div>no GPU, still wants jokes in real-time.</div>
            </div>
            <div className="rounded-2xl border border-rose-300/70 bg-black/60 p-3 rotate-[3deg]">
              <div className="uppercase tracking-[0.2em] mb-1">personality sliders</div>
              <div>snark · wonder · chaos dialed way up.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Code */}
      <section className="relative z-10 max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Creative Code & Data Exploration</h2>
          <span className="text-[0.7rem] sm:text-xs font-mono uppercase tracking-[0.2em] text-amber-100 bg-black/40 px-3 py-1 rounded-full border border-amber-300/60">
            p5.js · particles · diary orbits
          </span>
        </div>
        <div className="space-y-4 text-amber-50/90 leading-relaxed">
          <p>
            I delved into experiments using P5.js: transforming a week of diary entries into a visual chart; building immersive particle systems and orbiting characters; and syncing light sensors on microcontrollers (Arduino) to generate sound and color — a symphony of data, light, and motion.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>A personal diary entry turned into a visual journey.</li>
            <li>Immersive particle systems with interactive motion.</li>
            <li>Using light sensors and microcontrollers to create sound + visuals.</li>
          </ul>
          <p className="inline-flex flex-wrap items-center gap-2 text-sm sm:text-base">
            <span className="font-semibold">Play the sketch →</span>
            <a
              href="https://editor.p5js.org/founderphil/sketches/p_cNBh1sD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 text-slate-950 px-4 py-1.5 text-sm font-semibold hover:bg-cyan-300 transition-colors shadow-[0_0_25px_rgba(34,211,238,0.7)]"
            >
              P5.js Sound Sketch
              <span className="text-xs">↗</span>
            </a>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-100/80">
              headphones very recommended
            </span>
          </p>
          <div className="w-full rounded-3xl border border-cyan-300/70 bg-black/60 shadow-[0_0_40px_rgba(34,211,238,0.5)] overflow-hidden">
            <iframe
              src="https://editor.p5js.org/founderphil/full/p_cNBh1sD"
              width="100%"
              height={700}
              className="border-0"
              title="P5.js Sound Sketch"
            />
          </div>
        </div>
      </section>

      {/* Data Science / ML */}
      <section className="relative z-10 max-w-5xl mx-auto space-y-6 pb-20">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Machine Learning & Data Science</h2>
          <span className="text-[0.7rem] sm:text-xs font-mono uppercase tracking-[0.2em] text-sky-100 bg-black/40 px-3 py-1 rounded-full border border-sky-300/60">
            spreadsheets → stories → systems
          </span>
        </div>
        <div className="space-y-4 text-sky-50/90 leading-relaxed">
          <p>
            I explored datasets to analyze and model human behavior and urban dynamics — for example, evaluating how different demographics might be impacted by policy changes like congestion pricing in cities.
          </p>
          <p>
            The goal: build data-driven narratives that highlight structural inequities — and propose solutions that are informed by real data.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 text-[0.7rem] sm:text-xs font-mono text-sky-100">
            <div className="rounded-2xl border border-sky-300/70 bg-black/60 p-3 rotate-[-2deg]">
              <div className="uppercase tracking-[0.2em] mb-1">inputs</div>
              <div>transit logs · census data · city sensors</div>
            </div>
            <div className="rounded-2xl border border-emerald-300/70 bg-black/60 p-3 rotate-[1deg]">
              <div className="uppercase tracking-[0.2em] mb-1">alchemy</div>
              <div>models + visuals that make policy feel human.</div>
            </div>
            <div className="rounded-2xl border border-amber-300/70 bg-black/60 p-3 rotate-[3deg]">
              <div className="uppercase tracking-[0.2em] mb-1">output</div>
              <div>maps that argue back and plots that protest.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-cyan-200/70 text-xs sm:text-sm pt-4 pb-2">
        <p className="inline-flex flex-wrap items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-cyan-400/50 backdrop-blur">
          <span className="font-mono uppercase tracking-[0.2em] text-cyan-200">end of lab tour*</span>
          <span className="hidden sm:inline text-cyan-300/70">(*for now)</span>
          <span className="opacity-40">·</span>
          <span>© 2025 All Rights Reserved.</span>
          <a href="mailto:[email protected]" className="hover:text-cyan-100 underline-offset-2 hover:underline">
            email the lab keeper
          </a>
        </p>
      </footer>

    </div>
  );
};

export default LabPage;