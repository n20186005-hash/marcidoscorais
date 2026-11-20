import type { TopicContent } from "../i18n/topics";
import { maceioPhotos } from "./maceio-photos";

const waterfrontSource = {
  label: "Prefeitura de Maceió — percurso da Faixa Verde",
  href: "https://maceio.al.gov.br/noticias/dmtt/faixa-verde-da-orla-maritima-e-ampliada-para-2-5-quilometros-de-extensao",
};

export const pajucaraGuides = {
  "praia-de-pajucara": {
    metaTitle: "Praia de Pajuçara, Maceió: jangadas, maré e como chegar",
    metaDescription: "Planeje a visita à Praia de Pajuçara: onde procurar as jangadas, o que confirmar antes do embarque e como seguir pelo calçadão até o Marco dos Corais.",
    eyebrow: "Praias de Maceió",
    title: "Praia de Pajuçara e as jangadas de Maceió",
    intro: "Na orla da Avenida Dr. Antônio Gouveia, Pajuçara reúne praia urbana, calçadão e embarques de jangada para as piscinas naturais. A hora da maré orienta o passeio no mar. A caminhada pela orla pode ser feita em outro horário.",
    location: {
      address: "Av. Dr. Antônio Gouveia, orla da Pajuçara, Maceió – AL",
      query: "Praia de Pajuçara, Avenida Doutor Antônio Gouveia, Maceió, AL",
    },
    photo: { ...maceioPhotos["praia-de-pajucara"], alt: "Trecho da Praia de Pajuçara em Maceió", credit: "Wikimedia Commons · ficha da fotografia" },
    visitorInfo: {
      heading: "Sobre a Praia de Pajuçara",
      management: "A Prefeitura de Maceió regulamenta o trecho de atuação das jangadas na orla; os operadores informam as condições do passeio.",
      type: "Praia urbana e ponto de embarque de jangadas",
      transport: "A pé pelo calçadão desde Ponta Verde ou de carro pela Avenida Dr. Antônio Gouveia.",
      access: "A praia é espaço público. Horários e preços da jangada são consultados com o operador.",
    },
    reviewPlaces: [{ label: "Praia de Pajuçara", query: "Praia de Pajuçara, Maceió, AL" }],
    sections: [
      { id: "jangadas", title: "Onde embarcar e o que perguntar", blocks: [
        { type: "p", text: "A Prefeitura de Maceió delimitou na Pajuçara o trecho de atuação das embarcações de passeio. Ao chegar pela Avenida Dr. Antônio Gouveia, procure a área de embarque indicada na praia e confirme o ponto de encontro com o operador antes de pagar." },
        { type: "list", items: [
          "Confirme o horário de ida e volta, o preço por pessoa e o que está incluído.",
          "Pergunte sobre coletes, embarque na areia e condições para crianças ou pessoas com mobilidade reduzida.",
          "Confira a previsão de maré e as condições do mar para o dia com o operador. Pergunte como funciona o reagendamento em caso de cancelamento.",
        ] },
      ] },
      { id: "orla", title: "O que fazer na orla", blocks: [
        { type: "p", text: "O calçadão permite ver as jangadas da margem e combinar a praia com uma visita ao Parque Massay-ó-k. A prefeitura registra o parque como espaço de convivência da Pajuçara e aponta a roda-gigante como uma atração nas proximidades." },
        { type: "p", text: "Para fotografar as velas e a faixa de areia, procure um ponto do calçadão com vista aberta. Planeje a caminhada a Ponta Verde depois do embarque ou use a orla como alternativa se o passeio de jangada for suspenso." },
      ] },
      { id: "como-chegar", title: "Como chegar", blocks: [
        { type: "p", text: "Use a Praia de Pajuçara, na Avenida Dr. Antônio Gouveia, como referência para carro ou transporte por aplicativo. Para ir do Marco dos Corais a pé, siga pelo passeio público em direção a Pajuçara." },
      ] },
    ],
    faq: [
      { question: "As jangadas saem sempre pela manhã?", answer: "O horário útil acompanha a baixa-mar e as condições de navegação. Confirme a janela e o ponto de encontro para a data da visita." },
      { question: "A caminhada pela orla depende do passeio de jangada?", answer: "Você pode passear pelo calçadão e conhecer o Parque Massay-ó-k mesmo quando não houver embarque." },
    ],
    related: ["parque-massay-o-k", "orla-pajucara-ponta-verde", "praias-de-maceio", "ponta-verde"],
    sources: [
      { label: "Prefeitura de Maceió — regras para as jangadas", href: "https://maceio.al.gov.br/noticias/semsc/portaria-estabelece-regras-para-permanencia-de-jangadas-na-orla-maritima" },
      { label: "Prefeitura de Maceió — Parque Massay-ó-k", href: "https://maceio.al.gov.br/p/iplam/o-parque-massay-o-k" },
    ],
  },
  "orla-pajucara-ponta-verde": {
    metaTitle: "Orla de Maceió a pé: Pajuçara, Ponta Verde e Marco dos Corais",
    metaDescription: "Roteiro pelo calçadão de Maceió, da Avenida Dr. Antônio Gouveia até o Marco dos Corais, com pontos de referência, paradas e volta.",
    eyebrow: "Roteiros de Maceió",
    title: "Da Pajuçara ao Marco dos Corais pelo calçadão",
    intro: "Este roteiro liga a Praia de Pajuçara ao mirante do Marco dos Corais pela orla de Maceió. Use a Avenida Dr. Antônio Gouveia como ponto de partida e o trecho da Silvio Carlos Viana em Ponta Verde como referência de chegada.",
    location: {
      address: "Início na Av. Dr. Antônio Gouveia, Pajuçara, Maceió – AL",
      query: "Parque Massay-ó-k, Pajuçara, Maceió, AL",
      directions: "https://www.google.com/maps/dir/?api=1&origin=Parque+Massay-%C3%B3-k%2C+Macei%C3%B3&destination=Marco+dos+Corais%2C+Macei%C3%B3&travelmode=walking",
    },
    photo: { ...maceioPhotos["orla-pajucara-ponta-verde"], alt: "Praia de Ponta Verde, trecho final da caminhada pela orla", credit: "Wikimedia Commons · ficha da fotografia" },
    visitorInfo: {
      heading: "Sobre o calçadão de Pajuçara a Ponta Verde",
      management: "A Prefeitura de Maceió implantou a Faixa Verde por meio do DMTT.",
      type: "Roteiro a pé pelo calçadão, entre Pajuçara e Ponta Verde",
      transport: "Comece no Parque Massay-ó-k ou faça o trajeto inverso a partir do Marco dos Corais.",
      access: "O roteiro usa o passeio público. Observe a sinalização e os desvios no dia.",
    },
    reviewPlaces: [
      { label: "Parque Massay-ó-k, início do roteiro", query: "Parque Massay-ó-k, Pajuçara, Maceió, AL" },
      { label: "Marco dos Corais, fim do roteiro", query: "Marco dos Corais, Ponta Verde, Maceió, AL" },
    ],
    sections: [
      { id: "passo-a-passo", title: "Percurso a pé em três paradas", blocks: [
        { type: "p", text: "1. Comece junto ao Parque Massay-ó-k, na Pajuçara. Se você vier de uma jangada, use o calçadão como ponto de reencontro do grupo." },
        { type: "p", text: "2. Siga pela orla em direção a Ponta Verde, mantendo-se no passeio de pedestres. A prefeitura usa a Avenida Dr. Antônio Gouveia e o Marco dos Corais como referências da Faixa Verde. Observe a sinalização onde houver faixas com usos diferentes." },
        { type: "p", text: "3. Termine no Marco dos Corais. Faça a última parada com tempo para observar a orla e fotografar a curva de Ponta Verde. Para voltar, você pode refazer a caminhada ou combinar a retirada por aplicativo em uma via próxima." },
      ] },
      { id: "planejamento", title: "Quando sair e onde fazer pausas", blocks: [
        { type: "p", text: "Reserve tempo para paradas se for fotografar as jangadas e o mirante na mesma caminhada. Para terminar no fim da tarde, confira o horário local do pôr do sol e decida antes se vai voltar a pé ou de carro." },
        { type: "p", text: "O percurso segue junto à praia. Leve água e proteção solar e use o calçadão se quiser manter o trajeto fora da areia. Se houver desvio ou evento na orla, acompanhe a sinalização local." },
      ] },
      { id: "mapa", title: "Ponto de partida e navegação", blocks: [
        { type: "p", text: "Abra o mapa no Parque Massay-ó-k para localizar o início. O botão de percurso a pé usa o Marco dos Corais como destino. Se já estiver hospedado em Ponta Verde, faça o trajeto no sentido inverso." },
      ] },
    ],
    faq: [
      { question: "Preciso caminhar pela areia?", answer: "O roteiro usa o calçadão. A sinalização local indica eventuais desvios e trechos compartilhados." },
      { question: "Posso incluir as piscinas naturais no mesmo dia?", answer: "Sim, se houver saída confirmada. Ajuste primeiro o horário de embarque e encaixe a caminhada antes ou depois." },
    ],
    related: ["parque-massay-o-k", "farol-da-ponta-verde", "praia-de-pajucara", "ponta-verde", "por-do-sol-marco-dos-corais"],
    sources: [
      waterfrontSource,
      { label: "Prefeitura de Maceió — calçadão da orla", href: "https://maceio.al.gov.br/noticias/semsc/seguranca-cidada-realiza-censo-de-ambulantes-do-calcadao-da-orla-maritima-de-maceio" },
      { label: "Prefeitura de Maceió — Parque Massay-ó-k", href: "https://maceio.al.gov.br/p/iplam/o-parque-massay-o-k" },
    ],
  },
  "farol-da-ponta-verde": {
    metaTitle: "Farol da Ponta Verde em Maceió: onde ver e como chegar",
    metaDescription: "Conheça o Farol da Ponta Verde, sinal náutico histórico na costa de Maceió. Veja onde observá-lo da orla e como combinar a visita com o Marco dos Corais.",
    eyebrow: "Ponta Verde",
    title: "Farol da Ponta Verde",
    intro: "A torre listrada ao largo da Praia de Ponta Verde é um sinal de navegação da costa de Maceió. Da orla, procure um campo aberto de visão para enquadrar a torre, os recifes e o mar.",
    location: { address: "Ao largo da Praia de Ponta Verde, Maceió – AL", query: "Farol da Ponta Verde, Maceió, AL" },
    visitorInfo: {
      heading: "Sobre o Farol da Ponta Verde",
      management: "A Capitania dos Portos de Alagoas, da Marinha do Brasil, documenta a sinalização náutica do farol.",
      type: "Farol costeiro em atividade",
      transport: "Chegue ao calçadão de Ponta Verde pela Avenida Sílvio Carlos Viana e observe o farol a partir da margem.",
      access: "Observação a partir da orla. O marcador da torre fica no mar.",
    },
    photo: {
      src: "/gallery/nearby/farol-ponta-verde.webp",
      alt: "Farol listrado de Ponta Verde sobre o mar, diante da costa de Maceió",
      credit: "Marinha do Brasil, via Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Farol_da_Ponta_Verde_-_Macei%C3%B3,_AL_(52113641992).jpg",
      width: 1100, height: 643,
    },
    reviewPlaces: [{
      label: "Farol da Ponta Verde",
      query: "Farol da Ponta Verde, Maceió, AL",
      snapshot: {
        text: "4,8/5 · 160 avaliações em 27/10/2026",
        source: "https://ekr.com.br/como-chegar-ao-farol-da-ponta-verde-em-maceio-e-o-melhor/",
      },
    }],
    sections: [
      { id: "historia", title: "História e função", blocks: [
        { type: "p", text: "A Capitania dos Portos registra a inauguração em 1922, quando a luz usava gás acetileno. A documentação da Marinha descreve a lanterna atual e sua sequência de lampejos para identificação por embarcações." },
      ] },
      { id: "visita", title: "Onde observar e fotografar", blocks: [
        { type: "steps", items: ["Comece no calçadão, junto ao Marco dos Corais.", "Caminhe pelo passeio da orla até encontrar uma vista desobstruída da torre.", "Para fotografar os detalhes da torre sem sair da orla, use zoom ou uma lente mais longa."] },
      ], links: [{ label: "Conheça a orla de Ponta Verde", href: "/pt/ponta-verde" }] },
    ],
    faq: [
      { question: "O Farol da Ponta Verde é o Marco dos Corais?", answer: "São dois pontos distintos. O farol é a torre de sinalização no mar; o Marco dos Corais fica na orla e funciona como referência para chegar ao passeio." },
      { question: "Onde fica o ponto de observação?", answer: "No calçadão da Praia de Ponta Verde. O marcador do farol no mapa indica a torre, ao largo da praia." },
    ],
    related: ["ponta-verde", "orla-pajucara-ponta-verde", "por-do-sol-marco-dos-corais"],
    sources: [{ label: "Marinha do Brasil — Farol da Ponta Verde", href: "https://www.marinha.mil.br/cpal/farol_ponta_verde" }],
  },
  "parque-massay-o-k": {
    metaTitle: "Parque Massay-ó-k em Pajuçara: antiga Praça Multieventos",
    metaDescription: "Visite o Parque Massay-ó-k na orla de Pajuçara. Saiba onde fica a antiga Praça Multieventos e como combinar o parque com a praia e Ponta Verde.",
    eyebrow: "Pajuçara",
    title: "Parque Massay-ó-k",
    intro: "O parque ocupa a antiga Praça Multieventos, na orla de Pajuçara. O espaço reúne áreas de convivência, canteiros e assentos, ao lado da roda-gigante que se tornou ponto de referência na paisagem.",
    location: { address: "Av. Dr. Antônio Gouveia, antiga Praça Multieventos, Pajuçara, Maceió – AL", query: "Parque Massay-ó-k antiga Praça Multieventos, Pajuçara, Maceió, AL" },
    visitorInfo: {
      heading: "Sobre o Parque Massay-ó-k",
      management: "O Instituto de Pesquisa, Planejamento e Licenciamento Urbano e Ambiental da Prefeitura de Maceió documenta a requalificação do parque. A roda-gigante tem operação própria.",
      type: "Parque urbano na orla de Pajuçara",
      transport: "Chegue pelo calçadão da Pajuçara ou use a antiga Praça Multieventos como referência para desembarque na Av. Dr. Antônio Gouveia.",
      access: "O parque é espaço de convivência pública. Consulte à parte o funcionamento e a bilheteria da roda-gigante.",
    },
    photo: {
      src: "/gallery/nearby/parque-massay-o-k.webp",
      alt: "Parque Massay-ó-k e roda-gigante na orla da Pajuçara",
      credit: "Jonathan Lins / Prefeitura de Maceió",
      source: "https://maceio.al.gov.br/noticias/iplam/parque-massay-o-k-une-tradicao-cultura-e-novas-experiencias-a-beira-mar",
      width: 800, height: 800,
    },
    reviewPlaces: [{ label: "Parque Massay-ó-k", query: "Parque Massay-ó-k antiga Praça Multieventos, Maceió, AL" }],
    sections: [
      { id: "historia", title: "Da Praça Multieventos ao parque", blocks: [
        { type: "p", text: "A prefeitura identifica a antiga praça como ponto de encontro e palco de eventos da Pajuçara. A requalificação atualizou o paisagismo, os espaços para sentar e a iluminação. As áreas abertas mantêm a ligação com o passeio da orla." },
      ] },
      { id: "visita", title: "Como encaixar o parque no passeio", blocks: [
        { type: "steps", items: ["Entre pelo lado da Avenida Dr. Antônio Gouveia e percorra os caminhos entre os canteiros.", "Faça uma pausa e veja a roda-gigante do nível do parque. Confira a programação se quiser subir.", "Saia para o calçadão e siga em direção a Ponta Verde, ou volte à praia para um embarque de jangada já combinado."] },
      ], links: [{ label: "Siga a pé até o Marco dos Corais", href: "/pt/orla-pajucara-ponta-verde" }] },
    ],
    faq: [
      { question: "Parque Massay-ó-k e Praça Multieventos são o mesmo lugar?", answer: "O parque ocupa o espaço da antiga Praça Multieventos, na orla da Pajuçara." },
      { question: "Preciso comprar ingresso da roda-gigante para passear pelo parque?", answer: "Você pode percorrer o espaço público do parque. A roda-gigante tem bilheteria e funcionamento próprios." },
    ],
    related: ["praia-de-pajucara", "orla-pajucara-ponta-verde", "pontos-turisticos-maceio"],
    sources: [{ label: "Prefeitura de Maceió — história do Parque Massay-ó-k", href: "https://maceio.al.gov.br/p/iplam/o-parque-massay-o-k" }],
  },
} satisfies Record<string, TopicContent>;
