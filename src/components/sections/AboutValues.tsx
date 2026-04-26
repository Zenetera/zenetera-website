"use client";

import { motion } from "framer-motion";
import styles from "./AboutValues.module.css";

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="21.17" y1="8" x2="12" y2="8" />
        <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
        <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
      </svg>
    ),
    title: "Outcomes over vanity",
    text: "We don't ship pretty websites that sit idle. Every page and form is measured against a concrete business outcome e.g. bookings, enquiries, calls.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3 9 4-18 3 9h4" />
      </svg>
    ),
    title: "Transparent pricing",
    text: "Fixed scopes, fixed prices, no surprise retainers. You see the full cost before we start, and we finish at that price.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Responsive, always",
    text: "We reply to every enquiry within one working day. Small business owners have ten things on fire, we're not adding to the pile.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Own what we build",
    text: "You keep the code, the copy, the accounts. No lock-in. If you ever outgrow us, the work moves with you.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Design that earns its keep",
    text: "Clean, modern and uncluttered. But every design choice is defensible. If it doesn't serve the visitor or the owner, it gets cut.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Plain-English delivery",
    text: "No jargon, no condescension. We explain what we're building, why it matters and how it works, in language a non-technical owner actually wants to read.",
  },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutValues() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>What we stand for</span>
          <h2 className={styles.heading}>Six principles. Nothing Extra.</h2>
          <p className={styles.subtitle}>
            The rules we hold ourselves to on every project, whether it&apos;s
            a simple landing page or a full custom platform.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {values.map((value) => (
            <motion.div key={value.title} className={styles.card} variants={fadeIn}>
              <div className={styles.iconWrap}>{value.icon}</div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardText}>{value.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
