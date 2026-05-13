import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Home, Building2, Paintbrush, Droplets, TreePine, Layers } from 'lucide-react'

const coreServices = [
  {
    id: 'interior',
    icon: Home,
    title: 'Interior Painting',
    subtitle: 'Living spaces redefined',
    desc: 'We handle every surface — walls, ceilings, doors, and trim — with meticulous prep, premium paints, and precision finishing. Every room gets the treatment it deserves.',
    features: ['Wall putty & primer application', 'Single & double coat painting', 'Feature wall design', 'Ceiling painting', 'Door & window painting'],
    pricing: '₹12–₹25 per sq ft',
    img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
    popular: true,
  },
  {
    id: 'exterior',
    icon: Building2,
    title: 'Exterior Painting',
    subtitle: 'Durable protection, stunning results',
    desc: 'Exterior surfaces face harsh weather. Our coatings use weather-resistant, UV-stable paints from leading brands, ensuring your property looks fresh for years.',
    features: ['Surface cleaning & repair', 'Crack filling & waterproofing', 'Weather-resistant top coat', 'Anti-algae treatment', 'Multi-storey scaffolding setup'],
    pricing: '₹20–₹40 per sq ft',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
  },
  {
    id: 'texture',
    icon: Paintbrush,
    title: 'Texture & Design',
    subtitle: 'Artisan wall finishes',
    desc: 'Elevate your interiors with bespoke texture finishes, Venetian plaster, stencil art, and custom wall murals. Each project is a one-of-a-kind creation.',
    features: ['Sand texture finish', 'Venetian plaster', 'Metallic paint effects', 'Stencil & geometric patterns', 'Custom wall murals'],
    pricing: '₹80–₹250 per sq ft',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 'waterproofing',
    icon: Droplets,
    title: 'Waterproofing',
    subtitle: 'Industrial-grade protection',
    desc: 'Stop leaks before they start. Our waterproofing solutions cover rooftops, bathrooms, basements, and balconies using proven products with long-term effectiveness.',
    features: ['Roof & terrace waterproofing', 'Bathroom waterproofing', 'Basement damp treatment', 'Balcony & planter waterproofing', '5-year treatment guarantee'],
    pricing: 'Custom — contact for quote',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 'wood-metal',
    icon: TreePine,
    title: 'Wood & Metal Coating',
    subtitle: 'Protection + elegance',
    desc: 'From polished teak doors to powder-coated grills, we protect and beautify all wood and metal surfaces with durable, UV-resistant finishes.',
    features: ['Wood polishing & varnishing', 'Melamine & PU coating', 'Metal primer & enamel', 'Anti-rust treatment', 'Railing & furniture painting'],
    pricing: '₹35–₹90 per sq ft',
    img: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80',
  },
  {
    id: 'commercial',
    icon: Layers,
    title: 'Commercial Painting',
    subtitle: 'Offices, retail & more',
    desc: 'We work with builders, interior designers, and businesses on large-scale projects — offices, retail stores, hotels, and multi-unit residential complexes.',
    features: ['Flexible scheduling (weekends/nights)', 'Large-scale project management', 'Builder & contractor tie-ups', 'Annual Maintenance Contracts', 'Project manager assigned'],
    pricing: 'Volume discounts available',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
]

const packages = [
  {
    name: '1 BHK Package',
    price: '₹18,000',
    desc: 'Complete interior painting with putty + primer + 2 coats',
    features: ['~500 sq ft coverage', 'Wall putty & primer', 'Asian Paints Tractor Emulsion', 'Post-clean up', '1-year warranty'],
  },
  {
    name: '2 BHK Package',
    price: '₹32,000',
    desc: 'Full flat painting including all rooms, kitchen & bathrooms',
    features: ['~850 sq ft coverage', 'Wall putty & primer', 'Berger Silk or equivalent', 'Ceiling painting', 'Post-clean up', '2-year warranty'],
    highlight: true,
  },
  {
    name: '3 BHK Package',
    price: '₹48,000',
    desc: 'Premium interior package with color consultation included',
    features: ['~1200 sq ft coverage', 'Free color consultation', 'Dulux Velvet Touch or equivalent', '1 feature wall texture', 'Ceiling + doors', '2-year warranty'],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&q=80"
            alt="Services hero"
            fill
            priority
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a05] via-[#0f0a05]/70 to-[#0f0a05]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-4">What We Offer</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-[#f5ede0]/55 text-lg max-w-2xl mx-auto">
            From a single room to an entire building — we have the expertise, equipment, and passion to deliver extraordinary results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="space-y-20">
          {coreServices.map((svc, i) => (
            <div
              key={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={`relative overflow-hidden rounded-sm ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                {svc.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Most Popular
                  </div>
                )}
                <Image
                  src={svc.img}
                  alt={svc.title}
                  width={800}
                  height={500}
                  className="w-full h-64 md:h-80 object-cover opacity-80"
                />
              </div>

              <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-orange-500/10 border border-orange-500/20 rounded-sm flex items-center justify-center">
                    <svc.icon size={17} className="text-orange-400" />
                  </div>
                  <span className="text-sm text-orange-400">{svc.subtitle}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{svc.title}</h2>
                <p className="text-[#f5ede0]/55 leading-relaxed mb-6">{svc.desc}</p>

                <ul className="space-y-2.5 mb-6">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#f5ede0]/70">
                      <CheckCircle2 size={14} className="text-orange-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <div>
                    <span className="text-xs text-[#f5ede0]/40 uppercase tracking-wide">Starting at</span>
                    <div className="text-orange-400 font-display font-semibold">{svc.pricing}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium rounded-sm transition-colors"
                  >
                    Get Quote
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-[#140d06] border-y border-white/5">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-sm uppercase tracking-widest mb-3">Fixed Price Bundles</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Simple <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-[#f5ede0]/50 mt-4 max-w-md mx-auto">No hidden costs. No surprises. Just transparent pricing for complete peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-7 rounded-sm border transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-orange-500/10 to-[#1c1208] border-orange-500/40'
                    : 'bg-[#1c1208] border-white/5 hover:border-orange-500/20'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-4 py-1 rounded-full font-medium">
                    Best Value
                  </div>
                )}
                <h3 className="font-display text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-[#f5ede0]/45 text-sm mb-5">{pkg.desc}</p>
                <div className="text-3xl font-display font-bold gradient-text mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#f5ede0]/65">
                      <CheckCircle2 size={13} className="text-orange-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-sm text-sm font-medium transition-colors ${
                    pkg.highlight
                      ? 'bg-orange-500 hover:bg-orange-400 text-white'
                      : 'bg-white/8 hover:bg-orange-500/15 text-[#f5ede0]/80 hover:text-orange-400'
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
