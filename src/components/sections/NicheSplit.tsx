"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NICHES } from "@/lib/niches";
import styles from "./NicheSplit.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function NicheSplit() {
  return (
    <section className={styles.section} id="industries">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Industries</span>
          <h2 className={styles.heading}>Built for your business</h2>
          <p className={styles.subtitle}>
            We build the same systems every time, tuned to how your industry actually wins
            customers.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {NICHES.map((niche) => (
            <motion.div key={niche.slug} className={styles.card} variants={fadeIn}>
              <Link href={`/${niche.slug}`} className={styles.cardInner}>
                <span className={styles.cardEyebrow}>{niche.eyebrow}</span>
                <h3 className={styles.cardTitle}>{niche.label}</h3>
                <p className={styles.cardTagline}>{niche.tagline}</p>
                <span className={styles.cardArrow}>
                  Explore
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
