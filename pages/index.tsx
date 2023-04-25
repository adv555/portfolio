// import CTA from "@/components/home/CTA";

import Page from "@/components/utility/Page";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { Social, Email } from "@/components/common";
import styled from "styled-components";

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
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Home() {
  const isHome = true;

  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <StyledContent>
        <Hero />
        <div className="mt-20 space-y-32">
          <Projects />
        </div>
        <Email isHome={isHome} />
        <Social isHome={isHome} />
      </StyledContent>
    </Page>
  );
}
