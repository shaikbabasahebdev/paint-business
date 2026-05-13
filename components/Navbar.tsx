'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Palette } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/visualizer', label: 'Visualizer' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0a05]/92 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-400 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-orange-500/25">
            <Palette size={17} className="text-white" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            Chroma<span className="gradient-text">Craft</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#f5ede0]/75 hover:text-orange-400 transition-colors duration-200 tracking-wide font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40"
          >
            Get Free Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#f5ede0]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1c1208] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#f5ede0]/85 hover:text-orange-400 transition-colors text-base font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block mt-2 px-5 py-3 bg-orange-500 text-white text-sm font-semibold rounded-lg text-center shadow-md shadow-orange-500/25"
            onClick={() => setOpen(false)}
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </header>
  )
}
