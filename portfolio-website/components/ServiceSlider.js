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
    title: "Desenvolvedor Full Stack",
    description: "Criando experiências digitais dinâmicas e funcionais.",
    moreDescription:
      "Sou especializado em desenvolvimento Full Stack, utilizando tecnologias modernas como React, Node.js e TypeScript para construir aplicações responsivas. Com foco na performance e usabilidade, ofereço soluções que atendem às necessidades dos clientes, integrando APIs e colaborando em equipes multidisciplinares.",
  },
  {
    icon: <RxCrop />,
    title: "Desenvolvedor Front-End",
    description: "Criação de Interfaces Dinâmicas e Responsivas.",
    moreDescription:
      "Especializado no desenvolvimento de interfaces intuitivas e atraentes, utilizo tecnologias como React, CSS, e JavaScript para criar experiências de usuário fluidas e responsivas. Com foco em usabilidade e performance, desenvolvo layouts modernos que se adaptam a diferentes dispositivos, garantindo uma interação agradável e eficiente para os usuários finais.",
  },
  {
    icon: <RxCode />,
    title: "Desenvolvedor Web",
    description: "Criação de Soluções Inovadoras e Eficientes.",
    moreDescription:
      "Com experiência em desenvolvimento Full Stack, foco em tecnologias modernas como React, Node.js e TypeScript. Comprometido em criar aplicações web dinâmicas e intuitivas, otimizando a experiência do usuário e implementando melhores práticas de desenvolvimento ágil.",
  },
  {
    icon: <RxReader />,
    title: "Arquitetura de Soluções",
    description: "Planejamento e Estruturação de Sistemas Escaláveis.",
    moreDescription:
      "Trabalho com a arquitetura de soluções robustas e escaláveis, desde a concepção até a implementação. Tenho experiência em projetar sistemas que integram diversas tecnologias, como microsserviços, bancos de dados relacionais e não relacionais, e serviços em nuvem. Foco na eficiência e escalabilidade para garantir que as soluções atendam às demandas crescentes do mercado, sempre priorizando a segurança e a performance.",
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
