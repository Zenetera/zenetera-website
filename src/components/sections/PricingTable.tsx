import Link from "next/link";
import { cx } from "@/lib/cx";
import styles from "./PricingTable.module.css";

export type CellValue = true | false | string;

export interface PricingTier {
  name: string;
  price: string;
  note?: string;
  cta?: { label: string; href: string };
}

export interface PricingRow {
  feature: string;
  values: CellValue[];
}

export interface PricingGroup {
  label?: string;
  rows: PricingRow[];
}

interface PricingTableProps {
  tiers: PricingTier[];
  groups: PricingGroup[];
  className?: string;
}

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <span className={styles.check} aria-label="Included">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className={styles.cross} aria-label="Not included">
        —
      </span>
    );
  }
  return <span className={styles.cellText}>{value}</span>;
}

/** Hairline comparison grid with a tier header row; scrolls horizontally on small screens. */
export default function PricingTable({ tiers, groups, className }: PricingTableProps) {
  const columns = { "--tiers": tiers.length } as React.CSSProperties;

  return (
    <div className={cx(styles.wrap, className)}>
      <div className={styles.table} style={columns} role="table">
        <div className={cx(styles.row, styles.head)} role="row">
          <div className={styles.spacer} role="columnheader" aria-label="Feature" />
          {tiers.map((tier) => (
            <div key={tier.name} className={styles.tier} role="columnheader">
              <span className={styles.tierName}>{tier.name}</span>
              <span className={styles.tierPrice}>{tier.price}</span>
              {tier.note && <span className={styles.tierNote}>{tier.note}</span>}
              {tier.cta && (
                <Link href={tier.cta.href} className={styles.tierCta}>
                  {tier.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {groups.map((group, gi) => (
          <div key={group.label ?? gi} role="rowgroup">
            {group.label && (
              <div className={styles.groupLabel} role="row">
                <span role="cell">{group.label}</span>
              </div>
            )}
            {group.rows.map((row) => (
              <div key={row.feature} className={styles.row} role="row">
                <div className={styles.feature} role="rowheader">
                  {row.feature}
                </div>
                {row.values.map((value, i) => (
                  <div key={i} className={styles.cell} role="cell">
                    <Cell value={value} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
