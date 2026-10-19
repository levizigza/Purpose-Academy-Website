import { Link } from 'react-router-dom'
import { PageIntro, usePage } from '../components/Chrome'

export function NotFoundPage() {
  usePage('Page not found — Purpose Academy')

  return (
    <PageIntro
      kicker="404"
      title="Page not found."
      lede="The address may be out of date. Home, programs, admissions, and contact are in the menu."
    >
      <Link className="button button-navy" to="/">
        Home
      </Link>
    </PageIntro>
  )
}
