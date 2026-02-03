"use client"

import { useEffect } from "react"

interface WebVitalsProps {
  analyticsId?: string
}

/**
 * Web Vitals tracking component
 * 
 * To enable full tracking, install web-vitals package:
 * npm install web-vitals
 * 
 * Then uncomment the imports and tracking code below.
 */
export function WebVitals({ analyticsId }: WebVitalsProps) {
  useEffect(() => {
    // Enhanced performance monitoring without external dependencies
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Track Largest Contentful Paint (LCP) - Target: < 2.5s
      try {
        let lcpValue: number | null = null
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as any
          const value = lastEntry.renderTime || lastEntry.loadTime
          lcpValue = value
          
          // Report final LCP value
          if (lastEntry.element) {
            console.log("[Web Vitals] LCP:", {
              value: Math.round(value),
              rating: value < 2500 ? "good" : value < 4000 ? "needs-improvement" : "poor",
              element: lastEntry.element?.tagName,
            })
          }
        })
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })
        
        // Report final LCP after page load
        window.addEventListener("load", () => {
          setTimeout(() => {
            if (lcpValue !== null) {
              console.log("[Web Vitals] Final LCP:", {
                value: Math.round(lcpValue),
                rating: lcpValue < 2500 ? "good" : lcpValue < 4000 ? "needs-improvement" : "poor",
              })
            }
          }, 1000)
        })
      } catch (e) {
        // PerformanceObserver not supported
      }

      // Track Cumulative Layout Shift (CLS) - Target: < 0.1
      try {
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries() as any[]) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          }
        })
        clsObserver.observe({ entryTypes: ["layout-shift"] })
        
        // Report final CLS after page load
        window.addEventListener("load", () => {
          setTimeout(() => {
            console.log("[Web Vitals] Final CLS:", {
              value: Math.round(clsValue * 1000) / 1000,
              rating: clsValue < 0.1 ? "good" : clsValue < 0.25 ? "needs-improvement" : "poor",
            })
          }, 1000)
        })
      } catch (e) {
        // PerformanceObserver not supported
      }

      // Track First Input Delay (FID) - Target: < 100ms
      try {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries() as any[]) {
            const value = entry.processingStart - entry.startTime
            console.log("[Web Vitals] FID:", {
              value: Math.round(value),
              rating: value < 100 ? "good" : value < 300 ? "needs-improvement" : "poor",
            })
          }
        })
        fidObserver.observe({ entryTypes: ["first-input"] })
      } catch (e) {
        // PerformanceObserver not supported
      }

      // Track First Contentful Paint (FCP) - Target: < 1.8s
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries() as any[]) {
            const value = entry.startTime
            console.log("[Web Vitals] FCP:", {
              value: Math.round(value),
              rating: value < 1800 ? "good" : value < 3000 ? "needs-improvement" : "poor",
            })
          }
        })
        fcpObserver.observe({ entryTypes: ["paint"] })
      } catch (e) {
        // PerformanceObserver not supported
      }

      // Track Time to First Byte (TTFB) - Target: < 800ms
      try {
        window.addEventListener("load", () => {
          const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
          if (navigation) {
            const ttfb = navigation.responseStart - navigation.requestStart
            console.log("[Web Vitals] TTFB:", {
              value: Math.round(ttfb),
              rating: ttfb < 800 ? "good" : ttfb < 1800 ? "needs-improvement" : "poor",
            })
          }
        })
      } catch (e) {
        // Not supported
      }
    }

    // For full Web Vitals tracking with more accurate metrics, install web-vitals package:
    // npm install web-vitals
    // import { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } from "web-vitals"
    // onCLS(console.log)
    // onFID(console.log)
    // onFCP(console.log)
    // onLCP(console.log)
    // onTTFB(console.log)
    // onINP(console.log)
  }, [analyticsId])

  return null
}
