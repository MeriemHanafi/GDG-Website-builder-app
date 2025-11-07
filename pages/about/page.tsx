import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import RightSidebar from '../../components/right-sidebar'
import AboutContent from '../../components/pages/about-content'

export default function About() {
  return (
    <div className="min-h-screen bg-blue-100">
      <Header />
      <div className="flex">
        <Sidebar title="About" />
        <main className="flex-1 bg-blue-50">
          <AboutContent />
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}