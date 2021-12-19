import React, {useState} from "react";

function Form(props) {
  const [charName, setCharName] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSearch(charName)
    setCharName('')
  };

  const handleChange = e => {
    const search =  e.target.value
    setCharName(search)
  };

  const refreshPage = () => {
    window.location.reload()
  }
  console.log("charSearch", charName)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="charName">Search:</label>
        <input
          id="charName"
          type="text"
          value={charName}
          placeholder="marvel character"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
        <button onClick={refreshPage}>Make API Call Again</button>
      </form>
    </>
  )
}

export default Form
