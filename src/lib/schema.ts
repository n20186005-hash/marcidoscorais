import { siteConfig, type Lang } from "../config";
import type { Translation } from "../i18n/translations";

// 生成结构化数据（JSON-LD）
// - 首页（pagePath 为空）：TouristAttraction + Place + FAQPage
// - 子页（pagePath 非空）：仅 BreadcrumbList（独立 FAQ/专题由对应组件补充）
export function getJsonLd(
  t: Translation,
  lang: Lang,
  baseUrl: string,
  pagePath = "",
  pageLabel?: string
): Record<string, unknown>[] {
  const name = siteConfig.name[lang] ?? t.hero.title;
  const description = `${t.hero.title} — ${t.hero.subtitle}`;
  const url = pagePath
    ? `${baseUrl}/${lang}/${pagePath}`
    : `${baseUrl}/${lang}`;

  if (pagePath) {
    const crumbs = [
      {
        "@type": "ListItem",
        position: 1,
        name: name,
        item: `${baseUrl}/${lang}`,
      },
    ];
    if (pageLabel) {
      crumbs.push({
        "@type": "ListItem",
        position: 2,
        name: pageLabel,
        item: url,
      });
    }
    return [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs,
      },
    ];
  }

  const touristAttraction: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "Place"],
    name,
    alternateName: siteConfig.alternateNames,
    description,
    url,
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
