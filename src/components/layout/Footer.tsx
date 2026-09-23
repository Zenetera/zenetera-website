"use client";

import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import styles from "./Footer.module.css";

const serviceLinks = [
  { href: "/villas", label: "Villas & Short Lets" },
  { href: "/beauty", label: "Beauty & Wellness" },
  { href: "/professional-services", label: "Professional Services" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.instagram.com/zenetera.itc/", label: "Instagram" },
  { href: "https://wa.me/447477911934", label: "WhatsApp" },
];

function LinkColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className={styles.column}>
      <h3 className={styles.columnTitle}>{title}</h3>
      <ul className={styles.list}>
        {links.map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className={styles.footerLink}>
              <span>{label}</span>
              <Arrow size={12} className={styles.linkArrow} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={`${styles.footer} zone-top`} data-theme="dark">
      <div className={styles.container}>
        <div className={styles.grid}>
          <LinkColumn title="Services" links={serviceLinks} />
          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Social" links={socialLinks} />

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Newsletter</h3>
            <p className={styles.newsletterText}>Get tips on growing your business online.</p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.input}
                aria-label="Email for newsletter"
                autoComplete="email"
              />
              <button type="submit" className={styles.submitButton}>
                Subscribe
                <Arrow size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Drawn as SVG so the wordmark spans the footer exactly at every width.
            As HTML text it was sized in vw and ran past the container, which
            clipped the last letter. `textLength` pins the word to the box and
            `lengthAdjust="spacing"` absorbs the difference in the gaps, so the
            letterforms themselves are never distorted. */}
        <div className={styles.giant} aria-hidden="true">
          <svg viewBox="0 0 1000 116" preserveAspectRatio="xMidYMid meet" className={styles.giantMark}>
            <text
              x="0"
              y="116"
              textLength="1000"
              lengthAdjust="spacing"
              vectorEffect="non-scaling-stroke"
              paintOrder="stroke"
            >
              ZENETERA
            </text>
          </svg>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} ZENETERA. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms
            </Link>
            <button type="button" className={styles.legalButton}>
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
