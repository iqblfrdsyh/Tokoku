import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "../components/category/category";
import Cards from "../components/card/card";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  const fetchData = async () => {
    const datas = await axios.get(
      `https://dummyjson.com/products/category/${category.toLocaleLowerCase()}`
    );
    console.log(datas.data.products);
    setProducts(datas.data.products);
  };

  function formatPrice(price) {
    if (typeof price !== "number") {
      return price;
    }
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="mx-[70px]">
        <div className="h-auto">
          <Category category={category} key={category}>
            {products.map((data) => (
              <Cards.CardVertical
                key={data.id}
                productName={data.title}
                image={data.images[0]}
                category={data.category}
                price={formatPrice(data.price)}
              />
            ))}
          </Category>
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
