import certifications from '../data/certifications.js'

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
          <article className="certification-item" key={certification.title}>
            <p className="certification-year">{certification.year}</p>

            <div>
              <h2>{certification.title}</h2>
              <p className="certification-issuer">{certification.issuer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CertificationsPage