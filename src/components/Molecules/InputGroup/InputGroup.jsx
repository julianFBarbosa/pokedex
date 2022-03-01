import React, { useState } from "react";
import * as Styled from "./InputGroup.styles";

import { Input } from "../../Atoms/Input";
import { Label } from "../../Atoms/Label";

export const InputGroup = ({
  label,
  placeholder,
  name,
  children,
  variant,
  ...props
}) => {
  const [value, setValue] = useState("");

  return (
    <Styled.Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        value={value}
        onChange={setValue}
        placeholder={placeholder ? placeholder : ""}
        name={name}
        variant={variant ? variant : ""}
        {...props}
      />
      {children}
    </Styled.Container>
  );
};
