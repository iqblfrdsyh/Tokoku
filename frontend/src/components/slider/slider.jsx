import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const SliderCategory = () => {
  const numSlides = 9;

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={7}
      spaceBetween={0}
    >
      {Array.from({ length: numSlides }).map((_, index) => (
        <SwiperSlide key={index}>
          <div className="text-center flex flex-col justify-center items-center flex-wrap">
            <Link to="#">
              <img src="./assets/icons/food.svg" alt="" width={50} />
              <p>Foods</p>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderCategory;
