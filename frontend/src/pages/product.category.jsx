import React from "react";
import { useParams } from "react-router-dom";

const ProductCategory = () => {
  const { category } = useParams();

  return (
    <>
      <div className="mx-[70px]">
        <h2 className="text-[30px]">Category : {category}</h2>
      </div>
    </>
  );
};

export default ProductCategory;
