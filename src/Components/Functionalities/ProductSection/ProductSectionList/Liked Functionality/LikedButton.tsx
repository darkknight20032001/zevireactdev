import React from "react";
import "./LikedButton.sass";
const LikedButton: React.FC<{
  liked: Boolean;
  setLiked: (likedFunc: Boolean) => void;
}> = ({ liked, setLiked }) => {
  return (
    <div
      className={liked ? `Like` : `Dislike`}
      onClick={(e) => {
        e.preventDefault();
        setLiked(!liked);
      }}
    ></div>
  );
};

export default LikedButton;
