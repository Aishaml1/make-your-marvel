import React from "react";

const QuoteCard = (props) => {
  console.log("props in QuoteCard", props)
  return (
    <>
    <p>{props.randomQuote.content}</p>
    <button>Edit Quote</button>
    </>
  )
}

export default QuoteCard