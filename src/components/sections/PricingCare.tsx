import Card, { type CardTone } from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import PricingTable, { type PricingGroup, type PricingTier } from "./PricingTable";
import styles from "./PricingCare.module.css";

/* ── Required Care Data ────────────────────────────── */
const careTiers: PricingTier[] = [
  { name: "Starter", price: "$30/mo" },
  { name: "Business", price: "$60/mo" },
  { name: "E-commerce", price: "$80/mo" },
  { name: "Web App", price: "From $120/mo" },
];

const careGroups: PricingGroup[] = [
  {
    rows: [
      { feature: "Hosting", values: [true, true, true, true] },
      { feature: "Domain management", values: [true, true, true, true] },
      { feature: "Security updates", values: [true, true, true, true] },
      { feature: "SSL certificate", values: [true, true, true, true] },
      { feature: "Automatic backups", values: [true, true, true, true] },
      { feature: "Uptime monitoring", values: ["Basic", "Standard", "Advanced", "Advanced"] },
      { feature: "Technical support", values: ["Email", "Priority", "Priority", "Dedicated"] },
    ],
  },
];

/* ── Optional Upgrades Data ────────────────────────── */
const upgrades = [
  {
    label: "Essential",
    price: "$30",
    note: "/month",
    title: "Essential care plan",
    description: "Small fixes, plugin updates, and a monthly health check. Best for sites that rarely change.",
  },
  {
    label: "Growth",
    price: "$75",
    note: "/month",
    title: "Growth plan",
    description:
      "Everything in Essential, plus content edits and priority support. Best for businesses updating content regularly.",
  },
  {
    label: "Pro",
    price: "$150",
    note: "/month",
    title: "Pro care plan",
    description:
      "Unlimited small changes, SEO monitoring, analytics support, and same-day responses. Best for fast-growing companies.",
  },
];

const tones: CardTone[] = ["surface", "accent", "dark"];

export default function PricingCare() {
  return (
    <section className={`pad ${styles.section}`}>
      <div className="wide">
        {/* Required care */}
        <Reveal>
          <Eyebrow index="03">Maintenance</Eyebrow>
        </Reveal>

        <div className={styles.head}>
          <Reveal as="h2" className={styles.heading}>
            Keep your site running strong
          </Reveal>
          <Reveal as="p" delay={1} className={styles.lede}>
            Hosting, security, and updates handled. You focus on your business.
          </Reveal>
        </div>

        <Reveal delay={1}>
          <PricingTable tiers={careTiers} groups={careGroups} />
        </Reveal>

        {/* Optional support upgrades */}
        <div className={styles.upgrades}>
          <Reveal>
            <Eyebrow index="04">Optional</Eyebrow>
          </Reveal>

          <div className={styles.head}>
            <Reveal as="h2" className={styles.heading}>
              Support upgrades
            </Reveal>
            <Reveal as="p" delay={1} className={styles.lede}>
              Service upgrades for ongoing content changes, fixes, and growth. Not infrastructure — these sit on top
              of your care plan.
            </Reveal>
          </div>

          <div className={styles.grid}>
            {upgrades.map((u, i) => (
              <Reveal key={u.label} delay={i as 0 | 1 | 2} className={styles.cell}>
                <Card as="article" tone={tones[i]} shape compact className={styles.card}>
                  <Eyebrow compact as="span" className={styles.cardLabel}>
                    {u.label}
                  </Eyebrow>
                  <p className={styles.price}>
                    {u.price}
                    <span className={styles.priceNote}>{u.note}</span>
                  </p>
                  <h3 className={styles.cardTitle}>{u.title}</h3>
                  <p className={styles.description}>{u.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
