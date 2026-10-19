import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'

export function ProtectionPage() {
  usePage('Student protection — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Student services"
        title="Records, privacy, complaints, and safety."
        lede="How Purpose Academy keeps records, handles a complaint, and runs practical work."
        crumbs={[{ to: '/', label: 'Home' }, { to: '/services', label: 'Student services' }, { label: 'Student protection' }]}
      />
      <section className="band">
        <div className="wrap prose-blocks">
          <article>
            <h2>Records</h2>
            <p>
              The school keeps identity for access, progress for instruction, and competency evidence for the
              Skills Passport. Sensitive information is collected only when the program needs it. An instructor
              sees an accommodation only so they can apply it.
            </p>
          </article>
          <article>
            <h2>Privacy</h2>
            <p>
              Alberta’s Personal Information Protection Act is the standard: a reason for each collection, limits
              on who can see a record, and a response if something goes wrong. The public notice is on the privacy page.
            </p>
            <p>
              <Link className="text-link" to="/privacy">Read the privacy notice</Link>
            </p>
          </article>
          <article>
            <h2>Complaints</h2>
            <p>
              Write to{' '}
              <a href="mailto:hello@purposeacademy.ca">hello@purposeacademy.ca</a> about a decision, a classroom,
              or the way your information was handled. Describe what happened. Admissions acknowledges the message
              and replies with the next step.
            </p>
          </article>
          <article>
            <h2>Safety</h2>
            <p>
              Practical work runs under a hazard assessment, protective equipment, and qualified supervision.
              Incidents are recorded and read back into the program.
            </p>
          </article>
          <article>
            <h2>The credential</h2>
            <p>
              The Skills Passport is the school’s record of instructor-verified skill. A Red Seal is earned
              through a provincial apprenticeship. Employment preparation and follow-up are part of the program.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
