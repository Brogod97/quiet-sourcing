import React from "react";
import { ReactComponent as Hamburger } from "../assets/hamburger.svg";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="md:webGrid my-2 ml-3 mr-[17px] md:m-0 md:mx-auto md:flex md:h-14 md:items-center md:justify-between ">
      <div className="flex justify-between md:h-full md:items-center md:justify-start">
        <div className="flexCenter">
          <button
            type="button"
            className="flexCenter mr-1 h-10 w-[38px] md:hidden"
          >
            <Hamburger width={24} height={24} />
          </button>
          <div
            id="logo"
            className="flexCenter w-[91px] cursor-pointer hover:opacity-80 md:mr-[19px] md:w-[99px]"
          >
            <img
              src="https://cdn-dantats.stunning.kr/static/common/logo/bi-loud.png.small?q=80&f=webp&t=crop&s=328x80"
              alt="로고"
            />
          </div>
        </div>
        <div className=" md:flexCenter w-[370px] md:relative md:h-10">
          <input
            type="text"
            placeholder="어떤 디자인이 필요하세요?"
            className="bg-qs-background focus:outline-qs-primary hidden w-full rounded-full py-2 pl-4 pr-8 text-xs focus:outline-1 md:block md:h-full md:font-medium"
          />
          <button
            type="button"
            className=" md:flexCenter md:text-slate hidden  md:absolute md:right-5 md:top-2 md:block md:h-6 md:w-7 md:text-base"
          >
            <IoSearchOutline />
          </button>
        </div>

        {/* 모바일 검색 버튼 */}
        <div className="flexCenter h-10 w-[35px] md:hidden">
          <button
            type="button"
            className="flexCenter h-6 w-7 text-2xl text-grey-light"
          >
            <IoSearchOutline />
          </button>
        </div>
      </div>

      <ul className="hidden md:flex md:text-sm md:font-medium md:text-font-main">
        <li className=" mr-[14px] hover:opacity-80">
          <a href="#" className="inline-flex">
            공모전 대행
            <div className="ml-0.5 max-h-4 rounded-full bg-qs-green px-1 pb-[1px] text-[10px] font-bold leading-[15px] text-white">
              HOT
            </div>
          </a>
        </li>
        <li className="mr-[14px] hover:opacity-80">
          <a href="#">공모전 소식</a>
        </li>
        <li className="mr-[14px] hover:opacity-80">
          <a href="#">이벤트</a>
        </li>
        <li className="flexCenter hover:opacity-80 ">
          <div className="mr-[14px] h-2.5 w-[1px] bg-[#DBDEE2]"></div>
          <a href="#">로그인/회원가입</a>
        </li>
      </ul>
    </header>
  );
}
