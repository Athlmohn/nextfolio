import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

function Main() {
  return (
    <div className="w-ful h-screen text-center relative">
      <div className="max-w-[1240px] w-full h-full flex justify-center items-center mx-auto p-2">
        <div>
          <h1 className="text-gray-700 py-4">
            Hi i'm <span className="text-[#A020F0]">Athul Mohan</span>
          </h1>
          <h2 className="py-1">
            <span className="span_main">
              <span className="span_rotate">Frontned Developer</span>
              <span className="span_rotate">Web Developer</span>
              <span className="span_rotate">Next Js Developer</span>
              <span className="span_rotate">Open Source Contributor</span>
              <span className="span_rotate">React Js Developer</span>
            </span>
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a Passionate frontend web developer with a flair for creating
            captivating user experiences. Proficient in modern web technologies
            and dedicated to crafting pixel-perfect designs.
          </p>
        </div>
      </div>
      <div className="hidden sm:absolute sm:flex flex-col gap-4 items-center p-2 top-[17rem] left-0 border-r-2 border-b-2 border-t-2 border-gray-400/50 hover:border-[#A020F0]/50 hover:scale-105 ease-in duration-300">
        <div className="rounded shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <Link href="https://www.linkedin.com/in/Athlmohn" target="_blank">
            <FaLinkedinIn />
          </Link>
        </div>
        <div className="rounded shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <Link href="https://github.com/Athlmohn" target="_blank">
            <FaGithub />
          </Link>
        </div>
        <div className="rounded shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <Link href="https://twitter.com/Athlmohn" target="_blank">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
