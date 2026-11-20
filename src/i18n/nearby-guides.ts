import type { Lang } from "../config";
import { maceioPlaces } from "../data/maceio-places";
import { maceioVisitPlans } from "../data/maceio-visit-plans";
import { pajucaraGuides } from "../data/pajucara-guides";
import type { TopicContent } from "./topics";
import { directoryArea, directoryTitle } from "./nearby-directory";
import en from "./nearby/en.json";
import es from "./nearby/es.json";
import zh from "./nearby/zh.json";

const dictionaries: Record<Exclude<Lang, "pt">, Record<string, string>> = { en, es, zh };
const stableKeys = new Set(["id", "href", "src", "source", "query", "directions", "related"]);

export const nearbyGuides = { ...pajucaraGuides, ...maceioPlaces };
export type NearbySlug = keyof typeof nearbyGuides;
export const nearbySlugs = Object.keys(nearbyGuides) as NearbySlug[];

function localize<T>(value: T, lang: Exclude<Lang, "pt">): T {
  function translate(field: unknown): unknown {
    if (typeof field === "string") {
      if (!field.trim()) return field;
      const translation = dictionaries[lang][field];
      if (!translation) throw new Error(`Missing ${lang} translation: ${field}`);
      return translation;
    }
    if (Array.isArray(field)) return field.map(translate);
    if (field !== null && typeof field === "object") {
      const isBlock = "type" in field && ("text" in field || "items" in field);
      return Object.fromEntries(
        Object.entries(field).map(([key, item]) => [
          key,
          stableKeys.has(key) || (isBlock && key === "type") ? item : translate(item),
        ]),
      );
    }
    return field;
  }
  return translate(value) as T;
}

export function getNearbyGuide(lang: Lang, slug: string): TopicContent | undefined {
  if (!Object.hasOwn(nearbyGuides, slug)) return undefined;
  const original: TopicContent = nearbyGuides[slug as NearbySlug];
  if (lang === "pt") return original;

  const topic = localize(original, lang);
  const title = directoryTitle(lang, slug, original.title);
  topic.title = title;
  topic.metaTitle = {
    en: `${title} | Visitor Guide to Maceió`,
    zh: `${title}｜马塞约游览指南`,
    es: `${title} | Guía de Maceió`,
  }[lang];
  topic.eyebrow = directoryArea(lang, original.eyebrow);
  if (topic.visitorInfo) topic.visitorInfo.heading = {
    en: `About ${title}`,
    zh: `关于${title}`,
    es: `Sobre ${title}`,
  }[lang];
  for (const section of topic.sections) {
    for (const link of section.links ?? []) {
      const route = link.href.match(/^\/pt\/([a-z0-9-]+)$/)?.[1];
      if (!route) continue;
      if (Object.hasOwn(nearbyGuides, route) || (lang === "en" && route === "ponta-verde")) {
        link.href = `/${lang}/${route}`;
      } else if (route === "ponta-verde") {
        link.href = `/${lang}/orla-pajucara-ponta-verde`;
        link.label = {
          en: "Explore the waterfront walk",
          zh: "查看帕茹萨拉至蓬塔韦尔迪滨海步道",
          es: "Ver la ruta a pie por el paseo marítimo",
        }[lang];
      }
    }
  }
  return topic;
}

export function getNearbyVisitPlan(lang: Lang, slug: NearbySlug) {
  const plan = maceioVisitPlans[slug];
  if (!plan) throw new Error(`Missing visit plan for ${slug}`);
  return lang === "pt" ? plan : localize(plan, lang);
}
