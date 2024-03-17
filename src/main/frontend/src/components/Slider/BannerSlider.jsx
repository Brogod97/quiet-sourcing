import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronForward } from "react-icons/io5";
import { PrevBtn, NextBtn } from "./Arrows";

// TODO: hover 시 주변 요소에 대한 이벤트 적용 (JavaScript Event Handle)

export default function BannerSlider() {
  const [banners, setBanners] = useState(initBanner);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    autoplay: true,
    arrows: true,
    prevArrow: <PrevBtn type="banner" />,
    nextArrow: <NextBtn type="banner" />,
    // responsive : [] // md부턴 드래그 막기
  };
  return (
    <Slider
      {...settings}
      className=" md:webGrid overflow-hidden md:max-w-full md:p-0"
    >
      {banners.map((banner) => (
        <div
          className={`relative cursor-pointer md:h-[345px] ${banner.backgroundColor}`}
        >
          <div
            id="banner-wrapper"
            className="relative md:mx-auto md:flex md:h-full md:w-full md:max-w-[1440px] md:flex-row-reverse md:items-center md:justify-between md:px-20"
          >
            {/* FIXME: img 태그에 hidden 적용 되지 않아 일단 분리 상태로 진행 */}
            <div id="banner-image">
              <div className="md:hidden">
                <img src={banner.mobileImage} />
              </div>
              <div className="hidden md:block">
                <img className="h-[320px] w-[580px]" src={banner.webImage} />
              </div>
            </div>
            <div
              id="banner-text"
              className={`absolute bottom-6 left-4 flex flex-col items-start ${banner.isColorBlack ? "text-black" : "text-white"} md:static`}
            >
              {/* FIXME: split으로 분리하는 방식 -> whitespace-line으로 수정 검토 */}
              <span className="mb-2 text-sm opacity-70 md:mb-6 md:text-base">
                {banner.webSubTitle}
              </span>
              {banner.webTitle.split("<br/>").map((line, index) => (
                <span
                  key={index}
                  className="text-[22px] font-bold md:text-[32px]"
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
              <button
                type="button"
                className="md:flexCenter hidden md:mt-6 md:text-sm md:font-bold"
              >
                {banner.buttonText}
                <IoChevronForward className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

// TODO: useEffect 로 분리
const initBanner = [
  {
    webTitle: "콘테스트 개최를 <br/> 라우드 매니저가 도와드려요",
    webSubTitle: "개최부터 심사, 운영, 계약까지 꼼꼼하게",
    buttonText: "98.7%가 만족한 이유 더보기",
    webImage:
      "https://cdn-dantats.stunning.kr/prod/banner/031d79fc-a5ad-44f4-88a8-5c55f167d4a2/webimage/ZbaByrQA338LNFkE._item_ContentBoard_Banner.png.small?t=crop&q=100&s=1160x640",
    mobileImage:
      "https://cdn-dantats.stunning.kr/prod/banner/d540aa26-40ce-4d1c-bfba-8f315491c4f6/mobileimage/gLtAcjDcDpYm95QC.Frame%204827843.png.small?t=crop&q=100&s=750x480",
    backgroundColor: "bg-[#1A9A61]",
    isColorBlack: false,
  },
  {
    webTitle: "총 52만 원의 역대급 지원금, <br/> 늦기 전에 받아가세요!",
    webSubTitle: "디자인 의뢰 비용이 고민이라면?",
    buttonText: "52만원 혜택 확인하기",
    webImage:
      "https://cdn-dantats.stunning.kr/prod/banner/d540aa26-40ce-4d1c-bfba-8f315491c4f6/webimage/ak7pLuuyNA2Fn4GJ.%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png.small?t=crop&q=100&s=1160x640",
    mobileImage:
      "https://cdn-dantats.stunning.kr/prod/banner/d540aa26-40ce-4d1c-bfba-8f315491c4f6/mobileimage/MQhPqMjSwWW9tRqQ.%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_MO_2.png.small?t=crop&q=100&s=750x480",
    backgroundColor: "bg-[#111111]",
    isColorBlack: false,
  },
  {
    webTitle: "유명 기업은 물론 프랜차이즈도 <br/> 만족한 디자인, 35만 원부터",
    webSubTitle: "누적 거래 4만 건 이상! 이 로고도 라우드에서?",
    buttonText: "52만원 혜택 확인하기",
    webImage:
      "https://cdn-dantats.stunning.kr/prod/banner/8fcbc30d-7065-4578-a0d0-488a1545c408/webimage/ZvUvcSXBVVuL4Fci.pc6.png.small?t=crop&q=100&s=1160x640",
    mobileImage:
      "https://cdn-dantats.stunning.kr/prod/banner/8fcbc30d-7065-4578-a0d0-488a1545c408/mobileimage/WpSiaeVnYvSHzUkN.2517%20MO.png.small?t=crop&q=100&s=750x480",
    backgroundColor: "bg-[#E8EFFF]",
    isColorBlack: true,
  },
  {
    webTitle: "시안 확인하고 너무 기뻤어요 <br/> 제가 원하던 그 자체였거든요!",
    webSubTitle: "경험한 고객님의 100% 리얼 리뷰",
    buttonText: "52만원 혜택 확인하기",
    webImage:
      "https://cdn-dantats.stunning.kr/prod/banner/581ded99-e3bb-45ab-ab0b-4f9b223a57fb/webimage/RR6yiyNrdqgrhTsu.pc4.png.small?t=crop&q=100&s=1160x640",
    mobileImage:
      "https://cdn-dantats.stunning.kr/prod/banner/581ded99-e3bb-45ab-ab0b-4f9b223a57fb/mobileimage/JzPp4L9HqgbX9JbV.Frame%204827847.png.small?t=crop&q=100&s=750x480",
    backgroundColor: "bg-[#EEE2D5]",
    isColorBlack: true,
  },
  {
    webTitle: "이 로고도 라우드소싱에서? <br/> 식당/카페 컬렉션",
    webSubTitle: "누구나 연매출 100억 기업처럼",
    buttonText: "52만원 혜택 확인하기",
    webImage:
      "https://cdn-dantats.stunning.kr/prod/banner/581ded99-e3bb-45ab-ab0b-4f9b223a57fb/webimage/dkB3wwjHFDyuu4TP.banner.png.small?t=crop&q=100&s=1160x640",
    mobileImage:
      "https://cdn-dantats.stunning.kr/prod/banner/581ded99-e3bb-45ab-ab0b-4f9b223a57fb/mobileimage/VCa3z4it8M5MBtR4.mo2.png.small?t=crop&q=100&s=750x480",
    backgroundColor: "bg-[#2656F6]",
    isColorBlack: false,
  },
];
