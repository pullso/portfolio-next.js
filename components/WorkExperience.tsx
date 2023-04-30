import React from "react";
import {motion} from "framer-motion";
import {ExperienceCard} from "@/components/ExperienceCard";
import {IExperience} from "@/types/interfaces";

type Props = {
  experiences: IExperience[]
}

export function WorkExperience({experiences}:Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-fit min-h-screen flex relative overflow-hidden flex-col text-ltf md:flex-row max-w-full px-10 justify-evenly mx-auto items-center snap-start">

      <h3 className="sectionName">Experience</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandantory myScrollbar scrollbar-thin mt-24 xlg:mt-0">
        {experiences && experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience._id} />
        ))}
      </div>
    </motion.div>
  );
}
