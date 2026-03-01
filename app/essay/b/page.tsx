"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import CursorGlow from "@/app/components/CursorGlow";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import Accordion from "@/app/components/Accordion";
import {
  bibliography,
  counterarguments,
  essaySections,
  speakerPortraits,
  statInventory,
  timelineEpochs,
} from "@/data/essay";

const navSections = essaySections.filter((section) => ["meta", "part", "prose", "bibliography"].includes(section.type));
const dialogueSections = essaySections.filter((section) => section.type === "dialogue");

function EvidenceCard({
  number,
  label,
  context,
  source,
}: {
  number: string;
  label: string;
  context: string;
  source: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="border border-[var(--color-paper)]/15 bg-[var(--color-ink)]/75 p-4">
      <button type="button" className="w-full text-left" onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
        <p className="font-serif text-4xl text-[#C9A55C]">{number}</p>
        <p className="mt-2 text-sm text-[var(--color-paper)]">{label}</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Tap for evidence</p>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">{context}</p>
        <p className="mt-2 text-xs text-[var(--color-muted)]">Source: {source}</p>
      </div>
    </article>
  );
}

export default function EssayVariantB() {
  const [mode, setMode] = useState<"fast" | "deep">("deep");
  const [showSources, setShowSources] = useState(false);
  const [showNumbers, setShowNumbers] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(navSections[0]?.id ?? "");

  const topStats = useMemo(() => statInventory.slice(0, 8), []);

  useEffect(() => {
    const ids = navSections.map((item) => item.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)]">
      <CursorGlow />

      <header className="border-b border-[var(--color-paper)]/10 px-[8%] py-6 md:px-[12%] lg:px-[16%]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#C9A55C]">Interactive Thesis Lab</p>
            <h1 className="mt-2 font-serif text-4xl md:text-5xl">What If It All Goes Right?</h1>
          </div>
          <button
            type="button"
            className="rounded border border-[var(--color-paper)]/20 px-3 py-2 text-xs uppercase tracking-[0.24em] md:hidden"
            onClick={() => setDrawerOpen((prev) => !prev)}
          >
            menu
          </button>
        </div>
      </header>

      <div className="grid gap-0 md:grid-cols-[320px_1fr]">
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-[82%] max-w-[320px] overflow-y-auto border-r border-[var(--color-paper)]/10 bg-[var(--color-ink)] px-6 py-8 transition-transform duration-300 md:sticky md:top-0 md:h-screen md:w-auto md:max-w-none md:translate-x-0 md:px-8 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Argument spine</p>
            <nav className="space-y-3">
              {navSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setDrawerOpen(false)}
                  className={`block border-l pl-3 text-sm transition ${
                    activeId === section.id
                      ? "border-[#C9A55C] text-[var(--color-paper)]"
                      : "border-transparent text-[var(--color-muted)] hover:border-[var(--color-paper)]/40 hover:text-[var(--color-paper)]"
                  }`}
                >
                  {section.heading}
                </a>
              ))}
            </nav>

            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Reading mode</p>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setMode("fast")}
                  className={`rounded border px-3 py-2 text-xs uppercase tracking-[0.2em] ${
                    mode === "fast" ? "border-[#C9A55C] text-[#C9A55C]" : "border-[var(--color-paper)]/20 text-[var(--color-muted)]"
                  }`}
                >
                  Fast read
                </button>
                <button
                  type="button"
                  onClick={() => setMode("deep")}
                  className={`rounded border px-3 py-2 text-xs uppercase tracking-[0.2em] ${
                    mode === "deep" ? "border-[#C9A55C] text-[#C9A55C]" : "border-[var(--color-paper)]/20 text-[var(--color-muted)]"
                  }`}
                >
                  Deep read
                </button>
              </div>
            </div>

            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <input
                type="checkbox"
                checked={showSources}
                onChange={(event) => setShowSources(event.target.checked)}
                className="h-4 w-4 accent-[#C9A55C]"
              />
              Show sources
            </label>

            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <input
                type="checkbox"
                checked={showNumbers}
                onChange={(event) => setShowNumbers(event.target.checked)}
                className="h-4 w-4 accent-[#C9A55C]"
              />
              Show numbers
            </label>
          </div>
        </aside>

        <section className="relative px-[8%] py-10 md:px-[12%] lg:px-[16%]">
          <div className="mx-auto max-w-3xl space-y-14">
            {navSections.map((section, index) => (
              <RevealOnScroll key={section.id} delay={(index % 4) + 1}>
                <article id={section.id} className="scroll-mt-20 border-b border-[var(--color-paper)]/10 pb-10">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{section.type}</p>
                  <h2 className="mt-2 font-serif text-4xl leading-tight md:text-5xl">{section.heading}</h2>
                  <p className="mt-4 text-base leading-relaxed text-[var(--color-paper)]/90 md:text-lg">
                    {mode === "fast" ? section.summary ?? section.content : section.content}
                  </p>
                  {showSources && section.sourceCitations?.length ? (
                    <p className="mt-4 text-xs text-[var(--color-muted)]">
                      Sources: {section.sourceCitations.join("; ")}
                    </p>
                  ) : null}
                </article>
              </RevealOnScroll>
            ))}

            <RevealOnScroll>
              <section id="dialogue-thread" className="scroll-mt-20">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Threaded dialogue</p>
                <h2 className="mt-2 font-serif text-4xl md:text-5xl">William <span className="text-[#C9A55C]">x</span> Mary</h2>
                <div className="mt-8 space-y-4">
                  {dialogueSections.map((item) => (
                    <article
                      key={item.id}
                      className={`flex items-start gap-3 ${item.speaker === "mary" ? "justify-end" : "justify-start"}`}
                    >
                      {item.speaker === "william" ? (
                        <Image
                          src={speakerPortraits.william}
                          alt="William avatar"
                          width={32}
                          height={32}
                          className="mt-1 h-8 w-8 rounded-full object-cover"
                          style={{ filter: "invert(1) brightness(0.85)" }}
                        />
                      ) : null}
                      <div
                        className={`max-w-[84%] rounded-2xl border px-4 py-3 ${
                          item.speaker === "mary"
                            ? "border-[#C9A55C66] bg-[#C9A55C12]"
                            : "border-[var(--color-paper)]/15 bg-[var(--color-paper)]/5"
                        }`}
                      >
                        <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">{item.speaker}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--color-paper)]/90">
                          {mode === "fast" ? item.summary ?? item.content : item.content}
                        </p>
                        {showSources && item.sourceCitations?.length ? (
                          <p className="mt-2 text-[11px] text-[var(--color-muted)]">
                            Sources: {item.sourceCitations.join("; ")}
                          </p>
                        ) : null}
                      </div>
                      {item.speaker === "mary" ? (
                        <Image
                          src={speakerPortraits.mary}
                          alt="Mary avatar"
                          width={32}
                          height={32}
                          className="mt-1 h-8 w-8 rounded-full object-cover"
                          style={{ filter: "invert(1) brightness(0.85)" }}
                        />
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            </RevealOnScroll>

            {showNumbers ? (
              <RevealOnScroll>
                <section id="evidence-cards" className="scroll-mt-20">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Evidence cards</p>
                  <h2 className="mt-2 font-serif text-4xl md:text-5xl">Show the numbers</h2>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {topStats.map((stat) => (
                      <EvidenceCard key={stat.id} {...stat} />
                    ))}
                  </div>
                </section>
              </RevealOnScroll>
            ) : null}

            <RevealOnScroll>
              <section id="timeline-strip" className="scroll-mt-20">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Timeline strip</p>
                <h2 className="mt-2 font-serif text-4xl md:text-5xl">A brief history of work</h2>
                <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
                  {timelineEpochs.map((epoch) => (
                    <article
                      key={epoch.id}
                      className="min-w-[270px] snap-start border border-[var(--color-paper)]/15 bg-[var(--color-paper)]/5 p-4 md:min-w-[320px]"
                    >
                      <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A55C]">{epoch.period}</p>
                      <h3 className="mt-2 font-serif text-3xl">{epoch.era}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--color-paper)]/85">{epoch.description}</p>
                      <p className="mt-2 text-xs text-[var(--color-muted)]">{epoch.shift}</p>
                    </article>
                  ))}
                </div>
              </section>
            </RevealOnScroll>

            <RevealOnScroll>
              <section id="counterarguments" className="scroll-mt-20">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Counterarguments</p>
                <h2 className="mt-2 font-serif text-4xl md:text-5xl">But what about...</h2>
                <div className="mt-6">
                  {counterarguments.map((item) => (
                    <Accordion key={item.id} title={item.question}>
                      {item.response}
                    </Accordion>
                  ))}
                </div>
              </section>
            </RevealOnScroll>

            <RevealOnScroll>
              <section id="bibliography-panel" className="scroll-mt-20 pb-10">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Bibliography</p>
                <h2 className="mt-2 font-serif text-4xl md:text-5xl">Further Reading</h2>
                <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
                  {bibliography.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </main>
  );
}
