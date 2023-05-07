import { Project } from "@/types";
import { kebabCase } from "@/utils/utils";

const projects: Project[] = [
  {
    id: 1,
    title: "Image Recognizer",
    desc: "Description Project 1",
    img: "/images/1.jpg",
    link: "#",
    github: "#",
    tags: [
      "Python",
      "Django",
      "Tensorflow",
      "Keras",
      "TailwindCSS",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "Personal Assistant",
    desc: "Description Project 2",
    img: "/images/2.jpeg",
    link: "#",
    tags: ["Python", "Django", "TailwindCSS", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Description Project 3",
    img: "/images/3.jpg",
    github: "#",
    tags: ["Python", "CLI"],
  },
  {
    id: 4,
    title: "Project 4",
    desc: "Description Project 4",
    img: "/images/4.jpg",
    link: "#",
    tags: ["Python", "FastApi", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Project 5",
    desc: "Description Project 5",
    img: "/images/5.jpg",
    github: "#",
    tags: ["Python", "CLI"],
  },
  {
    id: 6,
    title: "Project 6",
    desc: "Description Project 6",
    img: "/images/6.jpg",
    github: "#",
    tags: ["Python", "CLI"],
  },
  {
    id: 7,
    title: "Project 7",
    desc: "Description Project 7",
    img: "/images/7.jpg",
    github: "#",
    tags: ["Python", "CLI"],
  },
  {
    id: 8,
    title: "Project 8",
    desc: "Description Project 8",
    img: "/images/8.jpg",
    github: "#",
    tags: ["Python", "CLI"],
  },
];

const allTags: string[] = [];

projects.forEach((project: Project) => {
  project.tags.forEach((tag) => !allTags?.includes(tag) && allTags.push(tag));
});

const allKebabTags = allTags.map((tag) => kebabCase(tag));

export { projects, allTags, allKebabTags };
