import React from "react";
import QuoteCard from "./QuoteCard";
import AddQuote from "./AddQuote";

const CharCard = ({ character, updateCharacter, handleDeleteCharacter }) => {
  const randomQuote =
    character.quotes[Math.floor(Math.random() * character.quotes.length)];

  return (
    <div>
      <p>{character.name}</p>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt=""
        height="300px"
        width="300px"
      ></img>
      <AddQuote character={character} updateCharacter={updateCharacter} />
      <button onClick={() => handleDeleteCharacter(character._id)}>
        Delete Character
      </button>
      <QuoteCard characterId={character._id} randomQuote={randomQuote} />
    </div>
  );
};

export default CharCard;
