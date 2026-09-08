import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="site-container page-placeholder">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>

      <Link className="return-link" to="/">
        Return home
      </Link>
    </section>
  )
}

export default NotFoundPage