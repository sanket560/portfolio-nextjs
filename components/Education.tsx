import React from "react";
import { EducationCard } from "./EducationCard";
import { education } from "@/data";

const Education = () => {
  return (
    <div className="md:mt-10 mt-12" id="education">
      <div className="flex mb-16 justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl md:text-2xl rounded-md">
          Education
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      {education.map((value, index) => {
        return (
          <EducationCard
            key={index}
            course={value.course}
            collegeName={value.collegeName}
            completion={value.completion}
            img={value.img}
            marks={value.marks}
          />
        );
      })}
    </div>
  );
};

export default Education;
