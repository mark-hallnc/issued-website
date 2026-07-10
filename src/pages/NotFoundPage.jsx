import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'

function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The requested Issued page could not be found."
      />
      <section className="container page-hero not-found">
        <p className="eyebrow">404</p>
        <h1>This Issued page is not on the shelf.</h1>
        <p>The link may be outdated or the page may have moved.</p>
        <Link className="button primary" to="/">
          Back to Home
        </Link>
      </section>
    </>
  )
}

export default NotFoundPage
