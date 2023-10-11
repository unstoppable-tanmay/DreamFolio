"use client";

import HomeComp from "@/components/HomeComp";
import useLocoScroll from "@/components/Locomotive/LocomotiveScroll";
import React from "react";
import { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { useRouter } from "next/navigation";
import Gyroscope from "@/components/Gyroscope/Gyroscope";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    setLoading(false);
  }, [loading]);

  const lenis = useLenis(({ scroll }) => {
    // console.log(scroll);
  });

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(
      window.matchMedia("only screen and (min-width: 1000px)").matches
    );
  }, [isMobile]);

  // function playTone(frequency: number, duration: number): void {
  //   const audioContext = new window.AudioContext();
  //   const oscillator = audioContext.createOscillator();

  //   oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  //   oscillator.connect(audioContext.destination);
  //   oscillator.start();

  //   // Stop the oscillator after the specified duration (in milliseconds)
  //   setTimeout(() => {
  //     oscillator.stop();
  //   }, duration);
  // }
  // function getRandomElementFromArray<T>(array: T[]): T | number {
  //   const randomIndex = Math.floor(Math.random() * array.length);
  //   return array[randomIndex];
  // }

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex flex-col font-FiraCode items-center justify-center overflow-hidden">
          <div className="wrapper relative w-[300px] aspect-square">
            <Image
              alt=""
              src={"/images/loader.gif"}
              fill
              className="object-cover mix-blend-screen"
            ></Image>
          </div>
          Loading . . .
        </div>
      ) : (
        <>
          {isMobile ? (
            <Cursor
              isGelly={true}
              cursorBackgrounColor="#fff"
              cursorSize={60}
              exclusionBackgroundColor="#000"
              cursorInnerColor="#000"
              colorAnimationDuration={0.5}
            />
          ) : (
            <Gyroscope />
          )}
          <ParallaxProvider>
            <ReactLenis
              root
              options={{
                lerp: isMobile ? 0.05 : 0.06,
                syncTouch: true,
                smoothTouch: true,
              }}
            >
              <HomeComp isMobile={isMobile} />
            </ReactLenis>
          </ParallaxProvider>
        </>
      )}
    </>
  );
}
