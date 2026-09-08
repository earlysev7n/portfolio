import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import useTheme from '../../hooks/useTheme.js'

const navigation = [
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function closeNavigation() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link
          className="site-logo"
          to="/"
          onClick={closeNavigation}
          aria-label="Go to homepage"
        >
          JJA
        </Link>

        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div
          className={`navigation-panel ${isMenuOpen ? 'is-open' : ''}`}
          id="primary-navigation"
        >
          <nav className="site-navigation" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `navigation-link${isActive ? ' is-active' : ''}`
                }
                key={item.path}
                to={item.path}
                onClick={closeNavigation}
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
