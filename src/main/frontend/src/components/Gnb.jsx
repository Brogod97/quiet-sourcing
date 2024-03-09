import React, { useState } from "react";

export default function Gnb() {
  const [gnbList, setGnbList] = useState(initGnb);

  return (
    <ul className="scrollbar-hide flex overflow-x-auto px-4 font-medium">
      {gnbList.map((link, index) => (
        <li key={index} className="shrink-0 [&:not(:first-child)]:pl-[18px]">
          <a
            href="#"
            className={`flex pb-3 pt-2 ${link.isBold ? "font-bold" : ""}`}
          >
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
  );
}

const initGnb = [
  { title: "카테고리", isBold: true },
  { title: "콘테스트", isBold: true, tag: "BEST" },
  { title: "디자이너 찾기", isBold: true, tag: "NEW" },
  { title: "포트폴리오", isBold: false },
  { title: "고객 후기", isBold: false, tag: "4.9점" },
];
