import React, { useState } from "react";
import "./App.css";
import AddThoughtForm from "./AddThoughtForm";
import Thought from "./Thought";
import { generateId, getNewExpirationTime } from "./utilities";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((prevThought) => {
      return [thought, ...prevThought];
    });
  };

  const removeThought = (removeThoughtId) => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== removeThoughtId)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm thought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
