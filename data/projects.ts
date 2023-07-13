import { Project } from "@/types";
import { kebabCase } from "@/utils/utils";

const projects: Project[] = [
  {
    id: 1,
    title: "Image Classifier",
    desc: "classification service for images using CNN model trained with CIFAR-10.",
    img: "/images/1.jpg",
    github: "https://github.com/adv555/image_classifier_app",
    tags: [
      "Python",
      "Django",
      "Tensorflow",
      "Keras",
      "TailwindCSS",
    ],
  },
  {
    id: 2,
    title: "Personal Assistant",
    desc: "Web application, offers users a convenient way to store contact information, add notes, organize their gallery, and stay updated with the latest news. ",
    img: "/images/2.jpg",
    github: "https://github.com/adv555/Personal-Assistant-WEB",
    tags: ["Python", "Django", "TailwindCSS", "PostgreSQL"],
  },
  {
    id: 3,
    title: "AI Chat",
    desc: "AI Chat in ReactJS by using OpenAI api (GPT-3.5, DALL-E)",
    img: "/images/gpt.png",
    link: "https://gptchat-clone.vercel.app/",
    github: "https://github.com/adv555/gptchat-clone",
    tags: ["React", "TailwindCSS", "NodeJs", "auth0", "OpenAI","Redis"],
  },
  {
    id: 4,
    title: "Filmoteka",
    desc: "The Movies Search App is a user-friendly application that allows users to effortlessly search and explore a vast collection of movies",
    img: "/images/filmoteka.jpg",
    link: "https://adv555.github.io/Filmoteka/",
    github: "https://github.com/adv555/Filmoteka",
    tags: ["JavaScript", "Parcel", "SASS"],
  },
  {
    id: 5,
    title: "Phonebook",
    desc: "The Web Application for User's Contacts with a Small Santa Game Inside",
    img: "/images/phonebook.jpg",
    link: "https://adv555-phonebook-app.netlify.app/",
    github: "https://github.com/adv555/goit-react-hw-08-phonebook",
    tags: ["React", "Redux", "SASS"],
  },
  {
    id: 6,
    title: "IceCream Landing",
    desc: "Website with responsible layout for Ice Cream shop",
    img: "/images/ice-cream.jpg",
    link: "https://anastasiia-kisil.github.io/best-icecream/",
    github: "https://github.com/adv555/best-icecream-project",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Project MyFinance",
    desc: "This App is your personal financial companion, designed to help you effortlessly manage your finances and achieve your financial goals.",
    img: "/images/myFinance.jpg",
    github: "https://github.com/adv555/personal-assets-management-app",
    tags: ["React", "Redux", "NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    id: 8,
    title: "Project BeHealthy",
    desc: "Is a web-based application created to enhance patient-doctor interactions and improve overall healthcare experiences.",
    img: "/images/behealthy.jpg",
    github: "https://github.com/adv555/internship-2022-behealthy-main",
    tags: ["React", "Redux", "NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    id: 9,
    title: "Project Homevest",
    desc: "Project Homevest is an innovative application designed to simplify and streamline real estate investments. ",
    img: "/images/homevest.jpg",
    github: "https://github.com/adv555/homevest-app-internship",
    tags: ["React", "Redux", "NodeJS", "TypeScript", "PostgreSQL"],
  },
  {
    id: 10,
    title: "MYBIKE landing",
    desc: "MYBIKE Landing is a captivating and user-friendly website designed to showcase and promote the MYBIKE brand.",
    img: "/images/myByke.jpg",
    link: "https://adv555.github.io/layout_landing-page/",
    github: "https://github.com/adv555/homevest-app-internship",
    tags: ["HTML", "SASS"],
  },
];

const allTags: string[] = [];

projects.forEach((project: Project) => {
  project.tags.forEach((tag) => !allTags?.includes(tag) && allTags.push(tag));
});

const allKebabTags = allTags.map((tag) => kebabCase(tag));

export { projects, allTags, allKebabTags };
