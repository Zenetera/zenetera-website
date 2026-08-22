import { buildMetadata } from "@/lib/metadata";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { faqs } from "@/content/faqs";

export const metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers on pricing, hosting, monthly care and ownership, plus how to choose a web agency for villa rentals, beauty salons, trades and property businesses.",
  path: "/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escape "<" so authored content can never break out of the script tag.
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <FAQ
        expanded
        headingLevel="h1"
        heading="Everything you need to know"
        subtitle="Pricing, process and ownership, plus the questions we get asked most by villa owners, salons, trades and property businesses."
      />
      <FinalCTA />
    </>
  );
}
