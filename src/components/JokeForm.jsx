/* eslint-disable react/prop-types */
import Button from "./Button";
import { useState } from "react";

export default function JokeForm({ onNewJoke }) {
  const [newJoke, setNewJoke] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewJoke(newJoke);
    setNewJoke("");
  };
  return (
    <form
      className="flex flex-col md:flex-row gap-6 md:gap-4 w-full mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Start typing a joke..."
        value={newJoke}
        onChange={(e) => setNewJoke(e.target.value)}
      />
      <Button name="add a joke" label="Add joke" />
    </form>
  );
}
