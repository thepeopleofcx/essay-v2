"use client";
import { useState } from "react";
import { timelineEpochs, bibliography } from "@/data/essay";
import CursorGlow from "@/app/components/CursorGlow";
import MarginCallout from "@/app/components/MarginCallout";

const tocSections = [
  { id: "preface", label: "Preface" },
  { id: "who", label: "Who We Are" },
  { id: "part1", label: "Part 1 — The World Has Changed" },
  { id: "part2", label: "Part 2 — Bullshit Jobs" },
  { id: "part3", label: "Part 3 — History of Work" },
  { id: "part5", label: "Part 5 — What Comes Next" },
  { id: "part6", label: "Part 6 — Transition" },
  { id: "conclusion", label: "Conclusion" },
  { id: "reading", label: "Further Reading" },
];

export default function VariantB() {
  const [showSources, setShowSources] = useState(false);
  const [deepRead, setDeepRead] = useState(false);

  return (
    <div className="relative bg-ink min-h-screen flex">
      <CursorGlow />

      {/* ═══ LEFT SIDEBAR — Argument Spine ═══ */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-56 xl:w-64 border-r border-paper/5 px-6 py-12 z-50 bg-ink/95 backdrop-blur-sm">
        <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mb-8">
          Contents
        </p>
        <nav className="flex-1 space-y-1">
          {tocSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block font-sans text-sm text-muted/60 hover:text-paper py-1.5 transition-colors nav-link"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="space-y-4 pt-8 border-t border-paper/5">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={deepRead}
              onChange={() => setDeepRead(!deepRead)}
              className="sr-only peer"
            />
            <div className="w-8 h-4 rounded-full bg-paper/10 peer-checked:bg-[#C9A55C]/40 relative transition-colors">
              <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-paper transition-all ${deepRead ? "left-[18px]" : "left-0.5"}`} />
            </div>
            <span className="font-sans text-xs text-muted/50">Deep read</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={showSources}
              onChange={() => setShowSources(!showSources)}
              className="sr-only peer"
            />
            <div className="w-8 h-4 rounded-full bg-paper/10 peer-checked:bg-[#C9A55C]/40 relative transition-colors">
              <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-paper transition-all ${showSources ? "left-[18px]" : "left-0.5"}`} />
            </div>
            <span className="font-sans text-xs text-muted/50">Show sources</span>
          </label>
        </div>
      </aside>

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="flex-1 lg:ml-56 xl:ml-64 max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* Mobile toggles */}
        <div className="flex gap-4 mb-12 lg:hidden">
          <button
            onClick={() => setDeepRead(!deepRead)}
            className={`font-sans text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border transition-colors ${deepRead ? "border-[#C9A55C]/40 text-[#C9A55C]" : "border-paper/10 text-muted/40"}`}
          >
            {deepRead ? "Deep read" : "Fast read"}
          </button>
          <button
            onClick={() => setShowSources(!showSources)}
            className={`font-sans text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border transition-colors ${showSources ? "border-[#C9A55C]/40 text-[#C9A55C]" : "border-paper/10 text-muted/40"}`}
          >
            Sources {showSources ? "on" : "off"}
          </button>
        </div>

        {/* Hero */}
        <header className="mb-24">
          <h1 className="font-serif text-4xl md:text-6xl text-paper leading-tight mb-4">
            What If It All Goes Right?
          </h1>
          <p className="font-sans text-base text-muted">
            A front-line dispatch from deep within the AI transition
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mt-2">
            by William &amp; Mary
          </p>
        </header>

        {/* ═══ Preface ═══ */}
        <section id="preface" className="mb-16">
          <h2 className="font-serif text-2xl text-paper mb-6">Preface</h2>
          <div className="space-y-4 font-sans text-base text-muted leading-relaxed">
            <p>People like to say crazy shit on the Internet. This isn&apos;t that.</p>
            <p>We believe both the doomer and hype framings are dangerously wrong. We are entering a profound paradigm shift—but the outcome doesn&apos;t need to be doom.</p>
            {deepRead && (
              <div className="pl-4 border-l border-paper/10 space-y-4 text-muted/70">
                <p>The recent piece from Citrini Research imagining a &quot;2028 Global Intelligence Crisis&quot; rocked financial markets. Matt Shumer&apos;s viral essay compared the AI moment to the weeks before COVID lockdowns. And &quot;AI 2027&quot; was so bleak it likely inspired a surge in bunker orders.</p>
                <p>The discourse has been wild and, frankly, ungrounded.</p>
              </div>
            )}
          </div>
        </section>

        <div className="cx-rule mb-16" />

        {/* ═══ Who We Are ═══ */}
        <section id="who" className="mb-16">
          <h2 className="font-serif text-2xl text-paper mb-6">Who We Are</h2>
          <div className="space-y-6">
            <Message speaker="william">
              <p>Two-time founder. Building a technology-enabled, culture-first private network that deeply utilizes AI to create a conduit for more money and access to reach artists, performers, and creators.</p>
            </Message>
            <Message speaker="mary">
              <p>Dancer and AI researcher. Guiding the pathway to ensure our tools support artists, creators, and venue partners first and foremost.</p>
            </Message>
          </div>
        </section>

        <div className="cx-rule mb-16" />

        {/* ═══ Part 1 ═══ */}
        <section id="part1" className="mb-16">
          <h2 className="font-serif text-3xl text-paper mb-2">The World Has Changed</h2>
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mb-8">Part One</p>

          <div className="space-y-6">
            <Message speaker="william">
              <p>For two years, in stealth, we&apos;ve been building a culture-first company. We work with local restaurants, nightclubs, galleries, and bars. Think of us as network infrastructure for real-world cultural connection.</p>
            </Message>

            <StatEvidence show={showSources} number="78%" label="of organizations used AI in 2024, up from 55% in 2023" source="Stanford AI Index 2025" />

            <Message speaker="william">
              <p>To give a sense of ramp-up: we went from several hundred thousand tokens per week six months ago to over 100 million per day now.</p>
            </Message>

            <StatEvidence show={showSources} number="100M+" label="tokens per day" source="Internal data" />

            <Message speaker="mary">
              <p>The jump in capability over the past four months enabled us to cover full operations with roughly 80% fewer knowledge workers than twelve months ago.</p>
              {deepRead && (
                <p className="text-muted/60 mt-2">A peer-reviewed study in the Quarterly Journal of Economics found GenAI increased productivity by ~15%, with biggest gains among less-experienced workers—and that was before the latest models.</p>
              )}
            </Message>

            <StatEvidence show={showSources} number="80%" label="fewer knowledge workers needed" source="Internal operations" />
          </div>

          <div className="mt-12">
            <h3 className="font-serif text-xl text-paper mb-6">The Economics of the Shift</h3>
            <div className="space-y-6">
              <Message speaker="william">
                <p>This year, we&apos;ll save hundreds of thousands of dollars. Those savings go directly into hiring more artists, musicians, performers—activating more spaces that need the support.</p>
              </Message>

              <StatEvidence show={showSources} number="$1.17T" label="Arts & cultural economic activity in 2023 — 4.2% of GDP" source="Bureau of Economic Analysis" />

              <MarginCallout number="6.6%" label="Arts growth rate vs. 2.9% overall economy" source="BEA" />

              <Message speaker="mary">
                <p>Once we decreased the number of independent contributors, an entire layer of middle management also disappeared. The average knowledge worker spends 57% of their time communicating and only 43% creating.</p>
              </Message>
            </div>
          </div>
        </section>

        <div className="cx-rule mb-16" />

        {/* ═══ Part 2 ═══ */}
        <section id="part2" className="mb-16">
          <h2 className="font-serif text-3xl text-paper mb-2">The End of Bullshit Jobs</h2>
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mb-8">Part Two</p>

          <div className="space-y-6">
            <Message speaker="william">
              <p>Graeber&apos;s core argument: a huge proportion of the workforce is employed in jobs that even the workers themselves secretly believe are pointless.</p>
            </Message>

            <StatEvidence show={showSources} number="37%" label="of British workers felt their jobs didn't contribute meaningfully" source="YouGov (via Graeber)" />

            <Message speaker="mary">
              <p>These bullshit jobs are not our natural state. They are artifacts of an economic system that needed to keep everyone busy to justify the distribution of resources.</p>
              <p className="mt-4 font-serif text-lg text-paper/80 italic">What AI is doing is not eliminating meaningful work. It&apos;s eliminating the busywork that accreted around meaningful work like barnacles on a hull.</p>
            </Message>
          </div>
        </section>

        <div className="cx-rule mb-16" />

        {/* ═══ Part 3 — Timeline ═══ */}
        <section id="part3" className="mb-16">
          <h2 className="font-serif text-3xl text-paper mb-2">A Brief History of Work</h2>
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mb-8">Part Three</p>

          <div className="space-y-8">
            {timelineEpochs.map((era) => (
              <div key={era.id} className="pl-6 border-l border-paper/10 hover:border-[#C9A55C]/30 transition-colors">
                <p className="font-sans text-xs uppercase tracking-[0.24em] text-muted/40 mb-1">{era.period}</p>
                <h3 className="font-serif text-xl text-paper mb-2">{era.era}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{era.description}</p>
                <span className="inline-block mt-2 font-serif text-lg text-[#C9A55C]/70">{era.shift}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="cx-rule mb-16" />

        {/* ═══ Part 5 ═══ */}
        <section id="part5" className="mb-16">
          <h2 className="font-serif text-3xl text-paper mb-2">What Might Come Next</h2>
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mb-8">Part Five</p>

          <div className="space-y-8">
            {[
              { title: "Venture Capital disrupts itself.", body: "Consumer-facing companies can leave the hamster wheel behind." },
              { title: "A Million Startups Bloom.", body: "Micro-niches with small teams empowered by agents." },
              { title: "People Pursue Passions (Again).", body: "Previously 'uneconomic work' becomes viable." },
              { title: "Deep Research Becomes a Core Pillar.", body: "An explosion of discovery and advancement." },
            ].map((pred, i) => (
              <div key={i} className="pl-6 border-l border-paper/10">
                <h3 className="font-serif text-lg text-paper mb-1">{pred.title}</h3>
                <p className="font-sans text-sm text-muted">{pred.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="cx-rule mb-16" />

        {/* ═══ Part 6 ═══ */}
        <section id="part6" className="mb-16">
          <h2 className="font-serif text-3xl text-paper mb-2">Transition Will Be Rough</h2>
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mb-8">Part Six</p>

          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-xl text-paper mb-4">What Government Needs to Do</h3>
              <div className="space-y-4 font-sans text-base text-muted leading-relaxed">
                <p><strong className="text-paper/70">Extend UI</strong> to 12 months. UI kept 4.7M people out of poverty in 2020.</p>
                <p><strong className="text-paper/70">Consider wage insurance.</strong> Rewards reentry into the workforce.</p>
                <p><strong className="text-paper/70">Invest in education.</strong> Associate degrees boost earnings ~18%.</p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-paper mb-4">What Private Enterprise Needs to Do</h3>
              <p className="font-sans text-base text-muted leading-relaxed">Productivity gains need to translate into deflation in consumer prices, not just margin expansion. A live concert, a gallery opening—those remain irreducibly human.</p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-paper mb-4">What Individuals Can Do</h3>
              <div className="space-y-4 font-sans text-base text-muted leading-relaxed">
                <p><strong className="text-paper/70">Learn these tools.</strong> Push AI into your actual work.</p>
                <p><strong className="text-paper/70">Meet your neighbors.</strong> Social isolation is as deadly as 15 cigarettes a day.</p>
                <p><strong className="text-paper/70">Follow your passions.</strong> Create at a scale never before possible.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="cx-rule mb-16" />

        {/* ═══ Conclusion ═══ */}
        <section id="conclusion" className="mb-16">
          <h2 className="font-serif text-3xl text-paper mb-6">Conclusion</h2>
          <div className="space-y-4 font-sans text-base text-paper/85 leading-relaxed">
            <p>We are not techno-evangelists, nor are we doomers. We are just relating what we are seeing in real life, right in front of us.</p>
            <p>We firmly believe this transition can be a net positive. The productivity gains are real. The creative liberation is real.</p>
            <p className="font-serif text-xl text-paper mt-8">Let&apos;s get to work — the new kind of work — because these next few years might be defining for many, many generations to come.</p>
          </div>

          {/* Signature */}
          <div className="mt-16 flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-paper/10 overflow-hidden relative">
              <img src="/images/william.jpg" alt="William" className="w-full h-full object-cover" style={{ filter: "grayscale(1) brightness(0.7)" }} />
            </div>
            <span className="font-serif text-xl text-[#C9A55C]">&amp;</span>
            <div className="w-12 h-12 rounded-full bg-paper/10 overflow-hidden relative">
              <img src="/images/mary.jpg" alt="Mary" className="w-full h-full object-cover" style={{ filter: "grayscale(1) brightness(0.7)" }} />
            </div>
            <span className="font-sans text-sm text-muted/60 ml-2">William &amp; Mary</span>
          </div>
        </section>

        {/* ═══ Further Reading ═══ */}
        <section id="reading" className="pt-8 border-t border-paper/5">
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mb-6">Further Reading</p>
          <ul className="space-y-2">
            {bibliography.map((item, i) => (
              <li key={i} className="font-sans text-sm text-muted/50">{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

/* ═══ Sub-components ═══ */

function Message({ speaker, children }: { speaker: "william" | "mary"; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-paper/10 overflow-hidden">
          <img
            src={`/images/${speaker}.jpg`}
            alt={speaker}
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(1) brightness(0.6)" }}
          />
        </div>
      </div>
      <div className="flex-1">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted/40 mb-2">
          {speaker === "william" ? "William" : "Mary"}
        </p>
        <div className="font-sans text-base text-muted leading-relaxed space-y-3">
          {children}
        </div>
      </div>
    </div>
  );
}

function StatEvidence({ show, number, label, source }: { show: boolean; number: string; label: string; source: string }) {
  if (!show) return null;
  return (
    <div className="ml-12 pl-4 border-l border-[#C9A55C]/20 py-2">
      <span className="font-serif text-lg text-[#C9A55C]">{number}</span>
      <span className="font-sans text-sm text-muted/60 ml-2">{label}</span>
      <p className="font-sans text-xs text-muted/30 mt-0.5">{source}</p>
    </div>
  );
}
