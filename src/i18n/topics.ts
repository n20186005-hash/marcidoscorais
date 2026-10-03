import type { Lang } from "../config";

export type TopicSlug =
  | "pontos-turisticos-maceio"
  | "o-que-fazer-em-maceio"
  | "por-do-sol-marco-dos-corais"
  | "ponta-verde"
  | "lugares-para-conhecer-em-maceio"
  | "praias-de-maceio";

export type TopicBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export type TopicSection = {
  id: string;
  title: string;
  blocks: TopicBlock[];
};

export type TopicContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: TopicSection[];
  faq: { question: string; answer: string }[];
  related: TopicSlug[];
};

export const topics: Record<
  Lang,
  Partial<Record<TopicSlug, TopicContent>>
> = {
  pt: {
    "pontos-turisticos-maceio": {
      metaTitle: "Pontos Turísticos de Maceió: O que Visitar na Cidade",
      metaDescription:
        "Guia dos principais pontos turísticos de Maceió: orla de Ponta Verde, Marco dos Corais, Pajuçara, Jaraguá, praias urbanas e muito mais.",
      eyebrow: "Guias de Maceió",
      title: "Pontos Turísticos de Maceió",
      intro:
        "Maceió é a capital de Alagoas e une mar de águas verdes, recifes de coral e um centro histórico cheio de charme. Reunimos os pontos turísticos que valem a visita — do mais famoso cartão-postal ao centro cultural de Jaraguá.",
      sections: [
        {
          id: "ponta-verde",
          title: "Orla de Ponta Verde e o Marco dos Corais",
          blocks: [
            {
              type: "p",
              text: "A Orla de Ponta Verde é o coração de Maceió. É lá que fica o Marco dos Corais, o mirante de concreto e vidro que virou símbolo da cidade e o ponto de encontro para o pôr do sol.",
            },
            {
              type: "p",
              text: "O calçadão contínuo liga Ponta Verde a Pajuçara, com quiosques, ciclovia e vista aberta para os recifes.",
            },
          ],
        },
        {
          id: "pajucara",
          title: "Pajuçara e o Passeio de Jangada",
          blocks: [
            {
              type: "p",
              text: "Na vizinha Pajuçara, as jangadas levam visitantes até as piscinas naturais formadas pelos recifes na maré baixa.",
            },
            {
              type: "list",
              items: [
                "Saídas pela manhã, na baixa-mar, em frente à praia de Pajuçara.",
                "É comum avistar peixes e águas translucentes nas piscinas naturais.",
                "Combine com um café na orla antes ou depois do passeio.",
              ],
            },
          ],
        },
        {
          id: "jaragua",
          title: "Centro Histórico de Jaraguá",
          blocks: [
            {
              type: "p",
              text: "Jaraguá foi o primiero bairro de Maceió e hoje abriga casarões coloniais, o Museu da Imagem e do Som e a vida noturna ao redor da Praça Bompart.",
            },
            {
              type: "callout",
              text: "À noite, Jaraguá é ponto de encontro para quem busca forró, restaurantes e cachaçarias tradicionais.",
            },
          ],
        },
        {
          id: "mirante",
          title: "Mirante e Vista da Cidade",
          blocks: [
            {
              type: "p",
              text: "De Ponta Verde e da própria estrutura do Marco dos Corais é possível ver boa parte da orla. Para uma vista mais ampla, o Mirante do Jaraguá panorâmico vale a parada.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "Quais são os pontos turísticos mais famosos de Maceió?",
          answer:
            "O Marco dos Corais e a Orla de Ponta Verde lideram, seguidos pelo Passeio de Jangada em Pajuçara e o centro histórico de Jaraguá.",
        },
        {
          question: "Maceió tem praias urbanas boas para banho?",
          answer:
            "Sim. Ponta Verde e Pajuçara ficam na cidade e têm estrutura de quiosques, salva-vidas e calçadão. As piscinas naturais saem de Pajuçara na baixa-mar.",
        },
        {
          question: "Quanto tempo reservar para conhecer Maceió?",
          answer:
            "De 3 a 5 dias permitem aproveitar a orla, um passeio de jangada e um passeio em Jaraguá com tranquilidade.",
        },
        {
          question: "O Marco dos Corais fica em qual bairro?",
          answer:
            "Na Orla de Ponta Verde, um dos bairros à beira-mar de Maceió, em Alagoas.",
        },
        {
          question: "Maceió é boa para turismo cultural?",
          answer:
            "Sim. Jaraguá, o Museu Théo Brandão de Antropologia e a cena de forró e cachaça são atrações culturais consolidadas.",
        },
      ],
      related: ["o-que-fazer-em-maceio", "ponta-verde", "praias-de-maceio"],
    },

    "o-que-fazer-em-maceio": {
      metaTitle: "O que Fazer em Maceió: Roteiros e Dicas",
      metaDescription:
        "O que fazer em Maceió: passeio de jangada, feiras, trilhas, gastronomia, vida noturna e o pôr do sol no Marco dos Corais.",
      eyebrow: "Guias de Maceió",
      title: "O que Fazer em Maceió",
      intro:
        "Seja sua primeira ou décima vez na cidade, Maceió oferece desde relax na orla até aventura nos recifes. Veja sugestões organizadas por perfil de viagem.",
      sections: [
        {
          id: "relax",
          title: "Relaxar na Orla",
          blocks: [
            {
              type: "p",
              text: "Comece o dia caminhando ou pedalingo pela ciclovia de Ponta Verde e terminando no pôr do sol no Marco dos Corais.",
            },
          ],
        },
        {
          id: "jangada",
          title: "Passeio de Jangada",
          blocks: [
            {
              type: "p",
              text: "As jangadas de Pajuçara levam às piscinas naturais na baixa-mar — a atividade mais tradicional da cidade.",
            },
          ],
        },
        {
          id: "gastronomia",
          title: "Gastronomia e Feiras",
          blocks: [
            {
              type: "list",
              items: [
                "Provar frutos do mar na orla de Ponta Verde e Pajuçara.",
                "Visitar a Feira do Jaraguá para artesanato e comida local.",
                "Experimentar a cachaça artesanal alagoana.",
              ],
            },
          ],
        },
        {
          id: "noite",
          title: "Vida Noturna",
          blocks: [
            {
              type: "p",
              text: "Jaraguá concentra bares, forró e cachaçarias. Na orla, quiosques funcionam até tarde com música ao vivo.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "O que fazer em Maceió à noite?",
          answer:
            "Jaraguá tem forró, bares e cachaçarias; na orla de Ponta Verde os quiosques ficam abertos com música e petiscos.",
        },
        {
          question: "Tem passeios de barco em Maceió?",
          answer:
            "Sim. As jangadas de Pajuçara fazem o trajeto até as piscinas naturais na baixa-mar.",
        },
        {
          question: "O que fazer em Maceió com crianças?",
          answer:
            "A orla plana e o calçadão são ótimos para famílias; o passeio de jangada agrada todas as idades.",
        },
        {
          question: "Dá para fazer tudo a pé?",
          answer:
            "Ponta Verde e Pajuçara são ligadas por calçadão. Para Jaraguá e outras regiões, use app de transporte ou carro.",
        },
      ],
      related: ["pontos-turisticos-maceio", "ponta-verde", "praias-de-maceio"],
    },

    "por-do-sol-marco-dos-corais": {
      metaTitle: "Pôr do Sol no Marco dos Corais: Melhor Horário e Onde Ver",
      metaDescription:
        "Pôr do sol no Marco dos Corais: melhor horário, onde ver, dicas de foto, o que fazer depois e como chegar.",
      eyebrow: "Guias de Maceió",
      title: "Pôr do Sol no Marco dos Corais",
      intro:
        "O pôr do sol no Marco dos Corais é um dos mais fotografados de Maceió. A estrutura abre 180° para o horizonte e o céu fica rosa e laranja quase todos os dias.",
      sections: [
        {
          id: "horario",
          title: "Melhor Horário",
          blocks: [
            {
              type: "p",
              text: "Chegue 30 a 45 minutos antes do pôr do sol para garantir lugar no mirante e na beirada da orla.",
            },
            {
              type: "callout",
              text: "Consulte o horário exato do pôr do sol do dia — em Maceió ele varia pouco ao longo do ano, mas vale conferir.",
            },
          ],
        },
        {
          id: "onde",
          title: "Onde Ver",
          blocks: [
            {
              type: "list",
              items: [
                "Do próprio mirante do Marco dos Corais, no alto da estrutura.",
                "Da beirada da Orla de Ponta Verde, em frente ao marco.",
                "Dos quiosques da orla, com uma bebida acompanhando.",
                "Da ciclovia, caminhando em direção a Pajuçara.",
              ],
            },
          ],
        },
        {
          id: "fotos",
          title: "Dicas de Foto",
          blocks: [
            {
              type: "p",
              text: "Posicione-se de frente para o mar; o marco em silhueta contra o céu colorido rende as melhores fotos.",
            },
            {
              type: "list",
              items: [
                "Leve celular ou câmera com bateria carregada.",
                "Use o modo HDR para equilibrar o céu e a silhueta.",
                "Fotos na hora dourada (antes do sol se por) têm luz mais suave.",
              ],
            },
          ],
        },
        {
          id: "depois",
          title: "Depois do Pôr do Sol",
          blocks: [
            {
              type: "p",
              text: "A orla ganha iluminação cênica e os quiosques ficam movimentados. É um bom momento para jantar ou caminhar.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "Qual o melhor horário para o pôr do sol no Marco dos Corais?",
          answer:
            "Chegue 30–45 minutos antes do horário do pôr do sol do dia para pegar lugar no mirante e na orla.",
        },
        {
          question: "O pôr do sol é bonito todos os dias?",
          answer:
            "Na maior parte dos dias, sim — o céu fica rosa e laranja. Dias nublados podem ser mais discretos.",
        },
        {
          question: "Dá para ver o pôr do sol do mirante?",
          answer:
            "Sim. O marco tem um mirante superior com abertura de 180° para o horizonte.",
        },
        {
          question: "Tem estrutura perto para jantar?",
          answer:
            "Sim. A Orla de Ponta Verde tem quiosques e restaurantes a poucos passos do marco.",
        },
      ],
      related: ["pontos-turisticos-maceio", "ponta-verde", "o-que-fazer-em-maceio"],
    },

    "ponta-verde": {
      metaTitle: "Ponta Verde, Maceió: Guia do Bairro à Beira-Mar",
      metaDescription:
        "Ponta Verde, Maceió: orla, praia, onde comer, como chegar e por que é o bairro mais famoso da capital alagoana.",
      eyebrow: "Guias de Maceió",
      title: "Ponta Verde, Maceió",
      intro:
        "Ponta Verde é o bairro à beira-mar onde fica o Marco dos Corais e a orla mais estruturada de Maceió. É base ideal para quem quer praia, caminhada e gastronomia a poucos passos.",
      sections: [
        {
          id: "bairro",
          title: "O Bairro",
          blocks: [
            {
              type: "p",
              text: "Ponta Verde concentra hotéis, quiosques e o calçadão contínuo que liga a Pajuçara. É onde moradores e turistas convivem o ano todo.",
            },
          ],
        },
        {
          id: "orla",
          title: "A Orla e o Marco dos Corais",
          blocks: [
            {
              type: "p",
              text: "A orla abriga o Marco dos Corais, mirante e ponto de encontro para o pôr do sol, além de ciclovia e área de lazer.",
            },
          ],
        },
        {
          id: "comer",
          title: "Onde Comer",
          blocks: [
            {
              type: "list",
              items: [
                "Quiosques na orla com frutos do mar e petiscos.",
                "Restaurantes ao longo da Avenida Brigadeiro Eduardo Gomes.",
                "Cafés e padarias para o café da manhã antes da praia.",
              ],
            },
          ],
        },
        {
          id: "chegar",
          title: "Como Chegar",
          blocks: [
            {
              type: "p",
              text: "Fica a poucos minutos do centro e do aeroporto (MCZ, ~25 km). Uber, 99 e ônibus atendem a região.",
            },
            {
              type: "callout",
              text: "Se for de carro, há estacionamento nas redondezas da orla, livre e pago.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "Ponta Verde fica em qual cidade?",
          answer:
            "Em Maceió, capital de Alagoas, no Brasil — à beira-mar da Orla de Ponta Verde.",
        },
        {
          question: "Por que Ponta Verde é famosa?",
          answer:
            "Por abrigar o Marco dos Corais e a orla mais estruturada da cidade, com calçadão, quiosques e vista de pôr do sol.",
        },
        {
          question: "Dá para ir a pé de Ponta Verde a Pajuçara?",
          answer:
            "Sim. O calçadão contínuo liga as duas praias em uma caminhada plana e agradável.",
        },
        {
          question: "Onde fica o Marco dos Corais em Ponta Verde?",
          answer:
            "Na própria Orla de Ponta Verde, Maceió — AL.",
        },
      ],
      related: ["pontos-turisticos-maceio", "praias-de-maceio", "o-que-fazer-em-maceio"],
    },

    "lugares-para-conhecer-em-maceio": {
      metaTitle: "Lugares para Conhecer em Maceió: Roteiros e Escondidos",
      metaDescription:
        "Lugares para conhecer em Maceió: roteiros imperdíveis, bairros, mirantes e pontos menos óbvios da capital alagoana.",
      eyebrow: "Guias de Maceió",
      title: "Lugares para Conhecer em Maceió",
      intro:
        "Além da orla, Maceió tem cantos que valem a descoberta. Separamos roteiros imperdíveis e sugestões fora do óbvio.",
      sections: [
        {
          id: "imperdiveis",
          title: "Imperdíveis",
          blocks: [
            {
              type: "list",
              items: [
                "Marco dos Corais e Orla de Ponta Verde.",
                "Passeio de jangada em Pajuçara.",
                "Centro histórico de Jaraguá à noite.",
                "Praia do Francês (curta distância da cidade).",
              ],
            },
          ],
        },
        {
          id: "bairros",
          title: "Bairros para Explorar",
          blocks: [
            {
              type: "p",
              text: "Pajuçara, Ponta Verde e Jaraguá formam o eixo principal. A cada um tem clima diferente: lazer, mar ou cultura.",
            },
          ],
        },
        {
          id: "mirantes",
          title: "Mirantes e Vista",
          blocks: [
            {
              type: "p",
              text: "Além do marco, o Mirante de Jaraguá e pontos altos da cidade abrem vista ampla da orla e da lagoa.",
            },
          ],
        },
        {
          id: "mercados",
          title: "Mercados e Artesanato",
          blocks: [
            {
              type: "p",
              text: "A Feira do Jaraguá reúne artesanato, comida e a vida local — ótimo para levar lembranças de Alagoas.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "Quais lugares conhecer em Maceió além da praia?",
          answer:
            "Jaraguá (centro histórico), a Feira do Jaraguá, o Mirante e os museus como o Théo Brandão.",
        },
        {
          question: "Tem lugares menos turísticos em Maceió?",
          answer:
            "Sim. A Feira do Jaraguá e caminhadas pela orla no início da manhã mostram o lado local da cidade.",
        },
        {
          question: "Maceió vale a pena como base para conhecer Alagoas?",
          answer:
            "Sim. A cidade é porta de entrada para praias like a do Francês, Paripueira e Marechal Deodoro.",
        },
      ],
      related: ["pontos-turisticos-maceio", "o-que-fazer-em-maceio", "praias-de-maceio"],
    },

    "praias-de-maceio": {
      metaTitle: "Praias de Maceió: Guia das Melhores do Litoral",
      metaDescription:
        "Praias de Maceió: Ponta Verde, Pajuçara, Francês e outras. Dicas de banho, estrutura e como escolher a praia ideal.",
      eyebrow: "Guias de Maceió",
      title: "Praias de Maceió",
      intro:
        "As praias de Maceió combinam águas verdes, recifes e estrutura urbana. Da orla central às praias próximas, tem opção para cada estilo.",
      sections: [
        {
          id: "urbanas",
          title: "Praias Urbanas",
          blocks: [
            {
              type: "p",
              text: "Ponta Verde e Pajuçara ficam na cidade, com calçadão, quiosques e salva-vidas — ideais para banho e caminhada.",
            },
          ],
        },
        {
          id: "proximas",
          title: "Praias Próximas",
          blocks: [
            {
              type: "list",
              items: [
                "Praia do Francês: estrutura de resort e mar calmo.",
                "Paripueira: piscinas naturais em maré baixa.",
                "Marechal Deodoro: conjunto histórico à beira da lagoa.",
              ],
            },
          ],
        },
        {
          id: "dicas",
          title: "Dicas de Banho",
          blocks: [
            {
              type: "callout",
              text: "As piscinas naturais formadas pelos recifes aparecem na baixa-mar — pergunte a horário local antes de ir.",
            },
          ],
        },
        {
          id: "seguranca",
          title: "Segurança e Estrutura",
          blocks: [
            {
              type: "p",
              text: "As praias urbanas têm quiosques e vigilância. Leve protetor solar e hidratação, pois o sol de Maceió é forte o ano todo.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "Quais são as melhores praias de Maceió?",
          answer:
            "Ponta Verde e Pajuçara na cidade; Praia do Francês e Paripueira nas proximidades.",
        },
        {
          question: "As praias de Maceió são boas para banho?",
          answer:
            "Sim, especialmente Ponta Verde e Pajuçara, com estrutura e mar calmo em trechos protegidos pelos recifes.",
        },
        {
          question: "Como chegar às praias fora do centro?",
          answer:
            "De carro ou app de transporte; a Praia do Francês fica cerca de 30–40 minutos de Maceió.",
        },
        {
          question: "Tem piscinas naturais em Maceió?",
          answer:
            "Sim, formadas pelos recifes na baixa-mar, acessíveis por jangada a partir de Pajuçara.",
        },
      ],
      related: ["pontos-turisticos-maceio", "ponta-verde", "lugares-para-conhecer-em-maceio"],
    },
  },

  en: {
    "pontos-turisticos-maceio": {
      metaTitle: "Maceió Tourist Attractions: What to Visit in the City",
      metaDescription:
        "Guide to the main tourist attractions in Maceió: Ponta Verde waterfront, Marco dos Corais, Pajuçara, Jaraguá, urban beaches and more.",
      eyebrow: "Maceió Guides",
      title: "Maceió Tourist Attractions",
      intro:
        "Maceió is the capital of Alagoas, blending green seas, coral reefs and a charming historic center. Here are the sights worth visiting — from the most famous postcard to the cultural heart of Jaraguá.",
      sections: [
        {
          id: "ponta-verde",
          title: "Ponta Verde Waterfront and Marco dos Corais",
          blocks: [
            {
              type: "p",
              text: "The Ponta Verde waterfront is the heart of Maceió. It is home to Marco dos Corais, the concrete-and-glass viewpoint that became the city's symbol and the meeting point for sunset.",
            },
            {
              type: "p",
              text: "The continuous promenade links Ponta Verde to Pajuçara, with kiosks, a bike lane and open views over the reefs.",
            },
          ],
        },
        {
          id: "pajucara",
          title: "Pajuçara and the Raft Trip",
          blocks: [
            {
              type: "p",
              text: "In neighboring Pajuçara, rafts take visitors to the natural pools formed by the reefs at low tide.",
            },
            {
              type: "list",
              items: [
                "Departures in the morning at low tide, in front of Pajuçara beach.",
                "You can often see fish and translucent water in the natural pools.",
                "Pair it with a coffee on the waterfront before or after.",
              ],
            },
          ],
        },
        {
          id: "jaragua",
          title: "Jaraguá Historic Center",
          blocks: [
            {
              type: "p",
              text: "Jaraguá was Maceió's first neighborhood and now holds colonial mansions, the Image and Sound Museum and nightlife around Praça Bompart.",
            },
            {
              type: "callout",
              text: "At night, Jaraguá is a meeting point for forró, restaurants and traditional cachaça bars.",
            },
          ],
        },
        {
          id: "mirante",
          title: "Viewpoints and Cityscape",
          blocks: [
            {
              type: "p",
              text: "From Ponta Verde and the Marco dos Corais structure you can see much of the coast. For a wider view, the Jaraguá panoramic viewpoint is worth a stop.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "What are the most famous tourist attractions in Maceió?",
          answer:
            "Marco dos Corais and the Ponta Verde waterfront lead, followed by the Pajuçara raft trip and the Jaraguá historic center.",
        },
        {
          question: "Does Maceió have urban beaches good for swimming?",
          answer:
            "Yes. Ponta Verde and Pajuçara are in the city and have kiosks, lifeguards and a promenade. The natural pools leave from Pajuçara at low tide.",
        },
        {
          question: "How long to spend getting to know Maceió?",
          answer:
            "3 to 5 days lets you enjoy the waterfront, a raft trip and a Jaraguá outing at ease.",
        },
        {
          question: "Which neighborhood is Marco dos Corais in?",
          answer:
            "On the Ponta Verde waterfront, one of Maceió's beachfront neighborhoods in Alagoas.",
        },
        {
          question: "Is Maceió good for cultural tourism?",
          answer:
            "Yes. Jaraguá, the Théo Brandão Anthropology Museum and the forró and cachaça scene are established cultural attractions.",
        },
      ],
      related: ["o-que-fazer-em-maceio", "ponta-verde", "praias-de-maceio"],
    },

    "o-que-fazer-em-maceio": {
      metaTitle: "Things to Do in Maceió: Itineraries and Tips",
      metaDescription:
        "Things to do in Maceió: raft trip, markets, trails, food, nightlife and the Marco dos Corais sunset.",
      eyebrow: "Maceió Guides",
      title: "Things to Do in Maceió",
      intro:
        "Whether it's your first or tenth time, Maceió offers everything from waterfront relaxation to reef adventure. Here are suggestions organized by travel style.",
      sections: [
        {
          id: "relax",
          title: "Relax on the Waterfront",
          blocks: [
            {
              type: "p",
              text: "Start the day walking or cycling the Ponta Verde bike lane, ending with the Marco dos Corais sunset.",
            },
          ],
        },
        {
          id: "jangada",
          title: "Raft Trip",
          blocks: [
            {
              type: "p",
              text: "Pajuçara's rafts take you to the natural pools at low tide — the city's most traditional activity.",
            },
          ],
        },
        {
          id: "gastronomia",
          title: "Food and Markets",
          blocks: [
            {
              type: "list",
              items: [
                "Try seafood on the Ponta Verde and Pajuçara waterfront.",
                "Visit the Jaraguá Market for crafts and local food.",
                "Sample artisanal Alagoas cachaça.",
              ],
            },
          ],
        },
        {
          id: "noite",
          title: "Nightlife",
          blocks: [
            {
              type: "p",
              text: "Jaraguá concentrates bars, forró and cachaça bars. On the waterfront, kiosks stay open late with live music.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "What to do in Maceió at night?",
          answer:
            "Jaraguá has forró, bars and cachaça bars; on the Ponta Verde waterfront kiosks stay open with music and snacks.",
        },
        {
          question: "Are there boat trips in Maceió?",
          answer:
            "Yes. The Pajuçara rafts run to the natural pools at low tide.",
        },
        {
          question: "What to do in Maceió with children?",
          answer:
            "The flat waterfront and promenade are great for families; the raft trip pleases all ages.",
        },
        {
          question: "Can you do it all on foot?",
          answer:
            "Ponta Verde and Pajuçara are linked by promenade. For Jaraguá and other areas, use a ride app or car.",
        },
      ],
      related: ["pontos-turisticos-maceio", "ponta-verde", "praias-de-maceio"],
    },

    "por-do-sol-marco-dos-corais": {
      metaTitle: "Sunset at Marco dos Corais: Best Time and Where to Watch",
      metaDescription:
        "Sunset at Marco dos Corais: best time, where to watch, photo tips, what to do after and how to get there.",
      eyebrow: "Maceió Guides",
      title: "Sunset at Marco dos Corais",
      intro:
        "The Marco dos Corais sunset is among the most photographed in Maceió. The structure opens 180° to the horizon and the sky turns pink and orange almost daily.",
      sections: [
        {
          id: "horario",
          title: "Best Time",
          blocks: [
            {
              type: "p",
              text: "Arrive 30 to 45 minutes before sunset to secure a spot on the viewpoint and the waterfront edge.",
            },
            {
              type: "callout",
              text: "Check the exact sunset time for the day — in Maceió it varies little through the year, but worth confirming.",
            },
          ],
        },
        {
          id: "onde",
          title: "Where to Watch",
          blocks: [
            {
              type: "list",
              items: [
                "From the Marco dos Corais viewpoint itself, high on the structure.",
                "From the Ponta Verde waterfront edge, in front of the landmark.",
                "From waterfront kiosks, with a drink.",
                "From the bike lane, walking toward Pajuçara.",
              ],
            },
          ],
        },
        {
          id: "fotos",
          title: "Photo Tips",
          blocks: [
            {
              type: "p",
              text: "Face the sea; the landmark in silhouette against the colored sky gives the best shots.",
            },
            {
              type: "list",
              items: [
                "Bring a charged phone or camera.",
                "Use HDR mode to balance sky and silhouette.",
                "Golden-hour photos (before the sun sets) have softer light.",
              ],
            },
          ],
        },
        {
          id: "depois",
          title: "After Sunset",
          blocks: [
            {
              type: "p",
              text: "The waterfront gets scenic lighting and kiosks get busy. It's a good moment for dinner or a walk.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "What is the best time for the Marco dos Corais sunset?",
          answer:
            "Arrive 30–45 minutes before the day's sunset time to get a spot on the viewpoint and waterfront.",
        },
        {
          question: "Is the sunset beautiful every day?",
          answer:
            "Most days, yes — the sky turns pink and orange. Cloudy days may be more subdued.",
        },
        {
          question: "Can you see the sunset from the viewpoint?",
          answer:
            "Yes. The landmark has an upper viewpoint with 180° opening to the horizon.",
        },
        {
          question: "Is there somewhere to dine nearby?",
          answer:
            "Yes. The Ponta Verde waterfront has kiosks and restaurants a few steps from the landmark.",
        },
      ],
      related: ["pontos-turisticos-maceio", "ponta-verde", "o-que-fazer-em-maceio"],
    },

    "ponta-verde": {
      metaTitle: "Ponta Verde, Maceió: Beachfront Neighborhood Guide",
      metaDescription:
        "Ponta Verde, Maceió: waterfront, beach, where to eat, how to get there and why it's the city's most famous neighborhood.",
      eyebrow: "Maceió Guides",
      title: "Ponta Verde, Maceió",
      intro:
        "Ponta Verde is the beachfront neighborhood where Marco dos Corais and the most structured waterfront of Maceió are. It's an ideal base for beach, walking and food within steps.",
      sections: [
        {
          id: "bairro",
          title: "The Neighborhood",
          blocks: [
            {
              type: "p",
              text: "Ponta Verde concentrates hotels, kiosks and the continuous promenade linking to Pajuçara. Locals and tourists share it year-round.",
            },
          ],
        },
        {
          id: "orla",
          title: "The Waterfront and Marco dos Corais",
          blocks: [
            {
              type: "p",
              text: "The waterfront holds Marco dos Corais, viewpoint and meeting point for sunset, plus a bike lane and leisure area.",
            },
          ],
        },
        {
          id: "comer",
          title: "Where to Eat",
          blocks: [
            {
              type: "list",
              items: [
                "Waterfront kiosks with seafood and snacks.",
                "Restaurants along Avenida Brigadeiro Eduardo Gomes.",
                "Cafés and bakeries for breakfast before the beach.",
              ],
            },
          ],
        },
        {
          id: "chegar",
          title: "How to Get There",
          blocks: [
            {
              type: "p",
              text: "It's minutes from downtown and the airport (MCZ, ~25 km). Uber, 99 and buses serve the area.",
            },
            {
              type: "callout",
              text: "If driving, there is parking around the waterfront, free and paid.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "Which city is Ponta Verde in?",
          answer:
            "In Maceió, capital of Alagoas, Brazil — on the Ponta Verde waterfront.",
        },
        {
          question: "Why is Ponta Verde famous?",
          answer:
            "For hosting Marco dos Corais and the city's most structured waterfront, with promenade, kiosks and sunset views.",
        },
        {
          question: "Can you walk from Ponta Verde to Pajuçara?",
          answer:
            "Yes. The continuous promenade links the two beaches in a flat, pleasant walk.",
        },
        {
          question: "Where is Marco dos Corais in Ponta Verde?",
          answer:
            "On the Ponta Verde waterfront itself, Maceió — AL.",
        },
      ],
      related: ["pontos-turisticos-maceio", "praias-de-maceio", "o-que-fazer-em-maceio"],
    },

    "lugares-para-conhecer-em-maceio": {
      metaTitle: "Places to Visit in Maceió: Routes and Hidden Gems",
      metaDescription:
        "Places to visit in Maceió: must-see routes, neighborhoods, viewpoints and less obvious spots in the Alagoas capital.",
      eyebrow: "Maceió Guides",
      title: "Places to Visit in Maceió",
      intro:
        "Beyond the waterfront, Maceió has corners worth discovering. We separated must-see routes and off-the-beaten-path suggestions.",
      sections: [
        {
          id: "imperdiveis",
          title: "Must-Sees",
          blocks: [
            {
              type: "list",
              items: [
                "Marco dos Corais and Ponta Verde waterfront.",
                "Pajuçara raft trip.",
                "Jaraguá historic center at night.",
                "Praia do Francês (short distance from the city).",
              ],
            },
          ],
        },
        {
          id: "bairros",
          title: "Neighborhoods to Explore",
          blocks: [
            {
              type: "p",
              text: "Pajuçara, Ponta Verde and Jaraguá form the main axis. Each has a different vibe: leisure, sea or culture.",
            },
          ],
        },
        {
          id: "mirantes",
          title: "Viewpoints and Vistas",
          blocks: [
            {
              type: "p",
              text: "Beyond the landmark, the Jaraguá viewpoint and high points of the city open a wide view of the coast and lagoon.",
            },
          ],
        },
        {
          id: "mercados",
          title: "Markets and Crafts",
          blocks: [
            {
              type: "p",
              text: "The Jaraguá Market gathers crafts, food and local life — great for Alagoas souvenirs.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "What places to know in Maceió beyond the beach?",
          answer:
            "Jaraguá (historic center), the Jaraguá Market, the viewpoint and museums like Théo Brandão.",
        },
        {
          question: "Are there less touristy places in Maceió?",
          answer:
            "Yes. The Jaraguá Market and early-morning waterfront walks show the city's local side.",
        },
        {
          question: "Is Maceió worth it as a base to know Alagoas?",
          answer:
            "Yes. The city is the gateway to beaches like Francês, Paripueira and Marechal Deodoro.",
        },
      ],
      related: ["pontos-turisticos-maceio", "o-que-fazer-em-maceio", "praias-de-maceio"],
    },

    "praias-de-maceio": {
      metaTitle: "Beaches of Maceió: Guide to the Best on the Coast",
      metaDescription:
        "Beaches of Maceió: Ponta Verde, Pajuçara, Francês and others. Swimming tips, infrastructure and how to choose the ideal beach.",
      eyebrow: "Maceió Guides",
      title: "Beaches of Maceió",
      intro:
        "The beaches of Maceió combine green waters, reefs and urban infrastructure. From the central waterfront to nearby beaches, there is an option for every style.",
      sections: [
        {
          id: "urbanas",
          title: "Urban Beaches",
          blocks: [
            {
              type: "p",
              text: "Ponta Verde and Pajuçara are in the city, with promenade, kiosks and lifeguards — ideal for swimming and walking.",
            },
          ],
        },
        {
          id: "proximas",
          title: "Nearby Beaches",
          blocks: [
            {
              type: "list",
              items: [
                "Praia do Francês: resort infrastructure and calm sea.",
                "Paripueira: natural pools at low tide.",
                "Marechal Deodoro: historic complex by the lagoon.",
              ],
            },
          ],
        },
        {
          id: "dicas",
          title: "Swimming Tips",
          blocks: [
            {
              type: "callout",
              text: "The natural pools formed by the reefs appear at low tide — ask locals for the time before going.",
            },
          ],
        },
        {
          id: "seguranca",
          title: "Safety and Infrastructure",
          blocks: [
            {
              type: "p",
              text: "Urban beaches have kiosks and surveillance. Bring sunscreen and hydration, as Maceió's sun is strong year-round.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "What are the best beaches in Maceió?",
          answer:
            "Ponta Verde and Pajuçara in the city; Praia do Francês and Paripueira nearby.",
        },
        {
          question: "Are Maceió's beaches good for swimming?",
          answer:
            "Yes, especially Ponta Verde and Pajuçara, with infrastructure and calm sea in reef-protected stretches.",
        },
        {
          question: "How to reach beaches outside the center?",
          answer:
            "By car or ride app; Praia do Francês is about 30–40 minutes from Maceió.",
        },
        {
          question: "Are there natural pools in Maceió?",
          answer:
            "Yes, formed by the reefs at low tide, reachable by raft from Pajuçara.",
        },
      ],
      related: ["pontos-turisticos-maceio", "ponta-verde", "lugares-para-conhecer-em-maceio"],
    },
  },

  es: {
    "o-que-fazer-em-maceio": {
      metaTitle:
        "Qué Hacer en Maceió: Itinerarios y Consejos",
      metaDescription:
        "Qué hacer en Maceió: paseo en balsa, mercados, senderos, gastronomía, vida nocturna y la puesta de sol en Marco dos Corais.",
      eyebrow: "Guías de Maceió",
      title: "Qué Hacer en Maceió",
      intro:
        "Sea tu primera o décima vez, Maceió ofrece desde relax en la orilla hasta aventura en los arrecifes. Aquí hay sugerencias organizadas por estilo de viaje.",
      sections: [
        {
          id: "relax",
          title: "Relajarse en la Orilla",
          blocks: [
            {
              type: "p",
              text: "Empieza el día caminando o en bici por la ciclovía de Ponta Verde y termina con la puesta de sol en Marco dos Corais.",
            },
          ],
        },
        {
          id: "jangada",
          title: "Paseo en Balsa",
          blocks: [
            {
              type: "p",
              text: "Las balsas de Pajuçara llevan a las piscinas naturales formadas por los arrecifes en marea baja — la actividad más tradicional de la ciudad.",
            },
          ],
        },
        {
          id: "gastronomia",
          title: "Gastronomía y Mercados",
          blocks: [
            {
              type: "list",
              items: [
                "Prueba mariscos en la orilla de Ponta Verde y Pajuçara.",
                "Visita el Mercado de Jaraguá por artesanía y comida local.",
                "Prueba la cachaça artesanal de Alagoas.",
              ],
            },
          ],
        },
        {
          id: "noite",
          title: "Vida Nocturna",
          blocks: [
            {
              type: "p",
              text: "Jaraguá concentra bares, forró y bares de cachaça. En la orilla, los quioscos abren hasta tarde con música en vivo.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "¿Qué hacer en Maceió de noche?",
          answer:
            "Jaraguá tiene forró, bares y bares de cachaça; en la orilla de Ponta Verde los quioscos abren con música y aperitivos.",
        },
        {
          question: "¿Hay paseos en bote en Maceió?",
          answer:
            "Sí. Las balsas de Pajuçara van a las piscinas naturales en marea baja.",
        },
        {
          question: "¿Qué hacer en Maceió con niños?",
          answer:
            "La orilla plana y el paseo son ideales para familias; el paseo en balsa gusta a todas las edades.",
        },
        {
          question: "¿Se puede hacer todo a pie?",
          answer:
            "Ponta Verde y Pajuçara están unidas por el paseo. Para Jaraguá y otras zonas, usa app de transporte o coche.",
        },
      ],
      related: ["pontos-turisticos-maceio", "ponta-verde", "praias-de-maceio"],
    },

    "lugares-para-visitar-em-maceio": {
      metaTitle:
        "Lugares para Conocer en Maceió: Rutas y Rincones",
      metaDescription:
        "Lugares para conocer en Maceió: rutas imperdibles, barrios, miradores y rincones menos obvios de la capital de Alagoas.",
      eyebrow: "Guías de Maceió",
      title: "Lugares para Conocer en Maceió",
      intro:
        "Más allá de la orilla, Maceió tiene rincones que valen la pena. Separamos rutas imperdibles y sugerencias fuera de lo común.",
      sections: [
        {
          id: "imperdiveis",
          title: "Imperdibles",
          blocks: [
            {
              type: "list",
              items: [
                "Marco dos Corais y orilla de Ponta Verde.",
                "Paseo en balsa en Pajuçara.",
                "Centro histórico de Jaraguá de noche.",
                "Praia do Francês (cerca de la ciudad).",
              ],
            },
          ],
        },
        {
          id: "bairros",
          title: "Barrios por Explorar",
          blocks: [
            {
              type: "p",
              text: "Pajuçara, Ponta Verde y Jaraguá forman el eje principal. Cada uno tiene un ambiente distinto: ocio, mar o cultura.",
            },
          ],
        },
        {
          id: "mirantes",
          title: "Miradores y Vistas",
          blocks: [
            {
              type: "p",
              text: "Además del hito, el mirador de Jaraguá y puntos altos de la ciudad abren una vista amplia de la costa y la laguna.",
            },
          ],
        },
        {
          id: "mercados",
          title: "Mercados y Artesanía",
          blocks: [
            {
              type: "p",
              text: "El Mercado de Jaraguá reúne artesanía, comida y vida local — ideal para llevar recuerdos de Alagoas.",
            },
          ],
        },
      ],
      faq: [
        {
          question: "¿Qué lugares conocer en Maceió además de la playa?",
          answer:
            "Jaraguá (centro histórico), el Mercado de Jaraguá, el mirador y museos como el Théo Brandão.",
        },
        {
          question: "¿Hay lugares menos turísticos en Maceió?",
          answer:
            "Sí. El Mercado de Jaraguá y los paseos matutinos por la orilla muestran el lado local de la ciudad.",
        },
        {
          question: "¿Vale la pena Maceió como base para conocer Alagoas?",
          answer:
            "Sí. La ciudad es la puerta de entrada a playas como Francês, Paripueira y Marechal Deodoro.",
        },
      ],
      related: ["pontos-turisticos-maceio", "o-que-fazer-em-maceio", "praias-de-maceio"],
    },
  },
};

export function getTopic(
  lang: Lang,
  slug: TopicSlug
): TopicContent | undefined {
  return topics[lang]?.[slug];
}

export function topicSlugsForLang(lang: Lang): TopicSlug[] {
  return Object.keys(topics[lang] ?? {}) as TopicSlug[];
}
