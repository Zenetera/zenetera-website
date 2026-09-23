"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ_CATEGORIES, faqs, type FaqCategory, type FaqLink } from "@/content/faqs";
import Arrow from "@/components/ui/Arrow";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import { cx } from "@/lib/cx";
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
  /** Section index shown in the eyebrow pill. */
  index?: string;
}

const countFor = (category: FaqCategory) => faqs.filter((faq) => faq.category === category).length;

const anchorFor = (category: string) =>
  category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function AnswerLink({ link, tabIndex }: { link: FaqLink; tabIndex?: number }) {
  return (
    <Link href={link.href} className={styles.answerLink} tabIndex={tabIndex}>
      {link.label}
      <Arrow size={14} />
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
  index = "05",
}: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const Heading = headingLevel;
  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const handleCategoryChange = (cat: FaqCategory) => {
    setActiveCategory(cat);
    setOpenIndex(null);
  };

  const header = (
    <Reveal className={styles.header}>
      <Eyebrow index={index}>FAQ</Eyebrow>
      <Heading className={cx(styles.heading, headingLevel === "h1" && styles.headingLg)}>
        {heading ?? (
          <>
            Questions?
            <br />
            We have answers.
          </>
        )}
      </Heading>
      <p className={styles.subtitle}>
        {subtitle ?? "Can't find what you're looking for? Book a call and we'll walk you through everything."}
      </p>

      <nav className={styles.categoryNav} aria-label="FAQ categories">
        {categories.map((cat, i) => {
          const body = (
            <>
              <span className={styles.catIndex} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.catLabel}>{cat}</span>
              <span className={styles.catCount}>
                {countFor(cat)}
                <span className="sr-only"> questions</span>
              </span>
            </>
          );

          return expanded ? (
            <a key={cat} href={`#${anchorFor(cat)}`} className={styles.catItem}>
              {body}
            </a>
          ) : (
            <button
              key={cat}
              type="button"
              className={cx(styles.catItem, activeCategory === cat && styles.catItemActive)}
              onClick={() => handleCategoryChange(cat)}
              aria-pressed={activeCategory === cat}
            >
              {body}
            </button>
          );
        })}
      </nav>

      {/* On the accordion layout this copy is repeated under the questions for
          narrow screens, where the header is no longer beside them. */}
      {showAllLink && (
        <Button
          href="/faq"
          variant="ghost"
          size="sm"
          className={cx(styles.headerCta, !expanded && styles.headerCtaWide)}
        >
          See all {faqs.length} questions
        </Button>
      )}
    </Reveal>
  );

  if (expanded) {
    return (
      <section className={`pad ${styles.section}`}>
        <div className={`wide ${styles.layout}`}>
          {header}

          <div className={styles.list}>
            {categories.map((cat, gi) => (
              <Reveal key={cat} id={anchorFor(cat)} className={styles.group}>
                <h2 className={styles.groupTitle}>
                  <span className={styles.groupIndex}>{String(gi + 1).padStart(2, "0")}</span>
                  {cat}
                </h2>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`pad ${styles.section}`}>
      <div className={`wide ${styles.layout}`}>
        {header}

        <Reveal delay={1} className={styles.list}>
          <div key={activeCategory} className={styles.listInner}>
            {filteredFaqs.map((faq, i) => {
              const open = openIndex === i;
              const id = `faq-answer-${anchorFor(activeCategory)}-${i}`;
              return (
                <div key={faq.question} className={cx(styles.item, open && styles.itemOpen)} style={{ animationDelay: `${i * 45}ms` }}>
                  <button
                    type="button"
                    className={styles.trigger}
                    onClick={() => toggle(i)}
                    aria-expanded={open}
                    aria-controls={id}
                  >
                    <span id={`${id}-q`} className={styles.question}>
                      {faq.question}
                    </span>
                    <span className={cx(styles.pip, open && styles.pipOpen)} aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  {/* Collapsed answers are visibility:hidden, so they leave the tab order and the accessibility tree. */}
                  <div id={id} role="region" aria-labelledby={`${id}-q`} className={styles.answerWrap}>
                    <div className={styles.answerInner}>
                      <p className={styles.answer}>{faq.answer}</p>
                      {faq.link && <AnswerLink link={faq.link} tabIndex={open ? 0 : -1} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {showAllLink && (
          <div className={styles.listCta}>
            <Button href="/faq" variant="ghost" size="sm">
              See all {faqs.length} questions
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
