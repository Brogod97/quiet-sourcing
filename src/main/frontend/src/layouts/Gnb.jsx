import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Gnb() {
  const [gnbList, setGnbList] = useState(initGnb);

  return (
    <div className="md:webGrid flex items-center justify-between px-4">
      <ul className="flex overflow-x-auto font-medium scrollbar-hide">
        {gnbList.map((link, index) => (
          <li
            key={index}
            className="shrink-0 hover:text-primary [&:not(:first-child)]:pl-[18px]"
          >
            <a
              href="#"
              className={`flexCenter pb-3 pb-[18px] pt-2 pt-[15px] ${link.isBold ? "font-bold" : ""}`}
            >
              {link.title === "카테고리" && (
                <FiMenu className="hidden pr-1 md:block" />
              )}
              <p className="text-[15px] text-inherit">{link.title}</p>
              {link.tag && (
                <sup className="ml-1 self-center text-[10px] leading-[15px] tracking-[-0.25px] text-green-500">
                  {link.tag}
                </sup>
              )}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <span className="cursor-pointer pr-3 text-sm font-medium underline hover:opacity-75">
          콘테스트가 궁금하신가요?
        </span>
        <button
          type="button"
          className="rounded-full bg-primary px-[22px] py-1.5 hover:opacity-85"
        >
          <span className="text-[15px] font-bold text-white">
            디자인 의뢰하기
          </span>
        </button>
      </div>
    </div>
  );
}

const initGnb = [
  { title: "카테고리", isBold: true },
  { title: "콘테스트", isBold: true, tag: "BEST" },
  { title: "디자이너 찾기", isBold: true },
  { title: "포트폴리오", isBold: false },
  { title: "고객 후기", isBold: false, tag: "4.9점" },
];
