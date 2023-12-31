import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectList({ title, Img, Url, build }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#709dff] to-[#A020F0]">
      <Image
        src={Img}
        className="rounded-xl group-hover:opacity-10"
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{build}</p>
        <Link href={Url} target="_blank">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-md cursor-pointer">
            Demo
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectList;
