import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex w-full px-10 py-10 border-t-2 border-fun-pink-darker z-5 bg-bg">
      <div className="flex justify-center items-center m-auto text-sm gap-3 text-white">
        Made with
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          alt="NextJS"
          width={30}
          height={30}
          className="invert"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="react"
          width={20}
          height={20}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          alt="heart"
          width={20}
          height={20}
        />
      </div>
    </footer>
  );
};

export default Footer;
