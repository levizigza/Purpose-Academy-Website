import { Link, useParams } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { PATHWAYS, pathwayBySlug } from '../site'

export function ProgramsPage() {
  usePage('Programs — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Programs"
        title="Pathways into work, built one at a time."
        lede="College sites often show every program as if it were equally open. This one will not. Construction is the pathway under development. The other two are the architecture, waiting for proof."
      />
      <section className="band">
        <div className="wrap program-list">
          {PATHWAYS.map((item) => (
            <article key={item.slug} className={`program-row tone-${item.tone}`}>
              <img src={item.image} alt={item.imageAlt} />
              <div>
                <p className="chip">{item.status}</p>
                <h2>{item.name}</h2>
                <p>{item.promise}</p>
                <Link className="button button-navy" to={`/programs/${item.slug}`}>
                  View {item.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export function ProgramPage() {
  const { slug } = useParams()
  const program = pathwayBySlug(slug)
  usePage(program ? `${program.name} — Purpose Academy` : 'Program — Purpose Academy')

  if (!program) {
    return (
      <PageIntro
        kicker="Programs"
        title="That pathway is not on the map."
        lede="Construction, Logistics, and Community Support are the three doors. One of those names will get you there."
      >
        <Link className="button button-navy" to="/programs">
          All pathways
        </Link>
      </PageIntro>
    )
  }

  return (
    <>
      <PageIntro
        kicker={program.status}
        title={program.name}
        lede={program.promise}
        crumbs={[
          { to: '/', label: 'Home' },
          { to: '/programs', label: 'Programs' },
          { label: program.name },
        ]}
      />
      <section className="band">
        <div className="wrap program-layout">
          <div>
            <figure className="program-photo">
              <img src={program.image} alt={program.imageAlt} />
            </figure>
            <h2>Who it is for</h2>
            <p>{program.forWhom}</p>
            <h2>What the pathway studies</h2>
            <ul className="study-list">
              {program.studies.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <h2>What a person should leave with</h2>
            <ul className="plain-list">
              {program.leavesWith.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="glance">
            <h2>At a glance</h2>
            <dl>
              <div>
                <dt>Place</dt>
                <dd>Calgary, Alberta</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{program.phase}</dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>Learned, Practised, Competent</dd>
              </div>
              <div>
                <dt>Record</dt>
                <dd>Skills Passport, not a Red Seal</dd>
              </div>
              <div>
                <dt>Tuition</dt>
                <dd>Published when confirmed</dd>
              </div>
              <div>
                <dt>Student Aid</dt>
                <dd>Not designated</dd>
              </div>
            </dl>
            <Link className="button button-gold" to={`/contact?as=learner&pathway=${program.slug}`}>
              Ask about {program.name}
            </Link>
            <h2 className="glance-next">This pathway is not</h2>
            <ul>
              {program.notThis.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
