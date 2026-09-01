import { About } from './components/About'
import { Benefits } from './components/Benefits'
import { Contact } from './components/Contact'
import { Coverage } from './components/Coverage'
import { CTASection } from './components/CTASection'
import { FAQ } from './components/FAQ'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { MobileCTABar } from './components/MobileCTABar'
import { QuoteForm } from './components/QuoteForm'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { TrustBar } from './components/TrustBar'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <HowItWorks />
        <CTASection />
        <Benefits />
        <Coverage />
        <Testimonials />
        <QuoteForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCTABar />
    </>
  )
}

export default App
