import Link from "next/link";
import CursorGlow from "./components/CursorGlow";

export const metadata = {
  title: "What If It All Goes Right? — William & Mary",
  description: "A front-line dispatch from deep within the AI transition. Two variants.",
};

export default function Home() {
  return (
    <main className="relative bg-ink min-h-screen flex flex-col items-center justify-center px-[8%]">
      <CursorGlow />

      {/* Subtle blob */}
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px] bg-[#C9A55C] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <h1
        className="font-serif text-paper text-center leading-[0.9] tracking-tight mark-animate relative z-10 mb-4"
        style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
      >
        What If It All Goes Right?
      </h1>

      <p className="font-sans text-sm text-muted text-center max-w-md mb-2 fade-up fade-up-delay-1">
        A front-line dispatch from deep within the AI transition
      </p>
      <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mb-16 fade-up fade-up-delay-2">
        by William &amp; Mary
      </p>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 fade-up fade-up-delay-3">
        <Link
          href="/essay/a"
          className="group text-center"
        >
          <div className="border border-paper/10 group-hover:border-[#C9A55C]/30 rounded-sm px-10 py-8 transition-all duration-500 group-hover:translate-y-[-2px]">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mb-3">Variant A</p>
            <p className="font-serif text-xl text-paper mb-2">Cinematic Editorial</p>
            <p className="font-sans text-sm text-muted/50">Slow scroll. Full-bleed stats. Manifesto energy.</p>
          </div>
        </Link>

        <Link
          href="/essay/b"
          className="group text-center"
        >
          <div className="border border-paper/10 group-hover:border-[#C9A55C]/30 rounded-sm px-10 py-8 transition-all duration-500 group-hover:translate-y-[-2px]">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/40 mb-3">Variant B</p>
            <p className="font-serif text-xl text-paper mb-2">Interactive Thesis Lab</p>
            <p className="font-sans text-sm text-muted/50">Sidebar nav. Toggle depth. Explore the argument.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
