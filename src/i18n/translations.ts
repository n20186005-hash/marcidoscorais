export type Locale = "zh" | "en" | "pt";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type SeasonInfo = { name: string; description: string };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  curiosities: { title: string; content: string };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  bestTime: { title: string; intro: string; seasons: SeasonInfo[] };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; cycling?: { title: string; content: string }; localTransport?: { title: string; description?: string; content?: string; steps?: string[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "历史沿革", architecture: "景点特色", monuments: "周边玩乐", visiting: "游览信息", transportation: "交通指南", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tags: ["海滨地标", "热带风光", "马塞约必游"], tagline: "巴西 · 阿拉戈斯州 · 马塞约", title: "Marco dos Corais", subtitle: "Marco dos Corais · 珊瑚地标 · 海滨胜地 · 热带风情", cta: "探索Marco dos Corais" },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "景点介绍与发展",
      intro: `**Marco dos Corais** 位于巴西阿拉戈斯州首府马塞约的海滨区域。这是一个著名的海滨旅游地标，以其美丽的珊瑚礁和清澈的海水而闻名。\n\n**景点特色**：Marco dos Corais 是马塞约重要的海滨旅游景点，拥有壮丽的海景和丰富的海洋生态。这里是欣赏巴西海岸线美景、体验热带海滨风情的理想之地。\n\n**旅游意义**：作为马塞约的重要旅游地标，Marco dos Corais 吸引了大量国内外游客。这里不仅是观赏海景的好去处，也是了解巴西海滨文化的重要窗口。`
    },
    curiosities: {
      title: "隐藏的故事：Marco dos Corais 的趣味知识",
      content: `**海滨胜地**：Marco dos Corais 是马塞约最受欢迎的海滨景点之一。这里海水清澈，珊瑚礁丰富，是体验巴西海滨风情的绝佳地点。\n\n**地理位置**：景点位于马塞约的海滨区域，地理位置优越，交通便利，是游客探索阿拉戈斯州海岸线的理想起点。\n\n**旅游发展**：随着马塞约旅游业的发展，Marco dos Corais 逐渐成为该市最重要的旅游名片之一，吸引了越来越多的国内外游客。`
    },
    architecture: {
      title: "地标特色与结构设计",
      intro: "Marco dos Corais 是一个精心维护的海滨旅游地标，为游客提供了舒适的海滨观光体验。景区内设有观景平台、休息区和旅游设施。",
      specs: {
        structure: { title: "地标结构", content: "Marco dos Corais 地标结构坚固且富有热带风情。景区沿海岸线布局，游客可以在这里悠闲漫步，欣赏大海美景。" },
        design: { title: "设计特色", content: "景区的设计充分考虑了游客的体验，设有观景平台、休息区和旅游设施。在热带风光的映衬下，景区更显迷人魅力。" },
        optics: { title: "观赏体验", content: "从 Marco dos Corais 可以欣赏到壮丽的海景和海岸线。白天海水清澈蔚蓝，夜晚星光璀璨，为游客提供全天候的视觉享受。" }
      },
      plaque: {
        title: "景点基本信息",
        items: [
          { label: "名称", value: "Marco dos Corais（珊瑚地标）" },
          { label: "位置", value: "马塞约市，阿拉戈斯州，巴西" },
          { label: "开放时间", value: "全天开放" },
          { label: "类型", value: "海滨地标、旅游景点" },
          { label: "特色", value: "海景观赏、海滨风光" },
          { label: "推荐游览", value: "全天皆可，傍晚时分尤佳" }
        ]
      }
    },
    monuments: {
      title: "周边景点与特色",
      intro: "Marco dos Corais 周边有多个值得一游的景点和特色体验，让您的马塞约之行更加丰富多彩。",
      items: [
        { name: "海滨观光", description: "Marco dos Corais 沿线有美丽的海岸线和海滩。这里是欣赏阿拉戈斯州海滨风光的最佳去处。" },
        { name: "海鲜美食", description: "马塞约以新鲜的海鲜而闻名。在 Marco dos Corais 附近可以品尝到各种美味的海鲜料理和热带水果。" }
      ]
    },
    bestTime: {
      title: "最佳游览时间",
      intro: "马塞约全年气候温暖，是理想的海滨旅游目的地。根据不同的季节和天气条件，您可以规划最佳的行程安排。\n\n**旱季（9月-次年3月）**：天气晴朗，降雨少，是游览马塞约的最佳时间。适合海滩活动、观赏海景和户外游览。\n\n**雨季（4月-8月）**：降雨较多，但气温依然温暖。游客较少，酒店和餐厅价格更优惠，是体验当地文化的绝佳时机。",
      seasons: [
        { name: "🌞 旱季（9月-次年3月）", description: "旱季是游览马塞约的最佳时间。天气晴朗，降雨少，适合海滩活动和观赏海景。建议提前规划行程，尤其是周末和节假日。" },
        { name: "🌧️ 雨季（4月-8月）", description: "雨季降雨较多，但气温依然温暖。游客较少，是体验当地文化的绝佳时机。建议携带雨具，并关注天气预报。" }
      ]
    },
    visiting: {
      title: "实用游览指南",
      intro: "Marco dos Corais 是探索马塞约热带海滨风光的理想去处。为了获得最佳体验，请参考以下实用信息。",
      hours: { title: "开放时间", content: "全天开放\n景区24小时开放，随时可以参观", note: "建议白天前往，可以欣赏美丽的海景。" },
      price: { title: "费用信息", content: "景区免费开放\n周边消费根据选择不同", note: "景区本身免费，但餐饮和娱乐消费需另行支付。" },
      duration: { title: "游览时长", content: "建议游览时间：1-2小时\n可以漫步景区、欣赏海景、拍照留念。", note: "时间可根据个人兴趣灵活安排。建议在白天前往，可以同时欣赏海景。" },
      tips: { title: "游览贴士与注意事项", items: [
        "⚠️ **防晒措施**：巴西热带阳光强烈，请做好防晒措施，携带防晒霜和帽子",
        "穿着舒适的鞋子，方便在景区内漫步",
        "可以拍照，但请尊重他人隐私",
        "品尝海鲜时请注意食品安全，选择卫生条件良好的餐厅",
        "白天是最佳游览时段，可以欣赏清晰的海景",
        "可以顺便游览附近的马塞约海滩",
        "🌱 **文明游览**：请保持环境整洁，不要乱扔垃圾，共同维护这一美丽的海滨空间"
      ] }
    },
    transportation: {
      title: "精准交通指南",
      airport: { title: "✈️ 马塞约机场 (MCZ) ➔ Marco dos Corais", content: "马塞约国际机场（Aeroporto Internacional de Maceió - Zumbi dos Palmares）位于马塞约市，距离 Marco dos Corais 较近。", options: [
        { name: "出租车/网约车（推荐）", price: "约 30-60 雷亚尔", time: "20-35 分钟", steps: ["在机场到达大厅外寻找官方出租车柜台或使用 Uber/99 等网约车软件", "告知司机前往 Marco dos Corais", "马塞约交通相对便利，车程较短"] }
      ]},
      city: { title: "🚶 从马塞约市中心出发", content: "Marco dos Corais 位于马塞约市的海滨区域，从市中心出发可以选择多种方式。建议预留半天时间，将 Marco dos Corais 与附近海滩一并游览。", steps: ["从市中心乘坐出租车或网约车，约 15-25 分钟", "或乘坐公交车前往海滨方向", "到达后步行进入景区"] },
      tips: { title: "交通与气候小贴士", items: [
        "🌡️ **气候优势**：马塞约位于热带地区，全年温暖，是巴西气候最舒适的城市之一",
        "市区内建议使用打车软件（Uber/99）更安全便捷",
        "🚗 **自驾与停车**：景区沿线设有公共停车位，但在旺季（如 12 月至 2 月）或周末，车位会变得相对紧张，建议提前抵达或优先使用网约车出行。",
        "白天时分前往可以欣赏到美丽的海景",
        "可以与马塞约海滩、市中心等景点安排在同一行程",
        "马塞约的交通相对不太拥堵，出行较为方便"
      ] }
    },
    reviews: { 
      title: "游客评价与周边探索", 
      subtitle: "来自Marco dos Corais的声音：Google Maps 真实见证", 
      viewMore: "在 Google Maps 查看更多评价",
      nearbyTitle: "周边值得一游的景点",
      nearbyIntro: "游览完Marco dos Corais后，您可以顺道游览以下附近景点：",
      nearbyItems: [
        { name: "马塞约海滩 (Praia de Maceió)", description: "马塞约最著名的海滩之一，拥有金色沙滩和清澈海水，是游泳和日光浴的理想之地。" },
        { name: "马塞约市中心 (Centro de Maceió)", description: "阿拉戈斯州首府的中心区域，拥有历史悠久的教堂、广场和市场，以及美味的地方美食。" },
        { name: "阿拉戈斯州海滨大道", description: "马塞约最长的海滨大道，沿途有众多餐厅、酒吧和娱乐场所，是体验当地夜生活的好去处。" }
      ]
    },
    gallery: { title: "照片集锦", viewMore: "在 Google Maps 查看更多相片" },
    faq: { title: "常见问题", subtitle: "深入了解Marco dos Corais", items: [
      { question: "Marco dos Corais的开放时间和费用？", answer: "Marco dos Corais全天24小时开放，免费进入。周边餐厅和商店的营业时间各有不同。" },
      { question: "游览Marco dos Corais需要多长时间？", answer: "建议游览时间：1-2小时。您可以漫步景区、欣赏海景、拍照留念。如果在附近用餐，时间可能会更长。" },
      { question: "Marco dos Corais有什么特色？", answer: "Marco dos Corais以美丽的海景和海滨风光而闻名。这里的海岸线景色优美，是拍照和观光的理想之地。此外还有新鲜的海鲜和热带水果。" },
      { question: "参观Marco dos Corais有什么注意事项？", answer: "⚠️ 防晒措施：巴西热带阳光强烈，请做好防晒。穿着舒适的鞋子。选择卫生条件良好的餐厅。请保持环境整洁，不要乱扔垃圾。" }
    ]},
    location: { title: "地图位置", address: "88M3+JC, Maceió - AL\nBrazil\n（巴西马塞约）", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为马塞约的重要旅游地标，请与我们一起爱护环境、尊重当地文化，共同维护这一美丽的热带海滨空间。", text: "© 2026 Marco dos Corais 指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播Marco dos Corais信息。我们与巴西政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "巴西联邦政府", url: "https://www.gov.br/pt-br" },
      { name: "巴西旅游部", url: "https://www.gov.br/turismo/pt-br" },
      { name: "巴西官方电子签证系统", url: "https://brazil.vfsevisa.com/" },
      { name: "巴西国家地理与统计局（IBGE）- 马塞约官方地理历史库", url: "https://cidades.ibge.gov.br/brasil/al/maceio" },
      { name: "马塞约市政府官网", url: "https://maceio.al.gov.br/" }
    ]}
  },
  en: {
    nav: { history: "Introduction", architecture: "Features", monuments: "Nearby", visiting: "Visit Info", transportation: "Transportation", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tags: ["Seaside Landmark", "Tropical Scenery", "Maceió Must-See"], tagline: "Brazil · Alagoas · Maceió", title: "Marco dos Corais", subtitle: "Marco dos Corais · Coral Landmark · Seaside Resort · Tropical Charm", cta: "Explore Marco dos Corais" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "Introduction & Development",
      intro: `**Marco dos Corais** is located in the seaside area of Maceió, the capital of Alagoas state in Brazil. It is a famous seaside tourist landmark, known for its beautiful coral reefs and clear seawater.\n\n**Attraction Features**: Marco dos Corais is an important seaside tourist attraction in Maceió, with spectacular sea views and rich marine ecology. It is an ideal place to enjoy the beauty of the Brazilian coastline and experience tropical seaside charm.\n\n**Tourism Significance**: As an important tourist landmark in Maceió, Marco dos Corais attracts a large number of domestic and foreign tourists. It is not only a great place to watch the sea, but also an important window to understand Brazilian seaside culture.`
    },
    curiosities: {
      title: "Hidden Stories: Fun Facts About Marco dos Corais",
      content: `**Seaside Resort**: Marco dos Corais is one of the most popular seaside attractions in Maceió. The seawater is clear and the coral reefs are rich, making it an excellent place to experience Brazilian seaside charm.\n\n**Geographical Location**: The attraction is located in the seaside area of Maceió, with superior geographical location and convenient transportation. It is an ideal starting point for tourists to explore the Alagoas coastline.\n\n**Tourism Development**: With the development of tourism in Maceió, Marco dos Corais has gradually become one of the city's most important tourist attractions, attracting more and more domestic and foreign tourists.`
    },
    architecture: {
      title: "Landmark Features & Structure Design",
      intro: "Marco dos Corais is a carefully maintained seaside tourist landmark, providing visitors with a comfortable seaside sightseeing experience. The scenic area is equipped with viewing platforms, rest areas, and tourist facilities.",
      specs: {
        structure: { title: "Landmark Structure", content: "The Marco dos Corais landmark has a sturdy structure with tropical charm. The scenic area is laid out along the coastline, where visitors can stroll leisurely and enjoy the beautiful sea views." },
        design: { title: "Design Features", content: "The design of the scenic area fully considers the visitor experience, with viewing platforms, rest areas, and tourist facilities. Against the backdrop of tropical scenery, the scenic area appears even more charming." },
        optics: { title: "Viewing Experience", content: "From Marco dos Corais, you can enjoy spectacular sea views and coastline. The sea water is clear and blue during the day, and the stars are bright at night, providing visitors with all-day visual enjoyment." }
      },
      plaque: {
        title: "Basic Attraction Information",
        items: [
          { label: "Name", value: "Marco dos Corais (Coral Landmark)" },
          { label: "Location", value: "Maceió, Alagoas, Brazil" },
          { label: "Opening Hours", value: "Open 24 hours" },
          { label: "Type", value: "Seaside landmark, Tourist attraction" },
          { label: "Features", value: "Sea view, Seaside scenery" },
          { label: "Best Time to Visit", value: "All day, especially evening" }
        ]
      }
    },
    monuments: {
      title: "Nearby Attractions & Features",
      intro: "There are several attractions and special experiences worth visiting around Marco dos Corais, making your trip to Maceió more colorful.",
      items: [
        { name: "Seaside Sightseeing", description: "The coastline along Marco dos Corais has beautiful beaches. This is the best place to enjoy the seaside scenery of Alagoas." },
        { name: "Seafood Cuisine", description: "Maceió is famous for fresh seafood. Near Marco dos Corais, you can taste various delicious seafood dishes and tropical fruits." }
      ]
    },
    bestTime: {
      title: "Best Time to Visit",
      intro: "Maceió has warm weather year-round, making it an ideal seaside tourist destination. You can plan the best itinerary according to different seasons and weather conditions.\n\n**Dry Season (September-March)**: Sunny weather with little rain, the best time to visit Maceió. Suitable for beach activities, sea view watching and outdoor touring.\n\n**Rainy Season (April-August)**: More rainfall, but temperatures remain warm. Fewer tourists, better prices for hotels and restaurants, an excellent time to experience local culture.",
      seasons: [
        { name: "🌞 Dry Season (September-March)", description: "The dry season is the best time to visit Maceió. Sunny weather with little rain, suitable for beach activities and sea view watching. It is recommended to plan your itinerary in advance, especially on weekends and holidays." },
        { name: "🌧️ Rainy Season (April-August)", description: "More rainfall in the rainy season, but temperatures remain warm. Fewer tourists, an excellent time to experience local culture. It is recommended to bring rain gear and pay attention to weather forecasts." }
      ]
    },
    visiting: {
      title: "Practical Visit Guide",
      intro: "Marco dos Corais is an ideal place to explore the tropical seaside scenery of Maceió. For the best experience, please refer to the following practical information.",
      hours: { title: "Opening Hours", content: "Open 24 hours\nScenic area open all day, visitors can enter at any time", note: "It is recommended to go during the day to enjoy the beautiful sea views." },
      price: { title: "Cost Information", content: "Scenic area free admission\nSurrounding consumption varies", note: "The scenic area itself is free, but dining and entertainment costs are paid separately." },
      duration: { title: "Visit Duration", content: "Suggested visit time: 1-2 hours\nYou can stroll the scenic area, enjoy sea views, and take photos.", note: "Time can be arranged flexibly according to personal interest. It is recommended to go during the day to enjoy the sea views." },
      tips: { title: "Visit Tips & Important Notes", items: [
        "⚠️ **Sun Protection**: Brazilian tropical sun is strong, please take sun protection measures, bring sunscreen and hat",
        "Wear comfortable shoes for walking in the scenic area",
        "Photography is allowed, but please respect others' privacy",
        "Pay attention to food safety when tasting seafood, choose restaurants with good hygiene conditions",
        "Daytime is the best visiting time to enjoy clear sea views",
        "You can also visit the nearby Maceió beaches",
        "🌱 **Civilized Visit**: Please keep the environment clean, do not litter, and jointly maintain this beautiful seaside space"
      ] }
    },
    transportation: {
      title: "Precise Transportation Guide",
      airport: { title: "✈️ Maceió Airport (MCZ) ➔ Marco dos Corais", content: "Maceió International Airport (Aeroporto Internacional de Maceió - Zumbi dos Palmares) is located in Maceió city, relatively close to Marco dos Corais.", options: [
        { name: "Taxi / Ride-hailing (Recommended)", price: "About 30-60 Brazilian Reais", time: "20-35 minutes", steps: ["Find official taxi counters at the airport arrivals hall or use ride-hailing apps like Uber/99", "Tell the driver you are going to Marco dos Corais", "Maceió traffic is relatively convenient, with a short driving distance"] }
      ]},
      city: { title: "🚶 From Downtown Maceió", content: "Marco dos Corais is located in the seaside area of Maceió. You can choose various ways to get there from the city center. It is recommended to allocate half a day to visit Marco dos Corais together with nearby beaches.", steps: ["Take a taxi or ride-hailing from downtown, about 15-25 minutes", "Or take a bus towards the seaside", "After arrival, walk into the scenic area"] },
      tips: { title: "Transportation & Climate Tips", items: [
        "🌡️ **Climate Advantage**: Maceió is located in the tropical region, warm all year round, one of the most comfortable cities in Brazil in terms of climate",
        "Using ride-hailing apps (Uber/99) in the city is safer and more convenient",
        "🚗 **Driving & Parking**: There are public parking spaces along the scenic area, but during peak season (December to February) or weekends, parking can be relatively tight. It's recommended to arrive early or prioritize ride-hailing services.",
        "Go during the day to enjoy the beautiful sea views",
        "Combine with Maceió beaches, downtown and other attractions in the same trip",
        "Maceió's traffic is relatively less congested, making travel more convenient"
      ] }
    },
    reviews: { 
      title: "Visitor Reviews & Nearby Exploration", 
      subtitle: "Voices from Marco dos Corais: Real Testimonials from Google Maps", 
      viewMore: "View More Reviews on Google Maps",
      nearbyTitle: "Nearby Attractions Worth Visiting",
      nearbyIntro: "After visiting Marco dos Corais, you can easily visit the following nearby attractions:",
      nearbyItems: [
        { name: "Maceió Beach (Praia de Maceió)", description: "One of the most famous beaches in Maceió, with golden sand and clear water, ideal for swimming and sunbathing." },
        { name: "Downtown Maceió (Centro de Maceió)", description: "The capital of Alagoas state, home to historic churches, squares and markets, as well as delicious local cuisine." },
        { name: "Alagoas Seaside Avenue", description: "The longest seaside avenue in Maceió, lined with numerous restaurants, bars and entertainment venues, a great place to experience the local nightlife." }
      ]
    },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Marco dos Corais", items: [
      { question: "What are the opening hours and cost of Marco dos Corais?", answer: "Marco dos Corais is open 24 hours a day and free to enter. Surrounding restaurants and shops have different operating hours." },
      { question: "How long does it take to visit Marco dos Corais?", answer: "Suggested visit time: 1-2 hours. You can stroll the scenic area, enjoy sea views, and take photos. If you dine nearby, it may take longer." },
      { question: "What are the features of Marco dos Corais?", answer: "Marco dos Corais is famous for its beautiful sea views and seaside scenery. The coastline here is beautiful, making it an ideal place for photos and sightseeing. There are also fresh seafood and tropical fruits." },
      { question: "What are the important notes for visiting Marco dos Corais?", answer: "⚠️ Sun Protection: Brazilian tropical sun is strong, please protect yourself from the sun. Wear comfortable shoes. Choose restaurants with good hygiene conditions. Please keep the environment clean and do not litter." }
    ]},
    location: { title: "Map Location", address: "88M3+JC, Maceió - AL\nBrazil", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an important tourist landmark in Maceió, please join us in caring for the environment and respecting local culture. Keep the attraction clean and maintain this beautiful tropical seaside space together.", text: "© 2026 Marco dos Corais Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about Marco dos Corais. We are not affiliated with the Brazilian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Brazil Federal Government", url: "https://www.gov.br/pt-br" },
      { name: "Brazil Ministry of Tourism", url: "https://www.gov.br/turismo/pt-br" },
      { name: "Brazil Official E-Visa System", url: "https://brazil.vfsevisa.com/" },
      { name: "IBGE - Maceió Historical Database", url: "https://cidades.ibge.gov.br/brasil/al/maceio" },
      { name: "Maceió City Hall Official Website", url: "https://maceio.al.gov.br/" }
    ]}
  },
  pt: {
    nav: { history: "Introdução", architecture: "Características", monuments: "Arredores", visiting: "Informações", transportation: "Transporte", gallery: "Galeria", reviews: "Avaliações", faq: "FAQ", location: "Localização" },
    hero: { tags: ["Marco Marítimo", "Paisagem Tropical", "Imperdível em Maceió"], tagline: "Brasil · Alagoas · Maceió", title: "Marco dos Corais", subtitle: "Marco dos Corais · Marco de Coral · Estância Marítima · Encanto Tropical", cta: "Explorar o Marco dos Corais" },
    rating: { reviews: "avaliações", source: "Google Avaliações" },
    history: {
      title: "História e Desenvolvimento",
      intro: `A **Passarela do Caranguejo (Crab Catwalk)** está localizada no bairro de Atalaia, em Aracaju, capital do estado de Sergipe, no Brasil. Não é uma atração isolada, mas sim a essência da seção sul da **Orla de Atalaia**, uma extensão de 6 quilômetros conhecida como a "avenida costeira mais bonita do Brasil".\n\n**Características do Atrativo**: A Passarela do Caranguejo é um famoso passeio marítimo de madeira, conhecido por seus numerosos restaurantes de caranguejo. É não apenas o melhor lugar para provar os deliciosos pratos de caranguejo locais, mas também um local popular para assistir aos espetaculares pores do sol na América do Sul.\n\n**Significado Cultural**: Quando a noite cai, a Passarela do Caranguejo revela seu lado mais vibrante. A brisa do mar não é apenas preenchida com o aroma da comida, mas também frequentemente acompanhada por **música ao vivo de sanfona (Forró)**, típica do nordeste brasileiro. Muitos restaurantes se transformam em palcos culturais ao ar livre nos fins de semana, permitindo que os visitantes sintam os ritmos latino-americanos apaixonantes e alegres em meio ao som das ondas do mar.`
    },
    curiosities: {
      title: "Histórias Ocultas: Curiosidades sobre a Passarela",
      content: `**Paraíso Gastronômico**: Degustar caranguejo na Passarela do Caranguejo não é apenas uma refeição, mas uma experiência cultural imersiva. A maneira local mais autêntica é pedir uma tradicional "Caranguejada". Os restaurantes geralmente fornecem a cada cliente um icônico **martelinho e tábua de madeira**. Acompanhado pelo som crocante de quebrar cascas de caranguejo e uma Caipirinha gelada, esta é a noite mais autêntica de Aracaju.\n\n**Lugar para Ver Pores do Sol**: A Passarela do Caranguejo é um dos melhores lugares para ver o pôr do sol em Aracaju. À tarde, o sol se põe no oeste e o mar brilha, criando uma vista espetacular.\n\n**Desenvolvimento Turístico**: Com o desenvolvimento do turismo em Aracaju, a Passarela do Caranguejo tornou-se gradualmente um dos atrativos turísticos mais importantes da cidade, atraindo cada vez mais turistas nacionais e estrangeiros.`
    },
    architecture: {
      title: "Características do Marco e Design Estrutural",
      intro: "O Marco dos Corais é um marco turístico beira-mar cuidadosamente mantido, proporcionando aos visitantes uma experiência de passeio beira-mar confortável. A área cênica é equipada com plataformas de observação, áreas de descanso e instalações turísticas.",
      specs: {
        structure: { title: "Estrutura do Marco", content: "O Marco dos Corais tem uma estrutura sólida com charme tropical. A área cênica é distribuída ao longo da linha costeira, onde os visitantes podem caminhar com calma e desfrutar das belas vistas para o mar." },
        design: { title: "Características do Design", content: "O design da área cênica considera totalmente a experiência do visitante, com plataformas de observação, áreas de descanso e instalações turísticas. Sob o pano de fundo da paisagem tropical, a área cênica parece ainda mais encantadora." },
        optics: { title: "Experiência de Visualização", content: "Do Marco dos Corais, você pode desfrutar de espetaculares vistas para o mar e linha costeira. A água do mar é clara e azul durante o dia, e as estrelas brilham à noite, proporcionando aos visitantes prazer visual o dia todo." }
      },
      plaque: {
        title: "Informações Básicas do Atrativo",
        items: [
          { label: "Nome", value: "Marco dos Corais (Marco de Coral)" },
          { label: "Localização", value: "Maceió, Alagoas, Brasil" },
          { label: "Horário", value: "Aberto 24 horas" },
          { label: "Tipo", value: "Marco beira-mar, Atrativo turístico" },
          { label: "Características", value: "Vista do mar, Paisagem beira-mar" },
          { label: "Melhor Época", value: "Durante o dia, especialmente à tarde" }
        ]
      }
    },
    monuments: {
      title: "Atrações Próximas e Características",
      intro: "Existem várias atrações e experiências especiais dignas de visita ao redor do Marco dos Corais, tornando sua viagem a Maceió mais colorida.",
      items: [
        { name: "Passeio Beira-Mar", description: "A linha costeira ao longo do Marco dos Corais tem belas praias. Este é o melhor lugar para desfrutar da paisagem beira-mar de Alagoas." },
        { name: "Culinária de Frutos do Mar", description: "Maceió é famosa por frutos do mar frescos. Perto do Marco dos Corais, você pode provar vários pratos deliciosos de frutos do mar e frutas tropicais." }
      ]
    },
    bestTime: {
      title: "Melhor Época para Visitar",
      intro: "Maceió tem clima quente o ano todo, sendo um destino turístico costeiro ideal. Você pode planejar o melhor itinerário de acordo com diferentes estações e condições climáticas.\n\n**Estação Seca (setembro-março)**: Tempo ensolarado com pouca chuva, a melhor época para visitar Maceió. Adequado para atividades de praia, observação da vista do mar e passeios ao ar livre.\n\n**Estação Chuvosa (abril-agosto)**: Mais chuvas, mas as temperaturas permanecem quentes. Menos turistas, melhores preços para hotéis e restaurantes, uma excelente oportunidade para experimentar a cultura local.",
      seasons: [
        { name: "🌞 Estação Seca (setembro-março)", description: "A estação seca é a melhor época para visitar Maceió. Tempo ensolarado com pouca chuva, adequado para atividades de praia e observação da vista do mar. Recomenda-se planejar seu itinerário com antecedência, especialmente nos fins de semana e feriados." },
        { name: "🌧️ Estação Chuvosa (abril-agosto)", description: "Mais chuvas na estação chuvosa, mas as temperaturas permanecem quentes. Menos turistas, uma excelente oportunidade para experimentar a cultura local. Recomenda-se levar equipamento de chuva e prestar atenção às previsões meteorológicas." }
      ]
    },
    visiting: {
      title: "Guia Prática de Visita",
      intro: "O Marco dos Corais é um lugar ideal para explorar a paisagem costeira tropical de Maceió. Para obter a melhor experiência, consulte as seguintes informações práticas.",
      hours: { title: "Horário de Abertura", content: "Aberto 24 horas\nÁrea cênica aberta o dia todo, visitantes podem entrar a qualquer momento", note: "Recomenda-se ir durante o dia para desfrutar das belas vistas do mar." },
      price: { title: "Informações de Custo", content: "Área cênica gratuita\nConsumo ao redor varia", note: "A área cênica em si é gratuita, mas os custos de refeição e entretenimento são pagos separadamente." },
      duration: { title: "Duração da Visita", content: "Tempo sugerido: 1-2 horas\nVocê pode caminhar pela área cênica, desfrutar das vistas do mar e tirar fotos.", note: "O tempo pode ser organizado de forma flexível de acordo com o interesse pessoal. Recomenda-se ir durante o dia para desfrutar das vistas do mar." },
      tips: { title: "Dicas de Visita e Notas Importantes", items: [
        "⚠️ **Proteção Solar**: O sol tropical brasileiro é forte, por favor tome medidas de proteção solar, traga protetor solar e chapéu",
        "Use sapatos confortáveis para caminhar pela área cênica",
        "Fotografia é permitida, mas por favor respeite a privacidade dos outros",
        "Preste atenção à segurança alimentar ao provar frutos do mar, escolha restaurantes com boas condições de higiene",
        "Durante o dia é o melho momento para visitar e desfrutar das vistas claras do mar",
        "Você também pode visitar as praias de Maceió nas proximidades",
        "🌱 **Visita Civilizada**: Por favor, mantenha o ambiente limpo, não jogue lixo e mantenha conjuntamente este belo espaço costeiro"
      ] }
    },
    transportation: {
      title: "Guia Preciso de Transporte",
      airport: { title: "✈️ Aeroporto de Maceió (MCZ) ➔ Marco dos Corais", content: "O Aeroporto Internacional de Maceió (Aeroporto Internacional de Maceió - Zumbi dos Palmares) está localizado na cidade de Maceió, relativamente perto do Marco dos Corais.", options: [
        { name: "Táxi / Aplicativo (Recomendado)", price: "Aprox. 30-60 Reais Brasileiros", time: "20-35 minutos", steps: ["Encontre balcões de táxis oficiais na sala de desembarque do aeroporto ou use aplicativos como Uber/99", "Diga ao motorista que você está indo para o Marco dos Corais", "O tráfego em Maceió é relativamente conveniente, com uma curta distância de direção"] }
      ]},
      city: { title: "🚶 Do Centro de Maceió", content: "O Marco dos Corais está localizado na área beira-mar de Maceió. Você pode escolher várias opções para chegar do centro da cidade. Recomenda-se alocar meio dia para visitar o Marco dos Corais junto com as praias próximas.", steps: ["Tome um táxi ou aplicativo do centro, cerca de 15-25 minutos", "Ou tome um ônibus em direção à beira-mar", "Após a chegada, caminhe até a área cênica"] },
      tips: { title: "Dicas de Transporte e Clima", items: [
        "🌡️ **Vantagem Climática**: Maceió está localizada na região tropical, quente o ano todo, uma das cidades mais confortáveis do Brasil em termos climáticos",
        "Usar aplicativos de transporte (Uber/99) na cidade é mais seguro e conveniente",
        "🚗 **Dirigir e Estacionar**: Existem vagas de estacionamento público ao longo da área cênica, mas durante a alta temporada (dezembro a fevereiro) ou nos fins de semana, o estacionamento pode ser relativamente difícil. Recomenda-se chegar cedo ou priorizar serviços de transporte por aplicativo.",
        "Vá durante o dia para desfrutar das belas vistas do mar",
        "Combine com praias de Maceió, centro e outras atrações na mesma viagem",
        "O tráfego em Maceió é relativamente menos congestionado, tornando a viagem mais conveniente"
      ] }
    },
    reviews: { 
      title: "Avaliações de Visitantes e Exploração Próxima", 
      subtitle: "Vozes do Marco dos Corais: Testemunhos Reais do Google Maps", 
      viewMore: "Ver Mais Avaliações no Google Maps",
      nearbyTitle: "Atrações Próximas que Vale a Pena Visitar",
      nearbyIntro: "Após visitar o Marco dos Corais, você pode visitar facilmente as seguintes atrações próximas:",
      nearbyItems: [
        { name: "Praia de Maceió", description: "Uma das praias mais famosas de Maceió, com areia dourada e água clara, ideal para nadar e tomar sol." },
        { name: "Centro de Maceió", description: "A capital do estado de Alagoas, lar de igrejas históricas, praças e mercados, assim como deliciosa culinária local." },
        { name: "Avenida Beira-Mar de Alagoas", description: "A avenida costeira mais longa de Maceió, ladeada por numerosos restaurantes, bares e locais de entretenimento, um ótimo lugar para experimentar a vida noturna local." }
      ]
    },
    gallery: { title: "Galeria de Fotos", viewMore: "Ver Mais Fotos no Google Maps" },
    faq: { title: "Perguntas Frequentes", subtitle: "Saiba Mais Sobre o Marco dos Corais", items: [
      { question: "Quais são o horário de abertura e o custo do Marco dos Corais?", answer: "O Marco dos Corais está aberto as 24 horas do dia e a entrada é gratuita. Os restaurantes e lojas ao redor têm horários de funcionamento diferentes." },
      { question: "Quanto tempo é necessário para visitar o Marco dos Corais?", answer: "Tempo sugerido: 1-2 horas. Você pode caminhar pela área cênica, desfrutar das vistas do mar e tirar fotos. Se comer nos restaurantes próximos, pode levar mais tempo." },
      { question: "Quais são as características do Marco dos Corais?", answer: "O Marco dos Corais é famoso por suas belas vistas do mar e paisagem beira-mar. A linha costeira aqui é bela, tornando-o um lugar ideal para fotos e passeios. Também há frutos do mar frescos e frutas tropicais." },
      { question: "Quais são as notas importantes para visitar o Marco dos Corais?", answer: "⚠️ Proteção Solar: O sol tropical brasileiro é forte, por favor proteja-se do sol. Use sapatos confortáveis. Escolha restaurantes com boas condições de higiene. Por favor mantenha o ambiente limpo e não jogue lixo." }
    ]},
    location: { title: "Localização", address: "88M3+JC, Maceió - AL\nBrasil", openMaps: "Ver no Google Maps" },
    footer: { callToAction: "Como importante marco turístico em Maceió, junte-se a nós para cuidar do meio ambiente e respeitar a cultura local. Mantenha a atração limpa e conserve este belo espaço costeiro tropical juntos.", text: "© 2026 Guia do Marco dos Corais · Todos os direitos reservados.\nEste site é um projeto independente de guia de terceiros dedicado a compartilhar informações precisas sobre o Marco dos Corais. Não estamos afiliados ao governo brasileiro ou a nenhuma autoridade oficial.", made: "Este site é um projeto independente de guia de terceiros. Feito para exploradores e aprendizes.", linksTitle: "Links Relacionados", links: [
      { name: "Governo Federal do Brasil", url: "https://www.gov.br/pt-br" },
      { name: "Ministério do Turismo do Brasil", url: "https://www.gov.br/turismo/pt-br" },
      { name: "Sistema Oficial de Visto Eletrônico do Brasil", url: "https://brazil.vfsevisa.com/" },
      { name: "IBGE - Banco de Dados Históricos de Maceió", url: "https://cidades.ibge.gov.br/brasil/al/maceio" },
      { name: "Prefeitura de Maceió - Site Oficial", url: "https://maceio.al.gov.br/" }
    ]}
  }
};
