import React, { useState } from "react";
import { addQuoteToProfile } from "../../services/characterService";
import QuoteCard from "./QuoteCard";

const CharCard = ({character, updateCharacter, handleDeleteCharacter}) => {
  const [content, setContent] = useState("")

  const formData = {
    content: content,
  }

  const addQuote = async(e, id) => {
    e.preventDefault()
    try {
      const updatedChar = await addQuoteToProfile(id, formData)
      updateCharacter(updatedChar, id)
      setContent("")
    } catch (error) {
      throw error
    }
  }


  const randomQuote = character.quotes[Math.floor(Math.random()*character.quotes.length)]

  return (
    <div>
      <form onSubmit={(e) => addQuote(e, character._id)}>
        <p>{character.name}</p>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" height="300px" width="300px"></img>
        <input
          type="text"
          required
          name="content"
          autoComplete='off'
          placeholder='Say something!'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Quote</button>
      </form>
      <button onClick={()=> handleDeleteCharacter(character._id)}>Delete</button>
        <QuoteCard
        randomQuote={randomQuote}
        />
        
    </div>
  )
}

export default CharCard