import React from "react";

import { InputGroup } from "../InputGroup";
import { Button } from "../../Atoms/Button";

export const SearchField = ({ placeholder, variant }) => {
  
  return (
    <InputGroup variant={variant} placeholder={placeholder}>
      <Button>Search</Button>
    </InputGroup>
  );
};
