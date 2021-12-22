import React from "react";
import { Link } from 'react-router-dom'

const QuoteCard = (props) => {

  return (
    <>
    <p>{props.randomQuote?.content}</p>
    {props.randomQuote && 
    <Link 
      to="/edit"
      state= {{
        content: props.randomQuote.content, 
        characterId: props.characterId,
        quoteId: props.randomQuote._id
      }}
    ><button>Edit Quote</button></Link>}
    </>
  )
}

export default QuoteCard