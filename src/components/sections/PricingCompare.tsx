import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import PricingTable, { type PricingGroup, type PricingTier } from "./PricingTable";
import styles from "./PricingCompare.module.css";

const tiers: PricingTier[] = [
  { name: "Starter", price: "$250", note: "One-time build", cta: { label: "Start building", href: "/contact" } },
  { name: "Business", price: "$700", note: "One-time build", cta: { label: "Grow here", href: "/contact" } },
  { name: "E-commerce", price: "$800", note: "One-time build", cta: { label: "Start selling", href: "/contact" } },
  { name: "Web App", price: "$1,200", note: "Custom build", cta: { label: "Consult", href: "/contact" } },
];

const groups: PricingGroup[] = [
  {
    label: "Design & development",
    rows: [
      { feature: "Custom responsive design", values: [true, true, true, true] },
      { feature: "Easy-to-edit CMS", values: [false, true, true, "Optional"] },
      { feature: "Contact forms included", values: [true, true, true, true] },
      { feature: "Blog and galleries", values: [false, true, true, "Optional"] },
      { feature: "Basic SEO setup", values: [true, true, true, "Optional"] },
      { feature: "Custom backend system", values: [false, false, false, true] },
      { feature: "User accounts & logins", values: [false, false, false, true] },
      { feature: "API integrations", values: [false, false, "Limited", true] },
    ],
  },
  {
    label: "Content & features",
    rows: [
      { feature: "Pages included", values: ["1–3", "Up to 10", "Up to 10", "Custom"] },
      { feature: "Product catalogue", values: [false, false, true, "Optional"] },
      { feature: "Secure payment processing", values: [false, false, true, "Optional"] },
      { feature: "Mobile-optimised checkout", values: [false, false, true, "Optional"] },
      { feature: "Custom dashboards", values: [false, false, false, true] },
      { feature: "Database functionality", values: [false, false, "Limited", true] },
    ],
  },
];

export default function PricingCompare() {
  return (
    <section className={`pad ${styles.section}`}>
      <div className="wide">
        <Reveal>
          <Eyebrow index="02">Compare</Eyebrow>
        </Reveal>

        <div className={styles.head}>
          <Reveal as="h2" className={styles.heading}>
            See what&apos;s included
          </Reveal>
          <Reveal as="p" delay={1} className={styles.lede}>
            All packages come with custom design, ongoing support, and security updates. See what sets each tier
            apart.
          </Reveal>
        </div>

        <Reveal delay={1}>
          <PricingTable tiers={tiers} groups={groups} />
        </Reveal>
      </div>
    </section>
  );
}
