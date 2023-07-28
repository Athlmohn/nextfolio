"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import "animate.css";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { PiUserCircleBold } from "react-icons/pi";
import { LiaTelegramPlane } from "react-icons/lia";
import {
  AiOutlineFundProjectionScreen,
  AiFillStar,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";

function Navbar() {
  const Nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/",
      display: "About",
    },
    {
      path: "/",
      display: "Projects",
    },
    {
      path: "/",
      display: "Contact",
    },
  ];

  const currentYear = new Date().getFullYear();

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full h-[5rem] shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-indigo-900 to-purple-600 rounded-full w-[50px] h-[50px] p-[2px] animate__animated animate__bounceInDown">
            <Image src="/Logo.svg" alt="Logo" width="60" height="60" />
          </div>
          <div>
            <p className="text-xl font-bold hover:text-[#A020F0] animate__animated animate__bounceInDown">
              ATHUL MOHAN
            </p>
          </div>
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-8 animate__animated animate__bounceInDown">
            <Link href="/">
              <div className="flex items-center transform gap-1 text-sm font-bold uppercase hover:text-[#A020F0] hover:translate-y-[-2px]">
                <BiHome size={20} />
                <li className="mt-1">Home</li>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center transform gap-1 text-sm font-bold uppercase hover:text-[#A020F0] hover:translate-y-[-2px]">
                <PiUserCircleBold size={20} />
                <li className="mt-1">About</li>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center transform gap-1 text-sm font-bold uppercase hover:text-[#A020F0] hover:translate-y-[-2px]">
                <AiOutlineFundProjectionScreen size={20} />
                <li className="mt-1">Projects</li>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center transform gap-1 text-sm font-bold uppercase hover:text-[#A020F0] hover:translate-y-[-2px]">
                <LiaTelegramPlane size={20} />
                <li className="mt-1">Contacts</li>
              </div>
            </Link>
            <Link href="https://github.com/Athlmohn" target="_blank">
              <span className="flex px-2 py-1 rounded-lg gap-[10px]  bg-[#A020F0] text-white hover:bg-white hover:text-[#A020F0] border-2 border-solid border-[#A020F0]">
                <AiFillStar size={20} />
                <CgGitFork size={20} />
              </span>
            </Link>
          </ul>
          <div className="cursor-pointer p-3 md:hidden" onClick={() => setOpen(!open)}>
            <AiOutlineMenu size={30}/>
          </div>
        </div>
      </div>
        <div className={open ? 'fixed w-full h-screen top-0 right-0 bg-black/70 md:hidden' : ''}>
          <div className={open ? 'fixed top-0 right-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ECF0F3] md:hidden' : 'fixed top-0 right-[-100%] ease-in-out duration-500'}>
            <div className="flex items-center justify-between p-3">
              <div className="bg-gradient-to-r from-indigo-900 to-purple-600 rounded-full w-[50px] h-[50px] p-[3px]">
                <Image src="/Logo.svg" alt="Logo" width="60" height="60" />
              </div>
              <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                <AiOutlineClose size={30}/>
              </div>
            </div>
            <div className="border-b border-gray-300 py-1" />
            <div className="p-6 flex flex-col mt-8">
              {Nav_titles.map((item, i) => (
                <ul key={i} className="uppercase py-4">
                  <Link href={item.path}>
                    <li className="py-4 text-sm font-bold">{item.display}</li>
                  </Link>
                </ul>
              ))}
            </div>
            <div className="py-32 p-6">
              <p className="uppercase tracking-widest text-[#A020F0]">
                find me on
              </p>
              <div className="flex items-center gap-5 mt-3">
                <div className="rounded shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link
                    href="https://www.linkedin.com/in/Athlmohn"
                    target="_blank"
                  >
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
            <div className="border-b border-gray-300 py-1" />
            <div className=" py-4 text-center">
              <p className="text-[12px] font-bold">
                Copyright &copy;{currentYear}
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Navbar;
