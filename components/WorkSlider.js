const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Hospedagens",
          path: "/Hospedagens.com.png",
          href: "https://lrlacerda.github.io/Hospedagens.com/",
          isVideo: false,
        },
        {
          title: "Compras Eletrônicos",
          path: "/ComprasEletronicos.png",
          href: "https://lrlacerda.github.io/Vendas_Eletronicos/",
          isVideo: false,
        },
        {
          title: "HBO",
          path: "/HBO.png",
          href: "https://lrlacerda.github.io/HBOmax/",
          isVideo: false,
        },
        {
          title: "Mundo Invertido",
          path: "/MundoInvertido.png",
          href: "https://lrlacerda.github.io/Mundo-invertido/",
          isVideo: false,
        },

      ],
    },

    {
      images: [
        {
          title: "Mundo Harry Potter",
          path: "/Harrypotter.png",
          href: "",
          isVideo: true,
          videoSrc: "/videos/HarryPotter.mp4",
        },
        {
          title: "spider",
          path: "/spider.png",
          href: "",
          isVideo: true,
          videoSrc: "/videos/spider.mp4",
        },
      ],
    },
  ],
};

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";


// Função para abrir vídeo em tela cheia
const openVideo = (videoSrc) => {
  const videoWindow = window.open('', '_blank');
  if (videoWindow) {
    videoWindow.document.write(`
      <html>
        <head>
          <title>Vídeo</title>
          <style>
            body {
              margin: 0;
              background: black;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            video {
              width: 100%;
              height: auto;
            }
          </style>
        </head>
        <body>
          <video controls autoplay>
            <source src="${videoSrc}" type="video/mp4">
            Seu navegador não suporta vídeos.
          </video>
        </body>
      </html>
    `);
    videoWindow.document.close();
  }
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer mt-[60px]">
            {slide.images.map((image, imageIndex) => (
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={imageIndex}>
                {image.isVideo ? (
                  <div className="relative flex items-center justify-center group cursor-pointer" onClick={() => openVideo(image.videoSrc)}>
                    <Image src={image.path} width={500} height={300} alt={image.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100">VER</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          VIDEO
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={image.href || "#"} target="_blank" passHref>
                    <div className="flex items-center justify-center relative overflow-hidden group">
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
                  </Link>
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
