import React, { useState } from "react";
import { getCharacter } from "../../services/characterService";
import Form from "./Form"
import { useNavigate } from "react-router-dom"


function CharacterList() {
  const [chars, setChars] = useState();
  const navigate = useNavigate()

  const handleSearch = async (name) => {
    const charData = await getCharacter(name)
    navigate(`/character/${charData.id}`, { state: charData })
  }

  return (
    <>
      <h1> Search Character Page </h1>
      <Form handleSearch={handleSearch} character={chars} />
    </>
    
  )
}

export default CharacterList;
