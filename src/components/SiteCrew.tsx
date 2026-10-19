function Worker({
  hat = '#e8a317',
  vest = '#f4efe4',
}: {
  hat?: string
  vest?: string
}) {
  return (
    <g className="crew-body">
      <ellipse cx="0" cy="-46" rx="13" ry="7" fill={hat} />
      <circle cx="0" cy="-34" r="8" fill="#f4efe4" />
      <rect x="-11" y="-26" width="22" height="28" rx="3" fill={vest} />
      <rect x="-10" y="2" width="8" height="22" rx="2" fill="#d9d0c2" />
      <rect x="2" y="2" width="8" height="22" rx="2" fill="#d9d0c2" />
    </g>
  )
}

export function SiteCrew() {
  return (
    <div className="crew-band" aria-hidden="true">
      <svg className="crew-scene" viewBox="0 0 1400 132" preserveAspectRatio="xMidYMid meet">
        <rect width="1400" height="132" fill="#041526" />
        <circle className="crew-sun" cx="78" cy="42" r="16" />
        <rect y="112" width="1400" height="20" fill="#071e3d" />
        <path d="M0 112 H1400" stroke="rgba(232,163,23,0.55)" strokeWidth="1.5" />

        {/* Left landing crane — receives the descending left beam */}
        <g fill="none" stroke="#d7dee6" strokeWidth="2.5">
          <path d="M70 112 V22" />
          <path d="M70 36 H210" />
          <path d="M70 36 L52 54" />
        </g>
        <g className="crew-receive crew-receive--left">
          <path d="M186 36 V78" fill="none" stroke="#d7dee6" strokeWidth="2" />
          <rect className="crew-landed-beam" x="164" y="78" width="44" height="9" rx="1" fill="#c4a574" />
        </g>

        {/* Right landing crane */}
        <g fill="none" stroke="#d7dee6" strokeWidth="2.5" transform="translate(1180 0)">
          <path d="M70 112 V22" />
          <path d="M70 36 H-70" />
          <path d="M70 36 L82 54" />
        </g>
        <g className="crew-receive crew-receive--right">
          <path d="M1194 36 V78" fill="none" stroke="#d7dee6" strokeWidth="2" />
          <rect className="crew-landed-beam" x="1172" y="78" width="44" height="9" rx="1" fill="#c4a574" />
        </g>

        <g className="crew-take" transform="translate(280 108)">
          <Worker vest="#e8a317" />
          <g className="crew-arm">
            <rect x="8" y="-22" width="28" height="6" rx="2" fill="#f4efe4" />
            <rect x="32" y="-30" width="16" height="7" rx="1" fill="#9eb0c4" />
            <rect x="36" y="-23" width="4" height="18" rx="1" fill="#6e5a3a" />
          </g>
          <rect x="46" y="-62" width="8" height="66" fill="#e7d7b4" />
        </g>

        <g className="crew-walk">
          <g transform="translate(0 108)">
            <rect className="crew-carried" x="-6" y="-58" width="62" height="8" rx="2" fill="#c4a574" />
            <Worker />
          </g>
        </g>

        <g className="crew-stack" fill="#c4a574">
          <rect x="700" y="100" width="92" height="10" />
          <rect x="708" y="88" width="76" height="10" />
          <rect className="crew-stack-top" x="716" y="76" width="60" height="10" />
        </g>

        <g fill="none" stroke="#e7d7b4" strokeWidth="3">
          <path d="M920 112 V36 H1280 V112" />
          <path d="M968 112 V36 M1016 112 V36 M1064 112 V36 M1112 112 V36 M1160 112 V36 M1208 112 V36 M1256 112 V36" />
          <path d="M920 72 H1280" />
        </g>

        <g className="crew-frame-work" transform="translate(1040 68)">
          <Worker vest="#e8a317" />
          <g className="crew-pass">
            <rect x="-46" y="-18" width="40" height="7" rx="1" fill="#c4a574" />
          </g>
        </g>

        <g transform="translate(1220 48)">
          <Worker />
          <rect x="-34" y="-8" width="28" height="6" rx="1" fill="#c4a574" />
        </g>
      </svg>
    </div>
  )
}
