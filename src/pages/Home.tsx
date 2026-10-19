import { Link } from 'react-router-dom'
import { usePage } from '../components/Chrome'
import { AUDIENCES, FACTS, LANGUAGES, PATHWAYS, STATES, STAGES, publicUrl } from '../site'

export function HomePage() {
  usePage('Purpose Academy — Calgary')

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker kicker-light">Calgary · Construction pathway in development</p>
            <h1>
              <span>From</span>
              <span>understanding</span>
              <em>to employment.</em>
            </h1>
            <p className="lede lede-light">
              You can know the work and still lose the chance at the English name of the part, the safety rule,
              or the proof. Purpose Academy is being built to hold those together for entry-level construction.
              A cohort is not open today.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" to="/programs/construction">
                Explore Construction
              </Link>
              <Link className="button button-ghost" to="/contact">
                Request information
              </Link>
            </div>
            <p className="hero-fine">
              The instructor stays in the room. The platform does not declare someone competent, and this site
              does not promise a job.
            </p>
          </div>
          <figure className="hero-figure">
            <img src={publicUrl('media/site.jpg')} alt="A crew in hard hats stands above a concrete building under construction." />
            <figcaption>
              <span>Supervised practice</span>
              Human verification, not a video completed.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="measure" aria-label="What the school is organized around">
        <div className="wrap measure-grid">
          <p><strong>Construction</strong> first pathway</p>
          <p><strong>Six stages</strong> from entry to work</p>
          <p><strong>Three states</strong> learned, practised, competent</p>
          <p><strong>{LANGUAGES.length} languages</strong> beside English, for a time</p>
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Before you enquire</p>
            <h2>The facts that have to sit beside the promise.</h2>
            <p>
              A serious program page tells you the place, the status, the language, the assessment, and the
              cost. Where Purpose Academy does not have an answer yet, the page says so.
            </p>
          </div>
          <dl className="fact-list">
            {FACTS.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Pathways</p>
            <h2>One academy. Three doors. Only one is being built now.</h2>
            <p>
              Logistics and Community Support reuse the same architecture later. They are on the site so the
              shape of the school is honest, not because a person can enrol in them today.
            </p>
          </div>
          <div className="pathway-grid">
            {PATHWAYS.map((item) => (
              <article key={item.slug} className={`pathway-card tone-${item.tone}`}>
                <img src={item.image} alt={item.imageAlt} />
                <div>
                  <p className="chip">{item.status}</p>
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                  <Link to={`/programs/${item.slug}`}>Read the pathway</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-navy bridge">
        <div className="wrap">
          <div className="section-head section-head-light">
            <p className="kicker kicker-light">Occupational language</p>
            <h2>The support language explains the thing. English does the job.</h2>
            <p>
              A learner may begin with a picture, the English word, the sound of it, and a meaning in a language
              they already know. As the word becomes usable, the translation leaves. The standard stays.
            </p>
          </div>
          <ol className="bridge-steps">
            <li>
              <span>01</span>
              <h3>See and hear</h3>
              <p className="word">Hammer</p>
              <p className="gloss">Martillo · a tool used to drive or remove nails.</p>
            </li>
            <li>
              <span>02</span>
              <h3>English only</h3>
              <p className="word">Hammer</p>
              <p className="gloss">The picture remains. The translation does not.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Use it</h3>
              <p className="word sentence">Bring the hammer.</p>
              <p className="gloss">A sentence a site would actually say.</p>
            </li>
            <li>
              <span>04</span>
              <h3>Show it</h3>
              <p className="word">Verified</p>
              <p className="gloss">An instructor watches the skill on the tool.</p>
            </li>
          </ol>
          <p className="bridge-note">
            Designed support languages: {LANGUAGES.join(', ')}. If a learner already knows hammer, drill, and
            stud, the system should not keep teaching them. Header, flashing, and joist get the extra pictures.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">The student journey</p>
            <h2>Twenty steps, held in six stages.</h2>
            <p>
              Employment is the end of the sequence. Finishing a lesson is not the same thing as being ready
              for a site.
            </p>
          </div>
          <ol className="stage-row">
            {STAGES.map((stage) => (
              <li key={stage.id}>
                <span>{stage.n}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </li>
            ))}
          </ol>
          <p className="section-link">
            <Link to="/learning">Walk the twenty steps</Link>
          </p>
        </div>
      </section>

      <section className="band band-stone">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Evidence</p>
            <h2>Learned is not competent.</h2>
          </div>
          <ol className="states">
            {STATES.map((state, index) => (
              <li key={state.name}>
                <span>0{index + 1}</span>
                <h3>{state.name}</h3>
                <p>{state.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band split-band">
        <div className="wrap split">
          <figure>
            <img src={publicUrl('media/plans.jpg')} alt="Hands drawing a building plan on a wooden table, with a scale rule beside the sheet." />
          </figure>
          <div>
            <p className="kicker">Why one pathway</p>
            <h2>The barriers arrive together. The school should too.</h2>
            <p>
              A person may know the trade and still miss the English name of the part. Another may speak English
              and not yet know Canadian site safety. Another can pass a quiz and has never been watched doing the
              work. Another is capable and has no employer to show it to.
            </p>
            <p>
              Teaching only one of those things leaves the others in place. Purpose Academy is designed as a
              workforce-integration system: communication, technical foundations, supervised practice, verified
              evidence, and a transition toward employment.
            </p>
            <Link className="text-link" to="/about">Read the purpose of the academy</Link>
          </div>
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap context">
          <div>
            <p className="kicker">Sector context</p>
            <h2>Alberta construction is replacing a generation of workers.</h2>
            <p>
              BuildForce Canada projects that Alberta construction will need to add about 48,800 workers by 2035,
              driven mainly by roughly 43,700 retirements, with a possible shortfall of as many as 5,300. That is
              context for why a construction pathway matters. It is not a promise that a graduate will be hired.
            </p>
            <a
              className="text-link"
              href="https://www.buildforce.ca/en/press-release/construction-activity-rises-in-alberta-to-2035-as-non-residential-growth-offsets-moderating-residential-demands/"
              target="_blank"
              rel="noreferrer"
            >
              BuildForce Canada, Alberta outlook
            </a>
          </div>
          <aside>
            <p className="context-figure">48,800</p>
            <p>workers Alberta construction is projected to need by 2035. A sector figure. Not an outcome of this academy.</p>
          </aside>
        </div>
      </section>

      <section className="band band-stone">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Who this is for</p>
            <h2>Three people. Three different questions.</h2>
          </div>
          <div className="card-grid">
            {AUDIENCES.map((item) => (
              <article key={item.as}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link className="text-link" to={`/contact?as=${item.as}`}>
                  Write as {item.as === 'learner' ? 'a learner' : item.as === 'employer' ? 'an employer' : 'a partner'}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="close">
        <div className="wrap close-inner">
          <div>
            <p className="kicker kicker-light">Begin a conversation</p>
            <h2>Tell us who you are. We will tell you what is actually ready.</h2>
          </div>
          <div className="close-actions">
            <Link className="button button-gold" to="/contact?as=learner&pathway=construction">
              I want to learn
            </Link>
            <Link className="button button-ghost" to="/contact?as=employer">
              I hire
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
