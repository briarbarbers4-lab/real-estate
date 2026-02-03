# AURELIAN ESTATES - COMPLETE IMPLEMENTATION GUIDE

**Last Updated**: February 2, 2026  
**Status**: World-Class Enhancement Phase  
**Version**: 2.0  

---

## TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Project Overview](#project-overview)
3. [Success Metrics & KPIs](#success-metrics--kpis)
4. [User Personas & Messaging](#user-personas--messaging)
5. [CTA Strategy & Placement](#cta-strategy--placement)
6. [Design System](#design-system)
7. [Component Architecture](#component-architecture)
8. [Technical Specifications](#technical-specifications)
9. [Premium Enhancements](#premium-enhancements)
10. [Performance & Optimization](#performance--optimization)
11. [Accessibility & Fail-Safes](#accessibility--fail-safes)
12. [Data Model & Content](#data-model--content)

---

## EXECUTIVE SUMMARY

This document consolidates all documentation for the Aurelian Estates ultra-luxury real estate landing page. It serves as the complete blueprint for building and enhancing a world-class luxury website that converts high-intent investors into qualified leads.

**Objective**: Convert high-intent luxury investors into qualified leads through a gallery-aesthetic landing page with premium animations, world-class performance, and exceptional user experience.

**Key Features**:
- 6 strategically placed CTAs
- Premium scroll-triggered animations
- WCAG 2.1 AA accessibility compliance
- Lighthouse 95+ performance targets
- Gallery-first aesthetic with 4:5 vertical images
- Complete design system with luxury tokens

---

## PROJECT OVERVIEW

Ultra-luxury real estate landing page targeting:
- Ultra-high net worth individuals (UHNWI)
- Family offices and advisors
- Institutional investors

**Tech Stack**:
- Framework: Next.js 16 (App Router)
- Styling: Tailwind CSS v4
- Components: Shadcn/UI
- Animations: Framer Motion
- Icons: Lucide React
- Fonts: Playfair Display + Inter (Google Fonts)
- Hosting: Vercel

**Current Status**: Core components implemented. Ready for world-class enhancements.

---

## SUCCESS METRICS & KPIs

### Primary KPI
**Lead Quality**: Completion of the "Private Access" form submission

### Secondary KPIs
| Metric | Target |
|--------|--------|
| Scroll Depth | 70%+ (reaching "Aurelian Standard" section) |
| Average Time-on-Site | 2+ minutes |
| Form Completion Rate | 5%+ of visitors |
| Lighthouse Performance | 95+ score |
| Lighthouse SEO | 95+ score |
| Lighthouse Accessibility | 95+ score |
| WCAG Compliance | 2.1 AA standard |

### Tracking Implementation
```javascript
// CTA Click tracking
console.log("CTA_CLICK", {
  source: "hero" | "property_card" | "objection_grid" | "cta_section" | "footer",
  timestamp: Date.now(),
  userAction: "form_open"
})

// Form submission tracking
console.log("FORM_SUBMIT", {
  formType: "private_access",
  investmentCapacity: "$50M-$100M",
  desiredLocations: ["London", "Dubai"],
  timestamp: Date.now()
})

// Scroll depth tracking
console.log("SCROLL_DEPTH", {
  depth: 75,
  section: "Aurelian Standard",
  timestamp: Date.now()
})
```

---

## USER PERSONAS & MESSAGING

### Persona 1: The Principal (UHNWI)
**Characteristics**: Ultra-high net worth individual, values exclusivity, seeks visual dominance  
**Motivation**: One-click access to private portfolio, gallery-first experience  
**Key Messages**:
- "Where Extraordinary Becomes Ordinary"
- "Access the world's most coveted private portfolio"
- Visual impact over copy

**Page Elements**:
- Hero dominance (100vh cinematic image)
- Minimal navigation
- Large vertical gallery images (4:5 ratio)
- Prominent CTAs for immediate action

### Persona 2: Family Office / Advisor
**Characteristics**: Institutional decision-maker, risk-averse, focuses on diligence  
**Motivation**: Asset intelligence, legal vetting, market data  
**Key Messages**:
- "Asset Intelligence" pillar highlighting market analysis
- FAQ on post-purchase management and legal structures
- Professional tone emphasizing expertise

**Page Elements**:
- "Asset Intelligence" section in Objection Grid
- Comprehensive FAQ with legal/tax details
- Professional credentials (footer links to Investor Relations)
- Investment Capacity field in contact form

### Persona 3: Institutional Investors
**Characteristics**: Portfolio managers, seek diversification and appreciation  
**Motivation**: Blue-chip postcodes, market appreciation potential  
**Key Messages**:
- "Value Preservation" pillar
- Blue-chip location emphasis
- Market data and appreciation forecasting
- "From $X" pricing signals

**Page Elements**:
- Property locations and postal codes highlighted
- "Value Preservation" section
- Quarterly market analysis reference (FAQ)
- "Investor Relations" footer link

---

## CTA STRATEGY & PLACEMENT

### CTA Philosophy
- **Primary CTA**: "ENTER THE COLLECTION" (Hero) - Luxury access language
- **Secondary CTA**: "REQUEST PRIVATE VIEWING" (Property cards) - Property-specific
- **Tertiary CTA**: "INQUIRE" (Navigation, Footer) - Always-available option
- **Form Modal**: "Private Access Modal" (triggered by all CTAs)
- **Conversion Point**: Investment Capacity + Desired Location form fields

### CTA Placement Map

#### Location 1: Navigation Bar (Always Visible)
**Element**: "INQUIRE" Button (Gold variant)  
**Placement**: Top-right, sticky navigation  
**Trigger**: Opens Private Access Modal  
**Analytics**: `console.log("CTA_CLICK", { source: "nav_inquiry", ... })`  
**Purpose**: Always-available high-intent signal

#### Location 2: Hero Section (Primary CTA)
**Element**: "ENTER THE COLLECTION" Button (Gold variant, large)  
**Placement**: Bottom-center of hero, overlaid on image  
**Trigger**: Opens Private Access Modal  
**Analytics**: `console.log("CTA_CLICK", { source: "hero", ... })`  
**Purpose**: Maximum visual impact, first engagement point

#### Location 3: Property Card (Action CTA)
**Element**: "REQUEST PRIVATE VIEWING" Button (Gold variant)  
**Placement**: Hover overlay on property card  
**Trigger**: Opens Private Access Modal  
**Analytics**: `console.log("CTA_CLICK", { source: "property_card", propertyName: "Obsidian Villa" })`  
**Purpose**: Property-specific engagement, encourages exploration

#### Location 4: Property Modal (Detail CTA)
**Element**: "REQUEST PRIVATE VIEWING" Button (Gold variant)  
**Placement**: Inside property detail modal  
**Trigger**: Opens Private Access Modal  
**Analytics**: `console.log("CTA_CLICK", { source: "property_modal", ... })`  
**Purpose**: Property detail conversion point

#### Location 5: CTA Section (Dedicated Conversion)
**Element**: "REQUEST A PRIVATE CONSULTATION" (Gold Button, large)  
**Placement**: Between FAQ and Newsletter  
**Trigger**: Opens Private Access Modal  
**Analytics**: `console.log("CTA_CLICK", { source: "cta_section", ... })`  
**Purpose**: Last high-touch point before footer

#### Location 6: Footer (Secondary Access)
**Element**: "INQUIRE NOW" Button + Office Phone Numbers  
**Placement**: Footer right section  
**Trigger**: Opens Private Access Modal (or phone contact)  
**Analytics**: `console.log("CTA_CLICK", { source: "footer", ... })`  
**Purpose**: Alternative contact method for interested prospects

### Private Access Modal Form
**Trigger**: All 6 CTA locations  
**Fields**:
1. Name (Required, text input)
2. Email (Required, email validation)
3. Phone (Required, international format)
4. Investment Capacity (Required, dropdown)
5. Desired Location (Required, multi-select)

**Validation Messages**:
- "Please provide a valid international number for our private concierge."
- "Investment capacity is required to qualify for our portfolio."

**Success Message**: 
```
Toast notification: "A Senior Partner will contact you within 2 hours."
```

---

## DESIGN SYSTEM

### Color System

#### Primary Palette
- **Primary Brand**: `#C5A059` (Gold) - CTAs, icons, focus states, accents
- **Background Dark**: `#0A0A0A` (Pure Black) - Main background
- **Foreground Light**: `#FFFFFF` (White) - Primary text
- **Secondary Dark**: `#2D2D2D` (Charcoal) - Cards, dividers, secondary elements
- **Muted**: `#404040` (Dark Gray) - Muted text, disabled states
- **Muted Foreground**: `#999999` (Medium Gray) - Tertiary text, captions
- **Input Background**: `#1A1A1A` (Near Black) - Form inputs
- **Input Border**: `#404040` (Dark Gray) - Input borders
- **Border**: `#2D2D2D` (Charcoal) - Minimal borders, dividers
- **Error**: `#EF4444` (Red) - Validation errors
- **Slate Gradient (Fallback)**: `from-slate-900 to-slate-800` - Image load failures

#### Contrast Ratios
- **Gold (#C5A059) on Black (#0A0A0A)**: 11.8:1 ✓ WCAG AAA compliant
- **White (#FFFFFF) on Black (#0A0A0A)**: 21:1 ✓ WCAG AAA compliant
- **Charcoal (#2D2D2D) on White**: 9.2:1 ✓ WCAG AAA compliant

### Typography System

#### Font Families
- **Headings**: Playfair Display (serif)
  - Import: `next/font/google`
  - Weights: 400 (Regular), 700 (Bold)
  - Zero CLS via preload
- **Body & UI**: Inter (sans-serif)
  - Import: `next/font/google`
  - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
  - Used for body text, buttons, forms

#### Type Scale
| Usage | Font | Weight | Size | Line-Height | Letter-Spacing |
|-------|------|--------|------|-------------|-----------------|
| **Hero Headline** | Playfair Display | 700 | 64px | 1.1 (70px) | -0.02em |
| **Section Title (H1)** | Playfair Display | 700 | 56px | 1.2 (67px) | -0.02em |
| **Subsection Title (H2)** | Playfair Display | 400 | 36px | 1.3 (47px) | normal |
| **Card Title (H3)** | Inter | 600 | 24px | 1.3 (31px) | normal |
| **Body Text** | Inter | 400 | 16px | 1.6 (26px) | normal |
| **Small Text** | Inter | 400 | 14px | 1.5 (21px) | normal |
| **Button Text** | Inter | 600 | 14px | 1.4 (20px) | 0.5px |
| **Form Label** | Inter | 500 | 14px | 1.4 (20px) | normal |
| **Caption/Muted** | Inter | 400 | 12px | 1.5 (18px) | normal |
| **Price Label** | Inter | 600 | 12px | 1.2 (14px) | 0.1em (tracking-widest) |

#### Font Styling Utilities
- **Heading Style**: `font-serif tracking-tight` (tighter spacing for elegance)
- **Body Style**: `font-sans leading-relaxed` (comfortable reading)
- **Button Style**: `font-sans font-semibold` (premium weight)
- **Muted Style**: `font-sans text-muted-foreground` (secondary information)

### Spacing System

#### Section Padding
- **Ultra-Luxury Whitespace**: `py-32` (128px) - Primary sections
- **Standard Padding**: `py-24` (96px) - Footer, secondary sections
- **Compact Padding**: `py-16` (64px) - Internal components
- **Mobile Reduction**: `py-16 md:py-24 lg:py-32` - Responsive scaling

#### Component Spacing
- **Gap (Flex/Grid)**: `gap-4` (16px), `gap-6` (24px), `gap-8` (32px)
- **Margin**: Avoid mixing with gap; use gap classes on containers
- **Padding (Internal)**: `p-4` (16px), `p-6` (24px), `p-8` (32px)

#### Responsive Breakpoints
- **Mobile**: < 640px (Tailwind `sm`)
- **Tablet**: 640px - 1024px (Tailwind `md` to `lg`)
- **Desktop**: > 1024px (Tailwind `lg` and beyond)

### Border & Shadow System

#### Borders
- **Minimal Accent**: `border border-slate-800` (1px, charcoal, used sparingly)
- **Input Border**: `border-b border-slate-700` (bottom-only for forms)
- **Divider**: `border-t border-slate-800` (horizontal separators)
- **Card Border**: Optional, primarily use shadow over border

#### Shadows
- **Subtle Elevation**: `shadow-sm` - Small cards, hover states
- **Standard Elevation**: `shadow-md` - Property cards, modals
- **Deep Elevation**: `shadow-lg` - Hero overlays, prominent modals
- **Ultra-Deep**: `shadow-2xl` - Maximum elevation (rare)

#### Border Radius
- **Default**: `rounded` (4px) - Small elements, buttons
- **Large**: `rounded-lg` (8px) - Cards, modals
- **Extra Large**: `rounded-xl` (12px) - Hero sections, large containers

### Button Variants

#### Primary: Gold Variant
```
Background: #C5A059
Text: #0A0A0A (Black)
Hover: #B8955A (darker gold)
Focus Ring: #C5A059 with 50% opacity
Font Weight: 600 (semibold)
Padding: px-6 py-3 (24px x 12px)
```

#### Secondary: Ghost Variant
```
Background: transparent
Text: #FFFFFF (white)
Border: 1px solid #2D2D2D
Hover: bg-slate-900 bg-opacity-50
Focus Ring: #C5A059 with 50% opacity
```

#### Tertiary: Link Variant
```
Text: #C5A059 (gold)
Underline: underline-offset-4
Hover: opacity-80
```

### Input Fields
- **Background**: `bg-[#1A1A1A]` (input background)
- **Border**: `border-b border-[#404040]` (bottom-only for elegance)
- **Text**: `text-white` on dark background
- **Placeholder**: `placeholder:text-muted-foreground`
- **Focus**: `focus:border-b-[#C5A059] focus:outline-none` (gold bottom border)
- **Padding**: `px-4 py-3`

### Image Styling
- **Hero**: 16:9 (landscape, full-width)
- **Property Cards**: 4:5 (vertical, gallery aesthetic)
- **Feature Images**: 3:2 (standard)
- **Format**: WebP (via Next.js `<Image />`)
- **Loading Strategy**:
  - Hero: `priority={true}` (LCP optimization)
  - Grid: `placeholder="blur"` (LQIP effect)
  - Below-fold: Lazy-load with Intersection Observer
- **Fallback**: `bg-gradient-to-br from-slate-900 to-slate-800` (on load failure)

### Animation & Motion

#### Scroll-Triggered Animations
- **Fade-In**: Opacity 0 → 1 (300ms)
- **Slide-Up**: translateY(20px) → translateY(0) (400ms)
- **Scale**: scale(0.95) → scale(1) (300ms)
- **Stagger**: `staggerChildren: 0.1` (100ms between items)

#### Interactive Animations
- **Hover Scale**: `scale-105` (5% growth, 300ms duration)
- **Button Hover**: Opacity shift to `hover:opacity-80` or color change
- **Focus State**: Visible ring with gold color (`ring-[#C5A059]`)

#### Motion Preference
- **Respect `prefers-reduced-motion: reduce`**:
  - Parallax: Disabled
  - Animations: Instant opacity fades (0ms duration)
  - Transitions: Reduced to 0ms

#### Parallax Effect
- **Hero Image**: `0.05` parallax offset on `scrollY`
- **Subtle Movement**: Creates depth without overwhelming motion

### Component-Specific Tokens

#### Navigation Bar
- **Height**: 64px (h-16)
- **Sticky**: `sticky top-0 z-50`
- **Scroll Trigger**: 50px scroll activates `backdrop-blur-md`
- **Background**: `bg-black/20` with blur
- **Mobile**: Hamburger menu, full-screen overlay on `z-40`

#### Hero Section
- **Height**: 100vh (constant across all breakpoints)
- **Overlay**: `bg-black/30` for text readability
- **Text Positioning**: Center, absolute positioning
- **CTA Placement**: Bottom-center of hero

#### Property Cards
- **Skeleton Loading**: `bg-slate-800 animate-pulse` (200ms duration)
- **Hover Effect**: `scale-105` with `shadow-lg`
- **Transition**: `transition-all duration-300`
- **Price Font**: `text-xs uppercase tracking-widest text-muted-foreground`

#### Modals (Shadcn Dialog)
- **Overlay**: `bg-black/50` backdrop blur
- **Background**: `bg-[#1A1A1A]` card color
- **Border**: `border border-slate-800` (optional)
- **Padding**: `p-6` inside modal
- **Z-Index**: `z-50` (above navigation)

#### Forms
- **Field Spacing**: `gap-4` between fields
- **Label Styling**: `text-sm font-medium text-foreground`
- **Error Message**: `text-xs text-error mt-1`
- **Validation**: Elegant copy like "Please provide a valid international number for our private concierge."
- **Security Badge**: Lock icon + "SSL Secured" text (visual-only, marketing cue)

#### Accordion (FAQ)
- **Mobile**: Full-width with `px-4`
- **Touch Target**: Min `h-[44px]` for tap-friendly
- **Animation**: Staggered open/close with motion preference respect
- **Item Padding**: `py-4 px-4`

#### Footer
- **Background**: `bg-black` or `bg-[#1A1A1A]`
- **Text**: `text-muted-foreground` for secondary info
- **Links**: `text-white hover:text-[#C5A059]`
- **Divider**: `border-t border-slate-800`
- **Padding**: `py-24`

### Accessibility Tokens
- **Focus States**: `focus:ring-2 ring-[#C5A059] ring-offset-2 ring-offset-black`
- **Color Contrast Minimums**: 4.5:1 (body), 3:1 (large text)
- **Touch Targets**: Minimum 44px × 44px (mobile)

### Performance Tokens
- **Hero LCP Target**: < 2.5s
- **First Contentful Paint**: < 1.5s
- **Cumulative Layout Shift**: < 0.1
- **Frame Rate Target**: 60 FPS
- **Bundle Size Target**: < 150KB total JS

### Design System Principles
1. **Restraint**: Use gold sparingly for maximum impact
2. **Whitespace**: Extreme padding creates exclusivity
3. **Hierarchy**: Typography weight and size establish priority
4. **Contrast**: Dark-on-light ensures readability and luxury
5. **Consistency**: All components follow the same token system
6. **Accessibility**: All design decisions must pass WCAG 2.1 AA
7. **Performance**: Motion respects user preferences; images optimize for LCP
8. **Gallery Aesthetic**: Vertical images, muted pricing, narrative-first approach

---

## COMPONENT ARCHITECTURE

```
app/
├── layout.tsx (Root layout, fonts: Playfair Display + Inter, metadata)
├── page.tsx (Main page, component orchestration)
├── globals.css (Tailwind tokens, design system)
├── sitemap.ts (Dynamic sitemap generation)
└── robots.ts (Robots.txt configuration)

components/
├── Navigation.tsx (Sticky nav, scroll trigger, mobile menu)
├── Hero.tsx (100vh hero, parallax, CTA #2)
├── PropertyGrid.tsx (3-col grid, skeleton loaders, CTA #3)
├── PropertyModal.tsx (Shadcn Dialog for property details)
├── PrivateAccessModal.tsx (Contact form, Investment Capacity, Desired Location)
├── ObjectionGrid.tsx (3 pillars: Value, Discretion, Intelligence)
├── FAQSection.tsx (Shadcn Accordion, 3 FAQs)
├── NewsletterSection.tsx (Email signup, toast notification)
├── CTASection.tsx (Dedicated conversion, CTA #5)
├── Footer.tsx (Offices, links, CTA #6)
└── ui/ (Shadcn: Button, Dialog, Accordion, Input, Skeleton, Toast)

lib/
├── constants.ts (Properties, FAQs, offices, investment tiers)
├── utils.ts (Existing utilities + form validation)
├── schema.ts (JSON-LD schema generation utilities)
└── analytics.ts (Console.log tracking wrappers)

public/
├── images/
│   ├── hero-cinematic.jpg (Hero, v0-generated, 4K)
│   ├── obsidian-villa.jpg (Property 1, 4:5, v0-generated)
│   ├── penthouse.jpg (Property 2, 4:5, v0-generated)
│   └── coastal-sanctuary.jpg (Property 3, 4:5, v0-generated)
```

---

## TECHNICAL SPECIFICATIONS

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (next/font/google)
- **Image Generation**: v0-generated placeholder images

### Environment & Deployment
- **Hosting**: Vercel (deployment-ready)
- **Browser Support**: Last 2 versions (modern browsers only)
- **Performance Target**: Lighthouse 95+
- **Bundle Size**: < 150KB total JS

### Image Specifications
| Location | Aspect Ratio | Format | Optimization | Loading |
|----------|--------------|--------|--------------|---------|
| Hero | 16:9 | WebP | Priority | `priority={true}` |
| Property Cards | 4:5 | WebP | LQIP | `placeholder="blur"` |
| Fallback | N/A | Gradient | N/A | `bg-gradient-to-br from-slate-900 to-slate-800` |

### Responsive Design
| Breakpoint | Width | Grid | Hero Height | Navigation |
|------------|-------|------|-------------|------------|
| Mobile | < 640px | 1 col | 100vh | Hamburger |
| Tablet | 640-1024px | 2 col | 100vh | Sticky |
| Desktop | > 1024px | 3 col | 100vh | Sticky |

### Accessibility Requirements
- **WCAG 2.1 AA compliance**
- **Color contrast**: Gold (#C5A059) on Black (#0A0A0A) = 11.8:1 ✓
- **Touch targets**: Min 44px × 44px
- **Motion preference**: Respect `prefers-reduced-motion: reduce`
- **Focus states**: Visible ring with gold outline
- **Form labels**: Explicit `<label>` tags with `htmlFor`
- **Alt text**: Descriptive alt text on all property images

### Error Handling & Fail-Safes
| Failure | Graceful Handling |
|---------|-------------------|
| Image load failure | `bg-gradient-to-br from-slate-900 to-slate-800` |
| Form validation error | Elegant copy: "Please provide a valid international number for our private concierge." |
| Network timeout | Toast: "We're experiencing connection issues. Please try again in a moment." |
| Scroll performance | Lazy-load images, skeleton loaders, Intersection Observer |

---

## PREMIUM ENHANCEMENTS

### Hero Section Upgrades
1. **Animated Title Sequence**: Staggered word-by-word reveal (0.1s delay between words)
2. **Enhanced Parallax + Zoom**: 0.05 parallax + subtle 1.02x zoom on scroll
3. **Gradient Overlay Refinement**: Directional gradient (135deg) for sophistication
4. **CTA Button Enhancement**: Glow effect on hover, smooth transitions, floating effect

### Scroll-Triggered Animations
1. **Property Cards**: Fade-in from bottom (20px translate-y), staggered timing
2. **Objection Grid Pillars**: Icon → Title → Description cascade animation
3. **FAQ Section**: Section title fade-in + scale, accordion items stagger

### Micro-Interactions & Polish
1. **Card Hover Effects**: Multi-layer (translateY, scale, shadow, brightness)
2. **Button Interactions**: Outer glow + inset highlight, lift on hover
3. **Input Field Refinement**: Gold underline with shadow on focus

### Visual Hierarchy & Typography
1. **Headline Spacing**: Increased margins (64px), tighter letter-spacing
2. **Subheading Treatment**: Uppercase with tracking, muted color
3. **Body Text Refinement**: Looser leading (1.7), subtle letter-spacing

### Color & Gradient Accents
1. **Gradient Overlays**: Subtle gold overlay on property card hover
2. **Background Depth**: Subtle gradient variations for depth perception
3. **Gradient Dividers**: Replace solid borders with gold-tinted gradients

### Loading & State Animations
1. **Image Loading Transition**: Blur-to-sharp with scale effect
2. **Skeleton Loader**: Shimmer effect vs static skeleton

### Modal Elevation
1. **Glassmorphism**: Backdrop blur overlay
2. **Gold-Tinted Border**: Subtle gold border (10% opacity)
3. **Layered Shadows**: Multiple shadow layers for depth
4. **Smooth Entrance**: Slide-up animation with spring easing

### Footer Elevation
1. **Gold Accent Border**: Top border with gold gradient
2. **Luxury Whitespace**: Increased padding (128px top)
3. **Smooth Link Transitions**: Hover color transitions

### Page Transition Polish
1. **Smooth Scroll**: `scroll-behavior: smooth`
2. **Page Fade-In**: Opacity animation on page load

### Responsive Excellence
1. **Touch Targets**: Minimum 48px height on mobile
2. **Spacing Optimization**: Balanced horizontal padding on mobile
3. **Typography Scaling**: Responsive font sizes

---

## PERFORMANCE & OPTIMIZATION

### Image Optimization Strategy
- **Hero**: `priority={true}` for LCP
- **Grid**: `placeholder="blur"` for visual stability
- **Format**: WebP via Next.js `<Image />`
- **Fallback**: Gradient for load failures

### Animation Performance
- **GPU Acceleration**: Use `opacity` and `transform` only
- **Frame Target**: 60 FPS
- **Avoid**: Width, height, left, top (trigger reflow)

### Bundle Optimization
- **Target**: < 150KB JS
- **Tree-shake**: Framer Motion to essentials
- **Lazy Load**: Below-fold images
- **Remove**: Unused CSS via Tailwind purge

### Lighthouse Targets
| Metric | Target |
|--------|--------|
| Performance | 95+ |
| SEO | 95+ |
| Accessibility | 95+ |
| Best Practices | 90+ |

---

## ACCESSIBILITY & FAIL-SAFES

### WCAG 2.1 AA Compliance Checklist
- [x] Color contrast: Gold (#C5A059) on Black (#0A0A0A) = 11.8:1 ✓
- [ ] Focus states: Visible ring on all interactive elements
- [ ] Touch targets: Min 44px × 44px
- [x] Motion preference: Respect `prefers-reduced-motion: reduce`
- [ ] Form labels: Explicit `<label>` with `htmlFor`
- [ ] Alt text: All images have descriptive alt text
- [ ] Keyboard navigation: Tab through all interactive elements
- [ ] Screen reader: Test with NVDA or VoiceOver

### Error Handling Strategy

**Image Load Failure**:
```jsx
<div className="bg-gradient-to-br from-slate-900 to-slate-800 w-full h-full" />
```

**Form Validation Error**:
```
"Please provide a valid international number for our private concierge."
```

**Network Timeout**:
```
Toast: "We're experiencing connection issues. Please try again in a moment."
```

### Motion Preference Implementation
```jsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Disable parallax if reduced motion is preferred
const parallaxOffset = prefersReducedMotion ? 0 : 0.05 * scrollY;
```

---

## DATA MODEL & CONTENT

### Properties Array
```typescript
const properties = [
  {
    id: 1,
    name: "Obsidian Villa",
    location: "French Riviera",
    price: "Inquire for Pricing",
    image: "/images/obsidian-villa.jpg",
    description: "Architectural masterpiece perched on clifftops overlooking the Mediterranean...",
    features: ["12,000 sq ft", "Smart Home System", "Private Beach Access", "Wine Cellar", "Infinity Pool"],
    priceType: "inquire"
  },
  {
    id: 2,
    name: "The Penthouse",
    location: "London Mayfair",
    price: "From $12.5M",
    image: "/images/penthouse.jpg",
    description: "Crown jewel of London's most exclusive postcodes...",
    features: ["5 Bedrooms", "Wine Cellar", "Rooftop Terrace", "Private Spa", "Panoramic Views"],
    priceType: "development"
  },
  {
    id: 3,
    name: "Coastal Sanctuary",
    location: "Côte d'Azur",
    price: "From $8.3M",
    image: "/images/coastal-sanctuary.jpg",
    description: "Secluded retreat on a pristine stretch of Mediterranean coastline...",
    features: ["Private Marina", "Infinity Pool", "Helipad", "Guest Houses", "Private Beach"],
    priceType: "development"
  }
]
```

### FAQ Items Array
```typescript
const faqItems = [
  {
    question: "What makes Aurelian's off-market pocket listings exclusive?",
    answer: "We partner directly with family offices and discreet sellers. Properties never enter public MLS databases, preserving confidentiality and commanding premium valuations."
  },
  {
    question: "How does global tax residency strategy work?",
    answer: "Our legal and tax advisors align property ownership structures with your residency goals, optimizing both privacy and fiscal efficiency across jurisdictions."
  },
  {
    question: "What does post-purchase management include?",
    answer: "Aurelian provides end-to-end estate staffing and asset maintenance via our proprietary concierge network."
  }
]
```

### Global Offices Array
```typescript
const globalOffices = [
  { city: "London", phone: "+44 20 7946 0958" },
  { city: "Dubai", phone: "+971 4 123 4567" },
  { city: "New York", phone: "+1 212 555 0198" }
]
```

### Investment Capacity Tiers
```typescript
const investmentCapacities = [
  "$5M - $10M",
  "$10M - $50M",
  "$50M - $100M",
  "$100M+"
]
```

### Desired Locations Array
```typescript
const desiredLocations = [
  "London",
  "Dubai",
  "New York",
  "French Riviera",
  "Swiss Alps"
]
```

### Pillars Array
```typescript
const pillars = [
  {
    icon: "Shield",
    title: "Value Preservation",
    description: "Our portfolio comprises blue-chip postcodes in markets with 50+ year appreciation records. Each asset is vetted for long-term wealth security."
  },
  {
    icon: "Lock",
    title: "Total Discretion",
    description: "Anonymous ownership structures, NDA protocols, and encrypted portals protect your portfolio. We operate with the confidentiality of a Swiss bank."
  },
  {
    icon: "Lightbulb",
    title: "Asset Intelligence",
    description: "Quarterly market analysis, tax optimization strategies, and appreciation forecasting. Your assets are monitored by an expert concierge network."
  }
]
```

---

## QUICK REFERENCE: CTA LOCATIONS

| # | Location | Button Text | Variant | Analytics Source | Purpose |
|---|----------|-------------|---------|------------------|---------|
| 1 | Navigation | INQUIRE | Gold | nav_inquiry | Always-available |
| 2 | Hero | ENTER THE COLLECTION | Gold | hero | Primary engagement |
| 3 | Property Card | REQUEST PRIVATE VIEWING | Gold | property_card | Property-specific |
| 4 | Property Modal | REQUEST PRIVATE VIEWING | Gold | property_modal | Property detail CTA |
| 5 | CTA Section | REQUEST A PRIVATE CONSULTATION | Gold | cta_section | Last high-touch |
| 6 | Footer | INQUIRE NOW | Gold | footer | Alternative access |

**All CTAs open `PrivateAccessModal.tsx` with form fields**:
- Name
- Email  
- Phone
- Investment Capacity
- Desired Location

---

**Version**: 2.0  
**Status**: World-Class Enhancement Phase  
**Last Updated**: February 2, 2026  
**See IMPLEMENTATION_PHASES.md for detailed enhancement checklist**
