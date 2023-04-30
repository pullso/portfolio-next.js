import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from "@/components/BackgroundCircles";
import Link from "next/link";
import {IPageInfo} from "@/types/interfaces";
import {urlFor} from "@/sanity";

type Props = {
  pageInfo:IPageInfo
}
const Hero = ({pageInfo}: Props) => {
  const [text] = useTypewriter({
    words: [
      pageInfo?.name,
      'Guy-who-loves-Coffee.tsx',
      'ButLovesToCodeMore.vue'
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="h-fit min-h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden">
      <BackgroundCircles/>
      <img
        className="relative rounded-full flex-col space-y-8 items-center justify-center h-32 w-32"
        src={urlFor(pageInfo?.heroImage).url()} alt="my photo"/>
      <div className="z-20">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">{pageInfo?.role}</h2>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-1 md:mr-3">{text}</span>
            <Cursor cursorColor="#f7ab0a"/>
          </h1>
          <div className="pt-10 md:pt-5 flex flex-col items-center md:flex-row">
            <Link href={"#about"}>
              <button className="heroButton">About</button>
            </Link>
            <Link href={"#experience"}>
              <button className="heroButton">Experience</button>
            </Link>
            <Link href={"#skills"}>
              <button className="heroButton">Skills</button>
            </Link>
            <Link href={"#projects"}>
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
