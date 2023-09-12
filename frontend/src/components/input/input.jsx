import React from "react";

const FormInput = ({ placeholder, name, type, className }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id=""
        placeholder={placeholder}
        className={`border-2 w-[340px] p-1 px-[10px] ${className}`}
      />
    </div>
  );
};

export default FormInput;
