"use client";

import { useState } from "react";
import type { StatMoment } from "@/data/essay";

type InlineHighlightProps = {
  stat: StatMoment;
};

export default function InlineHighlight({ stat }: InlineHighlightProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <span className="inline">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mx-1 inline-flex items-center border-b border-[#C9A55C] font-semibold text-[#C9A55C] transition hover:text-[var(--color-paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A55C]"
        aria-expanded={expanded}
      >
        {stat.number}
      </button>
      {expanded ? (
        <span className="ml-2 inline rounded-sm border border-[#C9A55C66] bg-[#C9A55C14] px-2 py-1 text-sm leading-relaxed text-[var(--color-paper)]">
          {stat.label}. <span className="text-[var(--color-muted)]">Source: {stat.source}</span>
        </span>
      ) : null}
    </span>
  );
}
