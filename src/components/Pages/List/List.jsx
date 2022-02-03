import React from "react";
import { PokemonList } from "../../Organisms/PokemonList";

export const List = () => {
  const pokes = ["pikachu", "squirtle", "bulbassaur"];

  return (
    <div>
      <PokemonList pokes={pokes} />
    </div>
  );
};
