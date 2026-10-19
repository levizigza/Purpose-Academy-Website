import { PageIntro, usePage } from '../components/Chrome'

const MEASURES = [
  { name: 'Participation', text: 'Who started, and whether they were the people the program said it was for.' },
  { name: 'Completion', text: 'Who finished the program they enrolled in. Completion and competence are recorded separately.' },
  { name: 'Competency', text: 'What an instructor verified, against the named skill, with the date.' },
  { name: 'Employment', text: 'Interviews, offers, and hires, followed at 30, 90, and 180 days after students leave.' },
  { name: 'Safety and quality', text: 'Incidents, complaints, and employer feedback, read as inputs to the next version of the program.' },
]

export function OutcomesPage() {
  usePage('Outcomes — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Student services"
        title="How the school reports results."
        lede="Five measures. When a figure is published, the note beside it names who was counted, the period, and the method."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Student services' }, { label: 'Outcomes' }]}
      />
      <section className="band">
        <div className="wrap measure-list">
          {MEASURES.map((item, index) => (
            <article key={item.name}>
              <span>0{index + 1}</span>
              <h2>{item.name}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="band band-navy">
        <div className="wrap narrow">
          <h2>A figure names its method.</h2>
          <p>
            Participation, completion, competency, employment, and safety are counted separately. A BuildForce
            forecast is the labour market. A quiz is Learned. A signed station is Competent. An interview is
            recorded as an interview. The note beside a published figure says who was counted and over what period.
          </p>
        </div>
      </section>
    </>
  )
}
