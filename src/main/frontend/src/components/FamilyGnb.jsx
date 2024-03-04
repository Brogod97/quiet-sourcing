import React from "react";
import { ReactComponent as Stunning } from "../assets/stunning.svg";
import { ReactComponent as Loud } from "../assets/loud.svg";
import { ReactComponent as Notefolio } from "../assets/notefolio.svg";

export default function FamilyGnb() {
  return (
    <div className="bg-[#F9FAFC]">
      <ul className="flex">
        <li className="px-4 py-2.5 text-[#a6a6a6] hover:text-[#B7B7B7]">
          <a href="#">
            <Stunning width="22" height="14" />
          </a>
        </li>
        <li className="border-x bg-white px-4 py-[13px]">
          <a href="#">
            <Loud width="36" height="9" />
          </a>
        </li>
        <li className="px-4 py-3 text-[#a6a6a6] hover:text-[#B7B7B7]">
          <a href="#">
            <Notefolio width="54" height="10" />
          </a>
        </li>
      </ul>
    </div>
  );
}
