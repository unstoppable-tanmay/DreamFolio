import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      {/* Section 5 */}
      <section className="section6 w-full h-screen flex items-center justify-center flex-col-reverse md:flex-row gap-3 md:gap-10">
        <motion.div
          initial={{ translateY: 50 }}
          whileInView={{ translateY: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.9,
          }}
          className="qr relative w-[300px] aspect-square max-w-[70vw] opacity-90 overflow-hidden"
        >
          <a
            href="https://drive.google.com/file/d/1dy-zDv2TaTxOOM1U92-84GfQ1b-gt6m2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt=""
              src={"/images/qr.png"}
              fill
              className="object-cover hover:scale-105 duration-300"
              data-cursor-text="resume"
              data-cursor-size={80}
            ></Image>
          </a>
        </motion.div>
        <div className="font-FiraCode md:leading-loose font-medium text-lg md:text-3xl text-center md:text-left">
          <motion.div
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.9,
            }}
          >
            Tanmay Kumar Panda
          </motion.div>
          <motion.div
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.9,
            }}
          >
            tanmaypanda752@gmail.com
          </motion.div>
          <div className="links flex gap-5 pr-10 items-center justify-center ml-10 md:ml-0">
            <motion.a
              initial={{ translateX: 50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.9,
              }}
              target="_blank"
              data-cursor-text="visit"
              href="https://github.com/unstoppable-tanmay"
              className="text-blue-200 hover:text-blue-400 duration-200 flex-shrink-0"
            >
              github
            </motion.a>{" "}
            <motion.a
              initial={{ translateX: 50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                delay: 1.1,
                duration: 0.8,
              }}
              target="_blank"
              data-cursor-text="visit"
              href="https://www.linkedin.com/in/unstoppable-tanmay"
              className="text-blue-200 hover:text-blue-400 duration-200 flex-shrink-0"
            >
              linkedin
            </motion.a>{" "}
            <motion.a
              initial={{ translateX: 50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                delay: 1.4,
                duration: 0.7,
              }}
              target="_blank"
              data-cursor-text="visit"
              href="https://www.instagram.com/unstoppable_tanmay/"
              className="text-blue-200 hover:text-blue-400 duration-200 flex-shrink-0"
            >
              instagram
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
