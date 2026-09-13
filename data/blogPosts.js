// RASCUNHO — conteúdo de exemplo escrito para visualizar o layout.
// Troque pelos seus artigos reais antes de divulgar o link publicamente.
// Cada post precisa de: slug (único, usado na URL), title, excerpt,
// date (YYYY-MM-DD), readTime (minutos) e content (array de parágrafos).
export const blogPosts = [
  {
    slug: "agentes-de-ia-rag-mcp-no-dia-a-dia",
    title: "Como uso agentes de IA, RAG e MCP no dia a dia como desenvolvedor",
    excerpt:
      "Bastidores de como IA generativa entrou no meu fluxo de trabalho como desenvolvedor Full Stack — da prototipação a arquiteturas com agentes.",
    date: "2026-09-01",
    readTime: 5,
    content: [
      "[RASCUNHO — substituir por um artigo real] Nos últimos meses, tenho usado IA generativa em praticamente todas as etapas do meu trabalho como desenvolvedor: da prototipação de interfaces à escrita de testes, passando por arquiteturas mais avançadas como RAG (Retrieval-Augmented Generation) e agentes autônomos.",
      "RAG permite que um modelo de linguagem responda com base em informação real e atualizada, buscando contexto relevante antes de gerar uma resposta — útil para sistemas internos que precisam responder sobre documentação, processos ou bases de conhecimento específicas de uma empresa.",
      "Já o MCP (Model Context Protocol) padroniza como agentes de IA se conectam a ferramentas e fontes de dados externas, o que facilita construir sistemas onde um agente pode, por exemplo, consultar um banco de dados, chamar uma API ou executar uma ação concreta — não só gerar texto.",
      "Estou aprofundando esses temas na minha pós-graduação em Engenharia de IA Aplicada, e pretendo trazer aqui, em posts futuros, exemplos práticos de arquitetura, decisões de design e armadilhas comuns ao colocar agentes em produção.",
    ],
  },
  {
    slug: "de-veterinario-a-desenvolvedor",
    title: "De Medicina Veterinária para tecnologia: o que a transição de carreira me ensinou",
    excerpt:
      "Depois de mais de uma década como veterinário, migrei para o desenvolvimento de software. O que mudou — e o que continua igual.",
    date: "2026-08-15",
    readTime: 6,
    content: [
      "[RASCUNHO — substituir por um artigo real] Passei a maior parte da minha carreira como médico veterinário antes de migrar para tecnologia. É uma pergunta que ouço com frequência: por que trocar de área depois de tanto tempo?",
      "A resposta curta é que muitas das habilidades que desenvolvi como veterinário — diagnóstico sob incerteza, comunicação clara em momentos de estresse, resolução de problemas com informação incompleta — se aplicam diretamente ao trabalho de desenvolvimento de software, especialmente em debugging e em conversas técnicas com stakeholders não-técnicos.",
      "A parte mais difícil não foi aprender a programar, mas reconstruir a confiança técnica do zero, em uma área nova, competindo com profissionais que começaram décadas mais cedo. Isso me levou a investir pesado em cursos, certificações e prática constante.",
      "Hoje, como Instrutor Técnico no SENAI, uso bastante essa experiência de transição para ajudar outras pessoas que também estão migrando de carreira — um processo que reconheço de perto.",
    ],
  },
  {
    slug: "ensinando-programacao-no-senai",
    title: "O que aprendi ensinando programação para iniciantes no SENAI",
    excerpt:
      "Como instrutor técnico, lições sobre ensinar Full Stack, metodologias ágeis e IA generativa para quem está começando na área.",
    date: "2026-07-20",
    readTime: 5,
    content: [
      "[RASCUNHO — substituir por um artigo real] Ser Instrutor Técnico no SENAI me colocou de novo do outro lado da sala de aula — só que agora ensinando, não aprendendo. É uma experiência que muda a forma como eu mesmo entendo o que já sei.",
      "Explicar front-end, back-end, banco de dados e metodologias ágeis para quem está começando do zero exige simplificar sem perder a precisão técnica — um exercício que também melhorou minha própria comunicação em reuniões técnicas.",
      "Uma das partes mais interessantes tem sido incorporar IA generativa nas aulas: mostrar aos alunos como ferramentas de IA aceleram o aprendizado sem substituir o entendimento dos fundamentos.",
      "Pretendo detalhar aqui, em posts futuros, como estruturo aulas práticas e como conecto teoria a projetos reais que simulam demandas de mercado.",
    ],
  },
  {
    slug: "migrando-portfolio-next-16",
    title: "Bastidores: migrando meu próprio portfólio de Next.js 13 para 16",
    excerpt:
      "Como troquei um servidor Express/Nodemailer por uma API route com Resend, e o que quebrou (e corrigi) no upgrade major do Next.js.",
    date: "2026-09-13",
    readTime: 6,
    content: [
      "[RASCUNHO — substituir por um artigo real] Este próprio site passou por uma reforma grande recentemente: saiu um servidor Express separado para envio de e-mail, entrou uma API route do Next.js usando Resend — mais simples e compatível com deploy serverless na Vercel.",
      "Também atualizei o projeto de Next.js 13 para a versão 16, o que trouxe mudanças reais: a fonte `@next/font` virou nativa (`next/font`), a flag `--no-lint` do build sumiu, e os módulos do Swiper passaram a vir de um caminho diferente (`swiper/modules`).",
      "O upgrade também expôs um bug antigo — um carrossel de depoimentos que nunca recebia os módulos de navegação corretamente, porque a prop estava configurada como objeto em vez de lista.",
      "A lição principal: builds locais podem falhar por motivos que nada têm a ver com o código (no meu caso, rodar o projeto dentro de uma pasta sincronizada pelo OneDrive causava timeouts) — vale sempre isolar a causa antes de sair mudando código.",
    ],
  },
  {
    slug: "exemplo-primeiro-artigo",
    title: "Título de exemplo: substitua por um artigo real",
    excerpt:
      "Este é um post de exemplo para mostrar o layout da seção de Artigos. Edite ou remova em data/blogPosts.js.",
    date: "2026-09-13",
    readTime: 4,
    content: [
      "Este é um artigo de exemplo. A estrutura da página já está pronta: lista em /blog e página individual em /blog/[slug].",
      "Para publicar conteúdo real, edite o arquivo data/blogPosts.js e adicione um objeto para cada artigo, com slug, título, resumo, data e o conteúdo em parágrafos.",
      "Boas ideias de artigos para reforçar seu posicionamento: bastidores de como você usa agentes de IA e RAG no dia a dia, lições da transição de carreira (Medicina Veterinária → Tecnologia), ou um tutorial curto de algo que você ensina no SENAI.",
    ],
  },
];
