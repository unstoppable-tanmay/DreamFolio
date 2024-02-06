/* eslint-disable @next/next/no-img-element */
"use client";

import TextDipserse from "./textdiperserhome/TextDisperse";
import React, { useEffect, useRef, useState } from "react";
import Cardcomp from "./3dcard/Cardcomp";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Bg from "./Bg/Bg";
import Link from "next/link";

type projectDataType = {
  name: string;
  image: string;
  github?: string;
  link?: string;
  stack: string[];
  size: string;
  position: string;
  scale: MotionValue<number>;
  rotate?: MotionValue<number>;
};

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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const projectData: projectDataType[] = [
    {
      name: "BookHive",
      image:
        "https://github.com/unstoppable-tanmay/BookHive/blob/main/screenshots/books.jpg?raw=true",
      github: "https://github.com/unstoppable-tanmay/BookHive",
      stack: ["Flutter", "Firebase"],
      size: "w-[31vw] md:w-[20vw] h-[47.5vh] md:h-[55.5vh]",
      position: "left-[2vw] md:left-[15vw] top-[15vh] md:top-[7vh]",
      scale: useTransform(scrollYProgress, [0, 1], [1, 4]),
    },
    {
      name: "CodeSnip",
      image: "/images/projectImages/codesnip.png",
      stack: [],
      size: "w-[30vw] h-[30vh]",
      position: "left-[37.5vw] top-[3vh] md:top-[2vh]",
      scale: useTransform(scrollYProgress, [0, 1], [1, 3]),
    },
    {
      name: "GifInfinity",
      image: "/images/projectImages/gifinfinity.png",
      github: "https://github.com/unstoppable-tanmay/gifinfinity-remastered",
      stack: ["Next", "MongoDb"],
      size: "w-[26vw] md:w-[15vw] h-[20vh]",
      position: "left-[70vw] top-[12vh] md:top-[12vh]",
      scale: useTransform(scrollYProgress, [0, 1], [1, 5]),
    },
    {
      name: "Cymetics",
      image:
        "https://private-user-images.githubusercontent.com/85018447/285945023-c509aca1-5893-4216-8548-dd9b8a5d4277.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcyMTY2NTMsIm5iZiI6MTcwNzIxNjM1MywicGF0aCI6Ii84NTAxODQ0Ny8yODU5NDUwMjMtYzUwOWFjYTEtNTg5My00MjE2LTg1NDgtZGQ5YjhhNWQ0Mjc3LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA2VDEwNDU1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVhMmU1NDBlOTQwMzJlNjUzOGIxY2U3MjkxNGU0M2QyMjYwZmM1MzVlNDY2OWM0M2ZmNDk4MmFlNzM4ZjI5MWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.kANqR1qIeA1oPq8n-zJO-QghPJqt2g4qC75RN0_AnhY",
      github: "https://github.com/unstoppable-tanmay/Cymatics",
      stack: ["Flutter", "Provider"],
      size: "w-[30vw] md:w-[15vw] h-[31vh] md:h-[50vh]",
      position: "left-[67vw] md:left-[65vw] top-[36.5vh] md:top-[37vh]",
      scale: useTransform(scrollYProgress, [0, 1], [1, 8]),
    },
    {
      name: "EduCursor",
      image: "/images/projectImages/educursor.png",
      github: "https://github.com/unstoppable-tanmay/EduCursor",
      stack: ["Next", "Socket", "Node"],
      size: "w-[30vw] md:w-[18vw] h-[27vh] md:h-[20vh]",
      position: "left-[48vw] md:left-[46vw] top-[70vh] md:top-[68vh]",
      scale: useTransform(scrollYProgress, [0, 1], [1, 5]),
    },
    {
      name: "GCEKFolio",
      image: "/images/projectImages/gcekfolio.png",
      github: "https://github.com/unstoppable-tanmay/Gcekfolio",
      stack: ["Next", "Framer"],
      size: "w-[31vw] md:w-[22vw] h-[30vh]",
      position: "left-[12vw] md:left-[23vw] top-[65vh] md:top-[68vh]",
      scale: useTransform(scrollYProgress, [0, 1], [1, 7]),
    },
  ];

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const runLoading = async () => {
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
          ? `main w-screen h-screen overflow-hidden `
          : `main w-screen flex flex-col items-center justify-center home`
      }
    >
      {/* Loading */}
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
      {/* Section 1 Tanmay */}
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

      {/* Section 2 About */}
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

      {/* Section 3 My Photo */}
      <section className="section3 w-full h-screen relative flex items-center justify-center">
        <Cardcomp />
      </section>

      {/* Section 4 Skills */}
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

      {/* Section 4 Projects */}
      <section
        className="section5 w-full h-[350vh] text-white duration-200"
        ref={container}
      >
        <div className="sticky w-screen h-screen top-0 overflow-hidden flex items-center justify-center">
          {/* main zoom */}
          <motion.div
            style={{ scale: scale4 }}
            className="SuperImageContainer w-full h-full absolute"
          >
            <div className="wrapper w-full h-full relative flex items-center justify-center">
              <motion.div
                style={{
                  borderRadius: useTransform(scrollYProgress, [0, 1], [5, 0]),
                }}
                className="imgContainer w-[25vw] h-[25vh] absolute bg-white backdrop-blur-sm overflow-hidden flex items-center justify-center"
              >
                <motion.div
                  className="w-full h-full bg-white font-black relative flex flex-col items-center justify-center"
                  style={{
                    scale: useTransform(scrollYProgress, [0, 1], [4, 1]),
                  }}
                >
                  <motion.div
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [0, 0.9, 1],
                        [0, 1, 0]
                      ),
                    }}
                    className="heading absolute text-[2vw] text-center md:text-[2vw] lg:text-[1vw] font-black text-black/30"
                  >
                    Welcome To Another Dimension
                  </motion.div>
                  <motion.div
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [0, 0.99, 1],
                        [0, 0, 1]
                      ),
                    }}
                    className="heading absolute text-[2vw] text-center md:text-[2vw] lg:text-[1vw] font-black text-black/30"
                  >
                    <div className="">Let{"'"}s Colaborate</div>
                    <div className="">And Make World Beautiful</div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* projects */}
          {projectData.map((project, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale: project.scale, rotateY: project.rotate }}
                className="SuperImageContainer w-full h-full absolute"
              >
                <div className="imageWrapper w-full h-full relative">
                  <div
                    className={`imgContainer absolute overflow-hidden rounded-lg cursor-pointer hover:scale-105 duration-300 ${project.size} ${project.position}`}
                  >
                    <div className="contentWrapper w-full h-full relative">
                      <div className="tags hidden md:flex absolute top-3 right-2 gap-1">
                        {project.stack.length
                          ? project.stack.slice(0, 3).map((stack, index) => {
                              return (
                                <div
                                  key={index}
                                  className="px-2 py-0.5 bg-white/50 rounded-[50px] text-[.6rem] font-medium"
                                >
                                  {stack}
                                </div>
                              );
                            })
                          : ""}
                      </div>
                      <div className="opacityLayer w-full h-[100%] absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                      <div className="details absolute bottom-0 left-0 w-full p-3 z-20">
                        <div className="name w-full line-clamp-1">
                          {project.name}
                        </div>
                        <div className="links text-xs">
                          {project.github ? (
                            <Link
                              href={project.github!}
                              className="text-blue-400"
                            >
                              GitHub
                            </Link>
                          ) : (
                            <span className="">Private</span>
                          )}
                          {project.link && (
                            <Link
                              href={project.link!}
                              className="text-blue-400"
                            >
                              {" | "}
                              Live Link
                            </Link>
                          )}
                        </div>
                      </div>
                      <img
                        src={project.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
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
