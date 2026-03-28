"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./WhatYouGain.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const benefits = [
  {
    number: "01",
    title: "More bookings, fewer no-shows",
    description:
      "Automated reminders cut no-shows and keep your schedule full every single week.",
    image: "/images/calender-phone.jpg",
    href: "/services#automation",
  },
  {
    number: "02",
    title: "24/7 customer responses",
    description:
      "Never miss a message from Instagram, WhatsApp, or your website again.",
    image: "/images/chabot.jpg",
    href: "/services#chatbots",
  },
  {
    number: "03",
    title: "Found on Google",
    description:
      "Get discovered by local customers searching for exactly your services.",
    image: "/images/google-search.jpg",
    href: "/services#google",
  },
  {
    number: "04",
    title: "Hours saved weekly",
    description:
      "Automation handles the busywork so you can focus on serving your clients.",
    image: "/images/automation.png",
    href: "/services#automation",
  },
];

export default function WhatYouGain() {
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
          <span className={styles.label}>Results</span>
          <h2 className={styles.heading}>
            Real outcomes,
            <br />
            not empty promises
          </h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {benefits.map((item) => (
            <motion.div
              key={item.number}
              className={styles.card}
              variants={fadeIn}
            >
              <div className={styles.cardImageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.cardImage}
                />
                <div className={styles.cardImageOverlay} />
                <span className={styles.cardNumber}>{item.number}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <Link href={item.href} className={styles.cardLink}>
                  Learn more
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
