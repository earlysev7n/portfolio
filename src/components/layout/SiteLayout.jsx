import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

function SiteLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default SiteLayout