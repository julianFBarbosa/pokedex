import React from "react";

export const Input = ({ onChange, value, name, placeholder }) => {
  return (
    <input
      onChange={({ target }) => onChange(target.value)}
      value={value}
      placeholder={placeholder ? placeholder : ""}
      name={name}
      id={name}
    />
  );
};
