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

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: ReactNode;
};

function renderAnswerWithLinks(text: string): ReactNode {
  const parts = text.split(/(\/work\/[a-zA-Z0-9_-]+)/g);
  return parts.map((part, index) => {
    if (/^\/work\/[a-zA-Z0-9_-]+$/.test(part)) {
      return (
        <a
          key={index}
          href={part}
          className="text-sky-300 underline underline-offset-2 hover:text-sky-200"
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function AIHomePage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = useCallback(
    async (e?: FormEvent<HTMLFormElement>) => {
      if (e) e.preventDefault();
      const trimmed = input.trim();
      if (!trimmed) return;

      const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;
      const userMessage: ChatMessage = {
        id: nextId,
        role: "user",
        content: trimmed,
      };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setExpanded(true);
      setIsLoading(true);
      setError(null);

      // On mobile, blur the input so the keyboard hides and
      // the viewport returns to a stable state for reading results.
      if (textareaRef.current) {
        textareaRef.current.blur();
      }

      try {
        const res = await fetch("/api/phil-bot", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: trimmed }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(data?.error || "Something went wrong talking to Phil Bot.");
        }

        const data: {
          answer: string;
          projects?: {
            slug: string;
            title: string;
            subtitle?: string;
            overview: string;
            tags?: string[];
            img?: string;
          }[];
        } = await res.json();

        const assistantContent: ReactNode = (
          <div className="space-y-3">
            <p className="text-xs sm:text-sm whitespace-pre-wrap">
              {renderAnswerWithLinks(data.answer)}
            </p>
            {data.projects && data.projects.length > 0 && (
              <div className="space-y-2 border-t border-neutral-700/60 pt-2">
                <p className="text-[11px] uppercase tracking-wide text-neutral-400">
                  Projects mentioned
                </p>
                <div className="flex flex-col gap-2">
                  {data.projects.map((p) => (
                    <a
                      key={p.slug}
                      href={`/work/${p.slug}`}
                      className="flex gap-2 rounded-lg bg-neutral-900/80 p-2 hover:bg-neutral-800/90"
                    >
                      {p.img && (
                        <img
                          src={p.img}
                          alt={p.title}
                          className="h-10 w-14 rounded-md object-cover border border-neutral-700/60"
                        />
                      )}
                      <div className="flex-1">
                        <div className="text-xs font-medium text-neutral-50">
                          {p.title}
                        </div>
                        {p.subtitle && (
                          <div className="text-[11px] text-neutral-300">
                            {p.subtitle}
                          </div>
                        )}
                        <div className="line-clamp-2 text-[11px] text-neutral-400">
                          {p.overview}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

        const assistantMessage: ChatMessage = {
          id: nextId + 1,
          role: "assistant",
          content: assistantContent,
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Error talking to Phil Bot.");
        const fallbackMessage: ChatMessage = {
          id: nextId + 1,
          role: "assistant",
          content: (
            <p>
              I ran into an issue reaching my brain in the cloud.
              Please try again in a moment.
            </p>
          ),
        };
        setMessages((prev) => [...prev, fallbackMessage]);
      } finally {
        setIsLoading(false);
      }
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
      {/* Solid black overlay to hide legacy blue background */}
      <div className="pointer-events-none fixed inset-0 bg-black" />

      {/* Background video (above overlay) */}
      <video
        ref={videoRef}
        className="pointer-events-none fixed inset-0 h-screen w-screen object-contain"
        src="/video/lowbit_olarte.mp4"
        autoPlay
        loop
        muted={!soundOn}
        playsInline
      />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full flex-col">
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
                    {isLoading && (
                      <div className="mt-1 text-[11px] text-neutral-400">
                        Thinking...
                      </div>
                    )}
                    {error && (
                      <div className="mt-1 text-[11px] text-red-400">
                        {error}
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>
            )}

            {/* Sound toggle + input row pinned at the bottom, with gradient glow matching header name */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSoundOn((prev) => !prev)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs text-neutral-900 shadow-lg shadow-black/70 backdrop-blur-sm hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label={soundOn ? "Mute background video" : "Turn on background video sound"}
              >
                <span
                  className={
                    "relative flex h-7 w-7 items-center justify-center rounded-full transition-colors " +
                    (soundOn ? "bg-sky-200" : "bg-transparent")
                  }
                >
                  <span className="text-base leading-none">🔊</span>
                  {!soundOn && (
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[16px] font-bold text-red-500">
                      ✕
                    </span>
                  )}
                </span>
              </button>

              <div className="relative flex-1">
                <div className="pointer-events-none absolute -inset-[2px] rounded-full bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-500 opacity-60 blur-md" />
                <form
                  onSubmit={handleSubmit}
                  className="relative flex w-full items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-neutral-900 sm:text-base"
                >
                  <textarea
                    ref={textareaRef}
                    className="max-h-32 min-h-[28px] w-full resize-none bg-transparent px-1 text-base outline-none placeholder:text-sm placeholder:text-neutral-500 sm:text-base"
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
