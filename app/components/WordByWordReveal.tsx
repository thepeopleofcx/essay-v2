"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  attribution?: string;
  className?: string;
}

/**
 * SIGNATURE MOMENT #2: Quote reveals itself word by word
 * Each word fades in sequentially as the element enters the viewport.
 */
export default function WordByWordReveal({ text, attribution, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <div ref={ref} className={`py-24 md:py-32 px-[8%] md:px-[16%] ${className}`}>
      <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl leading-snug text-paper/90">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block mr-[0.3em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: triggered ? 1 : 0,
              transform: triggered ? "translateY(0)" : "translateY(12px)",
              transitionDelay: triggered ? `${i * 60}ms` : "0ms",
            }}
          >
            {word}
          </span>
        ))}
      </blockquote>
      {attribution && (
        <p
          className="mt-8 font-sans text-xs uppercase tracking-[0.28em] text-muted/60 transition-all duration-700"
          style={{
            opacity: triggered ? 1 : 0,
            transitionDelay: triggered ? `${words.length * 60 + 200}ms` : "0ms",
          }}
        >
          — {attribution}
        </p>
      )}
    </div>
  );
}
