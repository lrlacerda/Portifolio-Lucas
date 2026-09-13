// Artigos do blog. Revise o tom/detalhes antes de publicar nas redes.
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
    title: "O que aprendi ensinando programação para quem está começando do zero",
    excerpt:
      "Como Instrutor Técnico no SENAI, formando desenvolvedores Full Stack — e o que isso me ensinou sobre comunicar tecnologia de forma simples sem perder profundidade.",
    date: "2026-07-20",
    readTime: 5,
    content: [
      "Ser Instrutor Técnico na Escola SENAI de Informática me colocou de volta na sala de aula — só que agora do outro lado. E foi ensinando que percebi o quanto eu ainda tinha a aprender sobre o que já sabia.",
      "Formo alunos em desenvolvimento Full Stack: front-end com HTML, CSS, JavaScript e React, back-end conectando as duas pontas em projetos que simulam demandas reais de mercado. Também preparo turmas para certificações Microsoft e conduzo conteúdo de desenvolvimento mobile, do design de interface à publicação do aplicativo.",
      "A parte mais desafiadora não é o conteúdo técnico — é simplificar sem infantilizar. Explicar por que uma API REST funciona daquele jeito, ou por que uma arquitetura de dados importa, para alguém que nunca escreveu uma linha de código, exige um nível de clareza que eu não tinha quando só programava para mim mesmo. Isso melhorou diretamente minha comunicação em reuniões técnicas com áreas não-técnicas.",
      "Também ensino levantamento de requisitos, briefing e prototipação em Figma, conectando a etapa de design à implementação — e aplico Scrum e Kanban na condução das turmas, pra aproximar os alunos da rotina real de um time de desenvolvimento antes mesmo do primeiro emprego.",
      "Uma das partes que mais gosto hoje é incorporar IA generativa nas aulas: mostrar que usar IA bem não substitui entender os fundamentos — pelo contrário, quem entende a base usa a IA com muito mais critério e menos risco de aceitar respostas erradas sem perceber.",
      "Migrei de carreira uma vez, então reconheço de perto o que meus alunos estão vivendo: a insegurança de recomeçar, o medo de estar velho demais ou atrasado demais para a área. Uso essa experiência todos os dias em sala. Se você está pensando em migrar pra tecnologia, o conselho mais honesto que posso dar é: comece, mesmo com medo. O domínio vem depois, na prática.",
    ],
  },
  {
    slug: "migrando-portfolio-next-16",
    title: "Bastidores reais: os bugs que encontrei ao modernizar meu próprio portfólio",
    excerpt:
      "Migrei de um servidor Express/Nodemailer com senha exposta para uma API serverless com Resend, e fiz o upgrade major do Next.js 13 para 16. Veja os problemas reais que apareceram no caminho.",
    date: "2026-09-13",
    readTime: 6,
    content: [
      "Todo desenvolvedor tem aquele projeto pessoal que fica velho enquanto você olha para o lado — o meu era meu próprio portfólio. Ao revisar tudo, encontrei problemas que eu mesmo não esperava, e resolvi documentar o processo aqui, porque os bugs mais instrutivos raramente são os óbvios.",
      "O formulário de contato dependia de um servidor Express separado, com Nodemailer e uma senha de conta de e-mail salva em texto puro num `.env` local — nunca chegou a vazar no Git, mas era um risco real, e de todo jeito não funcionaria numa hospedagem serverless como a Vercel. Troquei tudo por uma API route do Next.js usando Resend, com validação de campos no servidor e um campo honeypot contra spam.",
      "O bug mais sério só apareceu durante o teste: com a chave da Resend ainda não configurada, a API devolvia erro 500 para *qualquer* requisição — inclusive as inválidas — porque o cliente da Resend era instanciado no escopo do módulo, antes mesmo da validação rodar. Só descobri simulando ataques básicos no próprio endpoint (e-mail inválido, campo vazio, payload gigante) depois de publicar.",
      "Fiz também o upgrade major do Next.js (13 → 16) e do Swiper (9 → 14), o que zerou uma lista de vulnerabilidades conhecidas nas dependências — mas trouxe mudanças reais de API: a fonte `@next/font` virou nativa (`next/font`), a flag `--no-lint` do build foi removida, e os módulos do Swiper passaram a vir de `swiper/modules` em vez de `swiper`. O upgrade também expôs um bug antigo, que já existia antes da migração: o carrossel de depoimentos nunca recebia corretamente os módulos de navegação, porque a prop `modules` estava configurada como objeto em vez de lista — provavelmente nunca funcionou direito.",
      "A lição que mais valeu a pena, porém, não foi sobre código: builds que falham intermitentemente podem não ter nada a ver com o que você escreveu. No meu caso, rodar o projeto dentro de uma pasta sincronizada pelo OneDrive causava timeouts aleatórios no build, porque o macOS intermedia todo acesso a arquivo nesse tipo de pasta. Mover o projeto para uma pasta local comum resolveu na hora.",
      "Ferramenta boa não é a que nunca erra, é a que te ajuda a achar o erro rápido. Testar o próprio endpoint como se fosse um atacante, antes de assumir que 'funcionou', é hoje parte do meu checklist antes de qualquer deploy.",
    ],
  },
  {
    slug: "decisoes-de-arquitetura-projetos-privados",
    title: "Decisões de arquitetura de 2 projetos que não posso abrir o código",
    excerpt:
      "Uma plataforma de gestão de competências (.NET 8 + React 19) e um e-commerce completo (React + C#) que mantenho em repositórios privados. Sem mostrar código, dá pra falar sobre as decisões por trás deles.",
    date: "2026-09-10",
    readTime: 5,
    content: [
      "Nem todo projeto que vale a pena mostrar pode ter o código aberto. Mantenho dois projetos pessoais em repositórios privados — uma plataforma de gestão de competências profissionais e um e-commerce completo — e, mesmo sem expor uma linha de código, dá pra contar as decisões de arquitetura por trás deles, que é o que normalmente mais interessa em entrevista técnica.",
      "Na plataforma de gestão de competências, escolhi .NET 8 no back-end e React 19 no front-end de propósito: .NET 8 traz minimal APIs e performance nativa sem o peso de configuração de versões anteriores, e React 19 já assume Server Components e Actions como padrão — então desde o início desenhei o fluxo de dados pensando em menos estado espalhado no cliente e mais lógica resolvida perto da fonte de dados. A decisão mais difícil não foi de tecnologia, foi de modelagem: como representar 'competência' de um jeito flexível o suficiente pra crescer (novas categorias, novos níveis de proficiência) sem virar um sistema genérico demais para manter.",
      "No e-commerce, o desafio central não foi o catálogo ou o carrinho — foi o checkout. Pagamento é a parte do sistema onde erro custa dinheiro real e confiança do cliente, então tratei o fluxo de pagamento como uma máquina de estados explícita (pedido criado → pagamento pendente → confirmado/recusado → processado), em vez de deixar o estado implícito espalhado em flags soltas. Isso facilita muito debugar 'por que esse pedido ficou travado' meses depois, sem precisar reconstruir o raciocínio do zero.",
      "Em comum entre os dois: tratei autenticação e autorização como responsabilidade do back-end, nunca confiando em validação feita só no front-end — o front pode (e deve) dar feedback rápido pro usuário, mas toda decisão que importa é revalidada no servidor. É um princípio simples, mas é exatamente o tipo de detalhe que separa um projeto de portfólio de um sistema que aguentaria produção de verdade.",
      "Gosto de pensar nesses dois projetos como minha 'bancada de testes' pessoal — onde posso errar, refatorar e tentar de novo sem o risco de quebrar algo em produção de um cliente. Se você é recrutador ou dev técnico e quer entender melhor essas decisões (ou ver uma demonstração ao vivo, sem expor o repositório), me chama — converso com prazer sobre qualquer uma delas.",
    ],
  },
];
