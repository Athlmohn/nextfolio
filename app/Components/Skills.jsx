import React from "react";
import Techstack from "./Techstack";

function Skills() {
  return (
    <div className="w-full lg:h-[85vh] p-4 py-4">
      <div className="max-w-[1240px] h-full mx-auto">
        <h1 className="uppercase tracking-widest text-xl text-[#A020F0] md:text-2xl font-bold mb-4">
          professional <span>Skills</span>
        </h1>
        <div className="py-6">
          <Techstack />
        </div>
      </div>
    </div>
  );
}

export default Skills;
