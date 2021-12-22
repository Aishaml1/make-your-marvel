import React from "react";

const QuoteCard = (props) => {

  return (
    <>
    <p>{props.randomQuote.content}</p>
    <button>Edit</button>
    </>
  )
}

export default QuoteCard