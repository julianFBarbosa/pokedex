import React from "react";
import { Link } from "react-router-dom";

export const PokemonList = ({ pokes }) => {
  return (
    <div>
      <p>List: </p>

      <ul>
        {pokes.map((poke) => (
          <li key={poke}>
            <Link to={`pokemons/${poke}`}>{poke}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
