"use client";
import { useEffect, useRef, useState } from "react";

interface Era {
  id: string;
  era: string;
  period: string;
  description: string;
  shift: string;
}

interface Props {
  eras: Era[];
}

/**
 * SIGNATURE MOMENT #3: Parallax timeline between eras
 */
export default function TimelineParallax({ eras }: Props) {
  return (
    <div className="relative">
      {eras.map((era, i) => (
        <TimelineEra key={era.id} era={era} index={i} total={eras.length} />
      ))}
    </div>
  );
}

function TimelineEra({ era, index, total }: { era: Era; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);

    if (prefersReduced) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vh = window.innerHeight;
      const progress = (center - vh / 2) / vh;
      setOffset(progress * 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className="relative min-h-[70vh] flex items-center px-[8%] md:px-[16%]"
    >
      <div className="absolute left-[8%] md:left-[12%] top-0 bottom-0 w-px bg-paper/5" />
      <div
        className={`absolute left-[8%] md:left-[12%] w-2 h-2 rounded-full -translate-x-[3px] transition-all duration-1000 ${
          visible ? "bg-[#C9A55C] scale-100" : "bg-paper/10 scale-0"
        } ${isLast ? "animate-pulse" : ""}`}
      />

      <div
        className={`ml-8 md:ml-16 max-w-2xl transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `translateY(${offset}px)` }}
      >
        <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/50 mb-2">
          {era.period}
        </p>
        <h3 className="font-serif text-3xl md:text-5xl text-paper mb-4">
          {era.era}
        </h3>
        <p className="font-sans text-base md:text-lg text-muted leading-relaxed mb-6 max-w-xl">
          {era.description}
        </p>
        <span
          className={`inline-block font-serif text-xl md:text-2xl transition-all duration-[1.4s] delay-300 ${
            visible ? "opacity-100 text-[#C9A55C]" : "opacity-0"
          }`}
        >
          {era.shift}
        </span>
      </div>
    </div>
  );
}
