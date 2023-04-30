import React from "react";
import {motion} from "framer-motion";
import {IExperience} from "@/types/interfaces";
import { urlFor} from "@/sanity";

type Props = {
  experience: IExperience
}
export function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y-1 md:space-y-7 flex-shrink-0  w-screen md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 cursor-pointer hover:opacity-100 md:opacity-50 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{y:-100, opacity:0}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 1.2}}
        viewport={{once: true}}
        src={urlFor(experience?.companyImg)?.url()} alt="company logo"
        className="w-28 h-28 md:w-32 md:h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-3 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold  text-xl md:text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((technology,) => (
            <img
              key={technology._id}
              src={urlFor(technology?.image)?.url()}
              alt={technology?.title}
              className="h-10 w-10 rounded"
            />)
          )}

        </div>
        <p className="uppercase py-5 text-gray-300">{new Date(experience?.dateStarted).toDateString()} - {experience.isWorkingHere ? "Present" : experience?.dateEnded && new Date(experience?.dateEnded).toDateString()}</p>
        <ul className="list-disc space-y-4 ml-5 md:text-xl">
          {experience?.points.map((point,idx) => (
            <li key={idx}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
