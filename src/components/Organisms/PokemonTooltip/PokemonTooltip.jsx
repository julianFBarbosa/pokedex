import React, { useEffect, useState } from "react";
import * as S from "./PokemonItem.styles";

import { getPokemonData } from "../../../Api";

export const PokemonTooltip = ({ name, id }) => {
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
    <S.Tooltip>
      {/* <S.PokemonImage
        src={pokemonData.sprites.other.home.front_default}
        alt=""
      /> */}
      <S.Name>{pokemonData.name}</S.Name>
    </S.Tooltip>
  );
};
