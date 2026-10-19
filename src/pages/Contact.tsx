import { type FormEvent, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { BRAND, PATHWAYS } from '../site'

const ROLES = [
  { id: 'learner', label: 'Prospective learner' },
  { id: 'employer', label: 'Employer' },
  { id: 'partner', label: 'Community partner' },
  { id: 'instructor', label: 'Instructor' },
  { id: 'other', label: 'Someone else' },
] as const

type Errors = Partial<Record<'first' | 'last' | 'email' | 'message' | 'consent', string>>

export function ContactPage() {
  usePage('Apply — Purpose Academy')
  const [params] = useSearchParams()
  const initialRole = ROLES.some((role) => role.id === params.get('as')) ? params.get('as') ?? 'learner' : 'learner'
  const initialPathway = PATHWAYS.some((item) => item.slug === params.get('pathway'))
    ? params.get('pathway') ?? 'construction'
    : 'construction'

  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState(initialRole)
  const [pathway, setPathway] = useState(initialPathway)
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState('')

  const roleLabel = useMemo(() => ROLES.find((item) => item.id === role)?.label ?? 'Inquiry', [role])
  const pathwayLabel = PATHWAYS.find((item) => item.slug === pathway)?.name ?? 'Construction'

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Errors = {}
    if (first.trim().length < 2) next.first = 'Enter your first name.'
    if (last.trim().length < 2) next.last = 'Enter your last name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = 'Enter an email address we can reply to.'
    if (message.trim().length < 12) next.message = 'Tell us a little more, at least a sentence.'
    if (!consent) next.consent = 'Confirm that we may reply by email.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const body = [
      `Name: ${first.trim()} ${last.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim() || 'Not provided'}`,
      `I am: ${roleLabel}`,
      `Program: ${pathwayLabel}`,
      '',
      message.trim(),
    ].join('\n')

    const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(`Purpose Academy — ${roleLabel}`)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(body)
  }

  return (
    <>
      <PageIntro
        kicker="Contact"
        title="Apply, or write to the school."
        lede="Learners, employers, referring organizations, and instructors. Admissions reads the message and replies by email with the next step."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Contact' }]}
      />
      <section className="band">
        <div className="wrap contact-layout">
          <div>
            <h2>What happens next</h2>
            <ol className="plain-list numbered">
              <li>Your email opens with the message ready to send to admissions.</li>
              <li>Send it. If the email app does not open, copy the note and send it to {BRAND.email}.</li>
              <li>Admissions replies with the next intake, tuition, and where class meets, or with the answer to an employer or partner question.</li>
            </ol>
            <p>
              Place: {BRAND.place}
              <br />
              Email: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </p>
          </div>
          {sent ? (
            <div className="form-card sent" role="status">
              <h2>Your note is ready to send.</h2>
              <p>
                If your email app did not open, copy this and send it to {BRAND.email}.
              </p>
              <pre>{sent}</pre>
              <button className="button button-navy" type="button" onClick={() => setSent('')}>
                Edit the message
              </button>
            </div>
          ) : (
            <form className="form-card" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <label>
                  First name
                  <input value={first} onChange={(event) => setFirst(event.target.value)} autoComplete="given-name" aria-invalid={Boolean(errors.first)} />
                  {errors.first ? <span className="field-error">{errors.first}</span> : null}
                </label>
                <label>
                  Last name
                  <input value={last} onChange={(event) => setLast(event.target.value)} autoComplete="family-name" aria-invalid={Boolean(errors.last)} />
                  {errors.last ? <span className="field-error">{errors.last}</span> : null}
                </label>
              </div>
              <label>
                Email
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} />
                {errors.email ? <span className="field-error">{errors.email}</span> : null}
              </label>
              <label>
                Phone <span className="optional">optional</span>
                <input value={phone} onChange={(event) => setPhone(event.target.value)} type="tel" autoComplete="tel" />
              </label>
              <div className="form-row">
                <label>
                  I am
                  <select value={role} onChange={(event) => setRole(event.target.value)}>
                    {ROLES.map((item) => (
                      <option key={item.id} value={item.id}>{item.label}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Program
                  <select value={pathway} onChange={(event) => setPathway(event.target.value)}>
                    {PATHWAYS.map((item) => (
                      <option key={item.slug} value={item.slug}>{item.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label>
                Your message
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={5} aria-invalid={Boolean(errors.message)} />
                {errors.message ? <span className="field-error">{errors.message}</span> : null}
              </label>
              <label className="check">
                <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} />
                <span>Admissions may reply to me by email.</span>
              </label>
              {errors.consent ? <span className="field-error">{errors.consent}</span> : null}
              <button className="button button-gold" type="submit">
                Send to admissions
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
