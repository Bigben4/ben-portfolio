import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './UI/SocialIcons'

export default function Footer() {
 const currentYear = new Date().getFullYear()

 return (
 <footer className="bg-white border-t border-gray-200 py-12 relative z-10">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: 'easeOut' }}
 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center justify-between gap-8 md:flex-row md:items-start"
 >
 {/* Brand & Info */}
 <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
 <a
 href="#home"
 className="flex items-center gap-2 text-base font-bold font-['Space_Grotesk'] text-black hover:text-blue-600 transition-colors"
 >
 <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-600 text-blue-600 shrink-0">
 <Code2 className="w-5 h-5" />
 </div>
 <span>
 NDILLE <span className="text-blue-600">ENUME</span>
 </span>
 </a>
 <p className="text-sm text-black max-w-xs leading-relaxed">
 Engineering high-impact solutions that solve real-world problems.
 </p>
 <p className="text-xs text-black mt-2">
 © {currentYear} Ndille Enume. All rights reserved.
 </p>
 </div>

 {/* Navigation Links */}
 <div className="flex flex-col items-center md:items-start gap-4">
 <h3 className="text-sm font-semibold text-black uppercase tracking-wider">Navigation</h3>
 <nav className="flex flex-col items-center md:items-start gap-2">
 <a href="#home" className="text-sm text-black hover:text-blue-600 transition-colors">Home</a>
 <a href="#about" className="text-sm text-black hover:text-blue-600 transition-colors">About</a>
 <a href="#projects" className="text-sm text-black hover:text-blue-600 transition-colors">Projects</a>
 <a href="#skills" className="text-sm text-black hover:text-blue-600 transition-colors">Skills</a>
 <a href="#journal" className="text-sm text-black hover:text-blue-600 transition-colors">Journal</a>
 </nav>
 </div>

 {/* Social Links & Back to Top */}
 <div className="flex flex-col items-center md:items-end gap-6">
 <div className="flex items-center gap-4">
 <a
 href="https://github.com"
 target="_blank"
 rel="noopener noreferrer"
 aria-label="GitHub Profile"
 className="text-black hover:text-blue-600 transition-colors"
 >
 <GithubIcon className="w-6 h-6" />
 </a>
 <a
 href="https://linkedin.com"
 target="_blank"
 rel="noopener noreferrer"
 aria-label="LinkedIn Profile"
 className="text-black hover:text-blue-600 transition-colors"
 >
 <LinkedinIcon className="w-6 h-6" />
 </a>
 </div>
 
 <a
 href="#home"
 aria-label="Scroll back to top of page"
 className="group min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-blue-600 text-black hover:text-blue-600 text-xs font-semibold transition-all"
 >
 <span>Back to top</span>
 <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
 </a>
 </div>
 </motion.div>
 </footer>
 )
}
