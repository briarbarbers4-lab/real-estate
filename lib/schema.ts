// Aurelian Estates - JSON-LD Schema Generation Utilities
// For SEO and structured data

import type { Property } from "./constants"
import { properties, globalOffices } from "./constants"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://aurelian-estates.vercel.app"

/**
 * Generate Organization schema (JSON-LD)
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${BASE_URL}#organization`,
    name: "Aurelian Estates",
    description: "Ultra-luxury real estate portfolio for discerning clientele",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/icon.svg`,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+44-20-7946-0958",
        contactType: "Sales",
        areaServed: "GB",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+971-4-123-4567",
        contactType: "Sales",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-212-555-0198",
        contactType: "Sales",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
    address: globalOffices.map((office) => ({
      "@type": "PostalAddress",
      addressLocality: office.city,
      addressCountry:
        office.city === "London"
          ? "GB"
          : office.city === "Dubai"
          ? "AE"
          : "US",
    })),
    sameAs: [
      // Add social media links if available
      // "https://www.linkedin.com/company/aurelian-estates",
      // "https://twitter.com/aurelianestates",
    ],
  }
}

/**
 * Generate RealEstateListing schema for a property (JSON-LD)
 */
export function generatePropertySchema(property: Property) {
  const propertyUrl = `${BASE_URL}/properties/${property.id}`
  
  // Extract price if available (for "From $X" format)
  let price: number | undefined
  let priceCurrency = "USD"
  
  if (property.priceType === "development" && property.price.includes("$")) {
    const priceMatch = property.price.match(/\$([\d.]+)M/)
    if (priceMatch) {
      price = parseFloat(priceMatch[1]) * 1000000 // Convert millions to dollars
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${propertyUrl}#listing`,
    name: property.name,
    description: property.description,
    image: `${BASE_URL}${property.image}`,
    url: propertyUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressCountry:
        property.location.includes("London")
          ? "GB"
          : property.location.includes("Dubai")
          ? "AE"
          : property.location.includes("New York")
          ? "US"
          : property.location.includes("French Riviera") || property.location.includes("Côte d'Azur")
          ? "FR"
          : "CH",
    },
    ...(price && {
      offers: {
        "@type": "Offer",
        price: price.toString(),
        priceCurrency,
        availability: "https://schema.org/PreOrder",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: price.toString(),
          priceCurrency,
          valueAddedTaxIncluded: false,
        },
      },
    }),
    numberOfRooms: property.features.find((f) => f.includes("Bedroom"))
      ? parseInt(property.features.find((f) => f.includes("Bedroom"))?.match(/\d+/)?.[0] || "0")
      : undefined,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.features.find((f) => f.includes("sq ft"))
        ? parseInt(property.features.find((f) => f.includes("sq ft"))?.match(/[\d,]+/)?.[0]?.replace(/,/g, "") || "0")
        : undefined,
      unitCode: "SQM",
    },
    amenityFeature: property.features.map((feature) => ({
      "@type": "LocationFeatureSpecification",
      name: feature,
    })),
  }
}

/**
 * Generate BreadcrumbList schema (JSON-LD)
 */
export function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Properties",
        item: `${BASE_URL}#properties`,
      },
    ],
  }
}

/**
 * Generate all property schemas
 */
export function generateAllPropertySchemas() {
  return properties.map((property) => generatePropertySchema(property))
}

/**
 * Generate complete structured data for the page
 */
export function generateStructuredData() {
  return {
    organization: generateOrganizationSchema(),
    properties: generateAllPropertySchemas(),
    breadcrumb: generateBreadcrumbSchema(),
  }
}
