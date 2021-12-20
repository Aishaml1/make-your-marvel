import React, { useState } from "react";

function Form(props) {
  console.log("props in Form", props);
  const [charName, setCharName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(charName);
    setCharName("");
  };

  const handleChange = (e) => {
    const search = e.target.value;
    setCharName(search);
  };

  
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
      </form>
    </>
  );
}

export default Form;
