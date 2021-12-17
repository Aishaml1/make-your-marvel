import React, { useState } from 'react';


function Form(props) {
  const [characterTitle, setCharacterTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(characterTitle)
    setCharacterTitle('')
  };
  const handleChange = e => {
    const title = e.target.value
    setCharacterTitle(title)
  };
  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="characterTitle"
          type="text"
          value={characterTitle}
          onChange={handleChange}
        />
        <input type="submit" value="Find character Info" />
        <button onClick={refreshPage}> Make API call again
        </button>
      </form>
    </>
  );
}


export default Form;
