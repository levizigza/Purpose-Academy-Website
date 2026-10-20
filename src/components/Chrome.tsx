import { useEffect, useId, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BRAND, PATHWAYS, publicUrl } from '../site'
import { SiteCrew } from './SiteCrew'
import { SiteLift } from './SiteLift'

export function usePage(title: string) {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = title
    window.scrollTo(0, 0)
  }, [title, pathname])
}

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Purpose Academy, home">
      <img className="logo-mark" src={publicUrl('brand/logo-mark.png')} alt="" />
      <span>
        <span className="logo-name">Purpose Academy</span>
        <span className="logo-place">Calgary</span>
      </span>
    </Link>
  )
}

const NAV: { to: string; label: string; end?: boolean }[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/programs', label: 'Programs' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/services', label: 'Student services' },
  { to: '/employers', label: 'Employers' },
  { to: '/about', label: 'About' },
  { to: '/give', label: 'Give' },
  { to: '/contact', label: 'Contact' },
]

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuId = useId()

  useEffect(() => {
    setOpen(false)
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
      <SiteLift />
      <header className="site-header">
        <div className="wrap header-inner">
          <Logo />
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
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
            <Link className="button button-gold nav-cta" to="/contact?as=learner">
              Apply
            </Link>
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <SiteCrew />
        <div className="wrap footer-grid">
          <div>
            <Logo />
            <p className="footer-line">{BRAND.line}</p>
            <p>
              A Calgary trades school. Construction, Logistics, and Community Support, taught from the words of the job to a record an employer can read.
            </p>
          </div>
          <div>
            <h2>Study</h2>
            <ul>
              {PATHWAYS.map((item) => (
                <li key={item.slug}>
                  <Link to={`/programs/${item.slug}`}>{item.name}</Link>
                </li>
              ))}
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/learning">How learning works</Link></li>
            </ul>
          </div>
          <div>
            <h2>The academy</h2>
            <ul>
              <li><Link to="/services">Student services</Link></li>
              <li><Link to="/employers">Employers</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/give">Give</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h2>Visit</h2>
            <p>
              {BRAND.place}
              <br />
              Calgary campus
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
            Purpose Academy is based in Calgary, on the traditional territories of the Niitsitapi (Blackfoot
            Confederacy), including the Siksika, Piikani, and Kainai; the Tsuut’ina; and the Îyârhe Nakoda Nations,
            including the Bearspaw, Chiniki, and Goodstoney. This land is also home to the Métis Nation of Alberta.
            We hold workforce education as a responsibility to the people who live here.
          </p>
        </div>
        <div className="wrap footer-base">
          <p>© {new Date().getFullYear()} Purpose Academy</p>
          <p>
            Photographs and occupational-language audio are from the learning platform: Unsplash images and
            Microsoft Edge neural speech. The “Show it” clip is Mixkit stock video. The photographs show the work.
            They are not pictures of our students.
          </p>
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
            <li key={`${item.label}-${index}`}>
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
  mark,
  children,
}: {
  kicker: string
  title: string
  lede: string
  crumbs?: { to?: string; label: string }[]
  mark?: 'cone' | 'beam'
  children?: ReactNode
}) {
  const kickerClass =
    mark === 'cone' ? 'kicker kicker-cone' : mark === 'beam' ? 'kicker kicker-beam' : 'kicker'

  return (
    <header className="page-intro">
      <div className="wrap">
        {crumbs ? <Crumbs items={crumbs} /> : null}
        <p className={kickerClass}>
          {mark === 'beam' ? <span className="beam-word beam-word-sm">{kicker}</span> : kicker}
        </p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
        {children}
      </div>
    </header>
  )
}
