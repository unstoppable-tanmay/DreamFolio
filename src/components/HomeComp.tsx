"use client";

import TextDipserse from "./textdiperserhome/TextDisperse";
import React, { useEffect, useRef, useState } from "react";
import Cardcomp from "./3dcard/Cardcomp";
import { motion } from "framer-motion";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Bg from "./Bg/Bg";
import { useRouter } from "next/navigation";

const projectdata = [
  {
    name: "The Book",
    link: "https://github.com/unstoppable-tanmay/Library",
  },
  {
    name: "Cymetics",
    link: "https://github.com/unstoppable-tanmay/Cymatics",
  },
  {
    name: "Threads",
    link: "https://github.com/unstoppable-tanmay/Threads",
  },
  {
    name: "FoodLab",
    link: "https://github.com/unstoppable-tanmay/FoodLab",
  },
  {
    name: "GcekFolio",
    link: "https://codebreakersgcek.engineer/",
  },
];

const aestheticColors = [
  "#F9EBE0", // Cream
  "#F3D1A5", // Peach
  "#EFD9CE", // Pale Pink
  "#A9DFBF", // Mint Green
  "#FAD02E", // Lemon Yellow
  "#FF6B6B", // Coral
  "#C5E1A5", // Pastel Green
  "#FFDAC1", // Apricot
  "#FFD700", // Gold
  "#A0CED9", // Powder Blue
  "#E5E5E5", // Light Gray
  "#D4A5A5", // Dusty Rose
];

const HomeComp = ({ isMobile }: { isMobile: boolean }) => {
  const [loading, setLoading] = useState(true);
  const [loadingAnimation, setLoadingAnimation] = useState(false);

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const runLoading = async () => {
    // await delay(1000);
    setLoadingAnimation(true);
    await delay(1000);
    setLoading(false);
  };

  useEffect(() => {
    runLoading();
  });

  return (
    <main
      className={
        loading
          ? `main w-screen h-screen overflow-hidden relative`
          : `main w-screen flex flex-col items-center justify-center home overflow-x-hidden relative`
      }
    >
      {loading ? (
        <div className="w-screen h-screen font-FiraCode overflow-hidden absolute z-50">
          <div
            className={
              !loadingAnimation
                ? "overflow-hidden duration-700 h-[50vh] w-screen flex justify-center items-end bg-[#202123]"
                : "overflow-hidden duration-700 h-[50vh] w-screen flex justify-center items-end bg-[#202123] -translate-y-[100%]"
            }
          >
            <div className="text-[18vw] md:text-[14vw] lg:text-[10vw] font-Poppins font-black leading-none translate-y-[50%]">
              welcome
            </div>
          </div>

          <div
            className={
              !loadingAnimation
                ? "overflow-hidden duration-700 h-[50vh] w-screen flex justify-center items-start bg-[#202123]"
                : "overflow-hidden duration-700 h-[50vh] w-screen flex justify-center items-start bg-[#202123] translate-y-[100%]"
            }
          >
            <div className="text-[18vw] md:text-[14vw] lg:text-[10vw] font-Poppins font-black duration-300 leading-none -translate-y-[50%]">
              welcome
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* Section 1 */}
      <section className="section1 w-full h-screen flex items-center flex-col -gap-5 justify-center relative">
        <Bg />
        <div className="ScrollDown absolute bottom-32 md:bottom-16 ">
          <Parallax speed={6}>
            <div className="icon"></div>
          </Parallax>
        </div>
        <Parallax speed={-5} scale={[0.2, 2]}>
          <TextDipserse setBackground={false}>
            <p className="bg-black">Tanmay</p>
          </TextDipserse>
        </Parallax>
      </section>

      {/* Section 2 */}
      {/* In the Realm of Pixels and Logic */}
      <section className="section2 w-full min-h-screen flex items-center justify-center relative tracking-widest overflow-x-hidden overflow-y-hidden">
        <motion.div
          whileInView={{ opacity: 1, letterSpacing: "0px" }}
          initial={{ opacity: 0, letterSpacing: "50px" }}
          viewport={{ once: true, margin: "-35%" }}
          transition={{
            duration: 1.1,
            bounce: 0.5,
          }}
          className="text-[25vh] md:text-[27vw] lg:text-[58vh] text-white text-opacity-5 font-black absolute pointer-events-none rotate-90 md:rotate-0"
        >
          <Parallax scale={[isMobile ? 1.5 : 1, isMobile ? 1 : 1.2]}>
            ABOUT
          </Parallax>
        </motion.div>
        {/* text-2xl md:text-3xl */}
        {/* text-[5vw] md:text-[1.8vw] */}
        <div className="animated-scroll text-white text-opacity-30 font-Poppins font-normal tracking-wide text-2xl md:text-3xl w-[90%] md:w-[65%] text-center">
          {`Hey, I'm Tanmay, a developer, coder, and UI/UX enthusiast.
          I'm on a mission to blend creativity and functionality to craft
          seamless digital experiences. When I'm not coding, I'm
          grooving to the rhythms of music, finding inspiration in the harmony
          of technology and melodies.`
            .split(" ")
            .map((el, i) => {
              return (
                <span
                  key={i}
                  className="hover:text-white hover:text-opacity-80 duration-200"
                  data-cursor-color={`${
                    aestheticColors[
                      Math.floor(Math.random() * aestheticColors.length)
                    ]
                  }ad`}
                  data-cursor-size={100}
                  data-cursor-text={el}
                >
                  {el + " "}
                </span>
              );
            })}
        </div>
      </section>

      {/* Section 3 */}
      <section className="section3 w-full h-screen relative flex items-center justify-center">
        <Cardcomp />
      </section>

      {/* Section 4 */}
      <section className="section4 w-full h-screen relative flex flex-col justify-center font-sans font-semibold md:font-bold text-[9vh] md:text-[15vh]">
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

      {/* Section 4 */}
      <section className="section5 w-full h-screen flex items-center justify-center flex-col gap-20 relative text-white duration-200">
        <div className="w-[90%] absolute lg:flex hidden justify-between font-FiraCode font-semibold text-[60vh] z-0">
          <Parallax translateX={[0, -80]}>
            <span className="hover:text-opacity-80 duration-200 text-white text-opacity-10">
              {"{"}
            </span>
          </Parallax>
          <Parallax translateX={[0, 80]}>
            <span className="hover:text-opacity-80 duration-200 text-white text-opacity-10">
              {"}"}
            </span>
          </Parallax>
        </div>
        <div className="font-Poppins font-bold text-[17vw] md:text-[10vw] lg:text-[5.7vw]">
          Projects
        </div>
        <div className="projects flex flex-col gap-6 items-center justify-center font-FiraCode text-3xl max-h-[50vh] overflow-visible text-opacity-80 py-7">
          {projectdata.map((data, ind) => {
            return (
              <a
                key={ind}
                href={data.link}
                target="_blank"
                className="hover:scale-110 duration-200"
              >
                <motion.div
                  whileInView={{ translateX: 0, opacity: 1, scale: 1 }}
                  initial={
                    ind % 2 == 0
                      ? { translateX: "30px", opacity: 0, scale: 1 }
                      : { translateX: "-30px", opacity: 0, scale: 1 }
                  }
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{
                    bounce: true,
                    damping: 8,
                    duration: 0.7,
                  }}
                  className={`cursor-pointer duration-200 text-white text-opacity-60 hover:text-opacity-100 px-3`}
                  // data-cursor-magnetic
                  data-cursor-text="open"
                >{`<${data.name}/>`}</motion.div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Section 5 */}
      <section className="section6 w-full h-screen flex items-center justify-center flex-col-reverse md:flex-row gap-3 md:gap-10">
        <div className="qr relative w-[300px] aspect-square max-w-[70vw] opacity-90">
          <a
            href="https://unstoppable-tanmay.github.io/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt=""
              src={"/images/qr.png"}
              fill
              className="object-cover hover:scale-105 duration-300"
              data-cursor-text="resume"
              data-cursor-size={70}
            ></Image>
          </a>
        </div>
        <div className="font-FiraCode md:leading-loose font-medium text-lg md:text-3xl text-center md:text-left">
          Tanmay Kumar Panda <br />
          tanmaypanda752@gmail.com <br />
          <a
            target="_blank"
            data-cursor-text="visit"
            href="https://github.com/unstoppable-tanmay"
            className="text-blue-200 hover:text-blue-400 duration-200"
          >
            github
          </a>{" "}
          <a
            target="_blank"
            data-cursor-text="visit"
            href="https://www.linkedin.com/in/unstoppable-tanmay"
            className="text-blue-200 hover:text-blue-400 duration-200"
          >
            linkedin
          </a>{" "}
          <a
            target="_blank"
            data-cursor-text="visit"
            href="https://www.instagram.com/unstoppable_tanmay/"
            className="text-blue-200 hover:text-blue-400 duration-200"
          >
            instagram
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomeComp;
