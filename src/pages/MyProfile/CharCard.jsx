import react from "react";


const CharCard = ({character, addQuote}) => {
  // console.log("this is character in CharCard", character)
  
  

  return (
    
    <div>
      <p>{character.name}</p>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" height="300px" width="300px"></img>
      <input
        type="text"
        required
        name="content"
        autoComplete='off'
        placeholder='Say something!'
        // value={}
        // onChange={(e) => props.setQuestion(e.target.value)}
      />
      <button type="submit" onClick={() => addQuote(character)}>Add Quote</button>
    </div>
  )
}

export default CharCard