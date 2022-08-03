import { useEffect, useState } from "react";
import "./Home.css";

// Services
import { getCharacters } from "../../services/characters";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  // REQUEST A Pokemon API.
  useEffect(() => {
    const getCharactersQuery = async () => {
      const data = await getCharacters();
      console.log(data);
      setCharacters(data.results);
    };

    getCharactersQuery();
  }, []);

  //console.log(characters, "STATE characters");

  const pokemons = characters.map((character, index) => (
    <div className="card" key={index}>
      <div className="nameCharacter text-capitalize">
        Name: {character.name}
      </div>
      <div className="nameSpecie ">Especie: {character.url}</div>
    </div>
  ));

  return (
    <div className="mainContainer">
      <h1 className="titleHome">
        Bienvenido a la mejor pagina de consultas de pokemon
      </h1>
      <div className="cardsHome">{pokemons}</div>
    </div>
  );
}
