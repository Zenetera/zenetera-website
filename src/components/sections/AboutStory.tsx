"use client";

import { motion } from "framer-motion";
import styles from "./AboutStory.module.css";

const stats = [
  { value: "50+", label: "UK businesses launched" },
  { value: "96%", label: "client retention" },
  { value: "2×", label: "average lead uplift" },
  { value: "< 1 day", label: "response to every enquiry" },
];

export default function AboutStory() {
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
          <span className={styles.label}>Our story</span>
          <h2 className={styles.heading}>Built to make small-business tech feel simple again.</h2>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Zenetera started because the UK small-business market was being quietly underserved.
              They were told they needed websites, automations and AI but priced out of the
              agencies that could actually build them properly.
            </p>
            <p>
              So we built a studio that works the other way around: transparent pricing, tight
              timelines and a delivery model that treats a two-person trades business with the same
              care as a SaaS startup.
            </p>
            <p>
              Today we work with owner-operators across the UK on websites, booking automation, AI
              chatbots, e-commerce and the quiet infrastructure that turns online visibility into booked jobs.
            </p>
          </motion.div>

          <motion.div
            className={styles.statsGrid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
