"use client";
import RevealOnScroll from "./RevealOnScroll";

interface Props {
  speaker: "william" | "mary";
  children: React.ReactNode;
  delay?: number;
}

export default function DialogueTurn({ speaker, children, delay = 0 }: Props) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="mb-12 md:mb-16">
        <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/50 mb-4">
          {speaker === "william" ? "William" : "Mary"} —
        </p>
        <div className="font-sans text-base md:text-lg text-paper/85 leading-relaxed max-w-2xl space-y-6">
          {children}
        </div>
      </div>
    </RevealOnScroll>
  );
}
