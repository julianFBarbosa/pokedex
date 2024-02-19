export const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    const request = await fetch(
      `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
    );
    const response = await request.json();

    return response;
  } catch (error) {
    throw new Error(`Unable to find pokemons :C`);
  }
};

export const getPokemonData = async (name = false) => {
  if (!name) return;

  try {
    const request = await fetch(`${BASE_URL}/pokemon/${name}`);
    const response = await request.json();

    return response;
  } catch (error) {
    throw new Error(`Unable to search ${name}'s data`);
  }
};
