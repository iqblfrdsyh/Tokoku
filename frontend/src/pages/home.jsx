import React, { useState, useEffect } from "react";
import Banner from "../components/bannerIklan/banner";
import SliderCategory from "../components/slider/slider";
import Category from "../components/category/category";
import Cards from "../components/card/card";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const productData = response.data.products;
      setProducts(productData);
    } catch (error) {
      console.error(error);
    }
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

  const groupProduct = {};
  products.forEach((product) => {
    const category = product.category;
    if (!groupProduct[category]) {
      groupProduct[category] = [];
    }
    groupProduct[category].push(product);
  });

  console.log(groupProduct);

  return (
    <React.Fragment>
      <div className="mx-[70px]">
        <Banner />
        <div className="my-[40px] border-black pb-[60px]">
          <SliderCategory />
        </div>
        <div className="border-t-2 border-b-2 pt-[70px] border-black">
          {Object.entries(groupProduct).map(([category, products]) => (
            <Category
              category={
                category.charAt(0).toLocaleUpperCase() + category.slice(1)
              }
              key={category}
            >
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
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
