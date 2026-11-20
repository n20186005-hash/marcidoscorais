import type { TopicContent } from "../i18n/topics";

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
    related: ["orla-pajucara-ponta-verde", "praias-de-maceio", "ponta-verde"],
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
    related: ["praia-de-pajucara", "ponta-verde", "por-do-sol-marco-dos-corais"],
    sources: [
      waterfrontSource,
      { label: "Prefeitura de Maceió — calçadão da orla", href: "https://maceio.al.gov.br/noticias/semsc/seguranca-cidada-realiza-censo-de-ambulantes-do-calcadao-da-orla-maritima-de-maceio" },
      { label: "Prefeitura de Maceió — Parque Massay-ó-k", href: "https://maceio.al.gov.br/p/iplam/o-parque-massay-o-k" },
    ],
  },
} satisfies Record<string, TopicContent>;
