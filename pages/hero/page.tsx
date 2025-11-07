import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import RightSidebar from '../../components/right-sidebar'
import HeroContent from '../../components/pages/hero-content'

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100">
      <Header />
      <div className="flex">
        <Sidebar title="Hero" />
        <main className="flex-1 bg-blue-50">
          <HeroContent />
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}