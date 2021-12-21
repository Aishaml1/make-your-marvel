import react from "react";

const CharCard = ({character}) => {
  console.log("this is character", character)


  return (
    
    <div>
      <p>{character.name}</p>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" height="300px" width="300px"></img>
      <input type="text"></input>
      <button type="submit">Add Quote</button>
    </div>
  )
}

export default CharCard