"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

const serviceLinks = [
  { href: "/villas", label: "Villas & Short Lets" },
  { href: "/beauty", label: "Beauty & Wellness" },
  { href: "/professional-services", label: "Professional Services" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.instagram.com/zenetera.itc/", label: "Instagram" },
  { href: "https://wa.me/447477911934", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.list}>
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className={styles.footerLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.list}>
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className={styles.footerLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Social</h4>
            <ul className={styles.list}>
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className={styles.footerLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>
              Get tips on growing your business online.
            </p>
            <form
              className={styles.form}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className={styles.input}
                aria-label="Email for newsletter"
              />
              <button type="submit" className={styles.submitButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} ZENETERA. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms
            </Link>
            <button className={styles.legalButton}>Cookie settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
