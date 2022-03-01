import React, { useEffect, useState } from "react";
import * as Styled from "./PokemonList.styles";
import { PokemonItem } from "../PokemonItem";

import { getPokemonList } from "../../../Api";

export const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await getPokemonList(5);
      const pokemonList = await request.results;

      setPokemonData(pokemonList);
    })();
  }, []);

  if (!pokemonData) return <div>Loading...</div>;

  return (
    <Styled.PokemonList>
      {pokemonData?.map((pokemonDataItem) => (
        <PokemonItem
          key={pokemonDataItem.name}
          url={pokemonDataItem.url}
          name={pokemonDataItem.name}
        />
      ))}
    </Styled.PokemonList>
  );
};
