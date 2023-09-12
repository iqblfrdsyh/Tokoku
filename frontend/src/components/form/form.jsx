import React from "react";
import Button from "../button/button";
import FormInput from "../input/input";

const Form = ({ children }) => {
  return (
    <form action="">
      <h2
        className="text-[35px] my-[25px]"
        style={{ fontFamily: "Kaushan Script, cursivet" }}
      >
        Tokoku
      </h2>
      <div className="input">
        <FormInput
          type="text"
          placeholder="Username or Email"
          className="mb-3 rounded-md"
        />
        <FormInput type="password" placeholder="Password" className="mb-4" />
      </div>
      {children}
    </form>
  );
};

export default Form;
