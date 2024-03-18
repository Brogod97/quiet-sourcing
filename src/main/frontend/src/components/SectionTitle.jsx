import React from "react";
import { IoChevronForward } from "react-icons/io5";

export default function SectionTitle({ title, link }) {
  return (
    <div className="flexCenter mb-5 md:mb-4 md:justify-between">
      <h1 className="whitespace-pre-line text-center text-xl font-bold md:whitespace-normal md:text-[22px]">
        {title}
      </h1>

      {link && (
        <a href={link} className="md:flexCenter group hidden cursor-pointer">
          <span className="text-xs font-bold hover:text-black group-hover:opacity-40 ">
            더보기
          </span>
          <IoChevronForward className="ml-1 text-gray-400" />
        </a>
      )}
    </div>
  );
}
