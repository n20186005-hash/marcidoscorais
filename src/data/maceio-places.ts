import type { TopicContent } from "../i18n/topics";
import { extraMaceioPhotos, maceioPhotos } from "./maceio-photos";

const tourism = "https://visitealagoas.com.br/destinos/maceio/maceio";
const heritage = "https://www.gov.br/iphan/pt-br/superintendencias/alagoas";
const lookout = "https://www.iplam.maceio.al.gov.br/servicos/diretorias/desenhoseprojetosurbanos/rotadosmirantes";
const city = "Prefeitura de Maceió · espaço público municipal";

type Place = {
  name: string;
  area: string;
  address: string;
  manager: string;
  summary: string;
  history: string;
  feature: string;
  route: string;
  visitTip: string;
  photoTip: string;
  access: string;
  question: string;
  answer: string;
  source?: string;
};

const places = {
  "praia-de-jatiuca": {
    name: "Praia de Jatiúca", area: "Orla urbana", address: "Av. Álvaro Otacílio, Jatiúca, Maceió – AL", manager: city,
    summary: "Um passeio de calçadão entre a curva da praia e a frente urbana da Jatiúca.",
    history: "A urbanização da orla incorporou a Jatiúca ao circuito que liga Ponta Verde aos bairros do norte da cidade.",
    feature: "A curvatura da areia e a frente de edifícios permitem ler a relação entre a praia e a ocupação do bairro.",
    route: "Chegue pela Avenida Álvaro Otacílio e faça o trecho de calçadão em direção a Ponta Verde. Volte pelo mesmo lado da avenida se quiser manter o mar em vista.",
    visitTip: "Se vier de Ponta Verde, deixe a parada na Jatiúca para o final da caminhada e escolha um ponto de retorno junto à avenida.",
    photoTip: "Use a curva da linha de água como primeiro plano e deixe a frente de edifícios no fundo.",
    access: "Calçadão público. Para banho, observe as condições e a sinalização local.",
    question: "Dá para combinar com Ponta Verde?", answer: "Sim. Planeje a Jatiúca como continuação do passeio urbano pela orla.",
  },
  "praia-de-ipioca": {
    name: "Praia de Ipioca", area: "Litoral norte", address: "Bairro de Ipioca, acessos pela AL-101 Norte, Maceió – AL", manager: city,
    summary: "Uma parada no litoral norte para conhecer uma paisagem de areia e coqueirais.",
    history: "Ipioca é um bairro costeiro de Maceió, no trecho norte associado à antiga ocupação litorânea do município.",
    feature: "A faixa de areia e a vegetação costeira dão ao trecho uma paisagem diferente da orla verticalizada de Ponta Verde.",
    route: "Saia da orla central pela AL-101 Norte. Escolha um acesso público à praia antes de pedir o carro de volta.",
    visitTip: "Se for passar várias horas na praia, decida antes se vai usar um acesso público ou a estrutura de um clube e onde será o embarque na volta.",
    photoTip: "Enquadre a linha dos coqueiros paralela à areia para mostrar a extensão da costa.",
    access: "Praia pública; clubes à beira-mar podem ter regras e tarifas próprias.",
    question: "Preciso entrar num clube para conhecer a praia?", answer: "Use um acesso público. Consulte separadamente as condições caso queira usar a estrutura de um clube.",
  },
  "praia-da-sereia": {
    name: "Praia da Sereia", area: "Litoral norte", address: "AL-101 Norte, trecho de Riacho Doce, Maceió – AL", manager: city,
    summary: "Observe a escultura que domina a vista desta praia de Maceió.",
    history: "A escultura instalada sobre as formações rochosas tornou-se a referência visual que dá nome à praia.",
    feature: "Os recifes separam visualmente a faixa perto da areia do mar aberto. A posição da escultura ajuda a perceber essa diferença.",
    route: "Use a AL-101 Norte e marque Praia da Sereia, Maceió, como destino. Pare na margem e localize a escultura antes de decidir até onde caminhar.",
    visitTip: "Use a escultura como referência para escolher seu trecho da areia. Para uma visita curta, fique na margem e faça a foto antes de seguir ao norte.",
    photoTip: "Fotografe da areia com zoom, incluindo a escultura e a faixa de recifes.",
    access: "Praia pública; siga as orientações de segurança para as condições do mar.",
    question: "Vale a pena ir só para fotografar?", answer: "Sim. A escultura pode ser observada da margem, sem entrar no mar.",
  },
  "praia-de-sauacui": {
    name: "Praia de Sauaçui", area: "Litoral norte", address: "Litoral norte de Maceió, acesso pela AL-101 Norte, Maceió – AL", manager: city,
    summary: "A faixa costeira de Sauaçui fica no extremo norte de Maceió.",
    history: "O trecho costeiro de Suaçuí, também grafado Sauaçui, fica na paisagem de povoamentos do extremo norte de Maceió.",
    feature: "Observe a transição entre vegetação à beira da praia, faixa de areia e mar aberto.",
    route: "Planeje o acesso pela AL-101 Norte. Use o nome Suaçuí junto de Maceió ao buscar o ponto e combine o retorno antes de caminhar pela areia.",
    visitTip: "Reserve margem para encontrar o acesso e combinar a volta. É uma parada que funciona melhor num passeio pelo litoral norte do que como desvio da orla urbana.",
    photoTip: "Uma foto lateral da praia mostra melhor a continuidade da vegetação do que um enquadramento voltado só para o horizonte.",
    access: "Escolha um acesso público e confira as condições locais.",
    question: "Como distinguir esta praia de outros pontos do litoral norte?", answer: "Busque Praia de Sauaçui junto de Maceió. O plano de uso público da Costa dos Corais identifica o trecho no município.",
    source: "https://www.gov.br/icmbio/pt-br/centrais-de-conteudo/publicacoes/planos/PUP_APACC_FINAL.pdf",
  },
  "praia-de-jaragua": {
    name: "Praia de Jaraguá", area: "Jaraguá", address: "Orla de Jaraguá, Av. Industrial Cícero Toledo, Maceió – AL", manager: city,
    summary: "Uma parada à beira-mar entre o porto e o patrimônio de Jaraguá.",
    history: "Jaraguá cresceu ligado ao porto de Maceió. A praia preserva a proximidade entre o bairro histórico e a atividade portuária.",
    feature: "A linha do porto e as embarcações compõem uma paisagem distinta das praias de Ponta Verde e Jatiúca.",
    route: "Chegue pelo passeio público da orla de Jaraguá. Para ver o patrimônio do bairro, siga depois em direção à Praça Dois Leões.",
    visitTip: "Visite o passeio à beira-mar antes de entrar nas ruas do bairro. Assim, os antigos armazéns fazem mais sentido depois de ver a relação com o porto.",
    photoTip: "Enquadre juntos o mar e as estruturas do porto para registrar a identidade dessa parte da cidade.",
    access: "Use a orla pública e respeite os limites da área portuária.",
    question: "A praia fica perto dos museus do bairro?", answer: "Sim. Organize o passeio com uma parada na orla e outra no núcleo histórico de Jaraguá.",
  },
  "pontal-da-barra": {
    name: "Pontal da Barra", area: "Orla sul", address: "Rua Alípio Barbosa da Silva, Pontal da Barra, Maceió – AL", manager: "Prefeitura de Maceió nos espaços públicos; oficinas e lojas têm gestão própria.",
    summary: "Visite as rendeiras e faça uma pausa à beira da Lagoa Mundaú.",
    history: "O bairro se desenvolveu junto à Lagoa Mundaú. A Prefeitura identifica o filé como uma tradição transmitida entre gerações e registra o reconhecimento do Pontal da Barra como patrimônio histórico de Alagoas. Na rua de comércio, repare como as oficinas e lojas mantêm a técnica presente no cotidiano do bairro.",
    feature: "Na rua de comércio, observe a trama aberta e as cores do bordado. Na margem, a paisagem muda da escala das lojas para a lagoa.",
    route: "Vá até a rua das rendeiras e percorra o comércio a pé. Encerre a visita na margem da lagoa e combine ali o retorno.",
    visitTip: "Reserve primeiro um tempo para conversar nas lojas de filé. Depois, siga até a lagoa sem precisar voltar pelo comércio para fotografar a paisagem.",
    photoTip: "Use a luz lateral para registrar a textura do filé; peça autorização para fotografar dentro de oficinas.",
    access: "Ruas e margem públicas; confirme os horários de cada oficina ou loja.",
    question: "Por onde começar para ver o bordado filé?", answer: "Pelas lojas e oficinas da Rua Alípio Barbosa da Silva.",
  },
  "piscinas-naturais-de-pajucara": {
    name: "Piscinas Naturais de Pajuçara", area: "Orla urbana", address: "Recifes ao largo da Pajuçara; embarque na Av. Dr. Antônio Gouveia, Maceió – AL", manager: "A Prefeitura de Maceió disciplina o embarque na praia. Cada jangadeiro confirma a operação do passeio.",
    summary: "Os recifes ficam no mar, ao largo da praia de onde saem as jangadas.",
    history: "As jangadas da Pajuçara consolidaram o passeio aos recifes como parte da visita à orla.",
    feature: "Na baixa-mar, os recifes delimitam trechos de água mais rasa. A paisagem depende da maré e das condições do dia.",
    route: "Combine o embarque na Pajuçara. O marcador das piscinas indica o destino no mar; para ir de carro, procure a área de saída das jangadas.",
    visitTip: "Confirme a saída e o retorno antes de marcar almoço ou outro passeio. Se a viagem for cancelada, aproveite o calçadão e o Parque Massay-ó-k.",
    photoTip: "Da jangada, use o litoral como fundo para dar escala à água e aos recifes.",
    access: "Confirme horário, preço e condições com o operador antes de embarcar.",
    question: "Posso seguir de carro até o ponto no mapa?", answer: "O ponto é marítimo. Use a praia da Pajuçara como referência de chegada ao embarque.",
    source: "https://maceio.al.gov.br/noticias/semsc/portaria-estabelece-regras-para-permanencia-de-jangadas-na-orla-maritima",
  },
  "feirinha-de-artesanato-da-pajucara": {
    name: "Feirinha de Artesanato da Pajuçara", area: "Orla urbana", address: "Av. Dr. Antônio Gouveia, Pajuçara, Maceió – AL", manager: "As bancas são operadas pelos respectivos comerciantes; consulte a Prefeitura de Maceió para informações sobre o espaço público.",
    summary: "Conheça as bancas de artesanato que ficam junto ao calçadão da Pajuçara.",
    history: "A feira integra o circuito de artesanato e comércio da orla da Pajuçara.",
    feature: "Observe a sequência de bancas e compare materiais e técnicas, especialmente as peças em tecido.",
    route: "Encontre a Feirinha pelo nome, na Avenida Dr. Antônio Gouveia. Conclua a visita atravessando para o calçadão pelo ponto sinalizado.",
    visitTip: "Percorra o corredor antes de escolher uma banca. Se estiver comparando o filé, olhe a trama de perto e pergunte sobre a técnica.",
    photoTip: "Fotografe a entrada para contextualizar a feira; peça permissão antes de registrar peças de uma banca.",
    access: "Confirme os horários das bancas no dia da visita.",
    question: "Que nome devo colocar no mapa?", answer: "Pesquise Feirinha de Artesanato da Pajuçara para chegar às bancas desta feira.",
    source: "https://maceio.al.gov.br/p/semapa/feiras-e-mercados",
  },
  "memorial-teotonio-vilela": {
    name: "Memorial Teotônio Vilela", area: "Orla urbana", address: "Av. Dr. Antônio Gouveia, orla da Pajuçara, Maceió – AL", manager: "Secretaria de Estado da Cultura de Alagoas (Secult).",
    summary: "Um monumento dedicado ao senador alagoano na orla da Pajuçara.",
    history: "O memorial homenageia o senador alagoano Teotônio Vilela, figura ligada à redemocratização brasileira.",
    feature: "Oscar Niemeyer projetou o memorial. Na visita interna, procure o vitral de Marianne Peretti inspirado na bandeira brasileira e a cronologia da vida de Teotônio Vilela.",
    route: "Siga pelo calçadão da Pajuçara e coloque o nome completo do memorial no mapa. Combine a parada com o passeio pela faixa de areia.",
    visitTip: "Deixe a leitura da placa e a foto do lado de fora como primeira etapa. Se o interior estiver fechado, a parada ainda cabe no roteiro da orla.",
    photoTip: "Afaste-se no passeio para incluir a forma do monumento e o mar no mesmo quadro.",
    access: "A vista externa integra o passeio pela orla. Confira à parte a possibilidade de visita interna.",
    question: "É o mesmo que o Memorial à República?", answer: "São monumentos diferentes. O de Teotônio Vilela fica na Pajuçara; o da República, em Jaraguá.",
  },
  "museu-da-imagem-e-do-som": {
    name: "Museu da Imagem e do Som de Alagoas", area: "Jaraguá", address: "Rua Sá e Albuquerque, 275, em frente à Praça Dois Leões, Jaraguá, Maceió – AL", manager: "Secretaria de Estado da Cultura e Economia Criativa de Alagoas.",
    summary: "A memória audiovisual de Alagoas ocupa um edifício histórico de Jaraguá.",
    history: "Criado em 1981, o MISA começou em dependências do Teatro Deodoro e mudou-se em 1982 para a antiga Recebedoria Central do Estado. A fachada voltada para a Praça Dois Leões é um bom ponto de partida para entender a passagem de edifício administrativo a museu da memória audiovisual alagoana.",
    feature: "Observe a composição da fachada voltada para a praça e a adaptação do prédio administrativo para uso cultural.",
    route: "Comece na Praça Dois Leões, atravesse até o museu e depois siga pela Rua Sá e Albuquerque para comparar os edifícios históricos.",
    visitTip: "Comece pela praça para ver a antiga Recebedoria por inteiro. Consulte a mostra em cartaz antes de reservar tempo para a visita interna.",
    photoTip: "A partir da praça, enquadre a fachada inteira com espaço para a linha do telhado.",
    access: "Consulte a programação da Secult e as regras sobre fotografia no interior.",
    question: "O museu fica no Centro ou em Jaraguá?", answer: "Em Jaraguá, diante da Praça Dois Leões.",
    source: "https://visite.museus.gov.br/instituicoes/museu-da-imagem-e-do-som-de-alagoas/",
  },
  "museu-theo-brandao": {
    name: "Museu Théo Brandão", area: "Centro histórico", address: "Av. da Paz, 1490, Centro, Maceió – AL", manager: "Universidade Federal de Alagoas (UFAL).",
    summary: "Cultura popular alagoana e arquitetura de palacete na Avenida da Paz.",
    history: "O museu reúne coleções ligadas ao folclore e à cultura popular, a partir do trabalho do pesquisador Théo Brandão.",
    feature: "O antigo Palacete dos Machado é parte da visita: pare para ver o relevo dos ornamentos e a proporção das janelas da fachada voltada para a Avenida da Paz.",
    route: "Chegue pela Avenida da Paz. Se seguir para Jaraguá, use a Praça Dois Leões como próxima referência e faça o trecho pela rua sinalizada.",
    visitTip: "Planeje a visita ao acervo separadamente da observação da fachada. Mesmo em dia sem atendimento, os ornamentos externos podem ser vistos da avenida.",
    photoTip: "Uma posição oblíqua na via pública põe em evidência a profundidade dos ornamentos do palacete.",
    access: "Confirme atendimento e programação com a UFAL antes da visita.",
    question: "Qual é o tema do acervo?", answer: "Antropologia, folclore e cultura popular, com destaque para expressões alagoanas.",
    source: "https://museus.al.gov.br/lista-museus",
  },
  "museu-palacio-floriano-peixoto": {
    name: "Museu Palácio Floriano Peixoto", area: "Centro histórico", address: "Praça Marechal Floriano Peixoto, 517, Centro, Maceió – AL", manager: "Secretaria de Estado da Cultura e Economia Criativa de Alagoas.",
    summary: "O antigo palácio do governo compõe a paisagem da Praça dos Martírios.",
    history: "O palácio foi sede do governo alagoano. Sua conversão em museu permite conhecer o edifício e parte da história institucional do estado.",
    feature: "Na visita, compare a solenidade da fachada com o percurso interno da escadaria e dos salões.",
    route: "Use a Praça dos Martírios como referência. Faça primeiro a leitura da fachada e, se houver visita, reserve tempo para a escadaria e os ambientes do palácio.",
    visitTip: "Reserve tempo para observar a praça antes do museu. Na saída, compare o palácio com a escala bem menor da Igreja dos Martírios.",
    photoTip: "Do espaço aberto da praça, use um enquadramento frontal para destacar os eixos da fachada.",
    access: "Consulte a Secult para horários, agendamento e regras de fotografia.",
    question: "MUPA e Palácio dos Martírios são referências ao mesmo endereço?", answer: "Sim. O Museu Palácio Floriano Peixoto ocupa o antigo palácio do governo, na Praça dos Martírios.",
  },
  "museu-pierre-chalita": {
    name: "Museu de Arte Pierre Chalita", area: "Jaraguá", address: "Rua Sá e Albuquerque, Jaraguá, Maceió – AL", manager: "Fundação Pierre Chalita.",
    summary: "Uma coleção de arte para encaixar no passeio pelos edifícios históricos de Jaraguá.",
    history: "A coleção ligada ao artista e colecionador Pierre Chalita reúne peças artísticas de épocas e origens diferentes.",
    feature: "Compare o ritmo da fachada no conjunto da rua com o caráter de galeria dos ambientes internos.",
    route: "Comece pela Rua Sá e Albuquerque. Localize o edifício da fundação e combine a parada com a Praça Dois Leões.",
    visitTip: "Confirme se há visitação antes de montar o dia em torno da coleção. Se o museu estiver fechado, prossiga pela rua em direção à Praça Dois Leões.",
    photoTip: "Fotografe a identificação da fachada junto a um trecho da rua para contextualizar a localização.",
    access: "O cadastro MuseusBr informa que o acervo foi transferido para o Armazém Pierre Chalita, em Jaraguá. Confirme com a Fundação o local exato e a disponibilidade de visita antes de sair.",
    question: "A visita pode ser combinada com o MISA?", answer: "Sim, desde que a programação dos dois equipamentos permita. Ambos fazem parte de um passeio por Jaraguá.",
  },
  "museu-do-comercio": {
    name: "Museu do Comércio de Alagoas", area: "Jaraguá", address: "Associação Comercial de Maceió, Rua Sá e Albuquerque, 467, Jaraguá, Maceió – AL", manager: "Associação Comercial de Maceió.",
    summary: "A história do comércio alagoano contada no edifício da Associação Comercial.",
    history: "O museu apresenta a memória do comércio alagoano no edifício da Associação Comercial, em um bairro que cresceu junto ao porto.",
    feature: "O salão nobre contrasta com os antigos armazéns da rua. Compare a linguagem representativa do edifício com as fachadas de trabalho do entorno.",
    route: "Procure o edifício da Associação Comercial. Caminhe a partir da Praça Dois Leões pela Rua Sá e Albuquerque.",
    visitTip: "Veja os armazéns da rua antes de visitar o salão nobre. A comparação ajuda a entender os diferentes usos das construções no bairro.",
    photoTip: "Se houver permissão para fotografar no salão, procure um ângulo que alinhe as paredes e destaque os ornamentos.",
    access: "Confirme com a Associação Comercial se há visitação na data escolhida.",
    question: "Que endereço devo buscar?", answer: "Use Museu do Comércio de Alagoas ou Associação Comercial de Maceió, em Jaraguá.",
  },
  "memorial-a-republica": {
    name: "Memorial à República", area: "Jaraguá", address: "Av. da Paz, Jaraguá, Maceió – AL", manager: "Equipamento cultural ligado ao Governo de Alagoas.",
    summary: "Bandeiras e memória republicana no trecho de orla de Jaraguá.",
    history: "Inaugurado em 15 de novembro de 2005, o memorial homenageia os marechais alagoanos Deodoro da Fonseca e Floriano Peixoto e remete à Proclamação da República.",
    feature: "A bandeira e a implantação do conjunto junto à orla são os elementos que ajudam a reconhecer o local.",
    route: "Chegue pela Avenida da Paz e veja primeiro o conjunto a partir do passeio. Siga depois em direção ao núcleo histórico de Jaraguá.",
    visitTip: "Combine com o passeio à beira-mar e observe o conjunto de mais de um ângulo. Confirme separadamente se haverá acesso à parte interna.",
    photoTip: "Inclua a bandeira e a base do conjunto para mostrar a escala do monumento.",
    access: "Consulte os canais culturais de Alagoas para eventual visita interna.",
    question: "O memorial fica na Praça dos Martírios?", answer: "Fica na Avenida da Paz, em Jaraguá. Na Praça dos Martírios está o Museu Palácio Floriano Peixoto.",
  },
  "mirante-de-sao-goncalo": {
    name: "Mirante de São Gonçalo", area: "Bairro do Farol", address: "Praça Rosalvo Ribeiro, Farol, Maceió – AL", manager: "Prefeitura de Maceió · Rota dos Mirantes do IPLAM.",
    summary: "Um ponto elevado para ler a relação entre o Centro e a faixa costeira.",
    history: "O ponto integra a Rota dos Mirantes de Maceió. Sua posição elevada ajuda a entender o desnível entre o Farol e as áreas baixas da cidade.",
    feature: "Observe como os telhados e as ruas se sobrepõem até a faixa litorânea.",
    route: "Chegue ao endereço no bairro do Farol e faça a observação a partir da praça. Combine o percurso até o Centro antes de descer a encosta.",
    visitTip: "Tome a praça como destino e pare para localizar o litoral antes de descer ao Centro. Se a subida ou a descida for inconveniente, combine carro para o trecho.",
    photoTip: "Use um enquadramento horizontal em camadas, com a cidade em primeiro plano e o litoral no fundo.",
    access: "Mirante urbano; respeite os limites do passeio e a sinalização.",
    question: "Onde fica o mirante?", answer: "No bairro do Farol, na Praça Rosalvo Ribeiro.",
    source: lookout,
  },
  "mirante-santa-terezinha": {
    name: "Mirante Santa Terezinha", area: "Bairro do Farol", address: "Bairro do Farol, Maceió – AL", manager: "Prefeitura de Maceió · Rota dos Mirantes do IPLAM.",
    summary: "Um mirante do Farol voltado para a paisagem urbana e lagunar.",
    history: "O mirante integra o circuito municipal de pontos de observação. O desnível da cidade diferencia a vista daqui da obtida no passeio à beira-mar.",
    feature: "Olhando da borda da praça, compare o desenho das ruas nas partes altas e baixas.",
    route: "Use o nome completo do mirante no aplicativo de navegação. No bairro do Farol, confira a inclinação do percurso antes de optar pela caminhada.",
    visitTip: "Confira as condições de acesso antes de sair. Em dia de boa visibilidade, compare o perfil da cidade com a direção das lagoas.",
    photoTip: "Enquadre parte da mureta para dar referência de altura à paisagem.",
    access: "A Prefeitura anunciou obras de revitalização. Consulte a situação do acesso antes de sair.",
    question: "É o mesmo ponto que São Gonçalo?", answer: "São mirantes distintos da rota municipal. Use o marcador próprio de Santa Terezinha.",
    source: "https://maceio.al.gov.br/noticias/seminfra/mirante-santa-terezinha-chega-a-reta-final-das-obras-de-revitalizacao-no-farol",
  },
  "praca-dois-leoes": {
    name: "Praça Dois Leões", area: "Jaraguá", address: "Rua Sá e Albuquerque, em frente ao MISA, Jaraguá, Maceió – AL", manager: city,
    summary: "A praça articula o passeio entre as esculturas e os edifícios históricos de Jaraguá.",
    history: "A praça reúne edifícios ligados ao antigo núcleo comercial e administrativo de Jaraguá.",
    feature: "Os leões da praça dão a referência imediata do lugar. Compare a escala do jardim com a fachada do MISA.",
    route: "Comece junto às esculturas. Contorne o jardim e veja o edifício da antiga Recebedoria antes de seguir pela rua.",
    visitTip: "Comece junto aos leões, contorne a praça e pare diante do MISA. É um bom ponto de encontro para quem vai seguir pela Rua Sá e Albuquerque.",
    photoTip: "Use um dos leões em primeiro plano e o museu ao fundo para fixar a relação entre praça e edifício.",
    access: "Praça pública; a visita ao MISA tem programação própria.",
    question: "Qual museu fica em frente à praça?", answer: "O Museu da Imagem e do Som de Alagoas.",
    source: "https://visite.museus.gov.br/instituicoes/museu-da-imagem-e-do-som-de-alagoas/",
  },
  "praca-dom-pedro-ii": {
    name: "Praça Dom Pedro II", area: "Centro histórico", address: "Praça Dom Pedro II, Centro, Maceió – AL", manager: city,
    summary: "A praça aos pés da catedral reúne referências da memória imperial de Maceió.",
    history: "A praça forma o adro urbano da Catedral Metropolitana e carrega a memória imperial no nome e no monumento.",
    feature: "A composição da praça e os degraus da catedral criam uma sequência visual entre rua, adro e fachada.",
    route: "Entre pela parte baixa da praça e circule até a frente da catedral. Continue a pé ao núcleo comercial do Centro.",
    visitTip: "Faça a leitura do adro da parte baixa para a parte alta. Caso não queira subir os degraus, já é possível ver a relação entre o monumento e a catedral de baixo.",
    photoTip: "Deixe o monumento de Dom Pedro II ligeiramente de lado para manter visíveis os degraus e a fachada ao fundo.",
    access: "Praça pública. Consulte à parte o acesso ao interior da catedral.",
    question: "Qual é a referência mais fácil para encontrar a praça?", answer: "A Catedral Metropolitana de Maceió, que domina a frente da praça.",
  },
  "praca-sinimbu": {
    name: "Praça Visconde de Sinimbu", area: "Centro histórico", address: "Praça Visconde de Sinimbu, Rua do Imperador, Centro, Maceió – AL", manager: city,
    summary: "Um espaço do Centro emoldurado por imóveis de diferentes épocas.",
    history: "A praça, anteriormente chamada Praça Euclides Malta, é uma referência do traçado antigo do Centro.",
    feature: "As frentes históricas no entorno ajudam a reconhecer a escala do antigo bairro administrativo.",
    route: "Use a Rua do Imperador para chegar. Contorne a praça e identifique o antigo edifício da companhia de força e luz.",
    visitTip: "Contorne primeiro o espaço aberto e procure depois a fachada da Pinacoteca. Consulte a agenda se quiser fazer as duas visitas no mesmo dia.",
    photoTip: "Inclua árvores ou bordas da praça no quadro para mostrar a relação com os edifícios.",
    access: "Praça pública; confira separadamente a programação da Pinacoteca.",
    question: "Posso combinar com a Pinacoteca?", answer: "Sim. A Pinacoteca ocupa um edifício histórico no entorno da praça.",
  },
  "catedral-metropolitana-de-maceio": {
    name: "Catedral Metropolitana de Maceió", area: "Centro histórico", address: "Praça Dom Pedro II, Centro, Maceió – AL", manager: "Arquidiocese de Maceió.",
    summary: "A Catedral de Nossa Senhora dos Prazeres se destaca acima da Praça Dom Pedro II.",
    history: "A Catedral de Nossa Senhora dos Prazeres, inaugurada em 1859, é uma referência religiosa e urbana do centro de Maceió.",
    feature: "A composição neoclássica da fachada se destaca no alto da praça. No interior, o altar organiza a perspectiva da nave.",
    route: "Comece na Praça Dom Pedro II e suba pelo acesso da catedral. Se houver celebração, visite a praça e volte em outro horário.",
    visitTip: "Observe a subida e a fachada a partir da praça. Deixe o interior para quando houver acesso e evite circular durante as celebrações.",
    photoTip: "Fotografe da parte baixa da praça para guardar a relação entre escadaria e fachada.",
    access: "Consulte a paróquia sobre horários e regras de visita durante celebrações.",
    question: "Qual é a referência para o desembarque?", answer: "Peça a Catedral Metropolitana na Praça Dom Pedro II, no Centro.",
  },
  "teatro-deodoro": {
    name: "Teatro Deodoro", area: "Centro histórico", address: "Rua Barão de Maceió, s/n, Praça Marechal Deodoro, Centro, Maceió – AL", manager: "Diretoria de Teatros do Estado de Alagoas (Diteal).",
    summary: "Um teatro histórico do Centro para observar da praça ou conhecer em dia de espetáculo.",
    history: "A construção do Teatro Deodoro começou em 1905 e a inauguração ocorreu em 21 de novembro de 1910, durante as comemorações da Proclamação da República. Da praça, observe a composição simétrica; se entrar para um espetáculo, compare a escala da fachada com a sala e seu lustre.",
    feature: "Observe a simetria da fachada. Em caso de visita interna, repare na relação entre o lustre, o teto e a sala de espetáculos.",
    route: "Vá à Praça Marechal Deodoro. Faça a leitura da fachada e confirme na bilheteria as condições de entrada para o espetáculo.",
    visitTip: "Se tiver ingresso, chegue com antecedência para ver a fachada ainda da praça. Confira o endereço da entrada indicado pela produção.",
    photoTip: "Para uma foto da fachada, atravesse para o lado aberto da praça; no interior, siga as regras da produção.",
    access: "Horário e tarifa variam conforme a programação. Consulte a Diteal.",
    question: "Posso entrar sem ingresso?", answer: "A entrada depende da programação e das modalidades de visita oferecidas pela Diteal.",
    source: "https://diteal.al.gov.br/",
  },
  "igreja-do-livramento": {
    name: "Igreja de Nossa Senhora do Livramento", area: "Centro histórico", address: "Rua do Comércio, Centro, Maceió – AL", manager: "Comunidade católica local, na Arquidiocese de Maceió.",
    summary: "A fachada da igreja é uma parada no percurso comercial do Centro.",
    history: "A igreja integra o núcleo religioso e comercial do Centro, em uma rua que concentra parte da memória urbana da cidade.",
    feature: "Observe de perto a relação do campanário e das aberturas ornamentadas com a escala das lojas da rua.",
    route: "Localize a igreja pela Rua do Comércio, a pé a partir do núcleo da catedral. Faça uma parada curta para ver a fachada.",
    visitTip: "Escolha um momento em que possa observar os detalhes da fachada sem bloquear a calçada. Se houver celebração, siga o passeio pelo comércio e retorne depois.",
    photoTip: "Caso a rua esteja movimentada, prefira fotografar os detalhes superiores da fachada sem bloquear o passeio.",
    access: "Consulte a comunidade sobre a abertura e respeite as celebrações.",
    question: "É a igreja em frente ao palácio?", answer: "A Igreja do Livramento está na Rua do Comércio. A Igreja dos Martírios fica no entorno do palácio.",
  },
  "igreja-dos-martirios": {
    name: "Igreja Bom Jesus dos Martírios", area: "Centro histórico", address: "Rua do Sol, em frente ao Palácio Floriano Peixoto, Praça dos Martírios, Centro, Maceió – AL", manager: "Comunidade católica local, na Arquidiocese de Maceió.",
    summary: "A igreja que dá nome à praça forma um conjunto com o antigo palácio do governo.",
    history: "A igreja dá nome à Praça dos Martírios e compõe o conjunto histórico que inclui o antigo palácio do governo.",
    feature: "Procure o revestimento decorativo da fachada e compare sua escala com a do palácio na mesma praça.",
    route: "Chegue à Praça dos Martírios pelo lado do museu. Circule pela praça para encontrar a igreja e observar as duas fachadas.",
    visitTip: "Veja a igreja e o palácio antes de entrar em qualquer edifício. O contraste de tamanho e dos acabamentos é mais perceptível do lado aberto da praça.",
    photoTip: "Enquadre a fachada por inteiro e depois aproxime o enquadramento para registrar o revestimento.",
    access: "A fachada é visível da praça; confirme a abertura com a comunidade.",
    question: "Quais lugares posso visitar no mesmo percurso?", answer: "A igreja e o Museu Palácio Floriano Peixoto compartilham o entorno da Praça dos Martírios.",
  },
  "rua-sa-e-albuquerque": {
    name: "Rua Sá e Albuquerque", area: "Jaraguá", address: "Rua Sá e Albuquerque, Jaraguá, Maceió – AL", manager: "A Prefeitura de Maceió responde pela via pública; cada imóvel tem administração própria.",
    summary: "Um percurso a pé entre antigos armazéns, edifícios comerciais e museus.",
    history: "Antiga Rua da Alfândega, a via registra o passado comercial e portuário de Jaraguá em edifícios de diferentes usos.",
    feature: "Compare os vãos e portões dos antigos armazéns com as fachadas de representação institucional e os museus adaptados.",
    route: "Comece na Praça Dois Leões, passe pelo MISA e percorra os quarteirões seguintes para observar a Associação Comercial e os antigos armazéns.",
    visitTip: "Caminhe devagar pelos quarteirões próximos à praça. Escolha dois ou três edifícios para observar de perto e deixe o restante para uma segunda volta.",
    photoTip: "Uma perspectiva ao longo da calçada mostra a sequência das fachadas; fique no passeio ao fotografar.",
    access: "Via pública; a programação de cada museu ou imóvel é independente.",
    question: "Qual ponto serve de início?", answer: "A Praça Dois Leões é uma referência clara para começar a caminhada pela rua.",
    source: "https://visite.museus.gov.br/instituicoes/museu-da-imagem-e-do-som-de-alagoas/",
  },
  "pinacoteca-universitaria": {
    name: "Pinacoteca Universitária da UFAL", area: "Centro histórico", address: "Rua Roberto Ferreira, s/n, Praça Sinimbu, Centro, Maceió – AL, CEP 57025-590", manager: "Universidade Federal de Alagoas (UFAL).",
    summary: "Um edifício reaproveitado para exposições, no entorno da Praça Sinimbu.",
    history: "A Pinacoteca universitária ocupa o edifício associado à antiga companhia de força e luz, reaproveitado para atividades culturais.",
    feature: "A fachada faz parte do conjunto da praça. Observe a diferença entre a aparência externa do edifício e a função contemporânea das galerias.",
    route: "Chegue pela Praça Visconde de Sinimbu e identifique a entrada da Pinacoteca antes de seguir para as outras paradas do Centro.",
    visitTip: "Consulte a mostra em cartaz e combine a galeria com uma volta pela praça. Faça a foto do edifício antes de entrar.",
    photoTip: "Use o espaço da praça para enquadrar a fachada e parte do entorno.",
    access: "Confirme com a UFAL a programação e a política de visitação.",
    question: "Como descubro quais exposições estão abertas?", answer: "Confira a agenda da Pinacoteca Universitária nos canais da UFAL.",
    source: "https://ufal.br/",
  },
  "monumento-almirante-tamandare": {
    name: "Monumento ao Almirante Tamandaré", area: "Orla urbana", address: "Orla de Ponta Verde, Maceió – AL", manager: "Monumento inaugurado com participação da Marinha do Brasil, na orla pública de Maceió.",
    summary: "Uma homenagem naval no passeio público de Ponta Verde.",
    history: "A homenagem a Joaquim Marques Lisboa remete à memória naval brasileira. O registro fotográfico da Marinha documenta a inauguração do monumento em 2022.",
    feature: "Observe como a escultura e sua base marcam uma parada no passeio da orla.",
    route: "Use o nome completo do monumento no mapa para localizar este ponto antes de seguir para o Marco dos Corais.",
    visitTip: "Leia a placa e observe a escultura de frente. Se estiver seguindo para o Marco dos Corais, use esta parada como parte da caminhada pela orla.",
    photoTip: "Enquadre a escultura e a base juntas; a linha do passeio ajuda a situar a homenagem.",
    access: "Observação externa a partir da orla pública.",
    question: "O monumento é o farol?", answer: "O monumento é uma homenagem na orla. A torre de sinalização náutica está ao largo da Praia de Ponta Verde.",
    source: "https://www.marinha.mil.br/cpal/node/321",
  },
  "porto-de-maceio": {
    name: "Porto de Maceió visto de Jaraguá", area: "Jaraguá", address: "Orla de Jaraguá, junto ao Porto de Maceió, Maceió – AL", manager: "A área operacional é administrada pela autoridade portuária. Este roteiro usa somente os pontos de observação na orla pública.",
    summary: "Uma vista externa sobre a paisagem portuária que moldou Jaraguá.",
    history: "A atividade portuária moldou o bairro de Jaraguá e explica a concentração de antigos armazéns e edifícios comerciais no entorno.",
    feature: "Do passeio público, compare a escala de navios e cais com os edifícios menores do bairro histórico.",
    route: "Vá à orla de Jaraguá e observe o porto de fora dos portões. Siga depois pela Rua Sá e Albuquerque para ver o patrimônio ligado ao comércio.",
    visitTip: "Observe o cais do passeio público e deixe o núcleo histórico para a segunda parte. Assim você pode comparar a escala do porto com a dos antigos armazéns.",
    photoTip: "Use um enquadramento aberto com o cais em ângulo para mostrar a ligação entre porto e cidade.",
    access: "Não entre em áreas operacionais. Observe as demarcações do espaço público.",
    question: "O mapa leva à entrada da área restrita?", answer: "O marcador identifica o porto. Para este roteiro, permaneça na orla pública de Jaraguá.",
    source: "https://www.portodemaceio.com.br/",
  },
  "praca-centenario": {
    name: "Praça Centenário", area: "Bairro do Farol", address: "Av. Fernandes Lima, Farol, Maceió – AL", manager: "Prefeitura de Maceió · Parque Centenário.",
    summary: "Um espaço arborizado no bairro do Farol, junto à Avenida Fernandes Lima.",
    history: "O antigo campo do Alto do Jacutinga, depois Praça Jonas Montenegro, recebeu o nome atual em referência ao centenário da cidade em 1939.",
    feature: "As áreas abertas e arborizadas contrastam com a escala e o tráfego da Avenida Fernandes Lima.",
    route: "Chegue pela Fernandes Lima, use a travessia sinalizada e percorra as áreas de sombra no interior da praça.",
    visitTip: "Faça a travessia nos pontos sinalizados. Dentro da praça, escolha um trecho sombreado para a pausa antes de continuar pelo Farol.",
    photoTip: "Use a borda arborizada como moldura e mantenha a avenida no fundo para mostrar o contraste urbano.",
    access: "Praça pública; confira avisos municipais sobre eventos e obras.",
    question: "Em que bairro está a praça?", answer: "No Farol, no eixo da Avenida Fernandes Lima.",
    source: "https://maceio.al.gov.br/p/iplan/parque-centenario",
  },
  "bairro-historico-de-jaragua": {
    name: "Bairro histórico de Jaraguá", area: "Jaraguá", address: "Núcleo histórico de Jaraguá, Maceió – AL", manager: "A Prefeitura de Maceió atua nas ruas e na orla; cada bem cultural tem gestão específica.",
    summary: "O percurso reúne a orla portuária, antigos armazéns e praças de Jaraguá.",
    history: "O bairro cresceu ligado às atividades do porto. As construções comerciais e institucionais registram a circulação de mercadorias e a formação da cidade.",
    feature: "Observe a sequência de escalas, dos armazéns próximos ao porto até os edifícios cívicos reunidos em torno da Praça Dois Leões.",
    route: "Comece no Passeio do Porto. Entre no bairro pela Rua Sá e Albuquerque, faça uma parada na Praça Dois Leões e prossiga até os museus abertos no dia.",
    visitTip: "Se tiver pouco tempo, vá do Passeio do Porto à Praça Dois Leões. Com mais tempo e museus abertos, reserve uma etapa específica para as visitas internas.",
    photoTip: "Combine um quadro aberto da orla com detalhes de portas e letreiros históricos no interior do bairro.",
    access: "Ruas e passeio público. Museus, edifícios e áreas portuárias têm regras de acesso próprias.",
    question: "Qual ponto é melhor para iniciar o passeio de carro?", answer: "Use a Praça Dois Leões como ponto de desembarque se quiser começar pelos museus.",
    source: "https://maceio.al.gov.br/noticias/gp/jhc-acompanha-reta-final-das-obras-do-passeio-do-porto-e-exalta-novo-cartao-postal-da-cidade",
  },
  "pavilhao-do-artesanato": {
    name: "Pavilhão do Artesanato", area: "Orla urbana", address: "Av. Dr. Antônio Gouveia, 1447, Pajuçara, Maceió – AL", manager: "Lojas e serviços são operados pelos comerciantes do pavilhão.",
    summary: "Um edifício de lojas de artesanato voltado para a orla da Pajuçara.",
    history: "O pavilhão integra o circuito de artesanato da Pajuçara e reúne lojas em um edifício voltado para o passeio da orla.",
    feature: "A entrada envidraçada e a escadaria distinguem o pavilhão da Feirinha. No interior, compare peças de bordado filé, cerâmica e fibras.",
    route: "Desembarque no número 1447 e identifique a fachada com o nome do pavilhão. Saia pelo mesmo lado da avenida antes de atravessar para a orla.",
    visitTip: "Confira o nome na fachada antes de entrar. Se quiser comparar com a Feirinha, visite os dois pontos e use o calçadão para descansar entre as paradas.",
    photoTip: "Na entrada, enquadre a escadaria e a identificação do edifício; dentro das lojas, peça permissão.",
    access: "Consulte os horários das lojas e os acessos disponíveis no dia da visita.",
    question: "É a mesma parada que a Feirinha de Artesanato?", answer: "São pontos diferentes na mesma avenida. Use Pavilhão do Artesanato e o número 1447 para localizar este edifício.",
    source: "https://fugida.com.br/lugar/mcz-pavilhao-artesanato/",
  },
} satisfies Record<string, Place>;

export type MaceioPlaceSlug = keyof typeof places;

const visitingSources: Partial<Record<MaceioPlaceSlug, string[]>> = {
  "pontal-da-barra": ["https://maceio.al.gov.br/p/superintendencias/pontal-da-barra"],
  "igreja-dos-martirios": [
    "https://visitealagoas.com.br/atividades/igreja-bom-jesus-dos-martirios"
  ],
  "museu-do-comercio": [
    "https://alagoasdigital.al.gov.br/orgao/14"
  ],
  "teatro-deodoro": [
    "https://pesquisaescolar.fundaj.gov.br/pt-br/artigo/teatro-deodoro-maceio-al/",
    "https://www.diteal.al.gov.br/perguntas-frequentes"
  ],
  "pinacoteca-universitaria": [
    "https://pinacoteca.ufal.br/visita/horario-de-funcionamento",
    "https://pinacoteca.ufal.br/visita/como-chegar"
  ],
  "museu-theo-brandao": [
    "https://mtb.ufal.br/contatos"
  ],
  "memorial-teotonio-vilela": [
    "https://cultura.al.gov.br/equipamentos/memorial-teotonio-vilela"
  ],
  "memorial-a-republica": [
    "https://cultura.al.gov.br/equipamentos/memorial-a-republica"
  ],
  "museu-pierre-chalita": [
    "https://cadastro.museus.gov.br/museus/museu-de-arte-sacra-pierre-chalita-mapc/"
  ],
  "museu-da-imagem-e-do-som": [
    "https://www.misa.al.gov.br/visite-o-misa",
    "https://alagoasdigital.al.gov.br/servico/347"
  ]
};

function makeTopic(slug: MaceioPlaceSlug, place: Place): TopicContent {
  const query = `${place.name}, ${place.address}`;
  const photo = maceioPhotos[slug];
  return {
    metaTitle: `${place.name} em Maceió: visita, fotos e mapa`,
    metaDescription: place.feature,
    title: place.name,
    eyebrow: place.area,
    intro: place.summary,
    visitorInfo: {
      heading: `Sobre ${place.name}`,
      management: place.manager,
      background: place.history,
      type: place.area,
      transport: place.route,
      access: place.access,
    },
    location: {
      address: place.address,
      query,
      ...(slug === "porto-de-maceio" ? { accessQuery: "Passeio do Porto, Jaraguá, Maceió, AL" } : {}),
    },
    additionalPhotos: extraMaceioPhotos[slug],
    photo: { ...photo, alt: place.name, credit: photo.credit ?? "Wikimedia Commons · ficha da fotografia" },
    reviewPlaces: [{ label: place.name, query }],
    sections: [
      { id: "o-que-observar", title: "O que observar", blocks: [{ type: "p", text: place.feature }] },
      { id: "planeje-a-visita", title: "Planeje a visita", blocks: [{ type: "p", text: place.visitTip }] },
      { id: "fotos", title: "Onde fotografar", blocks: [{ type: "p", text: place.photoTip }] },
    ],
    faq: [{ question: place.question, answer: place.answer }],
    related: ["pontos-turisticos-maceio", "orla-pajucara-ponta-verde"],
    sources: [
      { label: "Informações de referência", href: place.source ?? (place.area === "Centro histórico" ? heritage : tourism) },
      ...(visitingSources[slug] ?? []).map((href) => ({
        label: "Canal de informações ao visitante",
        href,
      })),
      ...(slug === "museu-palacio-floriano-peixoto" ? [
        { label: "Horários e endereço do museu", href: "https://visite.museus.gov.br/instituicoes/museu-palacio-floriano-peixoto/" },
        { label: "Visita gratuita pela Secult", href: "https://alagoasdigital.al.gov.br/servico/3131" },
      ] : []),
    ],
  };
}

export const maceioPlaces = Object.fromEntries(
  (Object.keys(places) as MaceioPlaceSlug[]).map((slug) => [slug, makeTopic(slug, places[slug])]),
) as Record<MaceioPlaceSlug, TopicContent>;
