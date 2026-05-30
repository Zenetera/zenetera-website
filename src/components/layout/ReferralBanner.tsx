"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ReferralBanner.module.css";

export default function ReferralBanner() {
  const pathname = usePathname();

  // Homepage only
  if (pathname !== "/") return null;

  return (
    <Link href="/#contact" className={styles.banner}>
      <span className={styles.text}>
        Refer a business and earn a{" "}
        <span className={styles.highlight}>10% referral bonus</span>
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        className={styles.arrow}
        aria-hidden="true"
      >
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
