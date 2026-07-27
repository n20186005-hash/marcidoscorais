import type { Lang } from "../config";

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

type DocKey = "privacy" | "terms" | "cookies";

export const legal: Record<DocKey, Record<Lang, LegalDoc>> = {
  privacy: {
    pt: {
      title: "Política de Privacidade",
      updated: "Última atualização: 27 de julho de 2026",
      intro:
        "Este guia é independente e informativo. Respeitamos sua privacidade e explicamos como tratamos dados.",
      sections: [
        {
          heading: "Coleta de dados",
          body: "Não coletamos dados pessoais diretamente. Utilizamos ferramentas de analytics para entender o uso do site de forma agregada.",
        },
        {
          heading: "Google Analytics",
          body: "Este site usa o **Google Analytics** para medir o tráfego. Os dados são anonimizados e tratados conforme a política do Google. Você pode desativar o analytics pelo seu navegador.",
        },
        {
          heading: "Cookies",
          body: "Usamos cookies essenciais e de medição. Veja a página de **Cookies** para gerenciar suas preferências.",
        },
        {
          heading: "Seus direitos",
          body: "Você pode solicitar esclarecimentos ou a exclusão de dados sob a LGPD entrando em contato conosco.",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      updated: "Last updated: July 27, 2026",
      intro:
        "This is an independent, informational guide. We respect your privacy and explain how data is handled.",
      sections: [
        {
          heading: "Data collection",
          body: "We do not collect personal data directly. We use analytics tools to understand aggregated site usage.",
        },
        {
          heading: "Google Analytics",
          body: "This site uses **Google Analytics** to measure traffic. Data is anonymized and handled per Google's policy. You can disable analytics in your browser.",
        },
        {
          heading: "Cookies",
          body: "We use essential and measurement cookies. See the **Cookies** page to manage your preferences.",
        },
        {
          heading: "Your rights",
          body: "You may request clarification or data deletion under applicable law by contacting us.",
        },
      ],
    },
    zh: {
      title: "隐私政策",
      updated: "最后更新：2026 年 7 月 27 日",
      intro: "本指南为独立的信息性站点。我们尊重您的隐私，并说明数据处理方式。",
      sections: [
        {
          heading: "数据收集",
          body: "我们不直接收集个人数据。我们使用分析工具了解聚合层面的使用情况。",
        },
        {
          heading: "Google Analytics",
          body: "本站使用 **Google Analytics** 衡量流量。数据经匿名化处理，并遵循 Google 的政策。您可在浏览器中停用分析。",
        },
        {
          heading: "Cookie",
          body: "我们使用必要与分析类 Cookie。请参阅 **Cookie** 页面管理您的偏好。",
        },
        {
          heading: "您的权利",
          body: "您可联系我们，依法要求说明或删除数据。",
        },
      ],
    },
  },

  terms: {
    pt: {
      title: "Termos de Uso",
      updated: "Última atualização: 27 de julho de 2026",
      intro:
        "Ao usar este site, você concorda com os termos abaixo.",
      sections: [
        {
          heading: "Precisão do conteúdo",
          body: "O conteúdo é informativo e pode mudar. Não garantimos disponibilidade ou condições do local em tempo real.",
        },
        {
          heading: "Responsabilidade",
          body: "Não nos responsabilizamos por decisões tomadas com base neste guia. Planeje sua visita com fontes oficiais.",
        },
        {
          heading: "Links externos",
          body: "Podemos linkar sites de terceiros. Não controlamos seu conteúdo ou políticas.",
        },
        {
          heading: "Alterações",
          body: "Estes termos podem ser atualizados a qualquer momento nesta página.",
        },
      ],
    },
    en: {
      title: "Terms of Use",
      updated: "Last updated: July 27, 2026",
      intro: "By using this site, you agree to the terms below.",
      sections: [
        {
          heading: "Content accuracy",
          body: "Content is informational and may change. We do not guarantee real-time availability or site conditions.",
        },
        {
          heading: "Liability",
          body: "We are not liable for decisions made based on this guide. Plan your visit using official sources.",
        },
        {
          heading: "External links",
          body: "We may link to third-party sites. We do not control their content or policies.",
        },
        {
          heading: "Changes",
          body: "These terms may be updated at any time on this page.",
        },
      ],
    },
    zh: {
      title: "使用条款",
      updated: "最后更新：2026 年 7 月 27 日",
      intro: "使用本站点即表示您同意以下条款。",
      sections: [
        {
          heading: "内容准确性",
          body: "内容为信息性，可能变更。我们不保证实时可用性 or 现场状况。",
        },
        {
          heading: "责任",
          body: "对于依据本指南所做的决策，我们不承担责任。请使用官方来源规划行程。",
        },
        {
          heading: "外部链接",
          body: "我们可能链接第三方站点，但不控制其内容或政策。",
        },
        {
          heading: "变更",
          body: "本条款可随时在本页更新。",
        },
      ],
    },
  },

  cookies: {
    pt: {
      title: "Configurações de Cookies",
      updated: "Última atualização: 27 de julho de 2026",
      intro: "Usamos cookies para melhorar sua experiência.",
      sections: [
        {
          heading: "O que são cookies",
          body: "Cookies são pequenos arquivos armazenados no seu navegador para lembrar preferências e medir o tráfego.",
        },
        {
          heading: "Categorias",
          body: "**Essenciais**: necessários para o funcionamento. **Medição**: Google Analytics (opcional, pode ser desativado).",
        },
        {
          heading: "Gerenciamento",
          body: "Você pode bloquear ou apagar cookies nas configurações do navegador. Algumas funções podem ser afetadas.",
        },
      ],
    },
    en: {
      title: "Cookie Settings",
      updated: "Last updated: July 27, 2026",
      intro: "We use cookies to improve your experience.",
      sections: [
        {
          heading: "What are cookies",
          body: "Cookies are small files stored in your browser to remember preferences and measure traffic.",
        },
        {
          heading: "Categories",
          body: "**Essential**: required for the site to work. **Measurement**: Google Analytics (optional, can be disabled).",
        },
        {
          heading: "Management",
          body: "You can block or delete cookies in your browser settings. Some functions may be affected.",
        },
      ],
    },
    zh: {
      title: "Cookie 设置",
      updated: "最后更新：2026 年 7 月 27 日",
      intro: "我们使用 Cookie 来改善您的体验。",
      sections: [
        {
          heading: "什么是 Cookie",
          body: "Cookie 是存储在浏览器中的小文件，用于记住偏好并衡量流量。",
        },
        {
          heading: "分类",
          body: "**必要**：站点运行所需。**衡量**：Google Analytics（可选，可关闭）。",
        },
        {
          heading: "管理",
          body: "您可在浏览器设置中阻止或删除 Cookie。部分功能可能受影响。",
        },
      ],
    },
  },
};
