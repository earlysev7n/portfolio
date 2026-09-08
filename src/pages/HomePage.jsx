function HomePage() {
  return (
    <section className="site-container home-hero">
      <div className="hero-content">
        <img
          className="profile-photo"
          src="/images/profile.jpg"
          alt="Temporary profile placeholder"
        />

        <h1>John Jerick Agapito</h1>

        <div className="hero-socials" aria-label="Social links">
          <a
            className="hero-social-link"
            href="https://github.com/earlysev7n"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="hero-social-link"
            href="https://linkedin.com/in/john-jerick-agapito-30651a337"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="hero-social-link"
            href="mailto:johnjerickagapito@gmail.com"
          >
            Email
          </a>
        </div>

        <h2>Software Developer — Flutter, Firebase & AI Integrations</h2>

        <p className="hero-description">
          I&apos;m a Computer Science undergraduate who builds practical
          cross-platform applications with Flutter and Firebase. I&apos;m
          currently leading OneFit, a fitness and nutrition recommendation
          system using optimization algorithms and the OpenAI API.
        </p>

        <a
          className="resume-button"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
      </div>
    </section>
  )
}

export default HomePage
