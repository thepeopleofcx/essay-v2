"use client";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function CollapsibleMeta({ title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <RevealOnScroll>
      <div className="border-b border-paper/5 px-[8%] md:px-[16%]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-6 group cursor-pointer"
        >
          <span className="font-serif text-lg md:text-xl text-paper/70 group-hover:text-paper transition-colors">
            {title}
          </span>
          <span
            className={`text-[#C9A55C] text-sm transition-transform duration-300 ${
              open ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "max-h-[2000px] opacity-100 pb-8" : "max-h-0 opacity-0"
          }`}
        >
          <div className="font-sans text-sm md:text-base text-muted leading-relaxed max-w-2xl space-y-4">
            {children}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
