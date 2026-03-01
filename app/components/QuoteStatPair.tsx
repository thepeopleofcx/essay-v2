import type { StatMoment } from "@/data/essay";

type QuoteStatPairProps = {
  quote: string;
  attribution?: string;
  stat: StatMoment;
};

export default function QuoteStatPair({ quote, attribution, stat }: QuoteStatPairProps) {
  return (
    <section className="my-12 border border-[var(--color-paper)]/10 bg-[var(--color-ink)]/80 p-6 md:p-8">
      <blockquote className="font-serif text-3xl leading-tight text-[var(--color-paper)] md:text-4xl">“{quote}”</blockquote>
      {attribution ? (
        <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{attribution}</p>
      ) : null}
      <div className="mt-8 border-t border-[#C9A55C55] pt-5">
        <p className="font-serif text-5xl text-[#C9A55C] md:text-6xl">{stat.number}</p>
        <p className="mt-2 text-sm text-[var(--color-paper)]">{stat.label}</p>
        <p className="mt-1 text-xs text-[var(--color-muted)]">Source: {stat.source}</p>
      </div>
    </section>
  );
}
