"use client";

import React from "react";
import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";
import SparklesIcon from "@heroicons/react/24/solid/SparklesIcon";
import axios from "axios";
import AstEditor from "./AstEditor";

const HeroContent = () => {

  const [loading, setLoading] = React.useState(false);
  const [output, setOutput] = React.useState("");
  const [ast , setAst] = React.useState("");
  const [code, setCode] = React.useState(`#If the Print Exceed stdout buffer it wont return and go in 
#loading , also this editor javascript syntax highliting so 
#it may look bad

let a = 0
for(let i = 0 ; i < 100 ; i = i + 1) {
    a = a + 1
}
print(a)
`);
  const [viewType , setViewType] = React.useState("ast");

  async function clickHandler() {
    if(loading === true) return;
    try {
      setLoading(true);

      const res = await axios.post(process.env.NEXT_PUBLIC_RENDER_URL + "/gorRunner", {
        code: code,
      });

      console.log(res)
      setOutput(res.data.Output);
      setAst(res.data.AST);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full m-10 mx-auto z-[20]"
    >
      <div className="h-full w-full flex flex-row gap-5 justify-center m-auto text-start">
        


        <div className="mx-auto w-[80%] h-[400px] border border-white rounded-md">
          <CodeEditor
            code={code || ""}
            setCode={setCode}
           />
        </div>  


        <div className="mx-auto w-[80%] flex justify-between gap-5">
          



         
         {
           viewType === 'output' &&
            <div className="mx-auto w-full h-[400px] border border-white rounded-md">
              <AstEditor
                code={`Abstract Syntax Tree : \n` +ast || ""}
              />
            </div>     
         }
         {
            viewType === 'ast' &&
            <div className="mx-auto w-full h-[400px] border border-white rounded-md">
              <AstEditor
                code={`output : \n` + output || ""}
              />
            </div>
         }

          <div className="flex flex-col gap-5">
            <div
              onClick={clickHandler}
              className={`Welcome-box cursor-pointer select-none py-[8px] px-[13px] border border-[#7042f88b] ${loading ? 'opacity-[0.5] cursor-wait' : 'opacity-[0.9] cursor-pointer'}`}
              
            >
              <div className="w-full flex justify-center items-center gap-2" >
                  <SparklesIcon className="text-[#b49bff] h-5 w-10" />
                  <h1 className="Welcome-text text-[18px]">
                    Run
                  </h1>
              </div>

            </div>

            <div
                onClick={ () => {
                  if(viewType === 'output') {
                    setViewType('ast');
                  } else {
                    setViewType('output');
                  }
              }}
              className={`Welcome-box select-none py-[8px] px-[13px] border border-[#7042f88b] ${loading ? 'opacity-[0.5] cursor-wait' : 'opacity-[0.9] cursor-pointer'}`}
              
            >
              <div className="w-[90px] flex justify-center items-center gap-2" 
                onClick={ () => {
                    if(viewType === 'output') {
                      setViewType('ast');
                    } else {
                      setViewType('output');
                    }
                }
              }>
                  <SparklesIcon className="text-[#b49bff] h-5 w-10" />
                  <h1 className="Welcome-text text-[18px]">
                    {viewType === 'output' ? 'Output' : 'AST'}
                  </h1>
              </div>

            </div>     

          </div>


        </div>
      

      </div>

    </motion.div>
  );
};

export default HeroContent;
