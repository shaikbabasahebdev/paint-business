import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://chromacraft.in'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/visualizer`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/blog/interior-painting-tips-2024`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/blog/choosing-exterior-paint-bangalore`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/blog/texture-painting-trends`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/blog/waterproofing-before-monsoon`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/blog/colour-psychology-home`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/blog/how-to-maintain-painted-walls`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ]
}
