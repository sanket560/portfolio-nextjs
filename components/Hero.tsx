import React from "react";
import { Spotlight } from "./ui/Spotlight";
import profilepic from "../Images/pofilepic.png";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaFile } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 pt-10 md:pt-36" id="about">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="relative flex md:flex-row items-center justify-around flex-col gap-4 my-5 z-10">
        <div className="max-w-[89vw] md:max-w-3xl lg:max-w-[40vw]">
          <p className="md:tracking-wider font-bold mb-4 text-4xl md:text-5xl lg:text-5xl">
            Hi There,
          </p>
          <p className="md:tracking-wider font-bold mb-4 text-4xl md:text-5xl lg:text-5xl">
            I&apos;m Sanket Mane
          </p>
          <TextGenerateEffect
            className="uppercase tracking-widest text-xl text-blue-100 "
            words="MERN Stack developer | President - @ Revolution Software Development Club, VU | Placement Coordinator @ VU | Ex - Intern @ WESUPP | Java enthusiast | UI | Open source enthusiast | B. Tech (3rd yr) | VU'25 | JSCOE'22"
          />
        </div>
        <div className="max-w-[89vw] flex items-center md:max-w-3xl lg:max-w-[70vw]">
          <Image src={profilepic} width={400} height={400} alt="profile pic" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link href="https://drive.google.com/file/d/1bfIJo5oki7ph92EvKVV712ET13NTO3-b/view?usp=sharing">
          <MagicButton title="View Resume" icon={<FaFile />} position="left" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
