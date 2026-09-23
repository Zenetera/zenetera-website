interface ArrowProps {
  size?: number;
  className?: string;
  /** Rotation in degrees (e.g. 90 for "down", 180 for "back"). */
  rotate?: number;
}

/** The site's standard arrow glyph. */
export default function Arrow({ size = 16, className, rotate }: ArrowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
