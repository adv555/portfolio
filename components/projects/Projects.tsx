import React from "react";
import { ProjectCard } from "@/components/common";
import { projects } from "@/data/projects";
import { Project } from "@/types";

type ProjectProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects ? overwriteProjects : projects;
  return (
    <section className="container m-auto text-left justify-between pt-8 md:px-10 overflow-auto ">
      <div className="h-ful px-5 pb-20 grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
        {projectsList.map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
