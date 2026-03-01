"use client";
import { useEffect, useRef, useState } from "react";

interface ScrollComparisonProps {
  before: string;
  after: string;
  label: string;
  source?: string;
}

/**
 * Scroll comparison: "then" number appears first in grey,
 * "then" label fades up, then "after" number fades in to the right with "now" below.
 * Both remain visible in the end state — side by side.
 */
export default function ScrollComparison({ before, after, label, source }: ScrollComparisonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0); // 0=hidden, 1=before visible, 2=then label, 3=after visible

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setPhase(3);
      return;
    }

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = 1 - rect.top / (vh * 0.75);

      if (progress > 0.7) setPhase(3);
      else if (progress > 0.45) setPhase(2);
      else if (progress > 0.2) setPhase(1);
      else setPhase(0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="relative py-16 md:py-20 px-[8%] md:px-[16%] overflow-hidden"
    >
      <div className="flex items-end justify-center gap-8 md:gap-16">
        {/* BEFORE / THEN */}
        <div
          className="text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span
            className="block font-serif text-muted/40 leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            {before}
          </span>
          <p
            className="mt-2 text-xs uppercase tracking-[0.28em] text-muted/30 transition-all duration-500 delay-200"
            style={{
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? "translateY(0)" : "translateY(8px)",
            }}
          >
            then
          </p>
        </div>

        {/* AFTER / NOW */}
        <div
          className="text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span
            className="block font-serif text-paper leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            {after}
          </span>
          <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#C9A55C]/70">
            now
          </p>
        </div>
      </div>

      {/* Label + source — fades in with the "after" */}
      <div
        className="text-center mt-6 transition-all duration-700 delay-300"
        style={{
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? "translateY(0)" : "translateY(10px)",
        }}
      >
        <p className="font-sans text-sm md:text-base text-muted/70 max-w-md mx-auto">{label}</p>
        {source && (
          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted/30">{source}</p>
        )}
      </div>
    </div>
  );
}
