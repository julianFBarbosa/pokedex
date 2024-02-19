import React from "react";
import * as S from "./Badge.styles";
import { typeColors } from "../../../GlobalTheme";

export const Badge = ({ name }) => {
  const type = typeColors.find((obj) => obj.name === name);

  return <S.Text background={type.color}>{name}</S.Text>;
};
