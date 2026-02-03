import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { generateOrganizationSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { WebVitals } from '@/components/WebVitals'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-playfair"
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://aurelian-estates.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Aurelian Estates | Ultra-Luxury Real Estate Portfolio',
  description: 'Discover the world\'s most exclusive properties. Curated ultra-luxury real estate for discerning clientele.',
  keywords: [
    'luxury real estate',
    'ultra-luxury properties',
    'high-end real estate',
    'exclusive properties',
    'luxury homes',
    'premium real estate',
    'private property listings',
    'off-market properties',
    'luxury investment properties',
    'aurelian estates',
  ],
  authors: [{ name: 'Aurelian Estates' }],
  creator: 'Aurelian Estates',
  publisher: 'Aurelian Estates',
  generator: 'Next.js',
  applicationName: 'Aurelian Estates',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Aurelian Estates',
    title: 'Aurelian Estates | Ultra-Luxury Real Estate Portfolio',
    description: 'Discover the world\'s most exclusive properties. Curated ultra-luxury real estate for discerning clientele.',
    images: [
      {
        url: '/images/hero-cinematic.jpg',
        width: 1920,
        height: 1080,
        alt: 'Ultra-luxury Mediterranean villa at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurelian Estates | Ultra-Luxury Real Estate Portfolio',
    description: 'Discover the world\'s most exclusive properties. Curated ultra-luxury real estate for discerning clientele.',
    images: ['/images/hero-cinematic.jpg'],
    creator: '@aurelianestates', // Update with actual Twitter handle if available
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = generateOrganizationSchema()
  const breadcrumbSchema = generateBreadcrumbSchema()

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white">
        {/* Skip to content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C5A059] focus:text-black focus:rounded-md focus:font-semibold focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
        >
          Skip to main content
        </a>
        <ErrorBoundary>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </ErrorBoundary>
        <WebVitals />
        <Analytics />
      </body>
    </html>
  )
}
