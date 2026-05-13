import Link from 'next/link'
import { ArrowRight, Palette } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Paint splat visual */}
      <div className="relative mb-10">
        <div className="w-40 h-40 bg-gradient-to-br from-orange-500/20 to-amber-400/10 rounded-full blur-2xl absolute inset-0" />
        <div className="relative flex items-center justify-center w-40 h-40">
          <Palette size={56} className="text-orange-500/60" />
          <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full opacity-80" />
          <div className="absolute bottom-6 left-5 w-5 h-5 bg-amber-400 rounded-full opacity-60" />
          <div className="absolute bottom-4 right-6 w-3 h-3 bg-red-400 rounded-full opacity-50" />
        </div>
      </div>

      <p className="text-orange-400 text-sm uppercase tracking-widest mb-4">404 — Page Not Found</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
        Oops, this wall's{' '}
        <span className="gradient-text">blank</span>
      </h1>
      <p className="text-[#f5ede0]/50 text-lg max-w-md mb-10">
        Looks like we haven't painted this page yet. Let's get you back to something colorful.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="group flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-medium rounded-sm transition-colors"
        >
          Back to Home
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/contact"
          className="px-7 py-3.5 bg-white/8 hover:bg-white/14 text-[#f5ede0]/70 hover:text-orange-400 font-medium rounded-sm transition-all"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  )
}
