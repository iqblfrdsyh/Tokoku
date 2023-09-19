import axios from "axios";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  const getBanner = async () => {
    try {
      const response = await axios.get("http://localhost:3000/banners");
      setBanner(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="my-">
      {banner &&
        banner.map((banner) => (
          <img
            src={banner.url_image}
            alt="banner"
            className="h-[400px] w-full mx-auto border-2 rounded-lg"
          />
        ))}
    </div>
  );

  // return (
  //   <div>
  //     <img
  //       src="http://localhost:3000/assets/banner-image/1694478034016.png"
  //       alt=""
  //       className="h-[400px] w-full mx-auto border-2 rounded-lg"
  //     />
  //   </div>
  // );
};

export default Banner;
