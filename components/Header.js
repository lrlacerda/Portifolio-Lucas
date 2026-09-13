// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

// icons
import { HiArrowDownTray } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"}>
            <h1 className="text-3xl flex items-center"><b className="px-2">Lucas</b><span className="text-accent">Ribeiro de Lacerda</span></h1>
          </Link>
          <div className="flex items-center gap-x-6">
            {/* download cv */}
            <a
              href="/cv-lucas-lacerda.pdf"
              download
              className="hidden md:flex items-center gap-x-2 text-sm border border-white/30 rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-all duration-300"
            >
              <HiArrowDownTray /> Baixar Currículo
            </a>
            {/* socials */}
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
