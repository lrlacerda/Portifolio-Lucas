// RASCUNHO — conteúdo de exemplo escrito para visualizar o layout.
// Troque pelos seus artigos reais antes de divulgar o link publicamente.
// Cada post precisa de: slug (único, usado na URL), title, excerpt,
// date (YYYY-MM-DD), readTime (minutos) e content (array de parágrafos).
export const blogPosts = [
  {
    slug: "de-veterinario-a-desenvolvedor",
    title: "De estetoscópio a teclado: minha virada de Medicina Veterinária para tecnologia",
    excerpt:
      "Depois de 15 anos como veterinário — clínica, gestão de pet shops e saúde pública —, recomecei do zero em programação. Foi a decisão mais difícil e mais certa que já tomei.",
    date: "2026-08-15",
    readTime: 6,
    content: [
      "Durante quinze anos, minha vida profissional teve outro nome: Doutor. Fui médico veterinário desde 2007 — passei por zoonoses da Prefeitura de Santo André, por clínicas, e cheguei a administrar pet shops inteiros, da rotina clínica ao caixa. Em 2022, decidi recomeçar do zero como desenvolvedor. Quase ninguém entendeu na hora. Hoje eu entendo perfeitamente.",
      "A pergunta que mais ouço é sempre a mesma: por que trocar de carreira depois de tanto tempo construído? A resposta curta é que eu não estava trocando de habilidades, estava trocando de ferramenta. Diagnosticar um animal com sintomas ambíguos e informação incompleta é, na prática, o mesmo exercício mental que debugar um sistema em produção que ninguém mais entende: formular hipóteses, eliminar possibilidades, manter a calma quando a pressão aumenta.",
      "A parte mais dura não foi aprender lógica de programação, HTML ou C# — isso vem com repetição e tempo. O mais difícil foi reconstruir credibilidade técnica do zero, numa área nova, competindo com gente que começou quinze anos mais cedo do que eu. Isso significou aceitar ser trainee de novo, estudar à noite depois de um dia inteiro de trabalho, e colecionar certificações (Azure, Harvard CS50, Full-Stack, entre outras) não porque um papel prova competência, mas porque cada uma delas era uma prova pra mim mesmo de que a decisão tinha sido certa.",
      "Entrei na IlumminIT como trainee e saí de lá, quase três anos depois, como Desenvolvedor Full Stack Júnior — tendo passado por aplicações internas de gestão, e-commerce com integração de pagamentos, e integrações com Salesforce. Migrar de carreira aos trancos não é bonito enquanto está acontecendo. É só depois, olhando pra trás, que você enxerga que cada etapa fazia sentido.",
      "Hoje sou Instrutor Técnico no SENAI, formando a próxima geração de desenvolvedores — e uso essa experiência de recomeço o tempo todo em sala de aula, porque boa parte dos meus alunos está vivendo exatamente essa mesma virada: trocando de área, apostando em algo novo, com medo de não conseguir. Eu sou a prova de que dá certo.",
      "Se você está pensando em mudar de carreira para tecnologia — ou para qualquer área — a mensagem que eu deixo é essa: suas habilidades anteriores não somem, elas se traduzem. Análise crítica, comunicação sob pressão e resolução de problemas não têm profissão fixa. O que muda é só a ferramenta que você usa pra aplicar isso todos os dias.",
    ],
  },
  {
    slug: "agentes-de-ia-rag-mcp-no-dia-a-dia",
    title: "A pergunta que todo desenvolvedor vai ouvir em 2026: 'você já usa agentes de IA?'",
    excerpt:
      "RAG, MCP e agentes autônomos deixaram de ser papo de pesquisador e viraram parte do trabalho diário de quem desenvolve software. Veja como uso isso na prática.",
    date: "2026-09-01",
    readTime: 5,
    content: [
      "Há dois anos, a pergunta que eu mais ouvia era 'você programa em quê?'. Hoje é 'você já usa IA pra programar?'. E a resposta séria não é sim ou não — é o quanto isso mudou a forma como eu penso arquitetura de software.",
      "IA generativa entrou no meu fluxo de trabalho em praticamente todas as etapas: prototipação de interfaces, revisão de código, escrita de testes. Mas o salto de verdade não foi usar um chatbot pra gerar código — foi entender RAG (Retrieval-Augmented Generation) e MCP (Model Context Protocol), as duas peças que transformam um modelo de linguagem genérico em um sistema que realmente resolve problemas de negócio.",
      "RAG resolve um problema concreto: um modelo de linguagem sozinho não conhece os dados internos da sua empresa, sua documentação, seus processos. RAG busca a informação certa antes de gerar a resposta — então em vez de o modelo 'inventar' algo plausível, ele responde com base no que é real e atualizado. É a diferença entre um assistente que parece inteligente e um que é útil.",
      "MCP resolve outro problema: como um agente de IA se conecta, de forma padronizada, a ferramentas e fontes de dados externas — um banco de dados, uma API interna, um sistema de arquivos. Sem isso, cada integração de IA vira um projeto de engenharia do zero. Com MCP, um agente pode consultar dados e executar ações reais, não só gerar texto bonito.",
      "Juntando as duas peças, o que muda é o papel do desenvolvedor: menos tempo escrevendo CRUD repetitivo, mais tempo desenhando arquitetura — que dados o agente pode acessar, que ações ele pode tomar sozinho, onde um humano precisa aprovar antes. Essa é, literalmente, a área em que estou me aprofundando agora na minha pós-graduação em Engenharia de IA Aplicada, com foco em arquitetura de agentes autônomos e integração de LLMs em produção.",
      "Minha aposta é simples: em pouco tempo, 'saber usar IA' vai parar de ser diferencial e virar pré-requisito, do mesmo jeito que 'saber usar Git' é hoje. Quem entender cedo como desenhar esses sistemas — não só consumir um chat — vai estar um passo à frente. É exatamente aí que estou colocando minha energia agora.",
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
