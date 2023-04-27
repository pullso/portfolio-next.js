import React from "react";
import {motion} from "framer-motion";
import {ExperienceCard} from "@/components/ExperienceCard";


export function WorkExperience() {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen flex relative overflow-hidden flex-col text-ltf md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">

      <h3 className="sectionName">Experience</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandantory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
