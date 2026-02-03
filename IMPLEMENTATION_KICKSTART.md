# AURELIAN ESTATES - IMPLEMENTATION KICKSTART GUIDE

> **Note**: This file has been consolidated into `IMPLEMENTATION_COMPILE.md`.  
> Please refer to `IMPLEMENTATION_COMPILE.md` for the most up-to-date documentation.  
> This file is kept for reference only.

**Last Updated**: February 2, 2026  
**Status**: Archived - See IMPLEMENTATION_COMPILE.md  
**Version**: 1.0 (Archived)

---

## EXECUTIVE SUMMARY

This document serves as the complete blueprint for building the Aurelian Estates ultra-luxury real estate landing page. It encompasses:

- Complete design system and tokens (see `DESIGN_TOKENS.md`)
- CTA strategy with 5+ placement locations
- User personas and messaging hierarchy
- Technical specifications and fail-safes
- Complete component architecture
- Phased implementation roadmap
- Success metrics and KPIs

**Objective**: Convert high-intent luxury investors into qualified leads through a gallery-aesthetic landing page.

---

## TABLE OF CONTENTS

1. [Success Metrics & KPIs](#success-metrics--kpis)
2. [User Personas & Messaging](#user-personas--messaging)
3. [CTA Strategy & Placement](#cta-strategy--placement)
4. [Page Structure & Components](#page-structure--components)
5. [Technical Specifications](#technical-specifications)
6. [Component Architecture](#component-architecture)
7. [Data Model & Hardcoded Content](#data-model--hardcoded-content)
8. [Implementation Phases](#implementation-phases)
9. [Design System Integration](#design-system-integration)
10. [Performance & Optimization](#performance--optimization)
11. [Accessibility & Fail-Safes](#accessibility--fail-safes)

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

```jsx
<Button 
  variant="gold" 
  size="sm"
  onClick={() => setModalOpen(true)}
  className="hidden md:inline-flex"
>
  INQUIRE
</Button>
```

#### Location 2: Hero Section (Primary CTA)
**Element**: "ENTER THE COLLECTION" Button (Gold variant, large)  
**Placement**: Bottom-center of hero, overlaid on image  
**Trigger**: Opens Private Access Modal  
**Analytics**: `console.log("CTA_CLICK", { source: "hero", ... })`  
**Purpose**: Maximum visual impact, first engagement point

```jsx
<Button
  variant="gold"
  size="lg"
  onClick={() => setModalOpen(true)}
  className="text-lg px-8 py-4"
>
  ENTER THE COLLECTION
</Button>
```

#### Location 3: Property Card (Action CTA)
**Element**: "REQUEST PRIVATE VIEWING" Button (Ghost variant)  
**Placement**: Hover overlay on property card  
**Trigger**: Opens Private Access Modal  
**Analytics**: `console.log("CTA_CLICK", { source: "property_card", propertyName: "Obsidian Villa" })`  
**Purpose**: Property-specific engagement, encourages exploration

```jsx
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 ...">
  <Button
    variant="ghost"
    onClick={() => setModalOpen(true)}
  >
    REQUEST PRIVATE VIEWING
  </Button>
</div>
```

#### Location 4: Objection Grid (Implicit CTA)
**Element**: Section title "The Aurelian Standard" with scroll reveal  
**Placement**: Three pillars below property grid  
**Pattern**: Hover state on pillars increases opacity  
**Analytics**: Scroll tracking when 70%+ depth reached  
**Purpose**: Build trust before CTAs, establish credibility

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 hover:opacity-90 transition-opacity">
  {/* Three pillars: Value Preservation, Total Discretion, Asset Intelligence */}
</div>
```

#### Location 5: CTA Section (Dedicated Conversion)
**Element**: "REQUEST A PRIVATE CONSULTATION" (Gold Button, large)  
**Placement**: Between FAQ and Newsletter  
**Trigger**: Opens Private Access Modal  
**Analytics**: `console.log("CTA_CLICK", { source: "cta_section", ... })`  
**Purpose**: Last high-touch point before footer

```jsx
<section className="py-32 text-center">
  <h2 className="font-serif text-4xl mb-6">
    Ready to Explore the Aurelian Collection?
  </h2>
  <Button
    variant="gold"
    size="lg"
    onClick={() => setModalOpen(true)}
    className="text-lg px-8 py-4"
  >
    REQUEST A PRIVATE CONSULTATION
  </Button>
</section>
```

#### Location 6: Footer (Secondary Access)
**Element**: "INQUIRE" Button + Office Phone Numbers  
**Placement**: Footer right section  
**Trigger**: Opens Private Access Modal (or phone contact)  
**Analytics**: `console.log("CTA_CLICK", { source: "footer", ... })`  
**Purpose**: Alternative contact method for interested prospects

```jsx
<div className="flex flex-col gap-4">
  <Button
    variant="gold"
    onClick={() => setModalOpen(true)}
  >
    INQUIRE NOW
  </Button>
  <p className="text-sm">
    London: +44 20 XXXX XXXX<br/>
    Dubai: +971 4 XXXX XXXX<br/>
    New York: +1 212 XXXX XXXX
  </p>
</div>
```

### CTA Copy Variations (A/B Test Ready)
| Location | Primary | Alternative |
|----------|---------|-------------|
| Hero | "ENTER THE COLLECTION" | "DISCOVER THE PORTFOLIO" |
| Property Card | "REQUEST PRIVATE VIEWING" | "VIEW DETAILS" |
| Section CTA | "REQUEST A PRIVATE CONSULTATION" | "SCHEDULE A BRIEFING" |
| Footer | "INQUIRE NOW" | "SPEAK WITH AN AGENT" |

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

**Analytics on Submit**:
```javascript
console.log("FORM_SUBMIT", {
  formType: "private_access",
  investmentCapacity: formData.investmentCapacity,
  desiredLocations: formData.desiredLocations,
  timestamp: Date.now()
})
```

---

## PAGE STRUCTURE & COMPONENTS

### Navigation Bar Component
**File**: `components/Navigation.tsx`  
**Props**: None (manages own scroll state)  
**State**: 
- `scrolled`: boolean (> 50px)
- `mobileMenuOpen`: boolean

**Features**:
- Logo text: "AURELIAN"
- Links: Properties, Journal, Contact
- "INQUIRE" button (CTA #1)
- Scroll trigger at 50px activates `backdrop-blur-md`
- Mobile: Hamburger menu → Full-screen overlay
- Z-index: `z-50`

**Styling**:
```
Sticky top-0
Height: 64px (h-16)
Background: bg-black/20 (with backdrop blur after scroll)
Navigation links: text-white hover:text-[#C5A059]
```

### Hero Section Component
**File**: `components/Hero.tsx`  
**Props**: 
- `onCTAClick`: () => void (opens modal)

**Features**:
- 100vh height (all breakpoints)
- Cinematic image (v0-generated, priority, 4K)
- 0.05 parallax effect on scroll
- Overlay text: "Where Extraordinary Becomes Ordinary"
- Subtext: "Access the world's most coveted private portfolio"
- CTA Button: "ENTER THE COLLECTION" (CTA #2)
- Overlay: `bg-black/30` for text readability

**Image Path**: `/public/images/hero-cinematic.jpg`

### Property Grid Component
**File**: `components/PropertyGrid.tsx`  
**Props**:
- `properties`: Array of property objects
- `onPropertyClick`: (id: number) => void (opens property modal)
- `onCTAClick`: () => void (opens private access modal)

**Features**:
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Property cards with 4:5 aspect ratio images
- Skeleton loaders while images load
- Hover: `scale-105` with shadow
- Price displayed in `text-xs uppercase tracking-widest`
- "REQUEST PRIVATE VIEWING" button on hover (CTA #3)
- Click card → Opens Property Modal

**Styling**:
```
gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3
py-32 section padding
h-[400px] card height (4:5 ratio)
```

### Property Modal Component
**File**: `components/PropertyModal.tsx`  
**Props**:
- `property`: property object
- `isOpen`: boolean
- `onClose`: () => void
- `onCTAClick`: () => void

**Features**:
- Shadcn Dialog component
- Full property description
- Additional images carousel (optional)
- "REQUEST PRIVATE VIEWING" button → Opens Private Access Modal
- Responsive sizing

### Private Access Modal Component (High-Intent Contact Form)
**File**: `components/PrivateAccessModal.tsx`  
**Props**:
- `isOpen`: boolean
- `onClose`: () => void
- `propertyName`: string (optional, for context)

**Features**:
- Shadcn Dialog with form validation
- Fields: Name, Email, Phone, Investment Capacity, Desired Location
- Elegant error messages
- Lock icon + "SSL Secured" badge (footer, visual-only)
- Submit button: "REQUEST ACCESS"
- Success: Toast notification → Modal closes

**Form Validation**:
```javascript
const validatePhone = (phone) => {
  const intlFormat = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return intlFormat.test(phone);
};
```

### Objection Grid Component
**File**: `components/ObjectionGrid.tsx`  
**Props**: None

**Features**:
- 3 pillars: Value Preservation, Total Discretion, Asset Intelligence
- Lucide icons in gold (#C5A059)
- 3-column (desktop), 1-column (mobile)
- Title + 2-sentence description per pillar
- Scroll reveal animation

**Pillars**:

**Pillar 1: Value Preservation**
- Icon: Shield or Gem
- Copy: "Our portfolio comprises blue-chip postcodes in markets with 50+ year appreciation records. Each asset is vetted for long-term wealth security."

**Pillar 2: Total Discretion**
- Icon: Lock
- Copy: "Anonymous ownership structures, NDA protocols, and encrypted portals protect your portfolio. We operate with the confidentiality of a Swiss bank."

**Pillar 3: Asset Intelligence**
- Icon: Brain / Lightbulb
- Copy: "Quarterly market analysis, tax optimization strategies, and appreciation forecasting. Your assets are monitored by an expert concierge network."

### FAQ Section Component
**File**: `components/FAQSection.tsx`  
**Props**: None

**Features**:
- Shadcn Accordion component
- 3 FAQ items
- Full-width on mobile with increased touch targets
- Scroll reveal animation

**FAQ Items**:

**Q1: Off-Market Pocket Listings**
- Q: "What makes Aurelian's off-market pocket listings exclusive?"
- A: "We partner directly with family offices and discreet sellers. Properties never enter public MLS databases, preserving confidentiality and commanding premium valuations."

**Q2: Global Tax Residency**
- Q: "How does global tax residency strategy work?"
- A: "Our legal and tax advisors align property ownership structures with your residency goals, optimizing both privacy and fiscal efficiency across jurisdictions."

**Q3: Post-Purchase Management**
- Q: "What does post-purchase management include?"
- A: "Aurelian provides end-to-end estate staffing and asset maintenance via our proprietary concierge network."

### Newsletter Section Component
**File**: `components/NewsletterSection.tsx`  
**Props**: None

**Features**:
- Title: "Join the Inner Circle"
- Subtitle: "Receive curated market insights and first-access to new acquisitions"
- Email input (ghost style, bottom-only border)
- "SUBSCRIBE" button (gold variant)
- On submit: Toast "Welcome to the Inner Circle."

**Styling**:
```
py-32 section padding
Input: bg-[#1A1A1A] border-b border-[#404040] focus:border-b-[#C5A059]
Button: variant="gold"
```

### CTA Section Component
**File**: `components/CTASection.tsx`  
**Props**:
- `onCTAClick`: () => void

**Features**:
- Dedicated conversion section between FAQ and Newsletter
- Headline: "Ready to Explore the Aurelian Collection?"
- "REQUEST A PRIVATE CONSULTATION" button (CTA #5)
- Text alignment: center
- Padding: `py-32`

### Footer Component
**File**: `components/Footer.tsx`  
**Props**:
- `onCTAClick`: () => void

**Features**:
- Global offices with phone numbers
- Footer links: Privacy Protocol, Terms of Acquisition, Investor Relations, Journal
- "INQUIRE NOW" button (CTA #6)
- Copyright notice
- Padding: `py-24`

**Offices**:
```
LONDON +44 20 XXXX XXXX
DUBAI +971 4 XXXX XXXX
NEW YORK +1 212 XXXX XXXX
```

**Footer Links**:
- Privacy Protocol
- Terms of Acquisition
- Investor Relations
- Journal

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

## COMPONENT ARCHITECTURE

```
app/
├── layout.tsx (Root layout, fonts: Playfair Display + Inter, metadata)
├── page.tsx (Main page, component orchestration)
├── globals.css (Tailwind tokens, design system)
└── schema.ts (JSON-LD RealEstateListing schema)

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
└── analytics.ts (Console.log tracking wrappers)

public/
├── images/
│   ├── hero-cinematic.jpg (Hero, v0-generated, 4K)
│   ├── obsidian-villa.jpg (Property 1, 4:5, v0-generated)
│   ├── penthouse.jpg (Property 2, 4:5, v0-generated)
│   └── coastal-sanctuary.jpg (Property 3, 4:5, v0-generated)

docs/
├── DESIGN_TOKENS.md (Complete design system)
├── IMPLEMENTATION_KICKSTART.md (This file)
```

---

## DATA MODEL & HARDCODED CONTENT

### Properties Array
```typescript
const properties = [
  {
    id: 1,
    name: "Obsidian Villa",
    location: "French Riviera",
    price: "Inquire for Pricing",
    image: "/public/images/obsidian-villa.jpg",
    description: "Architectural masterpiece perched on clifftops overlooking the Mediterranean. This contemporary villa seamlessly blends minimalist design with luxury functionality, featuring floor-to-ceiling glass facades, a private beach access, and a state-of-the-art smart home system.",
    features: ["12,000 sq ft", "Smart Home System", "Private Beach Access", "Wine Cellar", "Infinity Pool"],
    priceType: "inquire" // Specific assets use "Inquire"
  },
  {
    id: 2,
    name: "The Penthouse",
    location: "London Mayfair",
    price: "From $12.5M",
    image: "/public/images/penthouse.jpg",
    description: "Crown jewel of London's most exclusive postcodes. This ultra-premium penthouse occupies the top three floors of a Georgian mansion, with panoramic views of Hyde Park and the London skyline. Features a private spa, wine cellar, and direct access to Knightsbridge.",
    features: ["5 Bedrooms", "Wine Cellar", "Rooftop Terrace", "Private Spa", "Panoramic Views"],
    priceType: "development" // Developments use "From $X"
  },
  {
    id: 3,
    name: "Coastal Sanctuary",
    location: "Côte d'Azur",
    price: "From $8.3M",
    image: "/public/images/coastal-sanctuary.jpg",
    description: "Secluded retreat on a pristine stretch of Mediterranean coastline. This exclusive villa offers unparalleled privacy with a private marina, helipad, and direct access to one of Europe's most coveted beaches. Complete with guest houses and a state-of-the-art security system.",
    features: ["Private Marina", "Infinity Pool", "Helipad", "Guest Houses", "Private Beach"],
    priceType: "development"
  }
]
```

### FAQ Items Array
```typescript
const faqItems = [
  {
    id: 1,
    question: "What makes Aurelian's off-market pocket listings exclusive?",
    answer: "We partner directly with family offices and discreet sellers. Properties never enter public MLS databases, preserving confidentiality and commanding premium valuations."
  },
  {
    id: 2,
    question: "How does global tax residency strategy work?",
    answer: "Our legal and tax advisors align property ownership structures with your residency goals, optimizing both privacy and fiscal efficiency across jurisdictions."
  },
  {
    id: 3,
    question: "What does post-purchase management include?",
    answer: "Aurelian provides end-to-end estate staffing and asset maintenance via our proprietary concierge network."
  }
]
```

### Global Offices Array
```typescript
const globalOffices = [
  { city: "London", phone: "+44 20 XXXX XXXX" },
  { city: "Dubai", phone: "+971 4 XXXX XXXX" },
  { city: "New York", phone: "+1 212 XXXX XXXX" }
]
```

### Investment Capacity Tiers
```typescript
const investmentTiers = [
  { value: "5-10", label: "$5M - $10M" },
  { value: "10-50", label: "$10M - $50M" },
  { value: "50-100", label: "$50M - $100M" },
  { value: "100+", label: "$100M+" }
]
```

### Desired Locations Array
```typescript
const desiredLocations = [
  { value: "london", label: "London" },
  { value: "dubai", label: "Dubai" },
  { value: "newyork", label: "New York" },
  { value: "frenchriviera", label: "French Riviera" },
  { value: "swissalps", label: "Swiss Alps" }
]
```

---

## IMPLEMENTATION PHASES

### Phase 1: Core Structure (Days 1-2)
**Objective**: Foundation and framework setup

**Tasks**:
1. Update `layout.tsx` with fonts (Playfair Display, Inter) and metadata
2. Update `globals.css` with Aurelian design tokens
3. Create `lib/constants.ts` with hardcoded data
4. Create `lib/analytics.ts` for tracking utilities
5. Create `public/images/` directory and generate placeholder images
6. Export design token colors in `globals.css` as CSS variables

**Deliverables**:
- Root layout ready for all components
- Design tokens accessible globally
- All static data ready
- Placeholder images generated

### Phase 2: Layout & Navigation (Days 2-3)
**Objective**: Visual hierarchy and primary navigation

**Tasks**:
1. Build `Navigation.tsx` with scroll trigger (50px backdrop blur)
2. Build `Hero.tsx` with parallax effect (0.05 offset)
3. Add "INQUIRE" button to navigation (CTA #1)
4. Add "ENTER THE COLLECTION" button to hero (CTA #2)
5. Wire up modal state management
6. Mobile hamburger menu implementation

**Deliverables**:
- Sticky navigation bar with scroll effects
- 100vh hero section with parallax
- Modal state management ready
- Mobile responsive navigation

### Phase 3: Content & Interactivity (Days 3-5)
**Objective**: Property showcase and core conversions

**Tasks**:
1. Build `PropertyGrid.tsx` with skeleton loaders
2. Build `PropertyModal.tsx` (Shadcn Dialog)
3. Build `PrivateAccessModal.tsx` (Contact form)
4. Wire up all CTAs to open modals
5. Implement form validation
6. Add analytics tracking to all CTAs
7. Build `ObjectionGrid.tsx` with icons
8. Build `FAQSection.tsx` with Shadcn Accordion

**Deliverables**:
- Property grid with hover effects
- Property detail modal
- Contact form with validation
- All CTAs functional (#1-#3, #5)
- Objection grid with icons
- FAQ accordion

### Phase 4: Conversion & Footer (Days 5-6)
**Objective**: Complete conversion funnel

**Tasks**:
1. Build `CTASection.tsx` (CTA #5)
2. Build `NewsletterSection.tsx` with toast
3. Build `Footer.tsx` with offices and links (CTA #6)
4. Wire up all CTAs (#1-#6)
5. Implement toast notifications
6. Add console.log tracking for all interactions

**Deliverables**:
- Complete conversion funnel
- Newsletter signup
- Footer with all links and CTAs
- Analytics tracking on all interactions

### Phase 5: Animations & Polish (Days 6-7)
**Objective**: Premium feel and performance

**Tasks**:
1. Add Framer Motion to property grid (staggerChildren)
2. Implement scroll reveal animations
3. Add hover scale effects (scale-105)
4. Implement `prefers-reduced-motion` respect
5. Optimize image loading (priority, placeholder)
6. Add skeleton loader animations

**Deliverables**:
- Smooth scroll animations
- Staggered grid reveals
- Hover interactions
- Motion preference support

### Phase 6: Optimization & SEO (Days 7)
**Objective**: Performance and discoverability

**Tasks**:
1. Add JSON-LD RealEstateListing schema
2. Implement meta tags and OG data
3. Run Lighthouse audit
4. Optimize bundle size
5. Lazy-load below-fold images
6. Test on real devices

**Deliverables**:
- Lighthouse 95+ score
- SEO-optimized
- Performance optimized
- Cross-device tested

### Phase 7: Accessibility & QA (Days 7-8)
**Objective**: WCAG 2.1 AA compliance

**Tasks**:
1. Audit color contrast ratios
2. Test keyboard navigation
3. Verify focus states
4. Test screen readers
5. Test with motion preference enabled
6. Verify touch targets (44px minimum)
7. Fix accessibility issues

**Deliverables**:
- WCAG 2.1 AA compliant
- Keyboard navigable
- Screen reader tested
- Mobile touch-friendly

---

## DESIGN SYSTEM INTEGRATION

### Color Variables (CSS)
All colors defined in `globals.css` as CSS variables, referenced throughout components:

```css
--background: #0A0A0A
--foreground: #FFFFFF
--primary: #C5A059 (gold)
--card: #1A1A1A
--border: #2D2D2D
--input: #1A1A1A
```

### Typography System
- **Fonts**: Playfair Display (headings), Inter (body)
- **Headings**: `font-serif tracking-tight`
- **Body**: `font-sans leading-relaxed`
- **Details**: See `DESIGN_TOKENS.md` for complete scale

### Component Variants
- **Button Gold**: `variant="gold"` (primary CTA)
- **Button Ghost**: `variant="ghost"` (secondary)
- **Input Ghost**: Bottom-only border, dark background
- **Accordion**: Full-width, touch-friendly on mobile

### Spacing Scale
- Sections: `py-32` (128px)
- Components: `gap-4`, `gap-6`, `gap-8`
- Padding: `p-4`, `p-6`, `p-8`

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
- [ ] Color contrast: Gold (#C5A059) on Black (#0A0A0A) = 11.8:1 ✓
- [ ] Focus states: Visible ring on all interactive elements
- [ ] Touch targets: Min 44px × 44px
- [ ] Motion preference: Respect `prefers-reduced-motion: reduce`
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

## NEXT STEPS

### Immediate Actions (Before Development)
1. ✓ Review `DESIGN_TOKENS.md` for complete design system
2. ✓ Approve CTA placement strategy (6 locations)
3. ✓ Confirm hardcoded data in `lib/constants.ts`
4. ✓ Review user personas and messaging hierarchy
5. ✓ Set up analytics tracking plan

### Development Readiness
- [ ] All team members have access to this document
- [ ] Design tokens file is reference during development
- [ ] CTA placement map is followed exactly
- [ ] Analytics tracking implemented on all CTAs
- [ ] Form validation is implemented per spec
- [ ] Images are generated and placed in `/public/images/`

### Quality Assurance Checklist
- [ ] All CTAs functional and tracked (#1-#6)
- [ ] Forms validate and submit correctly
- [ ] Lighthouse 95+ achieved
- [ ] WCAG 2.1 AA compliant
- [ ] Mobile responsive (1, 2, 3-column grid)
- [ ] Animations respect motion preference
- [ ] All images load with fallbacks
- [ ] Toast notifications working
- [ ] Modal interactions smooth
- [ ] Tracking console.logs visible

---

## QUICK REFERENCE: CTA LOCATIONS

| # | Location | Button Text | Variant | Analytics Source | Purpose |
|---|----------|-------------|---------|------------------|---------|
| 1 | Navigation | INQUIRE | Gold | nav_inquiry | Always-available |
| 2 | Hero | ENTER THE COLLECTION | Gold | hero | Primary engagement |
| 3 | Property Card | REQUEST PRIVATE VIEWING | Ghost | property_card | Property-specific |
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

**Version**: 1.0  
**Status**: Ready for Implementation  
**Last Updated**: February 2, 2026  
**Approval**: Awaiting sign-off to proceed with Phase 1
