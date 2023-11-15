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
    <div className="flex flex-col p-4">
      <h2 className="heading-3 italic font-medium mb-4">{`"${joke}"`}</h2>
      <p className="heading-3 mb-4">Likes: {likeCount}</p>
      <p className="heading-3">Favorite: {favorite ? "Yes" : "No"}</p>
      <div className="flex justify-center items-center gap-4 mt-6">
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
          label="❌"
          style="button-dark"
          onClick={onRemove}
        />
      </div>
    </div>
  );
}
