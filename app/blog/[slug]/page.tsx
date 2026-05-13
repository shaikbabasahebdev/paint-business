import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Tag, ArrowRight } from 'lucide-react'

// In production this would come from a CMS / DB
const postData: Record<string, {
  title: string
  category: string
  readTime: string
  author: string
  authorRole: string
  date: string
  heroImg: string
  authorImg: string
  content: { type: 'h2' | 'p' | 'ul' | 'tip'; text?: string; items?: string[] }[]
}> = {
  'interior-painting-tips-2024': {
    title: '10 Interior Painting Tips Every Homeowner Should Know',
    category: 'Tips & Tricks',
    readTime: '5 min',
    author: 'Ananya Krishnan',
    authorRole: 'Certified Color Consultant',
    date: 'December 12, 2024',
    heroImg: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80',
    authorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
    content: [
      { type: 'p', text: 'Whether you\'re freshening up a room or doing a full-home transformation, interior painting is one of the most cost-effective ways to elevate your space. But poor preparation and technique can turn a 2-day job into a month-long headache.' },
      { type: 'h2', text: '1. Prep is 80% of the job' },
      { type: 'p', text: 'A flawless finish starts long before the first coat of paint. Fill cracks, sand rough spots, clean surfaces of dust and grease. Skipping prep is the single biggest cause of peeling and uneven texture.' },
      { type: 'h2', text: '2. Always use wall putty before primer' },
      { type: 'p', text: 'In India\'s climate, walls develop micro-cracks and surface irregularities rapidly. A layer of wall putty, properly sanded after drying, creates the smooth canvas that makes premium paint shine.' },
      { type: 'h2', text: '3. Never skip primer' },
      { type: 'p', text: 'Primer improves adhesion, blocks stains, and reduces the number of top coats needed. Always use a tinted primer close to your final paint color — it improves coverage dramatically.' },
      { type: 'tip', text: 'Pro Tip: For dark colors, ask your paint supplier to tint the primer to 50% of your final color. This can reduce top coats from 3 to 2, saving money without compromising finish.' },
      { type: 'h2', text: '4. Invest in quality brushes and rollers' },
      { type: 'p', text: 'A cheap roller leaves texture marks and sheds fibers. A quality 9" roller with the right nap for your surface type will give you a factory-smooth finish. For edges and corners, a 2" angled sash brush is essential.' },
      { type: 'h2', text: '5. Cut in before rolling' },
      { type: 'p', text: 'Always paint a 2–3 inch strip along edges, corners, and trim with a brush before rolling the main wall surface. This technique — called "cutting in" — ensures clean, sharp lines where walls meet the ceiling and trim.' },
      { type: 'ul', items: ['Paint ceiling first, walls second, trim last', 'Work top to bottom', 'Maintain a "wet edge" to avoid lap marks', 'Apply in M or W strokes for even coverage'] },
      { type: 'h2', text: '6. Two coats, always' },
      { type: 'p', text: 'One coat almost never provides complete, even coverage. Two coats with proper drying time in between is the standard for professional results. Allow at least 4 hours between coats indoors.' },
      { type: 'h2', text: '7. Test your color in the actual room' },
      { type: 'p', text: 'Paint a 30×30 cm test patch on the actual wall and observe it morning, afternoon, and at night under artificial light. Colors look dramatically different across lighting conditions — always test before committing.' },
    ],
  },
}

// Fallback for slugs without data
const defaultPost = {
  title: 'Expert Painting Tips from ChromaCraft',
  category: 'Tips & Tricks',
  readTime: '4 min',
  author: 'ChromaCraft Team',
  authorRole: 'Painting Professionals',
  date: 'December 2024',
  heroImg: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80',
  authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
  content: [
    { type: 'p' as const, text: 'Our team of expert painters has compiled years of experience into practical, actionable advice for homeowners and professionals alike.' },
    { type: 'h2' as const, text: 'Quality is in the preparation' },
    { type: 'p' as const, text: 'Every great paint job begins with thorough preparation. Clean surfaces, fill imperfections, and prime correctly to ensure your paint adheres properly and lasts for years.' },
  ],
}

export async function generateStaticParams() {
  return Object.keys(postData).map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postData[params.slug] || defaultPost

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-72 md:h-96">
          <Image src={post.heroImg} alt={post.title} fill priority className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a05]/30 via-transparent to-[#0f0a05]" />
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 md:px-12 -mt-20 relative z-10 pb-20">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#f5ede0]/40 hover:text-orange-400 transition-colors mb-8">
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-xs text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full flex items-center gap-1">
            <Tag size={10} /> {post.category}
          </span>
          <span className="text-xs text-[#f5ede0]/35 flex items-center gap-1">
            <Clock size={10} /> {post.readTime} read
          </span>
          <span className="text-xs text-[#f5ede0]/35">{post.date}</span>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8 leading-tight">{post.title}</h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10 pb-10 border-b border-white/5">
          <Image src={post.authorImg} alt={post.author} width={44} height={44} className="rounded-full object-cover" />
          <div>
            <div className="text-sm font-medium text-[#f5ede0]">{post.author}</div>
            <div className="text-xs text-[#f5ede0]/40">{post.authorRole}</div>
          </div>
        </div>

        {/* Content */}
        <div className="prose-custom space-y-6">
          {post.content.map((block, i) => {
            if (block.type === 'h2') {
              return <h2 key={i} className="font-display text-xl md:text-2xl font-bold text-[#f5ede0] mt-10 mb-3">{block.text}</h2>
            }
            if (block.type === 'p') {
              return <p key={i} className="text-[#f5ede0]/65 leading-relaxed">{block.text}</p>
            }
            if (block.type === 'ul') {
              return (
                <ul key={i} className="space-y-2">
                  {block.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#f5ede0]/65 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            if (block.type === 'tip') {
              return (
                <div key={i} className="p-5 bg-orange-500/10 border-l-2 border-orange-500 rounded-r-sm">
                  <p className="text-sm text-[#f5ede0]/80 leading-relaxed">{block.text}</p>
                </div>
              )
            }
            return null
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 p-6 bg-[#1c1208] border border-orange-500/20 rounded-sm text-center">
          <h3 className="font-display text-xl font-bold mb-2">Ready to start your project?</h3>
          <p className="text-[#f5ede0]/50 text-sm mb-5">Get a free site inspection and expert color consultation.</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium rounded-sm transition-colors"
          >
            Book Free Inspection
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </article>
    </div>
  )
}
