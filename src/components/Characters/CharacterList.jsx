import React, { useState, useEffect } from "react";
import { getCharacter } from "../../services/characterService";
import CharacterCard from "./CharacterCard";
import Form from "./Form"


function CharacterList() {
  const [chars, setChars] = useState();

  const handleSearch = async (name) => {
    console.log("handleSearch name", name)
    const charData = await getCharacter(name)
    console.log("this is char data", charData)
    setChars(charData)
  }

  // useEffect(() => {
  //   const fetchAllChar = async () => {
  //     const charData = await getCharacter();
  //     setChars(charData.data);
  //     console.log("api data", charData.data.results);
  //   };
  //   fetchAllChar();
  //   return () => {
  //     setChars([]);
  //   };
  // }, []);

  return (
    <>
      <h1> Search Character Page </h1>
      <Form handleSearch={handleSearch} />
      {chars && 
        <CharacterCard 
        character={chars}
        key={chars.id}
      />
      }
        
    </>
  )
}

export default CharacterList;
