import React from "react";
import Link from "next/link";
import { gitHub } from "@/data/config";

function More() {
  return (
    <p className="py-20 text-sm italic text-fun-gray">
      Hey, hey, hey... I&apos;ve got even more on{" "}
      <Link className="text-fun-pink underline" href={gitHub} target="_blank">
        my GitHub
      </Link>
      !
    </p>
  );
}

export default More;
