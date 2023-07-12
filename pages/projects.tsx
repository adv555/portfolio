import React from "react";
import { PageLayout } from "@/components/common";
import { Heading, Projects, More } from "@/components/projects";

function projects() {
  return (
    <PageLayout
      currentPage="Projects"
      meta={{
        title: "Projects",
        desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
      }}
    >
      <Heading />
      <Projects />
      <More />
    </PageLayout>
  );
}

export default projects;
