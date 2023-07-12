import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <section className="container m-auto h-screen flex flex-col relative text-center heroElem justify-center items-center pt-20 pb-40 z-1">
      <p className="text-xl mb-5">
        Hey, my name is Helen
        <span className="wave ml-3">👋</span>
      </p>
      <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
        I enjoy <span className="heroShiny1 text-fun-pink">building</span>{" "}
        things <span className="heroShiny1 text-fun-pink">for the web.</span>
      </h1>
      <ScrollLink
        activeClass="active"
        to="projects"
        spy={true}
        offset={-30}
        smooth={true}
        duration={500}
      >
        <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
          Tell me more
        </div>
      </ScrollLink>
    </section>
  );
}

export default Hero;
