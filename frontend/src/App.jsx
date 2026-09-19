import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import FeaturedProjects from './components/FeaturedProjects'
import TechnicalSkills from './components/TechnicalSkills'
import ServicesSection from './components/ServicesSection'
import DeveloperJournal from './components/DeveloperJournal'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
 return (
 <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white selection:bg-blue-600 selection:text-white font-sans relative transition-colors duration-300">
 {/* Fixed Background Name Watermark */}
 <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center overflow-hidden">
 <div className="text-[18vw] md:text-[14vw] font-black text-black/[0.03] dark:text-white/[0.02] whitespace-nowrap select-none font-['Space_Grotesk'] tracking-tighter">
 NDILLE ENUME
 </div>
 </div>
 <Navbar />
 <main id="main-content" className="relative z-20">
 <Hero />
 <AboutMe />
 <FeaturedProjects />
 <TechnicalSkills />
 <ServicesSection />
 <DeveloperJournal />
 <ContactSection />
 </main>
 <Footer />
 <Analytics />
 </div>
 )
}

export default App
