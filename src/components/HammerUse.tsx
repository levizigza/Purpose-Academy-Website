/** Loop: a worker drives a nail — matches the Mixkit “use the hammer” clip. */
export function HammerUse() {
  return (
    <div className="hammer-use" aria-hidden="true">
      <svg className="hammer-use-scene" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet">
        <rect width="320" height="200" fill="#071e3d" />
        <rect y="168" width="320" height="32" fill="#041526" />
        <path d="M0 168 H320" stroke="rgba(232,163,23,0.45)" strokeWidth="1.5" />

        {/* Workbench + lumber */}
        <rect x="118" y="128" width="150" height="18" rx="1" fill="#6e5a3a" />
        <rect x="124" y="118" width="138" height="12" rx="1" fill="#8a7349" />

        {/* Nail — sinks as the hammer strikes */}
        <g className="hammer-use-nail">
          <rect x="188" y="102" width="4" height="22" rx="1" fill="#9eb0c4" />
          <rect x="185" y="100" width="10" height="4" rx="1" fill="#c9d3de" />
        </g>

        {/* Worker */}
        <g transform="translate(96 168)">
          <ellipse cx="0" cy="-78" rx="16" ry="8" fill="#e8a317" />
          <circle cx="0" cy="-62" r="11" fill="#f4efe4" />
          <rect x="-16" y="-50" width="32" height="36" rx="3" fill="#e8a317" />
          <rect x="-14" y="-12" width="11" height="28" rx="2" fill="#d9d0c2" />
          <rect x="3" y="-12" width="11" height="28" rx="2" fill="#d9d0c2" />
          <g className="hammer-use-arm">
            <rect x="10" y="-44" width="48" height="8" rx="2" fill="#f4efe4" />
            <g className="hammer-use-tool">
              <rect x="52" y="-70" width="7" height="38" rx="1" fill="#c4a574" />
              <rect x="44" y="-76" width="22" height="10" rx="1" fill="#9eb0c4" />
            </g>
          </g>
        </g>

        <text
          x="160"
          y="28"
          textAnchor="middle"
          fill="rgba(246,241,231,0.55)"
          fontSize="11"
          fontFamily="var(--sans), sans-serif"
          letterSpacing="0.12em"
        >
          USE THE HAMMER
        </text>
      </svg>
    </div>
  )
}
