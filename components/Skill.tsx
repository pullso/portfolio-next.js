import React from "react";
import {motion} from "framer-motion";
import {ISkill} from "@/types/interfaces";
import {urlFor} from "@/sanity";

type Props = {
  directionLeft?: boolean,
  skill: ISkill
}
export function Skill({ directionLeft, skill }:Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{x: directionLeft ? -200: 200, opacity: 0}}
        transition={{duration: 1}}
        whileInView={{x:0, opacity: 1}}
        src={urlFor(skill?.image).url()}
        alt={skill.title + " logo"}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center text-center h-full">
          <p className="text-xl font-bold text-black opacity-100"><span>{skill.title}</span><br/>{skill?.progress}%</p>
        </div>
      </div>
    </div>
  );
}
