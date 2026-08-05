import React, { useState, useEffect } from 'react'
import { Menu, X, Mail, ArrowUpRight, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './UI/SocialIcons'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const whatsAppUrl = 'https://wa.me/237671807750'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const sections = ['home', 'projects', 'skills', 'experience', 'journal', 'contact']
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
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-lg font-bold font-['Space_Grotesk'] text-white tracking-tight hover:text-sky-400 transition-colors"
          aria-label="Ndille Enume Portfolio Home"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all">
            <Code2 size={18} />
          </div>
          <span>
            NDILLE <span className="text-sky-400">ENUME</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Quick Social Proof Icons & WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-slate-800 pr-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:ben.dev@example.com"
              className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 transition-all duration-200"
              aria-label="Email Contact"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Let's Talk Button -> Redirects directly to WhatsApp */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-sky-400 bg-sky-500/10 hover:bg-sky-500 hover:text-slate-950 rounded-lg border border-sky-500/30 transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[48px] min-h-[48px] p-3 rounded-lg text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 flex items-center justify-center transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl p-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className={`min-h-[48px] px-4 py-3 text-sm font-semibold rounded-lg flex items-center transition-all ${
                  activeSection === link.id
                    ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg bg-slate-900 text-slate-300 hover:text-sky-400 border border-slate-800"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[48px] flex min-h-[48px] items-center justify-center rounded-lg bg-slate-900 text-slate-300 hover:text-sky-400 border border-slate-800"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="mailto:ben.dev@example.com"
                  className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg bg-slate-900 text-slate-300 hover:text-sky-400 border border-slate-800"
                  aria-label="Email Ndille Enume"
                >
                  <Mail size={20} />
                </a>
              </div>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="min-h-[48px] px-5 flex items-center justify-center text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-lg shadow-sky-500/20"
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
