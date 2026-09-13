const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const ACCENT = "#F13024";
const DARK = "#131424";
const GREY = "#555555";

const outPath = path.join(__dirname, "..", "public", "cv-lucas-lacerda.pdf");
const doc = new PDFDocument({ size: "A4", margins: { top: 50, bottom: 50, left: 56, right: 56 } });
doc.pipe(fs.createWriteStream(outPath));

function heading(text) {
  doc.moveDown(0.6);
  doc.fillColor(ACCENT).font("Helvetica-Bold").fontSize(13).text(text.toUpperCase(), { characterSpacing: 1 });
  doc.moveDown(0.2);
  doc.strokeColor(ACCENT).lineWidth(1).moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).stroke();
  doc.moveDown(0.4);
  doc.fillColor(DARK).font("Helvetica").fontSize(10.5);
}

function entry(title, period, lines) {
  doc.font("Helvetica-Bold").fontSize(11).fillColor(DARK).text(title, { continued: false });
  doc.font("Helvetica-Oblique").fontSize(9.5).fillColor(GREY).text(period);
  doc.moveDown(0.15);
  doc.font("Helvetica").fontSize(10).fillColor(DARK);
  lines.forEach((line) => {
    doc.text(`• ${line}`, { indent: 8 });
  });
  doc.moveDown(0.5);
}

// header
doc.fillColor(DARK).font("Helvetica-Bold").fontSize(26).text("Lucas Ribeiro de Lacerda");
doc.fillColor(ACCENT).font("Helvetica-Bold").fontSize(13).text(
  "Desenvolvedor Full Stack Pleno | AI-Native Engineer | Instrutor Técnico SENAI"
);
doc.moveDown(0.3);
doc.fillColor(GREY).font("Helvetica").fontSize(9.5).text(
  "lribeirolacerda@gmail.com   ·   linkedin.com/in/lucasribeirolacerda   ·   github.com/lrlacerda   ·   Santo André, SP"
);

// resumo
heading("Resumo");
doc.text(
  "Desenvolvedor Full Stack Pleno com experiência em React, Node.js, TypeScript e C#/.NET, atualmente também Instrutor Técnico no SENAI Informática, formando profissionais em programação, bancos de dados e metodologias ágeis. Aprofundando IA Aplicada (agentes autônomos, RAG, MCP) em pós-graduação, com foco em integrar LLMs em sistemas de produção, do design da arquitetura ao deploy. Migrou de uma carreira em Medicina Veterinária para tecnologia, trazendo análise crítica, resolução de problemas e comunicação assertiva.",
  { align: "justify" }
);

// experiencia
heading("Experiência Profissional");
entry("Escola SENAI de Informática Cyber IA — Instrutor de Formação Profissional II", "abril de 2025 – atual", [
  "Formo profissionais em desenvolvimento Full Stack (front-end e back-end), certificações Microsoft e metodologias ágeis (Scrum/Kanban).",
  "Projetei e desenvolvi um sistema interno de gestão de colaboradores para a unidade.",
  "Incorporo IA generativa às aulas, aproximando os alunos das ferramentas que uso no meu próprio fluxo de trabalho.",
]);
entry("IlumminIT Ltda — Desenvolvedor Full Stack Júnior", "junho de 2022 – abril de 2025", [
  "Promovido de Trainee a Desenvolvedor Web Júnior.",
  "Aplicação interna de gestão de processos (React + Node.js + SQL Server), com +25% de eficiência operacional.",
  "E-commerce com React, APIs RESTful em Node.js, integração Stripe e Docker.",
  "Integração de sistemas internos com Salesforce via REST/Webhooks; testes automatizados (Jest, Cypress, xUnit).",
]);

// formação
heading("Formação Acadêmica");
entry("UNIPDS — Pós-graduação Lato Sensu em Engenharia de IA Aplicada", "julho de 2026 – julho de 2027", []);
entry("AIDE Brasil — Formação AI Data Engineer", "agosto de 2026 – janeiro de 2027", []);
entry("Centro Universitário FAM — Bacharelado em Ciência da Computação", "janeiro de 2024 – julho de 2026", []);
entry("Escola SENAI de Informática — Técnico em Desenvolvimento de Sistemas", "fevereiro de 2023 – dezembro de 2024", []);
entry("Senai São Paulo — Programador Full-Stack", "maio de 2022 – junho de 2023", []);

// certificacoes
heading("Certificações e Cursos");
doc.text(
  "Microsoft Certified: Azure AI Fundamentals · Delivery Accreditation – Stream Connect for Apache Kafka · Desvendando o 5G · Introdução à Ciência de Dados (FGV) · CS50: Introdução à Ciência da Computação (Harvard) · Privacidade e Proteção de Dados (LGPD) · Formação Figma · Git and GitHub (OneBitCode)",
  { align: "justify" }
);

// competencias
heading("Competências Técnicas");
doc.text(
  "Linguagens: Java, C#, .NET, Python, JavaScript, TypeScript  ·  Front-end: React, Angular, Vue.js  ·  Back-end: Node.js  ·  IA: RAG, MCP, Agentes Autônomos  ·  Dados: MySQL, PostgreSQL, MongoDB, SQL Server  ·  Cloud: Azure AI, AWS, Vercel  ·  Metodologias: Scrum, Kanban",
  { align: "justify" }
);

doc.end();

console.log("CV gerado em:", outPath);
