"use client";

import Link from "next/link";
import styles from "./PricingPackages.module.css";

const packages = [
  {
    label: "Starter",
    title: "Starter Website",
    price: "£250",
    pricePrefix: "From",
    description:
      "Landing pages. Personal brands. Start-ups looking for a clean online presence.",
    cta: { text: "Start building", href: "/contact" },
    features: [
      "1–3 pages included",
      "Custom responsive design",
      "Contact form included",
      "Basic SEO setup",
    ],
  },
  {
    label: "Business",
    title: "Business Website",
    price: "£700",
    pricePrefix: "From",
    description:
      "Small & growing businesses that need constant updates and room to scale.",
    cta: { text: "Grow your business", href: "/contact" },
    features: [
      "Up to 10 pages",
      "Easy-to-edit CMS",
      "Blog and galleries",
      "Basic SEO setup",
    ],
  },
  {
    label: "E-commerce",
    title: "Online Store",
    price: "£800",
    pricePrefix: "From",
    description:
      "Selling products online with secure payments and mobile-optimised checkout.",
    cta: { text: "Start selling", href: "/contact" },
    features: [
      "Product catalogue",
      "Secure payment processing",
      "Mobile-optimised checkout",
      "Up to 10 pages",
    ],
  },
  {
    label: "Advanced",
    title: "Custom Web App",
    price: "£1,200",
    pricePrefix: "From",
    description:
      "SaaS. Dashboards. Internal tools. Built with custom backend systems.",
    cta: { text: "Consult", href: "/contact" },
    features: [
      "Custom dashboards",
      "User accounts & logins",
      "API integrations",
      "Database functionality",
    ],
  },
];

export default function PricingPackages() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Packages</span>
          <h2 className={styles.heading}>Pick your starting point</h2>
          <p className={styles.subtitle}>
            Each plan comes with hosting, domain setup, and ongoing support
            included.
          </p>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg) => (
            <div key={pkg.label} className={styles.card}>
              <span className={styles.cardLabel}>{pkg.label}</span>
              <h3 className={styles.cardTitle}>{pkg.title}</h3>

              <div className={styles.cardPriceBlock}>
                <span className={styles.cardPricePrefix}>
                  {pkg.pricePrefix}
                </span>
                <span className={styles.cardPrice}>{pkg.price}</span>
              </div>

              <p className={styles.cardDescription}>{pkg.description}</p>

              <Link href={pkg.cta.href} className={styles.cardCta}>
                {pkg.cta.text}
              </Link>

              <div className={styles.cardFeatures}>
                <span className={styles.cardFeaturesLabel}>Features</span>
                {pkg.features.map((f) => (
                  <div key={f} className={styles.featureItem}>
                    <span className={styles.featureCheck}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
