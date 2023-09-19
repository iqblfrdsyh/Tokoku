import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { categoryData } from "../../data/data";

import "swiper/css";
import "swiper/css/navigation";

const SliderCategory = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={7}
      spaceBetween={0}
    >
      {categoryData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="">
            <Link
              to={`/product/category/${data.category}`}
              className="text-center flex flex-col justify-center items-center flex-wrap h-full"
            >
              <img src={data.image} alt="" width={50} />
              <p>{data.category}</p>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderCategory;
