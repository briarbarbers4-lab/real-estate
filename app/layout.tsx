import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: 'Aurelian Estates | Ultra-Luxury Real Estate Portfolio',
  description: 'Discover the world\'s most exclusive properties. Curated ultra-luxury real estate for discerning clientele.',
  generator: 'v0.app',
  openGraph: {
    title: 'Aurelian Estates | Ultra-Luxury Real Estate Portfolio',
    description: 'Discover the world\'s most exclusive properties. Curated ultra-luxury real estate for discerning clientele.',
    type: 'website',
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
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
