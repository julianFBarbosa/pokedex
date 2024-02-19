import React from "react";

import { LogoLink } from "../../Molecules/LogoLink";
import { Navbar } from "../../Organisms/Navbar";
import { SearchField } from "../../Molecules/SearchField";
import * as S from "./Container.styles";

export const Container = ({ children }) => {
  return (
    <div className="app-root">
      <Navbar>
        <LogoLink />
        <SearchField placeholder="Pokémon" variant="header" />
      </Navbar>

      <S.Wrapper>{children}</S.Wrapper>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};
