import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { TEAM, VALUES, publicUrl } from '../site'

export function AboutPage() {
  usePage('About — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="About"
        title="A Calgary school for adults entering the workforce."
        lede="Purpose Academy teaches adults the workplace English, safety, computer skill, and trade foundations they need for entry-level work in Alberta, and gives them a record an employer can read."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'About' }]}
      />
      <section className="band split-band">
        <div className="wrap split">
          <figure>
            <img src={publicUrl('media/calgary.jpg')} alt="The Calgary skyline and the Calgary Tower, seen across the Bow River from a bridge." />
            <figcaption>Calgary, Alberta.</figcaption>
          </figure>
          <div>
            <p className="kicker">Mission</p>
            <h2>Prepare adults for entry-level work in Alberta.</h2>
            <p>
              Help adults learn and demonstrate the communication, safety, computer, technical, and workplace
              skills required for entry-level employment. Understanding becomes employment only when an instructor
              has seen the work.
            </p>
            <p className="kicker">Vision</p>
            <h2>A record an employer can read.</h2>
            <p>
              Learners should be able to move from understanding to practice to verified competency. Employers and
              public partners should be able to see what was taught, demonstrated, and measured.
            </p>
          </div>
        </div>
      </section>
      <section className="band band-stone">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Values</p>
            <h2>How the school is run.</h2>
          </div>
          <div className="card-grid">
            {VALUES.map((value) => (
              <article key={value.name}>
                <h3>{value.name}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">People</p>
            <h2>Founding builders</h2>
            <p>
              The people building Purpose Academy. We name them now with honesty: full roles, bios, and portraits
              will be published as the school grows — we will not invent titles to fill a page.
            </p>
          </div>
          <div className="team-grid">
            {TEAM.map((person) => {
              const initials = person.name
                .split(' ')
                .map((part) => part[0])
                .join('')
              return (
                <article key={person.name} className="team-card site-crate">
                  <div className="team-photo" aria-hidden="true">
                    <span className="team-photo-placeholder">{initials}</span>
                    <span className="team-photo-label">Portrait soon</span>
                  </div>
                  <div className="team-info">
                    <h3>{person.name}</h3>
                    <p className="team-role">{person.role}</p>
                    <p className="team-bio">{person.focus}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <p className="section-link">
            <Link to="/contact?as=instructor">Instructors: write to the school</Link>
          </p>
        </div>
      </section>
    </>
  )
}
