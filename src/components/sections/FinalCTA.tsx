"use client";

import { useForm, ValidationError } from "@formspree/react";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import WordRise from "@/components/ui/WordRise";
import Reveal from "@/motion/Reveal";
import styles from "./FinalCTA.module.css";

const SERVICES = [
  "Web Design",
  "E-commerce",
  "Branding",
  "Development",
  "Automation",
  "AI",
  "Chatbots",
  /* The referral banner points here, so the offer it advertises needs a
     matching option to land on. */
  "Referral",
  "Other",
] as const;

interface FinalCTAProps {
  /** Section index shown in the eyebrow pill. */
  index?: string;
}

export default function FinalCTA({ index = "06" }: FinalCTAProps) {
  const [state, handleSubmit] = useForm("xdawqgep");

  if (state.succeeded) {
    return (
      <section className={`${styles.section} zone-top`} id="contact" data-theme="dark">
        <div className="pad wide">
          <div className={styles.successCard}>
            <div className={styles.successIcon} aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className={styles.successHeading}>Message sent!</h3>
            <p className={styles.successText}>Thanks for reaching out. We&apos;ll get back to you within one working day.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.section} zone-top`} id="contact" data-theme="dark">
      <div className="pad wide">
        <Reveal>
          <Eyebrow index={index}>Contact</Eyebrow>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.left}>
            <WordRise as="h2" className={styles.heading} text="Let's work together" flair="together" animate={false} />
          </Reveal>

          <Reveal delay={1}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="firstName" className="sr-only">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    required
                    autoComplete="given-name"
                    className={styles.input}
                  />
                  <ValidationError prefix="First name" field="firstName" errors={state.errors} className={styles.error} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName" className="sr-only">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                    required
                    autoComplete="family-name"
                    className={styles.input}
                  />
                  <ValidationError prefix="Last name" field="lastName" errors={state.errors} className={styles.error} />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    required
                    autoComplete="email"
                    className={styles.input}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone" className="sr-only">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    required
                    autoComplete="tel"
                    className={styles.input}
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className={styles.error} />
                </div>
              </div>

              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Which area are you interested in?</legend>
                <div className={styles.options}>
                  {SERVICES.map((service) => (
                    <label key={service} className={styles.option}>
                      <input type="radio" name="service" value={service} required className={styles.radio} />
                      <span className={styles.optionLabel}>
                        <i aria-hidden="true" />
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
                <ValidationError prefix="Service" field="service" errors={state.errors} className={styles.error} />
              </fieldset>

              <div className={styles.field}>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project (optional)"
                  rows={4}
                  className={styles.textarea}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.error} />
              </div>

              <div className={styles.submitRow}>
                <Button type="submit" variant="light" size="lg" magnetic disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
