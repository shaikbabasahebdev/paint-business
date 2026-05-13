'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Paintbrush2, RotateCcw } from 'lucide-react'

type Room = 'living' | 'bedroom' | 'kitchen' | 'exterior'

const rooms: { id: Room; label: string; img: string }[] = [
  { id: 'living', label: 'Living Room', img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80' },
  { id: 'bedroom', label: 'Bedroom', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80' },
  { id: 'kitchen', label: 'Kitchen', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80' },
  { id: 'exterior', label: 'Exterior', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80' },
]

const palettes = [
  {
    name: 'Warm Ivory',
    description: 'Timeless & welcoming',
    wall: '#F5ECD7',
    accent: '#C8A96E',
    trim: '#FAFAF5',
    hex: '#F5ECD7',
  },
  {
    name: 'Slate Storm',
    description: 'Bold & sophisticated',
    wall: '#4A5568',
    accent: '#718096',
    trim: '#EDF2F7',
    hex: '#4A5568',
  },
  {
    name: 'Sage Dream',
    description: 'Calm & natural',
    wall: '#8FAF8A',
    accent: '#5C8A67',
    trim: '#F7FAF7',
    hex: '#8FAF8A',
  },
  {
    name: 'Terracotta',
    description: 'Earthy & vibrant',
    wall: '#C97D4E',
    accent: '#A0522D',
    trim: '#FDF6F0',
    hex: '#C97D4E',
  },
  {
    name: 'Ocean Mist',
    description: 'Fresh & airy',
    wall: '#B2D8D8',
    accent: '#66B2B2',
    trim: '#F0F8F8',
    hex: '#B2D8D8',
  },
  {
    name: 'Midnight Navy',
    description: 'Dramatic & rich',
    wall: '#1A2744',
    accent: '#2D4A8A',
    trim: '#F0F4FF',
    hex: '#1A2744',
  },
  {
    name: 'Blush Rose',
    description: 'Soft & romantic',
    wall: '#E8B4B8',
    accent: '#C68B91',
    trim: '#FFF5F5',
    hex: '#E8B4B8',
  },
  {
    name: 'Forest Green',
    description: 'Lush & grounding',
    wall: '#2D5A27',
    accent: '#4A7C44',
    trim: '#F4F9F4',
    hex: '#2D5A27',
  },
  {
    name: 'Charcoal Noir',
    description: 'Sleek & modern',
    wall: '#2C2C2C',
    accent: '#555555',
    trim: '#F5F5F5',
    hex: '#2C2C2C',
  },
  {
    name: 'Sunshine',
    description: 'Cheerful & bright',
    wall: '#F7D070',
    accent: '#E8B84B',
    trim: '#FFFDF0',
    hex: '#F7D070',
  },
  {
    name: 'Lavender Haze',
    description: 'Dreamy & serene',
    wall: '#C3B1D4',
    accent: '#9B7EC8',
    trim: '#FAF7FF',
    hex: '#C3B1D4',
  },
  {
    name: 'Arctic White',
    description: 'Clean & crisp',
    wall: '#F8FAFB',
    accent: '#D1D8E0',
    trim: '#FFFFFF',
    hex: '#F8FAFB',
  },
]

export default function ColorVisualizerPage() {
  const [selectedRoom, setSelectedRoom] = useState<Room>('living')
  const [selectedPalette, setSelectedPalette] = useState(palettes[0])
  const [customColor, setCustomColor] = useState('#F5ECD7')
  const [useCustom, setUseCustom] = useState(false)

  const activeColor = useCustom ? customColor : selectedPalette.wall
  const room = rooms.find((r) => r.id === selectedRoom)!

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="section-padding max-w-7xl mx-auto pb-0">
        <div className="text-center mb-12">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-3">Interactive Tool</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Virtual Color <span className="gradient-text">Visualizer</span>
          </h1>
          <p className="text-[#f5ede0]/50 max-w-lg mx-auto">
            Preview paint colors on real rooms before you commit. Pick a room, choose a palette, and see how it transforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Preview Panel */}
          <div className="lg:col-span-2 space-y-4">
            {/* Room selector */}
            <div className="flex gap-2 flex-wrap">
              {rooms.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRoom(r.id)}
                  className={`px-4 py-2 text-sm rounded-sm border transition-all ${
                    selectedRoom === r.id
                      ? 'bg-orange-500 border-orange-500 text-white'
                      : 'border-white/15 text-[#f5ede0]/60 hover:border-orange-500/40 hover:text-orange-400'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {/* Room preview with color overlay */}
            <div className="relative rounded-sm overflow-hidden group">
              <Image
                src={room.img}
                alt={room.label}
                width={900}
                height={550}
                className="w-full h-72 md:h-[420px] object-cover"
              />
              {/* Color wash overlay — simulates wall color */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{ backgroundColor: activeColor, opacity: 0.35, mixBlendMode: 'multiply' }}
              />
              {/* Color badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#0f0a05]/80 backdrop-blur rounded-sm px-3 py-2">
                <div className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: activeColor }} />
                <span className="text-xs text-[#f5ede0]/80">
                  {useCustom ? customColor : selectedPalette.name}
                </span>
              </div>
            </div>

            {/* Complementary swatches */}
            {!useCustom && (
              <div className="flex gap-3 items-center p-4 bg-[#1c1208] rounded-sm">
                <span className="text-xs text-[#f5ede0]/40 uppercase tracking-wide mr-2">Palette</span>
                {(['wall', 'accent', 'trim'] as const).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-sm"
                      style={{ backgroundColor: selectedPalette[key] }}
                    />
                    <span className="text-xs text-[#f5ede0]/40 capitalize">{key}</span>
                  </div>
                ))}
                <div className="ml-auto text-xs text-[#f5ede0]/30">{selectedPalette.description}</div>
              </div>
            )}
          </div>

          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Palette grid */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-[#f5ede0]/80 uppercase tracking-wide">Colour Palettes</h3>
                <button
                  onClick={() => { setUseCustom(false); setSelectedPalette(palettes[0]) }}
                  className="flex items-center gap-1 text-xs text-[#f5ede0]/30 hover:text-orange-400 transition-colors"
                >
                  <RotateCcw size={10} /> Reset
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {palettes.map((p) => (
                  <button
                    key={p.name}
                    title={p.name}
                    onClick={() => { setSelectedPalette(p); setUseCustom(false) }}
                    className={`group relative w-full aspect-square rounded-sm border-2 transition-all ${
                      !useCustom && selectedPalette.name === p.name
                        ? 'border-orange-400 scale-105'
                        : 'border-transparent hover:border-white/30'
                    }`}
                    style={{ backgroundColor: p.hex }}
                  >
                    <span className="absolute inset-0 flex items-end justify-center pb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] bg-[#0f0a05]/70 text-white px-1 rounded whitespace-nowrap">{p.name}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom color picker */}
            <div>
              <h3 className="text-sm font-medium text-[#f5ede0]/80 uppercase tracking-wide mb-3">Custom Colour</h3>
              <div className="flex gap-3 items-center p-4 bg-[#1c1208] rounded-sm">
                <input
                  type="color"
                  value={customColor}
                  onChange={(e) => { setCustomColor(e.target.value); setUseCustom(true) }}
                  className="w-10 h-10 rounded cursor-pointer border-0 bg-transparent"
                />
                <div>
                  <div className="text-sm font-mono text-[#f5ede0]">{customColor.toUpperCase()}</div>
                  <div className="text-xs text-[#f5ede0]/40">Click to pick any color</div>
                </div>
                {useCustom && (
                  <span className="ml-auto text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">Active</span>
                )}
              </div>
            </div>

            {/* Palette info card */}
            {!useCustom && (
              <div className="p-4 bg-[#1c1208] rounded-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Paintbrush2 size={14} className="text-orange-400" />
                  <span className="text-sm font-medium text-[#f5ede0]">{selectedPalette.name}</span>
                </div>
                <p className="text-xs text-[#f5ede0]/40 mb-3">{selectedPalette.description}</p>
                <div className="text-xs text-[#f5ede0]/30 font-mono">{selectedPalette.wall}</div>
              </div>
            )}

            {/* CTA */}
            <div className="p-4 bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20 rounded-sm">
              <p className="text-sm font-medium text-[#f5ede0] mb-1">Love this color?</p>
              <p className="text-xs text-[#f5ede0]/50 mb-3">Book a free consultation and we'll match it exactly.</p>
              <Link
                href="/contact"
                className="group flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
              >
                Book consultation
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tips section */}
      <section className="section-padding max-w-7xl mx-auto pt-16">
        <h2 className="font-display text-2xl font-bold mb-8">
          Color Selection <span className="gradient-text">Tips</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { tip: 'Test before you commit', desc: 'Always paint a 30×30 cm sample patch and observe it in different lighting conditions across a full day.' },
            { tip: 'Consider the light', desc: 'North-facing rooms receive cooler light — warm tones balance this. South-facing rooms suit cooler, lighter shades.' },
            { tip: 'Follow the 60-30-10 rule', desc: '60% dominant wall color, 30% secondary (furniture), 10% accent. This creates harmony without monotony.' },
          ].map((item) => (
            <div key={item.tip} className="p-5 bg-[#1c1208] rounded-sm">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full mb-3" />
              <h4 className="text-sm font-semibold text-[#f5ede0] mb-2">{item.tip}</h4>
              <p className="text-xs text-[#f5ede0]/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
