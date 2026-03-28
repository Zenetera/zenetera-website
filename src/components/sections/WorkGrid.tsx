"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies } from "@/content/work";
import styles from "./WorkGrid.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WorkGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Selected Work</h2>
      <div className={styles.grid}>
        {caseStudies.map((study) => (
          <motion.div
            key={study.slug}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href={`/work/${study.slug}`} className={styles.card}>
              <div className={styles.imagePlaceholder} />
              <div className={styles.cardBody}>
                <p className={styles.client}>{study.client}</p>
                <h3 className={styles.cardTitle}>{study.title}</h3>
                <div className={styles.tags}>
                  {study.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
