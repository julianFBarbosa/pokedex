import React, { useEffect, useState } from "react";
import * as Styled from "./PokemonItem.styles";

import { getPokemonData } from "../../../Api";

export const PokemonItem = ({ name }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    (async () => {
      const request = await getPokemonData(name);
      console.log("request", request);

      setPokemonData(request);
    })();
  }, []);

  if (!pokemonData) return <p>Loading...</p>;

  return (
    <Styled.PokemonItem>
      <Styled.PokemonImage
        src={pokemonData.sprites.other.home.front_default}
        alt=""
      />
      <p>{pokemonData.name}</p>
    </Styled.PokemonItem>
  );
};
