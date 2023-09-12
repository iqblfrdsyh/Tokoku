import React from "react";
import Card from "../card/card";

const Category = ({ children, category }) => {
  return (
    <div className="mb-[100px]">
      <h2 className="text-[30px]">
        <span className="text-[#f73b2e] text-[40px]">|</span> {category}
      </h2>
      <div className="mt-10 mx-[15px] flex justify-start flex-wrap gap-10">{children}</div>
    </div>
  );
};

export default Category;
