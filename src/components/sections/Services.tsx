"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  WebsiteIllustration,
  AutomationIllustration,
  ChatbotIllustration,
  GoogleIllustration,
} from "@/components/illustrations/ServiceIllustrations";
import Arrow from "@/components/ui/Arrow";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/motion/Reveal";
import { isFinePointer, prefersReducedMotion } from "@/motion/useReducedMotion";
import { cx } from "@/lib/cx";
import styles from "./Services.module.css";

interface Service {
  category: string;
  title: string;
  description: string;
  illustration: ReactNode;
  href: string;
}

const services: Service[] = [
  {
    category: "Websites",
    title: "Website development that converts",
    description: "Landing pages and business websites designed to turn visitors into paying customers.",
    illustration: <WebsiteIllustration />,
    href: "/services#web-development",
  },
  {
    category: "Automation",
    title: "Booking automation & reminders",
    description: "Automated appointment reminders and booking systems that reduce no-shows by 40%.",
    illustration: <AutomationIllustration />,
    href: "/services#booking",
  },
  {
    category: "Chatbots",
    title: "AI chatbots & messaging",
    description: "Chatbots for websites, WhatsApp, and Instagram that capture leads automatically 24/7.",
    illustration: <ChatbotIllustration />,
    href: "/services#chatbots",
  },
  {
    category: "Google",
    title: "Google business optimisation",
    description: "Dominate local search results and Google Maps so customers find you first.",
    illustration: <GoogleIllustration />,
    href: "/services#seo",
  },
];

const PREVIEW_W = 300;
const PREVIEW_H = 250;

export default function Services() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  /* Cursor-following preview: desktop, fine pointer, motion allowed. */
  useEffect(() => {
    const check = () => setEnabled(!prefersReducedMotion() && isFinePointer() && window.innerWidth > 1100);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const preview = previewRef.current;
    if (!enabled || !wrap || !preview) return;

    let tx = 0;
    let ty = 0;
    let cx0 = 0;
    let cy0 = 0;
    let raf = 0;
    let running = false;

    const loop = () => {
      cx0 += (tx - cx0) * 0.14;
      cy0 += (ty - cy0) * 0.14;
      preview.style.transform = `translate3d(${cx0.toFixed(1)}px, ${cy0.toFixed(1)}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      tx = e.clientX - r.left - PREVIEW_W / 2;
      ty = e.clientY - r.top - PREVIEW_H / 2 + 20;
      if (!running) {
        running = true;
        cx0 = tx;
        cy0 = ty;
        loop();
      }
    };
    const onLeave = () => {
      setVisible(false);
      running = false;
      cancelAnimationFrame(raf);
    };

    wrap.addEventListener("mousemove", onMove, { passive: true });
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  return (
    <section className={`pad ${styles.section}`} id="services">
      <div className="wide">
        <Reveal>
          <Eyebrow index="02">Services</Eyebrow>
        </Reveal>

        <div className={styles.head}>
          <Reveal as="h2" className={styles.heading}>
            Everything you need to grow
          </Reveal>
          <Reveal as="p" delay={1} className={styles.lede}>
            From first impression to repeat customer, we build the systems that make it happen.
          </Reveal>
        </div>

        <div className={styles.rows} ref={wrapRef}>
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              className={styles.row}
              onMouseEnter={() => {
                setActive(i);
                if (enabled) setVisible(true);
              }}
              onFocus={() => setActive(i)}
            >
              <Link href={service.href} className={styles.rowLink}>
                <span className={styles.num}>0{i + 1}</span>
                <span className={styles.text}>
                  <span className={styles.category}>{service.category}</span>
                  <h3 className={styles.title}>{service.title}</h3>
                </span>
                <p className={styles.desc}>{service.description}</p>
                <span className={styles.pip}>
                  <Arrow size={18} />
                </span>
              </Link>
              <div className={styles.inlineArt} aria-hidden="true">
                {service.illustration}
              </div>
            </Reveal>
          ))}

          {enabled && (
            <div ref={previewRef} className={cx(styles.preview, visible && styles.previewShow)} aria-hidden="true">
              <div className={styles.pvHead}>
                <span>{services[active].category}</span>
                <span>0{active + 1}</span>
              </div>
              <div className={styles.pvBody}>{services[active].illustration}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
