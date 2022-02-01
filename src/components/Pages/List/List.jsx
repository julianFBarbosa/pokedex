import React from "react";
import { Link, Outlet } from "react-router-dom";
import { PokemonList } from "../../Organisms/PokemonList";

export const List = () => {
  const pokes = ["pikachu", "squirtle", "bulbassaur"];

  return (
    <div>
      <Link to="">Home</Link>
      <PokemonList pokes={pokes} />
      <Outlet />
    </div>
  );
};
