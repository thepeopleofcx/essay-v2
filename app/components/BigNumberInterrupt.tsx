import type { StatMoment } from "@/data/essay";

type BigNumberInterruptProps = {
  stat: StatMoment;
  className?: string;
};

export default function BigNumberInterrupt({ stat, className = "" }: BigNumberInterruptProps) {
  return (
    <section
      className={`relative left-1/2 w-screen -translate-x-1/2 border-y border-[#C9A55C33] bg-[var(--color-ink)] py-20 md:py-28 ${className}`}
      aria-label={stat.label}
    >
      <div className="mx-auto px-[8%] md:px-[12%] lg:px-[16%]">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">stat moment</p>
        <p className="mt-2 font-serif text-[clamp(3.5rem,14vw,12rem)] font-light leading-[0.85] text-[var(--color-paper)]">
          {stat.number}
        </p>
        <div className="mt-4 h-px w-40 bg-[#C9A55C]" />
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--color-paper)]/90 md:text-lg">{stat.label}</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)]">{stat.context}</p>
      </div>
    </section>
  );
}
