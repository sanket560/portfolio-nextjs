"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function EducationCard({
  collegeName,
  course,
  completion,
  img,
}: {
  collegeName: String;
  course: String;
  completion: String;
  img: any;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 w-[21rem] md:w-[1200px] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] flex flex-col md:flex-row items-center dark:bg-black-100 gap-5 dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-60 mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {course}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {collegeName}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {completion}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
