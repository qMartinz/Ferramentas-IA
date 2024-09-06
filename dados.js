let dados = [
    {
        titulo: "Gemini",
        link: "https://gemini.google.com",
        descricao: "Gemini: Uma Nova Era na Inteligência Artificial. O Gemini é a mais recente e poderosa criação da Google DeepMind, representando um avanço significativo na área da inteligência artificial. Essa IA multi-modal é capaz de processar e gerar diferentes tipos de dados, como texto, código e até mesmo imagens, o que a torna uma ferramenta extremamente versátil.",
        info: "https://pt.wikipedia.org/wiki/Gemini_(modelo_de_linguagem)",
        temas: ["multimodal", "google", "linguagem", "texto", "textos", "código", "códigos", "processamento", "codigo", "codigos",  "redação", "redações"]
    },
    {
        titulo: "Chat-GPT",
        link: "https://chatgpt.com",
        descricao: "O ChatGPT é um modelo de linguagem de grande porte desenvolvido pela OpenAI, capaz de gerar textos semelhantes aos humanos em conversas. Ele utiliza a arquitetura GPT (Generative Pre-trained Transformer) para compreender e responder a uma ampla variedade de perguntas e solicitações, tornando as interações com a inteligência artificial mais naturais e intuitivas.",
        info: "https://pt.wikipedia.org/wiki/ChatGPT",
        temas: ["multimodal", "linguagem", "texto", "textos", "código", "codigo", "códigos", "codigos", "imagens", "imagem",  "redação", "redações"]
    },
    {
        titulo: "Microsoft Copilot",
        link: "https://www.microsoft.com/copilot",
        descricao: "O Microsoft Copilot é um assistente de IA integrado à plataforma Microsoft 365, projetado para aumentar a produtividade dos usuários. Ele utiliza a tecnologia GPT para gerar texto, traduzir idiomas, escrever diferentes tipos de conteúdo criativo e responder a suas perguntas de forma informativa. O Copilot está disponível em diversos aplicativos da Microsoft, como o Word, Excel e PowerPoint, tornando-o uma ferramenta poderosa para o dia a dia.",
        info: "https://en.wikipedia.org/wiki/Microsoft_365_Copilot",
        temas: ["produtividade", "microsoft", "multimodal", "assistente", "automação", "automatizar", "automatização", "linguagem", "texto", "código", "codigo", "codigos", "códigos", "redação", "redações"]
    },
    {
        titulo: "Mistral AI",
        link: "https://mistral.ai",
        descricao: "O Mistral AI é uma empresa de pesquisa em IA focada no desenvolvimento de modelos de linguagem de grande porte. Seu modelo principal, o Mistral 7B, é conhecido por sua alta qualidade e capacidade de gerar textos criativos e coerentes. O Mistral AI tem como objetivo democratizar o acesso à IA, oferecendo modelos de linguagem de código aberto e ferramentas para desenvolvedores.",
        info: "https://en.wikipedia.org/wiki/Mistral_AI",
        temas: ["multimodal", "linguagem", "texto", "textos", "código", "codigo", "codigos", "códigos", "redação", "redações"]
    },
    {
        titulo: "Claude AI",
        link: "https://claude.ai",
        descricao: "Claude é um assistente de IA criado pela Anthropic, projetado para ser altamente seguro e alinhado com as necessidades humanas. Ele é especializado em conversação natural, proporcionando respostas claras e éticas em diversas situações. Claude é uma ferramenta útil para tarefas que requerem suporte de linguagem natural.",
        info: "https://en.wikipedia.org/wiki/Claude_(language_model)",
        temas: ["linguagem", "conversação", "ética", "assistente"]
    },
    {
        titulo: "Jasper AI",
        link: "https://www.jasper.ai",
        descricao: "Jasper AI é uma plataforma de inteligência artificial focada em geração de conteúdo, utilizada por profissionais de marketing, escritores e criadores de conteúdo. Com uma ampla gama de modelos pré-treinados, Jasper ajuda a criar textos, slogans, descrições de produtos e muito mais, economizando tempo e esforço.",
        info: "https://handwiki.org/wiki/Software:Jasper_AI",
        temas: ["conteúdo", "marketing", "criatividade", "automação", "automatizar", "automatização"]
    },
    {
        titulo: "MidJourney",
        link: "https://www.midjourney.com",
        descricao: "MidJourney é uma IA de geração de imagens que permite aos usuários criar obras de arte digitais a partir de descrições textuais. Utilizada por designers, artistas e criadores, essa ferramenta transforma ideias em imagens de alta qualidade, explorando novas formas de expressão visual.",
        info: "https://pt.wikipedia.org/wiki/Midjourney",
        temas: ["imagens", "imagem", "arte digital", "criatividade", "design"]
    },
    {
        titulo: "DALL-E",
        link: "https://openai.com/dall-e",
        descricao: "DALL-E é um modelo de IA desenvolvido pela OpenAI que gera imagens a partir de descrições textuais. Ele utiliza a arquitetura GPT para entender descrições complexas e criar ilustrações que correspondem às palavras, oferecendo uma ferramenta poderosa para designers, publicitários e artistas.",
        info: "https://pt.wikipedia.org/wiki/DALL-E",
        temas: ["imagens", "arte digital", "criatividade", "openai"]
    },
    {
        titulo: "Cohere AI",
        link: "https://cohere.ai",
        descricao: "Cohere AI é uma plataforma que oferece modelos de linguagem de última geração para desenvolvedores e empresas. Com foco em NLP (Processamento de Linguagem Natural), a Cohere permite a integração de IA em aplicativos para melhorar a compreensão e geração de texto, análise de sentimento, tradução e muito mais.",
        info: "https://en.wikipedia.org/wiki/Cohere",
        temas: ["linguagem", "NLP", "texto", "análise", "sentimento"]
    },
    {
        titulo: "Hugging Face",
        link: "https://huggingface.co",
        descricao: "Hugging Face é uma plataforma líder em NLP e Machine Learning que oferece ferramentas de código aberto para desenvolvedores treinarem e implementarem modelos de linguagem e visão computacional. Amplamente utilizada na academia e na indústria, a Hugging Face disponibiliza modelos pré-treinados e uma comunidade ativa para colaboração.",
        info: "https://en.wikipedia.org/wiki/Hugging_Face",
        temas: ["NLP", "machine learning", "código aberto", "visão computacional"]
    },
    {
        titulo: "Synthesia",
        link: "https://www.synthesia.io",
        descricao: "Synthesia é uma plataforma de criação de vídeos que utiliza IA para gerar vídeos com avatares digitais a partir de textos. Amplamente usada em marketing, educação e comunicação corporativa, a Synthesia permite a criação de vídeos de alta qualidade sem a necessidade de câmeras ou atores.",
        info: "https://en.wikipedia.org/wiki/Synthesia_(company)",
        temas: ["vídeo", "avatares digitais", "educação", "marketing"]
    },
    {
        titulo: "Runway ML",
        link: "https://runwayml.com",
        descricao: "Runway ML é uma plataforma de criação de conteúdo visual assistida por IA, que permite a edição de vídeos e imagens de forma inovadora. Com uma variedade de ferramentas de aprendizado de máquina, Runway ML é utilizada por artistas, cineastas e criadores de conteúdo para explorar novas formas de expressão visual.",
        info: "https://en.wikipedia.org/wiki/Runway_(company)",
        temas: ["vídeo", "edição", "imagem", "machine learning", "criatividade"]
    },
    {
        titulo: "Character AI",
        link: "https://character.ai",
        descricao: "Character AI é uma plataforma que permite aos usuários criar e interagir com personagens de IA personalizados. Usada para entretenimento, educação e treinamento, essa ferramenta oferece uma experiência imersiva ao gerar diálogos com personagens virtuais que podem ter personalidades, habilidades e conhecimentos variados.",
        info: "https://pt.wikipedia.org/wiki/Character.ai",
        temas: ["conversação", "personagens virtuais", "entretenimento", "educação"]
    },
    {
        titulo: "Replika",
        link: "https://replika.ai",
        descricao: "Replika é uma IA de conversação que atua como um amigo virtual, permitindo aos usuários conversar sobre qualquer tópico. Utilizada para apoio emocional, socialização e até mesmo como uma ferramenta para desenvolvimento pessoal, Replika é conhecida por suas interações empáticas e personalizadas.",
        info: "https://en.wikipedia.org/wiki/Replika",
        temas: ["conversação", "apoio emocional", "assistente", "bem-estar"]
    },
    {
        titulo: "Copy.ai",
        link: "https://www.copy.ai",
        descricao: "Copy.ai é uma ferramenta de IA voltada para a geração de conteúdo de marketing e redação. Ela ajuda empresas e profissionais a criar textos para anúncios, descrições de produtos, e-mails e muito mais, economizando tempo e aumentando a eficiência das campanhas de marketing.",
        info: "#",
        temas: ["texto", "marketing", "automação", "criatividade"]
    },
    {
        titulo: "Perplexity AI",
        link: "https://www.perplexity.ai",
        descricao: "Perplexity AI é um motor de busca assistido por IA que fornece respostas claras e precisas para perguntas dos usuários. Ele combina técnicas de NLP com a busca tradicional para oferecer respostas mais contextualizadas e detalhadas, tornando-o uma ferramenta útil para pesquisas e aprendizado.",
        info: "https://pt.wikipedia.org/wiki/Perplexity_AI",
        temas: ["busca", "NLP", "pesquisa", "informação"]
    },
    {
        titulo: "Lumen5",
        link: "https://www.lumen5.com",
        descricao: "Lumen5 é uma plataforma de criação de vídeos que usa IA para transformar textos e artigos em vídeos dinâmicos. Ideal para marketing digital, a ferramenta facilita a produção de vídeos envolventes e profissionais com base em conteúdo escrito, tornando o processo de criação de vídeos acessível a todos.",
        info: "https://lumen5.com/about/",
        temas: ["vídeo", "marketing", "conteúdo digital", "automação"]
    },
    {
        titulo: "Pictory",
        link: "https://pictory.ai",
        descricao: "Pictory é uma ferramenta de IA para criação de vídeos curtos e envolventes a partir de conteúdo de longa duração, como webinars e blogs. Com foco em redes sociais e marketing, Pictory permite que os usuários gerem vídeos rapidamente, destacando as partes mais importantes do conteúdo.",
        info: "https://pictory.ai/about-pictory",
        temas: ["vídeo", "marketing", "automação"]
    },
    {
        titulo: "Pika Art",
        link: "https://pika.art",
        descricao: "Pika Art é uma ferramenta de IA que transforma imagens estáticas em vídeos dinâmicos. Ideal para criadores de conteúdo e designers, Pika Art oferece uma maneira simples de adicionar movimento e vida às suas ilustrações, fotos e gráficos, criando vídeos cativantes a partir de imagens.",
        info: "https://pika.art/about",
        temas: ["imagem", "vídeo", "animação", "design"]
    },
    {
        titulo: "Fal AI",
        link: "https://fal.ai",
        descricao: "Fal AI é uma plataforma que oferece diversos modelos de geração de imagens utilizando inteligência artificial. Com uma ampla variedade de estilos e técnicas, Fal AI é uma ferramenta poderosa para artistas e designers que buscam explorar novas fronteiras na criação visual.",
        info: "https://fal.ai/about",
        temas: ["imagem", "arte digital", "criatividade", "design"]
    },
    {
        titulo: "Deepbrain AI",
        link: "https://www.deepbrain.io/pt",
        descricao: "Deepbrain AI oferece uma série de ferramentas baseadas em IA para gerar vídeos e animar imagens de pessoas. Muito utilizada em marketing, educação e entretenimento, a plataforma permite transformar fotos em vídeos animados realistas, criando avatares digitais com expressões e movimentos naturais.",
        info: "https://www.deepbrain.io/pt/company/about",
        temas: ["vídeo", "animação", "imagem", "avatares digitais", "marketing"]
    },
    {
        titulo: "Eleven Labs",
        link: "https://elevenlabs.io",
        descricao: "Eleven Labs é uma plataforma de inteligência artificial especializada na geração de áudios de voz e efeitos sonoros. Utilizada por criadores de conteúdo, desenvolvedores de jogos e produtores de mídia, Eleven Labs oferece ferramentas avançadas para criar vozes realistas e sons imersivos.",
        info: "https://en.wikipedia.org/wiki/ElevenLabs",
        temas: ["áudio", "síntese", "voz", "efeitos sonoros", "mídia"]
    },
    {
        titulo: "Stable Diffusion",
        link: "https://stability.ai",
        descricao: "Stable Diffusion é um modelo de IA para geração de imagens baseado em técnicas de difusão. Ele permite criar imagens a partir de descrições textuais, com um controle detalhado sobre o estilo e a composição. Stable Diffusion é popular entre artistas digitais e desenvolvedores por sua flexibilidade e qualidade.",
        info: "https://pt.wikipedia.org/wiki/Stable_Diffusion",
        temas: ["imagem", "arte digital", "criatividade", "text-to-image"]
    },
    {
        titulo: "DeepL Translator",
        link: "https://www.deepl.com",
        descricao: "DeepL é um tradutor online baseado em IA, conhecido por sua precisão e fluência em comparação com outros tradutores automáticos. Ele oferece traduções em múltiplos idiomas e é amplamente utilizado por profissionais e empresas que precisam de traduções rápidas e confiáveis.",
        info: "https://pt.wikipedia.org/wiki/DeepL",
        temas: ["tradução", "NLP", "linguagem", "texto"]
    },
    {
        titulo: "Descript",
        link: "https://www.descript.com",
        descricao: "Descript é uma plataforma de edição de áudio e vídeo assistida por IA que transforma o processo de edição em uma tarefa simples e intuitiva. Com ferramentas para transcrição automática, edição de áudio baseada em texto e geração de voz, Descript é ideal para criadores de podcast, vídeos e outros conteúdos multimídia.",
        info: "https://www.descript.com/about",
        temas: ["áudio", "edição", "vídeo", "transcrição", "voz"]
    },
    {
        titulo: "Synthesys",
        link: "https://synthesys.io",
        descricao: "Synthesys é uma ferramenta de IA que permite criar vozes e avatares realistas para vídeos, áudios e apresentações. Com foco em gerar narrações naturais e expressivas, Synthesys é utilizada por empresas de marketing, educação e mídia para criar conteúdos mais envolventes e profissionais.",
        info: "https://synthesys.io/about/",
        temas: ["voz", "avatares digitais", "vídeo", "marketing"]
    },
    {
        titulo: "Boomy",
        link: "https://boomy.com",
        descricao: "Boomy é uma plataforma de IA que permite a criação de músicas de forma automática. Ideal para criadores de conteúdo, podcasters e desenvolvedores de jogos, Boomy oferece uma maneira rápida e fácil de gerar faixas musicais personalizadas, sem necessidade de experiência em produção musical.",
        info: "#",
        temas: ["música", "som", "criatividade", "automação"]
    },
    {
        titulo: "Teachable Machine",
        link: "https://teachablemachine.withgoogle.com/",
        descricao: "Teachable Machine é uma ferramenta do Google que permite a qualquer pessoa treinar modelos de aprendizado de máquina sem a necessidade de codificação. Ideal para iniciantes e educadores, a plataforma facilita a criação de modelos para reconhecimento de imagens, sons e poses, tornando o aprendizado de IA mais acessível e interativo.",
        info: "https://teachablemachine.withgoogle.com/faq",
        temas: ["aprendizado", "máquina", "educação", "acessibilidade", "intuitivo", "reconhecimento", "imagem"]
    },
    {
        titulo: "Pixlr",
        link: "https://pixlr.com/br/",
        descricao: "Pixlr é uma plataforma de edição de fotos online que utiliza IA para facilitar o processo de criação e edição de imagens. Com uma interface intuitiva e uma ampla gama de ferramentas, Pixlr é ideal para designers, fotógrafos e entusiastas que buscam uma solução acessível e poderosa para edição de imagens.",
        info: "https://pt.wikipedia.org/wiki/Pixlr",
        temas: ["edição", "imagem", "fotografia", "design"]
    },
    {
        titulo: "Removal.AI",
        link: "https://removal.ai/",
        descricao: "Removal.AI é uma ferramenta online que utiliza inteligência artificial para remover automaticamente o fundo de imagens. Com uma interface simples e rápida, é ideal para designers, fotógrafos e criadores de conteúdo que precisam de recortes precisos de imagens sem a necessidade de edição manual.",
        info: "https://removal.ai/about-us/",
        temas: ["fundo", "edição", "imagem", "design"]
    },
    {
        titulo: "Tess AI",
        link: "https://pareto.io/pt-br/tess-ai/",
        descricao: "Tess AI é uma ferramenta de inteligência artificial desenvolvida pela Pareto que auxilia na automação de tarefas administrativas e operacionais, como coleta de dados, agendamento e monitoramento de processos. É projetada para aumentar a eficiência e permitir que equipes se concentrem em atividades mais estratégicas.",
        info: "https://pareto.io/pt-br/sobre/",
        temas: ["automação", "administração", "negócios"]
    },
    {
        titulo: "Tabnine",
        link: "https://www.tabnine.com/",
        descricao: "Tabnine é uma ferramenta de autocompletar código baseada em inteligência artificial, que oferece sugestões de código em tempo real para desenvolvedores. Integrado a vários editores de texto e IDEs, Tabnine aumenta a produtividade e ajuda a escrever código de forma mais rápida e precisa.",
        info: "https://en.wikipedia.org/wiki/Tabnine",
        temas: ["programação", "código", "desenvolvimento", "software"]
    },
    {
        titulo: "Scenario",
        link: "https://www.scenario.com/",
        descricao: "Scenario é uma plataforma de geração de conteúdo visual baseada em IA, especialmente focada em criar ativos personalizados para jogos e outras aplicações interativas. Com ferramentas que permitem a geração de arte e design diretamente a partir de descrições textuais, Scenario é uma solução poderosa para desenvolvedores e designers.",
        info: "https://en.wikipedia.org/wiki/Scenario_(artwork)",
        temas: ["imagem", "arte", "jogos", "design"]
    },
    {
        titulo: "Promethean AI",
        link: "https://www.prometheanai.com/",
        descricao: "Promethean AI é uma inteligência artificial que ajuda na criação de ambientes virtuais para jogos e simulações. Projetada para assistentes de arte e design, Promethean AI acelera o processo de desenvolvimento ao sugerir e construir cenários em 3D, permitindo que artistas se concentrem na criação de elementos mais detalhados e inovadores.",
        info: "https://www.prometheanai.com/",
        temas: ["design", "jogos", "ambientes", "3D", "desenvolvimento"]
    },
    {
        titulo: "Ludo AI",
        link: "https://www.ludo.ai/",
        descricao: "Ludo AI é uma plataforma de IA voltada para a inovação e o design de jogos. Utilizada para gerar ideias, conceitos e até mesmo níveis de jogos, Ludo AI facilita o processo criativo para desenvolvedores e designers, ajudando a transformar ideias em realidade de forma mais rápida e eficiente.",
        info: "https://ludo.ai/blog",
        temas: ["design", "jogos", "inovação", "ideias", "desenvolvimento"]
    },
    {
        titulo: "Slidesgo",
        link: "https://slidesgo.com/pt/ai-presentations",
        descricao: "Slidesgo oferece templates de apresentações criados com o auxílio de inteligência artificial. Com uma vasta coleção de modelos de slides e designs, a plataforma facilita a criação de apresentações visuais e profissionais para qualquer finalidade, desde reuniões de negócios até apresentações acadêmicas.",
        info: "https://slidesgo.com/pt/ai-presentations",
        temas: ["apresentações", "design", "slides"]
    },
    {
        titulo: "SlidesAI",
        link: "https://www.slidesai.io/pt",
        descricao: "SlidesAI é uma ferramenta que usa inteligência artificial para ajudar na criação de apresentações de slides. Ela oferece sugestões automáticas para conteúdo, design e layout, tornando o processo de criação de apresentações mais rápido e eficiente.",
        info: "https://www.slidesai.io/pt",
        temas: ["apresentações", "design", "slides"]
    },
    {
        titulo: "Gamma",
        link: "https://gamma.app/",
        descricao: "Gamma é uma plataforma de criação de apresentações que utiliza IA para ajudar a construir slides de maneira intuitiva e eficiente. A ferramenta oferece recomendações de design e estrutura para melhorar a apresentação de informações e facilitar a comunicação visual.",
        info: "https://gamma.app/",
        temas: ["apresentações", "design", "slides"]
    }
];