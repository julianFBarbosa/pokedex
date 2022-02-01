import React from "react";

export const Input = ({ onChange, value, placeholder }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder ? placeholder : ""}
    />
  );
};
