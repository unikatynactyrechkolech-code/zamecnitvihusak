import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zamecnictvi-husak.vercel.app'
  const now = new Date()

  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/sluzby`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/cenik`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/o-nas`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/kontakt`, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  const prahaPages = Array.from({ length: 10 }, (_, i) => ({
    url: `${baseUrl}/zamecnik-praha-${i + 1}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...prahaPages].map((page) => ({
    ...page,
    lastModified: now,
  }))
}
