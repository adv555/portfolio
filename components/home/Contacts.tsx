import React from "react";
import { SectionLayer } from "../common";
import { email } from "@/data/config";
import Link from "next/link";

const Contacts = () => {
  return (
    <SectionLayer title="What’s Next ?" id="contact">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="hidden md:block text-3xl font-bold mb-10">
          Get In Touch
        </h2>

        <p className="text-center text-xl text-fun-pink mb-10">
          You have a question or just want to say hi, I’ll try my best to get
          back to you!
        </p>

        <Link
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
          href={`mailto:${email}`}
        >
          Say Hello
        </Link>
      </div>
    </SectionLayer>
  );
};

export default Contacts;
