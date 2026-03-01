"use client";
import { useEffect, useRef, useState } from "react";

interface BigNumberInterruptProps {
  number: string;
  label: string;
  source?: string;
  className?: string;
}

/**
 * Stat interrupt — still dramatic but more integrated into essay flow.
 * Reduced whitespace, smaller scale, gold accent line.
 */
export default function BigNumberInterrupt({ number, label, source, className = "" }: BigNumberInterruptProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative py-16 md:py-24 px-[8%] md:px-[16%] ${className}`}
    >
      <div className="text-center">
        <span
          className={`block font-serif leading-[0.85] tracking-tight text-paper transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ fontSize: "clamp(3rem, 12vw, 8rem)" }}
        >
          {number}
        </span>
        <p
          className={`mt-4 font-sans text-sm md:text-base text-muted max-w-md mx-auto transition-all duration-[0.8s] delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {label}
        </p>
        {source && (
          <p
            className={`mt-2 font-sans text-xs uppercase tracking-[0.24em] text-muted/40 transition-all duration-[0.8s] delay-400 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {source}
          </p>
        )}
      </div>

      <div
        className={`mx-auto mt-8 h-px bg-[#C9A55C] transition-all duration-[1.4s] delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "w-16 opacity-40" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
}
