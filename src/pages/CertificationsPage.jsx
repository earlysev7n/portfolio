import certifications from '../data/certifications.js'
import SpotlightCard from '../components/ui/SpotlightCard.jsx'

function CertificationsPage() {
  return (
    <section className="site-container page-section">
      <header className="page-heading">
        <p className="section-eyebrow">Certifications</p>
        <h1>Courses and credentials.</h1>
        <p>
          Certifications completed while developing my knowledge of
          networking, computer systems, and artificial intelligence.
        </p>
      </header>

      <div className="certification-list">
        {certifications.map((certification) => (
          <SpotlightCard
            as="article"
            className="certification-item"
            key={certification.title}
          >
            <p className="certification-year">{certification.year}</p>

            <div>
              <h2>{certification.title}</h2>
              <p className="certification-issuer">{certification.issuer}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}

export default CertificationsPage
