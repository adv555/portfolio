// import CTA from "@/components/home/CTA";

import Page from "@/components/utility/Page";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
// import Skills from "@/components/home/Skills";
// import Posts from "@/components/home/Posts";
// import Testimonials from "@/components/home/Testimonials";
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        {/* <Skills /> */}
        {/* <Testimonials /> */}
        {/* <Posts allPosts={allPosts} /> */}
      </div>
      {/* <CTA /> */}
    </Page>
  );
}
