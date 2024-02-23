import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../../Atoms/Badge";
import { Container } from "../../Template/Container";
import { getPokemonData } from "../../../Api";
import * as S from "./Detail.styles";
import { capitalize, filterSprites } from "../../../utils";

export const Detail = () => {
  const [data, setData] = useState(null);
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const req = await getPokemonData(id);
        const filteredSprites = filterSprites(req.sprites);

        setImages(filteredSprites);
        setData(req);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setError(error?.message || "An unexpected error occurred");
      }
    };

    if (typeof id === "string") fetchData();
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

  console.log("data", data.sprites);
  return (
    <Container>
      <S.Header>
        <S.Title>{id}</S.Title>
        <S.Details>
          {data.types.map(({ type }) => (
            <Badge key={type.name} name={type.name} />
          ))}
        </S.Details>
      </S.Header>
      <S.Body>
        <S.SpriteContainer>
          {images.map(([name, url]) => (
            <S.SpriteImage src={url} alt="name" />
          ))}
        </S.SpriteContainer>
        <S.MoveContainer>
          <S.MoveTitle>Moves</S.MoveTitle>
          <S.MoveList>
            {data.moves.map(({ move }) => (
              <S.MoveItem key={move.name}>{capitalize(move.name)}</S.MoveItem>
            ))}
          </S.MoveList>
        </S.MoveContainer>
      </S.Body>

      {/* <Link to="/">Home</Link> */}
    </Container>
  );
};
