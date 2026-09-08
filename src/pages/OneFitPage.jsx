import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'

const features = [
  {
    title: 'Personalized workouts',
    description:
      'Creates workout plans using fitness goals, experience, available equipment, schedule, and target muscle groups.',
  },
  {
    title: 'Optimized meal plans',
    description:
      'Builds nutritionally balanced meal plans while respecting calorie targets, dietary restrictions, and user preferences.',
  },
  {
    title: 'Weekly adaptation',
    description:
      'Adjusts calorie targets and workout difficulty using adherence, progress, effort ratings, and weight trends.',
  },
  {
    title: 'Nutrition and barcode search',
    description:
      'Finds nutrition information through food databases and barcode scanning integrations.',
  },
]

const integrations = [
  {
    name: 'ExerciseDB',
    purpose: 'Exercise information and workout data',
  },
  {
    name: 'USDA FoodData Central',
    purpose: 'Detailed food and nutrition information',
  },
  {
    name: 'OpenFoodFacts',
    purpose: 'Packaged-food and barcode information',
  },
  {
    name: 'OpenAI API',
    purpose: 'Structured recipe instructions using GPT-4o-mini',
  },
]

function OneFitPage() {
  return (
    <article className="site-container case-study">
      <Reveal as="header" className="case-study-hero">
        <p className="section-eyebrow">Case Study · 2026</p>
        <h1>OneFit</h1>

        <p className="case-study-introduction">
          A cross-platform fitness and nutrition recommendation system that
          creates personalized plans using optimization algorithms, Firebase,
          external data APIs, and artificial intelligence.
        </p>

        <div className="case-study-actions">
          <a
            className="primary-button"
            href="https://github.com/earlysev7n/onefit"
            target="_blank"
            rel="noreferrer"
          >
            View source
          </a>

          <Link className="secondary-button" to="/projects">
            Back to projects
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="case-study-section">
        <div className="case-study-section-heading">
          <p className="section-eyebrow">Overview</p>

          <div className="case-study-copy">
            <h2>Personalized recommendations without generic plans.</h2>

            <p>
              Many fitness applications give every user similar workout and
              meal recommendations. OneFit was designed to generate plans
              around each user&apos;s goals, fitness level, schedule,
              equipment, dietary restrictions, and nutrition requirements.
            </p>

            <p>
              The application was developed as a four-person Computer Science
              capstone project. My role focused on leading development,
              coordinating version control, and working on the application&apos;s
              planning algorithms and integrations.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="case-study-section">
        <div className="case-study-section-heading">
          <p className="section-eyebrow">Core Features</p>

          <div>
            <h2>Plans that respond to the user.</h2>

            <div className="case-study-grid">
              {features.map((feature) => (
                <article className="case-study-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="case-study-section">
        <div className="case-study-section-heading">
          <p className="section-eyebrow">Algorithms</p>

          <div className="case-study-grid">
            <article className="case-study-card">
              <p className="project-type">Workout Planning</p>
              <h3>Constraint-aware greedy algorithm</h3>
              <p>
                Exercises are scored and ranked using target muscles,
                experience, available equipment, workout location, schedule,
                and session duration.
              </p>
            </article>

            <article className="case-study-card">
              <p className="project-type">Meal Planning</p>
              <h3>Genetic meal optimizer</h3>
              <p>
                Meal combinations evolve through tournament selection,
                crossover, mutation, and elitism across 100 generations while
                respecting nutrition and dietary requirements.
              </p>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="case-study-section">
        <div className="case-study-section-heading">
          <p className="section-eyebrow">Integrations</p>

          <div className="integration-list">
            {integrations.map((integration) => (
              <article className="integration-item" key={integration.name}>
                <h3>{integration.name}</h3>
                <p>{integration.purpose}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="case-study-section">
        <div className="case-study-cta">
          <p className="section-eyebrow">Project Repository</p>
          <h2>Explore how OneFit was built.</h2>
          <p>
            View the source code, application structure, algorithms, services,
            and automated tests on GitHub.
          </p>

          <a
            className="primary-button"
            href="https://github.com/earlysev7n/onefit"
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub repository
          </a>
        </div>
      </Reveal>
    </article>
  )
}

export default OneFitPage