import React from "react";
import { SectionLayer } from "../common";
import { skills } from "@/data/skills";
import Image from "next/image";

const Skills = () => {
  return (
    <SectionLayer title="Here is my toolbelt for success." id="skills">
      <div className="h-screen flex justify-center items-center">
        <div className="relative  w-full mx-auto md:mx-none grid gap-x-8 gap-y-8 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center justify-evenly">
          {skills.map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="w-12 mx-auto flex items-center flex-col justify-center"
              >
                <Image
                  src={item.icon}
                  style={item.style}
                  alt={item.title}
                  width={80}
                  height={80}
                />
                <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionLayer>
  );
};

export default Skills;
