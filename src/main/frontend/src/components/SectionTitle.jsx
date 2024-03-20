import React from "react";
import MoreBtn from "./button/MoreBtn";

export default function SectionTitle({ title, link }) {
  return (
    <div className="flexCenter mb-5 md:mb-4 md:justify-between">
      <h1 className="whitespace-pre-line text-center text-xl font-bold md:whitespace-normal md:text-[22px]">
        {title}
      </h1>

      {link && <MoreBtn link={link} />}
    </div>
  );
}
