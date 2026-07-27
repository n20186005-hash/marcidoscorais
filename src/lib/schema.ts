import { siteConfig, type Lang } from "../config";
import type { Translation } from "../i18n/translations";

// 生成 TouristAttraction + FAQPage 结构化数据（JSON-LD）
export function getJsonLd(
  t: Translation,
  lang: Lang,
  baseUrl: string
): Record<string, unknown>[] {
  const name = siteConfig.name[lang] ?? t.hero.title;
  const description = `${t.hero.title} — ${t.hero.subtitle}`;

  const touristAttraction: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name,
    description,
    url: `${baseUrl}/${lang}/`,
    image: `${baseUrl}${siteConfig.ogImage}`,
    touristType: ["Families", "Photographers", "Nature lovers", "Couples"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating,
      reviewCount: siteConfig.reviewCount,
    },
    sameAs: [siteConfig.mapsUrl],
  };

  const faqPage: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (t.faq?.items ?? []).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: Array.isArray(item.answer)
          ? item.answer.join(" ")
          : item.answer,
      },
    })),
  };

  return [touristAttraction, faqPage];
}
