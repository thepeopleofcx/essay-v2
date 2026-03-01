"use client";
import RevealOnScroll from "./RevealOnScroll";

interface Props {
  number: string;
  label: string;
  source?: string;
}

export default function MarginCallout({ number, label, source }: Props) {
  return (
    <RevealOnScroll>
      <div className="my-12 md:my-16 ml-[8%] md:ml-[16%] pl-6 border-l border-[#C9A55C]/30 max-w-xl">
        <span className="font-serif text-2xl md:text-3xl text-[#C9A55C]">
          {number}
        </span>
        <p className="mt-1 font-sans text-sm text-muted">{label}</p>
        {source && (
          <p className="mt-1 font-sans text-xs text-muted/40">{source}</p>
        )}
      </div>
    </RevealOnScroll>
  );
}
