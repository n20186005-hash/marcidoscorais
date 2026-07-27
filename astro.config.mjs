import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 部署域名：优先读 CURRENT_SITE_DOMAIN 环境变量，回退 marcidoscorais.com
  site: process.env.CURRENT_SITE_DOMAIN
    ? `https://${process.env.CURRENT_SITE_DOMAIN}`
    : "https://marcidoscorais.com",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "zh"],
    // 默认语言也带前缀：/pt、/en、/zh 均可访问；根 / 由 public/_redirects 边缘 302 到 /pt/
    prefixDefaultLocale: true,
    routing: {
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
