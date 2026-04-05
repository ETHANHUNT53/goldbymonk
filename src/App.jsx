import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Comparison from './components/Comparison'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import BranchCta from './components/BranchCta'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Comparison />
        <WhyChoose />
        <Testimonials />
        <Faq />
        <BranchCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
