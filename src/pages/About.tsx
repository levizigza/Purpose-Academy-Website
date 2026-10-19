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
        lede="Purpose Academy is being built for people who are ready to work and are held back by workplace English, safety knowledge, computer skill, or the lack of a local record. Construction is the first program."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'About' }]}
      />
      <section className="band split-band">
        <div className="wrap split">
          <figure>
            <img src={publicUrl('media/calgary.jpg')} alt="A red-brick corner building in downtown Calgary, with towers behind it and snow along the street." />
            <figcaption>Calgary. A street address will be published when a facility is confirmed.</figcaption>
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
            <h2>The rules the school is being built to follow.</h2>
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
            <h2>The people building the school.</h2>
            <p>
              Roles, portraits, and biographies will be published as they are confirmed. Titles are not listed
              here until they are.
            </p>
          </div>
          <ul className="team">
            {TEAM.map((person) => (
              <li key={person.name}>
                <span aria-hidden="true">{person.name.split(' ').map((part) => part[0]).join('')}</span>
                <strong>{person.name}</strong>
                <em>{person.role}</em>
              </li>
            ))}
          </ul>
          <p className="section-link">
            <Link to="/contact?as=instructor">Instructors: request information</Link>
          </p>
        </div>
      </section>
    </>
  )
}
