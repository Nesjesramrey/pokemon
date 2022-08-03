export const getCharacters = async () => {
  //const pokemonId = Math.floor(Math.random() * 806 + 1);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);

  const data = await response.json();
  return data;
};

export const list = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const data = await response.json();
  return data;
};

export const retrieve = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const data = await response.json();
  return data;
};
