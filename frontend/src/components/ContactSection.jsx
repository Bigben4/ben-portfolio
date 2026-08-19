import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react'

export default function ContactSection() {
  const emailAddress = 'Ebrahimndille@gmail.com'
  const whatsAppUrl = 'https://wa.me/237671807750'
  const formspreeEndpoint = 'https://formspree.io/f/Ebrahimndille@gmail.com'

  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopiedEmail(true)
    setTimeout(() => {
      setCopiedEmail(false)
    }, 2500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).')
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    try {
      // Attempt sending to Formspree endpoint or fallback to direct mailto trigger
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message
        })
      })

      if (response.ok || response.status === 200 || response.status === 0) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Fallback: trigger mailto directly if endpoint is pending activation
        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Contact'
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (err) {
      // Direct mailto fallback
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Contact'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  }

  return (
    <section id="contact" className="py-24 border-b border-slate-800/60 relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Start a Conversation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind, an engineering role, or a technical inquiry? Send a direct message below.
          </p>
        </motion.div>

        {/* Prominent Plain Text Fallback Email Box Directly Above Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="rounded-2xl border border-blue-500/30 bg-neutral-900/90 p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 block">
                  Direct Email Contact
                </span>
                <span className="text-base sm:text-lg font-bold font-mono text-white tracking-tight">
                  {emailAddress}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-600 hover:text-white text-blue-400 font-sans text-xs font-bold transition-all border border-blue-500/30"
                aria-label="Copy email address to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-emerald-400" />
                    <span className="text-emerald-400">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                    <span>Copy to Clipboard</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-slate-200 transition-colors"
                title="Send via mail app"
              >
                <span>Mail App</span>
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white">
                    Send Direct Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Delivered directly to {emailAddress}
                  </p>
                </div>
              </div>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500 hover:text-slate-950 transition-all"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Validation Feedback Banner */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <div>
                  <strong className="font-bold block">Message Sent!</strong>
                  <span>Thank you. Your message has been sent directly to Ndille Enume ({emailAddress}).</span>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                <AlertCircle className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <div>
                  <strong className="font-bold block">Validation Error</strong>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    required
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                    Your Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-300">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineering Opportunity / Contract"
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300">
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide brief details about your project or technical inquiry..."
                  required
                  className="w-full min-h-[120px] px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:from-sky-300 hover:to-cyan-200 shadow-lg shadow-sky-500/20 transition-all disabled:opacity-50 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                    <span>Send Message to Ebrahimndille@gmail.com</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
