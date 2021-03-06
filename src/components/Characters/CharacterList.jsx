import React, { useState } from "react";
import { deleteCharacter, getCharacter } from "../../services/characterService";
import Form from "./Form"
import { useNavigate } from "react-router-dom"
import CharCard from '../../pages/MyProfile/CharCard'
import '../../styles/Search.css'

function CharacterList() {
  const [chars, setChars] = useState();
  const navigate = useNavigate()

  const handleSearch = async (name) => {
    const charData = await getCharacter(name)
    navigate(`/character/${charData.id}`, { state: charData })
  }


  return (
    <>
      <h1 className='searchpage'> Search Here to Assemble Your Team </h1>
      <Form handleSearch={handleSearch} character={chars} />
    </>
  )
}

export default CharacterList;
