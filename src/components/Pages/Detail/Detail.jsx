import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../../Atoms/Badge";
import { Container } from "../../Template/Container";
import { getPokemonData } from "../../../Api";
import * as S from "./Detail.styles";

export const Detail = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const req = await getPokemonData(id);

        setData(req);
      } catch (error) {
        setData(null);
        setError(error.message);
      }
    })();
  }, [id]);

  console.log("data", data);
  if (!data && !error) return <S.Centered>Loading...</S.Centered>;

  if (!data && error?.message)
    return (
      <Container>
        <div>
          <S.Centered>{error} :(</S.Centered>
        </div>
      </Container>
    );

  return (
    <Container>
      <S.Header>
        <S.Title>{id}</S.Title>
        <S.Details>
          {data.types.map(({ type }) => (
            <Badge name={type.name} />
          ))}
        </S.Details>
      </S.Header>
      {/* <Link to="/">Home</Link> */}
    </Container>
  );
};
