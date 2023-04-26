import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from "@/components/BackgroundCircles";

type Props = {}
const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words:[
      `Hi! I'm Pavel Dubitskii`,
      'Guy-who-loves-Coffee.tsx',
      'ButLovesToCodeMore.vue'
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor  cursorColor="#f7ab0a" />
      </h1>
    </div>
  );
};

export default Hero;
