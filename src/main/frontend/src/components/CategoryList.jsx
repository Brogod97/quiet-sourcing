import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Category from "./Category";
import axios from "axios";
import Divider from "./ui/Divider";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("data/categoryList.json").then((res) => setCategories(res.data));
  }, []);

  return (
    <>
      <div className="flexCenter md:webGrid flex-col md:py-20">
        <SectionTitle title={`어떤 디자인/아이디어가 \n 필요하세요?`} />
        <div className="inline-grid grid-cols-3 md:flex md:w-full md:grid-cols-9 md:justify-between md:pt-4">
          {categories.map((category) => (
            <Category
              name={category.name}
              isBest={category.isBest}
              image={category.image}
              average={category.average}
            />
          ))}
        </div>
      </div>

      <Divider />
    </>
  );
}
