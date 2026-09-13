const workSlider = {
  slides: [
    {
      images: [
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
      ],
    },
  ],
};

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import { RiGithubFill } from "react-icons/ri";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[420px] sm:h-[620px]"
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 gap-4 cursor-pointer mt-[60px]">
            {slide.images.map((image, imageIndex) => (
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
                <div
                  className="flex items-center justify-center relative overflow-hidden group cursor-pointer"
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
                  <Image src={image.path} width={500} height={300} alt={image.title} />
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
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
