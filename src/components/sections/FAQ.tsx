"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

const categories = [
  "Pricing & Plans",
  "AI & Automation",
  "Development Process",
  "Support & Maintenance",
  "Ownership & Security",
] as const;

type Category = (typeof categories)[number];

interface FaqItem {
  question: string;
  answer: string;
  category: Category;
}

const faqs: FaqItem[] = [
  // ── Pricing & Plans ──────────────────────────────────
  {
    question: "How much does it cost?",
    answer:
      "Every business is different, so we tailor our pricing to your needs. The final price is calculated based on the number of pages, features and integrations your project requires. Book a free audit and we'll give you a transparent quote with no hidden fees.",
    category: "Pricing & Plans",
  },
  {
    question: "How is the final price calculated?",
    answer:
      "We use a step-based pricing model. Your quote is built from the number of pages, the features you need (booking systems, contact forms, dashboards) and any third-party integrations. This keeps pricing transparent and tailored to your exact requirements.",
    category: "Pricing & Plans",
  },
  {
    question: "Why is there a monthly care cost?",
    answer:
      "Websites and apps require hosting, security updates, monitoring, backups and technical support. Monthly care ensures your system stays fast, secure and online so you can focus on running your business, not managing servers.",
    category: "Pricing & Plans",
  },
  {
    question: "Can I host the website myself?",
    answer:
      "Yes, but most clients choose Zenetera hosting to avoid technical risks, downtime and maintenance stress. We handle everything so you don't have to worry about server configuration, SSL certificates or security patches.",
    category: "Pricing & Plans",
  },
  {
    question: "What happens if I stop monthly care?",
    answer:
      "The website will still exist, but security updates, monitoring and support will stop. This may increase risk of downtime, bugs or vulnerabilities. You can always resume care at any time.",
    category: "Pricing & Plans",
  },
  {
    question: "Do you offer payment plans for builds?",
    answer:
      "Yes. We understand that larger projects require investment, so we offer flexible payment plans to spread the cost across milestones. Get in touch and we'll find an arrangement that works for you.",
    category: "Pricing & Plans",
  },

  // ── AI & Automation ──────────────────────────────────
  {
    question: "Can you integrate AI into my existing website?",
    answer:
      "Absolutely. We can add AI-powered features to your current site from intelligent chatbots and content generation to automated workflows without needing a full rebuild.",
    category: "AI & Automation",
  },
  {
    question: "What kind of business processes can be automated?",
    answer:
      "Almost any repetitive workflow. Common examples include lead qualification, appointment booking, customer support, reporting, CRM syncing and data workflows. If you're doing it manually and repeatedly, there's likely a smarter way.",
    category: "AI & Automation",
  },
  {
    question: "Will the AI chatbot understand my business?",
    answer:
      "Yes. We train the chatbot on your specific business information, services and tone of voice. After launch, we continuously optimise and update it based on real conversations so it gets smarter over time.",
    category: "AI & Automation",
  },
  {
    question: "Do I pay ongoing AI usage fees?",
    answer:
      "AI features involve hosting and API usage costs, which we manage for you. These are included transparently in your monthly care plan so there are no surprise bills. We also optimise usage to keep costs efficient.",
    category: "AI & Automation",
  },
  {
    question: "Can you build custom dashboards or internal tools?",
    answer:
      "Yes, CRM panels, admin dashboards, analytics systems, client portals and more. We build tools tailored to how your team actually works, not generic off-the-shelf solutions.",
    category: "AI & Automation",
  },
  {
    question: "Can the system scale if my business grows?",
    answer:
      "Everything we build is designed to scale. Whether you're adding users, features or integrations, the architecture supports growth without starting from scratch.",
    category: "AI & Automation",
  },
  {
    question: "Do you provide API integrations?",
    answer:
      "Yes. We integrate with payment providers, CRMs, analytics platforms, third-party software and custom APIs. If the service has an API, we can connect it.",
    category: "AI & Automation",
  },

  // ── Development Process ──────────────────────────────
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects are completed in 5 to 10 business days. We work fast without compromising quality, and you'll be involved at every step so there are no surprises.",
    category: "Development Process",
  },
  {
    question: "What is your typical project process?",
    answer:
      "Every project follows a clear structure: discovery call, scope and estimate, design, development, testing, launch, then ongoing care. You'll know exactly where things stand at every stage.",
    category: "Development Process",
  },
  {
    question: "Do I need to provide content and images?",
    answer:
      "We can work with what you have. If you need help with copywriting or photography, we'll guide you through the process or recommend trusted partners.",
    category: "Development Process",
  },
  {
    question: "Can you redesign my existing website instead of building new?",
    answer:
      "Yes. We can redesign and modernise your current site, improving performance, visuals and user experience while preserving your existing content and SEO rankings.",
    category: "Development Process",
  },
  {
    question: "Do you help with domain purchase and setup?",
    answer:
      "Yes. We handle domain registration, DNS configuration and email setup so you don't have to deal with the technical side. Everything is set up correctly from day one.",
    category: "Development Process",
  },
  {
    question: "Will my website be mobile optimised?",
    answer:
      "Every site we build is fully responsive and tested across devices. Mobile performance is not an afterthought, it's built into the design from the start.",
    category: "Development Process",
  },
  {
    question: "Can you help with branding or logo design?",
    answer:
      "Yes. We offer branding services including logo design, colour palettes and visual identity. A strong brand makes your website more effective and your business more memorable.",
    category: "Development Process",
  },

  // ── Support & Maintenance ────────────────────────────
  {
    question: "Can I update the website myself after launch?",
    answer:
      "Absolutely. We build on platforms that make updates easy, and we provide training so you feel confident managing your own content. We're also here if you need ongoing support.",
    category: "Support & Maintenance",
  },
  {
    question: "Do you provide training after launch?",
    answer:
      "Yes. Every project includes a walkthrough so you and your team know how to manage content, make updates and use any tools we've built. We're also available for follow-up questions.",
    category: "Support & Maintenance",
  },
  {
    question: "How quickly do you respond to issues?",
    answer:
      "Response times depend on your care plan. Essential plans include standard support, Growth plans offer priority response, and Pro plans include dedicated support with the fastest turnaround.",
    category: "Support & Maintenance",
  },
  {
    question: "What does the free audit include?",
    answer:
      "We review your current website, Google presence, booking process, and customer communication. You'll get a clear report showing where you're losing leads and how to fix it.",
    category: "Support & Maintenance",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes. SEO is included in our service packages. We optimise your site structure, metadata, performance and content for search engines and offer ongoing SEO support as an add-on.",
    category: "Support & Maintenance",
  },
  {
    question: "Can you track website performance and user behaviour?",
    answer:
      "Yes. We set up analytics and reporting so you can see how visitors interact with your site. We also offer reporting add-ons for deeper insights and regular performance reviews.",
    category: "Support & Maintenance",
  },

  // ── Ownership & Security ─────────────────────────────
  {
    question: "Who owns the website after it is built?",
    answer:
      "You do. Once the project is complete and paid for, you own the website, the code and all the content. It's your asset.",
    category: "Ownership & Security",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We implement SSL encryption, automated backups, server monitoring and security best practices across every project. Your data and your clients' data are protected at all times.",
    category: "Ownership & Security",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We're happy to sign non-disclosure agreements before any project begins. Confidentiality is standard practice, especially for B2B and enterprise clients.",
    category: "Ownership & Security",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients across different countries and time zones. Our process is fully remote-friendly and built for clear communication regardless of location.",
    category: "Ownership & Security",
  },
  {
    question: "What makes Zenetera different from other agencies?",
    answer:
      "We don't just design websites. We build intelligent digital systems combining AI, automation, infrastructure and long-term technical care so your business doesn't just look good online, it operates smarter.",
    category: "Ownership & Security",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>(
    categories[0]
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setOpenIndex(null);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>FAQ</span>
            <h2 className={styles.heading}>
              Questions?
              <br />
              We have answers.
            </h2>
            <p className={styles.subtitle}>
              Can&apos;t find what you&apos;re looking for? Book a call and
              we&apos;ll walk you through everything.
            </p>

            <nav className={styles.categoryNav}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.categoryBtn} ${activeCategory === cat ? styles.categoryBtnActive : ""}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </motion.div>

          <div className={styles.list}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className={styles.listInner}
              >
                {filteredFaqs.map((faq, i) => (
                  <motion.div
                    key={`${activeCategory}-${i}`}
                    className={`${styles.item} ${openIndex === i ? styles.itemOpen : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <button
                      className={styles.trigger}
                      onClick={() => toggle(i)}
                      aria-expanded={openIndex === i}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <span className={styles.question}>{faq.question}</span>
                      <div
                        className={`${styles.iconWrapper} ${openIndex === i ? styles.iconOpen : ""}`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8 3V13M3 8H13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </button>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          id={`faq-answer-${i}`}
                          role="region"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.answerWrapper}
                        >
                          <p className={styles.answer}>{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
