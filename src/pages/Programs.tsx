import { Link, useParams } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { PATHWAYS, pathwayBySlug } from '../site'

export function ProgramsPage() {
  usePage('Programs — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Programs"
        title="Programs."
        lede="Three foundations programs. Construction, Logistics, and Community Support. Each one ends with a Skills Passport an instructor has signed."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Programs' }]}
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
        title="That program is not listed."
        lede="The programs are Construction, Logistics, and Community Support."
      >
        <Link className="button button-navy" to="/programs">
          All programs
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
        mark={program.tone === 'construction' ? 'beam' : undefined}
        crumbs={[
          { to: '/', label: 'Home' },
          { to: '/programs', label: 'Programs' },
          { label: program.name },
        ]}
      />
      <section className="band">
        <div className="wrap program-layout">
          <div>
            <figure className={`program-photo tone-${program.tone}`}>
              <img src={program.image} alt={program.imageAlt} />
            </figure>
            <h2>Who it is for</h2>
            <p>{program.forWhom}</p>
            <h2>What the program covers</h2>
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
                <dt>Language</dt>
                <dd>English, with support in six languages</dd>
              </div>
              <div>
                <dt>Level</dt>
                <dd>{program.phase}</dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>Learned, Practised, Competent</dd>
              </div>
              <div>
                <dt>Credential</dt>
                <dd>Skills Passport</dd>
              </div>
              <div>
                <dt>Tuition</dt>
                <dd>Confirmed at admission</dd>
              </div>
              <div>
                <dt>Apply</dt>
                <dd>Admissions replies with the next intake</dd>
              </div>
            </dl>
            <Link className="button button-gold" to={`/contact?as=learner&pathway=${program.slug}`}>
              Apply to {program.name}
            </Link>
            <h2 className="glance-next">The credential</h2>
            <ul>
              {program.credential.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
