import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'

const ROLES = [
  { title: 'Name the tasks', text: 'Tell us what an entry-level person on your site or floor actually has to do in the first months.' },
  { title: 'Review the curriculum', text: 'Look at the competencies and say what is missing, what is extra, and what would make a Skills Passport useful.' },
  { title: 'Host a real look', text: 'A site visit, an interview, or a supervised placement, under a written agreement when the program is ready.' },
  { title: 'Say what you saw', text: 'Structured feedback after a placement. Praise without a record does not help the next cohort.' },
]

export function EmployersPage() {
  usePage('Employers and partners — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Employers and partners"
        title="A partnership is a job, not a logo."
        lede="Purpose Academy will not publish employer names, industry approval, or placement rates it does not have. If you hire or supervise, the useful first step is to name the tasks an entry-level person must do, and to say what evidence would make you trust a Skills Passport."
      />
      <section className="band">
        <div className="wrap role-grid">
          {ROLES.map((role, index) => (
            <article key={role.title}>
              <span>0{index + 1}</span>
              <h2>{role.title}</h2>
              <p>{role.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="band band-stone">
        <div className="wrap split">
          <div>
            <p className="kicker">What you would be able to read</p>
            <h2>A Skills Passport with a date, a scope, and a human name behind the check.</h2>
            <p>
              The passport is meant to show a competency, its status, when it was verified, and the role of the
              assessor. It must say when a credential came from someone else. It must not imply that an internal
              record is a Red Seal, or that completion alone means the person can run the equipment.
            </p>
            <p>Sharing it is the learner’s choice. It is not a public profile.</p>
          </div>
          <div>
            <p className="kicker">Who else belongs in the room</p>
            <h2>Employers are one partner. They are not the only one.</h2>
            <ul className="plain-list">
              <li>Industry associations and unions, for standards and introductions.</li>
              <li>Recognized safety providers, when an external certificate is actually required.</li>
              <li>Settlement and community organizations, for referrals with a clear boundary.</li>
            </ul>
            <Link className="button button-navy" to="/contact?as=employer">
              Start an employer conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
