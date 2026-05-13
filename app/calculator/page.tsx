'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, Info, Calculator } from 'lucide-react'

type ServiceType = 'interior' | 'exterior' | 'texture' | 'waterproofing'
type QualityTier = 'standard' | 'premium' | 'luxury'
type CoatCount = 1 | 2 | 3

const serviceRates: Record<ServiceType, Record<QualityTier, number>> = {
  interior:      { standard: 12, premium: 18, luxury: 25 },
  exterior:      { standard: 20, premium: 30, luxury: 40 },
  texture:       { standard: 80, premium: 150, luxury: 250 },
  waterproofing: { standard: 45, premium: 70, luxury: 100 },
}

const serviceLabels: Record<ServiceType, string> = {
  interior: 'Interior Painting',
  exterior: 'Exterior Painting',
  texture: 'Texture / Design Finish',
  waterproofing: 'Waterproofing',
}

const tierLabels: Record<QualityTier, { label: string; brand: string }> = {
  standard: { label: 'Standard', brand: 'Asian Paints Tractor / Berger Easy Clean' },
  premium:  { label: 'Premium', brand: 'Asian Paints Royale / Dulux Velvet Touch' },
  luxury:   { label: 'Luxury', brand: 'Dulux Weathershield / Berger Silk Glamour' },
}

const addOns = [
  { id: 'putty', label: 'Wall Putty & Primer', ratePerSqft: 8, desc: 'Smooth base for better finish & longevity' },
  { id: 'cleanup', label: 'Post-work Cleanup', fixed: 1500, desc: 'Professional cleaning after painting' },
  { id: 'furniture', label: 'Furniture Moving', fixed: 2000, desc: 'Move & protect furniture during work' },
  { id: 'consultation', label: 'Color Consultation', fixed: 0, desc: 'Free expert color advice (always free!)' },
]

const bhkPresets = [
  { label: '1 BHK', sqft: 500 },
  { label: '2 BHK', sqft: 850 },
  { label: '3 BHK', sqft: 1200 },
  { label: '4 BHK', sqft: 1700 },
  { label: 'Villa', sqft: 3000 },
]

export default function PricingCalculatorPage() {
  const [service, setService] = useState<ServiceType>('interior')
  const [quality, setQuality] = useState<QualityTier>('premium')
  const [sqft, setSqft] = useState(850)
  const [coats, setCoats] = useState<CoatCount>(2)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['putty', 'cleanup'])

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    )
  }

  const estimate = useMemo(() => {
    const baseRate = serviceRates[service][quality]
    const coatMultiplier = coats === 1 ? 0.7 : coats === 3 ? 1.25 : 1
    const baseCost = baseRate * sqft * coatMultiplier

    let addOnCost = 0
    for (const id of selectedAddOns) {
      const addOn = addOns.find((a) => a.id === id)!
      if ('ratePerSqft' in addOn) addOnCost += (addOn.ratePerSqft || 0) * sqft
      else if ('fixed' in addOn) addOnCost += addOn.fixed || 0
    }

    const subtotal = baseCost + addOnCost
    const gst = subtotal * 0.18
    const total = subtotal + gst

    return {
      baseCost: Math.round(baseCost),
      addOnCost: Math.round(addOnCost),
      subtotal: Math.round(subtotal),
      gst: Math.round(gst),
      total: Math.round(total),
      perSqft: Math.round(total / sqft),
    }
  }, [service, quality, sqft, coats, selectedAddOns])

  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-3">Estimate Tool</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Painting Cost <span className="gradient-text">Calculator</span>
          </h1>
          <p className="text-[#f5ede0]/50 max-w-lg mx-auto">
            Get an instant indicative estimate for your painting project. Final quote provided after site inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Controls */}
          <div className="lg:col-span-3 space-y-8">

            {/* Service Type */}
            <div>
              <label className="block text-xs text-[#f5ede0]/50 uppercase tracking-widest mb-3">Service Type</label>
              <div className="grid grid-cols-2 gap-3">
                {(Object.keys(serviceLabels) as ServiceType[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setService(s)}
                    className={`p-4 rounded-sm border text-left transition-all ${
                      service === s
                        ? 'bg-orange-500/10 border-orange-500/50 text-orange-400'
                        : 'bg-[#1c1208] border-white/5 text-[#f5ede0]/60 hover:border-white/15'
                    }`}
                  >
                    <div className="text-sm font-medium">{serviceLabels[s]}</div>
                    <div className="text-xs mt-0.5 opacity-60">
                      ₹{serviceRates[s].standard}–₹{serviceRates[s].luxury}/sqft
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Area */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs text-[#f5ede0]/50 uppercase tracking-widest">Area (sq ft)</label>
                <span className="text-orange-400 font-display font-bold text-lg">{sqft.toLocaleString()} sq ft</span>
              </div>
              {/* BHK presets */}
              <div className="flex gap-2 flex-wrap mb-4">
                {bhkPresets.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => setSqft(p.sqft)}
                    className={`px-3 py-1.5 text-xs rounded-sm border transition-all ${
                      sqft === p.sqft
                        ? 'bg-orange-500/20 border-orange-500/50 text-orange-400'
                        : 'border-white/10 text-[#f5ede0]/50 hover:border-white/25'
                    }`}
                  >
                    {p.label} <span className="opacity-50">~{p.sqft}</span>
                  </button>
                ))}
              </div>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full accent-orange-500 h-1.5 rounded-full bg-white/10 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-[#f5ede0]/25 mt-1">
                <span>100</span><span>5000 sq ft</span>
              </div>
            </div>

            {/* Quality tier */}
            <div>
              <label className="block text-xs text-[#f5ede0]/50 uppercase tracking-widest mb-3">Paint Quality</label>
              <div className="grid grid-cols-3 gap-3">
                {(Object.keys(tierLabels) as QualityTier[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setQuality(t)}
                    className={`p-3 rounded-sm border text-center transition-all ${
                      quality === t
                        ? 'bg-orange-500/10 border-orange-500/50 text-orange-400'
                        : 'bg-[#1c1208] border-white/5 text-[#f5ede0]/60 hover:border-white/15'
                    }`}
                  >
                    <div className="text-sm font-medium">{tierLabels[t].label}</div>
                    <div className="text-[10px] mt-1 opacity-50 leading-tight">{tierLabels[t].brand.split(' / ')[0]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Number of coats */}
            <div>
              <label className="block text-xs text-[#f5ede0]/50 uppercase tracking-widest mb-3">Number of Coats</label>
              <div className="flex gap-3">
                {([1, 2, 3] as CoatCount[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCoats(c)}
                    className={`flex-1 py-3 rounded-sm border text-sm font-medium transition-all ${
                      coats === c
                        ? 'bg-orange-500/10 border-orange-500/50 text-orange-400'
                        : 'bg-[#1c1208] border-white/5 text-[#f5ede0]/60 hover:border-white/15'
                    }`}
                  >
                    {c} Coat{c > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
              <p className="text-xs text-[#f5ede0]/30 mt-2 flex items-center gap-1">
                <Info size={11} /> 2 coats recommended for a professional, lasting finish
              </p>
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-xs text-[#f5ede0]/50 uppercase tracking-widest mb-3">Add-ons</label>
              <div className="space-y-2">
                {addOns.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => toggleAddOn(a.id)}
                    disabled={a.id === 'consultation'}
                    className={`w-full flex items-center justify-between p-4 rounded-sm border text-left transition-all ${
                      selectedAddOns.includes(a.id)
                        ? 'bg-orange-500/5 border-orange-500/30 text-[#f5ede0]'
                        : 'bg-[#1c1208] border-white/5 text-[#f5ede0]/50 hover:border-white/15'
                    } ${a.id === 'consultation' ? 'opacity-80 cursor-default' : ''}`}
                  >
                    <div>
                      <span className="text-sm">{a.label}</span>
                      <span className="text-xs opacity-50 ml-2">{a.desc}</span>
                    </div>
                    <span className="text-xs text-orange-400 shrink-0 ml-4">
                      {'ratePerSqft' in a
                        ? `₹${a.ratePerSqft}/sqft`
                        : a.fixed === 0
                        ? 'FREE'
                        : `₹${a.fixed}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimate Panel */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-4">
              <div className="p-6 bg-[#1c1208] rounded-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator size={16} className="text-orange-400" />
                  <h2 className="text-sm font-semibold text-[#f5ede0]/80 uppercase tracking-wide">Your Estimate</h2>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#f5ede0]/50">
                      {serviceLabels[service]} ({sqft} sqft × {coats} coat{coats > 1 ? 's' : ''})
                    </span>
                    <span className="text-[#f5ede0]">₹{estimate.baseCost.toLocaleString()}</span>
                  </div>
                  {estimate.addOnCost > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-[#f5ede0]/50">Add-ons</span>
                      <span className="text-[#f5ede0]">₹{estimate.addOnCost.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm border-t border-white/5 pt-3">
                    <span className="text-[#f5ede0]/50">Subtotal</span>
                    <span className="text-[#f5ede0]">₹{estimate.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#f5ede0]/50">GST (18%)</span>
                    <span className="text-[#f5ede0]">₹{estimate.gst.toLocaleString()}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/5 border border-orange-500/20 rounded-sm p-4 mb-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-[#f5ede0]/40 mb-1">Estimated Total</div>
                      <div className="font-display text-3xl font-bold gradient-text">
                        ₹{estimate.total.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#f5ede0]/40 mb-1">Per sq ft</div>
                      <div className="text-lg font-display font-semibold text-orange-400">
                        ₹{estimate.perSqft}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#f5ede0]/30 mb-5 flex gap-2">
                  <Info size={11} className="shrink-0 mt-0.5" />
                  This is an indicative estimate. Final pricing confirmed after our free site inspection.
                </p>

                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 w-full py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-medium rounded-sm transition-colors"
                >
                  Book Free Site Inspection
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Savings tip */}
              <div className="p-4 bg-green-500/5 border border-green-500/15 rounded-sm">
                <p className="text-xs text-green-400 font-medium mb-1">💡 Pro tip</p>
                <p className="text-xs text-[#f5ede0]/45">
                  Combining interior + exterior painting in one booking saves you up to 15% on labor. Ask us about bundle deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
