import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import bookgif from "../../../public/images/projectImages/thebook.gif";
import cyameticsgif from "../../../public/images/projectImages/cyametics.gif";

type projectDataType = {
  name: string;
  image: string | StaticImageData;
  github?: string;
  link?: string;
  stack: string[];
  size: string;
  position: string;
  scale: MotionValue<number>;
  rotate?: MotionValue<number>;
};

const Projects = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const projectData: projectDataType[] = [
    {
      name: "The Library",
      image: bookgif,
      github: "https://github.com/unstoppable-tanmay/Library",
      link: "https://the-books.netlify.app/",
      stack: ["React", "Express", "PostgreSQL"],
      size: "w-[31vw] md:w-[30vw] h-[47.5vh] md:h-[40.5vh]",
      position: "left-[2vw] md:left-[5vw] top-[15vh] md:top-[22vh]",
      scale: useTransform(scrollYProgress, [0, 1], [1, 4]),
    },
    {
      name: "CodeSnip",
      image: "/images/projectImages/codesnip.png",
      stack: ["Next", "PostgreSQL", "GraphQL"],
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
      image: cyameticsgif,
      stack: ["Flutter", "Provider"],
      size: "w-[30vw] md:w-[15vw] h-[31vh] md:h-[50vh]",
      position: "left-[67vw] md:left-[65vw] top-[36.5vh] md:top-[37vh]",
      scale: useTransform(scrollYProgress, [0, 1], [1, 8]),
    },
    {
      name: "GCEKFolio",
      image: "/images/projectImages/gcekfolio.png",
      github: "https://github.com/unstoppable-tanmay/Gcekfolio",
      stack: ["Next", "Framer"],
      size: "w-[30vw] md:w-[18vw] h-[27vh] md:h-[20vh]",
      position: "left-[48vw] md:left-[46vw] top-[70vh] md:top-[68vh]",
      scale: useTransform(scrollYProgress, [0, 1], [1, 5]),
    },
    {
      name: "EduCursor",
      image: "/images/projectImages/educursor.png",
      github: "https://github.com/unstoppable-tanmay/EduCursor",
      stack: ["Next", "Socket", "Node"],
      size: "w-[31vw] md:w-[22vw] h-[30vh]",
      position: "left-[12vw] md:left-[23vw] top-[65vh] md:top-[68vh]",
      scale: useTransform(scrollYProgress, [0, 1], [1, 7]),
    },
  ];
  return (
    <>
      {/* Section 4 Projects */}
      <section
        className="section5 w-full h-[300vh] text-white duration-200"
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
                        [0, 0.1, 1],
                        [1, 0, 0]
                      ),
                    }}
                    className="heading absolute text-[1.4vw] text-center md:text-[2vw] lg:text-[1.3vw] font-black text-black/30"
                  >
                    Projects
                  </motion.div>
                  <motion.div
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [0, 0.55, 0.95, 1],
                        [0, 1, 0, 0]
                      ),
                    }}
                    className="heading absolute text-[1vw] w-[40%] md:w-auto text-center md:text-[2vw] lg:text-[1vw] font-black text-black/30"
                  >
                    Welcome To Another Dimension
                  </motion.div>
                  <motion.div
                    style={{
                      translateY: useTransform(
                        scrollYProgress,
                        [0, 0.85, 1],
                        [-150, -150, 0]
                      ),
                    }}
                    className="heading absolute text-[1.5vw] text-center md:text-[1.3vw] lg:text-[.7vw] font-bold text-black/30 w-full h-full flex items-center justify-center gap-1 flex-col"
                  >
                    <div className="">Let{"'"}s Collaborate</div>
                    <motion.div className="profile w-[90%] md:w-[50%] h-[60%] bg-black/80 rounded-sm overflow-hidden text-white flex text-[.9vw] md:text-[.3vw] text-left font-FiraCode font-light items-center">
                      <pre
                        style={{
                          color: "#766a5b",
                        }}
                        className="p-[.9vw] overflow-scroll"
                      >
                        <span style={{ color: "#569cd6" }}>const</span>{" "}
                        <span className="text-white">Collaborate</span>{" "}
                        <span style={{ color: "#569cd6" }}>=</span>{" "}
                        <span className="text-[#ead700]">()</span>{" "}
                        <span style={{ color: "#569cd6" }}>=&gt;</span>{" "}
                        <span className="text-[#ead700]">{"{"}</span>
                        <br />
                        {"  "}
                        <span style={{ color: "#569cd6" }}>const</span>{" "}
                        <span className="text-white">increaseProductivity</span>{" "}
                        <span style={{ color: "#569cd6" }}>=</span>{" "}
                        <span style={{ color: "#9cdcfe" }}>true</span>;
                        <br />
                        {"  "}
                        <span style={{ color: "#569cd6" }}>const</span>{" "}
                        <span className="text-white">
                          buildIndianOpenSource
                        </span>{" "}
                        <span style={{ color: "#569cd6" }}>=</span>{" "}
                        <span style={{ color: "#9cdcfe" }}>true</span>;
                        <br />
                        {"  "}
                        <span style={{ color: "#569cd6" }}>const</span>{" "}
                        <span className="text-white">enhanceCommunity</span>{" "}
                        <span style={{ color: "#569cd6" }}>=</span>{" "}
                        <span style={{ color: "#9cdcfe" }}>true</span>;
                        <br />
                        {"  "}
                        <span style={{ color: "#bb86c0" }}>return</span>{" "}
                        <span className="text-[#ead700]">(</span>
                        <br />
                        {"    "}&lt;&gt;
                        <span className="text-white">
                          <br />
                          {"      "}&lt;h1&gt;🤝 Collaborative Dev&lt;/h1&gt;
                          <br />
                          {"      "}&lt;p&gt;Code together, dream together,
                          <br />
                          {"        "} build wonders forever. 💻✨&lt;/p&gt;
                          <br />
                        </span>
                        {"    "}&lt;/&gt;
                        <br />
                        {"  "} <span className="text-[#ead700]">)</span>;
                        <br />
                        <span className="text-[#ead700]">{"}"}</span>
                      </pre>
                    </motion.div>
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
                    className={`imgContainer absolute overflow-hidden rounded-lg cursor-pointer ${project.size} ${project.position}`}
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
                      <Image
                        unoptimized={true}
                        src={project.image}
                        alt=""
                        className="w-full h-full object-cover"
                        fill
                        blurDataURL="/fallback.png"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
