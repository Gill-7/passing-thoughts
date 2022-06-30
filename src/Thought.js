import React, { useEffect } from "react";

export default function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemove = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeInterval = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);
    return () => {
      clearTimeout(timeInterval);
    };
  }, [thought, removeThought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemove}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
