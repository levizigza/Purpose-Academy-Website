import { useEffect, useId, useRef, useState, type FocusEvent, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BRAND, PATHWAYS, publicUrl } from '../site'

export function usePage(title: string) {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = title
    window.scrollTo(0, 0)
  }, [title, pathname])
}

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Purpose Academy, home. Construction, Logistics, and Community Support.">
      <img className="logo-mark" src={publicUrl('brand/logo-lockup.png')} alt="" />
    </Link>
  )
}

function Menu({
  label,
  open,
  setOpen,
  children,
}: {
  label: string
  open: boolean
  setOpen: (value: boolean) => void
  children: ReactNode
}) {
  const pointer = useRef(false)

  function onBlur(event: FocusEvent<HTMLDivElement>) {
    pointer.current = false
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
  }

  return (
    <div
      className={open ? 'menu is-open' : 'menu'}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onMouseDown={() => {
        pointer.current = true
      }}
      onFocus={() => {
        if (!pointer.current) setOpen(true)
      }}
      onBlur={onBlur}
    >
      <button className="menu-button" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        {label}
      </button>
      <div className="menu-panel" hidden={!open}>
        {children}
      </div>
    </div>
  )
}

const STUDY = [
  { to: '/support', label: 'Learner support', note: 'Language, digital skill, access' },
  { to: '/outcomes', label: 'Outcomes', note: 'What we will measure' },
  { to: '/protection', label: 'Student protection', note: 'Records, privacy, complaints' },
]

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [studyOpen, setStudyOpen] = useState(false)
  const location = useLocation()
  const menuId = useId()

  useEffect(() => {
    setOpen(false)
    setProgramsOpen(false)
    setStudyOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-lock', open)
    return () => document.body.classList.remove('nav-lock')
  }, [open])

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="utility">
        <div className="wrap utility-inner">
          <p>Calgary, Alberta · Workforce academy in development</p>
          <p className="utility-links">
            <a href={BRAND.platform} target="_blank" rel="noreferrer">
              {BRAND.platformName}
            </a>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </p>
        </div>
      </div>
      <div className="mast">
        <div className="wrap">
          <Logo />
        </div>
      </div>
      <header className="site-header">
        <div className="wrap header-inner">
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="nav-toggle-bars" aria-hidden="true" />
          </button>
          <nav id={menuId} className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
            <Menu label="Programs" open={programsOpen || open} setOpen={setProgramsOpen}>
              <Link className="menu-lead" to="/programs">
                <strong>All pathways</strong>
                <span>Construction first. Two doors held for later.</span>
              </Link>
              {PATHWAYS.map((item) => (
                <Link key={item.slug} to={`/programs/${item.slug}`}>
                  <strong>{item.name}</strong>
                  <span>{item.status}</span>
                </Link>
              ))}
            </Menu>
            <NavLink to="/admissions">Admissions</NavLink>
            <NavLink to="/learning">How learning works</NavLink>
            <Menu label="Campus" open={studyOpen || open} setOpen={setStudyOpen}>
              {STUDY.map((item) => (
                <Link key={item.to} to={item.to}>
                  <strong>{item.label}</strong>
                  <span>{item.note}</span>
                </Link>
              ))}
            </Menu>
            <NavLink to="/employers">Employers</NavLink>
            <NavLink to="/about">About</NavLink>
            <Link className="button button-gold nav-cta" to="/contact">
              Request information
            </Link>
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <Logo />
            <p className="footer-line">{BRAND.line}</p>
            <p>
              A Calgary workforce academy being built around occupational language, safety, supervised practice,
              and evidence a person can show.
            </p>
          </div>
          <div>
            <h2>Study</h2>
            <ul>
              <li><Link to="/programs/construction">Construction</Link></li>
              <li><Link to="/programs/logistics">Logistics</Link></li>
              <li><Link to="/programs/community-support">Community Support</Link></li>
              <li><Link to="/learning">How learning works</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
            </ul>
          </div>
          <div>
            <h2>The academy</h2>
            <ul>
              <li><Link to="/support">Learner support</Link></li>
              <li><Link to="/employers">Employers and partners</Link></li>
              <li><Link to="/outcomes">Outcomes</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/protection">Student protection</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h2>Visit</h2>
            <p>
              {BRAND.place}
              <br />
              Campus address to be confirmed
            </p>
            <p>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </p>
            <p>
              <a href={BRAND.platform} target="_blank" rel="noreferrer">
                Open the learning platform
              </a>
            </p>
          </div>
        </div>
        <div className="wrap footer-note">
          <p>
            Purpose Academy is a workforce-readiness initiative under development. These pages describe the model
            being built. They are not an offer of a licensed program, Alberta Student Aid, a regulated trade
            certificate, or a job. Tuition, schedule, and credential wording will be published when they are confirmed.
          </p>
          <p>
            Purpose Academy is based in Calgary, on the traditional territories of the Niitsitapi (Blackfoot
            Confederacy), including the Siksika, Piikani, and Kainai; the Tsuut’ina; and the Îyârhe Nakoda Nations,
            including the Bearspaw, Chiniki, and Goodstoney. This land is also home to the Métis Nation of Alberta.
            We hold workforce education as a responsibility to the people who live here.
          </p>
        </div>
        <div className="wrap footer-base">
          <p>© {new Date().getFullYear()} Purpose Academy</p>
          <p>Photography via Unsplash. Site photographs are not pictures of Purpose Academy cohorts.</p>
        </div>
      </footer>
    </>
  )
}

export function Crumbs({ items }: { items: { to?: string; label: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={item.label}>
              {item.to && !last ? <Link to={item.to}>{item.label}</Link> : <span aria-current={last ? 'page' : undefined}>{item.label}</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export function PageIntro({
  kicker,
  title,
  lede,
  crumbs,
  children,
}: {
  kicker: string
  title: string
  lede: string
  crumbs?: { to?: string; label: string }[]
  children?: ReactNode
}) {
  return (
    <header className="page-intro">
      <div className="wrap">
        {crumbs ? <Crumbs items={crumbs} /> : null}
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
        {children}
      </div>
    </header>
  )
}
