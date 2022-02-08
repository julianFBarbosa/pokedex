import React from "react";
import { Link, useParams } from "react-router-dom";
import { Home } from "../../Templates/Home";

export const Detail = () => {
  const { id } = useParams();

  return (
    <Home>
      <div>
        <p>Detail</p>
        <p>Pokémon: {id}</p>
        <Link to="/">Home</Link>
      </div>
    </Home>
  );
};
