import React from "react";
import Link from "next/link";
import { navLinks, siteName } from "@/data/config";
import Image from "next/image";
import { resume } from "@/data/config";

type NavbarProps = {
  currentPage: string;
};

function Navbar({ currentPage }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between">
      <div className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <Image
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/logos/logo_no_text.svg"
              width={60}
              height={60}
              alt="logo"
            />
            {siteName.split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center space-x-10">
          {navLinks.map((item, index) => {
            return (
              <li
                key={index}
                className={`list-none text-white ${
                  currentPage === item.title
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-100 transition-opacity"
                }`}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Link
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-10 border border-fun-pink text-center w-full px-6 py-2 rounded-lg text-fun-pink hover:bg-fun-pink hover:text-white transition-colors cursor-pointer "
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
