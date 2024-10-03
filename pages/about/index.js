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
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "Habilidades",
    info: [
      {
        title: "Desenvolvimento Full Stack",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaSass />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiNodedotjs />,      // Node.js
          <SiExpress />,     // Express.js
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
          <SiDotnet />        // ASP.NET

        ],

      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma />,
          <SiAdobexd />,
          <SiAdobeillustrator />, // Adicione este ícone, se disponível
          <SiInvision />, // Adicione este ícone, se disponível
          <SiAdobeaftereffects /> // Adicione este ícone, se disponível
        ],

      },
    ],
  },
  {
    title: "Education",
    info: [

      {
        title: "Microsoft Certified: Azure AI Fundamentals",
        stage: "2023",
      },
      {
        title: "INTRODUÇÃO À CIÊNCIA DE DADOS - FGV Fundação Getulio Vargas",
        stage: "2023",
      },
      {
        title: "CC50: Introdução à Ciência da Computação - Harvard's Course in Brazil",
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
        title: "Figma Training - Alura",
        stage: "2023",
      },
      {
        title: "Programming Logic and Algorithms with C# - Udemy",
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
        title: "IlumminIT Ltda | Desenvolvedor Web Júnior",
        stage: "2022 - 2024",
        description: `
      IlumminIT Ltda é uma empresa de tecnologia focada em soluções de software para otimização de processos empresariais. Durante meu tempo na IlumminIT, fui promovido de Trainee para Desenvolvedor Web Júnior, participando de projetos desafiadores e adquirindo experiência em desenvolvimento Full Stack. Minhas principais responsabilidades incluíam:

      Desenvolvimento de Aplicações Web: Contribuí para uma aplicação interna em React e Node.js, integrada a um banco de dados SQL Server, resultando em um aumento de 25% na eficiência dos processos internos.

      Colaboração em Projetos de E-commerce: Desenvolvi componentes reutilizáveis em React e criei APIs RESTful com Node.js para um cliente do setor varejista, utilizando Stripe para pagamentos e Docker para ambientes consistentes.

      Integração com Plataformas de Terceiros: Integrei sistemas internos à plataforma Salesforce, melhorando a gestão de leads e a eficiência da equipe de vendas.

      Testes e Qualidade de Código: Criei e mantive testes automatizados com Jest e Cypress, além de participar de revisões de código para garantir boas práticas.

      Documentação e Manutenção: Responsável pela documentação técnica, incluindo guias e diagramas, e pela manutenção de sistemas legados.
    `,
      },
    ],

  },
  {
    title: "Formação",
    info: [
      {
        title: "FAM Faculdade das Américas - Bachelor of Technology in Analysis and Development of Systems",
        stage: "2023 - Present",
      },
      {
        title: "Senai Informática - SP - Technical Course in Systems Development",
        stage: "2023 - Present",
      },
      {
        title: "Escola Senai 'Paulo Antônio Skaf' - Full-Stack Programmer",
        stage: "2022 - 2023",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
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
            Atuando como Desenvolvedor Full Stack, com um foco mais acentuado no desenvolvimento Front-End, tenho trabalhado com tecnologias como React, Next.js, Typescript, Node.js, CSS, HTML, JavaScript, C#, SQL Server e APIs RESTful. Minha experiência envolve tanto a criação de interfaces intuitivas e responsivas quanto a integração com back-ends robustos, oferecendo soluções completas e eficientes.
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
                  <CountUp start={0} end={2} duration={15} /> +
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
