"use client";

import React from "react";
import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";
import { slideInFromTop } from "@/utils/motion";
import SparklesIcon from "@heroicons/react/24/solid/SparklesIcon";
import Loader from "./Loader";

const HeroContent = () => {

  const [loading, setLoading] = React.useState(false);
  const [output, setOutput] = React.useState("");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        
        <div className="mx-auto w-[80%] h-[400px] border border-white rounded-md">
          <CodeEditor />
        </div>  

        <div className="mx-auto w-[80%] flex justify-between gap-5">
          


        <motion.div
            variants={slideInFromTop}
            className="w-full"
            onClick={() => {console.log("hi")}}
          >
          <div className="bg-black w-full rounded-lg text-white border border-white p-3">
            
            
            <div className="Welcome-text text-[18px]">
              Output : 
            </div>

              {
                loading && <Loader />
              }

              {
                output.length > 0 && 
                <div>
                  {output}
                </div>
              }
             
          </div>
          </motion.div>


          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[13px] border border-[#7042f88b] opacity-[0.9] 
            cursor-pointer"
            onClick={() => {console.log("hi")}}
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[18px]">
              Run
            </h1>
          </motion.div>

        </div>
      

      </div>

    </motion.div>
  );
};

export default HeroContent;
