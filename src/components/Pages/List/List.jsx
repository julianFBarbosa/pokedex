import React from "react";
import { PokemonList } from "../../Organisms/PokemonList";
import { Home } from "../../Templates/Home";

export const List = () => {
  const pokes = ["pikachu", "squirtle", "bulbassaur"];

  return (
    <Home>
      <PokemonList pokes={pokes} />
    </Home>
  );
};
