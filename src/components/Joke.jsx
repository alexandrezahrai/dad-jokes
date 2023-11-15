import Button from "./Button";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Joke({ joke, favorite, onFavorite, onRemove }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    const newLikes = likeCount + 1;
    setLikeCount(newLikes);
  };

  const handleDislike = () => {
    const newDislikes = likeCount - 1;
    setLikeCount(newDislikes);
  };

  return (
    <div className="flex flex-col bg-gray-800 border border-gray-700 rounded-lg shadow p-6">
      <h2 className="text-2xl font-medium tracking-tight text-gray-100 mb-4 italic">{`"${joke}"`}</h2>
      <p className="font-normal text-gray-400 mb-4">Likes: {likeCount}</p>
      <p className="font-normal text-gray-400">Favorite: {favorite ? "Yes" : "No"}</p>
      <div className="grid grid-cols-2 md:flex justify-center items-center gap-4 mt-6">
        <Button name="like button" label="👍" onClick={handleLike} />
        <Button name="dislike button" label="👎" onClick={handleDislike} />
        <Button
          name="favorite button"
          label="❤️"
          style={favorite ? "button-fav" : "button-primary"}
          onClick={onFavorite}
        />
        <Button
          name="remove joke"
          label="Remove"
          style="button-remove"
          onClick={onRemove}
        />
      </div>
    </div>
  );
}
