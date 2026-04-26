"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Nav.module.css";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Prices" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = [
    styles.header,
    scrolled ? styles.scrolled : "",
    styles.onLight,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="Zenetera Logo" width={36} height={36} />
          <Image src="/images/logo-name.png" alt="Zenetera" width={200} height={40} className={styles.logoName}/>
        </Link>

        <ul className={styles.links}>
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <Link href={href} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/#contact" className={styles.ctaButton}>
          Contact
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className={styles.mobileLinks}>
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={styles.mobileLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  className={styles.mobileCta}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
