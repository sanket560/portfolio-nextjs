import { skillsData } from '@/data';
import { skillsImage } from '@/data/skill-image';
import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee';

const Skills = () => {
  // Split skillsData into two halves
  const half = Math.ceil(skillsData.length / 2);
  const firstHalf = skillsData.slice(0, half);
  const secondHalf = skillsData.slice(half);

  const renderSkill = (skill: string, id: number) => (
    <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
      key={id}>
      <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-6">
          <div className="h-8 sm:h-10">
            <Image
              src={skillsImage(skill)?.src}
              alt={skill}
              width={40}
              height={40}
              className="h-full w-auto rounded-lg"
            />
          </div>
          <p className="text-white text-sm sm:text-lg">
            {skill}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="md:mt-10 mt-12" id="skills">
      <div className="flex my-16 justify-center lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl md:text-2xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="w-full my-12 flex flex-col gap-8">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {firstHalf.map(renderSkill)}
        </Marquee>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {secondHalf.map(renderSkill)}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills