import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
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

      <section className="site-container featured-project-section">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Featured Build</p>
            <h2>OneFit</h2>
          </div>

          <Link className="section-link" to="/projects">
            View all projects
          </Link>
        </div>

        <article className="featured-project-card">
          <div
            className="project-preview-placeholder"
            aria-label="OneFit project preview placeholder"
          >
            <span>OneFit</span>
          </div>

          <div className="featured-project-content">
            <p className="project-type">Mobile Fitness and Nutrition</p>

            <h3>A personalized fitness plan built around the user.</h3>

            <p>
              OneFit generates seven-day workout and meal plans using greedy
              and genetic algorithms. It adapts recommendations using progress,
              nutrition data, workout feedback, and user goals.
            </p>

            <ul className="technology-list" aria-label="OneFit technologies">
              <li>Flutter</li>
              <li>Dart</li>
              <li>Firebase</li>
              <li>OpenAI API</li>
              <li>REST APIs</li>
            </ul>

            <div className="project-links">
              <a
                href="https://github.com/earlysev7n/onefit"
                target="_blank"
                rel="noreferrer"
              >
                View source
              </a>

              <Link to="/projects">Project details</Link>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default HomePage