"use client";
import { useEffect, useRef, useState } from "react";

interface BigNumberInterruptProps {
  number: string;
  label: string;
  source?: string;
  className?: string;
}

/**
 * SIGNATURE MOMENT #1: Full-viewport stat interrupt
 * The number fills the entire screen as you scroll past it.
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
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-[8%] ${className}`}
    >
      <div className="text-center">
        <span
          className={`block font-serif leading-[0.85] tracking-tight text-paper transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
          style={{ fontSize: "clamp(5rem, 20vw, 18rem)" }}
        >
          {number}
        </span>
        <p
          className={`mt-6 font-sans text-lg md:text-xl text-muted max-w-lg mx-auto transition-all duration-[1s] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {label}
        </p>
        {source && (
          <p
            className={`mt-3 font-sans text-xs uppercase tracking-[0.24em] text-muted/50 transition-all duration-[1s] delay-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {source}
          </p>
        )}
      </div>

      <div
        className={`absolute bottom-[15%] left-1/2 h-px bg-[#C9A55C] transition-all duration-[1.6s] delay-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "w-24 -translate-x-1/2 opacity-60" : "w-0 -translate-x-1/2 opacity-0"
        }`}
      />
    </div>
  );
}
