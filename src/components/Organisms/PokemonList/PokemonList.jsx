import React, { useEffect, useState } from "react";
import * as S from "./PokemonList.styles";
import { PokemonItem } from "../PokemonItem";

import { getPokemonList } from "../../../Api";

export const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  
  useEffect(() => {
    (async () => {
      const request = await getPokemonList();
      const pokemonList = await request.results;

      setPokemonData(pokemonList);
    })();
  }, []);

  if (!pokemonData) return <div>Loading...</div>;

  return (
    <S.PokemonList>
      {pokemonData?.map((pokemonDataItem) => (
        <PokemonItem
          key={pokemonDataItem.name}
          url={pokemonDataItem.url}
          name={pokemonDataItem.name}
        />
      ))}
    </S.PokemonList>
  );
};
