import { PageLayout } from "@/components/common";
import { Hero, About, Skills, Projects, Contacts } from "@/components/home";

export default function Home() {
  return (
    <PageLayout
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </PageLayout>
  );
}
