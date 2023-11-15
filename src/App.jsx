import Joke from "./components/Joke";
import JokeForm from "./components/JokeForm";
import { useState } from "react";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [dadJokes, setDadJokes] = useState([
    {
      joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    },
    {
      joke: "I used to play piano by ear, but now I use my hands and fingers.",
    },
  ]);

  const capitalizeFirstLetter = (text) => {
    const formattedNewJoke = text.charAt(0).toUpperCase() + text.slice(1);
    return formattedNewJoke;
  };

  const handleNewJoke = (newJoke) => {
    const isValid = newJoke.length >= 10;
    const joke = { joke: capitalizeFirstLetter(newJoke) };
    if (isValid) {
      setDadJokes([...dadJokes, joke]);
    } else return;
  };

  const handleRemoveJoke = (index) => {
    const updatedJokes = dadJokes.filter((_, i) => i !== index);
    setDadJokes(updatedJokes);
  };

  return (
    <div className="App container py-10 md:py-[60px] lg:py-20">
      <div className="flex flex-col gap-0 text-center max-w-[600px] mx-auto w-full">
        <h1 className="heading-1 mb-12 lg:mb-16">Dad Jokes</h1>
        <div className="mb-8 md:mb-12">
          <JokeForm onNewJoke={handleNewJoke} />
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          {dadJokes.map((joke, index) => {
            return (
              <Joke
                joke={joke.joke}
                key={index}
                favorite={activeIndex === index}
                onFavorite={() => setActiveIndex(index)}
                onRemove={() => handleRemoveJoke(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
