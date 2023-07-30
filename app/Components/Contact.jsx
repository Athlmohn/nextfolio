import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
function Contact() {
  return (
    <div id="contact" className="w-full py-16">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-full bg-white border-2 border-t-purple-500 border-b-purple-500">
          <div className="bg-purple-500 text-white flex flex-col items-center justify-center p-6">
            <h1 className="font-bold text-4xl md:text-5xl">Let's chat</h1>
            <p className="text-center text-sm md:text-lg mt-4">
              Reach out to me and let's build something amazing together!
            </p>
          </div>
          <div className="flex flex-col space-y-4 pt-4 md:w-5/6 md:ml-12">
            <form className="flex flex-col space-y-4 p-6">
              <div className="flex flex-col static w-full">
                <label
                  htmlFor="input"
                  className="text-xs text-[#A020f0] font-bold relative top-2 ml-2 px-1 w-fit bg-white"
                >
                  Name :
                </label>
                <input
                  type="text"
                  placeholder="Tom"
                  name="input"
                  className="px-3 py-2 border-2 border-[#818CF8] rounded bg-white focus:outline-none"
                />
              </div>
              <div className="flex flex-col static w-full">
                <label
                  htmlFor="input"
                  className="text-xs text-[#A020f0] font-bold relative top-2 ml-2 px-1 w-fit bg-white"
                >
                  Email :
                </label>
                <input
                  type="text"
                  placeholder="tom@xyz.com"
                  name="input"
                  className="px-3 py-2 border-2 border-[#818CF8] rounded bg-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="input"
                  className="text-xs text-[#A020f0] font-bold relative top-4 ml-2 px-1 w-fit bg-white"
                >
                  Message :
                </label>
                <textarea
                  placeholder="Type your Message here..."
                  rows="4"
                  className="border-2 border-[#818CF8] w-full rounded-md px-4 py-2 mt-2 focus:outline-none"
                ></textarea>
              </div>
              <button className="self-stretch group relative z-1 justify-center flex items-center font-medium text-white transition-all duration-200 ease-in-out rounded-lg px-4 py-2 active:scale-95 active:shadow-inner md:self-end">
                <div className="absolute -z-10 -inset-0.5 rounded-xl blur-xl group-hover:opacity-100 animate-pulse group-hover:inset-10"></div>
                <div className="transform group-hover:translate-x-5 group-hover:rotate-45 transition-all duration-400">
                  <RiSendPlaneFill />
                </div>
                <span className="ml-1 text-white transition-all duration-300 group-hover:text-transparent">
                  Send
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
