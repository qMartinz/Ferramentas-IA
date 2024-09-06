let dados = [
    {
        titulo: "Gemini",
        link: "https://gemini.google.com",
        descricao: "Gemini: Uma Nova Era na Inteligência Artificial. O Gemini é a mais recente e poderosa criação da Google DeepMind, representando um avanço significativo na área da inteligência artificial. Essa IA multi-modal é capaz de processar e gerar diferentes tipos de dados, como texto, código e até mesmo imagens, o que a torna uma ferramenta extremamente versátil.",
        info: "https://pt.wikipedia.org/wiki/Gemini_(modelo_de_linguagem)",
        temas: ["multimodal", "google", "linguagem", "texto", "textos", "código", "códigos", "processamento", "processar", "codigo", "codigos", "redação", "redações", "escrita", "composição", "documento", "documentos", "artigo", "artigos"]
    },
    {
        titulo: "Chat-GPT",
        link: "https://chatgpt.com",
        descricao: "O ChatGPT é um modelo de linguagem de grande porte desenvolvido pela OpenAI, capaz de gerar textos semelhantes aos humanos em conversas. Ele utiliza a arquitetura GPT (Generative Pre-trained Transformer) para compreender e responder a uma ampla variedade de perguntas e solicitações, tornando as interações com a inteligência artificial mais naturais e intuitivas.",
        info: "https://pt.wikipedia.org/wiki/ChatGPT",
        temas: ["multimodal", "linguagem", "texto", "textos", "código", "codigo", "códigos", "codigos", "imagens", "imagem", "redação", "redações", "escrita", "composição", "documento", "documentos", "artigo", "artigos"]
    },
    {
        titulo: "Microsoft Copilot",
        link: "https://www.microsoft.com/copilot",
        descricao: "O Microsoft Copilot é um assistente de IA integrado à plataforma Microsoft 365, projetado para aumentar a produtividade dos usuários. Ele utiliza a tecnologia GPT para gerar texto, traduzir idiomas, escrever diferentes tipos de conteúdo criativo e responder a suas perguntas de forma informativa. O Copilot está disponível em diversos aplicativos da Microsoft, como o Word, Excel e PowerPoint, tornando-o uma ferramenta poderosa para o dia a dia.",
        info: "https://en.wikipedia.org/wiki/Microsoft_365_Copilot",
        temas: ["produtividade", "microsoft", "multimodal", "assistente", "assistentes", "automação", "automatizar", "automatização", "linguagem", "texto", "código", "codigo", "codigos", "códigos", "redação", "redações", "escrita", "composição", "documento", "documentos", "artigo", "artigos"]
    },
    {
        titulo: "Mistral AI",
        link: "https://mistral.ai",
        descricao: "O Mistral AI é uma empresa de pesquisa em IA focada no desenvolvimento de modelos de linguagem de grande porte. Seu modelo principal, o Mistral 7B, é conhecido por sua alta qualidade e capacidade de gerar textos criativos e coerentes. O Mistral AI tem como objetivo democratizar o acesso à IA, oferecendo modelos de linguagem de código aberto e ferramentas para desenvolvedores.",
        info: "https://en.wikipedia.org/wiki/Mistral_AI",
        temas: ["multimodal", "linguagem", "texto", "textos", "código", "codigo", "codigos", "códigos", "redação", "redações", "escrita", "composição", "documento", "documentos", "artigo", "artigos"]
    },
    {
        titulo: "Claude AI",
        link: "https://claude.ai",
        descricao: "Claude é um assistente de IA criado pela Anthropic, projetado para ser altamente seguro e alinhado com as necessidades humanas. Ele é especializado em conversação natural, proporcionando respostas claras e éticas em diversas situações. Claude é uma ferramenta útil para tarefas que requerem suporte de linguagem natural.",
        info: "https://en.wikipedia.org/wiki/Claude_(language_model)",
        temas: ["linguagem", "conversação", "conversa", "diálogo", "diálogos", "ética", "moral", "assistente", "assistentes", "suporte", "ajuda", "apoio"]
    },
    {
        titulo: "Jasper AI",
        link: "https://www.jasper.ai",
        descricao: "Jasper AI é uma plataforma de inteligência artificial focada em geração de conteúdo, utilizada por profissionais de marketing, escritores e criadores de conteúdo. Com uma ampla gama de modelos pré-treinados, Jasper ajuda a criar textos, slogans, descrições de produtos e muito mais, economizando tempo e esforço.",
        info: "https://handwiki.org/wiki/Software:Jasper_AI",
        temas: ["conteúdo", "conteúdos", "marketing", "propaganda", "publicidade", "criatividade", "automação", "automatizar", "automatização", "geração", "produção"]
    },
    {
        titulo: "MidJourney",
        link: "https://www.midjourney.com",
        descricao: "MidJourney é uma IA de geração de imagens que permite aos usuários criar obras de arte digitais a partir de descrições textuais. Utilizada por designers, artistas e criadores, essa ferramenta transforma ideias em imagens de alta qualidade, explorando novas formas de expressão visual.",
        info: "https://pt.wikipedia.org/wiki/Midjourney",
        temas: ["imagens", "imagem", "arte digital", "arte", "obras", "design", "criatividade", "expressão", "expressões", "visual", "visuais"]
    },
    {
        titulo: "DALL-E",
        link: "https://openai.com/dall-e",
        descricao: "DALL-E é um modelo de IA desenvolvido pela OpenAI que gera imagens a partir de descrições textuais. Ele utiliza a arquitetura GPT para entender descrições complexas e criar ilustrações que correspondem às palavras, oferecendo uma ferramenta poderosa para designers, publicitários e artistas.",
        info: "https://pt.wikipedia.org/wiki/DALL-E",
        temas: ["imagens", "imagem", "arte digital", "arte", "obras", "design", "criatividade", "openai", "ilustração", "ilustrações"]
    },
    {
        titulo: "Cohere AI",
        link: "https://cohere.ai",
        descricao: "Cohere AI é uma plataforma que oferece modelos de linguagem de última geração para desenvolvedores e empresas. Com foco em NLP (Processamento de Linguagem Natural), a Cohere permite a integração de IA em aplicativos para melhorar a compreensão e geração de texto, análise de sentimento, tradução e muito mais.",
        info: "https://en.wikipedia.org/wiki/Cohere",
        temas: ["linguagem", "NLP", "texto", "textos", "análise", "análises", "sentimento", "sentimentos", "compreensão", "geração", "produção", "tradução", "traduzir"]
    },
    {
        titulo: "Hugging Face",
        link: "https://huggingface.co",
        descricao: "Hugging Face é uma plataforma líder em NLP e Machine Learning que oferece ferramentas de código aberto para desenvolvedores treinarem e implementarem modelos de linguagem e visão computacional. Amplamente utilizada na academia e na indústria, a Hugging Face disponibiliza modelos pré-treinados e uma comunidade ativa para colaboração.",
        info: "https://en.wikipedia.org/wiki/Hugging_Face",
        temas: ["NLP", "machine learning", "aprendizado de máquina", "código aberto", "open source", "visão computacional", "treinamento", "implementação", "colaboração", "academia", "indústria"]
    },
    {
        titulo: "Synthesia",
        link: "https://www.synthesia.io",
        descricao: "Synthesia é uma plataforma de criação de vídeos que utiliza IA para gerar vídeos com avatares digitais a partir de textos. Amplamente usada em marketing, educação e comunicação corporativa, a Synthesia permite a criação de vídeos de alta qualidade sem a necessidade de câmeras ou atores.",
        info: "https://en.wikipedia.org/wiki/Synthesia_(company)",
        temas: ["vídeo", "video", "vídeos", "videos", "avatares digitais", "avatar", "educação", "ensino", "aprendizado", "marketing", "propaganda", "publicidade", "comunicação"]
    },
    {
        titulo: "Runway ML",
        link: "https://runwayml.com",
        descricao: "Runway ML é uma plataforma de criação de conteúdo visual assistida por IA, que permite a edição de vídeos e imagens de forma inovadora. Com uma variedade de ferramentas de aprendizado de máquina, Runway ML é utilizada por artistas, cineastas e criadores de conteúdo para explorar novas formas de expressão visual.",
        info: "https://en.wikipedia.org/wiki/Runway_(company)",
        temas: ["vídeo", "video", "vídeos", "videos", "edição", "editar", "imagem", "imagens", "machine learning", "aprendizado de máquina", "criatividade", "expressão", "expressões", "visual", "visuais"]
    },
    {
        titulo: "Synthesys",
        link: "https://synthesys.io",
        descricao: "Synthesys é uma ferramenta de IA que permite criar vozes e avatares realistas para vídeos, áudios e apresentações. Com foco em gerar narrações naturais e expressivas, Synthesys é utilizada por empresas de marketing, educação e mídia para criar conteúdos mais envolventes e profissionais.",
        info: "https://synthesys.io/about/",
        temas: ["voz", "vozes", "avatar", "avatares digitais", "vídeo", "vídeos", "audio", "áudio", "áudios", "apresentação", "apresentações", "narrativa", "narração", "narrações", "narrativas", "marketing", "educação", "mídia", "mídias", "conteúdo", "conteúdos"]
    },
    {
        titulo: "Boomy",
        link: "https://boomy.com",
        descricao: "Boomy é uma plataforma de IA que permite a criação de músicas de forma automática. Ideal para criadores de conteúdo, podcasters e desenvolvedores de jogos, Boomy oferece uma maneira rápida e fácil de gerar faixas musicais personalizadas, sem necessidade de experiência em produção.",
        info: "#",
        temas: ["música", "músicas", "som", "sons", "criatividade", "automação", "automatização", "geração", "produção", "personalização", "personalizar"]
    },
    {
        titulo: "Teachable Machine",
        link: "https://teachablemachine.withgoogle.com/",
        descricao: "Teachable Machine é uma ferramenta do Google que permite a qualquer pessoa treinar modelos de aprendizado de máquina sem a necessidade de codificação. Ideal para iniciantes e educadores, a plataforma facilita a criação de modelos para reconhecimento de imagens, sons e poses.",
        info: "https://teachablemachine.withgoogle.com/faq",
        temas: ["aprendizado", "aprendizagem", "máquina", "máquinas", "educação", "acessibilidade", "intuitivo", "intuitiva", "reconhecimento", "imagem", "imagens", "som", "sons", "pose", "poses"]
    },
    {
        titulo: "Pixlr",
        link: "https://pixlr.com/br/",
        descricao: "Pixlr é uma plataforma de edição de fotos online que utiliza IA para facilitar o processo de criação e edição de imagens. Com uma interface intuitiva e uma ampla gama de ferramentas, Pixlr é ideal para designers, fotógrafos e entusiastas que buscam uma solução rápida e eficiente.",
        info: "https://pt.wikipedia.org/wiki/Pixlr",
        temas: ["edição", "editar", "imagem", "imagens", "foto", "fotos", "fotografia", "design", "ferramentas", "criação", "criatividade"]
    },
    {
        titulo: "Removal.AI",
        link: "https://removal.ai/",
        descricao: "Removal.AI é uma ferramenta online que utiliza inteligência artificial para remover automaticamente o fundo de imagens. Com uma interface simples e rápida, é ideal para designers, fotógrafos e criadores de conteúdo que precisam de recortes precisos de imagens sem a necessidade de edição manual.",
        info: "https://removal.ai/about-us/",
        temas: ["fundo", "fundo de imagem", "edição", "editar", "imagem", "imagens", "design", "recorte", "recortes", "recortar", "criadores de conteúdo"]
    },
    {
        titulo: "Tess AI",
        link: "https://pareto.io/pt-br/tess-ai/",
        descricao: "Tess AI é uma ferramenta de inteligência artificial desenvolvida pela Pareto que auxilia na automação de tarefas administrativas e operacionais, como coleta de dados, agendamento e monitoramento de processos. É projetada para aumentar a eficiência e permitir que equipes se concentrem em atividades mais estratégicas.",
        info: "https://pareto.io/pt-br/sobre/",
        temas: ["automação", "automatização", "administrativa", "administração", "tarefas", "negócios", "operacional", "operacionais", "eficiência", "agendamento", "monitoramento", "processo", "processos", "dados", "coleta de dados"]
    },
    {
        titulo: "Tabnine",
        link: "https://www.tabnine.com/",
        descricao: "Tabnine é uma ferramenta de autocompletar código baseada em inteligência artificial, que oferece sugestões de código em tempo real para desenvolvedores. Integrado a vários editores de texto e IDEs, Tabnine aumenta a produtividade e ajuda a escrever código de forma mais rápida e precisa.",
        info: "https://en.wikipedia.org/wiki/Tabnine",
        temas: ["programação", "programar", "código", "codigos", "códigos", "desenvolvimento", "software", "produtividade", "sugestões", "escrever", "IDE", "editor de texto", "editores de texto"]
    },
    {
        titulo: "Scenario",
        link: "https://www.scenario.com/",
        descricao: "Scenario é uma plataforma de geração de conteúdo visual baseada em IA, especialmente focada em criar ativos personalizados para jogos e outras aplicações interativas. Com ferramentas que permitem a geração de arte e design diretamente a partir de descrições textuais, Scenario é uma solução inovadora para desenvolvedores de jogos e designers.",
        info: "https://en.wikipedia.org/wiki/Scenario_(artwork)",
        temas: ["imagem", "imagens", "arte", "artes", "jogos", "jogo", "design", "criação", "conteúdo visual", "aplicações", "aplicação", "personalização", "personalizar", "interativas", "interatividade"]
    },
    {
        titulo: "Promethean AI",
        link: "https://www.prometheanai.com/",
        descricao: "Promethean AI é uma inteligência artificial que ajuda na criação de ambientes virtuais para jogos e simulações. Projetada para assistentes de arte e design, Promethean AI acelera o processo de desenvolvimento ao sugerir e construir cenários em 3D, permitindo que artistas se concentrem na criação de detalhes e na narrativa do jogo.",
        info: "https://www.prometheanai.com/",
        temas: ["design", "jogos", "jogo", "ambientes", "ambiente", "3D", "desenvolvimento", "assistentes", "arte", "cenário", "cenários", "simulações", "narrativa", "detalhes", "criação"]
    },
    {
        titulo: "Ludo AI",
        link: "https://www.ludo.ai/",
        descricao: "Ludo AI é uma plataforma de IA voltada para a inovação e o design de jogos. Utilizada para gerar ideias, conceitos e até mesmo níveis de jogos, Ludo AI facilita o processo criativo para desenvolvedores e designers, ajudando a transformar ideias em realidade.",
        info: "https://ludo.ai/blog",
        temas: ["design", "jogos", "jogo", "inovação", "ideia", "ideias", "conceito", "conceitos", "desenvolvimento", "criação", "processo criativo"]
    },
    {
        titulo: "Slidesgo",
        link: "https://slidesgo.com/pt/ai-presentations",
        descricao: "Slidesgo oferece templates de apresentações criados com o auxílio de inteligência artificial. Com uma vasta coleção de modelos de slides e designs, a plataforma facilita a criação de apresentações visuais e profissionais para qualquer finalidade, desde reuniões de negócios até apresentações acadêmicas.",
        info: "https://slidesgo.com/pt/ai-presentations",
        temas: ["apresentações", "apresentação", "design", "slides", "slide", "modelos", "templates", "negócios", "acadêmico", "acadêmica", "acadêmicas"]
    },
    {
        titulo: "SlidesAI",
        link: "https://www.slidesai.io/pt",
        descricao: "SlidesAI é uma ferramenta que usa inteligência artificial para ajudar na criação de apresentações de slides. Ela oferece sugestões automáticas para conteúdo, design e layout, tornando o processo de criação de apresentações mais rápido e eficiente.",
        info: "https://www.slidesai.io/pt",
        temas: ["apresentações", "apresentação", "design", "slides", "slide", "conteúdo", "criação", "layout", "sugestões", "automatização", "automática"]
    },
    {
        titulo: "Gamma",
        link: "https://gamma.app/",
        descricao: "Gamma é uma plataforma de criação de apresentações que utiliza IA para ajudar a construir slides de maneira intuitiva e eficiente. A ferramenta oferece recomendações de design e estrutura para melhorar a apresentação de informações e facilitar a comunicação visual.",
        info: "https://gamma.app/",
        temas: ["apresentações", "apresentação", "design", "slides", "slide", "estrutura", "recomendações", "criação", "comunicação", "informações", "informação", "visual", "visuais", "intuitivo", "intuitiva"]
    },
    {
        titulo: "Smallpdf AI",
        link: "https://smallpdf.com/pt/ia-pdf",
        descricao: "Smallpdf AI é uma ferramenta poderosa para manipulação e otimização de arquivos PDF. Com recursos como compressão, conversão e edição de PDFs, a Smallpdf AI oferece uma solução eficiente para quem lida com documentos em formato PDF regularmente.",
        info: "https://smallpdf.com/pt/ia-pdf",
        temas: ["PDF", "compressão", "comprimir", "conversão", "converter", "edição", "editar"]
    },
    {
        titulo: "UPDF",
        link: "https://updf.com/br/",
        descricao: "UPDF é um editor de PDF que permite aos usuários criar, editar, anotar e converter documentos PDF de maneira intuitiva. Com foco na facilidade de uso, o UPDF é ideal para profissionais que precisam gerenciar documentos PDF de forma eficiente.",
        info: "https://updf.com/br/",
        temas: ["PDF", "edição", "anotação", "anotações", "conversão", "converter"]
    },
    {
        titulo: "Designs.ai LogoMaker",
        link: "https://designs.ai/logomaker/start",
        descricao: "Designs.ai LogoMaker é uma plataforma que utiliza IA para criar logotipos personalizados de maneira rápida e fácil. Com uma interface intuitiva e uma vasta gama de opções de design, é uma ferramenta excelente para empreendedores e empresas que precisam de uma identidade visual única.",
        info: "https://designs.ai/logomaker/start",
        temas: ["logotipo", "logo", "logos", "logotipos", "design", "personalização", "identidade visual", "personalizar"]
    },
    {
        titulo: "LogoAI",
        link: "https://www.logoai.com/",
        descricao: "LogoAI é uma plataforma de criação de logotipos que utiliza IA para gerar designs profissionais automaticamente. Com diversas opções de personalização, LogoAI é ideal para empresas que buscam uma solução rápida e eficaz para criar sua marca.",
        info: "https://www.logoai.com/",
        temas: ["logotipo", "logo", "logos", "logotipos", "design", "marca", "marcas", "personalização", "personalizar"]
    },
    {
        titulo: "LogoMaster AI",
        link: "https://app.logomaster.ai/",
        descricao: "LogoMaster AI é uma ferramenta de design de logotipos que oferece uma experiência de criação fácil e intuitiva, utilizando inteligência artificial para gerar logotipos de alta qualidade. É ideal para startups e pequenas empresas que precisam de uma identidade visual profissional sem complicações.",
        info: "https://app.logomaster.ai/",
        temas: ["logotipo", "logo", "logos", "logotipos", "design", "identidade visual", "personalização", "personalizar"]
    }
];