import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaReact,
  FaFigma,
  FaStripe,
  FaBootstrap,
  FaGit,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiDotnet,
  SiCsharp,
  SiFirebase,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiExpress,
  SiNodedotjs,
  SiAdobeillustrator,
  SiInvision,
  SiAdobeaftereffects,
  SiTypescript,
  SiPython,
  SiAmazonaws,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "Habilidades",
    info: [
      {
        title: "Desenvolvimento Full Stack & IA Aplicada",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaSass />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTypescript />,   // TypeScript
          <SiNodedotjs />,      // Node.js
          <SiExpress />,     // Express.js
          <SiPython />,       // Python
          <FaGit />,         // Git
          <SiDocker />,      // Docker
          <SiMongodb />,     // MongoDB
          <SiMysql />,       // MySQL
          <SiPostgresql />,   // PostgreSQL
          <FaBootstrap />,   // Bootstrap
          <SiTailwindcss />, // Tailwind CSS
          <SiFirebase />,     // Firebase
          <FaStripe />,       // Stripe
          <SiCsharp />,       // C#
          <SiDotnet />,       // ASP.NET
          <SiAmazonaws />,    // AWS
        ],

      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma />,
          <SiAdobexd />,
          <SiAdobeillustrator />,
          <SiInvision />,
          <SiAdobeaftereffects />
        ],

      },
    ],
  },
  {
    title: "Cursos e Certificações",
    info: [
      {
        title: "Microsoft Certified: Azure AI Fundamentals",
        stage: "2023",
      },
      {
        title: "Delivery Accreditation - Stream Connect for Apache Kafka",
        stage: "2023",
      },
      {
        title: "Desvendando o 5G",
        stage: "2023",
      },
      {
        title: "INTRODUÇÃO À CIÊNCIA DE DADOS - FGV Fundação Getulio Vargas",
        stage: "2023",
      },
      {
        title: "CS50: Introdução à Ciência da Computação - Harvard's Course in Brazil",
        stage: "2023",
      },
      {
        title: "Privacidade e Proteção de Dados (LGPD) - Escola Senai 'PAULO ANTONIO SKAF'",
        stage: "2023",
      },
      {
        title: "CSS3 Course - OneBitCode",
        stage: "2023",
      },
      {
        title: "HTML5 Course - OneBitCode",
        stage: "2023",
      },
      {
        title: "Create Sites Using WordPress - Sebrae-SP, Senai-SP",
        stage: "2023",
      },
      {
        title: "Formação Figma - Alura",
        stage: "2023",
      },
      {
        title: "C# Lógica de Programação e Algoritmos - Udemy",
        stage: "2023",
      },
      {
        title: "Front-End Course - Alura",
        stage: "2022",
      },
      {
        title: "Git and GitHub Course - OneBitCode",
        stage: "2023",
      },
    ],

  },
  {
    title: "Experiência",
    info: [
      {
        title: "Escola SENAI de Informática Cyber IA | Instrutor de Formação Profissional II",
        stage: "abril de 2025 - atual",
        description: `
      Instrutor Técnico na unidade SENAI de São Caetano do Sul, formando profissionais em desenvolvimento Full Stack e áreas correlatas.

      Desenvolvimento de Sistema Interno: projetei e desenvolvi um sistema de gestão de colaboradores para uso interno da unidade, aplicando na prática as mesmas tecnologias e processos que ensino em sala.

      Desenvolvimento Full Stack: ministro conteúdo prático de front-end (HTML, CSS, JavaScript, React) e back-end, conectando as duas pontas em projetos reais que simulam demandas de mercado.

      Certificações Microsoft: ministro conteúdo preparatório para certificações Microsoft, ajudando alunos a validar formalmente suas competências técnicas junto ao mercado.

      Desenvolvimento Mobile: conduzo turmas de programação para dispositivos móveis, do design de interface à publicação de aplicativos.

      Levantamento de Requisitos e UX/UI: ensino elicitação de requisitos, briefing, arquitetura de informação e prototipação em Figma.

      IA Aplicada ao Desenvolvimento: incorporo cada vez mais conteúdo de IA generativa às aulas, aproximando os alunos das ferramentas e práticas que já uso no meu próprio fluxo de trabalho.

      Metodologias Ágeis: aplico Scrum e Kanban na condução de projetos em sala, aproximando os alunos da rotina real de squads de desenvolvimento.
    `,
      },
      {
        title: "IlumminIT Ltda | Desenvolvedor Full Stack Júnior",
        stage: "junho de 2022 - abril de 2025",
        description: `
      Promovido de Trainee a Desenvolvedor Web Júnior, atuando em desenvolvimento Full Stack em projetos internos e para clientes.

      Aplicação interna de gestão de processos (React + Node.js + SQL Server): implementei novos recursos e otimizei performance, resultando em 25% de aumento na eficiência dos processos internos.

      E-commerce para cliente de varejo: desenvolvi componentes reutilizáveis em React e APIs RESTful em Node.js para catálogo, carrinho e pagamentos, com integração à Stripe API e ambientes padronizados via Docker.

      Integração com Salesforce: conectei sistemas internos via REST e Webhooks para sincronização de dados em tempo real, otimizando a gestão de leads pelo time de vendas.

      Qualidade de código: criação e manutenção de testes automatizados (Jest, Cypress, xUnit) e participação ativa em revisões de código.
    `,
      },
    ],

  },
  {
    title: "Formação",
    info: [
      {
        title: "UNIPDS - Pós-graduação Lato Sensu em Engenharia de IA Aplicada",
        stage: "julho de 2026 - julho de 2027",
      },
      {
        title: "AIDE Brasil - Formação AI Data Engineer",
        stage: "agosto de 2026 - janeiro de 2027",
      },
      {
        title: "Centro Universitário FAM - Bacharelado e Licenciatura em Ciência da Computação",
        stage: "janeiro de 2024 - julho de 2026",
      },
      {
        title: "Escola SENAI de Informática - Técnico em Desenvolvimento de Sistemas",
        stage: "fevereiro de 2023 - dezembro de 2024",
      },
      {
        title: "Senai São Paulo - Programador Full-Stack",
        stage: "maio de 2022 - junho de 2023",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import Head from "next/head";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Head>
        <title>Sobre | Lucas Lacerda</title>
      </Head>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-5 mt-14">
            Histórias <span className="text-accent">cativantes</span> geram designs magníficos.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 ">
            Desenvolvedor Full Stack Pleno com experiência em React, Node.js, TypeScript e C#/.NET, atualmente também Instrutor Técnico no SENAI Informática e aprofundando IA Aplicada (agentes autônomos, RAG e MCP) em pós-graduação. Migrei de uma carreira em Medicina Veterinária para a tecnologia, trazendo análise crítica, resolução de problemas e comunicação assertiva para o desenvolvimento e para a educação técnica. Uso IA de ponta a ponta no meu fluxo de trabalho — da prototipação assistida a arquiteturas com agentes — para entregar soluções completas e eficientes, do front-end ao back-end.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={15} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              {/* collaborations */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Collaborations</div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Completed Personal Projects</div>
              </div>

            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {/* eslint-disable react/jsx-key */}
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={`info-${itemIndex}`} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                <div key={`title-${itemIndex}`} className="font-light mb-2 md:mb-0">{item.title}</div>
                <div key={`hidden-${itemIndex}`} className="hidden md:flex"></div>
                <div key={`stage-${itemIndex}`}>{item.stage}</div>
                <div key={`icons-${itemIndex}`} className="flex flex-wrap gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={`icon-${itemIndex}-${iconIndex}`} className="text-2xl text-white w-1/4 sm:w-1/6 md:w-1/8 mt-2" >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* eslint-disable react/jsx-key */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
