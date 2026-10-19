import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { LANGUAGES, publicUrl } from '../site'

export function SupportPage() {
  usePage('Learner support — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Student services"
        title="Help with language, computers, and access."
        lede="Support is there so an adult can meet the standard of the program. It does not lower that standard, and it does not treat a skilled person as a beginner."
        crumbs={[{ to: '/', label: 'Home' }, { to: '/services', label: 'Student services' }, { label: 'Learner support' }]}
      />
      <section className="band band-tight split-band">
        <div className="wrap split">
          <figure>
            <img
              src={publicUrl('media/welcome.jpg')}
              alt="A welcome clipboard and notebook used in community support work."
            />
          </figure>
          <div>
            <p className="kicker">Support at the school</p>
            <h2>Language, computers, and access sit beside the program. They do not replace it.</h2>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap card-grid">
          <article>
            <h2>Language</h2>
            <p>
              Early lessons may show English beside {LANGUAGES.join(', ')}. Audio and pictures carry the idea.
              As comprehension strengthens, the support language recedes and workplace English remains.
            </p>
          </article>
          <article>
            <h2>Digital skill</h2>
            <p>
              Some learners will arrive uneasy with a mouse, a file, or an email. Those skills are part of the
              pathway, taught as workplace tools rather than as a separate computer class with no connection to the job.
            </p>
          </article>
          <article>
            <h2>The instructor</h2>
            <p>
              Dashboards can show a gap. They cannot teach it. Instructors see who is stuck, which safety gate is
              shut, and which practical skill is waiting to be watched.
            </p>
          </article>
          <article>
            <h2>Access</h2>
            <p>
              Information should be readable and navigable for people with different languages, devices, and access
              needs. An accommodation is a control the instructor can apply. It is not a public detail about a person’s health.
            </p>
          </article>
          <article>
            <h2>Prior experience</h2>
            <p>
              Many newcomers are overqualified for the jobs they can get, because the local names, safety rules, and
              proof are missing. The baseline is there to find what someone already knows, not to make them repeat it.
            </p>
          </article>
          <article>
            <h2>Boundaries</h2>
            <p>
              The academy can teach, practise, and document. It does not replace settlement services, health care, or
              legal advice. When a need belongs elsewhere, the honest act is a referral.
            </p>
          </article>
        </div>
        <div className="wrap section-link">
          <Link to="/contact?as=learner">Tell us what support you need</Link>
        </div>
      </section>
    </>
  )
}
