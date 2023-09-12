import React from "react";
// import MainLayout from "../components/layouts/main.layout";
import Banner from "../components/bannerIklan/banner";
import SliderCategory from "../components/slider/slider";
import Category from "../components/category/category";
import Cards from "../components/card/card";

const Home = () => {
  return (
    <React.Fragment>
      {/* <MainLayout> */}
        <div className="mx-[70px]">
          <Banner />
          <div className="my-[40px] border-black pb-[60px]">
            <SliderCategory />
          </div>
          <div className="border-t-2 border-b-2 pt-[70px] border-black">
            <Category category="Food">
              <Cards.CardVertical
                productName="Chitato"
                image="https://assets.klikindomaret.com/products/10001094/10001094_1.jpg"
                category="Food, Snack"
                price="Rp 5.000"
              />
            </Category>
            <Category category="Snack">
              <Cards.CardVertical
                productName="Chitato"
                image="https://assets.klikindomaret.com/products/10001094/10001094_1.jpg"
                category="Food, Snack"
                price="Rp 5.000"
              />
            </Category>
          </div>
        </div>
      {/* </MainLayout> */}
    </React.Fragment>
  );
};

export default Home;
