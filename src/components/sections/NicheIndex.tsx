"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NICHES } from "@/lib/niches";
import styles from "./NicheIndex.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function NicheIndex() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.heroLabel}>Products</span>
          <h1 className={styles.heroHeading}>
            Built for your industry, not{" "}
            <span className={styles.gradientText}>everyone&apos;s</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Packaged websites and booking systems, shaped around how your industry actually wins
            customers. Same craft, different playbook.
          </p>
        </motion.div>
      </section>

      {/* Niche cards */}
      <section className={styles.grid}>
        <motion.div
          className={styles.gridContainer}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {NICHES.map((niche) => (
            <motion.div key={niche.slug} className={styles.card} variants={fadeIn}>
              <span className={styles.cardEyebrow}>{niche.eyebrow}</span>
              <h2 className={styles.cardTitle}>{niche.label}</h2>
              <p className={styles.cardTagline}>{niche.tagline}</p>

              <ul className={styles.cardList}>
                {niche.sections.map((section) => (
                  <li key={section.title} className={styles.cardListItem}>
                    <span className={styles.cardListIcon}>✓</span>
                    {section.title}
                  </li>
                ))}
              </ul>

              {niche.priceFrom && <p className={styles.cardPrice}>From {niche.priceFrom}</p>}

              <Link href={`/${niche.slug}`} className={styles.cardLink}>
                Explore {niche.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.cta}>
        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.ctaHeading}>Not sure which fits?</h2>
          <p className={styles.ctaText}>
            Most businesses sit somewhere in between. Tell us how you work today and we&apos;ll
            point you at the right starting place.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Book a free audit →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
