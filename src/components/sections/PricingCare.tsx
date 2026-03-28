"use client";

import styles from "./PricingCare.module.css";

/* ── Required Care Data ────────────────────────────── */
const careTiers = ["Starter", "Business", "E-commerce", "Web App"];
const carePrices = ["£30/mo", "£60/mo", "£80/mo", "From £120/mo"];

type CellValue = true | string;

interface CareRow {
  feature: string;
  values: CellValue[];
}

const careRows: CareRow[] = [
  { feature: "Hosting", values: [true, true, true, true] },
  { feature: "Domain management", values: [true, true, true, true] },
  { feature: "Security updates", values: [true, true, true, true] },
  { feature: "SSL certificate", values: [true, true, true, true] },
  { feature: "Automatic backups", values: [true, true, true, true] },
  {
    feature: "Uptime monitoring",
    values: ["Basic", "Standard", "Advanced", "Advanced"],
  },
  {
    feature: "Technical support",
    values: ["Email", "Priority", "Priority", "Dedicated"],
  },
];

/* ── Optional Upgrades Data ────────────────────────── */
const upgrades = [
  {
    label: "Essential",
    price: "£30",
    note: "/month",
    title: "Essential care plan",
    description:
      "Small fixes, plugin updates, and a monthly health check. Best for sites that rarely change.",
  },
  {
    label: "Growth",
    price: "£75",
    note: "/month",
    title: "Growth plan",
    description:
      "Everything in Essential, plus content edits and priority support. Best for businesses updating content regularly.",
  },
  {
    label: "Pro",
    price: "£150",
    note: "/month",
    title: "Pro care plan",
    description:
      "Unlimited small changes, SEO monitoring, analytics support, and same-day responses. Best for fast-growing companies.",
  },
];

/* ── Component ─────────────────────────────────────── */
export default function PricingCare() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Required care header */}
        <div className={styles.header}>
          <span className={styles.label}>Maintenance</span>
          <h2 className={styles.heading}>Keep your site running strong</h2>
          <p className={styles.subtitle}>
            Hosting, security, and updates handled. You focus on your business.
          </p>
        </div>

        {/* Required care table */}
        <div className={styles.tableWrap}>
          <div className={styles.tierHeader}>
            <div />
            {careTiers.map((name, i) => (
              <div key={name} className={styles.tierCol}>
                <span className={styles.tierName}>{name}</span>
                <span className={styles.tierPrice}>{carePrices[i]}</span>
              </div>
            ))}
          </div>

          {careRows.map((row) => (
            <div key={row.feature} className={styles.row}>
              <div className={styles.featureName}>{row.feature}</div>
              {row.values.map((val, i) => (
                <div key={i} className={styles.cell}>
                  {val === true ? (
                    <span className={styles.check}>✓</span>
                  ) : (
                    <span className={styles.cellText}>{val}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Optional support upgrades */}
        <div className={styles.upgradesSection}>
          <div className={styles.upgradesHeader}>
            <span className={styles.label}>Optional</span>
            <h2 className={styles.heading}>Support upgrades</h2>
            <p className={styles.subtitle}>
              Service upgrades for ongoing content changes, fixes, and growth.
              Not infrastructure — these sit on top of your care plan.
            </p>
          </div>

          <div className={styles.upgradesGrid}>
            {upgrades.map((u) => (
              <div key={u.label} className={styles.upgradeCard}>
                <span className={styles.upgradeLabel}>{u.label}</span>
                <div className={styles.upgradePrice}>
                  {u.price}
                  <span className={styles.upgradePriceNote}>{u.note}</span>
                </div>
                <h3 className={styles.upgradeTitle}>{u.title}</h3>
                <p className={styles.upgradeDescription}>{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
