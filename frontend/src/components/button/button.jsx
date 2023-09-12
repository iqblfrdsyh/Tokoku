import React from "react";

const Button = ({ buttonName, extendClassNames, onClick }) => {
  return (
    <>
      <button className={`border-2 py-1 ${extendClassNames}`} onClick={onClick}>
        {buttonName}
      </button>
    </>
  );
};

export default Button;
