export type AnalyticsEvent = {
  action: string
  category: string
  label?: string
  value?: number
  [key: string]: any
}

/**
 * Tracks a user interaction event.
 * Currently logs to console, but can be extended to send events to
 * GA4, Segment, or other analytics providers.
 */
export function trackEvent(event: AnalyticsEvent) {
  // In a real production app, this would send data to an analytics endpoint
  // For this ultra-luxury prototype, we're logging to console as requested
  console.log(`[ANALYTICS] ${event.action.toUpperCase()}`, {
    ...event,
    timestamp: Date.now(),
    url: typeof window !== 'undefined' ? window.location.pathname : '',
  })
}

/**
 * Common event actions
 */
export const ANALYTICS_ACTIONS = {
  CLICK: 'click',
  VIEW: 'view',
  SUBMIT: 'submit',
  SCROLL: 'scroll',
  ERROR: 'error',
}

/**
 * Common event categories
 */
export const ANALYTICS_CATEGORIES = {
  NAVIGATION: 'navigation',
  HERO: 'hero',
  PROPERTY: 'property',
  CTA: 'cta',
  FORM: 'form',
  FOOTER: 'footer',
  ENGAGEMENT: 'engagement',
}
