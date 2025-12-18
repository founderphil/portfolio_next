"use client";

import {
  useState,
  useCallback,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import Header from "@/components/Header";
import { projects } from "@/data/projects";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: ReactNode;
};

export default function AIHomePage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleSubmit = useCallback(
    (e?: FormEvent<HTMLFormElement>) => {
      if (e) e.preventDefault();
      const trimmed = input.trim();
      if (!trimmed) return;

      const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;
      const userMessage: ChatMessage = {
        id: nextId,
        role: "user",
        content: trimmed,
      };

      const queryTokens = trimmed
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter((word) => word.length >= 2);

      const matchingProjects = Object.entries(projects).filter(([_, p]) => {
        const haystack = [
          p.title,
          p.subtitle,
          p.overview,
          p.role,
          p.why,
          ...(p.tags || []),
        ]
          .join(" ")
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, " ");

        return queryTokens.some((token) => haystack.includes(token));
      });

      const assistantSummary = buildAssistantSummary(trimmed, matchingProjects);
      const assistantMessage: ChatMessage = {
        id: nextId + 1,
        role: "assistant",
        content: assistantSummary,
      };

      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setInput("");
      setExpanded(true);
    },
    [input, messages]
  );

  // Auto-scroll to the latest message when a new one arrives
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages.length]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const containerHeight = expanded ? "h-[80vh]" : "h-[50px]";

  return (
    <div className="relative h-screen overflow-hidden bg-black text-neutral-100">
      {/* Background video */}
      <video
        ref={videoRef}
        className="pointer-events-none fixed inset-0 h-screen w-screen object-contain"
        src="/video/lowbit_olarte.mp4"
        autoPlay
        loop
        muted={!soundOn}
        playsInline
      />

      {/* Dark overlay for readability */}
      <div className="pointer-events-none fixed inset-0 bg-black/10" />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Sound toggle button */}
        <button
          type="button"
          onClick={() => setSoundOn((prev) => !prev)}
          className="fixed bottom-4 left-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs text-neutral-900 shadow-lg shadow-black/70 backdrop-blur-sm hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label={soundOn ? "Mute background video" : "Turn on background video sound"}
        >
          <span
            className={
              "flex h-7 w-7 items-center justify-center rounded-full transition-colors " +
              (soundOn ? "bg-sky-200" : "bg-transparent")
            }
          >
            {soundOn ? "🔊" : "🔈"}
          </span>
        </button>

        <Header />

        <main className="flex-1" />

        {/* Chat surface offset from bottom for all viewports */}
        <section className="fixed bottom-[10vh] left-0 right-0 bg-transparent transition-all duration-300 ease-out">
          <div
            className={`mx-auto flex w-[95vw] max-w-6xl flex-col gap-2 px-3 py-2 md:px-4 ${containerHeight} transition-all duration-300 ease-out`}
          >
            {/* Messages (expand upward above the input) */}
            {expanded && (
              <div className="flex-1 overflow-y-auto rounded-xl bg-neutral-900/70 p-3 text-xs text-neutral-100 shadow-inner shadow-black/60 sm:text-sm">
                {messages.length === 0 ? (
                  <p className="text-neutral-400">
                    Phil Bot will summarize projects that relate to your request
                    once you send a message.
                  </p>
                ) : (
                  <div className="flex flex-col gap-3">
                    {messages.map((m) => (
                      <div
                        key={m.id}
                        className={
                          m.role === "user"
                            ? "ml-auto max-w-[80%] rounded-2xl bg-white px-3 py-2 text-neutral-900"
                            : "mr-auto w-full max-w-[400px] rounded-2xl bg-neutral-800 px-3 py-2 text-neutral-100"
                        }
                      >
                        {m.role === "assistant" && (
                          <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-300">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-700 text-[10px]">
                              🤖
                            </span>
                            <span>Phil Bot</span>
                          </div>
                        )}
                        {m.content}
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>
            )}

            {/* Input row pinned at the bottom of this surface with drop shadow */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs text-neutral-900 shadow-xl shadow-black/60 sm:text-sm"
            >
              <textarea
                className="max-h-32 min-h-[24px] w-full resize-none bg-transparent text-xs outline-none placeholder:text-[11px] placeholder:text-neutral-400 sm:text-sm sm:placeholder:text-xs"
                placeholder="Hello, I'm Phil Bot! What do you want to know about Phil? Ask me about his work with AI, XR, data systems, and more. (Press Enter to send, Shift + Enter for new line)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                type="submit"
                aria-label="Send query to Phil Bot"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[14px] text-white shadow-md hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 sm:h-9 sm:w-9"
              >
                ➤
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

function buildAssistantSummary(
  query: string,
  matching: [string, (typeof projects)[string]][]
): ReactNode {
  if (!matching.length) {
    return (
      <p>
        I didn&apos;t find an obvious direct match for &ldquo;{query}&rdquo;, but many of
        Phil&apos;s projects explore AI, XR, and data systems. Try asking about a
        type of experience (for example, &ldquo;AI character&rdquo;,
        &ldquo;location-based audio&rdquo;, or &ldquo;enterprise dashboards&rdquo;)
        and I&apos;ll suggest specific work.
      </p>
    );
  }

  const top = matching.slice(0, 4);
  return (
    <div className="space-y-3">
      <p>
        Here are some of Phil&apos;s projects that connect to &ldquo;{query}&rdquo;:
      </p>
      {top.map(([slug, p]) => (
        <div
          key={slug}
          className="space-y-2 rounded-xl bg-neutral-900/80 p-3"
        >
          <div className="text-sm font-medium text-neutral-50">
            {p.title}
            {p.subtitle && (
              <span className="text-neutral-300">
                {" "}
                &mdash; {p.subtitle}
              </span>
            )}
          </div>
          {p.tags && p.tags.length > 0 && (
            <div className="text-[11px] uppercase tracking-wide text-neutral-400">
              {p.tags.join("  b7 ")}
            </div>
          )}
          <p className="text-xs text-neutral-200">{p.overview}</p>
          {p.img && (
            <img
              src={p.img}
              alt={p.title}
              className="mt-2 w-full rounded-lg border border-neutral-700/60 object-cover"
            />
          )}
          <a
            href={`/work/${slug}`}
            className="inline-block text-xs font-semibold text-sky-300 underline underline-offset-2 hover:text-sky-200"
          >
            Jump to project details
          </a>
        </div>
      ))}
      <p className="text-[11px] text-neutral-400">
        You can also browse more from the main Work section for deeper case
        studies.
      </p>
    </div>
  );
}
