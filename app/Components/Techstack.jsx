import React from "react";
import { GrReactjs } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandRedux,
  TbBrandNextjs,
  TbBrandThreejs,
} from "react-icons/tb";

function Techstack() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col justify-center items-center border-2 border-[#A020F0]/30 rounded-md p-8 shadow-md hover:scale-105 ease-in duration-300">
          <AiOutlineHtml5 size={70} />
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#A020F0]/30 rounded-md p-8 shadow-md hover:scale-105 ease-in duration-300">
          <TbBrandCss3 size={70} />
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#A020F0]/30 rounded-md p-8 shadow-md hover:scale-105 ease-in duration-300">
          <TbBrandJavascript size={70} />
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#A020F0]/30 rounded-md p-8 shadow-md hover:scale-105 ease-in duration-300">
          <GrReactjs size={70} />
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#A020F0]/30 rounded-md p-8 shadow-md hover:scale-105 ease-in duration-300">
          <TbBrandNextjs size={70} />
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#A020F0]/30 rounded-md p-8 shadow-md hover:scale-105 ease-in duration-300">
          <TbBrandThreejs size={70} />
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#A020F0]/30 rounded-md p-8 shadow-md hover:scale-105 ease-in duration-300">
          <FaGithub size={70} />
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#A020F0]/30 rounded-md p-8 shadow-md hover:scale-105 ease-in duration-300">
          <TbBrandRedux size={70} />
        </div>
      </div>
      <div className="flex justify-center py-6">
        <div className="table rounded-md px-28 py-7 border-2 border-[#A020F0]/30 shadow-md hover:border-[#A020F0] hover:scale-105 ease-in duration-300">
          <SiFirebase size={70} />
        </div>
      </div>
    </div>
  );
}

export default Techstack;
