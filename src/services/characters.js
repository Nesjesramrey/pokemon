export const getCharacters = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/ability/?limit=20&offset=20`
  );
  const data = await response.json();
  return data;
};
