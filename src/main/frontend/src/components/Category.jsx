import React from "react";

export default function Category({ name, isBest, image, average }) {
  return (
    // TODO: Link 연결하기
    <a
      href="#"
      className="group relative mx-1 mb-2 inline-flex w-[109px] flex-col items-center rounded border border-dashed p-2.5 hover:opacity-80 md:border-none"
    >
      {isBest && (
        <div className="absolute left-2.5 top-[5px] text-xs font-bold text-qs-green md:hidden">
          Best
        </div>
      )}
      <div className="group-hover:md:border-qs-primary rounded-[20px] border-2 border-transparent p-2 md:mb-[15px] md:bg-gray-100 group-hover:md:border-2">
        <img
          className="h-14 w-[46px] pt-2.5 duration-300 group-hover:scale-110 md:h-12 md:w-12 md:p-0"
          src={image}
        />
      </div>
      <div className="flexCenter mt-[5px] flex-col ">
        <span className="text-xs font-medium md:text-sm">{name}</span>
        {isBest && (
          <div>
            <div className="mt-0.5 hidden text-center text-xs font-bold text-qs-green md:block">
              Best
            </div>
            <div className="mt-[5px] hidden rounded-full border border-qs-green font-bold text-qs-green md:block">
              <span className=" px-[11px] pb-1 pt-[1px] text-xs ">
                {`평균 ${average}건`}
              </span>
            </div>
          </div>
        )}
      </div>
    </a>
  );
}
