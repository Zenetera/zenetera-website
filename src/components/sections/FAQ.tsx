"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_CATEGORIES, faqs, type FaqCategory, type FaqLink } from "@/content/faqs";
import styles from "./FAQ.module.css";

interface FAQProps {
  /** Categories to expose. Defaults to every category. */
  categories?: readonly FaqCategory[];
  heading?: string;
  subtitle?: string;
  /** The full FAQ page owns the page h1; the homepage block is an h2. */
  headingLevel?: "h1" | "h2";
  /** Renders the "more questions" link through to /faq. */
  showAllLink?: boolean;
  /**
   * Renders every category and answer into the DOM instead of filtering to one
   * category behind an accordion. Answer engines and crawlers read the rendered
   * text, so the /faq page uses this; the homepage keeps the compact accordion.
   */
  expanded?: boolean;
}

const anchorFor = (category: string) =>
  category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function AnswerLink({ link }: { link: FaqLink }) {
  return (
    <Link href={link.href} className={styles.answerLink}>
      {link.label}
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 8H13M13 8L9 4M13 8L9 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export default function FAQ({
  categories = FAQ_CATEGORIES,
  heading,
  subtitle,
  headingLevel = "h2",
  showAllLink = false,
  expanded = false,
}: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const Heading = headingLevel;

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const handleCategoryChange = (cat: FaqCategory) => {
    setActiveCategory(cat);
    setOpenIndex(null);
  };

  const header = (
    <motion.div
      className={styles.header}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className={styles.label}>FAQ</span>
      <Heading className={styles.heading}>
        {heading ?? (
          <>
            Questions?
            <br />
            We have answers.
          </>
        )}
      </Heading>
      <p className={styles.subtitle}>
        {subtitle ??
          "Can't find what you're looking for? Book a call and we'll walk you through everything."}
      </p>

      <nav className={styles.categoryNav}>
        {categories.map((cat) =>
          expanded ? (
            <a key={cat} href={`#${anchorFor(cat)}`} className={styles.categoryBtn}>
              {cat}
            </a>
          ) : (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${activeCategory === cat ? styles.categoryBtnActive : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ),
        )}
      </nav>

      {showAllLink && (
        <Link href="/faq" className={styles.headerCta}>
          See all {faqs.length} questions
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
    </motion.div>
  );

  if (expanded) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {header}

            <div className={styles.list}>
              {categories.map((cat) => (
                <div key={cat} id={anchorFor(cat)} className={styles.group}>
                  <h2 className={styles.groupTitle}>{cat}</h2>
                  <div className={styles.listInner}>
                    {faqs
                      .filter((faq) => faq.category === cat)
                      .map((faq) => (
                        <article key={faq.question} className={styles.itemStatic}>
                          <h3 className={styles.questionStatic}>{faq.question}</h3>
                          <p className={styles.answerStatic}>{faq.answer}</p>
                          {faq.link && <AnswerLink link={faq.link} />}
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {header}

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
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                          {faq.link && <AnswerLink link={faq.link} />}
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
