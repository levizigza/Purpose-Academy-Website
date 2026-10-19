import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'

export function ProtectionPage() {
  usePage('Student protection — Purpose Academy')

  return (
    <>
      <PageIntro
        kicker="Student protection"
        title="A school is accountable for what it says and what it keeps."
        lede="Policies on this page describe the protections the academy is building. Where a formal procedure is not yet adopted, the page says so, instead of pretending a handbook already exists."
      />
      <section className="band">
        <div className="wrap prose-blocks">
          <article>
            <h2>Records</h2>
            <p>
              The school expects to keep identity for access, progress for instruction, and competency evidence for
              a Skills Passport. It should not collect sensitive information because it might be useful later.
              Practical assessment should show an instructor only the accommodation they need in order to apply it.
            </p>
          </article>
          <article>
            <h2>Privacy</h2>
            <p>
              Alberta’s Personal Information Protection Act is the standard we are designing toward: a reason for
              each collection, limits on who can see a record, and a way to respond if something goes wrong. The
              public notice is on the privacy page.
            </p>
            <p>
              <Link className="text-link" to="/privacy">Read the privacy notice</Link>
            </p>
          </article>
          <article>
            <h2>Complaints</h2>
            <p>
              A person who is unhappy with a decision, a classroom, or the way their information was handled should
              be able to say so and receive a response. A numbered complaints procedure will be published before a
              cohort begins. Until then, write to{' '}
              <a href="mailto:hello@purposeacademy.ca">hello@purposeacademy.ca</a> and describe what happened.
            </p>
          </article>
          <article>
            <h2>Safety</h2>
            <p>
              Practical construction work requires hazard assessment, protective equipment, qualified supervision,
              and a way to record an incident. Those controls are part of opening a workshop or a placement. They
              are not optional extras after marketing.
            </p>
          </article>
          <article>
            <h2>Claims</h2>
            <p>
              Public language has to match the evidence. This website will not describe Purpose Academy as a
              licensed private career college, a Student Aid institution, or an industry-approved school unless
              that status is documented. It will not guarantee work.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
