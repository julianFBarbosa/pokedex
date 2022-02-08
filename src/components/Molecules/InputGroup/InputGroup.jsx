import React, { useState } from "react";

import { Input } from "../../Atoms/Input";
import { Label } from "../../Atoms/Label";

export const InputGroup = ({ label, placeholder, name }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        value={value}
        onChange={setValue}
        placeholder={placeholder ? placeholder : ""}
        name={name}
      />
    </div>
  );
};
