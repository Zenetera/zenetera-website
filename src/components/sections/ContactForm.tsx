"use client";

import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
