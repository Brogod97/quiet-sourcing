import React from "react";
import { IoChevronForward, IoChevronBackOutline } from "react-icons/io5";

function PrevBtn({ onClick, type }) {
  if (type === "banner") {
    return (
      <button
        type="button"
        className="absolute left-[calc(50%-690px)] top-1/2 z-10 rounded-full bg-white bg-opacity-20 p-2"
        onClick={onClick}
      >
        <IoChevronBackOutline className="text-white" />
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className="absolute -left-12 top-1/3"
        onClick={onClick}
      >
        <IoChevronBackOutline className="text-2xl text-gray-300" />
      </button>
    );
  }
}

function NextBtn({ onClick, type }) {
  if (type === "banner") {
    return (
      <button
        type="button"
        className="absolute right-[calc(50%-690px)] top-1/2 z-10 rounded-full bg-white bg-opacity-20 p-2"
        onClick={onClick}
      >
        <IoChevronForward className="text-white" />
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className="absolute -right-12 top-1/3"
        onClick={onClick}
      >
        <IoChevronForward className="text-2xl text-gray-300" />
      </button>
    );
  }
}

export { PrevBtn, NextBtn };
