import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import TechnicalSkills from './components/TechnicalSkills'
import ExperienceCommunity from './components/ExperienceCommunity'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-sky-500 selection:text-slate-950 font-sans">
      <Navbar />
      <main id="main-content" className="relative z-0">
        <Hero />
        <FeaturedProjects />
        <TechnicalSkills />
        <ExperienceCommunity />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
