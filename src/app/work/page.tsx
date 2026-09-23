import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/content/work";
import CtaBlock from "@/components/sections/CtaBlock";
import PageHero from "@/components/sections/PageHero";
import WorkGrid from "@/components/sections/WorkGrid";

export const metadata = buildMetadata({
  title: "Our Work",
  description:
    "Case studies from ZENETERA ITC: websites, automation and brand work for small businesses, and what changed for each of them.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        heading="Websites that earn their keep."
        flair="earn their keep."
        sub="Case studies from the businesses we have built for: what they needed, what we made, and what changed afterwards."
      />
      <WorkGrid studies={caseStudies} />
      <CtaBlock
        heading="Want results like these?"
        flair="like these?"
        text="Tell us about your business and we will show you what a project like this would look like for you."
        primary={{ label: "Start a project", href: "/#contact" }}
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  );
}
