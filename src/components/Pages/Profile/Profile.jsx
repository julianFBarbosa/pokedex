import React from "react";
import { Link, useParams } from "react-router-dom";

export const Profile = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Profile</p>
      <p>Pokémon: {id}</p>
      <Link to="/">Home</Link>
    </div>
  );
};
