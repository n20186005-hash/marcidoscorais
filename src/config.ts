// 站点级事实数据（域名、坐标、评分、地图链接等）集中管理，便于统一维护。
// 注意：本项目内容统一为 "Marco dos Corais"（马拉尼昂州 Maceió 的珊瑚地标），
// 官方阿拉戈斯旅游资料将其置于 Ponta Verde 滨海区。

export type Lang = "pt" | "en" | "zh" | "es";

export const siteConfig = {
  // 各语言站点名称（JSON-LD / OG 使用）
  name: {
    pt: "Marco dos Corais",
    en: "Marco dos Corais",
    zh: "Marco dos Corais（珊瑚地标）",
    es: "Marco dos Corais",
  } as Record<Lang, string>,

  // Google 地图中的别名，用于 JSON-LD alternateName
  alternateNames: [
    "Marco dos Corais Maceió",
    "Marco dos Corais Ponta Verde",
    "Marco dos Corais Alagoas",
  ],

  // 生产域名：优先读 CURRENT_SITE_DOMAIN 环境变量
  get baseUrl(): string {
    const domain = process.env.CURRENT_SITE_DOMAIN || "marcidoscorais.com";
    return `https://${domain}`;
  },

  mapsUrl: "https://maps.app.goo.gl/HUTiXVunMqgN1fQh8",
  mapsEmbed:
    "https://www.google.com/maps?q=88M3%2BJC%20Macei%C3%B3%20AL&output=embed",

  geo: {
    latitude: -9.6689,
    longitude: -35.6853,
  },

  // 评价数据为用户提供的 Google 地图最新数值（2026-11-20）
  rating: "4.9",
  reviewCount: "15944",

  address: {
    streetAddress: "Ponta Verde",
    addressLocality: "Maceió",
    addressRegion: "Alagoas",
    addressCountry: "BR",
  },

  ogImage: "/gallery/21.jpg",
  gaId: "G-YJTNXGWZNY",
};
