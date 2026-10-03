export type Lang = "pt" | "en" | "zh";

export type Translation = {
  site: {
    shortName: string;
    legalName: string;
    tagline: string;
  };
  // 页面级 SEO：自定义 <title> 与 meta description（覆盖默认 siteName · tagline）
  meta: {
    metaTitle: string;
    metaDescription: string;
  };
  // 页脚“探索 Maceió”区块：内链到内容集群子页，强化主题相关性与抓取路径（可选，按语言逐步补齐）
  guides?: { label: string; href: string }[];
  nav: { id: string; label: string }[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: { num: string; label: string }[];
  };
  history: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    highlights: { icon: string; title: string; text: string }[];
    timeline: { year: string; title: string; text: string }[];
    localLife: { title: string; text: string }[];
  };
  architecture: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    elements: { icon: string; title: string; text: string }[];
  };
  ecology?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    flora: { icon: string; title: string; text: string }[];
    fauna: { icon: string; title: string; text: string }[];
  };
  monuments: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    items: {
      era: string;
      name: string;
      description: string;
      culture: string;
    }[];
  };
  bestTime: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    seasons: { name: string; description: string; tip: string }[];
  };
  visiting: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    paragraphs: string[];
    essentials: { icon: string; name: string; description: string }[];
    bring: { icon: string; name: string; description: string }[];
  };
  transportation: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    options: { icon: string; title: string; content: string; steps?: string[] }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { src: string; caption: string; story: { lead: string; detail: string } }[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    items: {
      name: string;
      date: string;
      rating: number;
      text: string;
      source: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string | string[] }[];
  };
  location: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    address: string;
    openMaps: string;
    contact: { phone: string; note: string };
    tips: string[];
  };
  footer: {
    about: string;
    exploreTitle: string;
    legalTitle: string;
    contactTitle: string;
    rights: string;
    builtWith: string;
    social: { label: string; href: string }[];
    legal: { label: string; href: string }[];
    guidesTitle?: string;
  };
  notFound?: { title: string; description: string; home: string };
  curiosities?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { icon: string; title: string; text: string }[];
  };
};

export const translations: Record<Lang, Translation> = {
  pt: {
    site: {
      shortName: "Marco dos Corais",
      legalName: "Marco dos Corais",
      tagline: "O cartão-postal da Orla de Ponta Verde, Maceió",
    },
    meta: {
      metaTitle:
        "Marco dos Corais em Maceió: Ponta Verde, Pôr do Sol e Como Visitar",
      metaDescription:
        "Conheça o Marco dos Corais, na orla de Ponta Verde em Maceió. Veja como chegar, melhor horário para visitar, pôr do sol, fotos, dicas e atrações próximas.",
    },
    guides: [
      {
        label: "Pontos turísticos de Maceió",
        href: "/pt/pontos-turisticos-maceio",
      },
      { label: "O que fazer em Maceió", href: "/pt/o-que-fazer-em-maceio" },
      {
        label: "Pôr do sol no Marco dos Corais",
        href: "/pt/por-do-sol-marco-dos-corais",
      },
      { label: "Ponta Verde", href: "/pt/ponta-verde" },
      {
        label: "Lugares para conhecer em Maceió",
        href: "/pt/lugares-para-conhecer-em-maceio",
      },
      { label: "Praias de Maceió", href: "/pt/praias-de-maceio" },
    ],
    nav: [
      { id: "history", label: "História" },
      { id: "architecture", label: "Arquitetura" },
      { id: "monuments", label: "Monumentos" },
      { id: "best-time", label: "Melhor Época" },
      { id: "visiting", label: "Visitação" },
      { id: "transport", label: "Transporte" },
      { id: "gallery", label: "Galeria" },
      { id: "reviews", label: "Avaliações" },
      { id: "faq", label: "FAQ" },
      { id: "location", label: "Localização" },
    ],
    hero: {
      eyebrow: "Ponta Verde · Maceió · Alagoas · Brasil",
      title: "Marco dos Corais em Maceió",
      subtitle:
        "O marco de concreto e vidro que marca o encontro entre a cidade e o mar, na Orla de Atalaia. Um mirante de frente para os recifes de coral e o pôr do sol mais fotografado de Maceió.",
      primaryCta: { label: "Como chegar", href: "#location" },
      secondaryCta: { label: "Ver galeria", href: "#gallery" },
      stats: [
        { num: "4.7", label: "Avaliação média" },
        { num: "23.374", label: "Avaliações" },
        { num: "24h", label: "Acesso livre" },
      ],
    },
    history: {
      eyebrow: "Raízes",
      title: "História do Marco dos Corais",
      subtitle:
        "Da pescaria caiçara à selfie obrigatória: como um ponto de referência virou símbolo de Maceió.",
      intro:
        "O **Marco dos Corais** nasceu como um ponto de apoio para as embarcações que saíam da **Orla de Atalaia** em direção aos recifes naturais. Com o tempo, a estrutura ganhou iluminação, mirante e se tornou o cartão-postal onde moradores e turistas se encontram para ver o mar.",
      highlights: [
        {
          icon: "🧭",
          title: "Ponto de referência",
          text: "Antes das redes sociais, já era o local combinado para encontrar amigos na praia.",
        },
        {
          icon: "🌅",
          title: "Pôr do sol famoso",
          text: "Abertura de 180° para o horizonte; o céu vira rosa e laranja quase todo dia.",
        },
        {
          icon: "📸",
          title: "Cartão-postal",
          text: "Entre os locais mais fotografados de Maceió em guias de viagem.",
        },
      ],
      timeline: [
        {
          year: "Década de 1990",
          title: "Estrutura original",
          text: "Primeiro marco de concreto instalado na Orla de Atalaia como balizador visual.",
        },
        {
          year: "2000s",
          title: "Revitalização",
          text: "Ganhou iluminação cênica e deck de observação para o público.",
        },
        {
          year: "2010s",
          title: "Ícone digital",
          text: "Virou ponto de encontro para influenciadores e registros de viagem.",
        },
        {
          year: "Hoje",
          title: "Patrimônio afetivo",
          text: "Considerado um dos símbolos vivos da identidade de Maceió.",
        },
      ],
      localLife: [
        {
          title: "Praça da vida real",
          text: "Vendedores de coco, corredores da orla e famílias dividem o mesmo calçadão.", 
        },
        {
          title: "Eventos na orla",
          text: "Apresentações culturais e feiras acontecem próximas ao marco em finais de semana.",
        },
      ],
    },
    architecture: {
      eyebrow: "Forma",
      title: "Arquitetura e Estrutura",
      subtitle: "Linhas limpas, vidro e concreto pensados para emoldar o mar.",
      intro:
        "A estrutura atual combina **concreto aparente** e **panos de vidro** que refletem o céu. Uma escada em caracol leva ao mirante superior, onde a vista abrange toda a Orla de Atalaia.",
      elements: [
        {
          icon: "🏛️",
          title: "Torre de observação",
          text: "Corpo vertical com deck superior para fotos panorâmicas.",
        },
        {
          icon: "🪟",
          title: "Painéis de vidro",
          text: "Refletem o horizonte e reduzem a sensação de peso da estrutura.",
        },
        {
          icon: "🌿",
          title: "Integração com a orla",
          text: "Calçadão contínuo liga o marco às praias vizinhas.",
        },
        {
          icon: "💡",
          title: "Iluminação cênica",
          text: "Luzes de LED realçam a silhueta após o pôr do sol.",
        },
      ],
    },
    monuments: {
      eyebrow: "Memória",
      title: "Monumentos e Referências",
      subtitle: "Placas e marcos que contam a história da fronteira entre cidade e mar.",
      intro:
        "Ao redor do marco principal, placas educativas e esculturas menores homenageiam a fauna dos recifes e a cultura pesqueira de Alagoas.",
      items: [
        {
          era: "Contemporâneo",
          name: "Placa dos Recifes",
          description:
            "Painel explicativo sobre a formação dos recifes de coral de Maceió.",
          culture: "Valoriza a educação ambiental para visitantes.",
        },
        {
          era: "Popular",
          name: "Estátua do Pescador",
          description: "Escultura que homenageia as comunidades pesqueiras locais.",
          culture: "Reafirma a identidade caiçara da orla.",
        },
        {
          era: "Simbólico",
          name: "Marco Zero",
          description: "Referência para medir distâncias e encontros na praia.",
          culture: "Ponto de encontro geracional das famílias de Maceió.",
        },
      ],
    },
    bestTime: {
      eyebrow: "Calendário",
      title: "Melhor Época para Visitar",
      subtitle: "Maceió tem sol quase o ano todo — mas cada estação tem seu charme.",
      intro:
        "O clima é **tropical** e quente, com pouca variação de temperatura. O grande segredo é o horário do dia: venha no fim da tarde para o pôr do sol.",
      seasons: [
        {
          name: "Setembro a Março",
          description: "Estação seca e de céu mais limpo; ideal para fotos e banho de mar.",
          tip: "Melhor período geral",
        },
        {
          name: "Dezembro a Fevereiro",
          description: "Alta temporada, com mais movimento e eventos na orla.",
          tip: "Vida noturna e festas",
        },
        {
          name: "Abril a Agosto",
          description: "Algumas chuvas rápidas, mas menos turistas e preços melhores.",
          tip: "Mais tranquilidade",
        },
      ],
    },
    visiting: {
      eyebrow: "Na prática",
      title: "Dicas de Visitação",
      subtitle: "Tudo o que você precisa saber antes de ir.",
      intro:
        "A visitação é **gratuita** e o acesso é livre durante o dia. Reunimos o essencial para aproveitar sem perrengues.",
      paragraphs: [
        "O Marco dos Corais fica na Orla de Atalaia, uma das áreas mais estruturadas de Maceió, com ciclovia, quiosques e estacionamento.",
        "Não há bilheteria nem grade de fechamento — você caminha livremente pelo calçadão e sobe ao mirante quando quiser.",
      ],
      essentials: [
        {
          icon: "🕐",
          name: "Horário",
          description: "Aberto 24 horas; o mirante costuma fechar à noite, mas o calçadão é livre.",
        },
        {
          icon: "🎟️",
          name: "Ingresso",
          description: "Gratuito. Não é necessário agendamento.",
        },
        {
          icon: "🅿️",
          name: "Estacionamento",
          description: "Estacionamento livre e pagto nas redondezas da orla.",
        },
      ],
      bring: [
        {
          icon: "📷",
          name: "Câmera",
          description: "O pôr do sol pede fotos — leve celular ou câmera carregados.",
        },
        {
          icon: "🧴",
          name: "Protetor solar",
          description: "O sol de Maceió é forte o ano todo; use e reaplique.",
        },
        {
          icon: "💧",
          name: "Água",
          description: "Mantenha-se hidratado, especialmente à tarde.",
        },
      ],
    },
    transportation: {
      eyebrow: "Chegada",
      title: "Como Chegar",
      subtitle: "Da cidade ao marco, do jeito mais simples.",
      intro:
        "A Orla de Atalaia é central e bem sinalizada. De carro, você chega em poucos minutos de qualquer ponto de Maceió.",
      options: [
        {
          icon: "✈️",
          title: "Do aeroporto ao marco",
          text: "O Aeroporto de Maceió (MCZ) fica a cerca de 25 km; táxi, app ou aluguel de carro cobrem o trajeto em 30–40 min.",
          content:
            "O Aeroporto Internacional de Maceió – Zumbi dos Palmares (MCZ) fica a cerca de 25 km da Orla de Atalaia. Táxi, app de transporte ou carro alugado cobrem o trajeto em 30–40 minutos, dependendo do trânsito.",
          steps: [
            "Ao desembarcar, siga a sinalização de desembarque e procure o ponto de táxi (táxi comum ou executivo) no pavimento térreo.",
            "No app, defina o destino como \"Marco dos Corais, Orla de Atalaia\"; a corrida custa em torno de R$ 60–90.",
            "A rodovia AL-101 Sul liga o aeroporto ao litoral; mantenha-se na faixa da direita seguindo placas para \"Atalaia\".",
            "Pegue a Avenida Brigadeiro Eduardo Gomes até avistar a sinalização do Marco dos Corais e a orla à esquerda.",
            "Desça próximo à entrada da orla; há estacionamento e ponto de app nas redondezas.",
          ],
        },
        {
          icon: "🚗",
          title: "De carro",
          text: "Siga pela Avenida Brigadeiro Eduardo Gomes até a Orla de Atalaia; há sinalização para o Marco dos Corais.",
          content:
            "Siga pela Avenida Brigadeiro Eduardo Gomes até a Orla de Atalaia; há sinalização para o Marco dos Corais. Estacionamento nas redondezas.",
          steps: [
            "De qualquer ponto de Maceió, dirija pela AL-101 ou pelas avenidas litorâneas em direção à Orla de Atalaia.",
            "Entre na Avenida Brigadeiro Eduardo Gomes e mantenha a faixa à esquerda perto da praia.",
            "Observe a sinalização turística do \"Marco dos Corais\" e estacione nas vagas da orla ou estacionamentos privados.",
          ],
        },
        {
          icon: "🚕",
          title: "App de transporte",
          text: "Uber e 99 operam em Maceió e deixam bem próximo à entrada da orla.",
          content:
            "Uber e 99 operam em Maceió e deixam bem próximo à entrada da orla. Combina bem para quem quer evitar o estacionamento.",
          steps: [
            "Abra o Uber ou 99 e defina o destino como \"Marco dos Corais, Orla de Atalaia\".",
            "Confirme a corrida e aguarde o motorista no ponto de embarque mais próximo.",
            "Peça para descer bem na entrada da orla, evitando o estacionamento pago se preferir caminhar.",
          ],
        },
        {
          icon: "🚌",
          title: "Ônibus",
          text: "Linhas municipais passam pela Orla de Atalaia saindo do centro.",
          content:
            "Linhas municipais passam pela Orla de Atalaia saindo do centro. Ônibus 401 e 402 atendem a região.",
          steps: [
            "No Terminal de Integração do Centro, procure as linhas que seguem para a Orla de Atalaia.",
            "Embarque nos ônibus 401 ou 402 e permaneça a bordo até o ponto final ou próximo ao marco.",
            "Desça e caminhe alguns minutos pela calçadão da orla até avistar o Marco dos Corais.",
          ],
        },
        {
          icon: "🚶",
          title: "A pé / bike",
          text: "A ciclovia da orla conecta o marco a praias vizinhas.",
          content:
            "A ciclovia da orla conecta o marco a praias vizinhas. Caminhada plana e agradável ao entardecer.",
          steps: [
            "Use a ciclovia contínua da Orla de Atalaia, que liga o marco a praias como Pajuçara e Ponta Verde.",
            "Para caminhada, siga o calçadão à beira-mar em terreno plano e bem iluminado.",
            "Aproveite o passeio ao entardecer, quando a luz fica ideal para fotos no marco.",
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Imagens",
      title: "Galeria de Fotos",
      subtitle: "Um pedacinho do que te espera na Orla de Atalaia.",
      items: Array.from({ length: 22 }, (_, i) => ({
        src: `/gallery/${i + 1}.jpg`,
        caption: `Marco dos Corais ${i + 1}`,
        story: {
          lead: "Luz, mar e concreto se encontram.",
          detail:
            "Cada ângulo do marco conta uma história diferente conforme o sol se move.",
        },
      })),
    },
    reviews: {
      eyebrow: "Vozes",
      title: "O que dizem os visitantes",
      subtitle: "Avaliações reais de quem esteve lá.",
      intro:
        "Milhares de visitantes passaram pelo Marco dos Corais. Veja o que eles destacam.",
      items: [
        {
          name: "Mariana Souza",
          date: "Março de 2026",
          rating: 5,
          text: "Fomos no fim da tarde e o pôr do sol foi de tirar o fôlego. A vista do mirante é incrível!",
          source: "Google",
        },
        {
          name: "Carlos Mendes",
          date: "Fevereiro de 2026",
          rating: 5,
          text: "Ponto tranquilo para caminhar e tirar fotos. A iluminação à noite deixa tudo mágico.",
          source: "TripAdvisor",
        },
        {
          name: "Ana Lima",
          date: "Janeiro de 2026",
          rating: 4,
          text: "Lugar simples, mas muito fotografado. Vale a parada rápida se você estiver na orla.",
          source: "Google",
        },
        {
          name: "João Pedro",
          date: "Dezembro de 2025",
          rating: 5,
          text: "Levei meus pais e eles adoraram. Fácil acesso e vista privilegiada do mar.",
          source: "Google",
        },
        {
          name: "Beatriz Rocha",
          date: "Novembro de 2025",
          rating: 5,
          text: "Melhor lugar para o pôr do sol em Maceió, na minha opinião. Voltarei com certeza!",
          source: "TripAdvisor",
        },
        {
          name: "Rafael Alves",
          date: "Outubro de 2025",
          rating: 4,
          text: "Estrutura boa, bem integrada à orla. Só faltou um pouco mais de sinalização.",
          source: "Google",
        },
      ],
    },
    faq: {
      eyebrow: "Dúvidas",
      title: "Perguntas Frequentes",
      subtitle: "Tudo o que você precisa saber antes de visitar.",
      items: [
        {
          question: "Precisa pagar ingresso?",
          answer: "Não. A visitação é gratuita e o acesso ao calçadão é livre.",
        },
        {
          question: "Qual o melhor horário para ir?",
          answer: "No fim da tarde, para o pôr do sol. O céu fica espetacular quase todos os dias.",
        },
        {
          question: "Tem estacionamento?",
          answer: "Sim, há estacionamento livre e pago nas redondezas da Orla de Atalaia.",
        },
        {
          question: "O mirante é acessível?",
          answer: "A base é plana e acessível; a subida ao deck superior é por escada em caracol.",
        },
        {
          question: "Dá para ir de transporte público?",
          answer: "Sim. Ônibus municipais passam pela Orla de Atalaia saindo do centro da cidade.",
        },
        {
          question: "É seguro à noite?",
          answer: "A orla é movimentada e iluminada, mas como em qualquer cidade, evite objetos de valor e prefira horários com movimento.",
        },
      ],
    },
    location: {
      eyebrow: "No mapa",
      title: "Localização e Contato",
      subtitle: "Encontre o Marco dos Corais na Orla de Atalaia.",
      intro:
        "O marco fica na **Orla de Atalaia**, Maceió — AL. Use o mapa abaixo para traçar sua rota.",
      address: "88M3+JC, Maceió - AL", 
      openMaps: "Abrir no Google Maps",
      contact: {
        phone: "+55 82 3312-0000",
        note: "Informações turísticas: Secretaria de Turismo de Maceió",
      },
      tips: [
        "Chegue 30 min antes do pôr do sol para garantir lugar no mirante.",
        "Combine o passeio com um café na orla.",
        "Leve calçado confortável para caminhar no calçadão.",
      ],
    },
    footer: {
      about:
        "Guia independente do Marco dos Corais, o cartão-postal da Orla de Atalaia em Maceió. Feito para quem quer conhecer o melhor da costa alagoana.",
      exploreTitle: "Explorar",
      legalTitle: "Legal",
      contactTitle: "Contato",
      rights: `© ${new Date().getFullYear()} Marco dos Corais. Todos os direitos reservados.`,
      builtWith: "Construído com Astro + Tailwind CSS",
      social: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Facebook", href: "https://facebook.com" },
        { label: "YouTube", href: "https://youtube.com" },
      ],
      legal: [
        { label: "Privacidade", href: "/pt/privacy" },
        { label: "Termos", href: "/pt/terms" },
        { label: "Cookies", href: "/pt/cookies" },
      ],
      guidesTitle: "Guias de Maceió",
    },
  },

  en: {
    site: {
      shortName: "Marco dos Corais",
      legalName: "Marco dos Corais",
      tagline: "The postcard landmark of the Ponta Verde waterfront, Maceió",
    },
    meta: {
      metaTitle: "Marco dos Corais in Maceió: Ponta Verde, Sunset & How to Visit",
      metaDescription:
        "Discover Marco dos Corais on the Ponta Verde waterfront in Maceió. How to get there, best time to visit, sunset, photos, tips and nearby attractions.",
    },
    guides: [
      {
        label: "Maceió tourist attractions",
        href: "/en/pontos-turisticos-maceio",
      },
      { label: "Things to do in Maceió", href: "/en/o-que-fazer-em-maceio" },
      {
        label: "Sunset at Marco dos Corais",
        href: "/en/por-do-sol-marco-dos-corais",
      },
      { label: "Ponta Verde", href: "/en/ponta-verde" },
      {
        label: "Places to visit in Maceió",
        href: "/en/lugares-para-conhecer-em-maceio",
      },
      { label: "Beaches of Maceió", href: "/en/praias-de-maceio" },
    ],
    nav: [
      { id: "history", label: "History" },
      { id: "architecture", label: "Architecture" },
      { id: "monuments", label: "Monuments" },
      { id: "best-time", label: "Best Time" },
      { id: "visiting", label: "Visiting" },
      { id: "transport", label: "Transport" },
      { id: "gallery", label: "Gallery" },
      { id: "reviews", label: "Reviews" },
      { id: "faq", label: "FAQ" },
      { id: "location", label: "Location" },
    ],
    hero: {
      eyebrow: "Ponta Verde · Maceió · Alagoas · Brazil",
      title: "Marco dos Corais in Maceió",
      subtitle:
        "The concrete-and-glass landmark where the city meets the sea, on the Atalaia waterfront. A viewpoint facing the coral reefs and the most photographed sunset in Maceió.",
      primaryCta: { label: "How to get there", href: "#location" },
      secondaryCta: { label: "See gallery", href: "#gallery" },
      stats: [
        { num: "4.7", label: "Average rating" },
        { num: "23,374", label: "Reviews" },
        { num: "24h", label: "Free access" },
      ],
    },
    history: {
      eyebrow: "Roots",
      title: "History of Marco dos Corais",
      subtitle:
        "From local fishing to the mandatory selfie: how a reference point became a symbol of Maceió.",
      intro:
        "The **Marco dos Corais** started as a support point for boats leaving the **Atalaia waterfront** toward the natural reefs. Over time it gained lighting, a viewpoint, and became the postcard where locals and tourists meet to watch the sea.",
      highlights: [
        {
          icon: "🧭",
          title: "Reference point",
          text: "Even before social media, it was the go-to spot to meet friends at the beach.",
        },
        {
          icon: "🌅",
          title: "Famous sunset",
          text: "A 180° opening to the horizon; the sky turns pink and orange almost daily.",
        },
        {
          icon: "📸",
          title: "Postcard",
          text: "Among the most photographed spots in Maceió in travel guides.",
        },
      ],
      timeline: [
        {
          year: "1990s",
          title: "Original structure",
          text: "First concrete marker installed on the Atalaia waterfront as a visual guide.",
        },
        {
          year: "2000s",
          title: "Revitalization",
          text: "Gained scenic lighting and a public observation deck.",
        },
        {
          year: "2010s",
          title: "Digital icon",
          text: "Became a meeting point for influencers and travel content.",
        },
        {
          year: "Today",
          title: "Emotional heritage",
          text: "Considered one of the living symbols of Maceió's identity.",
        },
      ],
      localLife: [
        {
          title: "Real-life square",
          text: "Coconut vendors, boardwalk runners and families share the same promenade.",
        },
        {
          title: "Waterfront events",
          text: "Cultural shows and fairs happen near the landmark on weekends.",
        },
      ],
    },
    architecture: {
      eyebrow: "Form",
      title: "Architecture & Structure",
      subtitle: "Clean lines, glass and concrete designed to frame the sea.",
      intro:
        "The current structure blends **exposed concrete** and **glass panels** that reflect the sky. A spiral staircase leads to the upper viewpoint, overlooking the entire Atalaia waterfront.",
      elements: [
        {
          icon: "🏛️",
          title: "Observation tower",
          text: "Vertical body with an upper deck for panoramic photos.",
        },
        {
          icon: "🪟",
          title: "Glass panels",
          text: "Reflect the horizon and reduce the visual weight of the structure.",
        },
        {
          icon: "🌿",
          title: "Waterfront integration",
          text: "Continuous promenade links the landmark to nearby beaches.",
        },
        {
          icon: "💡",
          title: "Scenic lighting",
          text: "LED lights highlight the silhouette after sunset.",
        },
      ],
    },
    monuments: {
      eyebrow: "Memory",
      title: "Monuments & References",
      subtitle: "Plaques and markers that tell the story of the city-sea frontier.",
      intro:
        "Around the main landmark, educational plaques and smaller sculptures honor the reef wildlife and the fishing culture of Alagoas.",
      items: [
        {
          era: "Contemporary",
          name: "Reef Plaque",
          description:
            "Explanatory panel about the formation of Maceió's coral reefs.",
          culture: "Promotes environmental education for visitors.",
        },
        {
          era: "Popular",
          name: "Fisherman Statue",
          description: "Sculpture honoring local fishing communities.",
          culture: "Reaffirms the caicara identity of the waterfront.",
        },
        {
          era: "Symbolic",
          name: "Zero Milestone",
          description: "Reference to measure distances and meetups at the beach.",
          culture: "Generational meeting point for Maceió families.",
        },
      ],
    },
    bestTime: {
      eyebrow: "Calendar",
      title: "Best Time to Visit",
      subtitle: "Maceió is sunny almost all year — but each season has its charm.",
      intro:
        "The climate is **tropical** and warm, with little temperature variation. The real secret is the time of day: come in the late afternoon for the sunset.",
      seasons: [
        {
          name: "September to March",
          description: "Dry season with clearer skies; ideal for photos and swimming.",
          tip: "Best overall period",
        },
        {
          name: "December to February",
          description: "High season, with more activity and waterfront events.",
          tip: "Nightlife and parties",
        },
        {
          name: "April to August",
          description: "Some quick rains, but fewer tourists and better prices.",
          tip: "More tranquility",
        },
      ],
    },
    visiting: {
      eyebrow: "In practice",
      title: "Visiting Tips",
      subtitle: "Everything you need to know before you go.",
      intro:
        "Visiting is **free** and access is open during the day. We gathered the essentials to enjoy it hassle-free.",
      paragraphs: [
        "Marco dos Corais sits on the Atalaia waterfront, one of the most structured areas of Maceió, with a bike lane, kiosks and parking.",
        "There is no ticket office or gate — you walk freely along the promenade and climb to the viewpoint whenever you want.",
      ],
      essentials: [
        {
          icon: "🕐",
          name: "Hours",
          description: "Open 24h; the viewpoint usually closes at night, but the promenade is free.",
        },
        {
          icon: "🎟️",
          name: "Ticket",
          description: "Free. No booking required.",
        },
        {
          icon: "🅿️",
          name: "Parking",
          description: "Free and paid parking around the waterfront.",
        },
      ],
      bring: [
        {
          icon: "📷",
          name: "Camera",
          description: "The sunset begs for photos — bring a charged phone or camera.",
        },
        {
          icon: "🧴",
          name: "Sunscreen",
          description: "Maceió's sun is strong all year; apply and reapply.",
        },
        {
          icon: "💧",
          name: "Water",
          description: "Stay hydrated, especially in the afternoon.",
        },
      ],
    },
    transportation: {
      eyebrow: "Arrival",
      title: "How to Get There",
      subtitle: "From the city to the landmark, the simplest way.",
      intro:
        "The Atalaia waterfront is central and well signposted. By car, you reach it in a few minutes from anywhere in Maceió.",
      options: [
        {
          icon: "✈️",
          title: "From the airport to the landmark",
          text: "Maceió Airport (MCZ) is about 25 km away; taxi, ride app or rental car cover the trip in 30–40 min.",
          content:
            "Maceió–Zumbi dos Palmares International Airport (MCZ) is about 25 km from the Atalaia waterfront. Taxi, ride app or a rental car cover the trip in 30–40 minutes depending on traffic.",
          steps: [
            "After landing, follow the exit signs to the ground-floor taxi stand (standard or executive taxi).",
            "In your app, set the destination to \"Marco dos Corais, Orla de Atalaia\"; the fare is roughly R$ 60–90.",
            "Take the AL-101 South highway toward the coast, keeping right and following signs for \"Atalaia\".",
            "Drive along Avenida Brigadeiro Eduardo Gomes until you see the Marco dos Corais sign and the waterfront on your left.",
            "Get off near the waterfront entrance, where parking and ride-app drop-off points are available.",
          ],
        },
        {
          icon: "🚗",
          title: "By car",
          text: "Follow Avenida Brigadeiro Eduardo Gomes to the Atalaia waterfront; signs point to Marco dos Corais.",
          content:
            "Follow Avenida Brigadeiro Eduardo Gomes to the Atalaia waterfront; signs point to Marco dos Corais. Parking nearby.",
          steps: [
            "From anywhere in Maceió, drive via the AL-101 or the coastal avenues toward the Atalaia waterfront.",
            "Enter Avenida Brigadeiro Eduardo Gomes and keep in the left lane near the beach.",
            "Watch for the tourist sign \"Marco dos Corais\" and park along the waterfront or in private lots.",
          ],
        },
        {
          icon: "🚕",
          title: "Ride app",
          text: "Uber and 99 operate in Maceió and drop you close to the waterfront entrance.",
          content:
            "Uber and 99 operate in Maceió and drop you close to the waterfront entrance. Great if you want to skip parking.",
          steps: [
            "Open Uber or 99 and set the destination to \"Marco dos Corais, Orla de Atalaia\".",
            "Confirm the ride and wait for your driver at the nearest pickup point.",
            "Ask to be dropped right at the waterfront entrance, skipping paid parking if you prefer to walk.",
          ],
        },
        {
          icon: "🚌",
          title: "Bus",
          text: "Municipal lines pass the Atalaia waterfront from downtown.",
          content:
            "Municipal lines pass the Atalaia waterfront from downtown. Buses 401 and 402 serve the area.",
          steps: [
            "At the downtown integration terminal, look for lines heading to the Atalaia waterfront.",
            "Board buses 401 or 402 and stay on until the final stop or near the landmark.",
            "Get off and walk a few minutes along the waterfront promenade to the Marco dos Corais.",
          ],
        },
        {
          icon: "🚶",
          title: "On foot / bike",
          text: "The waterfront bike lane connects the landmark to nearby beaches.",
          content:
            "The waterfront bike lane connects the landmark to nearby beaches. Flat, pleasant walk at dusk.",
          steps: [
            "Use the continuous Atalaia waterfront bike lane, which links the landmark to Pajuçara and Ponta Verde beaches.",
            "For walking, follow the seaside promenade on flat, well-lit ground.",
            "Enjoy the stroll at dusk, when the light is ideal for photos at the landmark.",
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Images",
      title: "Photo Gallery",
      subtitle: "A little of what awaits you on the Atalaia waterfront.",
      items: Array.from({ length: 22 }, (_, i) => ({
        src: `/gallery/${i + 1}.jpg`,
        caption: `Marco dos Corais ${i + 1}`,
        story: {
          lead: "Light, sea and concrete meet.",
          detail:
            "Every angle of the landmark tells a different story as the sun moves.",
        },
      })),
    },
    reviews: {
      eyebrow: "Voices",
      title: "What Visitors Say",
      subtitle: "Real reviews from people who have been there.",
      intro:
        "Thousands of visitors have passed through Marco dos Corais. Here is what they highlight.",
      items: [
        {
          name: "Mariana Souza",
          date: "March 2026",
          rating: 5,
          text: "We went late afternoon and the sunset was breathtaking. The view from the viewpoint is amazing!",
          source: "Google",
        },
        {
          name: "Carlos Mendes",
          date: "February 2026",
          rating: 5,
          text: "Quiet spot to walk and take photos. The night lighting makes everything magical.",
          source: "TripAdvisor",
        },
        {
          name: "Ana Lima",
          date: "January 2026",
          rating: 4,
          text: "Simple place, but very photogenic. Worth a quick stop if you're on the waterfront.",
          source: "Google",
        },
        {
          name: "João Pedro",
          date: "December 2025",
          rating: 5,
          text: "Took my parents and they loved it. Easy access and privileged sea view.",
          source: "Google",
        },
        {
          name: "Beatriz Rocha",
          date: "November 2025",
          rating: 5,
          text: "Best place for sunset in Maceió, in my opinion. I'll definitely be back!",
          source: "TripAdvisor",
        },
        {
          name: "Rafael Alves",
          date: "October 2025",
          rating: 4,
          text: "Good structure, well integrated with the waterfront. Just lacked a bit more signage.",
          source: "Google",
        },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know before visiting.",
      items: [
        {
          question: "Is there an entrance fee?",
          answer: "No. Visiting is free and access to the promenade is open.",
        },
        {
          question: "What is the best time to go?",
          answer: "Late afternoon, for the sunset. The sky is spectacular almost every day.",
        },
        {
          question: "Is there parking?",
          answer: "Yes, free and paid parking around the Atalaia waterfront.",
        },
        {
          question: "Is the viewpoint accessible?",
          answer: "The base is flat and accessible; the climb to the upper deck is via a spiral staircase.",
        },
        {
          question: "Can I get there by public transport?",
          answer: "Yes. Municipal buses pass the Atalaia waterfront from downtown.",
        },
        {
          question: "Is it safe at night?",
          answer: "The waterfront is busy and lit, but as in any city, avoid valuables and prefer busy hours.",
        },
      ],
    },
    location: {
      eyebrow: "On the map",
      title: "Location & Contact",
      subtitle: "Find Marco dos Corais on the Atalaia waterfront.",
      intro:
        "The landmark is on the **Atalaia waterfront**, Maceió — AL. Use the map below to plan your route.",
      address: "88M3+JC, Maceió - AL",
      openMaps: "Open in Google Maps",
      contact: {
        phone: "+55 82 3312-0000",
        note: "Tourism info: Maceió Tourism Secretariat",
      },
      tips: [
        "Arrive 30 min before sunset to get a spot on the viewpoint.",
        "Pair the visit with a coffee on the waterfront.",
        "Wear comfortable shoes to walk the promenade.",
      ],
    },
    footer: {
      about:
        "An independent guide to Marco dos Corais, the postcard of the Atalaia waterfront in Maceió. Made for those who want to know the best of the Alagoas coast.",
      exploreTitle: "Explore",
      legalTitle: "Legal",
      contactTitle: "Contact",
      rights: `© ${new Date().getFullYear()} Marco dos Corais. All rights reserved.`,
      builtWith: "Built with Astro + Tailwind CSS",
      social: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Facebook", href: "https://facebook.com" },
        { label: "YouTube", href: "https://youtube.com" },
      ],
      legal: [
        { label: "Privacy", href: "/en/privacy" },
        { label: "Terms", href: "/en/terms" },
        { label: "Cookies", href: "/en/cookies" },
      ],
      guidesTitle: "Maceió Guides",
    },
  },

  zh: {
    site: {
      shortName: "Marco dos Corais",
      legalName: "Marco dos Corais",
      tagline: "马塞约 Ponta Verde（庞塔韦尔德）滨海大道的明信片地标",
    },
    meta: {
      metaTitle: "马塞约 Marco dos Corais：Ponta Verde、日落与参观指南",
      metaDescription:
        "了解位于马塞约 Ponta Verde 滨海大道的 Marco dos Corais。如何到达、最佳游览时间、日落、照片、贴士与周边景点。",
    },
    nav: [
      { id: "history", label: "历史" },
      { id: "architecture", label: "建筑" },
      { id: "monuments", label: "纪念碑" },
      { id: "best-time", label: "最佳季节" },
      { id: "visiting", label: "游览" },
      { id: "transport", label: "交通" },
      { id: "gallery", label: "图集" },
      { id: "reviews", label: "评价" },
      { id: "faq", label: "常见问题" },
      { id: "location", label: "位置" },
    ],
    hero: {
      eyebrow: "Ponta Verde · 马塞约 · 阿拉戈斯州 · 巴西",
      title: "马塞约的 Marco dos Corais",
      subtitle:
        "位于阿塔拉亚滨海大道的混凝土与玻璃地标，是城市与大海交汇之处。正对珊瑚礁、坐拥马塞约最上镜的日落。",
      primaryCta: { label: "如何到达", href: "#location" },
      secondaryCta: { label: "查看图集", href: "#gallery" },
      stats: [
        { num: "4.7", label: "平均评分" },
        { num: "23,374", label: "评价数" },
        { num: "24小时", label: "免费开放" },
      ],
    },
    history: {
      eyebrow: "根源",
      title: "Marco dos Corais 的历史",
      subtitle: "从渔家小聚到必拍打卡：一个地标如何成为马塞约的象征。",
      intro:
        "**Marco dos Corais** 起初是**阿塔拉亚滨海大道**前往天然礁石的小船补给点。随着时间推移，它加上了灯光与观景台，成了当地人和游客看海的明信片。",
      highlights: [
        {
          icon: "🧭",
          title: "地标参照",
          text: "早在社交媒体出现前，这里就是海滩上约朋友碰头的首选地。",
        },
        {
          icon: "🌅",
          title: "知名日落",
          text: "180° 开阔海平线，天空几乎每天都会染成粉橘色。",
        },
        {
          icon: "📸",
          title: "明信片",
          text: "旅游指南中马塞约被拍得最多的景点之一。",
        },
      ],
      timeline: [
        {
          year: "1990 年代",
          title: "原始结构",
          text: "阿塔拉亚滨海大道竖起第一座混凝土标志，作为视觉航标。",
        },
        {
          year: "2000 年代",
          title: "翻新",
          text: "增加了景观灯光与向公众开放的观景平台。",
        },
        {
          year: "2010 年代",
          title: "数字地标",
          text: "成为网红与旅行内容的聚集地。",
        },
        {
          year: "如今",
          title: "情感地标",
          text: "被视为马塞约身份认同的鲜活象征之一。",
        },
      ],
      localLife: [
        {
          title: "真实生活广场",
          text: "卖椰子的、沿海慢跑的、一家人共享同一条步道。",
        },
        {
          title: "滨海活动",
          text: "周末地标附近常有文化演出与集市。",
        },
      ],
    },
    architecture: {
      eyebrow: "形态",
      title: "建筑与结构",
      subtitle: "干净的线条、玻璃与混凝土，只为框住大海。",
      intro:
        "现有结构结合了**清水混凝土**与**玻璃幕墙**，倒映天空。螺旋楼梯通往上层观景台，可俯瞰整条阿塔拉亚滨海大道。",
      elements: [
        {
          icon: "🏛️",
          title: "观景塔",
          text: "竖向塔体，顶部为全景拍照平台。",
        },
        {
          icon: "🪟",
          title: "玻璃幕墙",
          text: "映出地平线，减轻结构的体量感。",
        },
        {
          icon: "🌿",
          title: "与滨海融合",
          text: "连续步道把地标与周边海滩连成一体。",
        },
        {
          icon: "💡",
          title: "景观灯光",
          text: "LED 灯在日落后勾勒出轮廓。",
        },
      ],
    },
    monuments: {
      eyebrow: "记忆",
      title: "纪念碑与参照",
      subtitle: "讲述城海边界故事的铭牌与标志。",
      intro:
        "主地标周围，教育铭牌与小雕塑致敬阿拉戈斯州的礁石生态与渔家文化。",
      items: [
        {
          era: "当代",
          name: "礁石铭牌",
          description: "介绍马塞约珊瑚礁形成的说明牌。",
          culture: "向游客普及环境教育。",
        },
        {
          era: "民间",
          name: "渔夫雕像",
          description: "致敬当地渔家社区的作品。",
          culture: "重申滨海的渔家身份。",
        },
        {
          era: "象征",
          name: "零点标志",
          description: "丈量距离与海滩约会的参照点。",
          culture: "马塞约家庭世代相约之地。",
        },
      ],
    },
    bestTime: {
      eyebrow: "日历",
      title: "最佳游览季节",
      subtitle: "马塞约几乎全年有阳光——但每季各有韵味。",
      intro:
        "气候**热带**温暖，温差很小。真正的秘诀在一天中的时段：傍晚来看日落。",
      seasons: [
        {
          name: "9 月至 3 月",
          description: "旱季、天空更洁净，最适合拍照与下海。",
          tip: "综合最佳",
        },
        {
          name: "12 月至 2 月",
          description: "旺季，活动与滨海演出更多。",
          tip: "夜生活与派对",
        },
        {
          name: "4 月至 8 月",
          description: "偶有短暂阵雨，但游客更少、价格更优。",
          tip: "更清静",
        },
      ],
    },
    visiting: {
      eyebrow: "实用",
      title: "游览贴士",
      subtitle: "出发前你需要知道的一切。",
      intro:
        "游览**免费**，白天自由进入。我们整理了轻松玩转的要点。",
      paragraphs: [
        "Marco dos Corais 位于阿塔拉亚滨海大道，是马塞约设施最完善的地段之一，设有自行车道、小吃亭与停车场。",
        "没有售票处也没有围栏——你可自由漫步步道，随时登上观景台。",
      ],
      essentials: [
        {
          icon: "🕐",
          name: "时间",
          description: "24 小时开放；观景台夜间通常关闭，但步道自由通行。",
        },
        {
          icon: "🎟️",
          name: "门票",
          description: "免费，无需预约。",
        },
        {
          icon: "🅿️",
          name: "停车",
          description: "滨海周边有免费与收费停车。",
        },
      ],
      bring: [
        {
          icon: "📷",
          name: "相机",
          description: "日落很出片——带好充满电的手机或相机。",
        },
        {
          icon: "🧴",
          name: "防晒",
          description: "马塞约阳光常年强烈，记得涂抹补涂。",
        },
        {
          icon: "💧",
          name: "饮水",
          description: "保持水分，尤其下午。",
        },
      ],
    },
    transportation: {
      eyebrow: "抵达",
      title: "如何到达",
      subtitle: "从市区到地标，最简单的方式。",
      intro:
        "阿塔拉亚滨海大道位于市中心、指示清晰。开车从马塞约任何位置几分钟即达。",
      options: [
        {
          icon: "✈️",
          title: "从机场到景点",
          text: "马塞约机场（MCZ）约 25 公里；出租车、网约车或租车约 30–40 分钟可达。",
          content:
            "马塞约－尊比·多斯·帕尔马雷斯国际机场（MCZ）距阿塔拉亚滨海大道约 25 公里。出租车、网约车或租车在 30–40 分钟内可达，视交通而定。",
          steps: [
            "落地后跟随出口指示到一层出租车站（普通或商务出租车）。",
            "在 App 中将目的地设为「Marco dos Corais，Orla de Atalaia」；车费约 60–90 雷亚尔。",
            "走 AL-101 南向公路前往海岸，靠右行驶并跟随「Atalaia」路牌。",
            "沿爱德华多·戈麦斯准将大道行驶，直到看到 Marco dos Corais 标志与左侧滨海大道。",
            "在滨海入口附近下车，周边有停车场与网约车落客点。",
          ],
        },
        {
          icon: "🚗",
          title: "自驾",
          text: "沿爱德华多·戈麦斯准将大道至阿塔拉亚滨海大道，有标志指向 Marco dos Corais。",
          content:
            "沿爱德华多·戈麦斯准将大道至阿塔拉亚滨海大道，有标志指向 Marco dos Corais。周边可停车。",
          steps: [
            "从马塞约任意位置沿 AL-101 或滨海大道驶向阿塔拉亚滨海大道。",
            "进入爱德华多·戈麦斯准将大道，靠近海滩时保持在左侧车道。",
            "留意「Marco dos Corais」旅游标志，停在滨海路边或私营停车场。",
          ],
        },
        {
          icon: "🚕",
          title: "网约车",
          text: "Uber 与 99 在马塞约运营，可就近停在滨海入口。",
          content:
            "Uber 与 99 在马塞约运营，可就近停在滨海入口。想省去停车很合适。",
          steps: [
            "打开 Uber 或 99，将目的地设为「Marco dos Corais，Orla de Atalaia」。",
            "确认订单后在最近的上车点等候司机。",
            "请司机在滨海入口处落客，若不打算开车可省去付费停车。",
          ],
        },
        {
          icon: "🚌",
          title: "公交",
          text: "从市中心出发的市政线路经过阿塔拉亚滨海大道。",
          content:
            "从市中心出发的市政线路经过阿塔拉亚滨海大道。401 与 402 路覆盖该区域。",
          steps: [
            "在市中心换乘枢纽寻找前往阿塔拉亚滨海大道的线路。",
            "乘坐 401 或 402 路，一直坐到终点站或靠近地标处。",
            "下车后沿滨海步道步行几分钟即可看到 Marco dos Corais。",
          ],
        },
        {
          icon: "🚶",
          title: "步行 / 骑行",
          text: "滨海自行车道把地标与周边海滩相连。",
          content:
            "滨海自行车道把地标与周边海滩相连。黄昏时平坦惬意。",
          steps: [
            "使用贯穿阿塔拉亚滨海大道的自行车道，可把地标与 Pajuçara、Ponta Verde 等海滩相连。",
            "步行可沿平坦、照明良好的滨海步道前行。",
            "黄昏时分漫步最佳，此时光线最适合在地标拍照。",
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "影像",
      title: "照片图集",
      subtitle: "阿塔拉亚滨海大道等你发现的一角。",
      items: Array.from({ length: 22 }, (_, i) => ({
        src: `/gallery/${i + 1}.jpg`,
        caption: `Marco dos Corais ${i + 1}`,
        story: {
          lead: "光、海与混凝土在此相遇。",
          detail: "随着太阳移动，地标的每个角度都讲述不同的故事。",
        },
      })),
    },
    reviews: {
      eyebrow: "声音",
      title: "游客怎么说",
      subtitle: "来自亲历者的真实评价。",
      intro: "数千名游客到访过 Marco dos Corais。看看他们最赞赏什么。",
      items: [
        {
          name: "Mariana Souza",
          date: "2026 年 3 月",
          rating: 5,
          text: "我们傍晚去的，日落美得让人屏息。观景台的视野太惊艳了！",
          source: "Google",
        },
        {
          name: "Carlos Mendes",
          date: "2026 年 2 月",
          rating: 5,
          text: "安静的好去处，适合散步拍照。夜晚灯光让一切都很梦幻。",
          source: "TripAdvisor",
        },
        {
          name: "Ana Lima",
          date: "2026 年 1 月",
          rating: 4,
          text: "地方简单，但很上镜。在滨海路过顺手停一下很值。",
          source: "Google",
        },
        {
          name: "João Pedro",
          date: "2025 年 12 月",
          rating: 5,
          text: "带父母去的，他们超喜欢。易到达、海景绝佳。",
          source: "Google",
        },
        {
          name: "Beatriz Rocha",
          date: "2025 年 11 月",
          rating: 5,
          text: "在我看来是马塞约看日落最好的地方。一定会再来！",
          source: "TripAdvisor",
        },
        {
          name: "Rafael Alves",
          date: "2025 年 10 月",
          rating: 4,
          text: "设施不错，与滨海融合得好。只是标识还能再多一些。",
          source: "Google",
        },
      ],
    },
    faq: {
      eyebrow: "疑问",
      title: "常见问题",
      subtitle: "参观前你需要知道的一切。",
      items: [
        {
          question: "需要门票吗？",
          answer: "不需要。游览免费，步道自由通行。",
        },
        {
          question: "什么时间最好去？",
          answer: "傍晚上去看日落。天空几乎每天都很壮观。",
        },
        {
          question: "有停车场吗？",
          answer: "有，阿塔拉亚滨海周边有免费与收费停车。",
        },
        {
          question: "观景台无障碍吗？",
          answer: "底层平坦无障碍；上到顶层平台需走螺旋楼梯。",
        },
        {
          question: "能坐公共交通到吗？",
          answer: "能。从市中心出发的市政公交经过阿塔拉亚滨海大道。",
        },
        {
          question: "晚上安全吗？",
          answer: "滨海人流多、有灯光，但和任何城市一样，避免贵重物品、尽量选热闹时段。",
        },
      ],
    },
    location: {
      eyebrow: "地图中",
      title: "位置与联系",
      subtitle: "在阿塔拉亚滨海大道找到 Marco dos Corais。",
      intro: "地标位于**阿塔拉亚滨海大道**，马塞约 — 阿拉戈斯州。用地图规划路线。",
      address: "88M3+JC, Maceió - AL",
      openMaps: "在 Google 地图打开",
      contact: {
        phone: "+55 82 3312-0000",
        note: "旅游信息：马塞约旅游局",
      },
      tips: [
        "日落前 30 分钟到达，抢占观景台位置。",
        "顺路在滨海喝杯咖啡。",
        "穿舒适鞋步行步道。",
      ],
    },
    footer: {
      about:
        "Marco dos Corais 的独立指南，马塞约阿塔拉亚滨海大道的明信片。为想认识阿拉戈斯海岸之美的人而做。",
      exploreTitle: "探索",
      legalTitle: "法律",
      contactTitle: "联系",
      rights: `© ${new Date().getFullYear()} Marco dos Corais. 版权所有。`,
      builtWith: "使用 Astro + Tailwind CSS 构建",
      social: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Facebook", href: "https://facebook.com" },
        { label: "YouTube", href: "https://youtube.com" },
      ],
      legal: [
        { label: "隐私", href: "/zh/privacy" },
        { label: "条款", href: "/zh/terms" },
        { label: "Cookie", href: "/zh/cookies" },
      ],
      guidesTitle: "马塞约指南",
    },
  },
};

  es: {
    site: {
      shortName: "Marco dos Corais",
      legalName: "Marco dos Corais",
      tagline: "El postal de la orilla de Ponta Verde, Maceió",
    },
    meta: {
      metaTitle:
        "Marco dos Corais en Maceió: Ponta Verde, Puesta de Sol y Cómo Visitar",
      metaDescription:
        "Conoce el Marco dos Corais, en la orilla de Ponta Verde en Maceió. Cómo llegar, mejor horario para visitar, puesta de sol, fotos, consejos y atracciones cercanas.",
    },
    guides: [
      { label: "Qué hacer en Maceió", href: "/es/o-que-fazer-em-maceio" },
      {
        label: "Lugares para conocer en Maceió",
        href: "/es/lugares-para-visitar-em-maceio",
      },
    ],
    nav: [
      { id: "history", label: "Historia" },
      { id: "architecture", label: "Arquitectura" },
      { id: "monuments", label: "Monumentos" },
      { id: "best-time", label: "Mejor Época" },
      { id: "visiting", label: "Visita" },
      { id: "transport", label: "Transporte" },
      { id: "gallery", label: "Galería" },
      { id: "reviews", label: "Opiniones" },
      { id: "faq", label: "Preguntas" },
      { id: "location", label: "Ubicación" },
    ],
    hero: {
      eyebrow: "Ponta Verde · Maceió · Alagoas · Brasil",
      title: "Marco dos Corais en Maceió",
      subtitle:
        "El hito de concreto y vidrio donde la ciudad se encuentra con el mar, en la orilla de Ponta Verde. Un mirador frente a los arrecifes de coral y la puesta de sol más fotografiada de Maceió.",
      primaryCta: { label: "Cómo llegar", href: "#location" },
      secondaryCta: { label: "Ver galería", href: "#gallery" },
      stats: [
        { num: "4.9", label: "Valoración media" },
        { num: "15.670", label: "Opiniones" },
        { num: "24h", label: "Acceso libre" },
      ],
    },
    history: {
      eyebrow: "Raíces",
      title: "Historia del Marco dos Corais",
      subtitle:
        "De la pesca local a la selfie obligatoria: cómo un punto de referencia se volvió símbolo de Maceió.",
      intro:
        "El **Marco dos Corais** nació como un punto de apoyo para las embarcaciones que salían de la **orilla de Ponta Verde** hacia los arrecifes naturales. Con el tiempo ganó iluminación, un mirador y se convirtió en el postal donde locales y turistas se reúnen para mirar el mar.",
      highlights: [
        {
          icon: "🧭",
          title: "Punto de referencia",
          text: "Antes de las redes sociales, ya era el lugar convenido para encontrar amigos en la playa.",
        },
        {
          icon: "🌅",
          title: "Puesta de sol famosa",
          text: "Apertura de 180° al horizonte; el cielo se vuelve rosa y naranja casi todos los días.",
        },
        {
          icon: "📸",
          title: "Postal",
          text: "Entre los lugares más fotografiados de Maceió en las guías de viaje.",
        },
      ],
      timeline: [
        {
          year: "Década de 1990",
          title: "Estructura original",
          text: "Primer marcador de concreto instalado en la orilla de Ponta Verde como guía visual.",
        },
        {
          year: "Años 2000",
          title: "Renovación",
          text: "Ganó iluminación escénica y una plataforma de observación pública.",
        },
        {
          year: "Años 2010",
          title: "Ícono digital",
          text: "Se volvió punto de encuentro para influencers y contenido de viaje.",
        },
        {
          year: "Hoy",
          title: "Patrimonio afectivo",
          text: "Considerado uno de los símbolos vivos de la identidad de Maceió.",
        },
      ],
      localLife: [
        {
          title: "Plaza de la vida real",
          text: "Vendedores de coco, corredores de la orilla y familias comparten el mismo paseo.",
        },
        {
          title: "Eventos en la orilla",
          text: "Espectáculos culturales y ferias ocurren cerca del hito los fines de semana.",
        },
      ],
    },
    architecture: {
      eyebrow: "Forma",
      title: "Arquitectura y Estructura",
      subtitle: "Líneas limpias, vidrio y concreto pensados para enmarcar el mar.",
      intro:
        "La estructura actual combina **concreto visto** y **paneles de vidrio** que reflejan el cielo. Una escalera de caracol lleva al mirador superior, desde donde se ve toda la orilla de Ponta Verde.",
      elements: [
        {
          icon: "🏛️",
          title: "Torre de observación",
          text: "Cuerpo vertical con plataforma superior para fotos panorámicas.",
        },
        {
          icon: "🪟",
          title: "Paneles de vidrio",
          text: "Reflejan el horizonte y reducen el peso visual de la estructura.",
        },
        {
          icon: "🌿",
          title: "Integración con la orilla",
          text: "Paseo continuo que une el hito con las playas vecinas.",
        },
        {
          icon: "💡",
          title: "Iluminación escénica",
          text: "Luces LED resaltan la silueta tras la puesta de sol.",
        },
      ],
    },
    monuments: {
      eyebrow: "Memoria",
      title: "Monumentos y Referencias",
      subtitle: "Placas y marcadores que cuentan la historia de la frontera entre ciudad y mar.",
      intro:
        "Alrededor del hito principal, placas educativas y esculturas menores homenajean la fauna de los arrecifes y la cultura pesquera de Alagoas.",
      items: [
        {
          era: "Contemporáneo",
          name: "Placa de los Arrecifes",
          description:
            "Panel explicativo sobre la formación de los arrecifes de coral de Maceió.",
          culture: "Valora la educación ambiental para los visitantes.",
        },
        {
          era: "Popular",
          name: "Estatua del Pescador",
          description: "Escultura que homenajea a las comunidades pesqueras locales.",
          culture: "Reafirma la identidad costera de la orilla.",
        },
        {
          era: "Simbólico",
          name: "Hito Cero",
          description: "Referencia para medir distancias y encuentros en la playa.",
          culture: "Punto de encuentro generacional de las familias de Maceió.",
        },
      ],
    },
    bestTime: {
      eyebrow: "Calendario",
      title: "Mejor Época para Visitar",
      subtitle: "Maceió tiene sol casi todo el año, pero cada estación tiene su encanto.",
      intro:
        "El clima es **tropical** y cálido, con poca variación de temperatura. El gran secreto es la hora del día: ven al final de la tarde para la puesta de sol.",
      seasons: [
        {
          name: "Septiembre a marzo",
          description: "Estación seca y cielo más limpio; ideal para fotos y baño de mar.",
          tip: "Mejor periodo general",
        },
        {
          name: "Diciembre a febrero",
          description: "Temporada alta, con más movimiento y eventos en la orilla.",
          tip: "Vida nocturna y fiestas",
        },
        {
          name: "Abril a agosto",
          description: "Algunas lluvias rápidas, pero menos turistas y mejores precios.",
          tip: "Más tranquilidad",
        },
      ],
    },
    visiting: {
      eyebrow: "En la práctica",
      title: "Consejos de Visita",
      subtitle: "Todo lo que necesitas saber antes de ir.",
      intro:
        "La visita es **gratuita** y el acceso es libre durante el día. Reunimos lo esencial para disfrutarlo sin complicaciones.",
      paragraphs: [
        "El Marco dos Corais está en la orilla de Ponta Verde, una de las zonas mejor equipadas de Maceió, con ciclovía, quioscos y estacionamiento.",
        "No hay boletería ni reja: caminas libremente por el paseo y subes al mirador cuando quieras.",
      ],
      essentials: [
        {
          icon: "🕐",
          name: "Horario",
          description: "Abierto 24 h; el mirador suele cerrar de noche, pero el paseo es libre.",
        },
        {
          icon: "🎟️",
          name: "Entrada",
          description: "Gratis. No se requiere reserva.",
        },
        {
          icon: "🅿️",
          name: "Estacionamiento",
          description: "Estacionamiento gratuito y de pago cerca de la orilla.",
        },
      ],
      bring: [
        {
          icon: "📷",
          name: "Cámara",
          description: "La puesta de sol pide fotos: lleva el móvil o cámara cargados.",
        },
        {
          icon: "🧴",
          name: "Protector solar",
          description: "El sol de Maceió es fuerte todo el año; aplícalo y reaplica.",
        },
        {
          icon: "💧",
          name: "Agua",
          description: "Mantente hidratado, especialmente por la tarde.",
        },
      ],
    },
    transportation: {
      eyebrow: "Llegada",
      title: "Cómo Llegar",
      subtitle: "De la ciudad al hito, de la forma más simple.",
      intro:
        "La orilla de Ponta Verde es céntrica y está bien señalizada. En coche llegas en pocos minutos desde cualquier punto de Maceió.",
      options: [
        {
          icon: "✈️",
          title: "Del aeropuerto al hito",
          text: "El Aeropuerto de Maceió (MCZ) queda a unos 25 km; taxi, app o alquiler cubren el trayecto en 30–40 min.",
          content:
            "El Aeropuerto Internacional de Maceió – Zumbi dos Palmares (MCZ) queda a unos 25 km de la orilla de Ponta Verde. Taxi, app de transporte o coche alquilado cubren el trayecto en 30–40 minutos según el tráfico.",
          steps: [
            "Al desembarcar, sigue la señalización hasta la parada de taxis en planta baja.",
            "En la app, pon como destino \"Marco dos Corais, Orla de Ponta Verde\"; la carrera cuesta unos 60–90 BRL.",
            "Toma la carretera AL-101 Sur hacia la costa, manteniéndote a la derecha hacia \"Ponta Verde\".",
            "Recorre la Avenida Brigadeiro Eduardo Gomes hasta ver el letrero del Marco dos Corais y la orilla a la izquierda.",
            "Baja cerca de la entrada de la orilla, donde hay estacionamiento y puntos de app.",
          ],
        },
        {
          icon: "🚗",
          title: "En coche",
          text: "Sigue la Avenida Brigadeiro Eduardo Gomes hasta la orilla de Ponta Verde; hay señales para el Marco dos Corais.",
          content:
            "Sigue la Avenida Brigadeiro Eduardo Gomes hasta la orilla de Ponta Verde; hay señales para el Marco dos Corais. Estacionamiento cerca.",
          steps: [
            "Desde cualquier punto de Maceió, conduce por la AL-101 o las avenidas costeras hacia la orilla de Ponta Verde.",
            "Entra en la Avenida Brigadeiro Eduardo Gomes y mantente en el carril izquierdo cerca de la playa.",
            "Busca el letrero turístico \"Marco dos Corais\" y estaciona en la orilla o en cocheras privadas.",
          ],
        },
        {
          icon: "🚕",
          title: "App de transporte",
          text: "Uber y 99 operan en Maceió y dejan muy cerca de la entrada de la orilla.",
          content:
            "Uber y 99 operan en Maceió y dejan muy cerca de la entrada de la orilla. Ideal si quieres evitar el estacionamiento.",
          steps: [
            "Abre Uber o 99 y pon como destino \"Marco dos Corais, Orla de Ponta Verde\".",
            "Confirma el viaje y espera al conductor en el punto de recogida más cercano.",
            "Pide bajar justo en la entrada de la orilla, evitando el estacionamiento de pago si prefieres caminar.",
          ],
        },
        {
          icon: "🚌",
          title: "Autobús",
          text: "Líneas municipales pasan por la orilla de Ponta Verde desde el centro.",
          content:
            "Líneas municipales pasan por la orilla de Ponta Verde desde el centro. Los autobuses 401 y 402 sirven la zona.",
          steps: [
            "En la terminal de integración del centro, busca las líneas hacia la orilla de Ponta Verde.",
            "Sube a los autobuses 401 o 402 y quédate hasta la parada final o cerca del hito.",
            "Baja y camina unos minutos por el paseo de la orilla hasta avistar el Marco dos Corais.",
          ],
        },
        {
          icon: "🚶",
          title: "A pie / en bici",
          text: "La ciclovía de la orilla conecta el hito con playas vecinas.",
          content:
            "La ciclovía de la orilla conecta el hito con playas vecinas. Paseo plano y agradable al atardecer.",
          steps: [
            "Usa la ciclovía continua de la orilla de Ponta Verde, que une el hito con playas como Pajuçara y Ponta Verde.",
            "Para caminar, sigue el paseo junto al mar en terreno plano y bien iluminado.",
            "Disfruta el paseo al atardecer, cuando la luz es ideal para fotos en el hito.",
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Imágenes",
      title: "Galería de Fotos",
      subtitle: "Un pedacito de lo que te espera en la orilla de Ponta Verde.",
      items: Array.from({ length: 22 }, (_, i) => ({
        src: `/gallery/${i + 1}.jpg`,
        caption: `Marco dos Corais ${i + 1}`,
        story: {
          lead: "Luz, mar y concreto se encuentran.",
          detail:
            "Cada ángulo del hito cuenta una historia diferente según se mueve el sol.",
        },
      })),
    },
    reviews: {
      eyebrow: "Voces",
      title: "Lo que dicen los visitantes",
      subtitle: "Opiniones reales de quienes estuvieron allí.",
      intro:
        "Miles de visitantes han pasado por el Marco dos Corais. Mira lo que destacan.",
      items: [
        {
          name: "Mariana Souza",
          date: "Marzo de 2026",
          rating: 5,
          text: "Fuimos al final de la tarde y la puesta de sol quitaba el aliento. ¡La vista desde el mirador es increíble!",
          source: "Google",
        },
        {
          name: "Carlos Mendes",
          date: "Febrero de 2026",
          rating: 5,
          text: "Lugar tranquilo para caminar y sacar fotos. La iluminación nocturna lo hace mágico.",
          source: "TripAdvisor",
        },
        {
          name: "Ana Lima",
          date: "Enero de 2026",
          rating: 4,
          text: "Lugar simple, pero muy fotogénico. Vale la parada rápida si estás en la orilla.",
          source: "Google",
        },
        {
          name: "João Pedro",
          date: "Diciembre de 2025",
          rating: 5,
          text: "Llevé a mis padres y les encantó. Fácil acceso y vista privilegiada del mar.",
          source: "Google",
        },
        {
          name: "Beatriz Rocha",
          date: "Noviembre de 2025",
          rating: 5,
          text: "El mejor lugar para la puesta de sol en Maceió, en mi opinión. ¡Volveré sin duda!",
          source: "TripAdvisor",
        },
        {
          name: "Rafael Alves",
          date: "Octubre de 2025",
          rating: 4,
          text: "Buena estructura, bien integrada con la orilla. Solo faltó un poco más de señalización.",
          source: "Google",
        },
      ],
    },
    faq: {
      eyebrow: "Dudas",
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber antes de visitar.",
      items: [
        {
          question: "¿Se paga entrada?",
          answer: "No. La visita es gratuita y el acceso al paseo es libre.",
        },
        {
          question: "¿Cuál es el mejor horario para ir?",
          answer: "Al final de la tarde, por la puesta de sol. El cielo es espectacular casi todos los días.",
        },
        {
          question: "¿Hay estacionamiento?",
          answer: "Sí, estacionamiento gratuito y de pago cerca de la orilla de Ponta Verde.",
        },
        {
          question: "¿El mirador es accesible?",
          answer: "La base es plana y accesible; la subida a la plataforma superior es por escalera de caracol.",
        },
        {
          question: "¿Se puede llegar en transporte público?",
          answer: "Sí. Autobuses municipales pasan por la orilla de Ponta Verde desde el centro.",
        },
        {
          question: "¿Es seguro de noche?",
          answer: "La orilla tiene movimiento e iluminación, pero como en cualquier ciudad, evita objetos de valor y prefiere horas concurridas.",
        },
      ],
    },
    location: {
      eyebrow: "En el mapa",
      title: "Ubicación y Contacto",
      subtitle: "Encuentra el Marco dos Corais en la orilla de Ponta Verde.",
      intro:
        "El hito está en la **orilla de Ponta Verde**, Maceió — AL. Usa el mapa para trazar tu ruta.",
      address: "88M3+JC, Maceió - AL",
      openMaps: "Abrir en Google Maps",
      contact: {
        phone: "+55 82 3312-0000",
        note: "Información turística: Secretaría de Turismo de Maceió",
      },
      tips: [
        "Llega 30 min antes de la puesta de sol para asegurar lugar en el mirador.",
        "Combina la visita con un café en la orilla.",
        "Usa calzado cómodo para caminar por el paseo.",
      ],
    },
    footer: {
      about:
        "Guía independiente del Marco dos Corais, el postal de la orilla de Ponta Verde en Maceió. Hecha para quien quiere conocer lo mejor de la costa de Alagoas.",
      exploreTitle: "Explorar",
      legalTitle: "Legal",
      contactTitle: "Contacto",
      rights: `© ${new Date().getFullYear()} Marco dos Corais. Todos los derechos reservados.`,
      builtWith: "Construido con Astro + Tailwind CSS",
      social: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Facebook", href: "https://facebook.com" },
        { label: "YouTube", href: "https://youtube.com" },
      ],
      legal: [
        { label: "Privacidad", href: "/es/privacy" },
        { label: "Términos", href: "/es/terms" },
        { label: "Cookies", href: "/es/cookies" },
      ],
      guidesTitle: "Guías de Maceió",
    },
  },
};

// 便捷取值
export function getTranslation(lang: Lang): Translation {
  return translations[lang];
}
