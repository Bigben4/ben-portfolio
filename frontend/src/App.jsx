import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import FeaturedProjects from './components/FeaturedProjects'
import TechnicalSkills from './components/TechnicalSkills'
import ExperienceCommunity from './components/ExperienceCommunity'
import DeveloperJournal from './components/DeveloperJournal'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
 return (
 <div className="min-h-screen bg-white text-black selection:bg-blue-600 selection:text-white font-sans">
 <Navbar />
 <main id="main-content" className="relative z-0">
 <Hero />
 <AboutMe />
 <FeaturedProjects />
 <TechnicalSkills />
 <ExperienceCommunity />
 <DeveloperJournal />
 <ContactSection />
 </main>
 <Footer />
 <Analytics />
 </div>
 )
}

export default App
