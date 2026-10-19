import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { TEAM, VALUES, publicUrl } from '../site'

export function AboutPage() {
  usePage('About — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="About"
        title="A workforce academy for people who are ready to work and still meeting a wall."
        lede="Across Canada, newcomers and job seekers are willing. Language, technical vocabulary, digital confidence, safety knowledge, and the absence of a local record can stand in the way at the same time. Purpose Academy is being built to move those barriers together."
      />
      <section className="band split-band">
        <div className="wrap split">
          <figure>
            <img src={publicUrl('media/calgary.jpg')} alt="A red-brick corner building in downtown Calgary, with towers behind it and snow along the street." />
            <figcaption>Calgary. A street address will be published when a facility is confirmed.</figcaption>
          </figure>
          <div>
            <p className="kicker">Mission</p>
            <h2>Practical, accessible workforce education.</h2>
            <p>
              Help adults build and demonstrate the communication, safety, digital, technical, and workplace
              competencies they need to pursue entry-level employment in Alberta. The idea a person should be
              able to repeat is simple: understanding becomes employment only when an instructor has seen the work.
            </p>
            <p className="kicker">Vision</p>
            <h2>A record someone else can trust.</h2>
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
            <h2>How the school is supposed to behave.</h2>
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
            <h2>Founding builders.</h2>
            <p>
              Full roles, portraits, and biographies will be published as the academy grows. We will not invent
              titles to fill a page.
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
            <Link to="/contact?as=instructor">Instructors who want to teach can write to us</Link>
          </p>
        </div>
      </section>
    </>
  )
}
