import TechnologyBadge from '../components/ui/TechnologyBadge.jsx'

const technologyGroups = [
  {
    title: 'Languages',
    technologies: ['Dart', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frameworks & State',
    technologies: ['Flutter', 'React', 'Provider'],
  },
  {
    title: 'Data & Cloud',
    technologies: [
      'Firebase',
      'Cloud Firestore',
      'Firebase Authentication',
      'MySQL',
    ],
  },
  {
    title: 'AI & APIs',
    technologies: [
      'OpenAI API',
      'GPT-4o-mini',
      'REST APIs',
      'ExerciseDB',
      'USDA FoodData Central',
      'OpenFoodFacts',
    ],
  },
  {
    title: 'Tools',
    technologies: ['Git', 'GitHub', 'Visual Studio Code', 'Vite'],
  },
  {
    title: 'Development Concepts',
    technologies: [
      'Genetic Algorithms',
      'Greedy Algorithms',
      'State Management',
      'Data Modeling',
      'Automated Testing',
    ],
  },
]

function TechStackPage() {
  return (
    <section className="site-container page-section">
      <header className="page-heading">
        <p className="section-eyebrow">Technology Stack</p>
        <h1>Technologies behind my projects.</h1>
        <p>
          The languages, frameworks, services, APIs, and development concepts I
          use while building applications.
        </p>
      </header>

      <div className="technology-groups">
        {technologyGroups.map((group) => (
          <article className="technology-group" key={group.title}>
            <h2>{group.title}</h2>

            <ul>
              {group.technologies.map((technology) => (
                <TechnologyBadge key={technology} name={technology} />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechStackPage
