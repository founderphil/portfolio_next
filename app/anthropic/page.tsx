"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./anthropic.module.css";

export default function AnthropicPage() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [latencyValue, setLatencyValue] = useState("—");
  const [latencyColor, setLatencyColor] = useState("#0f0e0c");

  const measureLatency = useCallback(() => {
    const t0 = performance.now();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const ms = Math.round(performance.now() - t0);
        setLatencyValue(`${ms}ms`);

        if (ms < 20) {
          setLatencyColor("#22c55e");
        } else if (ms < 50) {
          setLatencyColor("#f59e0b");
        } else {
          setLatencyColor("#ef4444");
        }
      });
    });
  }, []);

  useEffect(() => {
    const latencyTimer = window.setTimeout(() => {
      measureLatency();
    }, 800);

    const streamStartTimer = window.setTimeout(() => {
      setIsStreaming(true);
    }, 900);

    const streamEndTimer = window.setTimeout(() => {
      setIsStreaming(false);
    }, 3100);

    return () => {
      window.clearTimeout(latencyTimer);
      window.clearTimeout(streamStartTimer);
      window.clearTimeout(streamEndTimer);
    };
  }, [measureLatency]);

  return (
    <div className={styles.routeRoot}>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.name}>
            Phillip Olarte
            <span className={styles.subtitle}>Principal Product Creator · AI Experience Specialist</span>
          </h1>

          <div className={styles.contact}>
            phil@storyversenyc.com
            <br />
            202.262.4762
            <br />
            New York, NY
            <br />
            <a
              className={styles.contactLink}
              href="https://phillipolarte.com"
              target="_blank"
              rel="noreferrer"
            >
              phillipolarte.com
            </a>
          </div>
        </header>

        <div className={styles.address}>
          March 2026
          <strong className={styles.addressStrong}>
            Hiring Team — UI Software Engineer, Claude.ai Consumer Product
            <br />
            Anthropic · New York, NY
          </strong>
        </div>

        <div className={styles.body}>
          <p className={`${styles.lede} ${styles.streamLine} ${isStreaming ? styles.streaming : ""}`}>
            I design AI experiences that feel human and I want to bring that to the product used by more people
            than any other AI interface in the world.
          </p>

          <p className={styles.paragraph}>
            I&apos;m a product designer and engineer <span className={styles.chip}>a few blocks from your New York office</span>{" "}
            who has spent the last decade building consumer experiences at the intersection of AI, storytelling, and
            interface craft. I&apos;m applying for the UI Software Engineer role on the Claude.ai Consumer Product team.
          </p>

          <p className={styles.paragraph}>
            The thing I&apos;ve chased in every product I&apos;ve built is the same thing you describe in this role:{" "}
            <span className={styles.chip}>how something feels</span>. Not just whether it works, but whether it feels
            fast. Whether the first landing is disorienting or grounding. Whether the moment the model starts
            streaming feels like magic or like watching a spinner. I hold a Master&apos;s in AI/ML &amp; Human-Computer
            Interaction from NYU Tandon, and in it I obsessed over a single question: <em>what does latency do to
            trust in an embodied AI?</em> I built the system. I measured it. I iterated. That obsession never left.
          </p>

          <div className={styles.metrics}>
            <div className={styles.metric}>
              <div className={styles.metricNum}>37</div>
              <div className={styles.metricLabel}>usability test participants on MAIA AI character UX</div>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metric}>
              <div className={styles.metricNum}>66%</div>
              <div className={styles.metricLabel}>visitor to purchaser conversion on AETHER</div>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metric}>
              <div className={styles.metricNum}>10+</div>
              <div className={styles.metricLabel}>years shipping consumer web products end-to-end</div>
            </div>
          </div>

          <p className={styles.paragraph}>
            At Storyverse, I architected MAIA, a <span className={styles.chip}>voice-and-vision AI character</span> with
            adaptive visual feedback loops that maintained user immersion during model processing. Loading states,
            confidence indicators, streaming feel: these were design problems, not just engineering ones. I owned the
            full stack: UX direction, <span className={styles.chip}>React/TypeScript frontend</span>, LLM API integration,
            smoke testing. That same end-to-end accountability let me build a ticketing flow for our immersive theater
            experience that converted at 66%.
          </p>

          <p className={styles.paragraph}>
            Currently at BoardLens.ai, I&apos;m iterating on a Bloomberg Terminal-inspired interface for AI-powered
            investment document analysis, thinking every day about <span className={styles.chip}>latency, streaming UX</span>,
            and how to build financial-grade interfaces that still feel approachable. I work in React, Next.js, and
            TypeScript, prototype in Figma and in code, and I care deeply about the accessibility and responsiveness
            details that separate a polished product from a functional one.
          </p>

          <p className={styles.paragraph}>
            What I bring to Claude.ai isn&apos;t just engineering range: it&apos;s the specific conviction that <em>the
            interface layer of an AI product is load-bearing</em>. The way a response streams, the way an empty state
            is framed, the way error recovery feels: these are the moments that determine whether someone trusts the
            model. I understand that from both the design and engineering side, and I build accordingly.
          </p>

          <p className={styles.paragraph}>
            I&apos;d love to bring this perspective to the team shaping how millions of people experience AI every day.
          </p>
        </div>

        <div className={styles.closing}>
          <p className={styles.closingP}>Warmly,</p>
          <div className={styles.sig}>Phillip Olarte</div>
        </div>

        <div className={styles.footerNote}>
          <span>UI Software Engineer · Claude.ai Consumer Product · Anthropic</span>
          <button
            type="button"
            className={styles.latencyDemo}
            onClick={measureLatency}
            title="Click to measure"
            aria-label="Measure render latency"
          >
            <span className={styles.pulseDot} />
            <span>
              render latency: <span className={styles.latencyVal} style={{ color: latencyColor }}>{latencyValue}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
