import { PageIntro, usePage } from '../components/Chrome'

const MEASURES = [
  { name: 'Participation', text: 'Who started, and whether they were the people the program said it was for.' },
  { name: 'Completion', text: 'Who finished the program they enrolled in. Completion is recorded. It is not called competence.' },
  { name: 'Competency', text: 'What an authorized assessor verified, against a named version of the skill.' },
  { name: 'Employment', text: 'Interviews, offers, and hires, followed at 30, 90, and 180 days. Reported when there is a cohort to follow.' },
  { name: 'Safety and quality', text: 'Incidents, complaints, and employer feedback, read as inputs to the next version of the program.' },
]

export function OutcomesPage() {
  usePage('Outcomes — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Student services"
        title="What will be reported, once there is a cohort."
        lede="There is no placement rate on this site. There is no cohort to measure. The five measures below are the ones the school intends to publish, with the method beside the figure."
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
          <h2>What a published number will have to include.</h2>
          <p>
            A sector forecast is not a result of this school. A quiz score is not a job. A conversation with an
            employer is not an endorsement. When Purpose Academy reports a figure, the note beside it will say
            who was counted, over what period, and what the figure does not include.
          </p>
        </div>
      </section>
    </>
  )
}
