import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="projects"
          element={<ProjectsPage />}
        />
        <Route
          path="experience"
          element={<ExperiencePage />}
        />
        <Route path="events" element={<PlaceholderPage title="Events" />} />
        <Route
          path="tech-stack"
          element={<PlaceholderPage title="Tech Stack" />}
        />
        <Route
          path="certifications"
          element={<PlaceholderPage title="Certifications" />}
        />
        <Route
          path="onefit"
          element={<PlaceholderPage title="OneFit Case Study" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App