import React, { useState, useEffect } from 'react'
import Form from './CharacterForm'
import { getCharacter } from '../../services/characterService'
import CharacterCard from './CharacterCard'

function CharacterList() {
  const [chars, setChars] = useState([])
  
  useEffect(() => {
    const fetchAllChar = async () => {
      const charData = await getCharacter()
      setChars(charData.data.results)
      console.log("api data", charData.data.results)
    }
    fetchAllChar()
    return () => { setChars([]) }
  }, [])
   console.log(chars)
  return (
    <>
      <h1> Search Character Page </h1>
      <Form chars={chars}/>
      {chars.map((character) =>(
        <CharacterCard 
          character={character}
          key={character.id}
        />
      ))}
    </>
  )
}

export default CharacterList
