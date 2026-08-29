# 💼 Portfólio — Lucas Lacerda

Site pessoal de portfólio, construído com Next.js e Tailwind CSS, apresentando a trajetória profissional de Lucas Lacerda como desenvolvedor full stack. Traz página inicial animada, sobre, serviços, projetos e depoimentos, além de um formulário de contato funcional que envia e-mail via Nodemailer.

## Funcionalidades

- **Home** — apresentação animada com partículas de fundo (`tsparticles`) e chamada para os projetos
- **Sobre** — resumo profissional e experiência
- **Serviços** — carrossel (Swiper) com áreas de atuação: Desenvolvedor Full Stack, Front-End, Web e Arquitetura de Soluções
- **Projetos** — galeria/slider de trabalhos (Hospedagens, Compras Eletrônicos, HBO, Mundo Invertido, Mundo Harry Potter, entre outros)
- **Depoimentos** — carrossel de recomendações
- **Contato** — formulário validado com Formik + Yup, que envia e-mail através de um servidor Express separado (`server.js`) usando Nodemailer
- **Navegação lateral fixa** com ícones e tooltips, com transições de página animadas via Framer Motion

## Tecnologias

| Tecnologia | Uso |
|---|---|
| Next.js 13 (Pages Router) | Framework React |
| React 18 | Biblioteca de UI |
| Tailwind CSS | Estilização |
| Framer Motion | Animações e transições de página |
| tsparticles / react-tsparticles | Efeito de partículas no fundo |
| Swiper | Carrosséis de serviços, projetos e depoimentos |
| Formik + Yup | Formulário de contato e validação |
| Express + Nodemailer | Servidor auxiliar para envio de e-mail do formulário |
| react-countup | Contadores animados |

## Estrutura

```
Portifolio-Lucas/
├── pages/
│   ├── index.js          # home
│   ├── about/             # sobre
│   ├── services/          # serviços
│   ├── work/               # projetos
│   ├── testimonials/       # depoimentos
│   ├── contact/             # formulário de contato
│   └── api/hello.js         # rota de API de exemplo do Next.js
├── components/            # Nav, Header, sliders, cards, partículas...
├── server.js               # servidor Express para envio de e-mail
└── public/                  # imagens dos projetos e assets
```

## Pré-requisitos

- Node.js
- Conta de e-mail configurada para envio via Nodemailer (para o formulário de contato funcionar)

## Como executar

```bash
git clone https://github.com/lrlacerda/Portifolio-Lucas.git
cd Portifolio-Lucas
npm install
```

Crie um `.env` na raiz com as credenciais usadas pelo `server.js`:

```bash
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
PORT=3001
```

```bash
npm run dev     # inicia o Next.js em modo desenvolvimento
npm run build   # build de produção
npm run start   # roda o build de produção
node server.js  # inicia o servidor de envio de e-mail (formulário de contato)
```

Abra [http://localhost:3000](http://localhost:3000).
