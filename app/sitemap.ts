// Aurelian Estates - Dynamic Sitemap Generation
import { MetadataRoute } from 'next'
import { properties } from '@/lib/constants'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://aurelian-estates.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}#properties`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Property pages (if you have individual property pages in the future)
  const propertyRoutes = properties.map((property) => ({
    url: `${baseUrl}/properties/${property.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...propertyRoutes]
}
