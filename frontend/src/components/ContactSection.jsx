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
  Sparkles,
  ArrowUpRight
} from 'lucide-react'

export default function ContactSection() {
  const emailAddress = 'ben.dev@example.com'
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

    // Basic Client-Side Validation
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

    // Simulate backend / API Route / Web3Forms submission call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try emailing directly.')
    }
  }

  return (
    <section id="contact" className="py-24 border-b border-slate-800/60 relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-sky-500/20">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Start a Conversation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind, an engineering role, or a technical inquiry? Send a direct message or copy my email below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Plain-Text Fallback & Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
                    Direct Email Contact
                  </h3>
                  <p className="text-xs text-slate-400">Response within 24 hours guaranteed</p>
                </div>
              </div>

              {/* Plain-Text Email Box with Copy to Clipboard Button */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Primary Email Address
                </label>
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm">
                  <span className="text-sky-300 font-semibold truncate">{emailAddress}</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500 hover:text-slate-950 text-sky-400 font-sans text-xs font-bold transition-all shrink-0"
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Based in Cameroon · Available for Global Remote Work</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>Timezone: WAT (UTC+1) / Flexible for EU & US overlap</span>
                </div>
              </div>

              {/* External Direct Links */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <span>Open Mail App</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the form below to initiate collaboration
                  </p>
                </div>
              </div>

              {/* Form Validation Feedback Banner */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <div>
                    <strong className="font-bold block">Message Sent Successfully!</strong>
                    <span>Thank you for reaching out. I'll get back to you shortly.</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                  <AlertCircle size={18} className="shrink-0" />
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"
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
                    placeholder="Engineering Role / Project Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600"
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
                    placeholder="Tell me about your project or opportunity details..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:from-sky-300 hover:to-cyan-200 shadow-lg shadow-sky-500/20 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
