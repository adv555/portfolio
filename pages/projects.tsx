import React from "react";
import Page from "@/components/utility/Page";
import Heading from "@/components/projects/Heading";
import Projects from "@/components/projects/Projects";
import More from "@/components/projects/More";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: "Projects",
        desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
      }}
    >
      <Heading />
      <Projects />
      {/* <More /> */}
    </Page>
  );
}

export default projects;
