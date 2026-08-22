"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNiche } from "@/lib/niches";
import styles from "./NicheTemplate.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface NicheTemplateProps {
  slug: string;
}

export default function NicheTemplate({ slug }: NicheTemplateProps) {
  const niche = getNiche(slug);

  if (!niche) {
    notFound();
  }

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
          <span className={styles.heroLabel}>{niche.eyebrow}</span>
          <h1 className={styles.heroHeading}>{niche.heroHeading}</h1>
          <p className={styles.heroSubtitle}>{niche.heroBody}</p>
          {niche.priceFrom && <p className={styles.heroPrice}>From {niche.priceFrom}</p>}
          <Link href="/#contact" className={styles.heroCta}>
            Book a free audit →
          </Link>
        </motion.div>
      </section>

      {/* Numbered sections */}
      {niche.sections.map((section, index) => {
        const bgClasses = [styles.sectionLight, styles.sectionAlt];
        const sectionClass = bgClasses[index % 2];
        const number = String(index + 1).padStart(2, "0");

        return (
          <section key={section.title} className={sectionClass}>
            <motion.div
              className={`${styles.sectionContainer} ${index % 2 !== 0 ? styles.reversed : ""}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.div className={styles.content} variants={fadeIn}>
                <span className={styles.sectionNumber}>{number}</span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.sectionBody}>{section.body}</p>
              </motion.div>

              <motion.div className={styles.bulletWrap} variants={fadeIn}>
                <ul className={styles.featureList}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className={styles.featureItem}>
                      <span className={styles.featureIcon}>✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className={styles.cta}>
        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.ctaHeading}>Let&apos;s build it for your business</h2>
          <p className={styles.ctaText}>
            Tell us how you work today and we&apos;ll show you what the system looks like. No
            pressure, no jargon, just a conversation.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/#contact" className={styles.ctaButton}>
              Book a free audit →
            </Link>
            <Link href="/products" className={styles.ctaSecondary}>
              See all products
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
