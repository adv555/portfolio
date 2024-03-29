import React from "react";
import Head from "next/head";
import {
  Footer,
  MobileNavbar,
  Navbar,
  Social,
  Email,
} from "@/components/common";

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};

function PageLayout({
  currentPage,
  meta: { title, desc },
  children,
}: PageProps) {
  const isHome = true;
  const pageTitle = `${
    currentPage === "Home"
      ? "Portfolio - Web Developer, Designer, Creator."
      : `${currentPage} - Portfolio`
  }`;
  console.log(currentPage);
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="#" />
        {/* <meta property="og:url" content="https://braydentw.io/" /> */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="#"
          // content="https://braydentw.io/static/misc/og.png"
        />

        {/* <meta property="twitter:card" content="summary_large_image" /> */}
        {/* <meta property="twitter:url" content="https://braydentw.io/" /> */}
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
        <meta
          property="twitter:image"
          content="#"
          // content="https://braydentw.io/static/misc/og.png"
        ></meta>
      </Head>

      <main className="styledMainContainer p-5 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
      <Email isHome={isHome} />
      <Social isHome={isHome} />
      <Footer />
    </div>
  );
}

export default PageLayout;
