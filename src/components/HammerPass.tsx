/** SITEWISE-style loop: one worker offers a hammer, the other takes it. */
export function HammerPass() {
  return (
    <div className="hammer-pass" aria-hidden="true">
      <svg className="hammer-pass-scene" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet">
        <rect width="320" height="200" fill="#071e3d" />
        <rect y="168" width="320" height="32" fill="#041526" />
        <path d="M0 168 H320" stroke="rgba(232,163,23,0.45)" strokeWidth="1.5" />

        {/* Left worker — offers */}
        <g className="hammer-pass-giver" transform="translate(88 168)">
          <ellipse cx="0" cy="-78" rx="16" ry="8" fill="#e8a317" />
          <circle cx="0" cy="-62" r="11" fill="#f4efe4" />
          <rect x="-16" y="-50" width="32" height="36" rx="3" fill="#e8a317" />
          <rect x="-14" y="-12" width="11" height="28" rx="2" fill="#d9d0c2" />
          <rect x="3" y="-12" width="11" height="28" rx="2" fill="#d9d0c2" />
          <g className="hammer-pass-arm hammer-pass-arm--give">
            <rect x="12" y="-40" width="42" height="8" rx="2" fill="#f4efe4" />
            <g className="hammer-pass-tool">
              <rect x="48" y="-52" width="7" height="34" rx="1" fill="#c4a574" />
              <rect x="42" y="-58" width="19" height="9" rx="1" fill="#9eb0c4" />
            </g>
          </g>
        </g>

        {/* Right worker — receives */}
        <g className="hammer-pass-taker" transform="translate(232 168)">
          <ellipse cx="0" cy="-78" rx="16" ry="8" fill="#e8a317" />
          <circle cx="0" cy="-62" r="11" fill="#f4efe4" />
          <rect x="-16" y="-50" width="32" height="36" rx="3" fill="#f4efe4" />
          <rect x="-14" y="-12" width="11" height="28" rx="2" fill="#d9d0c2" />
          <rect x="3" y="-12" width="11" height="28" rx="2" fill="#d9d0c2" />
          <g className="hammer-pass-arm hammer-pass-arm--take">
            <rect x="-54" y="-40" width="42" height="8" rx="2" fill="#f4efe4" />
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
          PASS ME THE HAMMER
        </text>
      </svg>
    </div>
  )
}
