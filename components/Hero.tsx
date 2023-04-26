import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from "@/components/BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

type Props = {}
const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi! I'm Pavel Dubitskii`,
      'Guy-who-loves-Coffee.tsx',
      'ButLovesToCodeMore.vue'
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden">
      <BackgroundCircles/>
      <Image width={128} height={128}
        className="relative rounded-full flex-col space-y-8 items-center justify-center"
        src="/main%20photo.jpg" alt="my photo"/>
      <div className="z-20">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Frontend Developer</h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#f7ab0a"/>
          </h1>
          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
