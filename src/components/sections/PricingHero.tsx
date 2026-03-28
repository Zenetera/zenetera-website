"use client";

import { motion } from "framer-motion";
import styles from "./PricingHero.module.css";

export default function PricingHero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.heroLabel}>Pricing</span>
        <h1 className={styles.heroHeading}>
          Simple, <span className={styles.gradientText}>transparent</span>{" "}
          pricing
        </h1>
        <p className={styles.heroSubtitle}>
          No hidden fees, no surprises. Choose a package that fits your business
          and start growing today.
        </p>
      </motion.div>
    </section>
  );
}
