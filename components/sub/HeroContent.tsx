"use client";

import React from "react";
import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";
import { slideInFromTop } from "@/utils/motion";
import SparklesIcon from "@heroicons/react/24/solid/SparklesIcon";
import Loader from "./Loader";
import axios from "axios";
import AstEditor from "./AstEditor";

const HeroContent = () => {

  const [loading, setLoading] = React.useState(false);
  const [output, setOutput] = React.useState("");
  const [code, setCode] = React.useState(
    `print(5 + 5)`
  );
  const [viewType , setViewType] = React.useState("output");

  async function clickHandler() {
    try {
      setLoading(true);

      const res = await axios.post("http://localhost:8080/gorRunner", {
        code: code,
      });

      console.log(res)
      setOutput(res.data.data);
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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-row gap-5 justify-center m-auto text-start">
        
        <div className="mx-auto w-[80%] h-[400px] border border-white rounded-md">
          <CodeEditor
            code={code}
            setCode={setCode}
           />
        </div>  

        <div className="mx-auto w-[80%] flex justify-between gap-5">
          


          <motion.div
            variants={slideInFromTop}
            className="w-full"
            onClick={() => {console.log("hi")}}
          >
         
         {
           viewType === 'output' &&
            <div className="mx-auto w-full h-[400px] border border-white rounded-md">
              <AstEditor
                code={output}
                setCode={setCode}
              />
            </div>     
         }
         {
            viewType === 'ast' &&
            <div className="bg-black w-full h-[400px] rounded-lg text-white border border-white p-3 flex">
            
            
            <div className="Welcome-text text-[18px] ">
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
         }

          </motion.div>

          <div className="flex flex-col gap-5">
            <motion.div
              variants={slideInFromTop}
              className={`Welcome-box py-[8px] px-[13px] border border-[#7042f88b] ${loading ? 'opacity-[0.5] ' : 'opacity-[0.9] '}`}
              
            >
              <button disabled={loading} className="w-full flex justify-center items-center gap-2" onClick={clickHandler}>
                  <SparklesIcon className="text-[#b49bff] h-5 w-10" />
                  <h1 className="Welcome-text text-[18px]">
                    Run
                  </h1>
              </button>

            </motion.div>

            <motion.div
              variants={slideInFromTop}
              className={`Welcome-box py-[8px] px-[13px] border border-[#7042f88b] ${loading ? 'opacity-[0.5] ' : 'opacity-[0.9] '}`}
              
            >
              <button disabled={loading} className="w-[90px] flex justify-center items-center gap-2" 
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
              </button>

            </motion.div>     

          </div>


        </div>
      

      </div>

    </motion.div>
  );
};

export default HeroContent;
