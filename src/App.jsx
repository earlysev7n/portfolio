import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import OneFitPage from './pages/OneFitPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import TechStackPage from './pages/TechStackPage.jsx'
import CertificationsPage from './pages/CertificationsPage.jsx'

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
        <Route
          path="tech-stack"
          element={<TechStackPage />}
        />
        <Route
          path="certifications"
          element={<CertificationsPage />}
        />
        <Route
          path="onefit"
          element={<OneFitPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App