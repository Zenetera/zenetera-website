"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  WebsiteIllustration,
  AutomationIllustration,
  ChatbotIllustration,
  GoogleIllustration,
} from "@/components/illustrations/ServiceIllustrations";
import styles from "./Services.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    category: "Websites",
    title: "Website development that converts",
    description:
      "Landing pages and business websites designed to turn visitors into paying customers.",
    illustration: <WebsiteIllustration />,
    href: "/services#web-development",
  },
  {
    category: "Automation",
    title: "Booking automation & reminders",
    description:
      "Automated appointment reminders and booking systems that reduce no-shows by 40%.",
    illustration: <AutomationIllustration />,
    href: "/services#booking",
  },
  {
    category: "Chatbots",
    title: "AI chatbots & messaging",
    description:
      "Chatbots for websites, WhatsApp, and Instagram that capture leads automatically 24/7.",
    illustration: <ChatbotIllustration />,
    href: "/services#chatbots",
  },
  {
    category: "Google",
    title: "Google business optimisation",
    description:
      "Dominate local search results and Google Maps so customers find you first.",
    illustration: <GoogleIllustration />,
    href: "/services#seo",
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Services</span>
          <h2 className={styles.heading}>Everything you need to grow</h2>
          <p className={styles.subtitle}>
            From first impression to repeat customer, we build the systems that
            make it happen.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className={styles.card}
              variants={fadeIn}
            >
              <Link href={service.href} className={styles.cardInner}>
                <div className={styles.cardIllustration}>
                  {service.illustration}
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardCategory}>
                    {service.category}
                  </span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
