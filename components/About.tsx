import React from 'react';
import {motion} from "framer-motion";
import {IPageInfo} from "@/types/interfaces";
import {urlFor} from "@/sanity";

type Props = {
  pageInfo: IPageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-fit min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-1 md:px-10 justify-evenly mx-auto items-center snap-start">
      <h3 className="sectionName">About</h3>
      <motion.img
        initial={{x: -200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 1.2}}
        className="-mb-20 md:mb-0 flex-shrink w-56 h-70 rounded-2xl object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[600px] xl:mt-24 mt-28 xlg:mt-0"
        src={urlFor(pageInfo?.profilePic).url()}
        alt="main photo of man"
      />

      <div className="space-y-10 px-0 md:px-10 xl:max-w-2xl mt-24 xlg:mt-0">
        <h4 className="text-2xl md:text-4xl font-semibold">Here is a <span
          className="underline decoration-mainColor/50">little</span> background</h4>
        <p className="text-base" dangerouslySetInnerHTML={{__html: pageInfo?.backgroundInfo}}></p>
      </div>
    </motion.div>
  );
};

export default About;
