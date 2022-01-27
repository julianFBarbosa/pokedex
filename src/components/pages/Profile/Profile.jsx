import React from "react";
import { Link, useParams } from "react-router-dom";

export const Profile = () => {
  const { id: pokemonId } = useParams();
  console.log('pokemonId', pokemonId)

  return (
    <div>
      <p>Profile</p>
      <p>Pokémon: {pokemonId}</p>
      <Link to="/">Home</Link>
    </div>
  );
};
