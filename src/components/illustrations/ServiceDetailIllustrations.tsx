const GRID_COLOR = "rgba(255,255,255,0.04)";
const STROKE = "rgba(255,255,255,0.12)";
const STROKE_LIGHT = "rgba(255,255,255,0.06)";
const ACCENT = "#D63B31";
const ACCENT_LIGHT = "#E87561";

function Grid() {
  return (
    <>
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
    </>
  );
}

const svgStyle = { width: "100%", height: "100%", display: "block" } as const;

export function WebDevIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
      <rect width="400" height="300" fill="#111111" />
      <Grid />
      {/* Code editor window */}
      <rect x="60" y="40" width="280" height="200" rx="10" fill="rgba(15,15,15,0.95)" stroke={STROKE} strokeWidth="1" />
      <line x1="60" y1="65" x2="340" y2="65" stroke={STROKE_LIGHT} strokeWidth="1" />
      <circle cx="78" cy="52" r="3.5" fill="rgba(255,255,255,0.15)" />
      <circle cx="90" cy="52" r="3.5" fill="rgba(255,255,255,0.15)" />
      <circle cx="102" cy="52" r="3.5" fill="rgba(255,255,255,0.15)" />
      {/* Tab */}
      <rect x="120" y="43" width="60" height="18" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="130" y="50" width="40" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      {/* Line numbers */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={`ln${i}`} x="70" y={78 + i * 20} width="12" height="4" rx="1" fill="rgba(255,255,255,0.08)" />
      ))}
      {/* Code lines */}
      <rect x="92" y="78" width="80" height="5" rx="2" fill="rgba(140,180,255,0.25)" />
      <rect x="100" y="98" width="120" height="5" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="100" y="118" width="60" height="5" rx="2" fill={ACCENT} opacity="0.4" />
      <rect x="168" y="118" width="80" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="100" y="138" width="90" height="5" rx="2" fill="rgba(120,220,160,0.25)" />
      <rect x="100" y="158" width="140" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="100" y="178" width="50" height="5" rx="2" fill="rgba(140,180,255,0.25)" />
      <rect x="92" y="198" width="70" height="5" rx="2" fill="rgba(140,180,255,0.2)" />
      <rect x="100" y="218" width="100" height="5" rx="2" fill="rgba(255,255,255,0.06)" />
      {/* Cursor blink */}
      <rect x="198" y="136" width="2" height="10" rx="1" fill={ACCENT_LIGHT} opacity="0.7" />
      {/* Browser preview floating */}
      <rect x="260" y="100" width="100" height="80" rx="6" fill="rgba(20,20,20,0.95)" stroke={ACCENT} strokeWidth="0.8" opacity="0.6" />
      <rect x="268" y="112" width="50" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="268" y="122" width="80" height="3" rx="1" fill="rgba(255,255,255,0.06)" />
      <rect x="268" y="130" width="36" height="10" rx="3" fill={ACCENT} opacity="0.4" />
      <rect x="268" y="148" width="80" height="24" rx="3" fill="rgba(255,255,255,0.03)" stroke={STROKE_LIGHT} strokeWidth="0.5" />
      {/* Connection line */}
      <line x1="250" y1="140" x2="260" y2="140" stroke={ACCENT} strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      {/* Accent dots */}
      <circle cx="50" cy="260" r="2" fill={ACCENT_LIGHT} opacity="0.3" />
      <circle cx="360" cy="50" r="2.5" fill={ACCENT_LIGHT} opacity="0.2" />
    </svg>
  );
}

export function ECommerceIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
      <rect width="400" height="300" fill="#111111" />
      <Grid />
      {/* Shopping cart - top left corner */}
      <path d="M30 38 L44 38 L54 72 L100 72 L108 48 L54 48" fill="none" stroke={STROKE} strokeWidth="1" />
      <circle cx="62" cy="82" r="5" fill="none" stroke={STROKE} strokeWidth="0.8" />
      <circle cx="92" cy="82" r="5" fill="none" stroke={STROKE} strokeWidth="0.8" />
      <circle cx="62" cy="82" r="2" fill="rgba(255,255,255,0.1)" />
      <circle cx="92" cy="82" r="2" fill="rgba(255,255,255,0.1)" />
      {/* Cart badge */}
      <circle cx="104" cy="36" r="8" fill={ACCENT} opacity="0.6" />
      <text x="104" y="39" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">3</text>
      {/* Product cards */}
      <rect x="80" y="105" width="90" height="110" rx="8" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <rect x="90" y="115" width="70" height="50" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="90" y="174" width="50" height="5" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="90" y="185" width="32" height="5" rx="2" fill={ACCENT} opacity="0.5" />
      <rect x="130" y="185" width="28" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke={STROKE_LIGHT} strokeWidth="0.5" />
      <rect x="185" y="105" width="90" height="110" rx="8" fill="rgba(20,20,20,0.9)" stroke={ACCENT} strokeWidth="1" opacity="0.7" />
      <rect x="195" y="115" width="70" height="50" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="195" y="174" width="50" height="5" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="195" y="185" width="32" height="5" rx="2" fill={ACCENT} opacity="0.5" />
      <rect x="235" y="185" width="28" height="12" rx="3" fill={ACCENT} opacity="0.3" />
      <rect x="290" y="105" width="90" height="110" rx="8" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <rect x="300" y="115" width="70" height="50" rx="4" fill="rgba(255,255,255,0.04)" />
      <rect x="300" y="174" width="50" height="5" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="300" y="185" width="32" height="5" rx="2" fill={ACCENT} opacity="0.5" />
      <rect x="340" y="185" width="28" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke={STROKE_LIGHT} strokeWidth="0.5" />
      {/* Payment section */}
      <rect x="120" y="230" width="160" height="50" rx="8" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <rect x="136" y="240" width="60" height="5" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="136" y="251" width="128" height="10" rx="4" fill="rgba(255,255,255,0.04)" stroke={STROKE_LIGHT} strokeWidth="0.8" />
      <rect x="136" y="267" width="50" height="8" rx="3" fill={ACCENT} opacity="0.6" />
      {/* Secure lock icon */}
      <rect x="288" y="240" width="14" height="10" rx="2" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <path d="M291 240 L291 237 C291 234 293 232 295 232 C297 232 299 234 299 237 L299 240" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      {/* Accent dots */}
      <circle cx="370" cy="40" r="2" fill={ACCENT_LIGHT} opacity="0.3" />
      <circle cx="40" cy="270" r="2.5" fill={ACCENT_LIGHT} opacity="0.2" />
    </svg>
  );
}

export function ChatbotDetailIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
      <rect width="400" height="300" fill="#111111" />
      <Grid />
      {/* Chat window */}
      <rect x="80" y="30" width="240" height="240" rx="12" fill="rgba(15,15,15,0.95)" stroke={STROKE} strokeWidth="1" />
      <line x1="80" y1="60" x2="320" y2="60" stroke={STROKE_LIGHT} strokeWidth="1" />
      {/* Bot avatar in header */}
      <circle cx="100" cy="45" r="8" fill={ACCENT} opacity="0.3" />
      <circle cx="100" cy="43" r="3" fill="rgba(255,255,255,0.3)" />
      <path d="M95 48 Q100 51 105 48" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <rect x="115" y="41" width="50" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
      <circle cx="115" cy="51" r="2.5" fill="rgba(80,200,120,0.6)" />
      <rect x="122" y="49" width="24" height="3" rx="1" fill="rgba(255,255,255,0.08)" />
      {/* User message */}
      <rect x="180" y="75" width="120" height="30" rx="14" fill="rgba(255,255,255,0.06)" stroke={STROKE_LIGHT} strokeWidth="0.8" />
      <rect x="195" y="86" width="55" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="256" y="86" width="30" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
      {/* Bot response with AI sparkle */}
      <rect x="100" y="118" width="160" height="50" rx="14" fill="rgba(20,20,20,0.9)" stroke={ACCENT} strokeWidth="0.8" opacity="0.6" />
      <rect x="115" y="130" width="100" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="115" y="140" width="130" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="115" y="150" width="60" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      {/* AI sparkle */}
      <path d="M92 140 L94 136 L96 140 L100 142 L96 144 L94 148 L92 144 L88 142 Z" fill={ACCENT_LIGHT} opacity="0.5" />
      {/* Quick reply buttons */}
      <rect x="100" y="180" width="70" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke={STROKE} strokeWidth="0.8" />
      <rect x="112" y="188" width="46" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="180" y="180" width="80" height="22" rx="11" fill="rgba(255,255,255,0.04)" stroke={ACCENT} strokeWidth="0.8" opacity="0.5" />
      <rect x="194" y="188" width="52" height="4" rx="2" fill={ACCENT_LIGHT} opacity="0.3" />
      {/* Typing indicator */}
      <rect x="100" y="215" width="80" height="25" rx="12" fill="rgba(20,20,20,0.9)" stroke={STROKE_LIGHT} strokeWidth="0.8" />
      <circle cx="120" cy="228" r="3" fill={ACCENT_LIGHT} opacity="0.5" />
      <circle cx="132" cy="228" r="3" fill={ACCENT_LIGHT} opacity="0.35" />
      <circle cx="144" cy="228" r="3" fill={ACCENT_LIGHT} opacity="0.2" />
      {/* Input bar */}
      <rect x="90" y="248" width="220" height="14" rx="7" fill="rgba(255,255,255,0.03)" stroke={STROKE_LIGHT} strokeWidth="0.8" />
      {/* Neural network nodes on side */}
      <circle cx="350" cy="100" r="6" fill="rgba(20,20,20,0.8)" stroke={ACCENT} strokeWidth="0.8" opacity="0.4" />
      <circle cx="365" cy="140" r="4" fill="rgba(20,20,20,0.8)" stroke={STROKE} strokeWidth="0.8" />
      <circle cx="350" cy="180" r="5" fill="rgba(20,20,20,0.8)" stroke={ACCENT} strokeWidth="0.8" opacity="0.3" />
      <line x1="350" y1="106" x2="365" y2="136" stroke={STROKE_LIGHT} strokeWidth="0.5" />
      <line x1="365" y1="144" x2="350" y2="175" stroke={STROKE_LIGHT} strokeWidth="0.5" />
      <line x1="350" y1="106" x2="350" y2="175" stroke={STROKE_LIGHT} strokeWidth="0.3" />
      {/* Accent dots */}
      <circle cx="45" cy="60" r="2" fill={ACCENT_LIGHT} opacity="0.3" />
      <circle cx="370" cy="250" r="2" fill={ACCENT_LIGHT} opacity="0.2" />
    </svg>
  );
}

export function BookingIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
      <rect width="400" height="300" fill="#111111" />
      <Grid />
      {/* Calendar */}
      <rect x="60" y="40" width="200" height="180" rx="10" fill="rgba(15,15,15,0.95)" stroke={STROKE} strokeWidth="1" />
      <rect x="60" y="40" width="200" height="35" rx="10" fill="rgba(255,255,255,0.03)" />
      <rect x="60" y="65" width="200" height="10" fill="rgba(15,15,15,0.95)" />
      <rect x="80" y="48" width="80" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
      {/* Day headers */}
      {["S", "M", "T", "W", "T", "F", "S"].map((_, i) => (
        <rect key={`dh${i}`} x={72 + i * 26} y="82" width="14" height="4" rx="1" fill="rgba(255,255,255,0.1)" />
      ))}
      {/* Calendar days */}
      {Array.from({ length: 28 }).map((_, i) => {
        const row = Math.floor(i / 7);
        const col = i % 7;
        const isSelected = i === 15;
        const hasEvent = i === 10 || i === 18 || i === 22;
        return (
          <g key={`day${i}`}>
            <rect
              x={72 + col * 26}
              y={96 + row * 26}
              width="16"
              height="16"
              rx="4"
              fill={isSelected ? ACCENT : "rgba(255,255,255,0.02)"}
              stroke={isSelected ? ACCENT_LIGHT : "none"}
              strokeWidth="0.8"
              opacity={isSelected ? 0.7 : 1}
            />
            {hasEvent && (
              <circle cx={80 + col * 26} cy={118 + row * 26} r="1.5" fill={ACCENT_LIGHT} opacity="0.5" />
            )}
          </g>
        );
      })}
      {/* Notification/reminder panel */}
      <rect x="280" y="50" width="100" height="60" rx="8" fill="rgba(20,20,20,0.95)" stroke={ACCENT} strokeWidth="0.8" opacity="0.6" />
      {/* Bell icon */}
      <path d="M300 62 C300 58 303 55 305 55 C307 55 310 58 310 62 L310 68 L313 70 L297 70 L300 68 Z" fill="none" stroke={ACCENT_LIGHT} strokeWidth="1" opacity="0.6" />
      <circle cx="305" cy="72" r="1.5" fill={ACCENT_LIGHT} opacity="0.4" />
      <rect x="318" y="60" width="48" height="4" rx="1" fill="rgba(255,255,255,0.12)" />
      <rect x="318" y="68" width="36" height="3" rx="1" fill="rgba(255,255,255,0.06)" />
      <rect x="290" y="82" width="76" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="290" y="92" width="50" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
      {/* SMS/Email notification */}
      <rect x="280" y="130" width="100" height="50" rx="8" fill="rgba(20,20,20,0.95)" stroke={STROKE} strokeWidth="1" />
      <rect x="290" y="142" width="12" height="8" rx="2" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <path d="M290 142 L296 147 L302 142" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <rect x="308" y="142" width="58" height="4" rx="1" fill="rgba(255,255,255,0.1)" />
      <rect x="308" y="150" width="40" height="3" rx="1" fill="rgba(255,255,255,0.06)" />
      <rect x="290" y="162" width="76" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
      {/* Connection lines */}
      <line x1="260" y1="80" x2="280" y2="80" stroke={ACCENT} strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      <line x1="260" y1="155" x2="280" y2="155" stroke={STROKE} strokeWidth="1" strokeDasharray="3 2" />
      {/* Checkmark confirmation */}
      <rect x="120" y="235" width="80" height="30" rx="6" fill="rgba(20,20,20,0.9)" stroke={ACCENT} strokeWidth="0.8" opacity="0.5" />
      <circle cx="140" cy="250" r="7" fill="none" stroke={ACCENT_LIGHT} strokeWidth="1" opacity="0.5" />
      <path d="M136 250 L139 253 L145 247" stroke={ACCENT_LIGHT} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <rect x="152" y="246" width="38" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      {/* Accent dots */}
      <circle cx="40" cy="260" r="2" fill={ACCENT_LIGHT} opacity="0.3" />
      <circle cx="370" cy="240" r="2.5" fill={ACCENT_LIGHT} opacity="0.2" />
    </svg>
  );
}

export function BrandingIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
      <rect width="400" height="300" fill="#111111" />
      <Grid />
      {/* Logo construction grid */}
      <circle cx="140" cy="120" r="55" fill="none" stroke={STROKE} strokeWidth="0.8" />
      <circle cx="140" cy="120" r="37" fill="none" stroke={STROKE_LIGHT} strokeWidth="0.5" />
      <circle cx="140" cy="120" r="20" fill="none" stroke={STROKE_LIGHT} strokeWidth="0.3" />
      <line x1="85" y1="120" x2="195" y2="120" stroke={STROKE_LIGHT} strokeWidth="0.5" />
      <line x1="140" y1="65" x2="140" y2="175" stroke={STROKE_LIGHT} strokeWidth="0.5" />
      <line x1="101" y1="81" x2="179" y2="159" stroke={STROKE_LIGHT} strokeWidth="0.3" />
      <line x1="179" y1="81" x2="101" y2="159" stroke={STROKE_LIGHT} strokeWidth="0.3" />
      {/* Golden ratio spiral hint */}
      <path d="M140 83 Q175 83 175 120 Q175 148 148 157 Q128 162 118 145" fill="none" stroke={ACCENT} strokeWidth="0.6" opacity="0.25" />
      {/* Abstract logo mark */}
      <path d="M120 100 L140 80 L160 100 L160 140 L140 160 L120 140 Z" fill="none" stroke={ACCENT} strokeWidth="1.5" opacity="0.7" />
      <path d="M130 110 L140 100 L150 110 L150 130 L140 140 L130 130 Z" fill={ACCENT} opacity="0.2" />
      {/* Measurement lines */}
      <line x1="115" y1="78" x2="165" y2="78" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <line x1="115" y1="78" x2="115" y2="82" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <line x1="165" y1="78" x2="165" y2="82" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

      {/* Color palette panel */}
      <rect x="240" y="40" width="130" height="36" rx="6" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <rect x="250" y="48" width="40" height="4" rx="1" fill="rgba(255,255,255,0.08)" />
      <circle cx="260" cy="64" r="8" fill={ACCENT} opacity="0.8" />
      <circle cx="280" cy="64" r="8" fill={ACCENT_LIGHT} opacity="0.6" />
      <circle cx="300" cy="64" r="8" fill="#1a1a2e" stroke={STROKE} strokeWidth="0.8" />
      <circle cx="320" cy="64" r="8" fill="rgba(255,255,255,0.85)" />
      <circle cx="340" cy="64" r="8" fill="rgba(255,255,255,0.06)" stroke={STROKE} strokeWidth="0.8" />

      {/* Typography sample panel */}
      <rect x="240" y="88" width="130" height="60" rx="6" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <rect x="252" y="98" width="20" height="4" rx="1" fill="rgba(255,255,255,0.06)" />
      <rect x="252" y="108" width="50" height="10" rx="2" fill="rgba(255,255,255,0.18)" />
      <rect x="252" y="124" width="100" height="4" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="252" y="134" width="80" height="4" rx="1" fill="rgba(255,255,255,0.05)" />

      {/* Business card mockup - back card */}
      <rect x="255" y="168" width="120" height="70" rx="6" fill="rgba(15,15,15,0.9)" stroke={STROKE_LIGHT} strokeWidth="0.8" transform="rotate(3, 315, 203)" />
      {/* Business card mockup - front card */}
      <rect x="245" y="165" width="120" height="70" rx="6" fill="rgba(20,20,20,0.95)" stroke={STROKE} strokeWidth="1" transform="rotate(-4, 305, 200)" />
      <rect x="258" y="178" width="24" height="8" rx="2" fill={ACCENT} opacity="0.5" transform="rotate(-4, 305, 200)" />
      <rect x="258" y="192" width="60" height="4" rx="1" fill="rgba(255,255,255,0.12)" transform="rotate(-4, 305, 200)" />
      <rect x="258" y="200" width="45" height="3" rx="1" fill="rgba(255,255,255,0.06)" transform="rotate(-4, 305, 200)" />
      <rect x="258" y="210" width="80" height="3" rx="1" fill="rgba(255,255,255,0.04)" transform="rotate(-4, 305, 200)" />

      {/* Social media mockup - bottom left */}
      <rect x="50" y="200" width="100" height="80" rx="8" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <rect x="58" y="208" width="84" height="44" rx="4" fill="rgba(255,255,255,0.03)" />
      {/* Profile pic and name */}
      <circle cx="68" cy="264" r="6" fill={ACCENT} opacity="0.3" />
      <rect x="78" y="260" width="40" height="4" rx="1" fill="rgba(255,255,255,0.1)" />
      <rect x="78" y="268" width="28" height="3" rx="1" fill="rgba(255,255,255,0.05)" />
      {/* Logo mark in social post */}
      <path d="M90 222 L100 214 L110 222 L110 238 L100 246 L90 238 Z" fill="none" stroke={ACCENT} strokeWidth="0.8" opacity="0.35" />

      {/* Letterhead mockup - bottom center */}
      <rect x="165" y="210" width="60" height="76" rx="4" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="0.8" />
      <path d="M188 222 L193 217 L198 222 L198 232 L193 237 L188 232 Z" fill="none" stroke={ACCENT} strokeWidth="0.6" opacity="0.4" />
      <rect x="177" y="244" width="36" height="3" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="177" y="250" width="36" height="2" rx="1" fill="rgba(255,255,255,0.04)" />
      <rect x="177" y="256" width="36" height="2" rx="1" fill="rgba(255,255,255,0.04)" />
      <rect x="177" y="262" width="36" height="2" rx="1" fill="rgba(255,255,255,0.04)" />
      <rect x="177" y="272" width="20" height="4" rx="1" fill={ACCENT} opacity="0.2" />

      {/* Pen tool cursor */}
      <path d="M210 115 L215 100 L220 115 L215 113 Z" fill={ACCENT_LIGHT} opacity="0.5" />
      {/* Accent dots */}
      <circle cx="30" cy="45" r="2" fill={ACCENT_LIGHT} opacity="0.3" />
      <circle cx="385" cy="280" r="2.5" fill={ACCENT_LIGHT} opacity="0.2" />
      <circle cx="380" cy="120" r="1.5" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}

export function AIAutomationIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
      <rect width="400" height="300" fill="#111111" />
      <Grid />
      {/* Central brain/AI node */}
      <circle cx="200" cy="150" r="35" fill="rgba(20,20,20,0.9)" stroke={ACCENT} strokeWidth="1.2" opacity="0.7" />
      <circle cx="200" cy="150" r="50" fill="none" stroke={ACCENT} strokeWidth="0.5" opacity="0.2" />
      <circle cx="200" cy="150" r="65" fill="none" stroke={ACCENT} strokeWidth="0.3" opacity="0.1" />
      {/* Brain circuit pattern */}
      <circle cx="190" cy="140" r="4" fill={ACCENT_LIGHT} opacity="0.4" />
      <circle cx="210" cy="140" r="4" fill={ACCENT_LIGHT} opacity="0.4" />
      <circle cx="200" cy="155" r="3" fill={ACCENT_LIGHT} opacity="0.3" />
      <line x1="190" y1="140" x2="200" y2="155" stroke={ACCENT_LIGHT} strokeWidth="0.8" opacity="0.4" />
      <line x1="210" y1="140" x2="200" y2="155" stroke={ACCENT_LIGHT} strokeWidth="0.8" opacity="0.4" />
      <line x1="190" y1="140" x2="210" y2="140" stroke={ACCENT_LIGHT} strokeWidth="0.8" opacity="0.3" />
      {/* Sparkle */}
      <path d="M200 128 L202 124 L204 128 L208 130 L204 132 L202 136 L200 132 L196 130 Z" fill={ACCENT_LIGHT} opacity="0.5" />
      {/* Surrounding workflow nodes */}
      {/* Email node */}
      <rect x="60" y="60" width="70" height="45" rx="8" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <rect x="74" y="74" width="18" height="12" rx="2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <path d="M74 74 L83 81 L92 74" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <rect x="96" y="76" width="24" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
      <rect x="96" y="83" width="18" height="3" rx="1" fill="rgba(255,255,255,0.06)" />
      {/* Data node */}
      <rect x="280" y="60" width="70" height="45" rx="8" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <rect x="294" y="72" width="42" height="4" rx="1" fill="rgba(255,255,255,0.1)" />
      <rect x="294" y="80" width="42" height="4" rx="1" fill="rgba(255,255,255,0.07)" />
      <rect x="294" y="88" width="30" height="4" rx="1" fill={ACCENT} opacity="0.3" />
      {/* CRM node */}
      <rect x="60" y="200" width="70" height="45" rx="8" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <circle cx="82" cy="218" r="8" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <circle cx="82" cy="215" r="3" fill="rgba(255,255,255,0.12)" />
      <path d="M74 224 Q82 228 90 224" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
      <rect x="96" y="214" width="24" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
      {/* Report node */}
      <rect x="280" y="200" width="70" height="45" rx="8" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      {/* Mini bar chart */}
      <rect x="294" y="224" width="6" height="14" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="304" y="218" width="6" height="20" rx="1" fill={ACCENT} opacity="0.3" />
      <rect x="314" y="222" width="6" height="16" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="324" y="214" width="6" height="24" rx="1" fill="rgba(255,255,255,0.12)" />
      {/* Connection lines */}
      <line x1="130" y1="82" x2="165" y2="130" stroke={STROKE} strokeWidth="1" strokeDasharray="4 3" />
      <line x1="280" y1="82" x2="235" y2="130" stroke={STROKE} strokeWidth="1" strokeDasharray="4 3" />
      <line x1="130" y1="222" x2="165" y2="170" stroke={STROKE} strokeWidth="1" strokeDasharray="4 3" />
      <line x1="280" y1="222" x2="235" y2="170" stroke={STROKE} strokeWidth="1" strokeDasharray="4 3" />
      {/* Flow dots */}
      <circle cx="148" cy="106" r="2.5" fill="rgba(255,255,255,0.15)" />
      <circle cx="252" cy="106" r="2.5" fill="rgba(255,255,255,0.15)" />
      <circle cx="148" cy="196" r="2.5" fill="rgba(255,255,255,0.15)" />
      <circle cx="252" cy="196" r="2.5" fill="rgba(255,255,255,0.15)" />
      {/* Accent dots */}
      <circle cx="40" cy="150" r="2" fill={ACCENT_LIGHT} opacity="0.3" />
      <circle cx="370" cy="150" r="2.5" fill={ACCENT_LIGHT} opacity="0.2" />
    </svg>
  );
}

export function SEOIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
      <rect width="400" height="300" fill="#111111" />
      <Grid />
      {/* Search bar */}
      <rect x="80" y="30" width="240" height="36" rx="18" fill="rgba(20,20,20,0.95)" stroke={STROKE} strokeWidth="1" />
      <circle cx="102" cy="48" r="6" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
      <line x1="107" y1="53" x2="111" y2="57" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="120" y="44" width="80" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="206" y="44" width="40" height="5" rx="2" fill={ACCENT} opacity="0.3" />
      {/* Search results */}
      {/* Result 1 - top ranking */}
      <rect x="80" y="80" width="240" height="55" rx="8" fill="rgba(20,20,20,0.9)" stroke={ACCENT} strokeWidth="0.8" opacity="0.6" />
      <rect x="96" y="90" width="50" height="5" rx="2" fill={ACCENT_LIGHT} opacity="0.5" />
      <rect x="96" y="100" width="160" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="96" y="112" width="200" height="4" rx="1" fill="rgba(255,255,255,0.06)" />
      <rect x="96" y="120" width="140" height="4" rx="1" fill="rgba(255,255,255,0.04)" />
      {/* #1 badge */}
      <rect x="286" y="88" width="22" height="16" rx="4" fill={ACCENT} opacity="0.5" />
      <text x="297" y="100" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle" opacity="0.8">#1</text>
      {/* Result 2 */}
      <rect x="80" y="145" width="240" height="45" rx="8" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <rect x="96" y="155" width="40" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="96" y="164" width="140" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="96" y="174" width="180" height="3" rx="1" fill="rgba(255,255,255,0.04)" />
      {/* Result 3 */}
      <rect x="80" y="200" width="240" height="45" rx="8" fill="rgba(20,20,20,0.9)" stroke={STROKE} strokeWidth="1" />
      <rect x="96" y="210" width="35" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="96" y="219" width="120" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="96" y="229" width="160" height="3" rx="1" fill="rgba(255,255,255,0.04)" />
      {/* Analytics graph overlay */}
      <path d="M50 280 L100 260 L150 265 L200 230 L250 220 L300 180 L350 140" fill="none" stroke={ACCENT} strokeWidth="1.5" opacity="0.3" />
      <path d="M50 280 L100 260 L150 265 L200 230 L250 220 L300 180 L350 140 L350 280 L50 280 Z" fill={ACCENT} opacity="0.03" />
      {/* Data points on graph */}
      <circle cx="200" cy="230" r="3" fill={ACCENT} opacity="0.4" />
      <circle cx="300" cy="180" r="3" fill={ACCENT} opacity="0.5" />
      <circle cx="350" cy="140" r="3" fill={ACCENT_LIGHT} opacity="0.6" />
      {/* Up arrow */}
      <path d="M360 155 L360 120 L354 128 M360 120 L366 128" stroke={ACCENT_LIGHT} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Accent dots */}
      <circle cx="40" cy="50" r="2" fill={ACCENT_LIGHT} opacity="0.3" />
      <circle cx="380" cy="270" r="2.5" fill={ACCENT_LIGHT} opacity="0.2" />
    </svg>
  );
}
