import type { Lang } from "../config";

export const interfaceCopy = {
  pt: {
    visitEssentials: "Informações para a visita", bring: "O que levar",
    primary: "Navegação principal", menu: "Menu de navegação", theme: "Alternar tema", close: "Fechar", language: "Escolher idioma",
    map: "Ver no mapa", sunset: "Pôr do sol", photos: "Fotos", cookieSettings: "Configurações de cookies",
    photoNumber: "Foto do Marco dos Corais", previousPhoto: "Foto anterior", nextPhoto: "Próxima foto",
    weather: ["Céu limpo", "Predomínio de sol", "Parcialmente nublado", "Nublado", "Neblina", "Garoa leve", "Garoa", "Chuva", "Chuva forte", "Neve", "Pancadas de chuva", "Trovoada"],
    topic: {
      hours: "Horário", visitorReviews: "Consultar avaliações dos visitantes", about: "Sobre o local", management: "Gestão do local",
      practical: "Informações práticas", type: "Tipo de visita", access: "Acesso e funcionamento", transport: "Como chegar",
      location: "Localização", opening: "Horário de funcionamento", tickets: "Preço e ingressos", itinerary: "Roteiro da visita",
      advice: "Antes de sair", photoTips: "Onde fotografar", stay: "Onde se hospedar", reviews: "Avaliações no Google Maps",
      reviewsOf: "Ver avaliações de", snapshot: "Registro publicado pelo Prime Gourmet", mapSection: "Localização e rota",
      openMap: "Abrir ponto no Google Maps", walking: "Ver percurso a pé", sources: "Fontes",
    },
  },
  en: {
    visitEssentials: "Visitor essentials", bring: "What to bring",
    primary: "Main navigation", menu: "Navigation menu", theme: "Toggle theme", close: "Close", language: "Choose language",
    map: "View on map", sunset: "Sunset", photos: "Photos", cookieSettings: "Cookie settings",
    photoNumber: "Photo of Marco dos Corais", previousPhoto: "Previous photo", nextPhoto: "Next photo",
    weather: ["Clear", "Mostly clear", "Partly cloudy", "Overcast", "Fog", "Light drizzle", "Drizzle", "Rain", "Heavy rain", "Snow", "Showers", "Thunderstorm"],
    topic: {
      hours: "Hours", visitorReviews: "Read visitor reviews", about: "About the attraction", management: "Managed by",
      practical: "Visitor information", type: "Attraction type", access: "Access and operation", transport: "Getting there",
      location: "Location", opening: "Opening hours", tickets: "Admission and tickets", itinerary: "Suggested itinerary",
      advice: "Before you go", photoTips: "Photo spots", stay: "Where to stay", reviews: "Google Maps reviews",
      reviewsOf: "Read reviews of", snapshot: "As reported by Prime Gourmet", mapSection: "Location and directions",
      openMap: "Open in Google Maps", walking: "View walking route", sources: "Sources",
    },
  },
  zh: {
    visitEssentials: "游览实用信息", bring: "携带物品",
    primary: "主导航", menu: "导航菜单", theme: "切换显示主题", close: "关闭", language: "选择语言",
    map: "查看地图", sunset: "日落", photos: "照片", cookieSettings: "Cookie 设置",
    photoNumber: "珊瑚地标照片", previousPhoto: "上一张照片", nextPhoto: "下一张照片",
    weather: ["晴", "大致晴朗", "局部多云", "阴", "雾", "轻微毛毛雨", "毛毛雨", "雨", "大雨", "雪", "阵雨", "雷暴"],
    topic: {
      hours: "开放时间", visitorReviews: "查看游客评价", about: "关于景点", management: "管理主体",
      practical: "实用信息", type: "景点类型", access: "开放与入场", transport: "交通方式",
      location: "位置", opening: "开放时间", tickets: "票价与门票", itinerary: "建议游览路线",
      advice: "出发前须知", photoTips: "拍照机位", stay: "住宿建议", reviews: "Google 地图评价",
      reviewsOf: "查看评价", snapshot: "Prime Gourmet 记录", mapSection: "地址与导航",
      openMap: "在 Google 地图中打开", walking: "查看步行路线", sources: "资料来源",
    },
  },
  es: {
    visitEssentials: "Información práctica", bring: "Qué llevar",
    primary: "Navegación principal", menu: "Menú de navegación", theme: "Cambiar tema", close: "Cerrar", language: "Elegir idioma",
    map: "Ver en el mapa", sunset: "Puesta de sol", photos: "Fotos", cookieSettings: "Configuración de cookies",
    photoNumber: "Foto de Marco dos Corais", previousPhoto: "Foto anterior", nextPhoto: "Foto siguiente",
    weather: ["Despejado", "Mayormente despejado", "Parcialmente nublado", "Cubierto", "Niebla", "Llovizna ligera", "Llovizna", "Lluvia", "Lluvia intensa", "Nieve", "Chubascos", "Tormenta"],
    topic: {
      hours: "Horario", visitorReviews: "Consultar opiniones de visitantes", about: "Sobre el lugar", management: "Gestión del lugar",
      practical: "Información práctica", type: "Tipo de visita", access: "Acceso y funcionamiento", transport: "Cómo llegar",
      location: "Ubicación", opening: "Horario de apertura", tickets: "Precio y entradas", itinerary: "Itinerario de visita",
      advice: "Antes de salir", photoTips: "Dónde hacer fotos", stay: "Dónde alojarse", reviews: "Opiniones en Google Maps",
      reviewsOf: "Consultar opiniones de", snapshot: "Datos publicados por Prime Gourmet", mapSection: "Ubicación y ruta",
      openMap: "Abrir en Google Maps", walking: "Ver ruta a pie", sources: "Fuentes",
    },
  },
} satisfies Record<Lang, unknown>;

export const portugueseGuidesCopy = {
  nearbyTitle: "O que visitar perto do Marco dos Corais",
  nearbyIntro: "Escolha uma parada na orla ou combine o passeio com o patrimônio de Maceió.",
  itineraries: "Roteiros de meio dia e um dia em Maceió",
  attractions: "Pontos turísticos de Maceió por bairro",
  waterfrontWalk: "Roteiro a pé de Pajuçara ao Marco dos Corais",
};


export const nearbyCopy = {
  pt: { link: "Arredores", title: portugueseGuidesCopy.nearbyTitle, intro: portugueseGuidesCopy.nearbyIntro },
  en: { link: "Nearby places", title: "Things to see near Marco dos Corais", intro: "Browse 35 guides to nearby beaches, historic sites and museums." },
  zh: { link: "周边景点", title: "珊瑚地标周边景点", intro: "查看 35 篇周边游览指南，涵盖海滩、历史街区和博物馆。" },
  es: { link: "Alrededores", title: "Qué visitar cerca de Marco dos Corais", intro: "Explora 35 guías de playas, lugares históricos y museos cercanos." },
} satisfies Record<Lang, { link: string; title: string; intro: string }>;
