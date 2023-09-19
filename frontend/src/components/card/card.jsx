import React, { useState } from "react";
import Button from "../button/button";
import { Link } from "react-router-dom";
import FormInput from "../input/input";

const Cards = {
  CardVertical: ({ productName, category, price, image }) => {
    return (
      <div className="w-[270px] bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 bg-transparent flex flex-col pb-6">
        <Link to="#">
          <div
            className="rounded-t-lg"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
            }}
          ></div>
        </Link>
        <div className="p-5">
          <Link to="#">
            <h5 className="text-[28px] mb-1 font-bold tracking-tight text-gray-900 relative overflow-hidden whitespace-nowrap">
              {productName.length > 20
                ? `${productName.substring(0, 20)}...`
                : productName}
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Badge
              </span>
            </h5>
          </Link>
          <span className="border-2 border-black px-4 rounded-lg text-[15px]">
            {category}
          </span>
          <p className="mb-7 text-[20px] text-gray-700 mt-3">{price}</p>
        </div>
        <Link to="/keranjang" className="mt-auto px-3">
          <Button
            buttonName="Beli"
            extendClassNames="w-full hover:bg-gray-800 hover:bg-slate-700 hover:text-white hover:scale-[0.99] rounded-lg border-gray-400 transition"
          />
        </Link>
      </div>
    );
  },
  CardHorizontal: ({ productName, category, price, image }) => {
    const [jumlah, setJumlah] = useState(0);

    const handleClickPlus = () => {
      setJumlah(jumlah + 1);
    };
    const handleClickMin = () => {
      setJumlah(jumlah - 1);
    };
    const styleJumlah = {
      color: jumlah <= 0 ? "red" : "black",
    };
    return (
      <div className="w-[500px] bg-white border border-gray-200 rounded-lg shadow-md  dark:border-gray-700 flex gap-2">
        <div>
          <Link to="#">
            <img className="rounded-t-lg" src={image} alt="" width={250} />
          </Link>
        </div>
        <div className="p-5">
          <Link to="#">
            <h5 className="text-[28px] mb-1 font-bold tracking-tight text-gray-900">
              {productName}
            </h5>
          </Link>
          <span className="border-2 border-black px-4 rounded-lg text-[15px]">
            {category}
          </span>
          <p className="mb-7 text-[20px] text-gray-700 mt-3">{price}</p>
          <div className="flex flex-wrap gap-[10px] items-center">
            <Button
              buttonName="-"
              extendClassNames="px-[5px]"
              onClick={handleClickMin}
            ></Button>
            <p style={styleJumlah}>{jumlah < 0 ? 0 : jumlah}</p>
            <Button
              buttonName="+"
              extendClassNames="px-[5px]"
              onClick={handleClickPlus}
            ></Button>
          </div>
          <Button
            buttonName="Cancel"
            extendClassNames="bg-red-400 text-white w-[130px] rounded-lg mt-[20px] hover:scale-[0.98] transition"
          />
          {/* <Button /> */}
        </div>
      </div>
    );
  },
  CardCheckout: () => {
    return (
      <div className="w-[470px] bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="mx-[20px]">
          <div className="py-[15px]">
            <h2 className="text-[29px]">Detail Pesanan </h2>
          </div>
          <hr className="p-[2px] mb-6 rounded-full bg-black" />
          <div className="py-3 mt-4 px-3  border-2 border-gray-600 rounded-md">
            <h4 className="text-[18px] mb-5">Opsi Pengiriman</h4>
            <div class="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="JNT"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                />
                <label
                  for="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                >
                  J&T Express
                </label>
              </div>
              <p>Rp 10.000</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value="JNE"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                />
                <label
                  for="default-radio-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                >
                  JNE Express
                </label>
              </div>
              <p>Rp 7.000</p>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <input
                  id="default-radio-3"
                  type="radio"
                  value="SiCepat"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                />
                <label
                  for="default-radio-3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                >
                  SiCepat Ekspres
                </label>
              </div>
              <p>Rp 12.000</p>
            </div>
          </div>
          <div className="mt-3">
            <FormInput
              type="text"
              placeholder="Pesan..."
              className="w-full rounded-[15px]"
            />
          </div>
          <hr className="p-[2px] my-6 rounded-full bg-black" />
          <div className="flex items-center justify-between mt-4">
            <h3>Total Pesanan :</h3>
            <p>Rp 10.000</p>
          </div>
          <Link to="/pesananSaya">
            <Button
              buttonName="Buat Pesanan"
              extendClassNames="px-[10px] rounded-lg border-black mt-8 mb-5 w-full hover:bg-slate-700 hover:text-white hover:scale-[0.99] transition"
            />
          </Link>
        </div>
      </div>
    );
  },
};

export default Cards;
