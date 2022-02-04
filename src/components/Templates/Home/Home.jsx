import React from "react";

import { LogoLink } from "../../Molecules/LogoLink/LogoLink";
import { Navbar } from "../../Molecules/Navbar";
import { SearchField } from "../../Molecules/SearchField";

export const Home = ({ children }) => {
  return (
    <div className="app-root">
      <header>
        <LogoLink />
        <Navbar>
          <SearchField />
        </Navbar>
      </header>
      {children}
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};
