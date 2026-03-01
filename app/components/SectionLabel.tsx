import RevealOnScroll from "./RevealOnScroll";

interface Props {
  label: string;
  heading: string;
  subheading?: string;
}

export default function SectionLabel({ label, heading, subheading }: Props) {
  return (
    <RevealOnScroll>
      <div className="pt-32 md:pt-48 pb-16 md:pb-24 px-[8%] md:px-[16%]">
        <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted/50 mb-6">
          {label}
        </p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-paper leading-tight max-w-3xl">
          {heading}
        </h2>
        {subheading && (
          <p className="mt-4 font-sans text-lg text-muted max-w-xl">
            {subheading}
          </p>
        )}
        <div className="cx-rule mt-12" />
      </div>
    </RevealOnScroll>
  );
}
