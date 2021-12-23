import React from "react";
import { Link } from 'react-router-dom'
import '../../styles/CharCard.css'


const QuoteCard = (props) => {
  console.log("quotecard data", props)

  return (
    <>
    <p className='Quote' style={{border:'solid'}}>"{props.randomQuote?.content}"</p>
    {props.randomQuote && 
    <Link 
      to="/edit"
      state= {{
        content: props.randomQuote.content, 
        characterId: props.characterId,
        quoteId: props.randomQuote._id
      }}
    ><button className='editQ'>Edit Quote</button></Link>}
    </>
  )
}

export default QuoteCard