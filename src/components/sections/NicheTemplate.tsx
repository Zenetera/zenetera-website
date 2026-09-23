import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { getNiche } from "@/lib/niches";
import CtaBlock from "./CtaBlock";
import PageHero from "./PageHero";
import SplitFeature, { type SplitTone } from "./SplitFeature";

interface NicheTemplateProps {
  slug: string;
}

const tones: SplitTone[] = ["light", "alt"];

export default function NicheTemplate({ slug }: NicheTemplateProps) {
  const niche = getNiche(slug);

  if (!niche) {
    notFound();
  }

  return (
    <>
      <PageHero dark eyebrow={niche.eyebrow} heading={niche.heroHeading} sub={niche.heroBody} price={niche.priceFrom}>
        <Button href="/#contact" variant="light" size="lg">
          Book a free audit
        </Button>
      </PageHero>

      {niche.sections.map((section, index) => (
        <SplitFeature
          key={section.title}
          index={String(index + 1).padStart(2, "0")}
          label={niche.label}
          title={section.title}
          body={section.body}
          bullets={section.bullets}
          reversed={index % 2 === 0}
          tone={tones[index % tones.length]}
        />
      ))}

      <CtaBlock
        heading="Let's build it for your business"
        flair="your business"
        text="Tell us how you work today and we'll show you what the system looks like. No pressure, no jargon, just a conversation."
        primary={{ label: "Book a free audit", href: "/#contact" }}
        secondary={{ label: "See all products", href: "/products" }}
      />
    </>
  );
}
