import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import RightSidebar from '../../components/right-sidebar'
import ContactContent from '../../components/pages/contact-content'

export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-100">
      <Header />
      <div className="flex">
        <Sidebar title="Contact" />
        <main className="flex-1 bg-blue-50">
          <ContactContent />
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}