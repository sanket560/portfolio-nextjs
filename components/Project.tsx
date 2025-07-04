import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import bg from "../Images/bg.png";
import MagicButton from "./ui/MagicButton";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";

const Project = () => {
  return (
    <div className="md:mt-10 mt-12" id="projects">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl md:text-2xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 md:gap-[48px]">
        {projects.map((project) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={project.id}
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src={bg} alt="bgimg" />
                </div>
                <Image
                  src={project.img}
                  alt="cover"
                  className="z-10 w-[350px] mt-4 rounded-lg absolute md:bottom-6"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {project.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        className="p-2 h-full w-full"
                      />
                    </div>
                  ))}
                </div>

                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <Link href="https://github.com/sanket560?tab=repositories">
          <MagicButton title="View More" icon={<FaRegEye />} position="left" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
