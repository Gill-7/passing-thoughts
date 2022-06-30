import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length > 0) {
      props.thought({
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      });
    }
    setText("");
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        className="input"
        value={text}
        onChange={handleChange}
      />
      <input type="submit" value="Add" className="input-btn" />
    </form>
  );
}

export default AddThoughtForm;
