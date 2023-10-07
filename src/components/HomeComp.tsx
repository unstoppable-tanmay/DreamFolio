"use client";

import TextDipserse from "./textdiperserhome/TextDisperse";
import React, { useEffect, useState } from "react";
import Cardcomp from "./3dcard/Cardcomp";
import { motion } from "framer-motion";

const projectdata = [
  {
    name: "The Book",
    img: "https://miro.medium.com/v2/resize:fit:6148/1*v_wrmfHaBLUxJreQF8ldmQ.jpeg",
    link: "",
  },
  {
    name: "Cymetics",
    img: "https://camo.envatousercontent.com/8577b969da9960145870f1659086972032c1cf3b/687474703a2f2f693130302e666173747069632e72752f6269672f323031372f313231342f32312f34386438666439396137626433623764386433636631643863343763386132312e6a7067",
    link: "",
  },
  {
    name: "Threads",
    img: "https://imgeng.jagran.com/images/2023/aug/meta-threads1692959377628.jpg",
    link: "",
  },
  {
    name: "FoodLab",
    img: "https://imgeng.jagran.com/images/2023/aug/meta-threads1692959377628.jpg",
    link: "",
  },
  {
    name: "GcekFolio",
    img: "https://imgeng.jagran.com/images/2023/aug/meta-threads1692959377628.jpg",
    link: "",
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
  useEffect(() => {
    window.addEventListener("deviceorientation", (event) => {
      console.log(event.alpha, event.beta, event.gamma);
    });
  });

  return (
    <main className="main w-screen relative flex flex-col">
      {/* Section 1 */}
      <section className="section1 w-full h-screen flex items-center justify-center relative">
        {/* <BlobRotate/> */}
        <TextDipserse setBackground={false}>
          <p className="bg-black">Tanmay</p>
        </TextDipserse>
      </section>

      {/* Section 2 */}
      {/* In the Realm of Pixels and Logic */}
      <section className="section2 w-full min-h-screen flex items-center justify-center relative tracking-widest overflow-x-hidden">
        <motion.div
          whileInView={{ opacity: 1, gap: "-10px" }}
          initial={{ opacity: 0, gap: "100px" }}
          viewport={{ once: true, margin: "-35%" }}
          transition={{
            delay: 0.2,
            duration: 1.1,
            bounce: 0.5,
          }}
          className="text-[20vh] md:text-[27vw] lg:text-[58vh] text-white text-opacity-5 font-black absolute pointer-events-none flex items-center justify-center flex-col md:flex-row leading-none"
        >
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
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
                  data-cursor-size={80}
                  data-cursor-text="Vibrant"
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
          className="absolute md:flex hidden justify-between font-FiraCode font-semibold text-[60vh] z-0"
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
        <div className="projects flex flex-col gap-6 items-center justify-center font-FiraCode text-3xl max-h-[50vh] overflow-y-scroll text-opacity-80">
          {projectdata.map((data, ind) => {
            return (
              <div
                className={`cursor-pointer duration-200 text-white text-opacity-60 hover:text-opacity-100 px-3`}
                key={ind}
                data-cursor-magnetic
                data-cursor-text="open"
              >{`<${data.name}/>`}</div>
            );
          })}
        </div>
      </section>

      {/* Section 5 */}
      <section className="section5 w-full h-screen flex items-center justify-center flex-col"></section>
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
