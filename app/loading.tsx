export default function Loading() {
  return (
    <div className="min-h-screen pt-20 animate-pulse">
      {/* Hero skeleton */}
      <div className="h-72 md:h-96 bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 space-y-12">
        {/* Title skeleton */}
        <div className="space-y-3 max-w-lg">
          <div className="h-4 w-32 bg-white/5 rounded-full" />
          <div className="h-10 w-96 bg-white/8 rounded-sm" />
          <div className="h-10 w-72 bg-white/5 rounded-sm" />
          <div className="h-5 w-80 bg-white/5 rounded-sm mt-4" />
        </div>

        {/* Card grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#1c1208] rounded-sm overflow-hidden">
              <div className="h-44 bg-white/5" />
              <div className="p-5 space-y-3">
                <div className="h-4 w-24 bg-white/5 rounded-full" />
                <div className="h-5 w-full bg-white/8 rounded-sm" />
                <div className="h-4 w-3/4 bg-white/5 rounded-sm" />
                <div className="h-4 w-1/2 bg-white/5 rounded-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
