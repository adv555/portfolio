import React from "react";
import { SectionTitle } from "../common";
import { email } from "@/data/config";
import Link from "next/link";

const Contacts = () => {
  return (
    <section
      className="section text-left justify-between pt-8 md:px-10 overflow-auto "
      id="contact"
    >
      <SectionTitle title="What’s Next ?" />

      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-bold mb-10">Get In Touch</h2>

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
    </section>
  );
};

export default Contacts;
