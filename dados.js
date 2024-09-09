let dados = [
    {
        titulo: "Gemini",
        link: "https://gemini.google.com",
        descricao: "Gemini: Uma Nova Era na Inteligência Artificial. O Gemini é a mais recente e poderosa criação da Google DeepMind, representando um avanço significativo na área da inteligência artificial. Essa IA multi-modal é capaz de processar e gerar diferentes tipos de dados, como texto, código e até mesmo imagens, o que a torna uma ferramenta extremamente versátil.",
        temas: ["multimodal", "google", "linguagem", "texto", "textos", "código", "códigos", "processamento", "processar", "codigo", "codigos", "redação", "redações", "escrita", "composição", "documento", "documentos", "artigo", "artigos"]
    },
    {
        titulo: "Chat-GPT",
        link: "https://chatgpt.com",
        descricao: "O ChatGPT é um modelo de linguagem de grande porte desenvolvido pela OpenAI, capaz de gerar textos semelhantes aos humanos em conversas. Ele utiliza a arquitetura GPT (Generative Pre-trained Transformer) para compreender e responder a uma ampla variedade de perguntas e solicitações, tornando as interações com a inteligência artificial mais naturais e intuitivas.",
        temas: ["multimodal", "linguagem", "texto", "textos", "código", "codigo", "códigos", "codigos", "imagens", "imagem", "redação", "redações", "escrita", "composição", "documento", "documentos", "artigo", "artigos"]
    },
    {
        titulo: "Microsoft Copilot",
        link: "https://www.microsoft.com/copilot",
        descricao: "O Microsoft Copilot é um assistente de IA integrado à plataforma Microsoft 365, projetado para aumentar a produtividade dos usuários. Ele utiliza a tecnologia GPT para gerar texto, traduzir idiomas, escrever diferentes tipos de conteúdo criativo e responder a suas perguntas de forma informativa. O Copilot está disponível em diversos aplicativos da Microsoft, como o Word, Excel e PowerPoint, tornando-o uma ferramenta poderosa para o dia a dia.",
        temas: ["produtividade", "microsoft", "multimodal", "assistente", "assistentes", "automação", "automatizar", "automatização", "linguagem", "texto", "código", "codigo", "codigos", "códigos", "redação", "redações", "escrita", "composição", "documento", "documentos", "artigo", "artigos"]
    },
    {
        titulo: "Mistral AI",
        link: "https://mistral.ai",
        descricao: "O Mistral AI é uma empresa de pesquisa em IA focada no desenvolvimento de modelos de linguagem de grande porte. Seu modelo principal, o Mistral 7B, é conhecido por sua alta qualidade e capacidade de gerar textos criativos e coerentes. O Mistral AI tem como objetivo democratizar o acesso à IA, oferecendo modelos de linguagem de código aberto e ferramentas para desenvolvedores.",
        temas: ["multimodal", "linguagem", "texto", "textos", "código", "codigo", "codigos", "códigos", "redação", "redações", "escrita", "composição", "documento", "documentos", "artigo", "artigos"]
    },
    {
        titulo: "Claude AI",
        link: "https://claude.ai",
        descricao: "Claude é um assistente de IA criado pela Anthropic, projetado para ser altamente seguro e alinhado com as necessidades humanas. Ele é especializado em conversação natural, proporcionando respostas claras e éticas em diversas situações. Claude é uma ferramenta útil para tarefas que requerem suporte de linguagem natural.",
        temas: ["linguagem", "conversação", "conversa", "diálogo", "diálogos", "ética", "moral", "assistente", "assistentes", "suporte", "ajuda", "apoio"]
    },
    {
        titulo: "Jasper AI",
        link: "https://www.jasper.ai",
        descricao: "Jasper AI é uma plataforma de inteligência artificial focada em geração de conteúdo, utilizada por profissionais de marketing, escritores e criadores de conteúdo. Com uma ampla gama de modelos pré-treinados, Jasper ajuda a criar textos, slogans, descrições de produtos e muito mais, economizando tempo e esforço.",
        temas: ["conteúdo", "conteúdos", "marketing", "propaganda", "publicidade", "automação", "automatizar", "automatização", "geração", "produção"]
    },
    {
        titulo: "MidJourney",
        link: "https://www.midjourney.com",
        descricao: "MidJourney é uma IA de geração de imagens que permite aos usuários criar obras de arte digitais a partir de descrições textuais. Utilizada por designers, artistas e criadores, essa ferramenta transforma ideias em imagens de alta qualidade, explorando novas formas de expressão visual.",
        temas: ["imagens", "imagem", "arte digital", "arte", "obras", "design", "expressão", "expressões", "visual", "visuais"]
    },
    {
        titulo: "DALL-E",
        link: "https://openai.com/dall-e",
        descricao: "DALL-E é um modelo de IA desenvolvido pela OpenAI que gera imagens a partir de descrições textuais. Ele utiliza a arquitetura GPT para entender descrições complexas e criar ilustrações que correspondem às palavras, oferecendo uma ferramenta poderosa para designers, publicitários e artistas.",
        temas: ["imagens", "imagem", "arte digital", "arte", "obras", "design", "openai", "ilustração", "ilustrações"]
    },
    {
        titulo: "Cohere AI",
        link: "https://cohere.ai",
        descricao: "Cohere AI é uma plataforma que oferece modelos de linguagem de última geração para desenvolvedores e empresas. Com foco em NLP (Processamento de Linguagem Natural), a Cohere permite a integração de IA em aplicativos para melhorar a compreensão e geração de texto, análise de sentimento, tradução e muito mais.",
        temas: ["linguagem", "NLP", "texto", "textos", "análise", "análises", "sentimento", "sentimentos", "compreensão", "geração", "produção", "tradução", "traduzir"]
    },
    {
        titulo: "Hugging Face",
        link: "https://huggingface.co",
        descricao: "Hugging Face é uma plataforma líder em NLP e Machine Learning que oferece ferramentas de código aberto para desenvolvedores treinarem e implementarem modelos de linguagem e visão computacional. Amplamente utilizada na academia e na indústria, a Hugging Face disponibiliza modelos pré-treinados e uma comunidade ativa para colaboração.",
        temas: ["NLP", "machine learning", "código aberto", "open source", "visão computacional", "treinamento", "implementação", "colaboração", "academia", "indústria"]
    },
    {
        titulo: "Synthesia",
        link: "https://www.synthesia.io",
        descricao: "Synthesia é uma plataforma de criação de vídeos que utiliza IA para gerar vídeos com avatares digitais a partir de textos. Amplamente usada em marketing, educação e comunicação corporativa, a Synthesia permite a criação de vídeos de alta qualidade sem a necessidade de câmeras ou atores.",
        temas: ["vídeo", "video", "vídeos", "videos", "avatares digitais", "avatar", "educação", "ensino", "aprendizado", "marketing", "propaganda", "publicidade", "comunicação"]
    },
    {
        titulo: "Runway ML",
        link: "https://runwayml.com",
        descricao: "Runway ML é uma plataforma de criação de conteúdo visual assistida por IA, que permite a edição de vídeos e imagens de forma inovadora. Com uma variedade de ferramentas de aprendizado de máquina, Runway ML é utilizada por artistas, cineastas e criadores de conteúdo para explorar novas formas de expressão visual.",
        temas: ["vídeo", "video", "vídeos", "videos", "edição", "editar", "imagem", "imagens", "machine learning", "expressão", "expressões", "visual", "visuais"]
    },
    {
        titulo: "Synthesys",
        link: "https://synthesys.io",
        descricao: "Synthesys é uma ferramenta de IA que permite criar vozes e avatares realistas para vídeos, áudios e apresentações. Com foco em gerar narrações naturais e expressivas, Synthesys é utilizada por empresas de marketing, educação e mídia para criar conteúdos mais envolventes e profissionais.",
        temas: ["voz", "vozes", "avatar", "avatares digitais", "vídeo", "vídeos", "audio", "áudio", "áudios", "audios", "som", "sons", "apresentação", "apresentações", "narrativa", "narração", "narrações", "narrativas", "marketing", "educação", "mídia", "mídias", "conteúdo", "conteúdos"]
    },
    {
        titulo: "Eleven Labs",
        link: "https://elevenlabs.io/",
        descricao: "ElevenLabs é uma plataforma de inteligência artificial especializada em geração de voz de alta qualidade. Ela permite criar áudios realistas a partir de texto, utilizando avançados modelos de síntese de voz. O serviço é muito popular entre criadores de conteúdo, desenvolvedores e empresas que buscam personalizar suas experiências sonoras, oferecendo vozes naturais com alta precisão de emoção e tonalidade.",
        temas: ["voz", "vozes", "efeitos sonoros", "som", "sons", "avatar", "avatares digitais", "vídeo", "vídeos", "audio", "áudio", "áudios", "audios", "apresentação", "apresentações", "narrativa", "narração", "narrações", "narrativas", "marketing", "educação", "mídia", "mídias"]
    },
    {
        titulo: "Boomy",
        link: "https://boomy.com",
        descricao: "Boomy é uma plataforma de IA que permite a criação de músicas de forma automática. Ideal para criadores de conteúdo, podcasters e desenvolvedores de jogos, Boomy oferece uma maneira rápida e fácil de gerar faixas musicais personalizadas, sem necessidade de experiência em produção.",
        temas: ["música", "músicas", "musica", "musicas", "som", "sons", "automação", "automatização", "geração", "produção", "personalização", "personalizar"]
    },
    {
        titulo: "Teachable Machine",
        link: "https://teachablemachine.withgoogle.com/",
        descricao: "Teachable Machine é uma ferramenta do Google que permite a qualquer pessoa treinar modelos de aprendizado de máquina sem a necessidade de codificação. Ideal para iniciantes e educadores, a plataforma facilita a criação de modelos para reconhecimento de imagens, sons e poses.",
        temas: ["aprendizado", "aprendizagem", "máquina", "máquinas", "educação", "acessibilidade", "intuitivo", "intuitiva", "reconhecimento", "imagem", "imagens", "som", "sons", "pose", "poses"]
    },
    {
        titulo: "Pixlr",
        link: "https://pixlr.com/br/",
        descricao: "Pixlr é uma plataforma de edição de fotos online que utiliza IA para facilitar o processo de criação e edição de imagens. Com uma interface intuitiva e uma ampla gama de ferramentas, Pixlr é ideal para designers, fotógrafos e entusiastas que buscam uma solução rápida e eficiente.",
        temas: ["edição", "editar", "imagem", "imagens", "foto", "fotos", "fotografia", "design", "ferramentas", "criação"]
    },
    {
        titulo: "Removal.AI",
        link: "https://removal.ai/",
        descricao: "Removal.AI é uma ferramenta online que utiliza inteligência artificial para remover automaticamente o fundo de imagens. Com uma interface simples e rápida, é ideal para designers, fotógrafos e criadores de conteúdo que precisam de recortes precisos de imagens sem a necessidade de edição manual.",
        temas: ["fundo", "fundo", "edição", "editar", "imagem", "imagens", "design", "recorte", "recortes", "recortar", "criadores", "conteúdo"]
    },
    {
        titulo: "Tess AI",
        link: "https://pareto.io/pt-br/tess-ai/",
        descricao: "Tess AI é uma ferramenta de inteligência artificial desenvolvida pela Pareto que auxilia na automação de tarefas administrativas e operacionais, como coleta de dados, agendamento e monitoramento de processos. É projetada para aumentar a eficiência e permitir que equipes se concentrem em atividades mais estratégicas.",
        temas: ["automação", "automatização", "administrativa", "administração", "tarefas", "negócios", "operacional", "operacionais", "eficiência", "agendamento", "monitoramento", "processo", "processos", "dados", "coleta", "dados"]
    },
    {
        titulo: "Tabnine",
        link: "https://www.tabnine.com/",
        descricao: "Tabnine é uma ferramenta de autocompletar código baseada em inteligência artificial, que oferece sugestões de código em tempo real para desenvolvedores. Integrado a vários editores de texto e IDEs, Tabnine aumenta a produtividade e ajuda a escrever código de forma mais rápida e precisa.",
        temas: ["programação", "programar", "código", "codigos", "códigos", "desenvolvimento", "software", "produtividade", "sugestões", "escrever", "IDE", "editor", "texto", "editores", "texto"]
    },
    {
        titulo: "Scenario",
        link: "https://www.scenario.com/",
        descricao: "Scenario é uma plataforma de geração de conteúdo visual baseada em IA, especialmente focada em criar ativos personalizados para jogos e outras aplicações interativas. Com ferramentas que permitem a geração de arte e design diretamente a partir de descrições textuais, Scenario é uma solução inovadora para desenvolvedores de jogos e designers.",
        temas: ["imagem", "imagens", "arte", "artes", "jogos", "jogo", "design", "criação", "conteúdo visual", "aplicações", "aplicação", "personalização", "personalizar", "interativas", "interatividade"]
    },
    {
        titulo: "Promethean AI",
        link: "https://www.prometheanai.com/",
        descricao: "Promethean AI é uma inteligência artificial que ajuda na criação de ambientes virtuais para jogos e simulações. Projetada para assistentes de arte e design, Promethean AI acelera o processo de desenvolvimento ao sugerir e construir cenários em 3D, permitindo que artistas se concentrem na criação de detalhes e na narrativa do jogo.",
        temas: ["design", "jogos", "jogo", "ambientes", "ambiente", "3D", "desenvolvimento", "assistentes", "arte", "cenário", "cenários", "simulações", "narrativa", "detalhes", "criação"]
    },
    {
        titulo: "Ludo AI",
        link: "https://www.ludo.ai/",
        descricao: "Ludo AI é uma plataforma de IA voltada para a inovação e o design de jogos. Utilizada para gerar ideias, conceitos e até mesmo níveis de jogos, Ludo AI facilita o processo criativo para desenvolvedores e designers, ajudando a transformar ideias em realidade.",
        temas: ["design", "jogos", "jogo", "inovação", "ideia", "ideias", "conceito", "conceitos", "desenvolvimento", "criação", "processo criativo"]
    },
    {
        titulo: "Slidesgo",
        link: "https://slidesgo.com/pt/ai-presentations",
        descricao: "Slidesgo oferece templates de apresentações criados com o auxílio de inteligência artificial. Com uma vasta coleção de modelos de slides e designs, a plataforma facilita a criação de apresentações visuais e profissionais para qualquer finalidade, desde reuniões de negócios até apresentações acadêmicas.",
        temas: ["apresentações", "apresentação", "design", "slides", "slide", "modelos", "templates", "negócios", "acadêmico", "acadêmica", "acadêmicas"]
    },
    {
        titulo: "SlidesAI",
        link: "https://www.slidesai.io/pt",
        descricao: "SlidesAI é uma ferramenta que usa inteligência artificial para ajudar na criação de apresentações de slides. Ela oferece sugestões automáticas para conteúdo, design e layout, tornando o processo de criação de apresentações mais rápido e eficiente.",
        temas: ["apresentações", "apresentação", "design", "slides", "slide", "conteúdo", "criação", "layout", "sugestões", "automatização", "automática"]
    },
    {
        titulo: "Gamma",
        link: "https://gamma.app/",
        descricao: "Gamma é uma plataforma de criação de apresentações que utiliza IA para ajudar a construir slides de maneira intuitiva e eficiente. A ferramenta oferece recomendações de design e estrutura para melhorar a apresentação de informações e facilitar a comunicação visual.",
        temas: ["apresentações", "apresentação", "design", "slides", "slide", "estrutura", "recomendações", "criação", "comunicação", "informações", "informação", "visual", "visuais", "intuitivo", "intuitiva"]
    },
    {
        titulo: "Smallpdf AI",
        link: "https://smallpdf.com/pt/ia-pdf",
        descricao: "Smallpdf AI é uma ferramenta poderosa para manipulação e otimização de arquivos PDF. Com recursos como compressão, conversão e edição de PDFs, a Smallpdf AI oferece uma solução eficiente para quem lida com documentos em formato PDF regularmente.",
        temas: ["PDF", "compressão", "comprimir", "conversão", "converter", "edição", "editar"]
    },
    {
        titulo: "UPDF",
        link: "https://updf.com/br/",
        descricao: "UPDF é um editor de PDF que permite aos usuários criar, editar, anotar e converter documentos PDF de maneira intuitiva. Com foco na facilidade de uso, o UPDF é ideal para profissionais que precisam gerenciar documentos PDF de forma eficiente.",
        temas: ["PDF", "edição", "anotação", "anotações", "conversão", "converter"]
    },
    {
        titulo: "Designs.ai LogoMaker",
        link: "https://designs.ai/logomaker/start",
        descricao: "Designs.ai LogoMaker é uma plataforma que utiliza IA para criar logotipos personalizados de maneira rápida e fácil. Com uma interface intuitiva e uma vasta gama de opções de design, é uma ferramenta excelente para empreendedores e empresas que precisam de uma identidade visual única.",
        temas: ["logotipo", "logo", "logos", "logotipos", "design", "personalização", "identidade visual", "personalizar"]
    },
    {
        titulo: "LogoAI",
        link: "https://www.logoai.com/",
        descricao: "LogoAI é uma plataforma de criação de logotipos que utiliza IA para gerar designs profissionais automaticamente. Com diversas opções de personalização, LogoAI é ideal para empresas que buscam uma solução rápida e eficaz para criar sua marca.",
        temas: ["logotipo", "logo", "logos", "logotipos", "design", "marca", "marcas", "personalização", "personalizar"]
    },
    {
        titulo: "LogoMaster AI",
        link: "https://app.logomaster.ai/",
        descricao: "LogoMaster AI é uma ferramenta de design de logotipos que oferece uma experiência de criação fácil e intuitiva, utilizando inteligência artificial para gerar logotipos de alta qualidade. É ideal para startups e pequenas empresas que precisam de uma identidade visual profissional sem complicações.",
        temas: ["logotipo", "logo", "logos", "logotipos", "design", "identidade visual", "personalização", "personalizar"]
    },
    {
        titulo: "Teachy",
        link: "https://www.teachy.com.br/",
        descricao: "Teachy é uma plataforma educacional que utiliza inteligência artificial para personalizar a experiência de aprendizado. Ideal para estudantes e educadores, a ferramenta oferece recursos adaptativos que ajudam a otimizar o ensino e o aprendizado em diversas disciplinas.",
        temas: ["educação", "educar", "ensino", "ensinar", "aprendizado", "personalização", "personalizar"]
    },
    {
        titulo: "Quillbot",
        link: "https://quillbot.com/",
        descricao: "Quillbot é uma ferramenta de escrita que usa inteligência artificial para ajudar na criação e revisão de textos. Com funcionalidades como parafrasear, resumir e corrigir gramática, Quillbot é ideal para escritores, estudantes e profissionais que buscam aprimorar a qualidade de seus textos.",
        temas: ["escrita", "texto", "gramática", "gramatica", "paráfrase", "parafrase", "resumo", "edição", "escrever", "reescrever", "reescrita"]
    },
    {
        titulo: "Mapify",
        link: "https://mapify.so/pt",
        descricao: "Mapify é uma ferramenta que utiliza inteligência artificial para gerar mapas conceituais de forma automática. Ela facilita a organização de ideias e informações, sendo especialmente útil para estudantes e profissionais que precisam visualizar e estruturar conhecimento de maneira clara.",
        temas: ["organização", "organizar", "conhecimento", "mapas conceituais", "mapa mental", "aprendizado"]
    },
    {
        titulo: "Matific",
        link: "https://www.matific.com/bra/pt-br/home/",
        descricao: "Matific é uma plataforma educacional que oferece jogos e atividades matemáticas interativas para crianças, usando inteligência artificial para adaptar o conteúdo ao nível de aprendizado dos alunos. É utilizada por escolas e famílias para tornar o aprendizado de matemática mais envolvente e eficaz.",
        temas: ["matemática", "matematica", "educação", "educar", "ensino", "ensinar", "crianças", "jogos educativos", "aprendizado adaptativo", "aprender"]
    },
    {
        titulo: "Character AI",
        link: "https://character.ai",
        descricao: "Character AI é uma plataforma que permite aos usuários criar e interagir com personagens de IA personalizados. Usada para entretenimento, educação e treinamento, essa ferramenta oferece uma experiência imersiva ao gerar diálogos com personagens virtuais que podem ter personalidades, habilidades e conhecimentos variados.",
        temas: ["conversação", "conversar", "personagens virtuais", "entretenimento", "personagem", "educação", "educar"]
    },
    {
        titulo: "Replika",
        link: "https://replika.ai",
        descricao: "Replika é uma IA de conversação que atua como um amigo virtual, permitindo aos usuários conversar sobre qualquer tópico. Utilizada para apoio emocional, socialização e até mesmo como uma ferramenta para desenvolvimento pessoal, Replika é conhecida por suas interações empáticas e personalizadas.",
        temas: ["conversação", "conversar", "apoio emocional", "terapia", "assistente", "bem-estar"]
    },
    {
        titulo: "Copy.ai",
        link: "https://www.copy.ai",
        descricao: "Copy.ai é uma ferramenta de IA voltada para a geração de conteúdo de marketing e redação. Ela ajuda empresas e profissionais a criar textos para anúncios, descrições de produtos, e-mails e muito mais, economizando tempo e aumentando a eficiência das campanhas de marketing.",
        temas: ["texto", "marketing", "automação", "automatizar"]
    },
    {
        titulo: "Perplexity AI",
        link: "https://www.perplexity.ai",
        descricao: "Perplexity AI é um motor de busca assistido por IA que fornece respostas claras e precisas para perguntas dos usuários. Ele combina técnicas de NLP com a busca tradicional para oferecer respostas mais contextualizadas e detalhadas, tornando-o uma ferramenta útil para pesquisas e aprendizado.",
        temas: ["busca", "NLP", "pesquisa", "informação", "bibliografia", "pesquisar", "informar", "informações", "dados"]
    },
    {
        titulo: "Lumen5",
        link: "https://www.lumen5.com",
        descricao: "Lumen5 é uma plataforma de criação de vídeos que usa IA para transformar textos e artigos em vídeos dinâmicos. Ideal para marketing digital, a ferramenta facilita a produção de vídeos envolventes e profissionais com base em conteúdo escrito, tornando o processo de criação de vídeos acessível a todos.",
        temas: ["vídeo", "video", "vídeos", "videos", "marketing", "conteúdo digital", "automação", "automatizar"]
    },
    {
        titulo: "Pictory",
        link: "https://pictory.ai",
        descricao: "Pictory é uma ferramenta de IA para criação de vídeos curtos e envolventes a partir de conteúdo de longa duração, como webinars e blogs. Com foco em redes sociais e marketing, Pictory permite que os usuários gerem vídeos rapidamente, destacando as partes mais importantes do conteúdo.",
        temas: ["vídeo", "video", "vídeos", "videos", "resumo", "conteúdo", "marketing", "automação", "automatizar"]
    },
    {
        titulo: "Pika Art",
        link: "https://pika.art",
        descricao: "Pika Art é uma ferramenta de IA que transforma imagens estáticas em vídeos dinâmicos. Ideal para criadores de conteúdo e designers, Pika Art oferece uma maneira simples de adicionar movimento e vida às suas ilustrações, fotos e gráficos, criando vídeos cativantes a partir de imagens.",
        temas: ["imagem", "imagens", "vídeo", "video", "vídeos", "videos", "animação", "animações", "design"]
    },
    {
        titulo: "Fal AI",
        link: "https://fal.ai",
        descricao: "Fal AI é uma plataforma que oferece diversos modelos de geração de imagens utilizando inteligência artificial. Com uma ampla variedade de estilos e técnicas, Fal AI é uma ferramenta poderosa para artistas e designers que buscam explorar novas fronteiras na criação visual.",
        temas: ["imagem", "imagens", "arte digital", "design"]
    },
    {
        titulo: "Deepbrain AI",
        link: "https://www.deepbrain.io/pt",
        descricao: "Deepbrain AI oferece uma série de ferramentas baseadas em IA para gerar vídeos e animar imagens de pessoas. Muito utilizada em marketing, educação e entretenimento, a plataforma permite transformar fotos em vídeos animados realistas, criando avatares digitais com expressões e movimentos naturais.",
        temas: ["vídeo", "video", "vídeos", "videos", "animação", "imagem", "imagens", "avatares digitais", "marketing"]
    },
    {
        titulo: "Stable Diffusion",
        link: "https://stability.ai",
        descricao: "Stable Diffusion é um modelo de IA para geração de imagens baseado em técnicas de difusão. Ele permite criar imagens a partir de descrições textuais, com um controle detalhado sobre o estilo e a composição. Stable Diffusion é popular entre artistas digitais e desenvolvedores por sua flexibilidade e qualidade.",
        temas: ["imagem", "imagens", "arte digital", "text-to-image"]
    },
    {
        titulo: "DeepL Translator",
        link: "https://www.deepl.com",
        descricao: "DeepL é um tradutor online baseado em IA, conhecido por sua precisão e fluência em comparação com outros tradutores automáticos. Ele oferece traduções em múltiplos idiomas e é amplamente utilizado por profissionais e empresas que precisam de traduções rápidas e confiáveis.",
        temas: ["tradução", "NLP", "linguagem", "texto", "traduzir"]
    },
    {
        titulo: "Descript",
        link: "https://www.descript.com",
        descricao: "Descript é uma plataforma de edição de áudio e vídeo assistida por IA que transforma o processo de edição em uma tarefa simples e intuitiva. Com ferramentas para transcrição automática, edição de áudio baseada em texto e geração de voz, Descript é ideal para criadores de podcast, vídeos e outros conteúdos multimídia.",
        temas: ["áudio", "audio", "audios", "áudios", "edição", "vídeo", "video", "vídeos", "videos", "transcrição", "transcrever", "voz", "vozes"]
    }
];