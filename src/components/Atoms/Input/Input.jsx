import React from "react";

const Input = ({ onChange, value, placeholder }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder ? placeholder : ""}
    />
  );
};

export default Input;
