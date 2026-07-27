import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Crab Catwalk | Passarela do Caranguejo",
  description:
    "Crab Catwalk (Passarela do Caranguejo) - Famous seaside promenade in Aracaju, Brazil. Guide to crab restaurants and sunset views.",
};

export default function RootPage() {
  // 默认语言为 pt；静态导出下此 redirect 仅作兜底，
  // 真正的 HTTP 302 由 public/_redirects（Cloudflare 边缘）处理，避免 "Redirecting..." 过渡页。
  redirect("/pt");
}
