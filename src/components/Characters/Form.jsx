import React, { useState } from "react";
import '../../styles/Search.css';

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
      <main className="main">
      <>
      <form onSubmit={handleSubmit}>
        <div className='search-container'>
        <label  className='searchlabel' htmlFor="charName"></label>
        <input className='search'
          id="charName"
          type="text"
          value={charName}
          placeholder="marvel character"
          onChange={handleChange}
        /></div>
        <input className='searchbtn' type="submit" value="Submit" />
      </form>
    </> </main>
  );
}

export default Form;
