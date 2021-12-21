import React, { useEffect, useState } from "react";
import { getCharacter } from "../../services/characterService";
import Form from "./Form"
import { useNavigate } from "react-router-dom"
import ComicCard from "../../Comics/ComicCard"

function CharacterList() {
  const [chars, setChars] = useState();
  const [addComics, setAddComics] = useState([]);
  const navigate = useNavigate()


  const handleSearch = async (name) => {
    const charData = await getCharacter(name)
    navigate(`/character/${charData.id}`, { state: charData })
  }



  return (
    <>
      <h1> Search Character Page </h1>
      <Form handleSearch={handleSearch} character={chars} />
      {/* {addComics.map((comic)=>(
        <ComicCard 
        comic={comic}
        key={comic.id}
        />
      ))} */}
    </>
    
  )
}


// {chars.map((character) => (
//   <CharacterCard character={character} key={character.id} />

export default CharacterList;
