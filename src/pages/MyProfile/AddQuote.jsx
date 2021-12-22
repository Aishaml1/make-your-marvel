import React, { useState } from "react";
import { addQuoteToProfile } from "../../services/characterService";

const AddQuote = ({character, updateCharacter, handleDeleteCharacter}) => {
  const [content, setContent] = useState("")

  const formData = {
    content: content,
  };

  const addQuote = async (e, id) => {
    e.preventDefault();
    try {
      const updatedChar = await addQuoteToProfile(id, formData);
      updateCharacter(updatedChar, id);
      setContent("");
    } catch (error) {
      throw error;
    }
  };

  return (
    <form onSubmit={(e) => addQuote(e, character._id)}>
      <input
        type="text"
        required
        name="content"
        autoComplete="off"
        placeholder="Say something!"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Quote</button>
    </form>  
  );
};

export default AddQuote;
