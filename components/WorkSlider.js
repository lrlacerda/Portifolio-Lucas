// lista plana de projetos — agrupada em páginas de 4 no componente abaixo
const projects = [
  {
    title: "Plataforma de Gestão de Competências",
    private: true,
    tech: [".NET 8", "React 19"],
    description:
      "Projeto pessoal em desenvolvimento: plataforma para gestão de competências profissionais, com back-end em .NET 8 e front-end em React 19.",
    caseStudySlug: "decisoes-de-arquitetura-projetos-privados",
  },
  {
    title: "E-commerce Completo",
    private: true,
    tech: ["React", "C#"],
    description:
      "E-commerce completo já em produção, do catálogo ao checkout, construído com React no front-end e C# no back-end.",
    caseStudySlug: "decisoes-de-arquitetura-projetos-privados",
  },
  {
    title: "Rotina a Dois",
    private: true,
    tech: ["Next.js"],
    description:
      "Aplicativo pessoal para organizar rotina e tarefas compartilhadas entre duas pessoas, com autenticação de usuários.",
  },
  {
    title: "Assistente de LinkedIn com IA",
    tech: ["JavaScript", "OpenAI", "Anthropic", "Azure AI"],
    description:
      "Extensão de navegador que analisa perfis do LinkedIn e sugere melhorias usando IA (OpenAI, Anthropic ou Azure AI Foundry).",
    href: "https://github.com/lrlacerda/linkedin-ai-assistant",
    repoHref: "https://github.com/lrlacerda/linkedin-ai-assistant",
  },
  {
    title: "PSN Store Clone",
    tech: ["Angular", "TypeScript"],
    description:
      "Clone da loja PlayStation Store construído com Angular e TypeScript.",
    href: "https://github.com/lrlacerda/angular-psn-store",
    repoHref: "https://github.com/lrlacerda/angular-psn-store",
  },
  {
    title: "Gerenciador de Tarefas",
    tech: ["React", "JavaScript"],
    description:
      "Aplicativo para organizar tarefas e compromissos do dia a dia, com formulários e validação em React.",
    href: "https://react-web-formulario.vercel.app",
    repoHref: "https://github.com/lrlacerda/React-Web-Formulario",
  },
  {
    title: "CineSenai",
    tech: ["React", "Vite"],
    description:
      "Sistema de catálogo e reservas de ingressos de cinema, front-end em React + Vite.",
    href: "https://github.com/lrlacerda/CineSenai-Final",
    repoHref: "https://github.com/lrlacerda/CineSenai-Final",
  },
  {
    title: "Hospedagens",
    path: "/Hospedagens.com.png",
    href: "https://lrlacerda.github.io/Hospedagens.com/",
    repoHref: "https://github.com/lrlacerda/Hospedagens.com",
  },
  {
    title: "Compras Eletrônicos",
    path: "/ComprasEletronicos.png",
    href: "https://lrlacerda.github.io/Vendas_Eletronicos/",
    repoHref: "https://github.com/lrlacerda/Vendas_Eletronicos",
  },
  {
    title: "HBO",
    path: "/HBO.png",
    href: "https://lrlacerda.github.io/HBOmax/",
    repoHref: "https://github.com/lrlacerda/HBOmax",
  },
  {
    title: "Mundo Invertido",
    path: "/MundoInvertido.png",
    href: "https://lrlacerda.github.io/Mundo-invertido/",
    repoHref: "https://github.com/lrlacerda/Mundo-invertido",
  },
  {
    title: "spider",
    path: "/spider.png",
    href: "https://github.com/lrlacerda/Spiderverse",
    repoHref: "https://github.com/lrlacerda/Spiderverse",
  },
];

const PROJECTS_PER_PAGE = 4;
const projectPages = [];
for (let i = 0; i < projects.length; i += PROJECTS_PER_PAGE) {
  projectPages.push(projects.slice(i, i + PROJECTS_PER_PAGE));
}

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import { RiGithubFill, RiLockLine } from "react-icons/ri";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      mousewheel={{
        forceToAxis: true,
      }}
      modules={[Pagination, Mousewheel]}
      className="h-[420px] sm:h-[620px]"
    >
      {projectPages.map((page, pageIndex) => (
        <SwiperSlide key={pageIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer pt-[60px] h-full">
            {page.map((image, imageIndex) => (
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={imageIndex}>
                {image.repoHref && (
                  <a
                    href={image.repoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title="Ver código no GitHub"
                    aria-label="Ver código no GitHub"
                    className="absolute top-2 right-2 z-10 text-xl bg-black/50 rounded-full p-1.5 hover:text-accent transition-colors duration-300"
                  >
                    <RiGithubFill />
                  </a>
                )}
                {!image.path ? (
                  <div
                    className={`w-full h-full min-h-[150px] bg-gradient-to-br from-[#2B2154] to-[#4a22bd] rounded-lg flex flex-col justify-center gap-y-2 p-4 text-left ${!image.private ? "cursor-pointer" : ""}`}
                    role={!image.private ? "button" : undefined}
                    tabIndex={!image.private ? 0 : undefined}
                    aria-label={!image.private ? `Ver projeto: ${image.title}` : undefined}
                    onClick={!image.private ? () => window.open(image.href || "#", "_blank", "noopener,noreferrer") : undefined}
                    onKeyDown={
                      !image.private
                        ? (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              window.open(image.href || "#", "_blank", "noopener,noreferrer");
                            }
                          }
                        : undefined
                    }
                  >
                    {image.private && (
                      <div className="flex items-center gap-x-2 text-white/50 text-[11px] uppercase tracking-widest">
                        <RiLockLine /> Código privado
                      </div>
                    )}
                    <div className="text-base font-medium leading-tight">{image.title}</div>
                    <div className="text-[13px] text-white/60 leading-snug">{image.description}</div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {image.tech.map((t) => (
                        <span key={t} className="text-[11px] bg-white/10 rounded px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                    {image.private && (
                      <div className="flex flex-col gap-y-0.5 mt-1">
                        {image.caseStudySlug && (
                          <Link
                            href={`/blog/${image.caseStudySlug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-accent text-[13px] hover:underline"
                          >
                            Ler estudo de caso →
                          </Link>
                        )}
                        <Link
                          href="/contact"
                          onClick={(e) => e.stopPropagation()}
                          className="text-white/60 text-[13px] hover:underline"
                        >
                          Quer saber mais? Fale comigo →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                <div
                  className="w-full h-full flex items-center justify-center relative overflow-hidden group cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver projeto: ${image.title}`}
                  onClick={() => window.open(image.href || "#", "_blank", "noopener,noreferrer")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.open(image.href || "#", "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <Image src={image.path} fill sizes="(max-width: 640px) 50vw, 300px" className="object-cover" alt={image.title} />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">VER</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJETO
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
