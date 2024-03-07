import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bottom-5 fixed z-50 Welcome-text font-md text-md">
        <div className="w-full text-15px self-center flex items-center justify-center gap-1 z-[1000]">
            <p>
                Made by Iwhitebird 
            </p>
            <a href="https://github.com/iwhitebird" target="_blank">
                <FaGithub 
                    className="text-white h-5 w-5"
                />
            </a>
        </div>
    </div>
  );
};

export default Footer;
