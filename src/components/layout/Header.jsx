import { Moon, Sun } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import useTheme from '../../hooks/useTheme.js'

const navigation = [
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
]

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link
          className="site-logo"
          to="/"
          aria-label="Go to homepage"
        >
          JJA
        </Link>

        <div className="navigation-panel" id="primary-navigation">
          <nav className="site-navigation" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `navigation-link${isActive ? ' is-active' : ''}`
                }
                key={item.path}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun aria-hidden="true" />
            ) : (
              <Moon aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
