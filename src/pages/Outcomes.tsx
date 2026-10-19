import { PageIntro, usePage } from '../components/Chrome'

const MEASURES = [
  { name: 'Participation', text: 'Who started, and whether they were the people the program said it was for.' },
  { name: 'Completion', text: 'Who finished the pathway they enrolled in. Completion is recorded. It is not called competence.' },
  { name: 'Competency', text: 'What an authorized assessor verified, against a named version of the skill.' },
  { name: 'Employment', text: 'Interviews, offers, and hires, followed at 30, 90, and 180 days. Reported when there is a cohort to follow.' },
  { name: 'Safety and quality', text: 'Incidents, complaints, and employer feedback, read as inputs to the next version of the program.' },
]

export function OutcomesPage() {
  usePage('Outcomes — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Outcomes"
        title="We will publish numbers when we have earned them."
        lede="There is no placement rate on this site, because there is no cohort yet to measure. The outcome system is designed now so that, later, the figures mean something."
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
          <h2>What a number on this website would have to survive.</h2>
          <p>
            A sector forecast is not an academy result. A quiz score is not a job. A partnership conversation is
            not an endorsement. When Purpose Academy reports outcomes, the method will sit beside the figure:
            who was counted, over what period, and what the number does not include.
          </p>
        </div>
      </section>
    </>
  )
}
