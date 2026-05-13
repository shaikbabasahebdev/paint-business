'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', sub: 'Mon–Sat, 8am–7pm' },
  { icon: Mail, label: 'Email', value: 'hello@chromacraft.in', sub: 'We reply within 2 hours' },
  { icon: MapPin, label: 'Address', value: '123 Color Street, Indiranagar', sub: 'Bengaluru 560038' },
  { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 8am – 7pm', sub: 'Sunday: 9am – 4pm' },
]

const services = [
  'Interior Painting', 'Exterior Painting', 'Texture & Design',
  'Waterproofing', 'Wood & Metal Coating', 'Commercial Painting', 'Color Consultation'
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', area: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&q=80"
            alt="Contact us"
            fill
            priority
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a05] via-[#0f0a05]/60 to-[#0f0a05]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Let's Start Your<br />
            <span className="gradient-text">Transformation</span>
          </h1>
          <p className="text-[#f5ede0]/55 text-lg max-w-xl mx-auto">
            Book a free site inspection or ask us anything. We're here to help you make the right choice for your space.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold mb-2">Request a Free Quote</h2>
            <p className="text-[#f5ede0]/50 text-sm mb-8">Fill in the details and we'll get back within 2 hours.</p>

            {submitted ? (
              <div className="p-10 bg-[#1c1208] border border-orange-500/30 rounded-sm text-center">
                <CheckCircle size={48} className="text-orange-400 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-[#f5ede0]/55">
                  Thank you, <strong className="text-[#f5ede0]">{form.name}</strong>. Our team will contact you within 2 hours to schedule your free site inspection.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', area: '', message: '' }) }}
                  className="mt-6 text-orange-400 text-sm hover:text-orange-300 transition-colors"
                >
                  Submit another request →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#f5ede0]/50 mb-2 uppercase tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Rahul Sharma"
                      className="w-full bg-[#1c1208] focus:ring-1 focus:ring-orange-500/40 rounded-sm px-4 py-3 text-sm text-[#f5ede0] placeholder-[#f5ede0]/25 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#f5ede0]/50 mb-2 uppercase tracking-wide">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#1c1208] focus:ring-1 focus:ring-orange-500/40 rounded-sm px-4 py-3 text-sm text-[#f5ede0] placeholder-[#f5ede0]/25 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#f5ede0]/50 mb-2 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    className="w-full bg-[#1c1208] focus:ring-1 focus:ring-orange-500/40 rounded-sm px-4 py-3 text-sm text-[#f5ede0] placeholder-[#f5ede0]/25 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#f5ede0]/50 mb-2 uppercase tracking-wide">Service Required *</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1c1208] focus:ring-1 focus:ring-orange-500/40 rounded-sm px-4 py-3 text-sm text-[#f5ede0] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#f5ede0]/50 mb-2 uppercase tracking-wide">Approx. Area (sq ft)</label>
                    <input
                      type="text"
                      name="area"
                      value={form.area}
                      onChange={handleChange}
                      placeholder="e.g. 1000 sq ft or 2BHK"
                      className="w-full bg-[#1c1208] focus:ring-1 focus:ring-orange-500/40 rounded-sm px-4 py-3 text-sm text-[#f5ede0] placeholder-[#f5ede0]/25 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#f5ede0]/50 mb-2 uppercase tracking-wide">Additional Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your project — timeline, location, special requirements..."
                    className="w-full bg-[#1c1208] focus:ring-1 focus:ring-orange-500/40 rounded-sm px-4 py-3 text-sm text-[#f5ede0] placeholder-[#f5ede0]/25 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-4 bg-orange-500 hover:bg-orange-400 text-white font-medium rounded-sm transition-colors"
                >
                  <Send size={16} />
                  Submit Request — Get Free Inspection
                </button>
                <p className="text-xs text-center text-[#f5ede0]/30">No spam. We'll only contact you about your project.</p>
              </form>
            )}
          </div>

          {/* Contact Info + Image */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80"
                alt="Our team"
                width={600}
                height={350}
                className="w-full h-44 object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-medium text-[#f5ede0]">Free site inspection</p>
                <p className="text-xs text-orange-400">Within 24 hours of booking</p>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-5 bg-[#1c1208] rounded-sm hover:bg-white/5 transition-all"
                >
                  <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-sm flex items-center justify-center shrink-0">
                    <info.icon size={15} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs text-[#f5ede0]/40 mb-0.5 uppercase tracking-wide">{info.label}</p>
                    <p className="text-sm font-medium text-[#f5ede0]">{info.value}</p>
                    <p className="text-xs text-[#f5ede0]/40">{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="p-5 bg-green-500/10 border border-green-500/20 rounded-sm">
              <p className="text-sm font-medium text-green-400 mb-1">💬 WhatsApp Us Directly</p>
              <p className="text-xs text-[#f5ede0]/50 mb-3">Send photos of your space and get an instant rough estimate</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 text-sm rounded-sm transition-colors"
              >
                Open WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
