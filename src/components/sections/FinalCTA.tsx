"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./FinalCTA.module.css";

const SERVICES = [
  "Web Design",
  "E-commerce",
  "Branding",
  "Development",
  "Automation",
  "AI",
  "Chatbots",
  "Other",
] as const;

export default function FinalCTA() {
  const [state, handleSubmit] = useForm("xdawqgep");

  if (state.succeeded) {
    return (
      <section className={styles.section} id="contact">
        <div className={styles.container}>
          <motion.div
            className={styles.successCard}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.successIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17L4 12"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className={styles.successHeading}>Message sent!</h3>
            <p className={styles.successText}>
              Thanks for reaching out. We&apos;ll get back to you within one
              working day.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Left — heading panel */}
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h2 className={styles.heading}>
                Let&apos;s work
                <br />
                together
              </h2>
            </div>
          </div>

          {/* Right — form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name"
                  required
                  className={styles.input}
                />
                <ValidationError prefix="First name" field="firstName" errors={state.errors} className={styles.error} />
              </div>
              <div className={styles.field}>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your last name"
                  required
                  className={styles.input}
                />
                <ValidationError prefix="Last name" field="lastName" errors={state.errors} className={styles.error} />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className={styles.input}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
              </div>
              <div className={styles.field}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  required
                  className={styles.input}
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className={styles.error} />
              </div>
            </div>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                Which main service are you interested in?
              </legend>
              <div className={styles.options}>
                {SERVICES.map((service) => (
                  <label key={service} className={styles.option}>
                    <input
                      type="radio"
                      name="service"
                      value={service}
                      required
                      className={styles.radio}
                    />
                    <span className={styles.optionLabel}>{service}</span>
                  </label>
                ))}
              </div>
              <ValidationError prefix="Service" field="service" errors={state.errors} className={styles.error} />
            </fieldset>

            <div className={styles.field}>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project (optional)"
                rows={4}
                className={styles.textarea}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.error} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className={styles.submit}
            >
              {state.submitting ? "Sending..." : "Submit"}
              {!state.submitting && (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
