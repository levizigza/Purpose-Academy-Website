import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'

const ROLES = [
  { title: 'Name the tasks', text: 'Tell us what an entry-level person on your site has to do in the first months.' },
  { title: 'Review the curriculum', text: 'Read the competencies and say what is missing, what is unnecessary, and what a Skills Passport would need to show.' },
  { title: 'Offer a supervised look', text: 'A site visit, an interview, or a placement, under a written agreement, once the program is ready to place someone.' },
  { title: 'Record what you saw', text: 'After a placement, name the task and the result. General praise does not tell the next cohort what to teach.' },
]

export function EmployersPage() {
  usePage('Employers and partners — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Employers"
        title="For employers who hire entry-level workers."
        lede="We are asking Calgary employers to name the tasks a new worker must do, and to say what a Skills Passport would need to show. Employer names and placement rates are not published here. We do not have them."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Employers' }]}
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
            <h2>A Skills Passport names the skill, the date, and the person who verified it.</h2>
            <p>
              The passport is meant to show a competency, its status, when it was verified, and the role of the
              assessor. It must say when a credential came from someone else. It must not imply that an internal
              record is a Red Seal, or that completion alone means the person can run the equipment.
            </p>
            <p>Sharing it is the learner’s choice. It is not a public profile.</p>
          </div>
          <div>
            <p className="kicker">Other partners</p>
            <h2>Employers are one of the organizations this school needs.</h2>
            <ul className="plain-list">
              <li>Industry associations and unions, for standards and introductions.</li>
              <li>Recognized safety providers, when an external certificate is actually required.</li>
              <li>Settlement and community organizations, for referrals with a clear boundary.</li>
            </ul>
            <Link className="button button-navy" to="/contact?as=employer">
              Contact us as an employer
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
