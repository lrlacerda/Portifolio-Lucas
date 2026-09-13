import React, { useState } from "react";
import {
  RxCrop,
  RxDesktop,
  RxCode,
  RxReader,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Desenvolvimento Full Stack",
    description: "Aplicações completas, do front-end ao back-end.",
    moreDescription:
      "Construo aplicações web completas com React, Next.js, Node.js, TypeScript e C#/.NET, integrando APIs REST, bancos de dados relacionais e não relacionais e serviços em nuvem. Foco em performance, boas práticas e código sustentável, do design da arquitetura à entrega.",
  },
  {
    icon: <RxCrop />,
    title: "Front-End & UI/UX",
    description: "Interfaces modernas, responsivas e acessíveis.",
    moreDescription:
      "Crio interfaces intuitivas e responsivas com React, Tailwind CSS e Framer Motion, com atenção a usabilidade, performance e consistência visual. Uso Figma para prototipação e para conectar a etapa de design à implementação técnica.",
  },
  {
    icon: <RxReader />,
    title: "IA Aplicada & Automação",
    description: "Agentes de IA, RAG e integração com LLMs.",
    moreDescription:
      "Aplico IA de ponta a ponta no desenvolvimento: arquitetura de agentes autônomos, RAG (Retrieval-Augmented Generation) e MCP (Model Context Protocol) para integrar LLMs em sistemas de produção, do design da arquitetura ao deploy.",
  },
  {
    icon: <RxCode />,
    title: "Mentoria e Capacitação Técnica",
    description: "Formação de times e profissionais em tecnologia.",
    moreDescription:
      "Como Instrutor Técnico no SENAI, formo profissionais em desenvolvimento Full Stack, metodologias ágeis (Scrum/Kanban) e boas práticas de mercado — do levantamento de requisitos à entrega de projetos reais.",
  },
];

const ServiceList = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Estado para controlar o card ativo

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Alterna entre ativo e inativo
  };

  return (
    <div className="max-h-[500px] overflow-y-scroll hide-scrollbar">
      {/* Container com scroll vertical */}
      <div className="flex flex-col gap-y-6">
        {serviceData.map((item, index) => {
          const isActive = activeIndex === index; // Verifica se o card é o ativo
          return (
            <div
              key={index}
              className={`bg-[#2B2154] rounded-lg px-6 py-8 transition-all duration-300 cursor-pointer ${isActive ? "rotate-y-180" : ""}`}
              onClick={() => handleCardClick(index)} // Adiciona o evento de clique
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title e desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="leading-normal">
                  {isActive ? item.moreDescription : item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceList;
