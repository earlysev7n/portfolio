import {
  Apple,
  Bot,
  CheckCircle2,
  Code2,
  Database,
  Dumbbell,
  Globe2,
  GitBranch,
  KeyRound,
  Route,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from 'lucide-react'
import {
  siCss,
  siDart,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMysql,
  siPostgresql,
  siPython,
  siReact,
  siSqlite,
  siTailwindcss,
  siVite,
} from 'simple-icons'

const brandIcons = {
  Dart: siDart,
  Firebase: siFirebase,
  Flutter: siFlutter,
  Git: siGit,
  GitHub: siGithub,
  HTML: siHtml5,
  JavaScript: siJavascript,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Python: siPython,
  React: siReact,
  SQLite: siSqlite,
  'Tailwind CSS': siTailwindcss,
  Vite: siVite,
  'Vanilla CSS': siCss,
}

const genericIcons = {
  'Automated Testing': CheckCircle2,
  'Cloud Firestore': Database,
  'Data Modeling': Database,
  'ExerciseDB': Dumbbell,
  'Firebase Authentication': KeyRound,
  'Genetic Algorithms': GitBranch,
  'GPT-4o-mini': Sparkles,
  'Greedy Algorithms': Route,
  'OpenAI API': Bot,
  OpenFoodFacts: Apple,
  Provider: SlidersHorizontal,
  'REST APIs': Globe2,
  SQL: Database,
  'State Management': Workflow,
  'USDA FoodData Central': Database,
  'Visual Studio Code': Code2,
}

function TechnologyBadge({ name, as: Component = 'li' }) {
  const brandIcon = brandIcons[name]
  const GenericIcon = genericIcons[name] ?? Code2

  return (
    <Component className="technology-badge">
      <span
        className="technology-badge-icon"
        style={brandIcon ? { color: `#${brandIcon.hex}` } : undefined}
        aria-hidden="true"
      >
        {brandIcon ? (
          <svg
            className="technology-badge-brand-icon"
            viewBox="0 0 24 24"
            role="presentation"
          >
            <path d={brandIcon.path} />
          </svg>
        ) : (
          <GenericIcon
            className="technology-badge-generic-icon"
            strokeWidth={2.25}
          />
        )}
      </span>

      <span>{name}</span>
    </Component>
  )
}

export default TechnologyBadge
