import react from "react";


const CharCard = ({character, addQuote, setContent, content }) => {
  console.log("this is character in CharCard", character)
  // console.log("this is addQuote in CharCard", addQuote)
  // console.log("this is setContent in CharCard", setContent)
  
  

  return (
    
    <div>
      <form onSubmit={addQuote}>
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
          character={character}
        />
        <button type="submit">Add Quote</button>
      </form>
    </div>
  )
}

export default CharCard