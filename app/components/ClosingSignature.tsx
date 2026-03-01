"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * SIGNATURE MOMENT #5: Closing signature with both portraits drawing in
 * The two portraits slide toward each other and a gold line draws beneath the names.
 */
export default function ClosingSignature() {
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
    <div ref={ref} className="py-32 md:py-48 px-[8%] md:px-[16%]">
      <div className="flex items-center justify-center gap-8 md:gap-16">
        {/* William portrait */}
        <div
          className={`transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden relative">
            <Image
              src="/images/william.jpg"
              alt="William"
              fill
              className="object-cover"
              style={{ filter: "invert(1) brightness(0.85)" }}
            />
          </div>
        </div>

        {/* Ampersand */}
        <span
          className={`font-serif text-3xl md:text-5xl text-[#C9A55C] transition-all duration-[1.2s] delay-300 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          &amp;
        </span>

        {/* Mary portrait */}
        <div
          className={`transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden relative">
            <Image
              src="/images/mary.jpg"
              alt="Mary"
              fill
              className="object-cover"
              style={{ filter: "invert(1) brightness(0.85)" }}
            />
          </div>
        </div>
      </div>

      {/* Names */}
      <p
        className={`mt-8 text-center font-serif text-xl md:text-2xl text-paper/80 transition-all duration-1000 delay-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        William &amp; Mary
      </p>

      {/* Gold line drawing in */}
      <div className="flex justify-center mt-4">
        <div
          className={`h-px bg-[#C9A55C] transition-all duration-[1.8s] delay-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible ? "w-32 opacity-60" : "w-0 opacity-0"
          }`}
        />
      </div>

      <p
        className={`mt-6 text-center font-sans text-xs uppercase tracking-[0.28em] text-muted/40 transition-all duration-700 delay-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        Cofounders · A cultural technology company · 2025
      </p>
    </div>
  );
}
