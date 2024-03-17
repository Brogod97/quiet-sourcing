import SectionTitle from "../SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useEffect, useState } from "react";
import GhostBtn from "../ui/button/GhostBtn";
import Divider from "../ui/Divider";
import { NextBtn, PrevBtn } from "./Arrows";

export default function ContestSlider() {
  const [contestList, setContestList] = useState([]);

  useEffect(() => {
    axios
      .get(`/data/contestDummy.json`)
      .then((res) => setContestList(res.data));
  }, []);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesToShow: 2,
          touchMove: false,
          arrows: false,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <>
      <div
        id="contest-slider"
        className="md:webGrid pl-4 pr-2 pt-12 md:px-20 md:py-16"
      >
        <SectionTitle title={`라우드 콘테스트 \n 200% 활용법`} link="#" />

        <Slider
          {...settings}
          className="relative overflow-hidden md:overflow-visible"
        >
          {contestList.map((contest) => (
            // TODO: a태그 링크 삽입 (id)
            <a
              href="#"
              className="w-[calc(50% - 4px)] group mb-8 shrink-0 cursor-pointer pr-2 hover:opacity-80 md:mb-0 md:px-3"
            >
              <div className="border-gr relative overflow-hidden rounded border">
                <img
                  src={contest.thumbnail}
                  className=" w-full rounded duration-500 hover:scale-110"
                />
                <div className="absolute left-2 top-2 hidden  rounded-sm border bg-white px-2 py-0.5 text-[10px] font-medium text-gray-500 group-hover:inline-block">
                  콘테스트
                </div>
              </div>
              <p className="mb-1 mt-2 text-sm font-medium md:text-base">
                {contest.contestTitle}
              </p>
              <div className="flexStart md:mt-1">
                {contest.tags.map((tag) => (
                  <p className="text-xs text-gray-500 [&:not(:last-child)]:mr-1">
                    {tag}
                  </p>
                ))}
              </div>
            </a>
          ))}
        </Slider>

        <GhostBtn text="콘테스트 더보기" />
      </div>

      <Divider />
    </>
  );
}
