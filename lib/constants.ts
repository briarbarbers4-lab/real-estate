// Aurelian Estates - Hardcoded Data
// As per IMPLEMENTATION_COMPILE.md (see root directory for complete documentation)

export interface Property {
  id: number
  name: string
  location: string
  price: string
  image: string
  description: string
  features: string[]
  priceType: "inquire" | "development"
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Obsidian Villa",
    location: "French Riviera",
    price: "Inquire for Pricing",
    image: "/images/obsidian-villa.jpg",
    description:
      "Architectural masterpiece perched on clifftops overlooking the Mediterranean. This contemporary villa seamlessly blends minimalist design with luxury functionality, featuring floor-to-ceiling glass facades, a private beach access, and a state-of-the-art smart home system.",
    features: [
      "12,000 sq ft",
      "Smart Home System",
      "Private Beach Access",
      "Wine Cellar",
      "Infinity Pool",
    ],
    priceType: "inquire",
  },
  {
    id: 2,
    name: "The Penthouse",
    location: "London Mayfair",
    price: "From $12.5M",
    image: "/images/penthouse.jpg",
    description:
      "Crown jewel of London's most exclusive postcodes. This ultra-premium penthouse occupies the top three floors of a Georgian mansion, with panoramic views of Hyde Park and the London skyline. Features a private spa, wine cellar, and direct access to Knightsbridge.",
    features: [
      "5 Bedrooms",
      "Wine Cellar",
      "Rooftop Terrace",
      "Private Spa",
      "Panoramic Views",
    ],
    priceType: "development",
  },
  {
    id: 3,
    name: "Coastal Sanctuary",
    location: "Côte d'Azur",
    price: "From $8.3M",
    image: "/images/coastal-sanctuary.jpg",
    description:
      "Secluded retreat overlooking pristine Mediterranean coastline. This estate offers unmatched privacy with its private marina, helipad, and extensive grounds. The architecture honors traditional Provençal design while incorporating modern amenities.",
    features: [
      "Private Marina",
      "Infinity Pool",
      "Helipad",
      "Guest House",
      "Vineyard",
    ],
    priceType: "development",
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: "What makes Aurelian's off-market pocket listings exclusive?",
    answer:
      "We partner directly with family offices and discreet sellers. Properties never enter public MLS databases, preserving confidentiality and commanding premium valuations.",
  },
  {
    question: "How does global tax residency strategy work?",
    answer:
      "Our legal and tax advisors align property ownership structures with your residency goals, optimizing both privacy and fiscal efficiency across jurisdictions.",
  },
  {
    question: "What does post-purchase management include?",
    answer:
      "Aurelian provides end-to-end estate staffing and asset maintenance via our proprietary concierge network.",
  },
]

export interface Office {
  city: string
  phone: string
}

export const globalOffices: Office[] = [
  { city: "London", phone: "+44 20 7946 0958" },
  { city: "Dubai", phone: "+971 4 123 4567" },
  { city: "New York", phone: "+1 212 555 0198" },
]

export const investmentCapacities = [
  "$5M - $10M",
  "$10M - $50M",
  "$50M - $100M",
  "$100M+",
]

export const desiredLocations = [
  "London",
  "Dubai",
  "New York",
  "French Riviera",
  "Swiss Alps",
]

export const footerLinks = [
  { label: "Privacy Protocol", href: "#" },
  { label: "Terms of Acquisition", href: "#" },
  { label: "Investor Relations", href: "#" },
  { label: "Journal", href: "#" },
]

export interface Pillar {
  icon: string
  title: string
  description: string
}

export const pillars: Pillar[] = [
  {
    icon: "Shield",
    title: "Value Preservation",
    description:
      "Our portfolio comprises blue-chip postcodes in markets with 50+ year appreciation records. Each asset is vetted for long-term wealth security.",
  },
  {
    icon: "Lock",
    title: "Total Discretion",
    description:
      "Anonymous ownership structures, NDA protocols, and encrypted portals protect your portfolio. We operate with the confidentiality of a Swiss bank.",
  },
  {
    icon: "Lightbulb",
    title: "Asset Intelligence",
    description:
      "Quarterly market analysis, tax optimization strategies, and appreciation forecasting. Your assets are monitored by an expert concierge network.",
  },
]
