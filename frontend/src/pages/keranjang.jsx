import React, { useEffect, useState } from "react";
import Button from "../components/button/button";
import Cards from "../components/card/card";
import { Link } from "react-router-dom";

const Keranjang = () => {
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const container = document.querySelector(".product-container");
    if (container.scrollHeight > container.clientHeight) {
      setHasOverflow(true);
    } else {
      setHasOverflow(false);
    }
  }, []);

  return (
    <div className="mx-[70px]">
      <div className="border-b-4 flex flex-wrap items-center justify-between pb-[10px] my-[30px]">
        <h2 className="text-[30px]">Keranjang</h2>
        <Link to="/">
          <Button
            buttonName="Kembali"
            extendClassNames="w-[120px] rounded-lg  hover:bg-slate-700 hover:text-white hover:scale-[0.99] transition"
          />
        </Link>
      </div>
      <div className="flex justify-between">
        <div
          className={`flex flex-col gap-[30px] ${
            hasOverflow ? "overflow-y-scroll" : ""
          } h-[600px] product-container`}
        >
          <Cards.CardHorizontal
            image="https://assets.klikindomaret.com/products/10001094/10001094_1.jpg"
            productName="Chitato"
            category="Food, Snack"
            price="Rp 5.000"
            qty="10"
          />
          <Cards.CardHorizontal
            image="https://assets.klikindomaret.com/products/10001094/10001094_1.jpg"
            productName="Chitato"
            category="Food, Snack"
            price="Rp 5.000"
            qty="10"
          />
          <Cards.CardHorizontal
            image="https://assets.klikindomaret.com/products/10001094/10001094_1.jpg"
            productName="Chitato"
            category="Food, Snack"
            price="Rp 5.000"
            qty="10"
          />
        </div>
        <div>
          <Cards.CardCheckout TotalPrice="Rp 5.000" TotalQty="1" />
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
