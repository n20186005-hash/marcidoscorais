import type { Lang } from "../config";

export const languagesList: Lang[] = ["pt", "en", "zh"];
export const defaultLang: Lang = "pt";

// <html lang> 映射（用于 SEO 与字体）
export const htmlLang: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en-US",
  zh: "zh-CN",
};

// 语言切换器中显示的名称（代码 + 母语名）
export const langLabels: Record<Lang, { code: string; native: string }> = {
  pt: { code: "PT", native: "Português" },
  en: { code: "EN", native: "English" },
  zh: { code: "ZH", native: "中文" },
};

export function isLang(value: string | undefined): value is Lang {
  return !!value && (languagesList as string[]).includes(value);
}

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  return isLang(seg) ? seg : defaultLang;
}
