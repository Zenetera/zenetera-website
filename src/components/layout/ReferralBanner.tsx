"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Arrow from "@/components/ui/Arrow";
import styles from "./ReferralBanner.module.css";

export default function ReferralBanner() {
  const pathname = usePathname();

  // Homepage only
  if (pathname !== "/") return null;

  return (
    <Link href="/#contact" className={styles.banner}>
      <i className={`${styles.dot} pulse`} aria-hidden="true" />
      <span className={styles.text}>
        Refer a business and earn a <span className={styles.highlight}>10% referral bonus</span>
      </span>
      <Arrow size={13} className={styles.arrow} />
    </Link>
  );
}
