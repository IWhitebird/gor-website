import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-5">
        <div className="w-full text-15px self-center flex items-center justify-center gap-2 z-[1000]">
            <p>
                &copy; Made by Iwhitebird 
            </p>
            <a href="https://github.com/iwhitebird" target="_blank">
                <FaGithub />
            </a>
        </div>
    </div>
  );
};

export default Footer;
