"use client";

import TextDipserse from "./textdiperserhome/TextDisperse";
import React, { useEffect, useState } from "react";
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

const HomeComp = () => {
  const router = useRouter();

  return (
    <main className="main w-screen flex flex-col items-center justify-center">
      {/* Section 1 */}
      <section
        className="section1 w-full h-screen flex items-center flex-col -gap-5 justify-center relative"
        onClick={() => console.log("first")}
      >
        <Bg />
        <TextDipserse setBackground={false}>
          <p className="bg-black">Tanmay</p>
        </TextDipserse>
        {/* <div className="absolute right-6 top-6 hidden lg:flex">
          <div
            className="devbtn w-14 h-14 bg-white rounded-full flex items-center justify-center text-black font-FiraCode text-lg font-medium"
            data-cursor-color="#ffffff30"
            data-cursor-size="30px"
            onClick={() => {
              router.push("/dev");
            }}
          >
            Dev
          </div>
        </div> */}
      </section>

      {/* Section 2 */}
      {/* In the Realm of Pixels and Logic */}
      <section className="section2 w-full min-h-screen flex items-center justify-center relative tracking-widest overflow-x-hidden">
        <motion.div
          whileInView={{ opacity: 1, gap: "-10px" }}
          initial={{ opacity: 0, gap: "100px" }}
          viewport={{ once: true, margin: "-35%" }}
          transition={{
            duration: 1.1,
            bounce: 0.5,
          }}
          className="text-[20vh] md:text-[27vw] lg:text-[58vh] text-white text-opacity-5 font-black absolute pointer-events-none flex items-center justify-center flex-col md:flex-row leading-none"
        >
          <span className="translate-x-6 md:translate-x-0">A</span>
          <span className="-translate-x-12 md:translate-x-0">B</span>
          <span className="translate-x-6 md:translate-x-0">O</span>
          <span className="-translate-x-12 md:translate-x-0">U</span>
          <span className="translate-x-6 md:translate-x-0">T</span>
        </motion.div>
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
      <section className="section3 w-full h-screen relative">
        <Cardcomp />
      </section>
      <section
        className={`section4 w-full h-screen flex items-center justify-center flex-col gap-20 relative text-white duration-200`}
      >
        <motion.div
          whileInView={{ width: "90%", opacity: 1 }}
          initial={{ width: "70%", opacity: 0 }}
          viewport={{ once: true, margin: "-50%" }}
          transition={{
            delay: 0.2,
            duration: 1.1,
          }}
          className="absolute lg:flex hidden justify-between font-FiraCode font-semibold text-[60vh] z-0"
        >
          <span className="hover:text-opacity-80 duration-200 text-white text-opacity-10">
            {"{"}
          </span>
          <span className="hover:text-opacity-80 duration-200 text-white text-opacity-10">
            {"}"}
          </span>
        </motion.div>
        <div className="font-Poppins font-bold text-7xl md:text-8xl mix-blend-multiply">
          Projects
        </div>
        <div className="projects flex flex-col gap-6 items-center justify-center font-FiraCode text-3xl max-h-[50vh] overflow-y-scroll text-opacity-80 py-7">
          {projectdata.map((data, ind) => {
            return (
              <a key={ind} href={data.link} target="_blank">
                <div
                  className={`cursor-pointer duration-200 text-white text-opacity-60 hover:text-opacity-100 px-3`}
                  data-cursor-magnetic
                  data-cursor-text="open"
                >{`<${data.name}/>`}</div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Section 5 */}
      <section className="section5 w-full h-screen flex items-center justify-center flex-col-reverse md:flex-row gap-3 md:gap-10">
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
        <div className="email font-FiraCode font-medium text-lg md:text-3xl leading-[2] text-center md:text-left">
          Tanmay Kumar Panda
          <br />
          tanmaypanda752@gmail.com <br />
          <a
            target="_blank"
            data-cursor-text="visit"
            href="https://github.com/unstoppable-tanmay"
          >
            github
          </a>{" "}
          <a
            target="_blank"
            data-cursor-text="visit"
            href="https://www.linkedin.com/in/tanmay-kumar-panda-5072a6205/"
          >
            linkedin
          </a>{" "}
          <a
            target="_blank"
            data-cursor-text="visit"
            href="https://www.instagram.com/unstoppable_tanmay/"
          >
            instagram
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomeComp;

const springOpen = {
  open: {
    scale: 0,
    opacity: 0,
  },
  closed: {
    scale: 1,
    opacity: 0.25,
  },
};
