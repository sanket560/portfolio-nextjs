import React from 'react'
import { Button } from './ui/moving-border'
import { workExperience } from '@/data'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className="md:mt-10 mt-12" id="experience">
      <div className="flex my-16 justify-center lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl md:text-2xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="w-full mt-12 flex flex-wrap justify-center items-center gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex md:w-[600px] md:h-72 lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.img}
                alt={card.img}
                className="lg:w-32 md:w-20 w-32"
              />
              <div className="lg:ms-5 space-y-2">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-base text-white-100 md:text-lg">
                  {card.company} | {card.date}
                </p>
                <p className="text-white-100 text-justify font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Experience