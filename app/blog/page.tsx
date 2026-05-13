import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'

const posts = [
  {
    slug: 'interior-painting-tips-2024',
    title: '10 Interior Painting Tips Every Homeowner Should Know',
    excerpt: 'From prep work to picking the right finish — avoid the common mistakes that make paint jobs look amateurish.',
    category: 'Tips & Tricks',
    readTime: '5 min',
    author: 'Ananya Krishnan',
    date: 'Dec 12, 2024',
    img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=700&q=80',
    featured: true,
  },
  {
    slug: 'choosing-exterior-paint-bangalore',
    title: 'Choosing Exterior Paint for Bengaluru\'s Climate',
    excerpt: 'Monsoons, heat, and humidity demand specific coatings. Here\'s what works — and what peels within a year.',
    category: 'Exterior',
    readTime: '4 min',
    author: 'Vikram Rao',
    date: 'Nov 28, 2024',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80',
  },
  {
    slug: 'texture-painting-trends',
    title: 'Texture Painting Trends Taking Over Indian Homes in 2025',
    excerpt: 'Venetian plaster, metallic accents, and 3D wall panels — the texture styles that designers are loving right now.',
    category: 'Design Trends',
    readTime: '6 min',
    author: 'Ananya Krishnan',
    date: 'Nov 15, 2024',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  },
  {
    slug: 'waterproofing-before-monsoon',
    title: 'Why You Must Waterproof Before Bengaluru\'s Monsoon',
    excerpt: 'Roof leaks, seepage, and damp walls — three problems that cost 10x more to fix than to prevent.',
    category: 'Waterproofing',
    readTime: '4 min',
    author: 'Suresh Pillai',
    date: 'Oct 30, 2024',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
  },
  {
    slug: 'colour-psychology-home',
    title: 'The Psychology of Colour: How Paint Affects Your Mood',
    excerpt: 'Science-backed insights on how wall colors influence energy, focus, and emotional well-being in each room.',
    category: 'Color Theory',
    readTime: '7 min',
    author: 'Ananya Krishnan',
    date: 'Oct 18, 2024',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=700&q=80',
  },
  {
    slug: 'how-to-maintain-painted-walls',
    title: 'How to Maintain Your Painted Walls for Maximum Longevity',
    excerpt: 'Simple maintenance habits that can double the lifespan of your paint job and keep walls looking fresh.',
    category: 'Maintenance',
    readTime: '3 min',
    author: 'Suresh Pillai',
    date: 'Sep 22, 2024',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80',
  },
]

const categories = ['All', 'Tips & Tricks', 'Exterior', 'Design Trends', 'Waterproofing', 'Color Theory', 'Maintenance']

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding max-w-7xl mx-auto pb-0">
        <div className="text-center mb-12">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-3">Expert Insights</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Painting <span className="gradient-text">Tips & Ideas</span>
          </h1>
          <p className="text-[#f5ede0]/50 max-w-lg mx-auto">
            Color advice, project guides, and industry insights from our team of painting professionals.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap justify-center mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 text-xs rounded-full border transition-all ${
                cat === 'All'
                  ? 'bg-orange-500 border-orange-500 text-white'
                  : 'border-white/15 text-[#f5ede0]/55 hover:border-orange-500/40 hover:text-orange-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-20 max-w-7xl mx-auto">
        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-[#1c1208] rounded-sm hover:bg-[#221408] transition-all">
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src={featured.img}
                alt={featured.title}
                width={700}
                height={400}
                className="w-full h-56 md:h-72 object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Featured
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag size={10} /> {featured.category}
                </span>
                <span className="text-xs text-[#f5ede0]/35 flex items-center gap-1">
                  <Clock size={10} /> {featured.readTime} read
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                {featured.title}
              </h2>
              <p className="text-[#f5ede0]/55 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#f5ede0]/40">
                  <User size={11} /> {featured.author} · {featured.date}
                </div>
                <span className="flex items-center gap-1 text-sm text-orange-400 group-hover:gap-2 transition-all">
                  Read more <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="bg-[#1c1208] rounded-sm overflow-hidden hover:bg-[#221408] transition-all h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={700}
                    height={400}
                    className="w-full h-44 object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-[#f5ede0]/35 flex items-center gap-1">
                      <Clock size={9} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold mb-2 group-hover:text-orange-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#f5ede0]/45 text-xs leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <span className="text-xs text-[#f5ede0]/30">{post.date}</span>
                    <span className="text-xs text-orange-400">Read →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
