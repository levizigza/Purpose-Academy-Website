import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'

export function NotFoundPage() {
  usePage('Page not found — Purpose Academy')

  return (
    <PageIntro
      kicker="404"
      title="That page is not part of the academy."
      lede="The address may be mistyped. The programs, admissions, and contact pages are still here."
    >
      <Link className="button button-navy" to="/">
        Back to the start
      </Link>
    </PageIntro>
  )
}
