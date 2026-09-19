import React, { useState, useEffect } from 'react'
import { 
 Menu, 
 X, 
 Mail, 
 Code2, 
 ChevronRight,
 ArrowUpRight,
 Sun,
 Moon
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './UI/SocialIcons'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
 const { theme, toggleTheme } = useTheme()
 const [isScrolled, setIsScrolled] = useState(false)
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 const [activeSection, setActiveSection] = useState('home')

 const whatsAppUrl = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/237671807750'
 const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS || 'Ebrahimndille@gmail.com'
 const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com'
 const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com'

 useEffect(() => {
 const handleScroll = () => {
 if (window.scrollY > 20) {
 setIsScrolled(true)
 } else {
 setIsScrolled(false)
 }

 const sections = ['home', 'about', 'projects', 'skills', 'services', 'journal', 'contact']
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
 { name: 'Services', href: '#services', id: 'services' },
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
 ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 py-3 shadow-sm'
 : 'bg-transparent py-5'
 }`}
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
 {/* Brand Logo & Name */}
 <a
 href="#home"
 className="group flex items-center gap-2.5 sm:gap-3 text-lg sm:text-xl xl:text-2xl font-black font-['Space_Grotesk'] text-black dark:text-white tracking-tight hover:text-blue-600 transition-all shrink-0"
 aria-label="Ndille Enume Portfolio Home"
 >
 <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/15 border border-blue-600 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_15px_#2563eb] transition-all shrink-0">
 <Code2 className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
 </div>
 <span className="tracking-tight whitespace-nowrap">
 NDILLE <span className="text-blue-600 transition-colors">ENUME</span>
 </span>
 </a>

 {/* Desktop Navigation (Visible on lg: 1024px+) */}
 <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white dark:bg-zinc-900 p-1.5 xl:p-2 px-2.5 xl:px-4 rounded-full border border-gray-200 dark:border-zinc-700 backdrop-blur-md shadow-sm shrink-0">
 {navLinks.map((link) => {
 const isActive = activeSection === link.id
 return (
 <a
 key={link.name}
 href={link.href}
 className={`px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
 isActive
 ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
 : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800'
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
 <div className="hidden xl:flex items-center gap-1.5 border-r border-gray-200 dark:border-zinc-700 pr-3">
 <a
 href={githubUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 rounded-xl text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200"
 aria-label="GitHub Profile"
 >
 <GithubIcon className="w-5 h-5 shrink-0" />
 </a>
 <a
 href={linkedinUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 rounded-xl text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200"
 aria-label="LinkedIn Profile"
 >
 <LinkedinIcon className="w-5 h-5 shrink-0" />
 </a>
 <a
 href={`mailto:${emailAddress}`}
 className="p-2 rounded-xl text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200"
 aria-label="Email Contact"
 >
 <Mail className="w-5 h-5 shrink-0" />
 </a>
 </div>

 {/* Theme Toggle Button (Desktop) */}
 <button
 onClick={toggleTheme}
 className="p-2 lg:p-2.5 rounded-xl text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-200"
 aria-label="Toggle Dark Mode"
 >
 {theme === 'dark' ? <Sun className="w-5 h-5 shrink-0" /> : <Moon className="w-5 h-5 shrink-0" />}
 </button>

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
 <div className="flex items-center gap-2 lg:hidden">
 {/* Theme Toggle Button (Mobile) */}
 <button
 onClick={toggleTheme}
 className="p-2.5 rounded-xl text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/50 flex items-center justify-center transition-colors"
 aria-label="Toggle Dark Mode"
 >
 {theme === 'dark' ? <Sun className="w-5 h-5 shrink-0" /> : <Moon className="w-5 h-5 shrink-0" />}
 </button>
 
 <button
 type="button"
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="p-2.5 rounded-xl text-black dark:text-white hover:text-black dark:hover:text-white bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex items-center justify-center transition-colors"
 aria-label={mobileMenuOpen ?"Close menu" :"Open navigation menu"}
 aria-expanded={mobileMenuOpen}
 >
 {mobileMenuOpen ? <X className="w-6 h-6 shrink-0" /> : <Menu className="w-6 h-6 shrink-0" />}
 </button>
 </div>
 </div>

 {/* Mobile Drawer Menu */}
 {mobileMenuOpen && (
 <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-800 shadow-2xl p-6 transition-all animate-fadeIn">
 <div className="flex flex-col gap-3">
 {navLinks.map((link) => (
 <a
 key={link.name}
 href={link.href}
 onClick={handleNavClick}
 className={`min-h-[48px] px-4 py-3 text-sm font-semibold rounded-lg flex items-center transition-all ${
 activeSection === link.id
 ? 'bg-blue-600/15 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-500'
 : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white'
 }`}
 >
 {link.name}
 </a>
 ))}

 <div className="pt-4 border-t border-gray-200 dark:border-zinc-800 flex items-center justify-between">
 <div className="flex items-center gap-2">
 <a
 href={githubUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg bg-gray-100 dark:bg-zinc-800 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-zinc-700"
 aria-label="GitHub Profile"
 >
 <GithubIcon className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
 </a>
 <a
 href={linkedinUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg bg-gray-100 dark:bg-zinc-800 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-zinc-700"
 aria-label="LinkedIn Profile"
 >
 <LinkedinIcon className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
 </a>
 <a
 href={`mailto:${emailAddress}`}
 className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg bg-gray-100 dark:bg-zinc-800 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-zinc-700"
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
 className="min-h-[48px] px-5 flex items-center justify-center text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg shadow-sky-500/20"
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
