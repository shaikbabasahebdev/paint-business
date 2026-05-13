import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Users, MapPin, Zap } from 'lucide-react'

const team = [
  { name: 'Vikram Rao', role: 'Founder & Master Painter', exp: '18 years experience', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80' },
  { name: 'Ananya Krishnan', role: 'Color Consultant', exp: 'Certified CIPA consultant', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80' },
  { name: 'Suresh Pillai', role: 'Operations Manager', exp: 'Project delivery specialist', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80' },
  { name: 'Meena Desai', role: 'Client Relations', exp: 'Customer experience expert', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80' },
]

const milestones = [
  { year: '2016', event: 'Founded in Indiranagar, Bengaluru with a 3-person team' },
  { year: '2018', event: 'Expanded to texture & premium finishes division' },
  { year: '2020', event: 'Launched B2B contractor partnerships with 20+ builders' },
  { year: '2022', event: 'Crossed 1000 projects, opened second service center' },
  { year: '2024', event: 'Introduced AR-powered virtual color preview for clients' },
]

const brands = ['Asian Paints', 'Berger Paints', 'Dulux', 'Nippon Paint', 'Jotun', 'Kansai Nerolac']

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80"
            alt="About us"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a05] via-[#0f0a05]/60 to-[#0f0a05]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">ChromaCraft</span>
          </h1>
          <p className="text-[#f5ede0]/70 text-lg max-w-2xl mx-auto">
            Born from a passion for color, built on a foundation of craft. We’ve been transforming Bengaluru’s spaces since 2016.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-400 text-sm uppercase tracking-widest mb-4">Our Mission</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Painting Is More Than<br />
              <span className="gradient-text">Covering Walls</span>
            </h2>
            <div className="space-y-5 text-[#f5ede0]/72 leading-relaxed">
              <p>
                ChromaCraft was founded in 2016 with a simple belief: every space deserves to be beautiful, and every client deserves transparent, trustworthy service.
              </p>
              <p>
                We started with a small team in Indiranagar and have grown into Bengaluru's most trusted painting company — not by being the cheapest, but by being consistently excellent.
              </p>
              <p>
                Today, we serve homeowners, builders, interior designers, and commercial clients across the city with a team of 40+ skilled professionals and a portfolio of over 1,200 completed projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: Award, label: 'Award-Winning Quality' },
                { icon: Users, label: '40+ Skilled Professionals' },
                { icon: MapPin, label: 'Pan-Bengaluru Reach' },
                { icon: Zap, label: 'Fast Turnaround' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-orange-400" />
                  </div>
                  <span className="text-sm text-[#f5ede0]/80 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80"
                alt="Team at work"
                width={400}
                height={300}
                className="w-full rounded-xl object-cover opacity-90 mt-8 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80"
                alt="Painting detail"
                width={400}
                height={200}
                className="w-full rounded-xl object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="space-y-4">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                alt="Color consultation"
                width={400}
                height={200}
                className="w-full rounded-xl object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
                alt="Finished project"
                width={400}
                height={300}
                className="w-full rounded-xl object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#140d06] border-y border-white/5">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-sm uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="gradient-text">8 Years</span> of Growth
            </h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start pl-4">
                  <div className="relative w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shrink-0 z-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <div className="text-orange-400 text-sm font-semibold mb-1">{m.year}</div>
                    <p className="text-[#f5ede0]/65 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-3">The People Behind the Paint</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Meet the <span className="gradient-text">Team</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative overflow-hidden rounded-sm mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05]/60 to-transparent" />
              </div>
              <h4 className="font-display text-lg font-semibold mb-1">{member.name}</h4>
              <p className="text-orange-400 text-sm mb-1">{member.role}</p>
              <p className="text-[#f5ede0]/40 text-xs">{member.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Partners */}
      <section className="bg-[#140d06] border-y border-white/5">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#f5ede0]/40 text-sm uppercase tracking-widest">We Work With Leading Brands</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {brands.map((brand) => (
              <div
                key={brand}
                className="px-6 py-3 rounded-sm text-[#f5ede0]/40 text-sm hover:text-[#f5ede0]/70 hover:bg-white/5 transition-all"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding max-w-7xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Let's Work <span className="gradient-text">Together</span>
        </h2>
        <p className="text-[#f5ede0]/50 text-lg mb-10 max-w-lg mx-auto">
          Whether it's your first home or your 50th project, we bring the same level of dedication to every job.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-medium rounded-sm transition-colors"
        >
          Start Your Project
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  )
}
