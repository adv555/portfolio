import React from "react";
import { SectionTitle } from "../common";
import Image from "next/image";

const about = {
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odio est perspiciatis molestias sit! Sed doloremque deserunt nonofficiis rerum, repudiandae incidunt, vero unde suscipit autem hicanimi qui consectetur!",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odio est perspiciatis molestias sit! Sed doloremque deserunt nonofficiis rerum, repudiandae incidunt, vero unde suscipit autem hicanimi qui consectetur!",
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
  ],
  ImageLink:
    "https://res.cloudinary.com/myfinance/image/upload/v1680388105/media/Users/xxx/8_nh46zh.webp",
};

const About = () => {
  return (
    <section
      id="about"
      className="section text-left justify-between pt-8 md:px-10 overflow-auto "
    >
      <SectionTitle title="About Me." />
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row h-full text-center ">
        <div className="flex flex-col justify-center w-full  md:w-1/2 h-full gap-5 px-10 text-justify">
          <p className="">{about.title}</p>
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
    </section>
  );
};

export default About;
