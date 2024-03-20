import React from "react";
import { IoChevronForward } from "react-icons/io5";

export default function MoreBtn({ link }) {
  return (
    <a href={link} className="md:flexCenter group hidden cursor-pointer">
      <span className="text-xs font-bold hover:text-black group-hover:opacity-40 ">
        더보기
      </span>
      <IoChevronForward className="ml-1 text-gray-400" />
    </a>
  );
}
