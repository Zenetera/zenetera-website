"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Process.module.css";

const steps = [
  {
    label: "Discovery & Design",
    title: "Discovery,\nScoping & Design",
    description:
      "We kick things off with strategy and style. Through a digital questionnaire, discovery workshop and visual moodboarding, we align creative direction with your goals. Then we design high-fidelity, interactive prototypes in Figma so you can experience the look, feel and flow before we build.",
    deliverables: [
      "Digital questionnaire and kick-off workshop",
      "UX strategy and moodboards agreed",
      "Homepage concept designed in Figma, with interactive prototyping",
      "Two rounds of revisions before design system rollout",
      "Template designs created and reviewed in Figma",
    ],
  },
  {
    label: "Develop & Test",
    title: "Development,\nEngineering & Testing",
    description:
      "Our specialist developers bring your approved designs to life with clean, scalable code. We build responsive and high-performance pages across all browsers and devices which are rigorously tested at every stage.",
    deliverables: [
      "Pixel-perfect build from approved Figma designs",
      "Responsive development across all breakpoints",
      "Cross-browser and device testing",
      "Performance optimisation and accessibility checks",
      "Staging site ready for client review",
    ],
  },
  {
    label: "Live Demo",
    title: "Live Demo\n& Review",
    description:
      "We walk you through the fully built site on a staging environment. You get hands-on time to explore, flag changes and confirm everything works exactly as expected before we go live.",
    deliverables: [
      "Full walkthrough on staging environment",
      "Interactive review session with your team",
      "Feedback captured and prioritised",
      "Final round of refinements applied",
      "Sign-off confirmation before launch prep",
    ],
  },
  {
    label: "Migration & Checks",
    title: "Migration,\nContent & Checks",
    description:
      "We handle the migration of your existing content, set up redirects, and run a comprehensive checklist of pre-launch checks to ensure nothing is missed when we switch over.",
    deliverables: [
      "Content migration from existing site",
      "301 redirects and URL mapping",
      "SEO meta tags and structured data verified",
      "Forms, integrations, and analytics tested",
      "Pre-launch checklist completed and signed off",
    ],
  },
  {
    label: "Launch & Support",
    title: "Launch\n& Ongoing Support",
    description:
      "We deploy your site to production and provide ongoing support to keep everything running smoothly. You're never left on your own after launch.",
    deliverables: [
      "Production deployment and DNS configuration",
      "Post-launch monitoring and performance checks",
      "Training session on CMS and content updates",
      "Ongoing maintenance and support plan",
      "Priority access for future updates and enhancements",
    ],
  },
];

const deliverableIcons = [
  // Clipboard/questionnaire
  <svg key="icon-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="4" rx="1" /><path d="M9 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" /><path d="M9 14l2 2 4-4" /></svg>,
  // Monitor/UX
  <svg key="icon-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  // Pen/design
  <svg key="icon-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
  // Users/revisions
  <svg key="icon-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  // Layout/template
  <svg key="icon-4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>,
];

export default function Process() {
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    if (index >= 0 && index < steps.length) setActive(index);
  };

  const current = steps[active];

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Our process</span>
          <h2 className={styles.heading}>Your Website journey</h2>
          <p className={styles.subtitle}>
            A structured, seamless process designed for impact.
          </p>
        </motion.div>

        {/* Step Indicator */}
        <motion.div
          className={styles.stepIndicator}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {steps.map((step, i) => (
            <div key={i} className={styles.stepIndicatorItem}>
              <button
                className={`${styles.stepBtn} ${i === active ? styles.stepBtnActive : ""}`}
                onClick={() => setActive(i)}
              >
                {step.label}
              </button>
              {i < steps.length - 1 && (
                <span className={styles.stepDots}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Detail Card */}
        <div className={styles.cardWrapper}>
          {/* Nav arrows */}
          <button
            className={`${styles.navArrow} ${styles.navArrowLeft}`}
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous step"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className={`${styles.navArrow} ${styles.navArrowRight}`}
            onClick={() => goTo(active + 1)}
            disabled={active === steps.length - 1}
            aria-label="Next step"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.card}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.cardLeft}>
                <h3 className={styles.cardTitle}>{current.title}</h3>
                <p className={styles.cardDescription}>{current.description}</p>
              </div>
              <div className={styles.cardRight}>
                {current.deliverables.map((item, i) => (
                  <div key={i} className={styles.deliverable}>
                    <span className={styles.deliverableIcon}>
                      {deliverableIcons[i % deliverableIcons.length]}
                    </span>
                    <span className={styles.deliverableText}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
