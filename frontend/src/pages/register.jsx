import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../components/button/button";
import MainLayout from "../components/layouts/main.layout";
import FormInput from "../components/input/input";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    // <MainLayout>
    <div className="flex justify-center gap-[100px] h-[465px]">
      <img src="./assets/images/clumsy.svg" alt="" width={450} className="-mt-10" />
      <div >
        <div className="border-2 px-[20px] w-[470px] text-center rounded-md pb-[30px]">
          <form action="">
            <h2
              className="text-[35px] my-[25px]"
              style={{ fontFamily: "Kaushan Script, cursive" }}
            >
              Tokoku
            </h2>
            <div className="input mb-24 relative">
              <FormInput
                type="text"
                placeholder="Username or Email"
                className="mb-4 rounded-md py-2"
              />
              <FormInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="mb-4 rounded-md py-2"
              />
              <div
                className="absolute right-14 top-[175%] transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
              <FormInput
                type="password"
                placeholder="Confirm Password"
                className="mb-4 rounded-md py-2"
              />
            </div>
            <Button buttonName="Daftar" extendClassNames="w-[340px] mt-10" />
          </form>
        </div>
        <div className="border-2 py-5 px-4 text-center mt-3 rounded-md">
          <p>
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-700 underline">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
    // </MainLayout>
  );
};

export default Register;
