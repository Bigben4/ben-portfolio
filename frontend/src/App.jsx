import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import TechnicalSkills from './components/TechnicalSkills'
import ExperienceCommunity from './components/ExperienceCommunity'
import DeveloperJournal from './components/DeveloperJournal'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      <Navbar />
      <main id="main-content" className="relative z-0">
        <Hero />
        <FeaturedProjects />
        <TechnicalSkills />
        <ExperienceCommunity />
        <DeveloperJournal />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
