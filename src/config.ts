// 站点级事实数据（域名、坐标、评分、地图链接等）集中管理，便于统一维护。
// 注意：本项目内容统一为 "Marco dos Corais"（马拉尼昂州 Maceió 的珊瑚地标），
// 坐标取 Maceió Orla de Atalaia 近似值，部署前请核对精确经纬度与地图链接。

export type Lang = "pt" | "en" | "zh";

export const siteConfig = {
  // 各语言站点名称（JSON-LD / OG 使用）
  name: {
    pt: "Marco dos Corais",
    en: "Marco dos Corais",
    zh: "Marco dos Corais（珊瑚地标）",
  } as Record<Lang, string>,

  // 生产域名：优先读 CURRENT_SITE_DOMAIN 环境变量
  get baseUrl(): string {
    const domain = process.env.CURRENT_SITE_DOMAIN || "marcidoscorais.com";
    return `https://${domain}`;
  },

  mapsUrl: "https://maps.app.goo.gl/XYFWG3cjXBbhB9QT8",
  mapsEmbed:
    "https://www.google.com/maps?q=88M3%2BJC%20Macei%C3%B3%20AL&output=embed",

  geo: {
    latitude: -9.6689,
    longitude: -35.6853,
  },

  rating: "4.7",
  reviewCount: "23374",

  address: {
    streetAddress: "Orla de Atalaia",
    addressLocality: "Maceió",
    addressRegion: "Alagoas",
    addressCountry: "BR",
  },

  ogImage: "/gallery/11.jpg",
  gaId: "G-YJTNXGWZNY",
};
