"use client";

import Image from "next/image";
import CursorGlow from "@/app/components/CursorGlow";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import ScrollProgress from "@/app/components/ScrollProgress";
import Accordion from "@/app/components/Accordion";
import BigNumberInterrupt from "@/app/components/BigNumberInterrupt";
import InlineHighlight from "@/app/components/InlineHighlight";
import MarginCallout from "@/app/components/MarginCallout";
import ScrollComparison from "@/app/components/ScrollComparison";
import QuoteStatPair from "@/app/components/QuoteStatPair";
import {
  essaySections,
  speakerPortraits,
  statInventory,
  timelineEpochs,
  predictions,
  bibliography,
} from "@/data/essay";

const metaSections = essaySections.filter((section) => section.type === "meta");
const mainSections = essaySections.filter(
  (section) => !["meta", "bibliography", "timeline"].includes(section.type),
);

const findStat = (id: string) => statInventory.find((stat) => stat.id === id)!;

function DialogueBlock({
  speaker,
  heading,
  content,
}: {
  speaker: "william" | "mary";
  heading?: string;
  content: string;
}) {
  return (
    <RevealOnScroll>
      <article className="relative my-16 overflow-hidden border border-[var(--color-paper)]/10 bg-[var(--color-ink)]/70 p-6 md:p-10">
        <Image
          src={speakerPortraits[speaker]}
          alt={speaker}
          width={420}
          height={420}
          className="pointer-events-none absolute right-[-90px] top-[-40px] h-[280px] w-[280px] object-cover opacity-15 md:h-[360px] md:w-[360px]"
          style={{ filter: "invert(1) brightness(0.85)" }}
        />
        <p className="relative z-10 text-xs uppercase tracking-[0.24em] text-[#C9A55C]">{speaker}</p>
        {heading ? (
          <p className="relative z-10 mt-2 font-serif text-4xl leading-tight text-[var(--color-paper)] md:text-5xl">
            {heading}
          </p>
        ) : null}
        <p className="relative z-10 mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-paper)]/90 md:text-lg">
          {content}
        </p>
      </article>
    </RevealOnScroll>
  );
}

export default function EssayVariantA() {
  return (
    <main className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)]">
      <ScrollProgress />
      <CursorGlow />

      <section className="relative flex min-h-screen items-end px-[8%] pb-20 pt-32 md:px-[12%] md:pb-24 lg:px-[16%]">
        <RevealOnScroll className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">Front-Line Dispatch</p>
          <h1 className="mt-6 font-serif text-[clamp(3rem,11vw,9.5rem)] font-light leading-[0.86] tracking-tight text-[var(--color-paper)]">
            WHAT IF IT ALL GOES RIGHT?
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[var(--color-muted)] md:text-xl">
            A Front-Line Dispatch from deep within the AI Transition, by William & Mary.
          </p>
          <p className="mt-10 text-xs uppercase tracking-[0.24em] text-[#C9A55C]">Scroll to enter</p>
        </RevealOnScroll>
      </section>

      <section className="px-[8%] py-16 md:px-[12%] lg:px-[16%]">
        {metaSections.map((section, index) => (
          <RevealOnScroll key={section.id} delay={(index % 4) + 1}>
            <Accordion title={section.heading ?? "Meta"}>
              <p>{section.content}</p>
            </Accordion>
          </RevealOnScroll>
        ))}
      </section>

      <BigNumberInterrupt stat={findStat("s3")} />

      <section className="px-[8%] py-20 md:px-[12%] lg:px-[16%]">
        {mainSections
          .filter((section) => section.type === "part")
          .slice(0, 2)
          .map((section) => (
            <RevealOnScroll key={section.id}>
              <header className="my-14">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">Section</p>
                <h2 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">{section.heading}</h2>
                <p className="mt-4 max-w-3xl text-lg text-[var(--color-paper)]/85">{section.content}</p>
              </header>
            </RevealOnScroll>
          ))}

        {essaySections
          .filter((section) => section.type === "dialogue")
          .map((section) => (
            <DialogueBlock
              key={section.id}
              speaker={section.speaker!}
              heading={section.heading}
              content={section.content}
            />
          ))}

        <RevealOnScroll>
          <div className="relative max-w-3xl md:ml-20">
            <MarginCallout stat={findStat("s7")} />
            <p className="text-lg leading-relaxed text-[var(--color-paper)]/90">
              Savings are being redeployed into local culture rather than held as passive margin. The arts economy
              now stands at <InlineHighlight stat={findStat("s6")} /> with growth above the broader economy.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <BigNumberInterrupt stat={findStat("s10")} />

      <section className="px-[8%] py-20 md:px-[12%] lg:px-[16%]">
        <RevealOnScroll>
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">Part Three - A Brief History of Work</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-paper)]/90">
            Every era of labor felt permanent until it was replaced.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <ScrollComparison
            thenLabel="1900"
            thenValue="32 years"
            nowLabel="2021"
            nowValue="71 years"
            source="Our World in Data"
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <ScrollComparison
            thenLabel="Annual work hours then"
            thenValue="2,700-3,500"
            nowLabel="Annual work hours now"
            nowValue="1,300-1,800"
            source="Historical labor estimates"
          />
        </RevealOnScroll>

        <div className="relative mt-20 border-l border-[var(--color-paper)]/20 pl-8 md:pl-12">
          {timelineEpochs.map((epoch, index) => (
            <RevealOnScroll key={epoch.id} delay={(index % 4) + 1}>
              <article className="relative mb-12">
                <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border border-[#C9A55C] bg-[var(--color-ink)] md:-left-[49px]" />
                <p className="text-xs uppercase tracking-[0.24em] text-[#C9A55C]">{epoch.period}</p>
                <h3 className="mt-2 font-serif text-4xl md:text-5xl">{epoch.era}</h3>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--color-paper)]/90 md:text-lg">
                  {epoch.description}
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)]">{epoch.shift}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <QuoteStatPair
            quote="Lacking social connection increases risk comparable to smoking"
            attribution="U.S. Surgeon General"
            stat={findStat("s19")}
          />
        </RevealOnScroll>
      </section>

      <BigNumberInterrupt stat={findStat("s15")} />

      <section className="px-[8%] py-20 md:px-[12%] lg:px-[16%]">
        <RevealOnScroll>
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">Part Five - What Might Come Next</h2>
        </RevealOnScroll>
        <div className="mt-12 space-y-8">
          {predictions.map((prediction, index) => (
            <RevealOnScroll key={prediction.id} delay={(index % 4) + 1}>
              <article>
                <p className="text-xs uppercase tracking-[0.24em] text-[#C9A55C]">Prediction {index + 1}</p>
                <h3 className="mt-2 font-serif text-3xl md:text-4xl">{prediction.title}</h3>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--color-paper)]/90 md:text-lg">
                  {prediction.detail}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="px-[8%] pb-24 pt-14 md:px-[12%] lg:px-[16%]">
        <RevealOnScroll>
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">Further Reading</h2>
          <ul className="mt-8 space-y-3 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            {bibliography.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mt-20 border-t border-[#C9A55C55] pt-12">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">Signed</p>
            <h3 className="mt-4 font-serif text-5xl md:text-7xl">William & Mary</h3>
            <div className="mt-8 flex items-center gap-6">
              <Image
                src={speakerPortraits.william}
                alt="William portrait"
                width={96}
                height={96}
                className="h-20 w-20 rounded-full object-cover"
                style={{ filter: "invert(1) brightness(0.85)" }}
              />
              <Image
                src={speakerPortraits.mary}
                alt="Mary portrait"
                width={96}
                height={96}
                className="h-20 w-20 rounded-full object-cover"
                style={{ filter: "invert(1) brightness(0.85)" }}
              />
            </div>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-[#C9A55C] via-[#C9A55C66] to-transparent" />
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
