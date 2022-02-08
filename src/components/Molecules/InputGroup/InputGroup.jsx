import React, { useState } from "react";
import { Input } from "../../Atoms/Input";

export const InputGroup = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Input value={value} onChange={setValue} placeholder="Pokemon" />
    </div>
  );
};
