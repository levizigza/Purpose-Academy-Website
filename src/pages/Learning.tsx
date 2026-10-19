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
        kicker="Student services"
        title="How a skill is taught, practised, and signed off."
        lede="A quiz can show that a person understood a lesson. It cannot show that they can do the work. An instructor makes that decision and records it."
        crumbs={[{ to: '/', label: 'Home' }, { to: '/services', label: 'Student services' }, { label: 'How learning works' }]}
      />

      <section className="band band-tight">
        <div className="wrap tool-strip" aria-label="Tools taught in Construction">
          <figure>
            <img src={publicUrl('media/hammer.jpg')} alt="A claw hammer." />
            <figcaption>Hammer</figcaption>
          </figure>
          <figure>
            <img src={publicUrl('media/drill.jpg')} alt="A cordless drill." />
            <figcaption>Drill</figcaption>
          </figure>
          <figure>
            <img src={publicUrl('media/hardhat.jpg')} alt="A yellow hard hat." />
            <figcaption>Hard hat</figcaption>
          </figure>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Operating stages</p>
            <h2>The twenty steps, in the order a student meets them.</h2>
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
            <h2>This website explains the school. Practice will happen on the learning platform.</h2>
            <p>
              Students, instructors, and administrators each sign in separately. A learner sees the next task.
              An instructor sees who needs help, which assessment is waiting, and which safety requirement is still closed.
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
            <h2>The Construction journey, in the original drawing.</h2>
            <p>
              The twenty-step drawing ends at employment. The six stages on this website are that sequence,
              grouped so a student can see where they are.
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
          <h2>Apply, then start at the baseline.</h2>
          <Link className="button button-gold" to="/admissions">
            Admissions
          </Link>
        </div>
      </section>
    </>
  )
}
