import React from "react";

import FamilyGnb from "../layouts/FamilyGnb";
import Gnb from "../layouts/Gnb";
import Header from "../layouts/Header";
import BannerSlider from "../components/Slider/BannerSlider";
import ContestSlider from "../components/Slider/ContestSlider";
import CategoryList from "../components/CategoryList";

export default function Main() {
  return (
    <>
      <FamilyGnb />
      <Header />
      <Gnb />
      <BannerSlider />
      <ContestSlider />
      <CategoryList />
    </>
  );
}
