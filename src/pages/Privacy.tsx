import { PageIntro, usePage } from '../components/Chrome'
import { BRAND } from '../site'

export function PrivacyPage() {
  usePage('Privacy — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Privacy"
        title="What this website does with your information."
        lede="This is the public website. It is separate from the learning platform, which will hold student records when a cohort exists."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Privacy' }]}
      />
      <section className="band">
        <div className="wrap narrow prose">
          <h2>Information you send us</h2>
          <p>
            The request form opens an email to {BRAND.email}. It does not store your message on a Purpose Academy
            server. Your own email provider then handles delivery. Write only what you are comfortable putting in
            an email. Please do not include health information, identity documents, or other sensitive records in
            that first note.
          </p>
          <h2>What we do not do here</h2>
          <p>
            This website does not run advertising trackers, and it does not ask you to create an account. The
            learning platform is a different product, with its own sign-in, and it is where training records will live.
          </p>
          <h2>The standard we are building toward</h2>
          <p>
            Learner information, once a program is operating, should follow Alberta’s Personal Information Protection
            Act: collect what the program needs, limit who can see it, keep it only as long as the purpose requires,
            and tell people when a breach creates a real risk. A privacy officer will be named before student records
            are collected in earnest.
          </p>
          <h2>Questions</h2>
          <p>
            Email <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}
