import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Shield, Clock, Paintbrush, Droplets, Home, Building2, CheckCircle2 } from 'lucide-react'

const stats = [
  { value: '1200+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '8 Yrs', label: 'Industry Experience' },
  { value: '150+', label: 'Color Palette Options' },
]

const services = [
  {
    icon: Home,
    title: 'Interior Painting',
    desc: 'Transform living spaces with precision finishing, from accent walls to full-room transformations.',
    price: 'From ₹12/sq ft',
    img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80',
  },
  {
    icon: Building2,
    title: 'Exterior Painting',
    desc: 'Weather-resistant coatings that protect and beautify your property exterior for years.',
    price: 'From ₹20/sq ft',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
  },
  {
    icon: Paintbrush,
    title: 'Texture & Design',
    desc: 'Artisan texture finishes, stencil work, and custom wall murals that make every room unique.',
    price: 'From ₹80/sq ft',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    icon: Droplets,
    title: 'Waterproofing',
    desc: 'Industrial-grade waterproofing solutions for roofs, bathrooms, and basements.',
    price: 'Custom pricing',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
]

const whyUs = [
  { icon: Shield, title: 'Quality Guaranteed', desc: 'Every project comes with our 2-year workmanship warranty' },
  { icon: Clock, title: 'On-Time Delivery', desc: '2BHK painting completed in 2 days, or we refund the delay cost' },
  { icon: Star, title: 'Premium Materials', desc: 'We use Asian Paints, Berger & Dulux — top-grade paints only' },
  { icon: CheckCircle2, title: 'Zero Mess Promise', desc: 'Full post-work cleanup included in every package' },
]

const galleryItems = [
  { img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=80', label: 'Living Room Makeover' },
  { img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80', label: 'Textured Accent Wall' },
  { img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80', label: 'Exterior Refresh' },
  { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80', label: 'Office Renovation' },
  { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80', label: 'Luxury Villa Finish' },
]

const testimonials = [
  {
    name: 'Priya Nair',
    role: 'Homeowner, Koramangala',
    text: 'ChromaCraft completely transformed our 3BHK. The team was professional, fast, and the finish is immaculate. Worth every rupee.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
  },
  {
    name: 'Arjun Mehta',
    role: 'Builder, Whitefield',
    text: 'We\'ve used them for 12 projects. Reliable, quality work, and they always deliver on schedule. Best B2B paint partner in Bengaluru.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
  },
  {
    name: 'Deepa Srinivas',
    role: 'Interior Designer',
    text: 'Their texture work is exceptional. Clients are always blown away. I exclusively recommend ChromaCraft to all my clients now.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=85"
            alt="Beautiful painted interior"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a05] via-[#0f0a05]/90 to-[#0f0a05]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05] via-transparent to-transparent" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-32 right-20 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-40 w-56 h-56 bg-amber-400/6 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-orange-600/4 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/40 rounded-full text-xs text-orange-300 mb-8 bg-orange-500/8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
              Serving Bengaluru & surrounding areas
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Color that{' '}
              <span className="gradient-text italic">Speaks</span>
              <br />
              Quality that{' '}
              <span className="relative inline-block paint-brush-line">Lasts</span>
            </h1>

            <p className="text-[#f5ede0]/75 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Premium paint supply and expert application services. From color consultation to flawless completion — we transform every space.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary group"
              >
                Get Free Site Inspection
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="btn-ghost"
              >
                View Services
              </Link>
            </div>

            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-6 mt-12">
              {['Licensed & Insured', 'Free Color Consultation', '2-Year Warranty'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-[#f5ede0]/65">
                  <CheckCircle2 size={14} className="text-orange-400" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating card */}
        <div className="absolute bottom-12 right-8 md:right-20 hidden lg:block">
          <div className="bg-[#1c1208]/95 backdrop-blur-md rounded-lg p-5 w-60 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-[10px] text-[#f5ede0]/50 ml-1">5.0</span>
            </div>
            <p className="text-xs text-[#f5ede0]/80 mb-3 leading-relaxed">"Flawless finish, amazing team!"</p>
            <div className="divider-glow mb-3" />
            <div className="flex items-center gap-2">
              <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&q=80" alt="reviewer" width={28} height={28} className="rounded-full object-cover ring-1 ring-orange-500/30" />
              <div>
                <p className="text-xs font-semibold text-[#f5ede0]">Rohit K.</p>
                <p className="text-[10px] text-orange-400/70">Verified Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#140d06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center group">
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm text-[#f5ede0]/60 font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-eyebrow">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Painting Solutions<br />
              <span className="gradient-text italic">Built for Every Need</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors whitespace-nowrap font-medium"
          >
            View all services
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="group relative overflow-hidden rounded-lg card-glow transition-all duration-300 bg-[#140d06]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05] via-[#0f0a05]/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center">
                      <svc.icon size={16} className="text-orange-400" />
                    </div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">{svc.title}</h3>
                  </div>
                  <span className="text-xs text-orange-300 bg-orange-500/12 border border-orange-500/20 px-3 py-1 rounded-full font-medium">{svc.price}</span>
                </div>
                <p className="text-[#f5ede0]/65 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#140d06]">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-eyebrow justify-center">Why ChromaCraft</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              The Difference Is<br />
              <span className="gradient-text italic">In The Details</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="p-7 bg-[#1c1208] rounded-lg card-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/25 to-amber-500/10 border border-orange-500/25 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={20} className="text-orange-400" />
                </div>
                <h4 className="font-display text-base font-bold mb-2 tracking-tight">{item.title}</h4>
                <p className="text-[#f5ede0]/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* GALLERY */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-eyebrow">Our Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Before &amp; After<br />
              <span className="gradient-text italic">Transformations</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Large left */}
          <div className="col-span-12 md:col-span-5 group relative overflow-hidden rounded-xl">
            <Image
              src={galleryItems[0].img}
              alt={galleryItems[0].label}
              width={500}
              height={600}
              className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05]/90 via-[#0f0a05]/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-sm font-semibold text-[#f5ede0] bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">{galleryItems[0].label}</span>
            </div>
          </div>

          {/* Right grid */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4">
            {galleryItems.slice(1).map((item) => (
              <div key={item.label} className="group relative overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  alt={item.label}
                  width={500}
                  height={400}
                  className="w-full h-44 md:h-52 object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-semibold text-[#f5ede0] bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#140d06]">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-eyebrow justify-center">Client Stories</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              What Our Clients<br />
              <span className="gradient-text italic">Are Saying</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-7 bg-[#1c1208] rounded-xl card-glow">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[#f5ede0]/75 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="divider-glow mb-5" />
                <div className="flex items-center gap-3">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover ring-2 ring-orange-500/25"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[#f5ede0]">{t.name}</div>
                    <div className="text-xs text-orange-400/70">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl p-10 md:p-16 text-center" style={{background: 'linear-gradient(135deg, #c2410c 0%, #f97316 40%, #fbbf24 100%)'}}>
          <div className="absolute inset-0 opacity-15">
            <Image src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80" alt="" fill className="object-cover mix-blend-overlay" />
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -translate-x-1/4 translate-y-1/4" />
          <div className="relative z-10">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-[0.2em] mb-4">— Free Consultation —</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to Transform<br className="hidden md:block" /> Your Space?
            </h2>
            <p className="text-white/85 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Book a free site inspection today. Our expert team will visit, assess, and give you a detailed quote — no obligations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#0f0a05] text-white font-semibold rounded-lg hover:bg-[#1c1208] transition-all duration-200 shadow-lg shadow-black/30"
              >
                Book Free Inspection
              </Link>
              <a
                href="tel:+919876543210"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/35 transition-all duration-200"
              >
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
