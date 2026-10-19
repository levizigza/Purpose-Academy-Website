import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { FAQS } from '../site'

const STEPS = [
  { n: '01', title: 'Request information', text: 'Tell us whether you are a learner, an employer, a partner, or a future instructor. Say which pathway you mean.' },
  { n: '02', title: 'A conversation about fit', text: 'We talk about the work you want, the experience you have, and whether Construction is the right door.' },
  { n: '03', title: 'Baseline, when a cohort exists', text: 'Language, numeracy, digital skill, safety awareness, and prior experience. The result places a person. It does not brand them.' },
  { n: '04', title: 'Pathway confirmation', text: 'Construction is the only pathway being prepared for a first cohort. The others are not available to select.' },
  { n: '05', title: 'A date, published when it is real', text: 'Cohort dates, tuition, and a campus address will appear here when they are confirmed. They will not appear before that.' },
]

export function AdmissionsPage() {
  usePage('Admissions — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Admissions"
        title="A clear way in, without a false open date."
        lede="Purpose Academy is not enrolling a cohort today. The admissions path is published now so that, when a Construction cohort is real, nobody has to guess what happens first."
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
        <div className="wrap split">
          <div>
            <p className="kicker">What helps</p>
            <h2>Come as you are. Bring the truth about your starting point.</h2>
            <ul className="plain-list">
              <li>Interest in construction work in Alberta.</li>
              <li>Willingness to learn safety and workplace English.</li>
              <li>A way for us to reach you by email.</li>
              <li>Any prior experience, named honestly, including experience from another country.</li>
            </ul>
          </div>
          <div>
            <p className="kicker">What we will not ask you to pretend</p>
            <h2>You do not need a finished credential to start the conversation.</h2>
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
            <h2>Asked plainly.</h2>
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
