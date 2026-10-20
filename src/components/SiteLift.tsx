import { useEffect } from 'react'

/** Floor plates lock into the side spines as the page is “built.” */
const FLOORS = [0.14, 0.3, 0.46, 0.62, 0.78] as const

/**
 * Progress is the scroll that brings the crew band into the receive zone —
 * so the lowering story ends when the workers can take the beam, not at an
 * arbitrary % of document height.
 */
function updateLift() {
  const root = document.documentElement
  const crew = document.querySelector('.crew-band') as HTMLElement | null
  if (!crew) {
    root.style.setProperty('--lift', '0')
    root.classList.remove('lift-complete')
    return
  }

  const crewTop = crew.getBoundingClientRect().top + window.scrollY
  const receiveLine = window.innerHeight * 0.7
  const travel = Math.max(1, crewTop - receiveLine)
  const progress = Math.min(1, Math.max(0, window.scrollY / travel))

  root.style.setProperty('--lift', progress.toFixed(4))
  root.classList.toggle('lift-complete', progress >= 0.97)
}

function Crane({ side }: { side: 'left' | 'right' }) {
  const mirror = side === 'right'
  return (
    <svg
      className="site-lift-crane"
      viewBox="0 0 72 120"
      preserveAspectRatio="xMidYMin meet"
      style={mirror ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M18 118 V22" fill="none" stroke="#c9d3de" strokeWidth="3" />
      <path d="M18 28 H64" fill="none" stroke="#c9d3de" strokeWidth="3" />
      <path d="M18 28 L6 44" fill="none" stroke="#c9d3de" strokeWidth="2.5" />
      <circle cx="18" cy="28" r="3.5" fill="#e8a317" />
    </svg>
  )
}

function LiftSide({ side }: { side: 'left' | 'right' }) {
  return (
    <div className={`site-lift-side site-lift-side--${side}`}>
      <Crane side={side} />

      <div className="site-lift-drop">
        {/* Growing I-beam column — the page as structure */}
        <div className="site-lift-spine" aria-hidden="true">
          <span className="site-lift-column" />
          {FLOORS.map((floor) => (
            <span
              key={floor}
              className="site-lift-floor"
              style={{ ['--floor' as string]: floor }}
            />
          ))}
        </div>

        {/* Live load on the hook */}
        <span className="site-lift-cable" />
        <span className="site-lift-hook" />
        <span className="site-lift-beam" />
      </div>
    </div>
  )
}

export function SiteLift() {
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateLift)
    }

    updateLift()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.documentElement.style.removeProperty('--lift')
      document.documentElement.classList.remove('lift-complete')
    }
  }, [])

  return (
    <div className="site-lift" aria-hidden="true">
      <LiftSide side="left" />
      <LiftSide side="right" />
    </div>
  )
}
