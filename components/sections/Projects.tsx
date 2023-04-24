import React from "react";
import Link from "next/link";
import { SectionTitle, ProjectCard } from "../common";
import projects from "@/data/projects";

const Projects = () => {
  return (
    <section className="container h-screen flex flex-col text-left justify-between pt-8 relative">
      <div id="projects">
        <SectionTitle title="Some Things I’ve Built." />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.slice(0, 3).map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="mb-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer ">
            View All
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
