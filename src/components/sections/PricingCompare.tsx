"use client";

import Link from "next/link";
import styles from "./PricingCompare.module.css";

/* ── Data ──────────────────────────────────────────── */
const tiers = [
  { name: "Starter", price: "£250", note: "One-time build", cta: "Start building" },
  { name: "Business", price: "£700", note: "One-time build", cta: "Grow here" },
  { name: "E-commerce", price: "£800", note: "One-time build", cta: "Start selling" },
  { name: "Web App", price: "£1,200", note: "Custom build", cta: "Consult" },
];

type CellValue = true | false | string;

interface FeatureRow {
  feature: string;
  values: CellValue[];
}

interface Category {
  label: string;
  rows: FeatureRow[];
}

const categories: Category[] = [
  {
    label: "Design & development",
    rows: [
      { feature: "Custom responsive design", values: [true, true, true, true] },
      {
        feature: "Easy-to-edit CMS",
        values: [false, true, true, "Optional"],
      },
      { feature: "Contact forms included", values: [true, true, true, true] },
      {
        feature: "Blog and galleries",
        values: [false, true, true, "Optional"],
      },
      {
        feature: "Basic SEO setup",
        values: [true, true, true, "Optional"],
      },
      {
        feature: "Custom backend system",
        values: [false, false, false, true],
      },
      {
        feature: "User accounts & logins",
        values: [false, false, false, true],
      },
      {
        feature: "API integrations",
        values: [false, false, "Limited", true],
      },
    ],
  },
  {
    label: "Content & features",
    rows: [
      { feature: "Pages included", values: ["1–3", "Up to 10", "Up to 10", "Custom"] },
      {
        feature: "Product catalogue",
        values: [false, false, true, "Optional"],
      },
      {
        feature: "Secure payment processing",
        values: [false, false, true, "Optional"],
      },
      {
        feature: "Mobile-optimised checkout",
        values: [false, false, true, "Optional"],
      },
      {
        feature: "Custom dashboards",
        values: [false, false, false, true],
      },
      {
        feature: "Database functionality",
        values: [false, false, "Limited", true],
      },
    ],
  },
];

/* ── Helpers ───────────────────────────────────────── */
function CellContent({ value }: { value: CellValue }) {
  if (value === true) return <span className={styles.check}>✓</span>;
  if (value === false) return <span className={styles.cross}>—</span>;
  return <span className={styles.cellText}>{value}</span>;
}

/* ── Component ─────────────────────────────────────── */
export default function PricingCompare() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Compare</span>
          <h2 className={styles.heading}>See what&apos;s included</h2>
          <p className={styles.subtitle}>
            All packages come with custom design, ongoing support, and security
            updates. See what sets each tier apart.
          </p>
        </div>

        <div className={styles.tableWrap}>
          {/* Tier header row */}
          <div className={`${styles.tierHeader} ${styles.tierHeader4}`}>
            <div className={styles.tierHeaderSpacer} />
            {tiers.map((t) => (
              <div key={t.name} className={styles.tierCol}>
                <span className={styles.tierName}>{t.name}</span>
                <span className={styles.tierPrice}>{t.price}</span>
                <span className={styles.tierNote}>{t.note}</span>
                <Link href="/contact" className={styles.tierCta}>
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className={styles.categoryLabel}>{cat.label}</div>
              {cat.rows.map((row) => (
                <div
                  key={row.feature}
                  className={`${styles.row} ${styles.row4}`}
                >
                  <div className={styles.featureName}>{row.feature}</div>
                  {row.values.map((val, i) => (
                    <div key={i} className={styles.cell}>
                      <CellContent value={val} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
