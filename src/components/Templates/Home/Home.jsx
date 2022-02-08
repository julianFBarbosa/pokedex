import React from "react";

import { LogoLink } from "../../Molecules/LogoLink/LogoLink";
import { Navbar } from "../../Organisms/Navbar";
import { InputGroup } from "../../Molecules/InputGroup";

export const Home = ({ children }) => {
  return (
    <div className="app-root">
      <Navbar>
        <LogoLink />
        <InputGroup label="Search Pokémon" />
      </Navbar>
      {children}
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};
