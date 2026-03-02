export type Speaker = "william" | "mary";

export type StatTreatment =
  | "big-number"
  | "inline-highlight"
  | "margin-callout"
  | "microchart"
  | "scroll-comparison"
  | "quote-stat-pair";

export interface StatMoment {
  id: string;
  number: string;
  label: string;
  context: string;
  source: string;
  treatment: StatTreatment;
}

export interface EssaySection {
  id: string;
  type: "meta" | "part" | "dialogue" | "prose" | "stat-moment" | "timeline" | "bibliography";
  speaker?: Speaker;
  heading?: string;
  subheading?: string;
  content: string;
  summary?: string;
  collapsible?: boolean;
  stats?: StatMoment[];
  sourceCitations?: string[];
}

export interface TimelineEpoch {
  id: string;
  era: string;
  period: string;
  description: string;
  shift: string;
}

export interface Prediction {
  id: string;
  title: string;
  detail: string;
}

export interface Counterargument {
  id: string;
  question: string;
  response: string;
}

export const statInventory: StatMoment[] = [
  { id: "s1", number: "78% -> 55%", label: "Organizations using AI in 2024 vs 2023", context: "AI usage rose from 55% to 78%.", source: "Stanford AI Index", treatment: "scroll-comparison" },
  { id: "s2", number: "71% -> 33%", label: "Generative AI business-function adoption", context: "Generative AI adoption rose from 33% to 71%.", source: "Stanford AI Index", treatment: "scroll-comparison" },
  { id: "s3", number: "100M+ / day", label: "Token usage ramp", context: "From hundreds of thousands per week to over 100 million per day.", source: "Internal", treatment: "big-number" },
  { id: "s4", number: "80% fewer", label: "Knowledge workers needed", context: "Equivalent operations with roughly 80% fewer knowledge workers.", source: "Internal", treatment: "big-number" },
  { id: "s5", number: "~15%", label: "Productivity increase", context: "QJE study reported roughly 15% productivity increase from GenAI assistance.", source: "Quarterly Journal of Economics", treatment: "inline-highlight" },
  { id: "s6", number: "$1.17T", label: "Arts economy", context: "Arts and cultural activity totaled $1.17 trillion in 2023.", source: "Bureau of Economic Analysis", treatment: "big-number" },
  { id: "s7", number: "6.6% vs 2.9%", label: "Arts growth vs overall growth", context: "Arts grew 6.6% while overall economy grew 2.9%.", source: "Bureau of Economic Analysis", treatment: "margin-callout" },
  { id: "s8", number: "57% / 43%", label: "Communicating vs creating", context: "Workers spend 57% communicating, 43% creating.", source: "Microsoft Work Trend Index", treatment: "scroll-comparison" },
  { id: "s9", number: "10 hrs/week", label: "Overhead loss", context: "About 10 hours per week lost to low-value overhead.", source: "APQC", treatment: "inline-highlight" },
  { id: "s10", number: "37%", label: "Pointless-job sentiment in UK", context: "37% of British workers felt jobs were pointless.", source: "YouGov via Graeber", treatment: "big-number" },
  { id: "s11", number: "40%", label: "Pointless-job sentiment in Dutch survey", context: "Dutch survey reported 40% with similar sentiment.", source: "Dutch survey via Graeber", treatment: "margin-callout" },
  { id: "s12", number: "15-20 hrs/week", label: "Hunter-gatherer subsistence work", context: "Estimate for subsistence labor among hunter-gatherers.", source: "Marshall Sahlins", treatment: "quote-stat-pair" },
  { id: "s13", number: "32 -> 71 years", label: "Life expectancy", context: "Global life expectancy rose from ~32 to ~71 years.", source: "Our World in Data", treatment: "scroll-comparison" },
  { id: "s14", number: "2,700-3,500 -> 1,300-1,800", label: "Annual work hours", context: "Work hours in wealthy countries declined significantly.", source: "Historical estimates", treatment: "scroll-comparison" },
  { id: "s15", number: "1B -> 8B", label: "Population growth", context: "World population increased from roughly 1 billion to 8 billion.", source: "Historical estimates", treatment: "big-number" },
  { id: "s16", number: "77%", label: "Services share of GDP", context: "Services account for roughly 77% of GDP.", source: "World Bank", treatment: "margin-callout" },
  { id: "s17", number: "4.7M", label: "People kept from poverty by UI", context: "Unemployment insurance kept 4.7 million out of poverty in 2020.", source: "U.S. Census Bureau", treatment: "inline-highlight" },
  { id: "s18", number: "18%", label: "Associate degree earnings lift", context: "Associate degrees can increase earnings by roughly 18%.", source: "Columbia CCRC", treatment: "margin-callout" },
  { id: "s19", number: "15 cigarettes/day", label: "Isolation risk equivalence", context: "Social isolation risk is comparable to smoking 15 cigarettes per day.", source: "U.S. Surgeon General", treatment: "quote-stat-pair" },
];

const s = (id: string) => statInventory.find((item) => item.id === id)!;

export const essaySections: EssaySection[] = [
  { id: "hero", type: "part", heading: "What If It All Goes Right?", subheading: "A Front-Line Dispatch from Deep Within the AI Transition", content: "by William & Mary", summary: "A frontline report from operators building an AI-first cultural company." },

  { id: "meta-preface", type: "meta", heading: "Preface - The Reason We Wrote This", collapsible: true, content: "The AI discourse has become a false binary between doom and dismissal. We wrote this to replace speculation with operating reality. We believe a profound shift is underway, and with deliberate action, large parts of it can go right.", summary: "Reject doom-vs-hype framing with grounded field evidence." },
  { id: "meta-anon", type: "meta", heading: "Why We Are Releasing This Anonymously (For Now)", collapsible: true, content: "We sign as William & Mary to keep focus on ideas and outcomes. The dialogue format is meant to provoke practical debate among creators, technologists, and policymakers.", summary: "Anonymity keeps the focus on decisions and outcomes." },
  { id: "meta-who", type: "meta", heading: "Who We Are", collapsible: true, content: "William is a repeat founder. Mary is a dancer and AI researcher leading implementation. Both are building a culture-first company that directs savings from automation into real-world artists and venues.", summary: "Builder-researcher perspective from active operations." },
  { id: "meta-audience", type: "meta", heading: "Who Is This For", collapsible: true, content: "For everyone participating in, curious about, or worried by AI transition. Adoption is already broad across organizations and business functions, and likely accelerating beyond official reporting windows.", summary: "AI is no longer niche; the transition is immediate.", stats: [s("s1"), s("s2")], sourceCitations: ["Stanford AI Index"] },

  { id: "part-one", type: "part", heading: "Part One - The World Has Changed", content: "Direct observations from building and operating an AI-first company in stealth.", summary: "Operational conditions changed faster than institutional assumptions." },
  { id: "ground-william", type: "dialogue", heading: "What I'm Seeing on the Ground", speaker: "william", content: "We built network infrastructure for cultural connection, helping venues activate spaces with artists and audiences.", summary: "Culture-first infrastructure, not a generic app." },
  { id: "ground-mary", type: "dialogue", heading: "What I'm Seeing on the Ground", speaker: "mary", content: "Traditional seed-stage playbooks no longer fit our economics. We can scale profitably without the venture treadmill.", summary: "Tooling changed startup financing assumptions." },
  { id: "ground-william-2", type: "dialogue", heading: "What I'm Seeing on the Ground", speaker: "william", content: "Token usage exploded from hundreds of thousands per week to over 100 million per day as tools became workflow-complete.", summary: "Agent capability crossed an operational threshold.", stats: [s("s3")] },

  { id: "build-mary", type: "dialogue", heading: "How We Built Our Company from the Ground Up with AI", speaker: "mary", content: "Outputs are deeply human: real people in real rooms. Internally, the company runs as an AI-native technology operation.", summary: "Human outcomes, AI-native operations." },
  { id: "build-william", type: "dialogue", heading: "How We Built Our Company from the Ground Up with AI", speaker: "william", content: "We achieved multi-million-dollar traction with a tiny team, replacing what recently required a much larger knowledge-work staff.", summary: "AI-first staffing model changed team shape." },
  { id: "build-mary-2", type: "dialogue", heading: "How We Built Our Company from the Ground Up with AI", speaker: "mary", content: "Agents handle core low-level knowledge operations across support, ticketing, bookkeeping, legal triage, sales, publicity, and tooling integration.", summary: "Agents now own broad operational surface area.", stats: [s("s4"), s("s5")], sourceCitations: ["Quarterly Journal of Economics"] },

  { id: "econ-william", type: "dialogue", heading: "The Economics of the Shift", speaker: "william", content: "AI-driven savings are material and growing across core functions. We see this as an early signal of a broader shift.", summary: "Savings are already real and compounding." },
  { id: "econ-mary", type: "dialogue", heading: "The Economics of the Shift", speaker: "mary", content: "We redeploy savings into local artists, performers, and venues. Arts demand is growing, not shrinking.", summary: "Automation gains can increase cultural investment.", stats: [s("s6"), s("s7")], sourceCitations: ["Bureau of Economic Analysis"] },

  { id: "before-william", type: "dialogue", heading: "The Before and After", speaker: "william", content: "Old venture cycles required years and heavy burn for middling outcomes. Now prototyping and feedback loops run in minutes, with hardening done by small expert teams.", summary: "Cycle time collapsed from years to weeks or less." },
  { id: "before-mary", type: "dialogue", heading: "The Before and After", speaker: "mary", content: "This is not hypothetical. Most back-office knowledge-work overhead is now automated, including coordination taxes that consumed large slices of work weeks.", summary: "Coordination overhead is now primary automation target.", stats: [s("s8"), s("s9")], sourceCitations: ["Microsoft Work Trend Index", "APQC"] },

  { id: "part-two", type: "part", heading: "Part Two - The End of Bullshit Jobs", content: "Graeber's diagnosis of pointless labor becomes actionable under modern AI systems.", summary: "Busywork removal can reallocate effort toward meaningful work." },
  { id: "bull-william", type: "dialogue", heading: "The End of Bullshit Jobs", speaker: "william", content: "Graeber's taxonomy resonated because workers recognized their lived experience in it. Numbers vary by study, but the dysfunction is visible.", summary: "The diagnosis remains culturally and organizationally relevant.", stats: [s("s10"), s("s11")] },
  { id: "bull-mary", type: "dialogue", heading: "The End of Bullshit Jobs", speaker: "mary", content: "AI is removing the barnacles of performative coordination, not the meaningful core of human contribution.", summary: "Automation can strip process residue around real work." },

  { id: "part-three", type: "part", heading: "Part Three - A Brief History of Work", content: "No labor regime has been permanent. Every transition looked unnatural until it became normal.", summary: "History frames today's shift as pattern, not anomaly." },
  { id: "timeline-hunter", type: "timeline", heading: "Hunter-Gatherers", content: "Subsistence labor may have been far lower than modern office workloads.", stats: [s("s12")] },
  { id: "timeline-agrarian", type: "timeline", heading: "Agrarian Society", content: "Agriculture scaled population and hierarchy over millennia, with most people in food production." },
  { id: "timeline-industrial", type: "timeline", heading: "Industrial Revolution", content: "The transition produced acute pain and then dramatic long-run gains.", stats: [s("s13"), s("s14"), s("s15")] },
  { id: "timeline-knowledge", type: "timeline", heading: "Knowledge Work", content: "Professional and service labor expanded sharply and now dominates GDP.", stats: [s("s16")] },
  { id: "timeline-unknown", type: "timeline", heading: "The Unknown (Beginning Now)", content: "Another transition has started. Adaptation quality determines social outcomes." },

  { id: "part-five", type: "part", heading: "Part Five - What Might Come Next", content: "Four predictions: VC restructuring, startup proliferation, renewed passion work, and expanded deep research.", summary: "Potentially more distributed, creative, and research-intensive economy." },

  { id: "part-six", type: "part", heading: "Part Six - A Better World Is Possible, but Transition Will Be Rough", content: "The transition can be positive overall, but only with serious social buffering and institutional response.", summary: "Policy and governance shape distribution of gains and pain." },
  { id: "gov", type: "prose", heading: "What Government Needs to Do", content: "Strengthen unemployment insurance, test wage insurance, and invest in retraining pipelines and accessible education pathways.", summary: "Use proven stabilizers while workers re-enter new labor markets.", stats: [s("s17"), s("s18")], sourceCitations: ["Census Bureau", "NBER", "Columbia CCRC", "BLS"] },
  { id: "enterprise", type: "prose", heading: "What Private Enterprise Needs to Do", content: "Translate productivity gains into lower costs and wider opportunity, not only margin concentration behind regulatory moats.", summary: "Competition and diffusion are required for broad consumer benefit.", sourceCitations: ["BIS", "Baumol"] },
  { id: "individual", type: "prose", heading: "What Individuals Can Do", content: "Build tool fluency, invest in local community ties, and pursue meaningful work while transition windows open.", summary: "Learn fast, connect locally, and act deliberately.", stats: [s("s19")], sourceCitations: ["U.S. Surgeon General", "WHO"] },

  { id: "conclusion", type: "prose", heading: "Conclusion", content: "The authors reject both techno-utopian and collapse narratives. They argue this is a real inflection point with high upside for creators if transition risks are managed well.", summary: "A pragmatic, high-agency thesis for the next few years." },
  { id: "bibliography", type: "bibliography", heading: "Further Reading / Bibliography", content: "Core references spanning labor theory, economic transition, and AI productivity." },
];

export const timelineEpochs: TimelineEpoch[] = [
  { id: "e1", era: "Hunter-Gatherers", period: "~300,000 years", description: "For the vast majority of human existence, this was the job: foraging, hunting, and occasional warfare, punctuated by frequent starvation. Anthropologists like Marshall Sahlins have argued that hunter-gatherers actually worked fewer hours than modern office workers — roughly 15–20 hours per week of \"work\" in the subsistence sense. When agriculture appeared roughly 10,000 years ago, it almost certainly faced resistance.", shift: "15–20 hours/week of subsistence labor" },
  { id: "e2", era: "Agrarian Society", period: "~10,000 years", description: "Agriculture slowly and then quickly covered most of the world, producing enormous gains in population, structure, education, and cooperation. But the gains came slowly — over many thousands of years. Life for most people was still defined by manual labor, subsistence farming, and relatively fixed social roles. For most of the agrarian era, 80–90% of the population was engaged in food production.", shift: "80–90% of population in food production" },
  { id: "e3", era: "Industrial Revolution", period: "~250 years", description: "The movement into cities and factories was resisted by many. The Luddites weren't as irrational as they are often depicted; they were watching their livelihoods evaporate. The transition came with serious costs: child labor, brutal working conditions, urban squalor. The so-called \"Engels' Pause\" — a period when productivity surged but real wages stagnated for roughly 50 years — is now a standard reference point. But over the longer arc, infant mortality dropped dramatically, life expectancy more than doubled, and working hours fell significantly.", shift: "Life expectancy: 32 → 71 years" },
  { id: "e4", era: "Knowledge Work", period: "~50–70 years", description: "For everyone born in the last half-century, knowledge work feels like all there is and all there ever will be. The office, the commute, the Slack channel — it's the water we swim in. Between 1910 and 2000, professional, managerial, clerical, sales, and service workers tripled, growing from one-quarter to three-quarters of total employment. Today, the U.S. services sector accounts for roughly 77% of GDP.", shift: "Services = 77% of GDP" },
  { id: "e5", era: "The Unknown", period: "Beginning now", description: "What's coming next doesn't have a name yet, but the pattern is clear: each transition felt world-ending at the time and world-defining in retrospect. Each came with serious disruption and resistance. Each ultimately proved to be an upgrade for humanity writ large — though never evenly distributed and never without cost. We believe we are in the earliest stages of such a transition right now.", shift: "The question is whether we navigate it with wisdom or with panic." },
];

export const predictions: Prediction[] = [
  { id: "p1", title: "Venture capital restructures", detail: "Deep-tech remains capital-intensive; many other startups may need far less financing to launch." },
  { id: "p2", title: "A million start-ups bloom", detail: "Agent-powered small teams can build durable niche businesses." },
  { id: "p3", title: "Passion work becomes viable", detail: "If social buffers and deflation trends hold, more local and creative work becomes economically feasible." },
  { id: "p4", title: "Deep research expands", detail: "Talent can move from low-leverage optimization work into science and discovery." },
];

export const counterarguments: Counterargument[] = [
  { id: "c1", question: "But what about permanent mass unemployment?", response: "The essay expects reallocation over collapse but argues transition buffers are essential." },
  { id: "c2", question: "But what about concentration of gains?", response: "The risk is real. Broad diffusion needs competition and fewer moat-seeking policies." },
  { id: "c3", question: "But what about social fragmentation?", response: "The response is local community infrastructure and culture-first reinvestment." },
];

export const bibliography: { title: string; url: string }[] = [
  { title: "David Graeber — Bullshit Jobs: A Theory (2018)", url: "https://theanarchistlibrary.org/library/david-graeber-bullshit-jobs" },
  { title: "David Autor — Why Are There Still So Many Jobs? (2015)", url: "https://economics.mit.edu/sites/default/files/publications/AutorJEP2015.pdf" },
  { title: "Acemoglu & Restrepo — Automation and New Tasks (2019)", url: "https://www.aeaweb.org/articles?id=10.1257/jep.33.2.3" },
  { title: "Brynjolfsson, Li, Raymond — Generative AI at Work (QJE, 2025)", url: "https://academic.oup.com/qje/article/139/3/1721/7607605" },
  { title: "Card, Kluve, Weber — What Works? (NBER)", url: "https://www.nber.org/papers/w21431" },
  { title: "William Baumol — The Cost Disease (2012)", url: "https://yalebooks.yale.edu/book/9780300198157/the-cost-disease/" },
  { title: "Stanford HAI — AI Index 2025", url: "https://aiindex.stanford.edu/report/" },
  { title: "IMF — Gen-AI and the Future of Work (2024)", url: "https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379" },
  { title: "OECD — Generative AI and Productivity (2025)", url: "https://www.oecd.org/en/publications/the-effects-of-generative-ai-on-high-skilled-workers_91e36406-en.html" },
];

export const speakerPortraits: Record<Speaker, string> = {
  william: "/images/william.jpg",
  mary: "/images/mary.jpg",
};
