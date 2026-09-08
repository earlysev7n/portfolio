import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="projects"
          element={<PlaceholderPage title="Projects" />}
        />
        <Route
          path="experience"
          element={<PlaceholderPage title="Experience" />}
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
          path="keepr"
          element={<PlaceholderPage title="KeepR Case Study" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App