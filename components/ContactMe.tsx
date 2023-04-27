import React from "react";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'


export function ContactMe() {
  return (
    <div
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="sectionName">contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-mainColor/50 underline">Let's Talk.</span>

        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-mainColor h-7 w-7 animate-pulse" />
            <p className="text-2xl">+79920105554</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-mainColor h-7 w-7 animate-pulse" />
            <p className="text-2xl">pullso.code@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-mainColor h-7 w-7 animate-pulse" />
            <p className="text-2xl">Istanbul, Turkey</p>
          </div>
        </div>
      </div>
    </div>
  );
}
