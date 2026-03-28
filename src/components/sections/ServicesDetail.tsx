"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  WebDevIllustration,
  ECommerceIllustration,
  ChatbotDetailIllustration,
  BookingIllustration,
  BrandingIllustration,
  AIAutomationIllustration,
  SEOIllustration,
} from "@/components/illustrations/ServiceDetailIllustrations";
import styles from "./ServicesDetail.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    id: "web-development",
    label: "Web Development",
    title: "Custom websites built to convert",
    description:
      "We design and develop fast, modern websites tailored to your business. Whether it's a landing page, a multi-page site, or a full web application, every pixel is built to turn visitors into customers.",
    features: [
      "Responsive design that looks great on every device",
      "Fast load times optimized for performance",
      "SEO-friendly structure from day one",
      "Custom functionality tailored to your workflow",
      "Ongoing support and maintenance plans",
    ],
    illustration: <WebDevIllustration />,
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    title: "Online stores that drive sales",
    description:
      "Launch a professional online store that makes buying effortless. We build e-commerce experiences with seamless checkout flows, inventory management, and payment integration, so you can sell 24/7.",
    features: [
      "Secure payment gateways (Stripe, PayPal, etc.)",
      "Product catalog with filters and search",
      "Automated order tracking and notifications",
      "Mobile-first shopping experience",
      "Analytics dashboard to track sales performance",
    ],
    illustration: <ECommerceIllustration />,
  },
  {
    id: "chatbots",
    label: "Chatbots",
    title: "AI chatbots that capture leads around the clock",
    description:
      "From simple FAQ bots to advanced AI-powered assistants, we build chatbots that handle customer questions, book appointments, and capture leads on your website, WhatsApp, and Instagram while you sleep.",
    features: [
      "Simple rule-based bots for common questions",
      "Advanced AI chatbots with natural conversation",
      "Multi-platform: website, WhatsApp, Instagram DMs",
      "Lead capture with automatic CRM integration",
      "Handoff to human agents when needed",
    ],
    illustration: <ChatbotDetailIllustration />,
  },
  {
    id: "booking",
    label: "Booking Automations",
    title: "Never miss an appointment again",
    description:
      "Automated booking systems that let your customers schedule appointments online, receive reminders, and reduce no-shows by up to 40%. Integrated with your calendar and workflow.",
    features: [
      "Online booking with real-time availability",
      "Automated email and SMS reminders",
      "Calendar sync (Google, Outlook, Apple)",
      "Custom booking forms for your services",
      "No-show reduction with confirmation workflows",
    ],
    illustration: <BookingIllustration />,
  },
  {
    id: "branding",
    label: "Branding / Rebranding",
    title: "A brand identity that stands out",
    description:
      "Whether you're starting fresh or refreshing an existing brand, we craft cohesive visual identities: logos, color systems, typography, and brand guidelines that make your business instantly recognizable.",
    features: [
      "Logo design and brand mark creation",
      "Color palette and typography system",
      "Brand guidelines document",
      "Business card and stationery design",
      "Social media brand kit",
    ],
    illustration: <BrandingIllustration />,
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    title: "Automate repetitive tasks with AI",
    description:
      "Free up your time by automating the busywork. We connect your tools and build intelligent workflows: from auto-responding to emails, to generating reports, to routing leads to the right person.",
    features: [
      "Email and form response automation",
      "Lead scoring and routing workflows",
      "Report generation and data syncing",
      "Custom integrations between your tools",
      "AI-powered content and document processing",
    ],
    illustration: <AIAutomationIllustration />,
  },
  {
    id: "seo",
    label: "SEO",
    title: "Get found first on Google",
    description:
      "Dominate local and organic search results so customers find you before your competitors. We optimize your online presence from technical SEO to content strategy and Google Business Profile.",
    features: [
      "Technical SEO audit and optimization",
      "Google Business Profile setup and management",
      "Local SEO for map pack rankings",
      "Keyword research and content strategy",
      "Monthly performance reporting",
    ],
    illustration: <SEOIllustration />,
  },
];

export default function ServicesDetail() {
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
          <span className={styles.heroLabel}>Our Services</span>
          <h1 className={styles.heroHeading}>
            Everything you need to <span className={styles.gradientText}>grow</span>
          </h1>
          <p className={styles.heroSubtitle}>
            From websites to AI automation, we build the systems that help your
            business get more customers and run more smoothly.
          </p>
        </motion.div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const bgClasses = [styles.sectionLight, styles.sectionAlt, styles.sectionDark];
        const sectionClass = bgClasses[index % 3];

        return (
          <section
            key={service.id}
            id={service.id}
            className={sectionClass}
          >
          <motion.div
            className={`${styles.serviceContainer} ${index % 2 !== 0 ? styles.reversed : ""}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div className={styles.illustrationWrap} variants={fadeIn}>
              {service.illustration}
            </motion.div>

            <motion.div className={styles.content} variants={fadeIn}>
              <span className={styles.serviceLabel}>{service.label}</span>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>
                {service.description}
              </p>
              <ul className={styles.featureList}>
                {service.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <span className={styles.featureIcon}>✓</span>
                    {feature}
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
          <h2 className={styles.ctaHeading}>Ready to get started?</h2>
          <p className={styles.ctaText}>
            Let&apos;s talk about which services are right for your business.
            No pressure, no jargon, just a conversation.
          </p>
          <Link href="/pricing" className={styles.ctaButton}>
            See Pricing →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
