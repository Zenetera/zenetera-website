"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.dotGrid} />
      <div className={styles.grain} />

      <div className={styles.inner}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Zenetera
        </motion.span>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We build the{" "}
          <span className={styles.accent}>digital foundations</span> small
          businesses actually run on
        </motion.h1>

        <motion.p
          className={styles.lede}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Zenetera is a UK Web Services Agency working with small businesses and
          professional services to design, develop, deploy and automate the online
          presence that turns visitors into customers without the agency
          markup or endless retainer fees.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/#contact" className={styles.ctaPrimary}>
            Book a free audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/services" className={styles.ctaSecondary}>
            See our services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
