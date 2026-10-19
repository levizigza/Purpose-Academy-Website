import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { publicUrl } from '../site'

const SERVICES = [
  {
    to: '/learning',
    title: 'How learning works',
    text: 'Twenty steps, six stages, and the three records an instructor can sign: Learned, Practised, Competent.',
  },
  {
    to: '/support',
    title: 'Learner support',
    text: 'Language beside English, computer skill, access, and a clear boundary with settlement and health services.',
  },
  {
    to: '/outcomes',
    title: 'Outcomes',
    text: 'How the school reports participation, completion, competency, employment, and safety.',
  },
  {
    to: '/protection',
    title: 'Student protection',
    text: 'Records, privacy, complaints, and how practical work is supervised.',
  },
]

export function ServicesPage() {
  usePage('Student services — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Student services"
        title="Support around the program."
        lede="How a skill is taught, what support is available, how results are reported, and how the school protects a student."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Student services' }]}
      />

      <section className="band">
        <div className="wrap card-grid">
          {SERVICES.map((item) => (
            <article key={item.to}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <Link className="text-link" to={item.to}>
                Open {item.title}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="band band-stone split-band">
        <div className="wrap split">
          <figure>
            <img
              src={publicUrl('media/hardhat.jpg')}
              alt="A yellow hard hat set on a work surface."
            />
          </figure>
          <div>
            <p className="kicker">Next step</p>
            <h2>Admissions confirms your intake. Student services stays with you through the program.</h2>
            <Link className="button button-gold" to="/admissions">
              Admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
