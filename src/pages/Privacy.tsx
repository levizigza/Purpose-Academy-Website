import { PageIntro, usePage } from '../components/Chrome'
import { BRAND } from '../site'

export function PrivacyPage() {
  usePage('Privacy — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Privacy"
        title="What this website does with your information."
        lede="This is the public website. Student records live on the learning platform, which has its own sign-in."
        crumbs={[{ to: '/', label: 'Home' }, { label: 'Privacy' }]}
      />
      <section className="band">
        <div className="wrap narrow prose">
          <h2>Information you send us</h2>
          <p>
            The admissions form opens an email to {BRAND.email}. Your email provider delivers it. Write what you
            want admissions to read. Leave health information, identity documents, and other sensitive records
            for a later, private step.
          </p>
          <h2>This website</h2>
          <p>
            The public site does not run advertising trackers and does not ask you to create an account. Training
            records are kept on the learning platform, behind its own sign-in.
          </p>
          <h2>The standard</h2>
          <p>
            Learner information follows Alberta’s Personal Information Protection Act: collect what the program
            needs, limit who can see it, keep it only as long as the purpose requires, and tell people when a
            breach creates a real risk. Questions go to {BRAND.email}.
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
