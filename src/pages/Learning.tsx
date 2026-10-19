import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { STEPS, STAGES, publicUrl } from '../site'

export function LearningPage() {
  const [stage, setStage] = useState<string>('all')
  const [diagram, setDiagram] = useState(false)
  usePage('How learning works — Purpose Academy')
  const visible = stage === 'all' ? STEPS : STEPS.filter((step) => step.stage === stage)

  useEffect(() => {
    if (!diagram) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setDiagram(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [diagram])

  return (
    <>
      <PageIntro
        kicker="How learning works"
        title="Technology supports the learner. A person verifies the skill."
        lede="The academy distinguishes understanding, repetition, recognition, communication, and practical application. A quiz can show the first of those. It cannot award the last."
      />

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Operating stages</p>
            <h2>The twenty steps, grouped so a person can see where they are.</h2>
          </div>
          <div className="stage-filter" role="tablist" aria-label="Filter the journey by stage">
            <button type="button" aria-pressed={stage === 'all'} onClick={() => setStage('all')}>
              All twenty
            </button>
            {STAGES.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={stage === item.n}
                onClick={() => setStage(item.n)}
              >
                {item.n} {item.title}
              </button>
            ))}
          </div>
          <ol className="step-list">
            {visible.map((step) => (
              <li key={step.n}>
                <span>{String(step.n).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band-stone">
        <div className="wrap split">
          <div>
            <p className="kicker">Safety gates</p>
            <h2>Practical work stays closed until the prerequisite is met.</h2>
            <p>
              Safety knowledge, tool orientation, PPE, and site orientation are gates, not suggestions. A gate can
              be passed, blocked, expired, or sent for a person to review. The platform does not infer that someone
              is safe because they attended yesterday.
            </p>
            <p>
              Critical gaps send a learner back to teaching and practice. They are not averaged away by unrelated marks.
            </p>
          </div>
          <div>
            <p className="kicker">The learning platform</p>
            <h2>The website explains the school. The platform is where practice will live.</h2>
            <p>
              Students, instructors, and administrators each have their own door. Learners see the next useful action.
              Instructors see who needs help, which assessment is waiting, and which safety gate is still shut.
            </p>
            <p>
              <a className="text-link" href="https://levizigza.github.io/Purpose-Academy-Application/" target="_blank" rel="noreferrer">
                Open the learning platform
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap diagram-block">
          <div>
            <p className="kicker">Source diagram</p>
            <h2>The original Construction journey.</h2>
            <p>
              The twenty-step drawing is kept because it treats employment as the end of a sequence. The six stages
              on this site are that drawing, edited into an operating model.
            </p>
            <button className="button button-navy" type="button" onClick={() => setDiagram(true)}>
              Open the journey diagram
            </button>
          </div>
          <button className="diagram-thumb" type="button" onClick={() => setDiagram(true)}>
            <img src={publicUrl('media/journey.jpg')} alt="Infographic of the Purpose Academy twenty-step construction student journey." />
          </button>
        </div>
      </section>

      {diagram ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Twenty-step journey diagram">
          <button className="lightbox-close" type="button" onClick={() => setDiagram(false)}>
            Close
          </button>
          <img src={publicUrl('media/journey.jpg')} alt="The twenty-step Purpose Academy construction journey, from login to employment connection." />
        </div>
      ) : null}

      <section className="close">
        <div className="wrap close-inner">
          <h2>Admissions begins with a conversation, not a shopping cart.</h2>
          <Link className="button button-gold" to="/admissions">
            How to join
          </Link>
        </div>
      </section>
    </>
  )
}
