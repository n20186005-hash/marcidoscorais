import type { APIRoute } from "astro";
import { pajucaraGuides } from "../data/pajucara-guides";

const staticPages = Object.keys(import.meta.glob("./{pt,en,zh,es}/*.astro"))
  .filter((path) => !path.includes("["))
  .map((path) => path.slice(1).replace(/(?:\/index)?\.astro$/, ""));

export const GET: APIRoute = ({ site }) => {
  const paths = [...staticPages, ...Object.keys(pajucaraGuides).map((slug) => `/pt/${slug}`)];
  const entries = paths.sort().map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`);
  return new Response([
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
  ].join("\n"), { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
