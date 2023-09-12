import React, { useEffect } from "react";
import Button from "../components/button/button";
import { Link } from "react-router-dom";

const PesananSaya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <React.Fragment>
      <div className="mx-[70px]">
        <div className="border-b-4 flex flex-wrap items-center justify-between pb-[10px] my-[30px]">
          <h2 className="text-[30px]">Pesanan Saya</h2>
          <Link to="/keranjang">
            <Button
              buttonName="Kembali"
              extendClassNames="w-[120px] rounded-lg  hover:bg-slate-700 hover:text-white hover:scale-[0.99] transition"
            />
          </Link>
        </div>
        <div className="bg-slate-50 border-2 shadow-md w-[650px] mx-auto rounded-md p-5">
          <div>
            <h4 className="text-[24px] mb-3 font-semibold"> | Product</h4>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h5>Infinix Hot 11</h5>
              <p>1 x</p>
              <p>Rp 2.500.000</p>
            </div>
            <div className="flex justify-between">
              <h5>Infinix Hot 12</h5>
              <p>3 x</p>
              <p>Rp 2.500.000</p>
            </div>
          </div>
          <hr className="p-[2px] mt-6 mb-3 rounded-full bg-black" />
          <div>
            <h4 className="text-[24px] mb-3 font-semibold">
              | Jasa Pengiriman
            </h4>
            <div className="flex justify-between">
              <div>
                <h5>J&T</h5>
                <p className="text-slate-500">Estimasi pengiriman 7 - 9 Sept</p>
              </div>
              <p>Rp 10.000</p>
            </div>
          </div>
          <hr className="p-[2px] mt-5 mb-3 rounded-full bg-black" />
          <div className="flex justify-between">
            <h5>Total Pembayaran : </h5>
            <p>Rp 5.000.000</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PesananSaya;
