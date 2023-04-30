import React from "react";
import {motion} from "framer-motion";
import {Skill} from "@/components/Skill";
import {ISkill} from "@/types/interfaces";


interface SkillsProps {
  skills: ISkill[]
}

export function Skills({skills}: SkillsProps) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-fit flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >

      <h3 className="sectionName">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for currently proficiency:</h3>
      <div className="grid grid-cols-3 md:grid-cols-4  gap-2 md:gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
      </div>
    </motion.div>);
}
