import React from "react";
import { Link, useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Detail</p>
      <p>Pokémon: {id}</p>
      <Link to="/">Home</Link>
    </div>
  );
};
