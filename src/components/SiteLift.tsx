import { useEffect } from 'react'

function updateLift() {
  const root = document.documentElement
  const crew = document.querySelector('.crew-band') as HTMLElement | null
  if (!crew) {
    root.style.setProperty('--lift', '0')
    root.classList.remove('lift-complete')
    return
  }

  const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight)
  const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll))
  root.style.setProperty('--lift', progress.toFixed(4))
  root.classList.toggle('lift-complete', progress >= 0.94)
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
      <div className="site-lift-side site-lift-side--left">
        <svg className="site-lift-crane" viewBox="0 0 72 120" preserveAspectRatio="xMidYMin meet">
          <path d="M18 118 V22" fill="none" stroke="#c9d3de" strokeWidth="3" />
          <path d="M18 28 H64" fill="none" stroke="#c9d3de" strokeWidth="3" />
          <path d="M18 28 L6 44" fill="none" stroke="#c9d3de" strokeWidth="2.5" />
          <circle cx="18" cy="28" r="3.5" fill="#e8a317" />
        </svg>
        <div className="site-lift-drop">
          <span className="site-lift-cable" />
          <span className="site-lift-beam" />
        </div>
      </div>

      <div className="site-lift-side site-lift-side--right">
        <svg className="site-lift-crane" viewBox="0 0 72 120" preserveAspectRatio="xMidYMin meet">
          <path d="M54 118 V22" fill="none" stroke="#c9d3de" strokeWidth="3" />
          <path d="M8 28 H54" fill="none" stroke="#c9d3de" strokeWidth="3" />
          <path d="M54 28 L66 44" fill="none" stroke="#c9d3de" strokeWidth="2.5" />
          <circle cx="54" cy="28" r="3.5" fill="#e8a317" />
        </svg>
        <div className="site-lift-drop">
          <span className="site-lift-cable" />
          <span className="site-lift-beam" />
        </div>
      </div>
    </div>
  )
}
