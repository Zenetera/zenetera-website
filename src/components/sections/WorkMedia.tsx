import Image from "next/image";
import type { CSSProperties } from "react";
import type { WorkImage } from "@/lib/types";
import { cx } from "@/lib/cx";
import styles from "./WorkMedia.module.css";

interface WorkMediaProps {
  image: WorkImage;
  /** Aspect ratio used when the image sets none, e.g. "16 / 10". */
  aspect?: string;
  /** `sizes` hint for next/image. */
  sizes?: string;
  priority?: boolean;
  /** No radius or shadow (inside a card that draws its own). */
  flat?: boolean;
  className?: string;
}

/** A case-study image in a rounded media panel. */
export default function WorkMedia({
  image,
  aspect = "16 / 10",
  sizes = "100vw",
  priority = false,
  flat = false,
  className,
}: WorkMediaProps) {
  return (
    <figure
      className={cx(styles.media, flat && styles.flat, className)}
      style={{ "--aspect": image.aspect ?? aspect } as CSSProperties}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        /* Screenshots are mostly text, which smears at the default 75. */
        quality={90}
        unoptimized={image.src.endsWith(".svg")}
        className={styles.img}
      />
    </figure>
  );
}

interface WorkArtProps {
  client: string;
  aspect?: string;
  flat?: boolean;
  className?: string;
}

/** Tinted panel with the client name, used until a project has a cover image. */
export function WorkArt({ client, aspect = "16 / 10", flat = false, className }: WorkArtProps) {
  return (
    <div
      className={cx(styles.media, styles.art, flat && styles.flat, className)}
      style={{ "--aspect": aspect } as CSSProperties}
      aria-hidden="true"
    >
      <span className={styles.artMark}>{client}</span>
    </div>
  );
}
