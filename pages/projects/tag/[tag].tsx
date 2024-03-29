import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/common";
import { projects, allKebabTags, allTags } from "@/data/projects";
import { kebabCase, kebabArray } from "@/utils/utils";
import Projects from "@/components/projects/Projects";
import Heading from "@/components/projects/Heading";
import More from "@/components/projects/More";

type PostPageProps = {
  filteredProjects: any;
  tag: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags: string[] = [];
  projects.forEach((project) =>
    project.tags.forEach((tag) => {
      allTags.push(tag);
    })
  );

  const uniqueAllTags = allTags.filter(
    (tag, index) => allTags.indexOf(tag) === index
  );
  const allTagsPaths = uniqueAllTags.map((path) => ({
    params: { tag: `${kebabCase(path)}` },
  }));
  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { tag: string };
}) => {
  const tag = params.tag;
  const filteredProjects = projects.filter((project) =>
    [...kebabArray(project.tags)].includes(tag)
  );
  return {
    props: JSON.parse(
      JSON.stringify({
        filteredProjects,
        tag: tag,
      })
    ),
  };
};

function PostPage({ filteredProjects, tag }: PostPageProps) {
  const capsTag = allTags[allKebabTags.indexOf(tag)];
  return (
    <PageLayout
      currentPage="Projects"
      meta={{
        title: `${capsTag} Projects`,
        desc: `A showcase for all of my ${capsTag} projects.`,
      }}
    >
      <Heading tag={capsTag} />
      <Projects overwriteProjects={filteredProjects} />

      <Link href="/projects">
        <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
          View All
        </div>
      </Link>
      <More />
    </PageLayout>
  );
}

export default PostPage;
