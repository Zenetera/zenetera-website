"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Industries.module.css";

const tabs = [
  {
    id: "professional",
    label: "Professional services",
    title: "Grow your professional services firm",
    description:
      "Win more clients with websites built for consultancies, agencies, and financial advisors. Automated follow-ups ensure no lead slips through.",
    image: "/images/business-meeting.jpg",
  },
  {
    id: "freelancers",
    label: "Freelancers",
    title: "Get booked out as a freelancer",
    description:
      "A professional website and automated booking system so you spend less time chasing leads and more time doing the work you love.",
    image: "/images/entrepeuner-laptop.png",
  },
  {
    id: "startups",
    label: "Startups",
    title: "Launch faster and grow smarter",
    description:
      "Get online quickly with conversion-focused landing pages, lead capture chatbots, and automated onboarding flows.",
    image: "/images/small-team-happy.jpg",
  },
  {
    id: "retail",
    label: "Retail & Food",
    title: "Bring more customers through your door",
    description:
      "Local SEO, Google Business optimization, and automated reminders that keep your tables full and shelves moving.",
    image: "/images/business-owner-storefront.jpg",
  },
  {
    id: "health",
    label: "Health & Wellness",
    title: "Fill your appointment book",
    description:
      "Booking automation, no-show reminders, and a calming online presence that builds trust with new patients and clients.",
    image: "/images/calender-phone.jpg",
  },
  {
    id: "other",
    label: "Other",
    title: "Custom solutions for your industry",
    description:
      "Whatever your business does, we build websites and systems that bring in more customers and save you time.",
    image: "/images/office.jpg",
  },
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <section id="industries" className={styles.section}>
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
            We work with businesses of all kinds — from freelancers and startups
            to agencies and service providers across the UK.
          </p>
        </motion.div>

        <div className={styles.tabBar}>
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${i === activeTab ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className={styles.panel}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.panelContent}>
              <h3 className={styles.panelTitle}>{active.title}</h3>
              <p className={styles.panelDescription}>{active.description}</p>
              <div className={styles.panelActions}>
                <Link href="/contact" className={styles.panelCta}>
                  Let&apos;s talk
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link href="/services" className={styles.panelLink}>
                  View services
                </Link>
              </div>
            </div>
            <div className={styles.panelImageWrapper}>
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.panelImage}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
