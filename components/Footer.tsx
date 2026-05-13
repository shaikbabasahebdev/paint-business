import Link from 'next/link'
import { Palette, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0703]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-400 rounded-lg flex items-center justify-center rotate-3 shadow-lg shadow-orange-500/20">
                <Palette size={17} className="text-white" />
              </div>
              <span className="font-display text-xl font-bold">
                Chroma<span className="gradient-text">Craft</span>
              </span>
            </Link>
            <p className="text-[#f5ede0]/65 text-sm leading-relaxed max-w-xs mb-6">
              Premium paint supply and expert application services. From color selection to flawless completion — we transform every space.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-xs text-[#f5ede0]/55 uppercase tracking-widest mb-3 font-semibold">Get Color Trends &amp; Tips</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-[#1c1208] rounded-lg px-3 py-2 text-xs text-[#f5ede0] placeholder-[#f5ede0]/30 outline-none focus:ring-1 focus:ring-orange-500/50 transition-all"
                />
                <button className="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white text-xs rounded-lg transition-colors whitespace-nowrap font-semibold shadow-md shadow-orange-500/20">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#f5ede0]/55 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold text-[#f5ede0] mb-5 tracking-wider uppercase">Services</h4>
            <ul className="space-y-3 text-sm text-[#f5ede0]/60">
              {['Interior Painting', 'Exterior Painting', 'Texture & Stencil', 'Waterproofing', 'Wood & Metal Coating', 'Commercial Painting'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-orange-400 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-sm font-bold text-[#f5ede0] mb-5 tracking-wider uppercase">Explore</h4>
            <ul className="space-y-3 text-sm text-[#f5ede0]/60">
              {[
                { href: '/visualizer', label: 'Color Visualizer' },
                { href: '/calculator', label: 'Cost Calculator' },
                { href: '/blog', label: 'Tips & Ideas Blog' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Book Inspection' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-orange-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-[#f5ede0] mb-5 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-[#f5ede0]/60">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-orange-400 mt-0.5 shrink-0" />
                <span>123 Color Street, Indiranagar, Bengaluru 560038</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-orange-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-orange-400 shrink-0" />
                <span>hello@chromacraft.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#f5ede0]/45">
          <span>© 2024 ChromaCraft Painting Services. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-orange-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-orange-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
