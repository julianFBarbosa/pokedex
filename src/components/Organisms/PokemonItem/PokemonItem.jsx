import React, { useEffect, useState } from "react";
import * as S from "./PokemonItem.styles";
import { capitalize, extractId } from "../../../utils.js";

export const PokemonItem = ({ name, url }) => {
  const spriteUrl = extractId(url);

  return (
    <S.Item>
      <S.Image src={spriteUrl} alt="" />
      <S.Name>{capitalize(name)}</S.Name>
      <S.CTA to={`/pokemon/${name}`}>See Details</S.CTA>
    </S.Item>
  );
};
