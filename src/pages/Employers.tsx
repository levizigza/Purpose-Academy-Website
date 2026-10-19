import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { publicUrl } from '../site'

const ROLES = [
  { title: 'Name the tasks', text: 'Tell us what an entry-level person on your site has to do in the first months.' },
  { title: 'Review the curriculum', text: 'Read the competencies and say what is missing, what is unnecessary, and what a Skills Passport would need to show.' },
  { title: 'Offer a supervised look', text: 'A site visit, an interview, or a placement, under a written agreement with the school.' },
  { title: 'Record what you saw', text: 'After a placement, name the task and the result. That note tells the next class what to teach.' },
]

export function EmployersPage() {
  usePage('Employers and partners — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Employers"
        title="For employers who hire entry-level workers."
        lede="Name the tasks a new worker has to do. Read a Skills Passport before the interview. Offer a site visit, an interview, or a supervised placement."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Employers' }]}
      />
      <section className="band split-band">
        <div className="wrap split">
          <figure>
            <img
              src={publicUrl('media/logistics-floor.jpg')}
              alt="A warehouse floor with racks and inventory ready for supervised practice."
            />
          </figure>
          <div>
            <p className="kicker">Why employers write</p>
            <h2>Tell us what an entry-level worker must do in the first months.</h2>
            <p>
              The curriculum and the Skills Passport stay useful when Calgary employers name the real tasks,
              then read the record before they interview.
            </p>
          </div>
        </div>
      </section>
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
            <p className="kicker">What you can read</p>
            <h2>A Skills Passport names the skill, the date, and the instructor who verified it.</h2>
            <p>
              Each line shows the competency, whether it is Learned, Practised, or Competent, the date, and the
              instructor. A credential from another organization is named as theirs. Completion and competence
              are separate lines.
            </p>
            <p>The learner decides when to share it.</p>
          </div>
          <div>
            <p className="kicker">Other partners</p>
            <h2>Who the school works with.</h2>
            <ul className="plain-list">
              <li>Industry associations and unions, for standards and introductions.</li>
              <li>Recognized safety providers, when the work requires their certificate.</li>
              <li>Settlement and community organizations, for referrals into the programs.</li>
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
