import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import BottomBar from './BottomBar.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen bg-surface text-text flex flex-col">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <div className="animate-fadeIn">
          <Outlet />
        </div>
      </main>
      <Footer />
      <BottomBar />
    </div>
  )
}