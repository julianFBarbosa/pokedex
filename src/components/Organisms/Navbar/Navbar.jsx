import React from "react";
import * as Nav from "./Navbar.styles";

export const Navbar = ({ children }) => {
  return (
    <Nav.Wrapper>
      <Nav.Container>{children}</Nav.Container>
    </Nav.Wrapper>
  );
};
