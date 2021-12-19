import React from 'react'


const CharacterCard = ({ character,user }) => {
  console.log(character)
  return (
    <div>
      <h1>{character.name} </h1>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
    </div>
  )
}

export default CharacterCard 