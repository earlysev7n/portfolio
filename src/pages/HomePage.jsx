import { Link } from 'react-router-dom'
import certifications from '../data/certifications.js'
import Reveal from '../components/ui/Reveal.jsx'
import { ChevronRight, Mail, Phone } from 'lucide-react'
import { GitHubCalendar } from 'react-github-calendar'
import 'react-github-calendar/tooltips.css'
import { useEffect, useState } from 'react'

const featuredTechnologies = [
  'Flutter',
  'Dart',
  'Firebase',
  'OpenAI API',
  'React',
  'Git',
]

function getInitialCalendarTheme() {
  const pageTheme = document.documentElement.dataset.theme

  if (pageTheme === 'light' || pageTheme === 'dark') {
    return pageTheme
  }

  const savedTheme = localStorage.getItem('portfolio-theme')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

function HomePage() {
  const [calendarTheme, setCalendarTheme] = useState(
    getInitialCalendarTheme,
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.dataset.theme

      if (theme === 'light' || theme === 'dark') {
        setCalendarTheme(theme)
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Reveal as="section" className="site-container home-hero">
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
      </Reveal>

      <Reveal as="section" className="site-container featured-project-section">
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

              <Link to="/onefit">Project details</Link>
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal as="section" className="site-container experience-section">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Experience</p>
            <h2>My development journey.</h2>
          </div>

          <Link className="section-link" to="/experience">
            View details
          </Link>
        </div>

        <div className="experience-preview">
          <p className="experience-status">Coming Soon</p>

          <div className="experience-preview-content">
            <h3>Experience details are being prepared.</h3>
            <p>
              This section will include my professional experience,
              internships, and development roles.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="site-container technologies-section">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Technologies</p>
            <h2>Tools I use to build applications.</h2>
          </div>

          <Link className="section-link" to="/tech-stack">
            View all
          </Link>
        </div>

        <ul className="technology-cloud" aria-label="Featured technologies">
          {featuredTechnologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="site-container certifications-section">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Certifications</p>
            <h2>Courses and credentials.</h2>
          </div>

          <Link className="section-link" to="/certifications">
            View all
          </Link>
        </div>

        <div className="certification-list">
          {certifications.map((certification) => (
            <article className="certification-item" key={certification.title}>
              <p className="certification-year">{certification.year}</p>

              <div>
                <h3>{certification.title}</h3>
                <p className="certification-issuer">
                  {certification.issuer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="site-container education-section">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Education</p>
            <h2>Academic background.</h2>
          </div>
        </div>

        <article className="education-card">
          <p className="education-year">2023 - 2027</p>

          <div className="education-content">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>Central Philippine University</p>
            <p className="education-location">
              Iloilo City, Philippines
            </p>
            <p className="education-coursework">
              Relevant coursework includes Data Structures and Algorithms,
              Software Engineering, Database Systems, and Object-Oriented
              Programming.
            </p>
          </div>
        </article>
      </Reveal>

      <Reveal
        as="section"
        className="site-container github-activity-section"
      >
        <p className="section-eyebrow">GitHub Activity</p>

        <div className="github-calendar-card">
          <div className="github-calendar-scroll">
            <GitHubCalendar
              colorScheme={calendarTheme}
              username="earlysev7n"
              blockSize={12}
              blockMargin={4}
              blockRadius={3}
              fontSize={14}
              theme={{
                light: [
                  '#f1f3f5',
                  '#c6f6d5',
                  '#86efac',
                  '#4ade80',
                  '#16a34a',
                ],
                dark: [
                  '#2a2a2a',
                  '#0e4429',
                  '#006d32',
                  '#26a641',
                  '#39d353',
                ],
              }}
            />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="site-container contact-section">
        <div className="contact-layout">
          <div className="contact-copy">
            <h2>Let&apos;s work together.</h2>

            <p>
              I&apos;m open to software engineering internships, freelance
              projects, and collaborative development opportunities.
            </p>
          </div>

          <div className="contact-actions">
            <a
              className="contact-action-card"
              href="mailto:johnjerickagapito@gmail.com"
            >
              <span className="contact-action-icon">
                <Mail aria-hidden="true" />
              </span>

              <span className="contact-action-content">
                <span className="contact-action-label">Email</span>
                <span className="contact-action-value">
                  johnjerickagapito@gmail.com
                </span>
              </span>

              <ChevronRight
                className="contact-action-arrow"
                aria-hidden="true"
              />
            </a>

            <a className="contact-action-card" href="tel:+639690130374">
              <span className="contact-action-icon">
                <Phone aria-hidden="true" />
              </span>

              <span className="contact-action-content">
                <span className="contact-action-label">
                  Let&apos;s Talk
                </span>
                <span className="contact-action-value">+63 969 013 0374</span>
              </span>

              <ChevronRight
                className="contact-action-arrow"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </Reveal>
    </>
  )
}

export default HomePage
