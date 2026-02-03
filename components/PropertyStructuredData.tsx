import Script from "next/script"
import { generateAllPropertySchemas } from "@/lib/schema"

/**
 * Component to inject property structured data (JSON-LD) into the page
 * Uses Next.js Script component for optimal SEO
 */
export function PropertyStructuredData() {
  const propertySchemas = generateAllPropertySchemas()

  return (
    <>
      {propertySchemas.map((schema, index) => (
        <Script
          key={`property-schema-${index}`}
          id={`property-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  )
}
