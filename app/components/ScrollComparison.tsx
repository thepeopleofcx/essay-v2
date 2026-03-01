"use client";
import { useEffect, useRef, useState } from "react";

interface ScrollComparisonProps {
  before: string;
  after: string;
  label: string;
  source?: string;
}

/**
 * SIGNATURE MOMENT #4: Before/After scroll comparison
 * The "before" number morphs into the "after" as you scroll through.
 */
export default function ScrollComparison({ before, after, label, source }: ScrollComparisonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = 1 - (rect.top / (vh * 0.6));
      setProgress(Math.max(0, Math.min(1, prefersReduced ? 1 : p)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const showAfter = progress > 0.5;

  return (
    <div
      ref={ref}
      className="relative flex min-h-[60vh] items-center justify-center px-[8%] overflow-hidden"
    >
      <div className="text-center">
        <div
          className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700"
          style={{
            opacity: showAfter ? 0 : visible ? 1 : 0,
            transform: showAfter ? "translateY(-30px) scale(0.95)" : "translateY(0) scale(1)",
          }}
        >
          <span className="font-serif text-paper/40" style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}>
            {before}
          </span>
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-muted/40">then</p>
        </div>

        <div
          className="flex flex-col items-center justify-center transition-all duration-700"
          style={{
            opacity: showAfter && visible ? 1 : 0,
            transform: showAfter ? "translateY(0) scale(1)" : "translateY(30px) scale(1.05)",
          }}
        >
          <span className="font-serif text-paper" style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}>
            {after}
          </span>
          <p className="mt-2 font-sans text-lg md:text-xl text-muted max-w-md">{label}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[#C9A55C]/60">now</p>
          {source && (
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-muted/30">{source}</p>
          )}
        </div>
      </div>
    </div>
  );
}
