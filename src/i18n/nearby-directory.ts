import type { Lang } from "../config";

type DirectoryLanguage = Exclude<Lang, "pt">;

const groups: Record<string, Record<DirectoryLanguage, string>> = {
  "Praias de Maceió": { en: "Maceió beaches", zh: "马塞约海滩", es: "Playas de Maceió" },
  "Roteiros de Maceió": { en: "Walking routes", zh: "步行路线", es: "Rutas a pie" },
  "Ponta Verde": { en: "Ponta Verde", zh: "蓬塔韦尔迪", es: "Ponta Verde" },
  "Pajuçara": { en: "Pajuçara", zh: "帕茹萨拉", es: "Pajuçara" },
  "Orla urbana": { en: "Urban waterfront", zh: "城市滨海区", es: "Paseo marítimo urbano" },
  "Litoral norte": { en: "North coast", zh: "北部海岸", es: "Costa norte" },
  "Jaraguá": { en: "Jaraguá", zh: "雅拉瓜", es: "Jaraguá" },
  "Orla sul": { en: "Southern waterfront", zh: "南部滨水区", es: "Litoral sur" },
  "Centro histórico": { en: "Historic center", zh: "历史中心", es: "Centro histórico" },
  "Bairro do Farol": { en: "Farol district", zh: "法罗尔街区", es: "Barrio de Farol" },
};

const titles: Record<string, [english: string, chinese: string, spanish: string]> = {
  "praia-de-pajucara": ["Pajuçara Beach and sailing rafts", "帕茹萨拉海滩与传统帆筏", "Playa de Pajuçara y paseo en jangada"],
  "orla-pajucara-ponta-verde": ["Pajuçara to Marco dos Corais waterfront walk", "帕茹萨拉至珊瑚地标滨海步道", "Paseo a pie de Pajuçara a Marco dos Corais"],
  "farol-da-ponta-verde": ["Ponta Verde Lighthouse", "蓬塔韦尔迪灯塔", "Faro de Ponta Verde"],
  "parque-massay-o-k": ["Massay-ó-k Park", "马赛奥克公园（Massay-ó-k）", "Parque Massay-ó-k"],
  "praia-de-jatiuca": ["Jatiúca Beach", "雅蒂乌卡海滩", "Playa de Jatiúca"],
  "praia-de-ipioca": ["Ipioca Beach", "伊皮奥卡海滩", "Playa de Ipioca"],
  "praia-da-sereia": ["Mermaid Beach (Praia da Sereia)", "美人鱼海滩（Praia da Sereia）", "Playa de la Sirena"],
  "praia-de-sauacui": ["Sauaçui Beach", "萨瓦苏伊海滩（Sauaçui）", "Playa de Sauaçui"],
  "praia-de-jaragua": ["Jaraguá Beach", "雅拉瓜海滩", "Playa de Jaraguá"],
  "pontal-da-barra": ["Pontal da Barra district", "蓬塔尔达巴拉街区", "Barrio de Pontal da Barra"],
  "piscinas-naturais-de-pajucara": ["Pajuçara Natural Pools", "帕茹萨拉天然泳池", "Piscinas naturales de Pajuçara"],
  "feirinha-de-artesanato-da-pajucara": ["Pajuçara Craft Fair", "帕茹萨拉手工艺集市", "Feria de Artesanía de Pajuçara"],
  "memorial-teotonio-vilela": ["Teotônio Vilela Memorial", "特奥托尼奥·维莱拉纪念馆", "Memorial Teotônio Vilela"],
  "museu-da-imagem-e-do-som": ["Alagoas Museum of Image and Sound", "阿拉戈斯影音博物馆", "Museo de la Imagen y el Sonido de Alagoas"],
  "museu-theo-brandao": ["Théo Brandão Museum", "特奥·布兰当博物馆", "Museo Théo Brandão"],
  "museu-palacio-floriano-peixoto": ["Floriano Peixoto Palace Museum", "弗洛里亚诺·佩绍托宫博物馆", "Museo Palacio Floriano Peixoto"],
  "museu-pierre-chalita": ["Pierre Chalita Art Museum", "皮埃尔·沙利塔艺术博物馆", "Museo de Arte Pierre Chalita"],
  "museu-do-comercio": ["Alagoas Museum of Commerce", "阿拉戈斯商业博物馆", "Museo del Comercio de Alagoas"],
  "memorial-a-republica": ["Republic Memorial", "共和国纪念馆", "Memorial de la República"],
  "mirante-de-sao-goncalo": ["São Gonçalo Viewpoint", "圣贡萨洛观景台", "Mirador de São Gonçalo"],
  "mirante-santa-terezinha": ["Santa Terezinha Viewpoint", "圣特雷济尼亚观景台", "Mirador de Santa Terezinha"],
  "praca-dois-leoes": ["Two Lions Square", "双狮广场", "Plaza de los Dos Leones"],
  "praca-dom-pedro-ii": ["Dom Pedro II Square", "佩德罗二世广场", "Plaza Dom Pedro II"],
  "praca-sinimbu": ["Visconde de Sinimbu Square", "西宁布子爵广场", "Plaza Vizconde de Sinimbu"],
  "catedral-metropolitana-de-maceio": ["Maceió Metropolitan Cathedral", "马塞约主教座堂", "Catedral Metropolitana de Maceió"],
  "teatro-deodoro": ["Deodoro Theatre", "德奥多罗剧院", "Teatro Deodoro"],
  "igreja-do-livramento": ["Church of Our Lady of Deliverance", "救赎圣母教堂（Livramento）", "Iglesia de Nuestra Señora del Livramento"],
  "igreja-dos-martirios": ["Bom Jesus dos Martírios Church", "殉难善耶稣教堂（Martírios）", "Iglesia del Buen Jesús de los Martirios"],
  "rua-sa-e-albuquerque": ["Sá e Albuquerque Street", "萨与阿尔布克尔克街", "Calle Sá e Albuquerque"],
  "pinacoteca-universitaria": ["UFAL University Art Gallery", "阿拉戈斯联邦大学美术馆", "Pinacoteca Universitaria de la UFAL"],
  "monumento-almirante-tamandare": ["Admiral Tamandaré Monument", "塔曼达雷海军上将纪念碑", "Monumento al Almirante Tamandaré"],
  "porto-de-maceio": ["Port of Maceió from Jaraguá", "从雅拉瓜眺望马塞约港", "Puerto de Maceió desde Jaraguá"],
  "praca-centenario": ["Centenary Square", "百年纪念广场", "Plaza del Centenario"],
  "bairro-historico-de-jaragua": ["Historic Jaraguá district", "雅拉瓜历史街区", "Barrio histórico de Jaraguá"],
  "pavilhao-do-artesanato": ["Craft Pavilion", "手工艺展销馆", "Pabellón de Artesanía"],
};

const titleIndex = { en: 0, zh: 1, es: 2 } as const;

export function directoryTitle(lang: Lang, slug: string, original: string): string {
  if (lang === "pt") return original;
  const title = titles[slug]?.[titleIndex[lang]];
  if (!title) throw new Error(`Missing ${lang} directory title for ${slug}`);
  return title;
}

export function directoryArea(lang: Lang, area: string): string {
  if (lang === "pt") return area;
  const title = groups[area]?.[lang];
  if (!title) throw new Error(`Missing ${lang} directory area for ${area}`);
  return title;
}
