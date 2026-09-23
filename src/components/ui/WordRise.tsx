import type { CSSProperties, ReactNode } from "react";

interface WordRiseProps {
  /** Heading text. Use "\n" to force a line break. */
  text: string;
  /** Phrase inside `text` rendered as an accent "flair" in the drifting gradient. */
  flair?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** Word-rise entrance (per-word delay). Off renders static text. */
  animate?: boolean;
  /** Offset added to every word delay index. */
  startIndex?: number;
  id?: string;
}

const PUNCT = /^(.*?)([.,!?:;]*)$/;
const norm = (w: string) => w.replace(/[^\w’']/g, "").toLowerCase();

/**
 * Splits a heading into words. With `animate`, each word sits inside an
 * overflow-hidden mask and rises into place (CSS only, no JS).
 */
export default function WordRise({
  text,
  flair,
  as: Tag = "h1",
  className,
  animate = true,
  startIndex = 0,
  id,
}: WordRiseProps) {
  const lines = text.split("\n");
  const flat = lines.flatMap((l) => l.split(/\s+/).filter(Boolean));
  const flairWords = flair ? flair.split(/\s+/).filter(Boolean) : [];

  let flairStart = -1;
  if (flairWords.length) {
    for (let i = 0; i <= flat.length - flairWords.length; i++) {
      if (flairWords.every((w, j) => norm(flat[i + j]) === norm(w))) {
        flairStart = i;
        break;
      }
    }
  }

  const nodes: ReactNode[] = [];
  let index = 0;

  lines.forEach((line, li) => {
    const words = line.split(/\s+/).filter(Boolean);
    words.forEach((word, wi) => {
      const i = index++;
      const isFlair = flairStart >= 0 && i >= flairStart && i < flairStart + flairWords.length;
      const [, core = word, punct = ""] = PUNCT.exec(word) ?? [];
      const content = isFlair ? (
        <>
          <em className="flair" style={{ "--fi": i - flairStart } as CSSProperties}>
            {core}
          </em>
          {punct}
        </>
      ) : (
        word
      );

      if (animate) {
        nodes.push(
          <span key={i} className="w" style={{ "--i": startIndex + i } as CSSProperties}>
            <span>{content}</span>
          </span>,
        );
      } else {
        nodes.push(<span key={i}>{content}</span>);
      }
      if (wi < words.length - 1) nodes.push(" ");
    });
    if (li < lines.length - 1) nodes.push(<br key={`br-${li}`} />);
  });

  return (
    <Tag id={id} className={className} aria-label={text.replace(/\n/g, " ")}>
      {nodes}
    </Tag>
  );
}
