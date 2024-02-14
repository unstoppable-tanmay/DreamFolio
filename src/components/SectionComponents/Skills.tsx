import React from "react";
import { Parallax } from "react-scroll-parallax";

const Skills = () => {
  return (
    <>
      {/* Section 4 Skills */}
      <section
        className="section4 w-full h-screen relative flex flex-col justify-center font-sans font-semibold md:font-bold text-[9vh] md:text-[15vh]"
        data-cursor-text="Double Click"
        data-cursor-size={70}
      >
        <Parallax translateX={[-50, 0]}>
          <div className="w-[200vw] flex items-center gap-5 md:gap-10 ">
            {"HTML CSS JS REACT NEXT SCSS TAILWIND ANGULAR MUI ANT"
              .split(" ")
              .map((ele, ind) => {
                return (
                  <span
                    className={`text-white duration-200 ${
                      ind % 2
                        ? "text-opacity-0  text-stroke text-transparent"
                        : "hover:text-opacity-90 text-opacity-20"
                    }`}
                    key={ind}
                  >
                    {ele}{" "}
                  </span>
                );
              })}
          </div>
        </Parallax>
        <Parallax translateX={[0, -50]}>
          <div className="w-[200vw] flex items-center gap-5 md:gap-10 ">
            {"NODE MONGO EXPRESS PRISMA SPRING REDIS KAFKA"
              .split(" ")
              .map((ele, ind) => {
                return (
                  <span
                    className={`text-white duration-200 ${
                      ind % 2
                        ? "text-opacity-0  text-stroke text-transparent"
                        : "hover:text-opacity-90 text-opacity-20"
                    }`}
                    key={ind}
                  >
                    {ele}{" "}
                  </span>
                );
              })}
          </div>
        </Parallax>
        <Parallax translateX={[-40, 0]}>
          <div className="w-[200vw] flex items-center gap-5 md:gap-10 font-bold">
            {"FLUTTER DART JAVA PYTHON GO RUBY C# C++ "
              .split(" ")
              .map((ele, ind) => {
                return (
                  <span
                    className={`text-white duration-200 ${
                      ind % 2
                        ? "text-opacity-0  text-stroke text-transparent"
                        : "hover:text-opacity-90 text-opacity-20"
                    }`}
                    key={ind}
                  >
                    {ele}{" "}
                  </span>
                );
              })}
          </div>
        </Parallax>
      </section>
    </>
  );
};

export default Skills;
