import React from "react";
import { IoChevronForward } from "react-icons/io5";

export default function GhostBtn({ text }) {
  return (
    // TODO: 링크 연결
    <a
      href="#"
      type="button"
      className="flexCenter w-full rounded border px-[17px] py-4 hover:opacity-70 md:hidden"
    >
      <span className="text-sm font-medium leading-4">{text}</span>
      <IoChevronForward className="ml-1 text-sm" />
    </a>
  );
}
