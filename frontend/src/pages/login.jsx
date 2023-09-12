import React, { useState } from "react";
import MainLayout from "../components/layouts/main.layout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/button/button";
import FormInput from "../components/input/input";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    // <MainLayout>
    <div className="flex justify-center gap-[100px] h-[465px]">
      <img src="./assets/images/groovy.svg" alt="" width={450} className="-mt-10" />
      <div>
        <div className="border-2 px-[20px] w-[470px] text-center rounded-md">
          <form action="">
            <h2
              className="text-[35px] my-[25px]"
              style={{ fontFamily: "Kaushan Script, cursivet" }}
            >
              Tokoku
            </h2>
            <div className="input mb-10 relative">
              <FormInput
                type="text"
                placeholder="Username or Email"
                className="mb-3 rounded-md py-2"
              />
              <FormInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="mb-4 rounded-md py-2"
              />
              <div
                className="absolute right-14 top-[165%] transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <Button buttonName="Masuk" extendClassNames="w-[340px] mt-10" />
          </form>
          <Link to="/forget">
            <p className="my-4 text-blue-700 underline">Lupa Password?</p>
          </Link>
        </div>
        <div className="border-2 py-5 px-4 text-center mt-3 rounded-md">
          <p>
            Belum punya akun? <Link to="/register" className="text-blue-700 underline">Daftar</Link>
          </p>
        </div>
      </div>
    </div>
    // </MainLayout>
  );
};

export default Login;
