import React, { useState, useEffect } from 'react'
import { Menu, X, Mail, ArrowUpRight, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './UI/SocialIcons'

export default function Navbar() {
 const [isScrolled, setIsScrolled] = useState(false)
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 const [activeSection, setActiveSection] = useState('home')

 const whatsAppUrl = 'https://wa.me/237671807750'
 const emailAddress = 'Ebrahimndille@gmail.com'

 useEffect(() => {
 const handleScroll = () => {
 if (window.scrollY > 20) {
 setIsScrolled(true)
 } else {
 setIsScrolled(false)
 }

 const sections = ['home', 'about', 'projects', 'skills', 'experience', 'journal', 'contact']
 const scrollPosition = window.scrollY + 200

 for (const sectionId of sections) {
 const el = document.getElementById(sectionId)
 if (el) {
 const top = el.offsetTop
 const height = el.offsetHeight
 if (scrollPosition >= top && scrollPosition < top + height) {
 setActiveSection(sectionId)
 break
 }
 }
 }
 }

 window.addEventListener('scroll', handleScroll)
 return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 const navLinks = [
 { name: 'Home', href: '#home', id: 'home' },
 { name: 'About', href: '#about', id: 'about' },
 { name: 'Projects', href: '#projects', id: 'projects' },
 { name: 'Skills', href: '#skills', id: 'skills' },
 { name: 'Experience', href: '#experience', id: 'experience' },
 { name: 'Journal', href: '#journal', id: 'journal' },
 { name: 'Contact', href: '#contact', id: 'contact' }
 ]

 const handleNavClick = () => {
 setMobileMenuOpen(false)
 }

 return (
 <header
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
 isScrolled
 ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 shadow-xl shadow-black/80'
 : 'bg-transparent py-5'
 }`}
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
 {/* Brand Logo & Name */}
 <a
 href="#home"
 className="group flex items-center gap-2.5 sm:gap-3 text-lg sm:text-xl xl:text-2xl font-black font-['Space_Grotesk'] text-black tracking-tight hover:text-blue-600 transition-all shrink-0"
 aria-label="Ndille Enume Portfolio Home"
 >
 <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/15 border border-blue-600 text-blue-600 group-hover:bg-blue-600 group-hover:text-blue-600 group-hover:shadow-[0_0_15px_#38bdf8] transition-all shrink-0">
 <Code2 className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
 </div>
 <span className="tracking-tight whitespace-nowrap">
 NDILLE <span className="text-blue-600 group-hover:text-blue-600 transition-colors">ENUME</span>
 </span>
 </a>

 {/* Desktop Navigation (Visible on lg: 1024px+) */}
 <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white p-1.5 xl:p-2 px-2.5 xl:px-4 rounded-full border border-gray-200 backdrop-blur-md shadow-xl shadow-black/50 shrink-0">
 {navLinks.map((link) => {
 const isActive = activeSection === link.id
 return (
 <a
 key={link.name}
 href={link.href}
 className={`px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
 isActive
 ? 'bg-blue-600 text-white shadow-md shadow-sky-500/30 font-bold scale-[1.02]'
 : 'text-black hover:text-black hover:bg-white'
 }`}
 >
 {link.name}
 </a>
 )
 })}
 </nav>

 {/* Quick Social Proof Icons & WhatsApp CTA */}
 <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
 {/* Social Icons (Hidden on lg, visible on xl) */}
 <div className="hidden xl:flex items-center gap-1.5 border-r border-gray-200 pr-3">
 <a
 href="https://github.com"
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 rounded-xl text-black hover:text-blue-600 hover:bg-white transition-all duration-200"
 aria-label="GitHub Profile"
 >
 <GithubIcon className="w-5 h-5 shrink-0" />
 </a>
 <a
 href="https://linkedin.com"
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 rounded-xl text-black hover:text-blue-600 hover:bg-white transition-all duration-200"
 aria-label="LinkedIn Profile"
 >
 <LinkedinIcon className="w-5 h-5 shrink-0" />
 </a>
 <a
 href={`mailto:${emailAddress}`}
 className="p-2 rounded-xl text-black hover:text-blue-600 hover:bg-white transition-all duration-200"
 aria-label="Email Contact"
 >
 <Mail className="w-5 h-5 shrink-0" />
 </a>
 </div>

 {/* Let's Talk Button -> Redirects directly to WhatsApp */}
 <a
 href={whatsAppUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-1.5 px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-blue-600 bg-blue-600/10 hover:bg-blue-600 hover:text-blue-600 rounded-xl border border-blue-600 transition-all duration-200 shadow-sm hover:shadow-sky-500/20 whitespace-nowrap"
 >
 <span>Let's Talk</span>
 <ArrowUpRight className="w-4 h-4 shrink-0" />
 </a>
 </div>

 {/* Mobile / Tablet Hamburger Button (Visible below lg: 1024px) */}
 <div className="flex items-center lg:hidden">
 <button
 type="button"
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="p-2.5 rounded-xl text-black hover:text-black bg-white border border-gray-200 flex items-center justify-center transition-colors"
 aria-label={mobileMenuOpen ?"Close menu" :"Open navigation menu"}
 aria-expanded={mobileMenuOpen}
 >
 {mobileMenuOpen ? <X className="w-6 h-6 shrink-0" /> : <Menu className="w-6 h-6 shrink-0" />}
 </button>
 </div>
 </div>

 {/* Mobile Drawer Menu */}
 {mobileMenuOpen && (
 <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl p-6 transition-all animate-fadeIn">
 <div className="flex flex-col gap-3">
 {navLinks.map((link) => (
 <a
 key={link.name}
 href={link.href}
 onClick={handleNavClick}
 className={`min-h-[48px] px-4 py-3 text-sm font-semibold rounded-lg flex items-center transition-all ${
 activeSection === link.id
 ? 'bg-blue-600/15 text-blue-600 border border-blue-600'
 : 'text-black hover:bg-white hover:text-black'
 }`}
 >
 {link.name}
 </a>
 ))}

 <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
 <div className="flex items-center gap-2">
 <a
 href="https://github.com"
 target="_blank"
 rel="noopener noreferrer"
 className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg bg-white text-black hover:text-blue-600 border border-gray-200"
 aria-label="GitHub Profile"
 >
 <GithubIcon className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
 </a>
 <a
 href="https://linkedin.com"
 target="_blank"
 rel="noopener noreferrer"
 className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg bg-white text-black hover:text-blue-600 border border-gray-200"
 aria-label="LinkedIn Profile"
 >
 <LinkedinIcon className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
 </a>
 <a
 href={`mailto:${emailAddress}`}
 className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg bg-white text-black hover:text-blue-600 border border-gray-200"
 aria-label="Email Ndille Enume"
 >
 <Mail className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
 </a>
 </div>

 <a
 href={whatsAppUrl}
 target="_blank"
 rel="noopener noreferrer"
 onClick={handleNavClick}
 className="min-h-[48px] px-5 flex items-center justify-center text-xs font-bold text-white bg-blue-600 hover:bg-blue-600 rounded-lg shadow-lg shadow-sky-500/20"
 >
 Let's Talk
 </a>
 </div>
 </div>
 </div>
 )}
 </header>
 )
}
