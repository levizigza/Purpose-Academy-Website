import { useEffect } from 'react'

/** Floor plates lock into the side spines as the page is “built.” */
const FLOORS = [0.14, 0.3, 0.46, 0.62, 0.78] as const

/**
 * Two-phase scroll story:
 * 0 → 0.55 — quiet gutter rails while the page scrolls (crew still below).
 * 0.55 → 1 — handoff + build only while the crew strip is actually on screen,
 * so the beam lower / house rise is visible instead of finishing off-page.
 */
function updateLift() {
  const root = document.documentElement
  const crew = document.querySelector('.crew-band') as HTMLElement | null
  if (!crew) {
    root.style.setProperty('--lift', '0')
    root.classList.remove('lift-complete')
    return
  }

  const vh = window.innerHeight
  const rect = crew.getBoundingClientRect()
  const crewDocTop = rect.top + window.scrollY

  // Approach ends when the strip is about to enter the viewport.
  const approachEnd = Math.max(1, crewDocTop - vh * 0.92)
  const approach = Math.min(1, Math.max(0, window.scrollY / approachEnd))

  // Build window: crew top travels from just below the fold → upper third.
  const buildStart = vh * 0.98
  const buildEnd = vh * 0.28
  const build = Math.min(
    1,
    Math.max(0, (buildStart - rect.top) / Math.max(1, buildStart - buildEnd)),
  )

  // Act thresholds in CSS: handoff ~0.55, build stages ~0.74–1.
  const progress = Math.min(1, approach * 0.55 + build * 0.45)

  root.style.setProperty('--lift', progress.toFixed(4))
  root.classList.toggle('lift-complete', progress >= 0.97)
}

function LiftSide({ side }: { side: 'left' | 'right' }) {
  return (
    <div className={`site-lift-side site-lift-side--${side}`}>
      <div className="site-lift-drop">
        {/* Growing I-beam column — quiet rails, no header crane */}
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

        {/* Live load on the hook — dims when the crew scene takes over */}
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
