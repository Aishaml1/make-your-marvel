import React, { useState, useEffect } from 'react'
import Form from './CharacterForm'
import { getCharacter } from '../../services/characterService'

function CharacterList() {
  const [char, setChar] = useState([])
  
  useEffect(() => {
    const fetchAllChar = async () => {
      const charData = await getCharacter()
      setChar(charData)
      console.log("api data", charData)
    }
    fetchAllChar()
    return () => { setChar([]) }
  }, [])
  
  return (
    <>
      <h1> Search Character Page </h1>
      <Form char={char}/>
      <div>
        {/* <div>Name: {charData} </div> */}
        {/* <img src={`${character.data.results[0].thumbnail.path}.${character.data.results[0].thumbnail.extension}`} alt="" />
        <div> Description: {character.data.results[0].description}</div>
        <div>Comic Name: {character.data.results[0].comics.items.slice(0).name}</div> */}
      </div>
    </>
  )
}

export default CharacterList
