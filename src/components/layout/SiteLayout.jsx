import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function SiteLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <Header />

      <main>
        <div className="route-transition" key={pathname}>
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SiteLayout