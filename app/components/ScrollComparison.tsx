"use client";

import { useEffect, useRef, useState } from "react";

type ScrollComparisonProps = {
  thenLabel: string;
  thenValue: string;
  nowLabel: string;
  nowValue: string;
  source?: string;
};

export default function ScrollComparison({
  thenLabel,
  thenValue,
  nowLabel,
  nowValue,
  source,
}: ScrollComparisonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height + viewport;
      const current = viewport - rect.top;
      const next = Math.max(0, Math.min(1, current / total));
      setProgress(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="my-14 border-y border-[var(--color-paper)]/10 py-8"
      aria-label="scroll comparison"
    >
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">then to now</p>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div
          className="transition-opacity duration-500 motion-reduce:transition-none"
          style={{ opacity: 1 - progress * 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{thenLabel}</p>
          <p className="font-serif text-5xl text-[var(--color-paper)] md:text-6xl">{thenValue}</p>
        </div>
        <div
          className="transition-opacity duration-500 motion-reduce:transition-none"
          style={{ opacity: 0.3 + progress * 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{nowLabel}</p>
          <p className="font-serif text-5xl text-[#C9A55C] md:text-6xl">{nowValue}</p>
        </div>
      </div>
      {source ? <p className="mt-4 text-xs text-[var(--color-muted)]">Source: {source}</p> : null}
    </section>
  );
}
