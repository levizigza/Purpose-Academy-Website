import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { FAQS, REQUIREMENTS } from '../site'

const STEPS = [
  { n: '01', title: 'Request information', text: 'Say whether you are a prospective learner, an employer, a referring organization, or a future instructor, and which program you mean.' },
  { n: '02', title: 'A conversation about fit', text: 'We ask about the work you want, the experience you have, and whether Construction is the right program.' },
  { n: '03', title: 'Baseline, when a cohort exists', text: 'Language, numeracy, computer skill, safety awareness, and prior experience. The result sets a starting point. It is not a label.' },
  { n: '04', title: 'Program confirmation', text: 'Construction is the only program being prepared for a first cohort. Logistics and Community Support cannot be selected.' },
  { n: '05', title: 'A date, when one exists', text: 'A start date, tuition, and a campus address will be published when they are confirmed.' },
]

export function AdmissionsPage() {
  usePage('Admissions — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Admissions"
        title="How to enquire about Construction."
        lede="No cohort is being enrolled. This is the admissions path the school will use when a start date exists, and the requirements that can be stated today."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Admissions' }]}
      >
        <Link className="button button-gold" to="/contact?as=learner&pathway=construction">
          Request information
        </Link>
      </PageIntro>

      <section className="band">
        <div className="wrap">
          <ol className="admit-steps">
            {STEPS.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band-stone">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Admission requirements</p>
            <h2>Requirements that are set, and requirements that are not.</h2>
            <p>
              A college program normally publishes a schooling rule, an English benchmark, and a mature-learner
              path. Those rules will be published here before enrolment opens. They are not stated as numbers
              yet, because they have not been set.
            </p>
          </div>
          <dl className="fact-list">
            {REQUIREMENTS.map((row) => (
              <div key={row.item}>
                <dt>{row.item}</dt>
                <dd>{row.now}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <div>
            <p className="kicker">What helps</p>
            <h2>What to have ready for the first conversation.</h2>
            <ul className="plain-list">
              <li>Interest in construction work in Alberta.</li>
              <li>Willingness to learn safety and workplace English.</li>
              <li>A way for us to reach you by email.</li>
              <li>Any prior experience, named honestly, including experience from another country.</li>
            </ul>
          </div>
          <div>
            <p className="kicker">What is not required</p>
            <h2>What is not required in order to write to us.</h2>
            <ul className="plain-list">
              <li>You do not need to already speak site English.</li>
              <li>You do not need to already own tools.</li>
              <li>You do not need Alberta Student Aid. It is not available here.</li>
              <li>You should not expect a job offer as a condition of applying.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Questions</p>
            <h2>Common questions.</h2>
          </div>
          <div className="faq">
            {FAQS.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
