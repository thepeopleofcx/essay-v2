# Essay Landing Page — Master Spec v2

## Design System (extracted from CX Brand Book + Investor Deck)

### Tokens
```css
--color-ink: #0B0B0C        /* primary background */
--color-paper: #F2F2F2      /* primary text */
--color-muted: #B8B8B8      /* secondary text */
--color-pink-noise: #F525A3  /* accent — use sparingly */
--font-serif: 'Cormorant Garamond', serif  /* headlines, display */
--font-sans: 'Inter', sans-serif           /* body, UI */
```

### Accent Rule
At most ONE accent color per composition. For this essay, use `--color-paper` (#F2F2F2) as primary, with gold `#C9A55C` as the single accent for stat moments. Pink-noise only if needed as a secondary signal.

### Reusable Components (copy from brand book repo)
- `CursorGlow` — fixed glow following cursor, `opacity-[0.04]`, `mix-blend-screen`
- `RevealOnScroll` — IntersectionObserver, adds `.visible` class, threshold 0.15
- `GradientMorph` — animated background blobs (adapt or simplify)
- `ScrollProgress` — 1px gradient bar at top
- CSS: grain overlay (`body::before`), `.cx-rule` dividers, `.reveal` animations

### Layout Patterns
- Section padding: `px-[8%] md:px-[12%] lg:px-[16%]`
- Section labels: `text-xs uppercase tracking-[0.28em] text-muted`
- Dividers: `.cx-rule` (gradient fade horizontal rule)
- Max content width: `max-w-3xl` for reading, `max-w-5xl` for hero

### Typography Rules (ENFORCE)
- Headlines: `font-serif` (Cormorant Garamond), light weight, tight leading
- Body: `font-sans` (Inter), 300-400 weight, relaxed leading
- Micro-labels: `text-xs uppercase tracking-[0.24em]` — use sparingly
- One idea per paragraph. Short sentences. No corporate filler.

### Animation Rules
- Reveals: opacity + translateY(40px), 0.9s cubic-bezier(0.16, 1, 0.3, 1)
- Staggered delays: 0.1s increments
- Parallax: subtle (0.22 factor max)
- Reduced-motion: respect `prefers-reduced-motion`
- NO framer-motion spam. NO SaaS hero patterns. NO card grids.

---

## Content Model

The essay text is in `/tmp/william-and-mary/essay_clean.txt`. It must be structured into:

```typescript
interface EssaySection {
  id: string;
  type: 'meta' | 'part' | 'dialogue' | 'prose' | 'stat-moment' | 'timeline' | 'bibliography';
  speaker?: 'william' | 'mary';  // for dialogue sections
  heading?: string;
  subheading?: string;
  content: string;
  collapsible?: boolean;  // true for preface/meta sections
  stats?: StatMoment[];
}

interface StatMoment {
  number: string;       // "78%", "$1.17T", etc.
  label: string;        // short description
  context: string;      // sentence it appears in
  source: string;       // where it comes from
  treatment: 'big-number' | 'inline-highlight' | 'margin-callout' | 'microchart' | 'scroll-comparison' | 'quote-stat-pair';
}
```

### Stat Inventory (extracted from essay)

| # | Stat | Section | Source | Suggested Treatment |
|---|------|---------|--------|-------------------|
| 1 | 78% of orgs used AI in 2024 (up from 55% in 2023) | Who Is This For | Stanford AI Index | scroll-comparison |
| 2 | 71% using generative AI (up from 33%) | Who Is This For | Stanford AI Index | scroll-comparison |
| 3 | 100M+ tokens/day (from hundreds of thousands/week) | What I'm Seeing | Internal | big-number |
| 4 | 80% fewer knowledge workers needed | How We Built | Internal | big-number |
| 5 | ~15% productivity increase from GenAI | How We Built | QJE study | inline-highlight |
| 6 | $1.17 trillion arts economy (4.2% GDP) | Economics of Shift | Bureau of Economic Analysis | big-number |
| 7 | 6.6% arts growth vs 2.9% overall | Economics of Shift | BEA | margin-callout |
| 8 | 57% time communicating, 43% creating | Mary on efficiency | Microsoft Work Trend Index | scroll-comparison |
| 9 | 10 hrs/week lost to overhead | Mary on efficiency | APQC | inline-highlight |
| 10 | 37% of British workers felt jobs pointless | Bullshit Jobs | YouGov (via Graeber) | big-number |
| 11 | 40% in Dutch survey | Bullshit Jobs | Dutch survey (via Graeber) | margin-callout |
| 12 | 15-20 hrs/week hunter-gatherer work | History of Work | Sahlins | quote-stat-pair |
| 13 | Life expectancy 32→71 years (1900→2021) | Industrial Revolution | Our World in Data | scroll-comparison |
| 14 | Work hours fell from 2,700-3,500 to 1,300-1,800/yr | Industrial Revolution | Historical | scroll-comparison |
| 15 | Population 1B→8B | Industrial Revolution | Historical | big-number |
| 16 | Services = 77% of GDP | Knowledge Work | World Bank | margin-callout |
| 17 | UI kept 4.7M people out of poverty in 2020 | What Gov Needs to Do | Census Bureau | inline-highlight |
| 18 | 18% earnings boost from associate degrees | Education | Columbia CCRC | margin-callout |
| 19 | Social isolation = smoking 15 cigs/day | What Individuals Can Do | US Surgeon General | quote-stat-pair |

### Section Structure for Content Model

**Meta sections (collapsible accordions):**
- Preface — The Reason We Wrote This
- Why We Are Releasing This Anonymously
- Who We Are
- Who Is This For

**Main Parts:**
- Part One — The World Has Changed
  - What I'm Seeing on the Ground (William→Mary dialogue)
  - How We Built Our Company with AI (Mary→William dialogue)
  - The Economics of the Shift (William→Mary dialogue)
  - The Before and After (William→Mary dialogue)
- Part Two — The End of Bullshit Jobs (William→Mary dialogue)
- Part Three — A Brief History of Work (timeline: 5 epochs)
- Part Five — What Might Come Next (4 predictions)
- Part Six — Transition Will Be Rough
  - What Government Needs to Do
  - What Private Enterprise Needs to Do
  - What Individuals Can Do
- Conclusion
- Further Reading / Bibliography

---

## Variant Concepts

### Variant A: Cinematic Editorial Scroll
**Emotion:** Underground magazine manifesto. You are being let in on something.
**Behavior:** Slow, deliberate scroll. Each section earned through movement.

- Full-bleed hero: "WHAT IF IT ALL GOES RIGHT?" in massive Cormorant Garamond
- "Scroll to enter" — no nav, no buttons, just the scroll
- Meta sections as elegant accordions (collapsed by default, gold underline)
- Dialogue sections: speaker name in micro-label, portrait as subtle ghost watermark behind text
- Stat beats every 2-3 screens: full-bleed typographic interruptions
- Timeline as vertical scroll with era cards, parallax backgrounds
- Progress: thin gradient line at top
- Grain overlay throughout
- Cursor glow
- Signature moment examples:
  1. "100M tokens/day" fills the entire viewport in ultra-light serif
  2. "Then vs Now" comparison that shifts as you scroll through the industrial section
  3. The Graeber "37%" floats up as you read about bullshit jobs
  4. Final signature: both portraits drawn in, gold line underneath

### Variant B: Interactive Thesis Lab
**Emotion:** Persuasion instrument. A thinking tool.
**Behavior:** Active exploration. Choose your depth.

- Left sidebar: argument spine / table of contents (sticky)
- Right panel: reading area with expandable nodes
- Toggle layer: "Fast read" / "Deep read" switch
- "Show sources" toggle reveals inline footnotes
- "Show the numbers" toggle reveals stat callouts where they matter
- Dialogue rendered as threaded conversation (like iMessage but elegant)
- Stats as expandable evidence cards — click to see source + context
- Timeline as horizontal zoomable strip
- Claims → Evidence → Implications structure
- Counterarguments as expandable "But what about..." sections
- Still black/paper/grain — NOT a dashboard

---

## Portraits
- `/tmp/william-and-mary/william.jpg` — man with cap + glasses (William)
- `/tmp/william-and-mary/mary.jpg` — woman with curly hair (Mary)
- Use CSS `filter: invert(1) brightness(0.85)` for white/cream lines on dark bg
- In Variant A: subtle ghost watermark behind dialogue text
- In Variant B: small circular avatar next to dialogue messages

---

## Routes
- `/essay/a` → Variant A (Cinematic Editorial)
- `/essay/b` → Variant B (Interactive Thesis Lab)
- `/` → Comparison landing with links to both

---

## Build Requirements
- Next.js 14 App Router, TypeScript, Tailwind CSS (v4 @theme syntax)
- Copy design system files from brand book repo (CursorGlow, RevealOnScroll, globals.css tokens)
- Shared content model in `data/essay.ts` — both variants import from same source
- Stat moments as reusable components: `BigNumberInterrupt`, `InlineHighlight`, `MarginCallout`, `ScrollComparison`, `QuoteStatPair`
- Reduced-motion support via `prefers-reduced-motion` media query
- Mobile-first responsive (no collapsing into generic blog)
- Clean build, no TypeScript errors
- Deploy to Vercel with shareable URLs
