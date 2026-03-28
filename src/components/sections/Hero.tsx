"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";
import DashboardIllustration from "./DashboardIllustration";

interface HeroProps {
  heading?: string;
  subheading?: string;
}

export default function Hero({ heading, subheading }: HeroProps) {
  if (heading) {
    return (
      <motion.section
        className={styles.pageHero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.pageHeading}>{heading}</h1>
        {subheading && <p className={styles.pageSubheading}>{subheading}</p>}
      </motion.section>
    );
  }

  return <HomepageHero />;
}

function HomepageHero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const dotGridY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Background layers */}
      <motion.div className={styles.dotGrid} style={{ y: dotGridY }} />
      <div className={styles.grain} />

      <div className={styles.split}>
        {/* ── TOP: Copy + CTA ──────────────────── */}
        <motion.div
          className={styles.left}
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We build the{" "}
            <span className={styles.headingAccent}>
              digital infrastructure
            </span>{" "}
            your business runs on
          </motion.h1>

          <motion.p
            className={styles.subheading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Design. Develop. Automate. Grow.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Link href="/#contact" className={styles.ctaPrimary}>
              Book a free audit
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={styles.ctaArrow}
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/#how-it-works" className={styles.ctaSecondary}>
              See how it works
            </Link>
          </motion.div>
        </motion.div>

        {/* ── BOTTOM: Dashboard Illustration ───────── */}
        <motion.div
          className={styles.right}
          style={{ y: dashboardY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <DashboardIllustration />
        </motion.div>
      </div>
    </section>
  );
}
