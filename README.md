# 💼 Portfólio — Lucas Lacerda

Site pessoal de portfólio, construído com Next.js e Tailwind CSS, apresentando a trajetória profissional de Lucas Lacerda como Desenvolvedor Full Stack Pleno e Instrutor Técnico SENAI, com foco em IA Aplicada (agentes, RAG, MCP).

## Funcionalidades

- **Home** — apresentação animada com partículas de fundo (`tsparticles`)
- **Sobre** — resumo profissional, habilidades, cursos/certificações, experiência e formação
- **Serviços** — carrossel (Swiper) com áreas de atuação: Full Stack, Front-End/UI-UX, IA Aplicada e Mentoria Técnica
- **Projetos** — galeria/slider de trabalhos, com link para o repositório de cada projeto público e cards de destaque para projetos privados
- **Artigos** — lista de posts (`/blog`) e página individual (`/blog/[slug]`), com conteúdo em `data/blogPosts.js`
- **Depoimentos** — carrossel de recomendações
- **Contato** — formulário validado com Formik + Yup, que envia e-mail via **Resend** através de uma API route do Next.js (`pages/api/contact.js`), com validação server-side e honeypot anti-spam
- **Navegação lateral fixa** com ícones e tooltips, com transições de página animadas via Framer Motion

## Tecnologias

| Tecnologia | Uso |
|---|---|
| Next.js 16 (Pages Router) | Framework React |
| React 18 | Biblioteca de UI |
| Tailwind CSS | Estilização |
| Framer Motion | Animações e transições de página |
| tsparticles / react-tsparticles | Efeito de partículas no fundo |
| Swiper | Carrosséis de serviços, projetos e depoimentos |
| Formik + Yup | Formulário de contato e validação |
| Resend | Envio de e-mail do formulário de contato (API route serverless) |
| @vercel/analytics | Analytics |
| react-countup | Contadores animados |

## Estrutura

```
Portifolio-Lucas/
├── pages/
│   ├── index.js            # home
│   ├── about/               # sobre
│   ├── services/            # serviços
│   ├── work/                # projetos
│   ├── blog/                 # artigos (lista + [slug])
│   ├── testimonials/         # depoimentos
│   ├── contact/               # formulário de contato
│   └── api/contact.js          # API route: envio de e-mail via Resend
├── components/              # Nav, Header, sliders, cards, partículas...
├── data/blogPosts.js         # conteúdo dos artigos
└── public/                    # imagens dos projetos e assets
```

## Pré-requisitos

- Node.js 18+
- Conta gratuita na [Resend](https://resend.com) para o formulário de contato funcionar

## Como executar

```bash
git clone https://github.com/lrlacerda/Portifolio-Lucas.git
cd Portifolio-Lucas
npm install
```

Copie `.env.example` para `.env` e preencha:

```bash
RESEND_API_KEY=
CONTACT_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO_EMAIL=seu-email@gmail.com
```

```bash
npm run dev     # inicia o Next.js em modo desenvolvimento
npm run build   # build de produção
npm run start   # roda o build de produção
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy

O projeto está pronto para deploy na [Vercel](https://vercel.com) — basta conectar o repositório e configurar as variáveis de ambiente (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`) no painel do projeto.
