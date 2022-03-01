import React from "react";
import * as Styled from "./Input.styles";

export const Input = ({
  onChange,
  value,
  name,
  placeholder,
  variant,
  children,
}) => {
  return (
    <Styled.Input
      onChange={({ target }) => onChange(target.value)}
      value={value}
      placeholder={placeholder ? placeholder : ""}
      name={name}
      variant={variant}
      id={name}
    >
      {children}
    </Styled.Input>
  );
};
