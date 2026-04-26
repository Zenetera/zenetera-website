"use client";

import { motion } from "framer-motion";
import styles from "./TrustStrip.module.css";

export default function TrustStrip() {
  return (
    <motion.div
      className={styles.wrap}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <p className={styles.label}>Trusted by UK service businesses</p>
      <div className={styles.logos}>
        <div className={styles.logoPlaceholder} />
        <div className={styles.logoPlaceholder} />
        <div className={styles.logoPlaceholder} />
        <div className={styles.logoPlaceholder} />
      </div>
    </motion.div>
  );
}
