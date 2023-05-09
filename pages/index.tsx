import Page from "@/components/utility/Page";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import styled from "styled-components";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Contacts from "@/components/home/Contacts";
import { Social, Email } from "@/components/common";

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
      {/* <StyledContent> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      {/* <Email isHome={isHome} /> */}
      {/* <Social isHome={isHome} /> */}
      {/* </StyledContent> */}
    </Page>
  );
}
