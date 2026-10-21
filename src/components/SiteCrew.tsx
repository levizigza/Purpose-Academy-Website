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

/**
 * Build strip story (scroll-driven via --lift):
 * Act B — in-scene crane lowers one beam; a worker takes it.
 * Act C — that beam raises a house while the day runs dawn → dusk.
 */
export function SiteCrew() {
  return (
    <div className="crew-band" aria-hidden="true">
      <svg className="crew-scene" viewBox="0 0 1400 248" preserveAspectRatio="xMidYMid meet">
        {/* Sky layers — dawn base, dusk overlay fades in with --lift */}
        <rect className="crew-sky crew-sky--dawn" width="1400" height="248" fill="#8ec4e0" />
        <rect className="crew-sky crew-sky--dusk" width="1400" height="248" fill="#1a2744" />
        <circle className="crew-sun" cx="160" cy="56" r="22" />

        {/* Ground */}
        <rect className="crew-ground" y="208" width="1400" height="40" fill="#1e2f28" />
        <path className="crew-ground-line" d="M0 208 H1400" fill="none" stroke="rgba(232,163,23,0.5)" strokeWidth="1.5" />

        {/* Quiet spine stubs from the page gutters */}
        <rect className="crew-spine crew-spine--left" x="48" y="24" width="7" height="184" rx="1" fill="#9eb0c4" />
        <rect className="crew-spine crew-spine--right" x="1345" y="24" width="7" height="184" rx="1" fill="#9eb0c4" />

        {/* In-scene crane — owns the handoff load */}
        <g className="crew-crane" fill="none" stroke="#d7dee6" strokeWidth="2.6">
          <path d="M120 208 V28" />
          <path d="M120 40 H320" />
          <path d="M120 40 L98 62" />
          <circle cx="120" cy="40" r="4" fill="#e8a317" stroke="none" />
        </g>

        {/* Cable + beam lowered in Act B (scaleY / translateY from CSS) */}
        <g className="crew-drop">
          <g transform="translate(300 40)">
            <rect className="crew-drop-cable" x="-1.2" y="0" width="2.4" height="148" fill="#d7dee6" />
          </g>
          <rect className="crew-drop-beam" x="272" y="40" width="56" height="10" rx="1" fill="#c4a574" />
        </g>

        {/* Receiver at the drop zone */}
        <g className="crew-receiver" transform="translate(300 208)">
          <Worker vest="#e8a317" />
          <g className="crew-receiver-arm">
            <rect x="10" y="-28" width="34" height="6" rx="2" fill="#f4efe4" />
          </g>
        </g>

        {/* Carrier walks the beam toward the house */}
        <g className="crew-carrier">
          <g transform="translate(0 208)">
            <rect className="crew-carried" x="-8" y="-58" width="64" height="9" rx="2" fill="#c4a574" />
            <Worker />
          </g>
        </g>

        {/* House rises in stages from the same beam language */}
        <g className="crew-house" transform="translate(820 208)">
          {/* Foundation / sill */}
          <g className="build-sill" fill="#c4a574">
            <rect x="0" y="-14" width="320" height="12" rx="1" />
            <rect x="8" y="-6" width="304" height="6" rx="1" fill="#9a7d4e" />
          </g>

          {/* Wall studs + plates */}
          <g className="build-walls" fill="none" stroke="#e7d7b4" strokeWidth="3.2">
            <path d="M16 -14 V-118 H304 V-14" />
            <path d="M64 -14 V-118 M112 -14 V-118 M160 -14 V-118 M208 -14 V-118 M256 -14 V-118" />
            <path d="M16 -66 H304" />
          </g>

          {/* Roof ridge */}
          <g className="build-roof" fill="none" stroke="#c4a574" strokeWidth="4">
            <path d="M8 -118 L160 -168 L312 -118" />
            <path d="M160 -168 V-118" strokeWidth="3" />
          </g>

          {/* Finishing crew on the frame */}
          <g className="crew-framer" transform="translate(150 -90)">
            <Worker vest="#e8a317" />
            <g className="crew-framer-pass">
              <rect x="-40" y="-16" width="36" height="7" rx="1" fill="#c4a574" />
            </g>
          </g>
          <g className="crew-roofer" transform="translate(250 -130)">
            <Worker />
          </g>
        </g>

        {/* Beam stack — staging lumber mid-site */}
        <g className="crew-stack" fill="#c4a574">
          <rect x="560" y="188" width="100" height="10" />
          <rect x="568" y="176" width="84" height="10" />
          <rect className="crew-stack-top" x="576" y="164" width="68" height="10" />
        </g>
      </svg>
    </div>
  )
}
