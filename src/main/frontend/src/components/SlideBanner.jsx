import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideBanner() {
  const [banners, setBanners] = useState(initBanner);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
    // nextArrow : "<button type='button' class='slick-next'>Next</button>",
    // responsive : []
  };
  return (
    <Slider {...settings}>
      {banners.map((banner) => (
        <div className={`relative ${"bg-[" + banner.backgroundColor + "]"}`}>
          <div>
            <img src={banner.mobileImage} />
          </div>
          <div
            className={`absolute bottom-6 left-4 flex flex-col ${banner.isColorBlack ? "text-black" : "text-white"}`}
          >
            <span className="mb-2 text-sm opacity-70">
              {banner.webSubTitle}
            </span>
            {banner.webTitle.split("<br/>").map((line, index) => (
              <span
                key={index}
                className="text-[22px] font-bold"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </div>
        </div>
      ))}
    </Slider>
  );
}

const initBanner = [
  {
    webTitle: "콘테스트 개최를 <br/> 라우드 매니저가 도와드려요",
    webSubTitle: "개최부터 심사, 운영, 계약까지 꼼꼼하게",
    buttonPrimary: "98.7%가 만족한 이유 더보기",
    webImage:
      "https://cdn-dantats.stunning.kr/prod/banner/031d79fc-a5ad-44f4-88a8-5c55f167d4a2/webimage/ZbaByrQA338LNFkE._item_ContentBoard_Banner.png.small?t=crop&q=100&s=1160x640",
    mobileImage:
      "https://cdn-dantats.stunning.kr/prod/banner/d540aa26-40ce-4d1c-bfba-8f315491c4f6/mobileimage/gLtAcjDcDpYm95QC.Frame%204827843.png.small?t=crop&q=100&s=750x480",
    backgroundColor: "#1A9A61",
    isColorBlack: false,
  },
  {
    webTitle: "총 52만 원의 역대급 지원금, <br/> 늦기 전에 받아가세요!",
    webSubTitle: "디자인 의뢰 비용이 고민이라면?",
    buttonPrimary: "52만원 혜택 확인하기",
    webImage:
      "https://cdn-dantats.stunning.kr/prod/banner/d540aa26-40ce-4d1c-bfba-8f315491c4f6/webimage/ak7pLuuyNA2Fn4GJ.%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png.small?t=crop&q=100&s=1160x640",
    mobileImage:
      "https://cdn-dantats.stunning.kr/prod/banner/d540aa26-40ce-4d1c-bfba-8f315491c4f6/mobileimage/MQhPqMjSwWW9tRqQ.%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_MO_2.png.small?t=crop&q=100&s=750x480",
    backgroundColor: "#111111",
    isColorBlack: false,
  },
  {
    webTitle: "유명 기업은 물론 프랜차이즈도 <br/> 만족한 디자인, 35만 원부터",
    webSubTitle: "누적 거래 4만 건 이상! 이 로고도 라우드에서?",
    buttonPrimary: "52만원 혜택 확인하기",
    webImage:
      "https://cdn-dantats.stunning.kr/prod/banner/f92b9316-149f-4824-8c05-bf2155dce0e5/webimage/75ED4avzjpBN8ZF9.pc3.webp.small?t=crop&q=100&s=1160x640",
    mobileImage:
      "https://cdn-dantats.stunning.kr/prod/banner/8fcbc30d-7065-4578-a0d0-488a1545c408/mobileimage/WpSiaeVnYvSHzUkN.2517%20MO.png.small?t=crop&q=100&s=750x480",
    backgroundColor: "#E8EFFF",
    isColorBlack: true,
  },
  {
    webTitle: "시안 확인하고 너무 기뻤어요 <br/> 제가 원하던 그 자체였거든요!",
    webSubTitle: "경험한 고객님의 100% 리얼 리뷰",
    buttonPrimary: "52만원 혜택 확인하기",
    webImage:
      "https://cdn-dantats.stunning.kr/prod/banner/8fcbc30d-7065-4578-a0d0-488a1545c408/webimage/ZvUvcSXBVVuL4Fci.pc6.png.small?t=crop&q=100&s=1160x640",
    mobileImage:
      "https://cdn-dantats.stunning.kr/prod/banner/581ded99-e3bb-45ab-ab0b-4f9b223a57fb/mobileimage/JzPp4L9HqgbX9JbV.Frame%204827847.png.small?t=crop&q=100&s=750x480",
    backgroundColor: "#EEE2D5",
    isColorBlack: true,
  },
  {
    webTitle: "이 로고도 라우드소싱에서? <br/> 식당/카페 컬렉션",
    webSubTitle: "누구나 연매출 100억 기업처럼",
    buttonPrimary: "52만원 혜택 확인하기",
    webImage: "",
    mobileImage:
      "https://cdn-dantats.stunning.kr/prod/banner/581ded99-e3bb-45ab-ab0b-4f9b223a57fb/mobileimage/VCa3z4it8M5MBtR4.mo2.png.small?t=crop&q=100&s=750x480",
    backgroundColor: "#2656F6",
    isColorBlack: false,
  },
];
