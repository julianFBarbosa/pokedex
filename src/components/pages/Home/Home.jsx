import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const randomInt = Math.ceil(Math.random() * 128);
  console.log("randomInt", randomInt);

  return (
    <div>
      <p>Home</p>
      <Link to={`pokemons/${randomInt}`}>
        Go to pokemon {randomInt} profile
      </Link>
      {' '}
      <Link to="pokemons">Go to pokemon list</Link>
    </div>
  );
};
