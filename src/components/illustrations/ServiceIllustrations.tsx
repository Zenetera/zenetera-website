const GRID_COLOR = "rgba(255,255,255,0.04)";
const STROKE = "rgba(255,255,255,0.12)";
const STROKE_LIGHT = "rgba(255,255,255,0.06)";
const ACCENT = "#D63B31";
const ACCENT_LIGHT = "#E87561";
const DOT = "rgba(255,255,255,0.2)";

export function WebsiteIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <rect width="400" height="300" fill="#111111" />
      {/* Grid */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line
          key={`gv${i}`}
          x1={i * 20}
          y1="0"
          x2={i * 20}
          y2="300"
          stroke={GRID_COLOR}
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <line
          key={`gh${i}`}
          x1="0"
          y1={i * 20}
          x2="400"
          y2={i * 20}
          stroke={GRID_COLOR}
          strokeWidth="1"
        />
      ))}

      {/* Flow line */}
      <path
        d="M 0 260 L 60 260 L 60 200 L 100 200 L 100 160 L 100 160"
        stroke={ACCENT}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 300 160 L 340 160 L 340 100 L 400 100"
        stroke={ACCENT}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />

      {/* Browser window */}
      <rect
        x="80"
        y="50"
        width="240"
        height="180"
        rx="8"
        fill="rgba(15,15,15,0.9)"
        stroke={STROKE}
        strokeWidth="1"
      />
      {/* Title bar */}
      <line
        x1="80"
        y1="75"
        x2="320"
        y2="75"
        stroke={STROKE_LIGHT}
        strokeWidth="1"
      />
      {/* Window dots */}
      <circle cx="96" cy="62" r="3" fill="rgba(255,255,255,0.15)" />
      <circle cx="108" cy="62" r="3" fill="rgba(255,255,255,0.15)" />
      <circle cx="120" cy="62" r="3" fill="rgba(255,255,255,0.15)" />
      {/* URL bar */}
      <rect
        x="180"
        y="57"
        width="120"
        height="11"
        rx="5"
        fill="rgba(255,255,255,0.05)"
      />
      {/* Nav items */}
      <rect
        x="95"
        y="85"
        width="30"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.12)"
      />
      <rect
        x="135"
        y="85"
        width="24"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.08)"
      />
      <rect
        x="169"
        y="85"
        width="28"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.08)"
      />
      {/* CTA button */}
      <rect
        x="270"
        y="82"
        width="36"
        height="12"
        rx="3"
        fill={ACCENT}
        opacity="0.7"
      />
      {/* Hero text lines */}
      <rect
        x="100"
        y="110"
        width="140"
        height="8"
        rx="2"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="100"
        y="124"
        width="100"
        height="6"
        rx="2"
        fill="rgba(255,255,255,0.07)"
      />
      <rect
        x="100"
        y="136"
        width="60"
        height="14"
        rx="4"
        fill={ACCENT}
        opacity="0.5"
      />
      {/* Content blocks */}
      <rect
        x="100"
        y="165"
        width="95"
        height="52"
        rx="4"
        fill="rgba(255,255,255,0.03)"
        stroke={STROKE_LIGHT}
        strokeWidth="1"
      />
      <rect
        x="205"
        y="165"
        width="95"
        height="52"
        rx="4"
        fill="rgba(255,255,255,0.03)"
        stroke={STROKE_LIGHT}
        strokeWidth="1"
      />

      {/* Accent dots */}
      <circle cx="340" cy="160" r="3" fill={ACCENT_LIGHT} opacity="0.5" />
      <circle cx="100" cy="200" r="2" fill={ACCENT_LIGHT} opacity="0.3" />
    </svg>
  );
}

export function AutomationIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <rect width="400" height="300" fill="#111111" />
      {/* Grid */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line
          key={`gv${i}`}
          x1={i * 20}
          y1="0"
          x2={i * 20}
          y2="300"
          stroke={GRID_COLOR}
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <line
          key={`gh${i}`}
          x1="0"
          y1={i * 20}
          x2="400"
          y2={i * 20}
          stroke={GRID_COLOR}
          strokeWidth="1"
        />
      ))}

      {/* Flow nodes */}
      {/* Central node */}
      <circle
        cx="200"
        cy="150"
        r="28"
        fill="rgba(20,20,20,0.9)"
        stroke={ACCENT}
        strokeWidth="1.5"
        opacity="0.8"
      />
      {/* Gear icon in center */}
      <path
        d="M200 138 L202 142 L207 142 L203 145 L205 150 L200 147 L195 150 L197 145 L193 142 L198 142 Z"
        fill={ACCENT_LIGHT}
        opacity="0.7"
      />
      <circle
        cx="200"
        cy="145"
        r="3"
        fill="none"
        stroke={ACCENT_LIGHT}
        strokeWidth="1"
        opacity="0.5"
      />
      {/* Text below gear */}
      <rect
        x="188"
        y="153"
        width="24"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.2)"
      />

      {/* Top node - Calendar */}
      <rect
        x="170"
        y="42"
        width="60"
        height="44"
        rx="8"
        fill="rgba(20,20,20,0.9)"
        stroke={STROKE}
        strokeWidth="1"
      />
      <rect
        x="180"
        y="52"
        width="40"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.15)"
      />
      {/* Calendar grid */}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <rect
            key={`cal${r}${c}`}
            x={181 + c * 8}
            y={61 + r * 6}
            width="5"
            height="4"
            rx="1"
            fill={
              r === 1 && c === 2
                ? ACCENT
                : "rgba(255,255,255,0.06)"
            }
            opacity={r === 1 && c === 2 ? 0.7 : 1}
          />
        ))
      )}
      {/* Connection line: center to top */}
      <line
        x1="200"
        y1="122"
        x2="200"
        y2="86"
        stroke={STROKE}
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <circle cx="200" cy="86" r="2.5" fill={DOT} />

      {/* Left node - Clock */}
      <rect
        x="60"
        y="128"
        width="60"
        height="44"
        rx="8"
        fill="rgba(20,20,20,0.9)"
        stroke={STROKE}
        strokeWidth="1"
      />
      <circle
        cx="90"
        cy="146"
        r="10"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <line
        x1="90"
        y1="146"
        x2="90"
        y2="139"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="90"
        y1="146"
        x2="95"
        y2="148"
        stroke={ACCENT_LIGHT}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <rect
        x="76"
        y="161"
        width="28"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.1)"
      />
      {/* Connection line: center to left */}
      <line
        x1="172"
        y1="150"
        x2="120"
        y2="150"
        stroke={STROKE}
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <circle cx="120" cy="150" r="2.5" fill={DOT} />

      {/* Right node - Bell notification */}
      <rect
        x="280"
        y="128"
        width="60"
        height="44"
        rx="8"
        fill="rgba(20,20,20,0.9)"
        stroke={STROKE}
        strokeWidth="1"
      />
      <path
        d="M305 141 C305 137 308 134 310 134 C312 134 315 137 315 141 L315 147 L318 149 L302 149 L305 147 Z"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.2"
      />
      <circle cx="310" cy="152" r="2" fill="rgba(255,255,255,0.15)" />
      <circle cx="317" cy="138" r="3.5" fill={ACCENT} opacity="0.7" />
      <rect
        x="296"
        y="161"
        width="28"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.1)"
      />
      {/* Connection line: center to right */}
      <line
        x1="228"
        y1="150"
        x2="280"
        y2="150"
        stroke={STROKE}
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <circle cx="280" cy="150" r="2.5" fill={DOT} />

      {/* Bottom node - Checkmark/Complete */}
      <rect
        x="170"
        y="214"
        width="60"
        height="44"
        rx="8"
        fill="rgba(20,20,20,0.9)"
        stroke={STROKE}
        strokeWidth="1"
      />
      <circle
        cx="200"
        cy="232"
        r="9"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1.2"
        opacity="0.5"
      />
      <path
        d="M194 232 L198 236 L206 228"
        stroke={ACCENT_LIGHT}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <rect
        x="186"
        y="246"
        width="28"
        height="3"
        rx="1"
        fill="rgba(255,255,255,0.1)"
      />
      {/* Connection line: center to bottom */}
      <line
        x1="200"
        y1="178"
        x2="200"
        y2="214"
        stroke={STROKE}
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <circle cx="200" cy="214" r="2.5" fill={DOT} />

      {/* Accent dots */}
      <circle cx="50" cy="80" r="2" fill={ACCENT_LIGHT} opacity="0.25" />
      <circle cx="350" cy="240" r="3" fill={ACCENT_LIGHT} opacity="0.2" />
      <circle cx="340" cy="70" r="1.5" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export function ChatbotIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <rect width="400" height="300" fill="#111111" />
      {/* Grid */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line
          key={`gv${i}`}
          x1={i * 20}
          y1="0"
          x2={i * 20}
          y2="300"
          stroke={GRID_COLOR}
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 15 }).map((_, i) => (
        <line
          key={`gh${i}`}
          x1="0"
          y1={i * 20}
          x2="400"
          y2={i * 20}
          stroke={GRID_COLOR}
          strokeWidth="1"
        />
      ))}

      {/* User message bubble - right */}
      <rect
        x="200"
        y="60"
        width="150"
        height="36"
        rx="18"
        fill="rgba(20,20,20,0.9)"
        stroke={STROKE}
        strokeWidth="1"
      />
      <rect
        x="218"
        y="73"
        width="60"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="286"
        y="73"
        width="40"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.08)"
      />
      {/* Cursor near user message */}
      <path
        d="M185 72 L185 88 L191 83 L197 88 L197 72 Z"
        fill="rgba(255,255,255,0.12)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.8"
      />

      {/* Bot response - left */}
      <rect
        x="50"
        y="120"
        width="180"
        height="48"
        rx="18"
        fill="rgba(20,20,20,0.9)"
        stroke={ACCENT}
        strokeWidth="1"
        opacity="0.7"
      />
      {/* Typing dots */}
      <circle cx="82" cy="140" r="4" fill={ACCENT_LIGHT} opacity="0.6" />
      <circle cx="96" cy="140" r="4" fill={ACCENT_LIGHT} opacity="0.4" />
      <circle cx="110" cy="140" r="4" fill={ACCENT_LIGHT} opacity="0.2" />
      <rect
        x="68"
        y="152"
        width="80"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.06)"
      />

      {/* User message 2 - right */}
      <rect
        x="220"
        y="190"
        width="130"
        height="36"
        rx="18"
        fill="rgba(20,20,20,0.9)"
        stroke={STROKE}
        strokeWidth="1"
      />
      <rect
        x="238"
        y="204"
        width="48"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.12)"
      />
      <rect
        x="294"
        y="204"
        width="32"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.07)"
      />

      {/* Bot response 2 - left, with accent */}
      <rect
        x="50"
        y="240"
        width="200"
        height="36"
        rx="18"
        fill="rgba(20,20,20,0.9)"
        stroke={ACCENT}
        strokeWidth="1"
        opacity="0.5"
      />
      <rect
        x="70"
        y="254"
        width="90"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.12)"
      />
      <rect
        x="168"
        y="254"
        width="50"
        height="5"
        rx="2"
        fill={ACCENT}
        opacity="0.3"
      />

      {/* Cursor near second message */}
      <path
        d="M205 200 L205 216 L211 211 L217 216 L217 200 Z"
        fill="rgba(255,255,255,0.1)"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="0.8"
      />

      {/* Platform icons - small */}
      {/* WhatsApp-like circle */}
      <circle
        cx="360"
        cy="150"
        r="14"
        fill="rgba(20,20,20,0.8)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      <path
        d="M355 150 C355 146 358 143 360 143 C362 143 365 146 365 150 C365 154 362 156 360 156 L356 158 L357 155 C355.5 153.5 355 152 355 150Z"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      {/* Instagram-like square */}
      <rect
        x="346"
        y="186"
        width="28"
        height="28"
        rx="7"
        fill="rgba(20,20,20,0.8)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      <circle
        cx="360"
        cy="200"
        r="6"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
      <circle cx="369" cy="192" r="1.5" fill="rgba(255,255,255,0.2)" />

      {/* Connection lines to chat */}
      <line
        x1="346"
        y1="150"
        x2="250"
        y2="144"
        stroke={STROKE_LIGHT}
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <line
        x1="346"
        y1="200"
        x2="250"
        y2="208"
        stroke={STROKE_LIGHT}
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Accent dots */}
      <circle cx="40" cy="50" r="2" fill={ACCENT_LIGHT} opacity="0.3" />
      <circle cx="370" cy="260" r="2.5" fill={ACCENT_LIGHT} opacity="0.2" />
    </svg>
  );
}

export function GoogleIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <rect width="400" height="300" fill="#111111" />

      {/* Globe wireframe */}
      <ellipse
        cx="200"
        cy="165"
        rx="100"
        ry="100"
        fill="none"
        stroke={STROKE}
        strokeWidth="1"
      />
      {/* Longitude lines */}
      <ellipse
        cx="200"
        cy="165"
        rx="40"
        ry="100"
        fill="none"
        stroke={STROKE_LIGHT}
        strokeWidth="0.8"
      />
      <ellipse
        cx="200"
        cy="165"
        rx="70"
        ry="100"
        fill="none"
        stroke={STROKE_LIGHT}
        strokeWidth="0.8"
      />
      <line
        x1="200"
        y1="65"
        x2="200"
        y2="265"
        stroke={STROKE_LIGHT}
        strokeWidth="0.8"
      />
      {/* Latitude lines */}
      <ellipse
        cx="200"
        cy="120"
        rx="92"
        ry="22"
        fill="none"
        stroke={STROKE_LIGHT}
        strokeWidth="0.8"
      />
      <line
        x1="100"
        y1="165"
        x2="300"
        y2="165"
        stroke={STROKE_LIGHT}
        strokeWidth="0.8"
      />
      <ellipse
        cx="200"
        cy="210"
        rx="92"
        ry="22"
        fill="none"
        stroke={STROKE_LIGHT}
        strokeWidth="0.8"
      />

      {/* Map pin - main */}
      <path
        d="M200 130 C200 130 185 130 185 118 C185 108 192 102 200 102 C208 102 215 108 215 118 C215 130 200 130 200 130Z"
        fill={ACCENT}
        opacity="0.7"
        stroke={ACCENT_LIGHT}
        strokeWidth="1"
      />
      <circle cx="200" cy="116" r="4" fill="rgba(0,0,0,0.3)" />
      {/* Pin shadow/drop line */}
      <line
        x1="200"
        y1="130"
        x2="200"
        y2="140"
        stroke={ACCENT}
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Pulse rings around pin */}
      <circle
        cx="200"
        cy="118"
        r="22"
        fill="none"
        stroke={ACCENT}
        strokeWidth="0.8"
        opacity="0.2"
      />
      <circle
        cx="200"
        cy="118"
        r="35"
        fill="none"
        stroke={ACCENT}
        strokeWidth="0.5"
        opacity="0.1"
      />

      {/* Secondary pins */}
      <circle cx="155" cy="175" r="4" fill="rgba(255,255,255,0.15)" />
      <circle
        cx="155"
        cy="175"
        r="7"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="0.8"
      />
      <circle cx="248" cy="148" r="4" fill="rgba(255,255,255,0.15)" />
      <circle
        cx="248"
        cy="148"
        r="7"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="0.8"
      />
      <circle cx="230" cy="200" r="3" fill="rgba(255,255,255,0.1)" />

      {/* Search bar at top */}
      <rect
        x="120"
        y="30"
        width="160"
        height="32"
        rx="16"
        fill="rgba(20,20,20,0.9)"
        stroke={STROKE}
        strokeWidth="1"
      />
      {/* Search icon */}
      <circle
        cx="140"
        cy="46"
        r="5"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.2"
      />
      <line
        x1="144"
        y1="50"
        x2="147"
        y2="53"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Search text */}
      <rect
        x="155"
        y="43"
        width="50"
        height="5"
        rx="2"
        fill="rgba(255,255,255,0.1)"
      />
      <rect
        x="210"
        y="43"
        width="30"
        height="5"
        rx="2"
        fill={ACCENT}
        opacity="0.3"
      />

      {/* Connection line from search to pin */}
      <line
        x1="200"
        y1="62"
        x2="200"
        y2="102"
        stroke={STROKE}
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="200" cy="82" r="2" fill={DOT} />

      {/* Accent dots */}
      <circle cx="320" cy="100" r="2.5" fill={ACCENT_LIGHT} opacity="0.3" />
      <circle cx="80" cy="220" r="2" fill={ACCENT_LIGHT} opacity="0.2" />
      <circle cx="340" cy="230" r="1.5" fill="rgba(255,255,255,0.12)" />

      {/* Ground shadow */}
      <ellipse
        cx="200"
        cy="275"
        rx="80"
        ry="8"
        fill="rgba(255,255,255,0.02)"
      />
    </svg>
  );
}
