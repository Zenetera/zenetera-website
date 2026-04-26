"use client";

import { motion } from "framer-motion";
import styles from "./AboutApproach.module.css";

const pillars = [
  {
    number: "01",
    title: "Start with the outcome",
    text: "Before we touch Figma, we ask: what does a good month look like for this business? More bookings? Fewer admin hours? Better leads? Every build is reverse-engineered from there.",
  },
  {
    number: "02",
    title: "Build lean, ship fast",
    text: "We don't over-engineer. Tight scopes mean we launch in weeks, not quarters. So you start seeing the return before your next quarterly review.",
  },
  {
    number: "03",
    title: "Automate the boring stuff",
    text: "Appointment reminders, lead capture, FAQ responses, follow-ups. If a human has to do it more than once a week, we probably shouldn't be doing it at all.",
  },
  {
    number: "04",
    title: "Stay close after launch",
    text: "Launch day isn't the finish line. We stick around for the first 30 days, measure what matters, and tune what isn't pulling its weight.",
  },
];

export default function AboutApproach() {
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
          <span className={styles.label}>How we work</span>
          <h2 className={styles.heading}>A deliberate, pragmatic approach</h2>

        </motion.div>

        <div className={styles.list}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className={styles.number}>{p.number}</span>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{p.title}</h3>
                <p className={styles.itemText}>{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
