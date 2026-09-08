import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ChatWidget from '../chat/ChatWidget.jsx'

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
      <ChatWidget />
    </>
  )
}

export default SiteLayout
