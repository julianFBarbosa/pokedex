export const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit = 40, offset = 0) => {
  const request = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  const response = await request.json();

  return response;
};

export const getPokemonData = async (name = false) => {
  if (!name) return;
  const request = await fetch(`${BASE_URL}/pokemon/${name}`);
  const response = await request.json();

  return response;
};
