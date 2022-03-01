import React from "react";

import { LogoLink } from "../../Molecules/LogoLink";
import { Navbar } from "../../Organisms/Navbar";
import { SearchField } from "../../Molecules/SearchField";

export const Home = ({ children }) => {
  return (
    <div className="app-root">
      <Navbar>
        <LogoLink />
        <SearchField placeholder="Pokémon" variant="header" />
      </Navbar>
      {children}
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};
