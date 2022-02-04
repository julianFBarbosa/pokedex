import React from "react";

import { Link } from "react-router-dom";
import { Logo } from "../../Atoms/Logo";

import PokeAppSrc from "../../../assets/pokeapp.png";

export const LogoLink = () => {
  return (
    <Link to="/">
      <Logo src={PokeAppSrc} alt="PokeAPP Logo" />
    </Link>
  );
};
