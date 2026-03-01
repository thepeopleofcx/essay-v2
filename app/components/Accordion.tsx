"use client";

import { ReactNode, useState } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border-b border-[var(--color-paper)]/15 py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="font-serif text-3xl leading-tight text-[var(--color-paper)] md:text-4xl">{title}</span>
        <span className="text-xs uppercase tracking-[0.24em] text-[#C9A55C]">{open ? "collapse" : "expand"}</span>
      </button>
      <div className="mt-3 h-px w-full bg-gradient-to-r from-[#C9A55C] via-[#C9A55C66] to-transparent" />
      <div
        className={`grid transition-all duration-500 motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-4 text-base leading-relaxed text-[var(--color-paper)]/90 md:text-lg">{children}</div>
        </div>
      </div>
    </section>
  );
}
