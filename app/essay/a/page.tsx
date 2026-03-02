import { timelineEpochs, bibliography } from "@/data/essay";
import CursorGlow from "@/app/components/CursorGlow";
import ScrollProgress from "@/app/components/ScrollProgress";
import BigNumberInterrupt from "@/app/components/BigNumberInterrupt";
import WordByWordReveal from "@/app/components/WordByWordReveal";
import ScrollComparison from "@/app/components/ScrollComparison";
import TimelineParallax from "@/app/components/TimelineParallax";
import ClosingSignature from "@/app/components/ClosingSignature";
import CollapsibleMeta from "@/app/components/CollapsibleMeta";
import SectionLabel from "@/app/components/SectionLabel";
import DialogueTurn from "@/app/components/DialogueTurn";
import MarginCallout from "@/app/components/MarginCallout";
import RevealOnScroll from "@/app/components/RevealOnScroll";

export const metadata = {
  title: "What If It All Goes Right? — William & Mary",
  description: "A front-line dispatch from deep within the AI transition.",
};

export default function VariantA() {
  return (
    <main className="relative bg-ink min-h-screen">
      <ScrollProgress />
      <CursorGlow />

      {/* ═══════════════════════════════════════════ */}
      {/* HERO — Full-bleed, massive typography */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-[8%] overflow-hidden">
        {/* Single subtle blob — one accent only */}
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[100px] bg-[#C9A55C] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <h1
          className="font-serif text-paper text-center leading-[0.9] tracking-tight mark-animate relative z-10"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}
        >
          What If It All<br />Goes Right?
        </h1>

        <p className="mt-8 font-sans text-sm md:text-base text-muted text-center max-w-md fade-up fade-up-delay-1">
          A front-line dispatch from deep within the AI transition
        </p>

        <p className="mt-2 font-sans text-xs uppercase tracking-[0.28em] text-muted/40 fade-up fade-up-delay-2">
          by William &amp; Mary
        </p>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 fade-up fade-up-delay-3">
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/30 animate-pulse">
            Scroll to enter
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* PREFACE — Collapsible accordions */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 px-[8%] md:px-[16%]">
        <RevealOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl text-paper mb-3">Preface</h2>
          <p className="font-sans text-sm md:text-base text-muted/60 mb-10">Tap into the sections below for background on who we are and why we are writing this.</p>
        </RevealOnScroll>
        <CollapsibleMeta title="The Reason We Wrote This">
          <p>People like to say crazy shit on the Internet. This isn&apos;t that.</p>
          <p>Over the past several weeks, our collective discourse on the possibilities of an AI-shaped future has been shaken by speculative fiction in several forms. The recent piece from Citrini Research imagining a &quot;2028 Global Intelligence Crisis&quot; rocked financial markets, wiped hundreds of billions in market capitalization from software and payments stocks, and was signal-boosted by everyone from Michael Burry to TechCrunch.</p>
          <p>The discourse has been wild and, frankly, ungrounded. These essays and the &quot;AI is all hype&quot; response offer a false binary in which either AI is about to annihilate the economy, or it&apos;s all a bubble and nothing will change.</p>
          <p>We believe both framings are dangerously wrong.</p>
          <p>We are entering a profound paradigm shift that will touch every aspect of how we structure ourselves as a species. But the outcome doesn&apos;t need to be doom. There are real signs that a lot of it—not all of it, but a lot of it—might go very, very right.</p>
        </CollapsibleMeta>

        <CollapsibleMeta title="Why We Are Releasing This Anonymously">
          <p>This document is signed by &quot;William &amp; Mary,&quot; which conveniently, are the two authors&apos; real first names. Our signature is also a nod to the Glorious Revolution of 1688, when authoritarian power gave way to a more balanced constitution. A permanent reframing of power without the blood of a civil war.</p>
          <p>This article is presented as a dialogue between the two of us, with the hope of inspiring more discussion, debate, and action from the artists, musicians, and culture creators we serve.</p>
        </CollapsibleMeta>

        <CollapsibleMeta title="Who We Are">
          <p><strong className="text-paper/70">William</strong> is a two-time founder. His current project is a technology-enabled, culture-first human centered private network that deeply utilizes AI—most notably creating a conduit for more money and access to reach artists, performers, and creators.</p>
          <p><strong className="text-paper/70">Mary</strong> is a dancer and an AI researcher with a passion for how new technologies can further the arts. She is the AI lead at the company and guides the pathway to ensure tools support artists, creators, and venue partners first and foremost.</p>
        </CollapsibleMeta>

        <CollapsibleMeta title="Who Is This For">
          <p>This article is for everyone who has been participating in, curious about, or frankly terrified by the AI conversation. We&apos;re going to cover the economic, cultural, and technological dimensions—all illustrated by real-world, on-the-ground realities we&apos;ve encountered while building and launching our company in stealth.</p>
        </CollapsibleMeta>
      </section>

      {/* ═══ SIGNATURE MOMENT: AI adoption scroll comparison ═══ */}
      <ScrollComparison
        before="55%"
        after="78%"
        label="of organizations used AI in 2024"
        source="Stanford AI Index 2025"
      />

      <div className="cx-rule mx-[16%]" />

      {/* ═══════════════════════════════════════════ */}
      {/* PART ONE — The World Has Changed */}
      {/* ═══════════════════════════════════════════ */}
      <SectionLabel
        label="Part One"
        heading="The World Has Changed"
      />

      <div className="px-[8%] md:px-[16%]">
        <DialogueTurn speaker="william">
          <p>For the past two years, in stealth, our team has been building a technology-enabled, culture-first company with the simple mission to &quot;connect people meaningfully.&quot;</p>
          <p>We work with local restaurants, nightclubs, galleries, and bars to bring more people and energy into their establishments—enlivening their spaces with artists and performers from our network while simultaneously bringing the audience. We specialize in reawakening distressed spaces and forgotten locations that just need some love.</p>
        </DialogueTurn>

        <DialogueTurn speaker="mary">
          <p>In the previous era, we&apos;d be a classic seed-stage startup. We have real revenue, real customers, and an early product. This is the stage when small companies typically go on the VC tour, looking to raise a few million dollars in a seed round.</p>
          <p>We aren&apos;t doing that. The tools available to us have made the company so much more efficient, and the venture capital model is so far out of sync with our goals, that we feel confident we can scale to profitability—supporting many artists along the way—without ever jumping on the venture hamster wheel.</p>
        </DialogueTurn>
      </div>

      {/* ═══ SIGNATURE MOMENT: 100M+ tokens/day ═══ */}
      <BigNumberInterrupt
        number="100M+"
        label="tokens per day — up from hundreds of thousands per week, six months ago"
        source="Internal data"
      />

      <div className="px-[8%] md:px-[16%]">
        <DialogueTurn speaker="mary">
          <p>Our network is structured via a private social app, text, and email that connects our membership to each other and to beautiful under-discovered spaces across our city. While the output of our work is very much human—real people in real rooms experiencing real art—the company itself is run like a tech start-up.</p>
          <p>As of now, all of our low-level knowledge work is handled by agents: answering member emails, designing decks, managing ticketing, handling bookkeeping, the first tier of legal, sales, and publicity, and—most significantly—developing and connecting various technology tools to our custom platform.</p>
        </DialogueTurn>
      </div>

      {/* ═══ SIGNATURE MOMENT: 80% fewer workers ═══ */}
      <BigNumberInterrupt
        number="80%"
        label="fewer knowledge workers than we would have needed twelve months ago"
        source="Internal operations data"
      />

      {/* Economics of the Shift */}
      <SectionLabel
        label="The Economics of the Shift"
        heading="Where the savings go"
      />

      <div className="px-[8%] md:px-[16%]">
        <DialogueTurn speaker="william">
          <p>This year, we will save hundreds of thousands of dollars on developers, low-level writers, designers, back-office workers, and customer service representatives. In the years to come, we expect those savings to increase to millions.</p>
          <p>I&apos;m certain that we aren&apos;t an outlier. We are an early indicator of the massive shift that is coming.</p>
        </DialogueTurn>
      </div>

      <MarginCallout
        number="6.6%"
        label="Arts & culture growth rate, more than double the 2.9% overall economy"
        source="Bureau of Economic Analysis"
      />

      <div className="px-[8%] md:px-[16%]">
        <DialogueTurn speaker="mary">
          <p>But contrary to the assumptions of many concerned commentators, we aren&apos;t putting that money into a vault. We&apos;re putting it directly into the communities we activate—in a way that we believe will be more economically, culturally, and locally productive than the centralized, salaried knowledge work of the past era.</p>
        </DialogueTurn>
      </div>

      {/* ═══ SIGNATURE MOMENT: $1.17T arts economy ═══ */}
      <BigNumberInterrupt
        number="$1.17T"
        label="Arts & cultural economic activity in 2023 — roughly 4.2% of GDP"
        source="Bureau of Economic Analysis"
      />

      {/* The Before and After */}
      <div className="px-[8%] md:px-[16%] pt-16">
        <DialogueTurn speaker="william">
          <p>This isn&apos;t my first rodeo. I had a previous venture-backed company where we raised several million dollars to hire a big staff to build and code an app, a customer service system, a sales team, and all the management infrastructure. After a year and a half, we had a working product that was just okay.</p>
          <p>All of that work—two years and several million dollars—to produce a meh result. With our current company, we are speed-running those painful years in just weeks.</p>
        </DialogueTurn>

        <DialogueTurn speaker="mary">
          <p>Let&apos;s be precise here. This isn&apos;t an idea we have or something that might happen. This is happening right now. With these tools, 80% to 95% of our back-office and knowledge work operations are handled by agents, leaving the vast majority of our resources focused on creating community and culture first.</p>
        </DialogueTurn>
      </div>

      <div className="cx-rule mx-[16%]" />

      {/* ═══ Communication vs Creation comparison ═══ */}
      <ScrollComparison
        before="43%"
        after="57%"
        label="of a knowledge worker's time spent communicating, not creating"
        source="Microsoft Work Trend Index"
      />

      {/* ═══════════════════════════════════════════ */}
      {/* PART TWO — The End of Bullshit Jobs */}
      {/* ═══════════════════════════════════════════ */}
      <SectionLabel
        label="Part Two"
        heading="The End of Bullshit Jobs"
      />

      <div className="px-[8%] md:px-[16%]">
        <DialogueTurn speaker="william">
          <p>Early in my time on the East Coast, I got to meet and become friends with the late, great David Graeber. His core argument was simple and devastating: a huge proportion of the modern workforce is employed in jobs that even the workers themselves secretly believe are pointless.</p>
        </DialogueTurn>
      </div>

      <div className="px-[8%] md:px-[16%]">
        <DialogueTurn speaker="mary">
          <p>It&apos;s not like these bullshit jobs—the email forwarding, the meeting scheduling for meetings that should have been emails, the middle-management oversight of oversight—are what we&apos;re supposed to be doing. They are not our natural state. They are not the highest use of human potential.</p>
          <p>They are the artifacts of an economic system that needed to keep everyone busy to justify the distribution of resources.</p>
        </DialogueTurn>
      </div>

      {/* ═══ SIGNATURE MOMENT: Graeber word-by-word quote ═══ */}
      <WordByWordReveal
        text="What AI is doing is not eliminating meaningful work. It's eliminating the busywork that accreted around meaningful work like barnacles on a hull."
        attribution="Mary"
      />

      <div className="cx-rule mx-[16%]" />

      {/* ═══════════════════════════════════════════ */}
      {/* PART THREE — A Brief History of Work */}
      {/* ═══════════════════════════════════════════ */}
      <SectionLabel
        label="Part Three"
        heading="A Brief History of Work"
        subheading="Every era of human labor has felt like the natural order — right up until it was replaced by the next one."
      />

      <TimelineParallax eras={timelineEpochs} />

      <div className="cx-rule mx-[16%]" />

      {/* ═══════════════════════════════════════════ */}
      {/* PART FIVE — What Might Come Next */}
      {/* ═══════════════════════════════════════════ */}
      <SectionLabel
        label="Part Five"
        heading="What Might Come Next"
      />

      <div className="px-[8%] md:px-[16%] space-y-16 pb-16">
        <RevealOnScroll>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-paper mb-4">Venture Capital disrupts itself.</h3>
            <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl">Deep tech will always need capital, but the rest of us? Maybe not. Consumer-facing companies like ours can leave that hamster wheel behind.</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-paper mb-4">A Million Startups Bloom.</h3>
            <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl">The next decade might be a fertile garden of people starting companies to solve problems big and small — finding micro-niches with small teams empowered by teams of agents.</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={2}>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-paper mb-4">People Pursue Passions (Again).</h3>
            <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl">If deflationary effects take hold, a huge amount of previously &quot;uneconomic work&quot; might become viable — from parenthood to music, arts, and local businesses.</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={3}>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-paper mb-4">Deep Research Becomes a Core Pillar.</h3>
            <p className="font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl">If ad-targeting and Snapchat filters can be turned over to AI, deep research can attract hearts, minds and financing — leading to an explosion of discovery.</p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="cx-rule mx-[16%]" />

      {/* ═══════════════════════════════════════════ */}
      {/* PART SIX — Transition Will Be Rough */}
      {/* ═══════════════════════════════════════════ */}
      <SectionLabel
        label="Part Six"
        heading="A Better World is Possible"
        subheading="But transition will be rough."
      />

      {/* Government */}
      <div className="px-[8%] md:px-[16%]">
        <RevealOnScroll>
          <h3 className="font-serif text-2xl md:text-3xl text-paper mb-8">What Government Needs to Do</h3>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-12 space-y-4 font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl">
            <p><strong className="text-paper/70">Extend unemployment insurance.</strong> We recommend extending maximum eligibility to 12 months and significantly increasing the maximum payout. Census Bureau analysis showed that UI kept 4.7 million people out of poverty in 2020 alone.</p>
            <p><strong className="text-paper/70">Consider wage insurance.</strong> It pays workers a supplement if they take a new job at lower pay, rewarding reentry into the workforce rather than waiting.</p>
            <p><strong className="text-paper/70">Invest in education and retraining.</strong> Columbia&apos;s Community College Research Center found that associate degrees boost men&apos;s earnings by roughly 18% over &quot;some college, no credential.&quot;</p>
          </div>
        </RevealOnScroll>

        <MarginCallout
          number="4.7M"
          label="People kept out of poverty by unemployment insurance in 2020"
          source="Census Bureau"
        />

        {/* Private Enterprise */}
        <RevealOnScroll>
          <h3 className="font-serif text-2xl md:text-3xl text-paper mb-8 mt-16">What Private Enterprise Needs to Do</h3>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-12 space-y-4 font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl">
            <p>As AI saturates our working systems, productivity will rise and profits will follow. But we need those gains to translate into deflation in consumer prices, not just margin expansion for shareholders.</p>
            <p>A live concert, a gallery opening, a dinner cooked by someone who cares—those will remain irreducibly human. And that&apos;s exactly the point.</p>
          </div>
        </RevealOnScroll>

        {/* Individuals */}
        <RevealOnScroll>
          <h3 className="font-serif text-2xl md:text-3xl text-paper mb-8 mt-16">What Individuals Can Do</h3>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-12 space-y-4 font-sans text-base md:text-lg text-muted leading-relaxed max-w-2xl">
            <p><strong className="text-paper/70">Learn these tools.</strong> Fluency with AI is going to be essential to everything that comes next. Don&apos;t just use it as a search engine. Push it into your actual work.</p>
            <p><strong className="text-paper/70">Meet your neighbors.</strong> The U.S. Surgeon General has warned that lacking social connection increases premature death risk comparable to smoking 15 cigarettes a day.</p>
            <p><strong className="text-paper/70">Follow your passions.</strong> This is a time when you can create things at a level and at a scale that was never before possible in human history.</p>
          </div>
        </RevealOnScroll>
      </div>

      {/* ═══ SIGNATURE MOMENT: Social isolation stat ═══ */}
      <WordByWordReveal
        text="Lacking social connection increases the risk of premature death at a rate comparable to smoking fifteen cigarettes a day."
        attribution="U.S. Surgeon General"
      />

      <div className="cx-rule mx-[16%]" />

      {/* ═══════════════════════════════════════════ */}
      {/* CONCLUSION */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-[8%] md:px-[16%]">
        <RevealOnScroll>
          <div className="max-w-2xl space-y-6 font-sans text-base md:text-lg text-paper/85 leading-relaxed">
            <p>We are not techno-evangelists, nor are we doomers. We are just relating what we are seeing in real life, right in front of us.</p>
            <p>We firmly believe this transition can be a net positive. And this is most true for artists and creators who embrace the shift instead of fearing it.</p>
            <p>The productivity gains are real. The creative liberation is real. The ability to fund more artists, more performers, more human experiences with the savings from automating paperwork—that&apos;s real.</p>
            <p className="text-muted">But the structural transitional challenges are real too. Let&apos;s dial back the hyperventilation. Let&apos;s resist the urge to make reactionary policy out of speculative Substack fiction.</p>
          </div>
        </RevealOnScroll>

        <WordByWordReveal
          text="Let's get to work — the new kind of work — because these next few years might be defining for many, many generations to come."
        />
      </section>

      {/* ═══ Closing signature — text only ═══ */}
      <div className="py-24 md:py-32 px-[8%] md:px-[16%] text-center">
        <RevealOnScroll>
          <p className="font-serif text-xl md:text-2xl text-paper/80">William &amp; Mary</p>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-px bg-[#C9A55C]/50" />
          </div>
          <p className="mt-6 font-sans text-xs uppercase tracking-[0.28em] text-muted/40">
            Cofounders · A cultural technology company · 2025
          </p>
        </RevealOnScroll>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* BIBLIOGRAPHY */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 px-[8%] md:px-[16%] border-t border-paper/5">
        <RevealOnScroll>
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/50 mb-8">
            Further Reading
          </p>
          <ul className="space-y-3 max-w-2xl">
            {bibliography.map((item, i) => (
              <li key={i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-muted/60 leading-relaxed hover:text-paper/80 transition-colors duration-300"
                >
                  {item.title} ↗
                </a>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <div className="mt-16 pt-8 border-t border-paper/5">
          <p className="font-sans text-xs text-muted/30 max-w-xl">
            The authors are cofounders of a cultural technology company operating in multiple U.S. cities. This essay reflects personal experiences and opinions, and is not investment advice.
          </p>
        </div>
      </section>
    </main>
  );
}
