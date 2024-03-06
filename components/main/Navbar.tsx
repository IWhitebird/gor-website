import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full top-2 fixed z-50">
      <div className="mx-auto w-[50%] h-[52px]  shadow-md shadow-[#2A0E61]/50 bg-[#ffffff0a] rounded-full
     backdrop-blur-sm  px-5">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">

          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />

            <h1 className="Welcome-text text-[25px]">
              Gor
            </h1>
          </a>


          <div className="flex flex-row gap-5 text-gray-300">

            <a className="h-auto w-auto flex flex-row items-center gap-2"
              href="https://github.com/iwhitebird" target="_blank">

            <h1 className="Welcome-text text-[18px]">

              Source Code
            </h1>

              <FaGithub />
            </a>


          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
