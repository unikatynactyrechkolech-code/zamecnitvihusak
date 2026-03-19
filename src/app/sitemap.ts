import { MetadataRoute } from 'next'
import { neighborhoodData, extendedPrahaData, getAllLocalitySlugs } from './locality-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zamecnikhusak.cz'
  const now = new Date()

  // Core static pages
  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/sluzby`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/cenik`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/o-nas`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/kontakt`, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  // Praha 1-10 district pages
  const prahaPages = Array.from({ length: 10 }, (_, i) => ({
    url: `${baseUrl}/zamecnik-praha-${i + 1}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // All locality pages (Praha 11-22 districts, neighborhoods, outskirts)
  const allSlugs = getAllLocalitySlugs()
  const localityPages = allSlugs.map((slug) => ({
    url: `${baseUrl}/${slug.replace('zamecnik-', '')}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...prahaPages, ...localityPages].map((page) => ({
    ...page,
    lastModified: now,
  }))
}
