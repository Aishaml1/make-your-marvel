import React from "react";
import QuoteCard from "./QuoteCard";
import AddQuote from "./AddQuote";
import '../../styles/CharCard.css'

const CharCard = ({ character, updateCharacter, handleDeleteCharacter }) => {
  const randomQuote =
    character.quotes[Math.floor(Math.random() * character.quotes.length)];

  return (
    <div className='charCard'>
      <p className='charName'>{character.name}</p>
      <img className='charImg'
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt=""
        height="300px"
        width="300px"
      ></img>
      <AddQuote className='charAddQuote' character={character} updateCharacter={updateCharacter} />
      <button className='charbtn' onClick={() => handleDeleteCharacter(character._id)}>
        Delete Character
      </button>
      <div className='charQuote'>
      <QuoteCard characterId={character._id} 
      randomQuote={randomQuote} 
      /></div>

    </div>
  );
};

export default CharCard;
