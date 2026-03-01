import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-ink)] px-[8%] py-20 text-[var(--color-paper)] md:px-[12%] lg:px-[16%]">
      <section className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.28em] text-[#C9A55C]">Essay Variants</p>
        <h1 className="mt-4 font-serif text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.88]">
          What If It All Goes Right?
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted)]">
          Two reading experiences built from the same source essay: cinematic immersion and interactive thesis lab.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Link
            href="/essay/a"
            className="group border border-[var(--color-paper)]/15 p-6 transition hover:border-[#C9A55C66] hover:bg-[var(--color-paper)]/[0.03]"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Variant A</p>
            <h2 className="mt-2 font-serif text-4xl">Cinematic Editorial Scroll</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-paper)]/85">
              Full-bleed manifesto scroll with interruptions, portrait dialogue overlays, and a vertical time-axis.
            </p>
          </Link>

          <Link
            href="/essay/b"
            className="group border border-[var(--color-paper)]/15 p-6 transition hover:border-[#C9A55C66] hover:bg-[var(--color-paper)]/[0.03]"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Variant B</p>
            <h2 className="mt-2 font-serif text-4xl">Interactive Thesis Lab</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-paper)]/85">
              Sticky argument spine, fast/deep reading modes, threaded dialogue, evidence cards, and counterarguments.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
