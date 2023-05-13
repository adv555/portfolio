import React from "react";

type SectionLayerProps = {
  title?: string;
  id?: string;
  children: React.ReactNode;
};

const SectionLayer = ({ title, id, children }: SectionLayerProps) => {
  return (
    <section
      id={id}
      className="container m-auto h-full md:h-screen flex flex-col relative text-left justify-around pt-8 md:px-10 overflow-none md:overflow-auto "
    >
      {title && (
        <h2 className="landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-3xl font-bold my-10 pt-4 md:pt-0 md:w-max">
          {title}
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
};

export default SectionLayer;
