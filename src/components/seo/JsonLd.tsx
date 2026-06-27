import { site } from "@/lib/site";

/** Organization + WebSite structured data, injected site-wide. */
export function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      slogan: site.tagline,
      description: site.description,
      logo: `${site.url}/icon.svg`,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description,
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
