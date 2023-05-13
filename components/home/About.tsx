import React from "react";
import Image from "next/image";
import { SectionLayer } from "../common";
import { about } from "@/data/config";

const About = () => {
  return (
    <SectionLayer title="About Me." id="about">
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row h-full text-center ">
        <div className="flex flex-col justify-center w-full  md:w-1/2 h-full gap-5 px-10 text-justify">
          <p>{about.title}</p>
          <p>{about.description}</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 mt-5">
            {about.skills.map((skill, index) => (
              <li
                key={index}
                className="before:content-['▹'] before:mr-2 before:text-red-500"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full px-10 text-justify">
          <div className="wrapper">
            <Image
              className="img"
              src={about.ImageLink}
              alt="about"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </SectionLayer>
  );
};

export default About;
