import { Link } from 'react-router-dom'
import { usePage } from '../components/Chrome'
import { LanguageBridge } from '../components/LanguageBridge'
import { BeamWord } from '../components/SiteMarks'
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
              Purpose Academy is a Calgary trades school for adults entering the workforce. Students learn the
              English a job uses, the safety that comes first, and the tasks an instructor watches and signs.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" to="/programs/construction">
                View Construction
              </Link>
              <Link className="button button-ghost" to="/contact?as=learner">
                Apply
              </Link>
            </div>
            <p className="hero-fine">
              Competent is signed by an instructor. The learning platform keeps the record.
            </p>
          </div>
          <figure className="hero-figure">
            <img src={publicUrl('media/site.jpg')} alt="Two workers in orange safety gear on a concrete deck among rebar and a cut-off saw." />
            <figcaption>
              <span>Supervised practice</span>
              An instructor watches the skill and signs the record.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="measure" aria-label="What the school is organized around">
        <div className="wrap measure-grid">
          <p><strong>Three programs</strong> one standard</p>
          <p><strong>Six stages</strong> from entry to work</p>
          <p><strong>Three states</strong> learned, practised, competent</p>
          <p><strong>{LANGUAGES.length} languages</strong> beside English</p>
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">The school</p>
            <h2>Calgary. Three programs. One record.</h2>
            <p>
              Place, programs, language, assessment, credential, and how to apply.
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
            <h2>Construction, Logistics, and Community Support.</h2>
            <p>
              Each program teaches the language of the job, the safety the job requires, and a record an instructor signs.
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

      <LanguageBridge />

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">The student journey</p>
            <h2>From registration to the job search.</h2>
            <p>
              Twenty steps, in six stages. The last stage is employment preparation and follow-up after students leave.
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
                <h3>
                  <BeamWord>{state.name}</BeamWord>
                </h3>
                <p>{state.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band split-band">
        <div className="wrap split">
          <figure>
            <img src={publicUrl('media/plans.jpg')} alt="A crew in hard hats and high-visibility vests sets steel mesh into a foundation." />
          </figure>
          <div>
            <p className="kicker">How the school teaches</p>
            <h2>Language, safety, and a record are taught together.</h2>
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
              the labour market these programs are built for.
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
            <p>workers Alberta construction is projected to need by 2035, according to BuildForce Canada.</p>
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
                  {item.as === 'learner' ? 'Apply' : item.as === 'employer' ? 'Talk with us' : 'Refer a learner'}
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
            <h2>Apply for the next intake.</h2>
          </div>
          <div className="close-actions">
            <Link className="button button-gold" to="/contact?as=learner&pathway=construction">
              Apply
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
