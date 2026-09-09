import { Link } from 'react-router-dom'
import SpotlightCard from '../components/ui/SpotlightCard.jsx'

function ProjectsPage() {
  return (
    <section className="site-container page-section">
      <header className="page-heading">
        <p className="section-eyebrow">Projects</p>
        <h1>Applications built around real problems.</h1>
        <p>
          A collection of projects where I explore software development,
          algorithms, APIs, and user-focused application design.
        </p>
      </header>

      <div className="projects-grid">
        <SpotlightCard as="article" className="project-card">
          <div
            className="project-card-visual"
            aria-label="OneFit project preview placeholder"
          >
            <span>OneFit</span>
          </div>

          <div className="project-card-content">
            <p className="project-type">Featured Project</p>
            <h2>OneFit</h2>

            <p>
              A cross-platform fitness and nutrition recommendation system
              using optimization algorithms, Firebase, external data APIs, and
              the OpenAI API.
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

              <Link to="/onefit">View case study</Link>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          as="article"
          className="project-card project-card-placeholder"
        >
          <div className="project-placeholder-content">
            <p className="section-eyebrow">Coming Soon</p>
            <h2>More projects are on the way.</h2>
            <p>
              Future applications and case studies will be added here as they
              are completed.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}

export default ProjectsPage
