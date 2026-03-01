"use client";

import { useState } from "react";
import type { StatMoment } from "@/data/essay";

type MarginCalloutProps = {
  stat: StatMoment;
};

export default function MarginCallout({ stat }: MarginCalloutProps) {
  const [open, setOpen] = useState(false);

  return (
    <aside className="group relative my-6 border-l border-[#C9A55C66] pl-4 text-sm text-[var(--color-muted)] md:absolute md:-left-64 md:top-0 md:w-56 md:pl-5">
      <button
        type="button"
        className="w-full text-left"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className="font-serif text-3xl leading-none text-[#C9A55C]">{stat.number}</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">{stat.source}</p>
      </button>
      <div
        className={`mt-2 overflow-hidden text-xs leading-relaxed text-[var(--color-paper)] transition-all duration-400 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100"
        }`}
      >
        {stat.label}
      </div>
    </aside>
  );
}
