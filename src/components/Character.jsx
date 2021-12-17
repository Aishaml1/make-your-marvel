import React from 'react'
import Form from './Form'

function Character({ character }) {

  return (
    <>
      <div>
        <h1>Name: {character.data.results[0].name}</h1>
        <img src={`${character.data.results[0].thumbnail.path}.${character.data.results[0].thumbnail.extension}`} alt=""/>
        <div> Description: {character.data.results[0].description}</div>
        <div>Comic Name: {character.data.results[0].comics.items.slice(0).name}</div>
        </div>
        <Form />
    </>
  )
}

export default Character
