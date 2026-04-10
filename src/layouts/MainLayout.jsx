import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import AIBotWidget from '@/components/AIBotWidget'
import ContactModal, { ContactModalProvider } from '@/components/ContactModal'
import CookieConsent from '@/components/CookieConsent'
import ParallaxBackground from '@/components/ParallaxBackground'
import ErrorBoundary from '@/components/ErrorBoundary'
import StructuredData from '@/components/StructuredData'

export default function MainLayout({ children }) {
  return (
    <ContactModalProvider>
      <StructuredData />
      <div className="flex min-h-screen flex-col">
        <ParallaxBackground />
        <Header />
        <main className="flex-1 relative z-[1]">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <Footer />
        <FloatingCTA />
        <AIBotWidget />
        <ContactModal />
        <CookieConsent />
      </div>
    </ContactModalProvider>
  )
}
