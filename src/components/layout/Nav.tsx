"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/cx";
import Button from "@/components/ui/Button";
import styles from "./Nav.module.css";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);

  /* Blurred background once the page has scrolled (rAF-throttled). */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 10);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* Invert the nav while it overlaps any [data-theme="dark"] zone.
     One IntersectionObserver whose root margin is the nav band only. */
  useEffect(() => {
    let io: IntersectionObserver | null = null;
    const overlapping = new Set<Element>();

    const build = () => {
      io?.disconnect();
      overlapping.clear();
      const navHeight = headerRef.current?.offsetHeight ?? 72;
      const zones = document.querySelectorAll('main [data-theme="dark"]');
      if (!zones.length) {
        setOnDark(false);
        return;
      }
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) overlapping.add(e.target);
            else overlapping.delete(e.target);
          }
          setOnDark(overlapping.size > 0);
        },
        { rootMargin: `0px 0px -${Math.max(window.innerHeight - navHeight, 0)}px 0px`, threshold: 0 },
      );
      zones.forEach((z) => io?.observe(z));
    };

    build();
    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(build, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      io?.disconnect();
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
    };
  }, [pathname]);

  /* Mobile menu: close on navigation / Escape, lock scroll while open. */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const close = useCallback(() => setMenuOpen(false), []);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      ref={headerRef}
      className={cx(
        styles.header,
        scrolled && styles.scrolled,
        (onDark || menuOpen) && styles.onDark,
        menuOpen && styles.open,
      )}
    >
      <span className={styles.pillbg} aria-hidden="true" />

      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" className={styles.brand} onClick={close}>
          <Image src="/images/logo.png" alt="ZENETERA Logo" width={36} height={30} className={styles.mark} priority />
          <Image
            src="/images/logo-name.png"
            alt="ZENETERA"
            width={156}
            height={28}
            className={styles.wordmark}
            priority
          />
        </Link>

        <ul className={styles.links}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={styles.link} aria-current={isActive(href) ? "page" : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button href="/#contact" size="sm" className={styles.cta}>
            Contact
          </Button>

          <button
            type="button"
            className={cx(styles.menuButton, menuOpen && styles.menuButtonOpen)}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={cx(styles.menu, menuOpen && styles.menuOpen)} aria-hidden={!menuOpen}>
        <ul className={styles.menuLinks}>
          {navLinks.map(({ href, label }, i) => (
            <li key={href} className={styles.menuItem} style={{ transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms" }}>
              <Link
                href={href}
                className={styles.menuLink}
                onClick={close}
                tabIndex={menuOpen ? 0 : -1}
                aria-current={isActive(href) ? "page" : undefined}
              >
                <span className={styles.menuIndex}>0{i + 1}</span>
                {label}
              </Link>
            </li>
          ))}
          <li className={styles.menuItem} style={{ transitionDelay: menuOpen ? `${120 + navLinks.length * 60}ms` : "0ms" }}>
            <Button href="/#contact" variant="light" size="lg" className={styles.menuCta} onClick={close} tabIndex={menuOpen ? 0 : -1}>
              Contact
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
