import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
 Mail,
 ArrowDown,
 MessageCircle
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './UI/SocialIcons'
import heroPortrait from '../assets/hero-portrait.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
 const textRef = useRef(null)
 const whatsAppUrl = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/237671807750'
 const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS || 'Ebrahimndille@gmail.com'
 const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com'
 const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com'

 useEffect(() => {
   const chars = textRef.current.querySelectorAll('.type-char')
   
   // 1. Initial typing animation on page load
   gsap.fromTo(chars,
     { opacity: 0 },
     { opacity: 1, duration: 0.05, stagger: 0.03, ease: 'none', delay: 0.5 }
   )

   // 2. Scroll-triggered untyping as they scroll down
   gsap.fromTo(chars,
     { opacity: 1 },
     {
       opacity: 0,
       stagger: { each: 0.1, from: 'end' },
       ease: 'none',
       immediateRender: false,
       overwrite: 'auto',
       scrollTrigger: {
         trigger: '#home',
         start: 'top -15%', // start untyping after scrolling down a bit (buffer)
         end: 'bottom 50%', // finish untyping when hero is half out
         scrub: 1, // sync with scroll speed
       }
     }
   )
 }, [])

 return (
 <section
 id="home"
 className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center border-b border-gray-200 dark:border-zinc-800"
 >
 {/* Background Ambient Glow & Grid Patterns */}
 <div className="absolute inset-0 bg-white dark:bg-zinc-950 pointer-events-none" />
 <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
 {/* Left Column: Text Content (6 cols on desktop for balanced large visual) */}
 <div className="lg:col-span-6 space-y-6 text-left">

 {/* Primary Name & Headline */}
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
 className="space-y-4"
 >
 <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-['Space_Grotesk'] text-black dark:text-white tracking-tight leading-[1.12]">
 NDILLE <span className="text-blue-600">ENUME</span>
 </h1>
 
 {/* Strong Value-Driven Branding Statement */}
 <div className="pt-2">
 <h2 ref={textRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] text-black dark:text-white leading-[1.2] tracking-tight">
 {"I engineer high-impact solutions that ".split("").map((char, index) => (
 <span key={`p1-${index}`} className="type-char inline-block whitespace-pre">
 {char}
 </span>
 ))}
 <span className="text-blue-600">
 {"solve real-world problems.".split("").map((char, index) => (
 <span key={`p2-${index}`} className="type-char inline-block whitespace-pre">
 {char}
 </span>
 ))}
 </span>
 </h2>
 </div>
 </motion.div>

 {/* Action Buttons (CTAs) */}
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
 className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
 >
 {/* CTA 1: Primary - View Selected Work */}
 <a
 href="#projects"
 className="group min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-600 shadow-lg shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
 >
 <span>View Selected Work</span>
 <ArrowDown className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:translate-y-1 transition-transform" />
 </a>

 {/* Quick WhatsApp Chat Icon Button */}
 <a
 href={whatsAppUrl}
 target="_blank"
 rel="noopener noreferrer"
 aria-label="Direct WhatsApp Message"
 className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs text-blue-600 bg-emerald-500/10 hover:bg-emerald-500 hover:text-blue-600 border border-blue-600 transition-all duration-200"
 title="Chat on WhatsApp"
 >
 <MessageCircle className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
 <span>WhatsApp</span>
 </a>
 </motion.div>

 {/* Social Proof Icons */}
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
 className="pt-4 flex flex-wrap items-center gap-4"
 >
 <span className="text-xs font-semibold uppercase tracking-wider text-black dark:text-white">
 Connect With Me
 </span>
 <div className="h-4 w-px bg-white dark:bg-zinc-950 hidden sm:block" />
 <div className="flex items-center gap-3">
 <a
 href={githubUrl}
 target="_blank"
 rel="noopener noreferrer"
 aria-label="GitHub Profile"
 className="min-h-[48px] min-w-[48px] flex items-center justify-center p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-black dark:text-white hover:text-blue-600 hover:border-blue-600 hover:bg-white dark:bg-zinc-950 hover:scale-110 transition-all duration-200 shadow-sm"
 >
 <GithubIcon className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
 </a>
 <a
 href={linkedinUrl}
 target="_blank"
 rel="noopener noreferrer"
 aria-label="LinkedIn Profile"
 className="min-h-[48px] min-w-[48px] flex items-center justify-center p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-black dark:text-white hover:text-blue-600 hover:border-blue-600 hover:bg-white dark:bg-zinc-950 hover:scale-110 transition-all duration-200 shadow-sm"
 >
 <LinkedinIcon className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
 </a>
 <a
 href={`mailto:${emailAddress}`}
 aria-label="Send Email to Ndille Enume"
 className="min-h-[48px] min-w-[48px] flex items-center justify-center p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-black dark:text-white hover:text-blue-600 hover:border-blue-600 hover:bg-white dark:bg-zinc-950 hover:scale-110 transition-all duration-200 shadow-sm"
 >
 <Mail className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
 </a>
 </div>
 </motion.div>
 </div>

 {/* Right Column: Large Hero Portrait with Animated Glowing Laser Border */}
 <div className="lg:col-span-6 relative flex items-center justify-center w-full">
 <motion.div
 initial={{ opacity: 0, scale: 0.92, y: 24 }}
 whileInView={{ opacity: 1, scale: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
 className="relative w-full max-w-lg lg:max-w-xl mx-auto"
 >
 {/* Backlight Ambient Glow Rings */}
 <div className="absolute inset-0 blur-3xl rounded-full pointer-events-none transform scale-105" />
 <div className="absolute -inset-2 rounded-[36px] blur-2xl pointer-events-none" />

 {/* Animated Glowing Laser Border Outer Wrapper */}
 <div className="relative p-[2.5px] rounded-[32px] overflow-hidden shadow-xl group">
 
 {/* 360-Degree Continuous Rotating Laser Conic Gradient */}
 <motion.div
 animate={{ rotate: 360 }}
 transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
 className="absolute -inset-[150%] bg-white dark:bg-zinc-950 pointer-events-none"
 />

 {/* Additional Glow Diffusion Layer */}
 <motion.div
 animate={{ rotate: 360 }}
 transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
 className="absolute -inset-[150%] bg-white dark:bg-zinc-950 blur-md opacity-80 pointer-events-none"
 />

 {/* Static Inner Dark Border Layer */}
 <div className="relative rounded-[30px] p-4 sm:p-5 backdrop-blur-2xl overflow-hidden">
 
 {/* Subtle Background Grid Pattern inside Card */}
 <div className="absolute inset-0 bg-white dark:bg-zinc-950 [background-size:18px_18px] pointer-events-none" />
 
 {/* Image Presentation Box */}
 <div className="relative rounded-2xl overflow-hidden flex items-center justify-center pt-6 px-4 border border-gray-200 dark:border-zinc-800">
 <img
 src={heroPortrait}
 alt="Ndille Enume - Full-Stack Software Engineer"
 className="w-full h-auto max-h-[520px] sm:max-h-[580px] lg:max-h-[620px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] transform transition-transform duration-500 group-hover:scale-[1.02]"
 loading="eager"
 />
 
 {/* Subtle Bottom Vignette Gradient */}
 <div className="absolute inset-x-0 bottom-0 h-24 /50 pointer-events-none" />
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 )
}
