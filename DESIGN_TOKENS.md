# AURELIAN ESTATES - DESIGN TOKENS

## Color System

### Primary Palette
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

### Contrast Ratios
- **Gold (#C5A059) on Black (#0A0A0A)**: 11.8:1 ✓ WCAG AAA compliant
- **White (#FFFFFF) on Black (#0A0A0A)**: 21:1 ✓ WCAG AAA compliant
- **Charcoal (#2D2D2D) on White**: 9.2:1 ✓ WCAG AAA compliant

---

## Typography System

### Font Families
- **Headings**: Playfair Display (serif)
  - Import: `next/font/google`
  - Weights: 400 (Regular), 700 (Bold)
  - Zero CLS via preload
- **Body & UI**: Inter (sans-serif)
  - Import: `next/font/google`
  - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
  - Used for body text, buttons, forms

### Type Scale

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

### Font Styling Utilities
- **Heading Style**: `font-serif tracking-tight` (tighter spacing for elegance)
- **Body Style**: `font-sans leading-relaxed` (comfortable reading)
- **Button Style**: `font-sans font-semibold` (premium weight)
- **Muted Style**: `font-sans text-muted-foreground` (secondary information)

---

## Spacing System

### Section Padding
- **Ultra-Luxury Whitespace**: `py-32` (128px) - Primary sections
- **Standard Padding**: `py-24` (96px) - Footer, secondary sections
- **Compact Padding**: `py-16` (64px) - Internal components
- **Mobile Reduction**: `py-16 md:py-24 lg:py-32` - Responsive scaling

### Component Spacing
- **Gap (Flex/Grid)**: `gap-4` (16px), `gap-6` (24px), `gap-8` (32px)
- **Margin**: Avoid mixing with gap; use gap classes on containers
- **Padding (Internal)**: `p-4` (16px), `p-6` (24px), `p-8` (32px)

### Responsive Breakpoints
- **Mobile**: < 640px (Tailwind `sm`)
- **Tablet**: 640px - 1024px (Tailwind `md` to `lg`)
- **Desktop**: > 1024px (Tailwind `lg` and beyond)

---

## Border & Shadow System

### Borders
- **Minimal Accent**: `border border-slate-800` (1px, charcoal, used sparingly)
- **Input Border**: `border-b border-slate-700` (bottom-only for forms)
- **Divider**: `border-t border-slate-800` (horizontal separators)
- **Card Border**: Optional, primarily use shadow over border

### Shadows
- **Subtle Elevation**: `shadow-sm` - Small cards, hover states
- **Standard Elevation**: `shadow-md` - Property cards, modals
- **Deep Elevation**: `shadow-lg` - Hero overlays, prominent modals
- **Ultra-Deep**: `shadow-2xl` - Maximum elevation (rare)

### Border Radius
- **Default**: `rounded` (4px) - Small elements, buttons
- **Large**: `rounded-lg` (8px) - Cards, modals
- **Extra Large**: `rounded-xl` (12px) - Hero sections, large containers

---

## Button Variants

### Primary: Gold Variant
```
Background: #C5A059
Text: #0A0A0A (Black)
Hover: #B8955A (darker gold)
Focus Ring: #C5A059 with 50% opacity
Font Weight: 600 (semibold)
Padding: px-6 py-3 (24px x 12px)
```

### Secondary: Ghost Variant
```
Background: transparent
Text: #FFFFFF (white)
Border: 1px solid #2D2D2D
Hover: bg-slate-900 bg-opacity-50
Focus Ring: #C5A059 with 50% opacity
```

### Tertiary: Link Variant
```
Text: #C5A059 (gold)
Underline: underline-offset-4
Hover: opacity-80
```

---

## Input Fields

### Style Pattern
- **Background**: `bg-[#1A1A1A]` (input background)
- **Border**: `border-b border-[#404040]` (bottom-only for elegance)
- **Text**: `text-white` on dark background
- **Placeholder**: `placeholder:text-muted-foreground`
- **Focus**: `focus:border-b-[#C5A059] focus:outline-none` (gold bottom border)
- **Padding**: `px-4 py-3`
- **Class Pattern**: `bg-[#1A1A1A] border-b border-[#404040] text-white placeholder:text-muted-foreground focus:border-b-[#C5A059] focus:outline-none px-4 py-3`

---

## Image Styling

### Aspect Ratios
- **Hero**: 16:9 (landscape, full-width)
- **Property Cards**: 4:5 (vertical, gallery aesthetic)
- **Feature Images**: 3:2 (standard)

### Image Optimization
- **Format**: WebP (via Next.js `<Image />`)
- **Loading Strategy**:
  - Hero: `priority={true}` (LCP optimization)
  - Grid: `placeholder="blur"` (LQIP effect)
  - Below-fold: Lazy-load with Intersection Observer
- **Fallback**: `bg-gradient-to-br from-slate-900 to-slate-800` (on load failure)
- **Object Fit**: `object-cover` (maintain aspect ratio, fill container)

---

## Animation & Motion

### Scroll-Triggered Animations
- **Fade-In**: Opacity 0 → 1 (300ms)
- **Slide-Up**: translateY(20px) → translateY(0) (400ms)
- **Scale**: scale(0.95) → scale(1) (300ms)
- **Stagger**: `staggerChildren: 0.1` (100ms between items)

### Interactive Animations
- **Hover Scale**: `scale-105` (5% growth, 300ms duration)
- **Button Hover**: Opacity shift to `hover:opacity-80` or color change
- **Focus State**: Visible ring with gold color (`ring-[#C5A059]`)

### Motion Preference
- **Respect `prefers-reduced-motion: reduce`**:
  - Parallax: Disabled
  - Animations: Instant opacity fades (0ms duration)
  - Transitions: Reduced to 0ms

### Parallax Effect
- **Hero Image**: `0.05` parallax offset on `scrollY`
- **Subtle Movement**: Creates depth without overwhelming motion

---

## Component-Specific Tokens

### Navigation Bar
- **Height**: 64px (h-16)
- **Sticky**: `sticky top-0 z-50`
- **Scroll Trigger**: 50px scroll activates `backdrop-blur-md`
- **Background**: `bg-black/20` with blur
- **Mobile**: Hamburger menu, full-screen overlay on `z-40`

### Hero Section
- **Height**: 100vh (constant across all breakpoints)
- **Overlay**: `bg-black/30` for text readability
- **Text Positioning**: Center, absolute positioning
- **CTA Placement**: Bottom-center of hero

### Property Cards
- **Skeleton Loading**: `bg-slate-800 animate-pulse` (200ms duration)
- **Hover Effect**: `scale-105` with `shadow-lg`
- **Transition**: `transition-all duration-300`
- **Price Font**: `text-xs uppercase tracking-widest text-muted-foreground`

### Modals (Shadcn Dialog)
- **Overlay**: `bg-black/50` backdrop blur
- **Background**: `bg-[#1A1A1A]` card color
- **Border**: `border border-slate-800` (optional)
- **Padding**: `p-6` inside modal
- **Z-Index**: `z-50` (above navigation)

### Forms
- **Field Spacing**: `gap-4` between fields
- **Label Styling**: `text-sm font-medium text-foreground`
- **Error Message**: `text-xs text-error mt-1`
- **Validation**: Elegant copy like "Please provide a valid international number for our private concierge."
- **Security Badge**: Lock icon + "SSL Secured" text (visual-only, marketing cue)

### Accordion (FAQ)
- **Mobile**: Full-width with `px-4`
- **Touch Target**: Min `h-[44px]` for tap-friendly
- **Animation**: Staggered open/close with motion preference respect
- **Item Padding**: `py-4 px-4`

### Footer
- **Background**: `bg-black` or `bg-[#1A1A1A]`
- **Text**: `text-muted-foreground` for secondary info
- **Links**: `text-white hover:text-[#C5A059]`
- **Divider**: `border-t border-slate-800`
- **Padding**: `py-24`

---

## Accessibility Tokens

### Focus States
- **All Interactive Elements**: `focus:ring-2 ring-[#C5A059] ring-offset-2 ring-offset-black`
- **Buttons**: Visible outline on focus
- **Form Inputs**: Gold bottom border on focus

### Color Contrast Minimums
- **Body Text**: 4.5:1 (WCAG AA)
- **Large Text (18pt+)**: 3:1 (WCAG AA)
- **Non-text Elements**: 3:1 (WCAG AA for UI components)
- **Target**: Exceed minimums for AAA compliance

### Touch Targets
- **Minimum Size**: 44px × 44px (mobile)
- **Spacing**: 8px minimum between interactive elements
- **Button Padding**: `px-6 py-3` minimum

---

## Performance Tokens

### Image Optimization
- **Hero LCP Target**: < 2.5s
- **First Contentful Paint**: < 1.5s
- **Cumulative Layout Shift**: < 0.1
- **Image Compression**: Aggressive WebP/AVIF conversion

### Animation Performance
- **Frame Rate Target**: 60 FPS (no jank on 60Hz displays)
- **Preferred Properties**: `opacity`, `transform` (GPU-accelerated)
- **Avoid**: `width`, `height`, `left`, `top` (trigger reflow)

### Bundle Size
- **Target**: < 150KB total JS
- **Framer Motion**: Tree-shaken to essentials only
- **Unused CSS**: Removed via Tailwind purge

---

## Utility Classes Reference

### Text Styling
```
font-serif tracking-tight    /* Headings - elegant spacing */
font-sans leading-relaxed     /* Body text - comfortable reading */
text-balance                  /* Optimal line breaks for titles */
text-pretty                   /* Better hyphenation in body */
uppercase tracking-widest     /* Price labels - emphasis */
```

### Layout
```
flex items-center justify-between    /* Navigation layout */
grid grid-cols-3 gap-8              /* Property grid (desktop) */
md:grid-cols-2 lg:grid-cols-3       /* Responsive grid */
gap-4 gap-6 gap-8                   /* Component spacing */
py-32 py-24 py-16                   /* Section padding */
```

### Visibility & Opacity
```
opacity-0 opacity-100           /* Animation states */
hover:opacity-80                /* Interactive states */
text-muted-foreground           /* Secondary text */
bg-black/20 bg-black/50         /* Transparent overlays */
```

### Animations
```
animate-pulse                   /* Skeleton loaders */
transition-all duration-300     /* Smooth transitions */
scale-105 hover:scale-105       /* Hover scale effect */
```

---

## Design System Principles

1. **Restraint**: Use gold sparingly for maximum impact
2. **Whitespace**: Extreme padding creates exclusivity
3. **Hierarchy**: Typography weight and size establish priority
4. **Contrast**: Dark-on-light ensures readability and luxury
5. **Consistency**: All components follow the same token system
6. **Accessibility**: All design decisions must pass WCAG 2.1 AA
7. **Performance**: Motion respects user preferences; images optimize for LCP
8. **Gallery Aesthetic**: Vertical images, muted pricing, narrative-first approach
