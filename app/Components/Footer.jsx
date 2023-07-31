import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  const Year = new Date().getFullYear();

  return (
    <div className="w-full h-[30vh] p-12  bg-black">
      <div>
        <div className="flex items-center justify-between pb-12">
          <div>
            <p className="text-sm text-white tracking- font-medium uppercase md:text-2xl">Athul Mohan</p>
          </div>
          <div>
            <div className="flex items-center gap-5 mt-3">
              <div className="rounded p-1 bg-white cursor-pointer hover:scale-105 hover:bg-[#818CF8] hover:text-white text-sm md:p-2 md:text-lg">
                <Link
                  href="https://www.linkedin.com/in/Athlmohn"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="rounded p-1 bg-white cursor-pointer hover:scale-105 hover:bg-[#818CF8] hover:text-white text-sm md:p-2 md:text-lg">
                <Link href="https://github.com/Athlmohn" target="_blank">
                  <FaGithub />
                </Link>
              </div>
              <div className="rounded p-1 bg-white cursor-pointer hover:scale-105 hover:bg-[#818CF8] hover:text-white text-sm md:p-2 md:text-lg">
                <Link href="https://twitter.com/Athlmohn" target="_blank">
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-white rounded w-full mx-auto"/>
        <div className="flex items-center justify-evenly gap-2 text-white pt-10">
          <div>
            <p className="text-[9px] font-medium md:text-xs">
              Designed by Athul
            </p>
          </div>
          <div>
            <p className="text-[9px] font-medium md:text-xs">&copy;Copyright {Year}</p>
          </div>
          <div>
            <p className="text-[9px] font-medium md:text-xs">Made with ❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
