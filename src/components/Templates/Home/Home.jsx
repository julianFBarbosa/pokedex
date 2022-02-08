import React from "react";

import { LogoLink } from "../../Molecules/LogoLink/LogoLink";
import { Navbar } from "../../Molecules/Navbar";
import { InputGroup } from "../../Molecules/InputGroup";

export const Home = ({ children }) => {
  return (
    <div className="app-root">
      <header>
        <LogoLink />
        <Navbar>
          <InputGroup />
        </Navbar>
      </header>
      {children}
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};
