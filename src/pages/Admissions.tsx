import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { FAQS, REQUIREMENTS } from '../site'

const STEPS = [
  { n: '01', title: 'Apply', text: 'Name the program, the work you want, and the experience you already have. Admissions reads every application.' },
  { n: '02', title: 'A conversation', text: 'We talk about the program, your starting point, and the support language you want beside English.' },
  { n: '03', title: 'Baseline', text: 'Language, numeracy, computer skill, safety awareness, and prior experience. The result sets where you begin.' },
  { n: '04', title: 'Program', text: 'Construction, Logistics, or Community Support. Admissions confirms the program and the intake.' },
  { n: '05', title: 'Intake', text: 'You receive the start date, tuition, and the Calgary location for your class.' },
]

export function AdmissionsPage() {
  usePage('Admissions — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Admissions"
        title="Apply to Purpose Academy."
        lede="Choose a program, tell us the work you want, and admissions replies with the next intake, tuition, and where class meets in Calgary."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Admissions' }]}
      >
        <Link className="button button-gold" to="/contact?as=learner&pathway=construction">
          Apply
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
            <h2>Who the programs are for.</h2>
            <p>
              Adults preparing for entry-level work in Alberta. Experience helps. It is not the price of admission.
              Classes and assessments are in English, with a support language while that English is forming.
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
            <h2>What to have ready.</h2>
            <ul className="plain-list">
              <li>The program you want: Construction, Logistics, or Community Support.</li>
              <li>A short account of the work you have done, including work from another country.</li>
              <li>An email address admissions can reply to.</li>
              <li>The support language you want beside English, if you want one.</li>
            </ul>
          </div>
          <div>
            <p className="kicker">Brought into the program</p>
            <h2>What the school teaches you.</h2>
            <ul className="plain-list">
              <li>The English the job uses, starting from a picture and a word.</li>
              <li>Safety, before practical work begins.</li>
              <li>The tools of the program. You do not need to own them to apply.</li>
              <li>A Skills Passport an instructor signs, and help preparing for employment.</li>
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
