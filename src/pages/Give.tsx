import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'
import { BRAND, publicUrl } from '../site'

const GIFTS = [
  {
    title: 'Student bursaries',
    text: 'Help an adult finish foundations and step into work without leaving for lack of money.',
  },
  {
    title: 'Shop and tools',
    text: 'Equip the bays with the tools and safety gear a construction or warehouse student needs.',
  },
  {
    title: 'Employer partnerships',
    text: 'Sponsor a site visit, a supervised placement, or an introduction after the Skills Passport is signed.',
  },
]

export function GivePage() {
  usePage('Give — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Give"
        title="Help more people enter the trades."
        lede="Donors and industry partners fund bursaries, tools, and placements that turn foundations into employment."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Give' }]}
      >
        <Link className="button button-gold" to="/contact?as=partner">
          Talk with the school
        </Link>
      </PageIntro>

      <section className="band">
        <div className="wrap card-grid">
          {GIFTS.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band band-stone split-band">
        <div className="wrap split">
          <figure>
            <img
              src={publicUrl('media/practice.jpg')}
              alt="Workers on scaffolding against the evening sky."
            />
          </figure>
          <div>
            <p className="kicker">Partner with the school</p>
            <h2>Write to Purpose Academy about a gift or a hiring partnership.</h2>
            <p>
              Email{' '}
              <a href={`mailto:${BRAND.email}?subject=Donor%20or%20partner%20inquiry`}>{BRAND.email}</a>
              {' '}with what you want to support: bursaries, tools, or placements.
            </p>
            <Link className="button button-navy" to="/contact?as=partner">
              Contact the school
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
