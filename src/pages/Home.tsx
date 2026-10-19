import { Link } from 'react-router-dom'
import { usePage } from '../components/Chrome'
import { AUDIENCES, FACTS, LANGUAGES, PATHWAYS, STATES, STAGES, publicUrl } from '../site'

export function HomePage() {
  usePage('Purpose Academy — Calgary')

  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker kicker-light">Calgary · Construction</p>
            <h1>
              <span>From</span>
              <span>understanding</span>
              <em>to<br />employment.</em>
            </h1>
            <p className="lede lede-light">
              Purpose Academy prepares adults for entry-level work in Alberta. The first program is Construction.
              It covers the English a job site uses, the safety required before practical work, and the tasks an
              instructor can watch and record. Enrolment is not open.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" to="/programs/construction">
                View Construction
              </Link>
              <Link className="button button-ghost" to="/contact">
                Request information
              </Link>
            </div>
            <p className="hero-fine">
              Competent means an instructor has seen the work. The learning platform does not assign that status,
              and this website does not promise a job.
            </p>
          </div>
          <figure className="hero-figure">
            <img src={publicUrl('media/site.jpg')} alt="A crew in hard hats stands above a concrete building under construction." />
            <figcaption>
              <span>Supervised practice</span>
              An instructor watches the skill. A completed video does not count as proof.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="measure" aria-label="What the school is organized around">
        <div className="wrap measure-grid">
          <p><strong>Construction</strong> first program</p>
          <p><strong>Six stages</strong> from entry to work</p>
          <p><strong>Three states</strong> learned, practised, competent</p>
          <p><strong>{LANGUAGES.length} languages</strong> beside English, for a time</p>
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Before you enquire</p>
            <h2>The facts, in one place.</h2>
            <p>
              Place, status, language, assessment, cost, and student aid. Where a decision has not been made,
              the line says it has not been made.
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
            <p className="kicker">Programs</p>
            <h2>Three programs. Only Construction can be discussed for a first cohort.</h2>
            <p>
              Logistics and Community Support are published because they are part of the plan. Neither is open
              for enrolment.
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
                  <Link to={`/programs/${item.slug}`}>View program</Link>
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
            <h2>Another language can explain the lesson. English is what the job requires.</h2>
            <p>
              A lesson may start with a picture, the English word, and a meaning in a language the learner
              already knows. When the learner can use the English, the translation is removed. The assessment
              stays in English.
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
            Support languages: {LANGUAGES.join(', ')}. A learner who already knows hammer, drill, and stud is
            not kept on those words. Header, flashing, and joist are where the extra pictures belong.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">The student journey</p>
            <h2>From registration to the job search.</h2>
            <p>
              The program is twenty steps, grouped into six stages. Employment preparation is the last stage.
              Finishing a lesson is not the same as being ready for a site.
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
            <Link to="/learning">See the twenty steps</Link>
          </p>
        </div>
      </section>

      <section className="band band-stone">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Evidence</p>
            <h2>Three different records of a skill.</h2>
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
            <p className="kicker">Why one program first</p>
            <h2>Language, safety, and a record have to be taught together.</h2>
            <p>
              Some people know the trade and do not yet know the English name of the tool. Some speak English
              and have not learned Canadian site safety. Some can pass a quiz and have never been watched doing
              the work. Some are capable and have no local record to show an employer.
            </p>
            <p>
              Teaching only one of those leaves the others in the way. Construction puts workplace English,
              safety, supervised practice, and a written record in one program, and ends with help preparing
              for employment.
            </p>
            <Link className="text-link" to="/about">Read the purpose of the school</Link>
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
            <h2>Learners, employers, and referring organizations.</h2>
          </div>
          <div className="card-grid">
            {AUDIENCES.map((item) => (
              <article key={item.as}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link className="text-link" to={`/contact?as=${item.as}`}>
                  {item.as === 'learner' ? 'Request learner information' : item.as === 'employer' ? 'Contact us as an employer' : 'Contact us as a referring organization'}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="close">
        <div className="wrap close-inner">
          <div>
            <p className="kicker kicker-light">Contact</p>
            <h2>Ask what is ready. We will answer with the status of Construction.</h2>
          </div>
          <div className="close-actions">
            <Link className="button button-gold" to="/contact?as=learner&pathway=construction">
              Request information
            </Link>
            <Link className="button button-ghost" to="/contact?as=employer">
              For employers
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
