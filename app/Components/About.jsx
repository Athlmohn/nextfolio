"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

function About() {
  return (
        <div
          id="about"
          className="w-full md:h-[60vh] p-2 flex items-center py-8]"
        >
          <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 items-center">
            <div className="col-span-2 p-2">
              <h1 className="uppercase tracking-widest text-xl text-[#A020F0] md:text-2xl font-bold mb-4">
                <span> About</span> Me
              </h1>
              <div className="py-2 text-gray-600">
                <p>
                  As a self-taught developer, I am fueled by an insatiable
                  passion for tackling challenges head-on, armed with
                  cutting-edge technologies. My journey began after completing
                  my post-graduation in Computer Applications, where I
                  discovered my love for coding and the limitless possibilities
                  it offers.
                </p>{" "}
                <br />
                <p>
                  Throughout my learning journey, I have acquired proficient
                  knowledge in JavaScript and C++, honing my skills to become
                  well-versed in web development frameworks like React.js and
                  Next.js. Embracing the ever-evolving nature of the tech world,
                  I am constantly on the lookout for new technologies to enhance
                  my expertise.
                </p>
              </div>
            </div>
            <div className="md:col-span-1 col-span-2 md:ml-auto">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.8}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="50%"
              >
                <div className="cursor-pointer rounded-[50%] flex items-center justify-center">
                  <Image
                    src="/Avatar.png"
                    alt="Avatar"
                    width="300"
                    height="300"
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
  );
}

export default About;
