import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import Magnetic from "@/motion/Magnetic";
import Arrow from "./Arrow";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost" | "accent" | "light";
type Size = "sm" | "md" | "lg";
type ArrowKind = "right" | "down" | "none";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  arrow?: ArrowKind;
  /** Wrap in a cursor-following magnet (desktop only). */
  magnetic?: boolean;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >;

type NativeButtonProps = CommonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

/**
 * Pill button. A coloured layer slides up from underneath on hover and the
 * arrow nudges forward; both are transform-only.
 */
export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", arrow = "right", magnetic = false, className, children } = props;

  const classes = cx(
    styles.btn,
    styles[variant],
    size !== "md" && styles[size],
    arrow === "down" && styles.arrowDown,
    className,
  );

  const inner = (
    <>
      <span className={styles.label}>{children}</span>
      {arrow !== "none" && (
        <span className={styles.arr}>
          <Arrow size={15} rotate={arrow === "down" ? 90 : undefined} />
        </span>
      )}
    </>
  );

  let element: ReactNode;
  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, arrow: _a, magnetic: _m, className: _c, children: _ch, ...rest } = props;
    const external = /^https?:\/\//.test(href);
    element = external ? (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    ) : (
      <Link href={href} className={classes} {...rest}>
        {inner}
      </Link>
    );
  } else {
    const { href: _h, variant: _v, size: _s, arrow: _a, magnetic: _m, className: _c, children: _ch, ...rest } = props;
    element = (
      <button type="button" className={classes} {...rest}>
        {inner}
      </button>
    );
  }

  return magnetic ? <Magnetic>{element}</Magnetic> : element;
}
