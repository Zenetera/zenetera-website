import Button from "@/components/ui/Button";
import Card, { type CardTone } from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import FeatureList from "@/components/ui/FeatureList";
import Reveal from "@/motion/Reveal";
import styles from "./PricingPackages.module.css";

const packages = [
  {
    label: "Starter",
    title: "Starter Website",
    price: "$250",
    pricePrefix: "From",
    description: "Landing pages. Personal brands. Start-ups looking for a clean online presence.",
    cta: { text: "Start building", href: "/contact" },
    features: ["1–3 pages included", "Custom responsive design", "Contact form included", "Basic SEO setup"],
  },
  {
    label: "Business",
    title: "Business Website",
    price: "$700",
    pricePrefix: "From",
    description: "Small & growing businesses that need constant updates and room to scale.",
    cta: { text: "Grow your business", href: "/contact" },
    features: ["Up to 10 pages", "Easy-to-edit CMS", "Blog and galleries", "Basic SEO setup"],
  },
  {
    label: "E-commerce",
    title: "Online Store",
    price: "$800",
    pricePrefix: "From",
    description: "Selling products online with secure payments and mobile-optimised checkout.",
    cta: { text: "Start selling", href: "/contact" },
    features: ["Product catalogue", "Secure payment processing", "Mobile-optimised checkout", "Up to 10 pages"],
  },
  {
    label: "Advanced",
    title: "Custom Web App",
    price: "$1,200",
    pricePrefix: "From",
    description: "SaaS. Dashboards. Internal tools. Built with custom backend systems.",
    cta: { text: "Consult", href: "/contact" },
    features: ["Custom dashboards", "User accounts & logins", "API integrations", "Database functionality"],
  },
];

const tones: CardTone[] = ["accent", "neutral", "surface", "dark"];

export default function PricingPackages() {
  return (
    <section className={`pad ${styles.section}`}>
      <div className="wide">
        <Reveal>
          <Eyebrow index="01">Packages</Eyebrow>
        </Reveal>

        <div className={styles.head}>
          <Reveal as="h2" className={styles.heading}>
            Pick your starting point
          </Reveal>
          <Reveal as="p" delay={1} className={styles.lede}>
            Each plan comes with hosting, domain setup, and ongoing support included.
          </Reveal>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <Reveal key={pkg.label} delay={i as 0 | 1 | 2 | 3} className={styles.cell}>
              <Card as="article" tone={tones[i]} shape compact className={styles.card}>
                <Eyebrow compact as="span" className={styles.cardLabel}>
                  {pkg.label}
                </Eyebrow>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>

                <p className={styles.priceBlock}>
                  <span className={styles.pricePrefix}>{pkg.pricePrefix}</span>
                  <span className={styles.price}>{pkg.price}</span>
                </p>

                <p className={styles.description}>{pkg.description}</p>

                <div className={styles.cta}>
                  <Button href={pkg.cta.href} variant={tones[i] === "dark" ? "light" : "primary"} className={styles.ctaButton}>
                    {pkg.cta.text}
                  </Button>
                </div>

                <span className={styles.featuresLabel}>Features</span>
                <FeatureList items={pkg.features} dense />
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
