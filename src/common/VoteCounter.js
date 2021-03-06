import React, { Fragment } from "react";
import ButtonWithImage from "./buttonWithImage/ButtonWithImage";
import arrowUp from "../images/arrowUp.png";
import arrowDown from "../images/arrowDown.png";

function VoteCounter({ likes, dislikes, onUpvote, downUpvote }) {
  return (
    <Fragment>
      <ButtonWithImage
        onClick={onUpvote}
        image={arrowUp}
        alt={`${likes} people liked this comment. Click to like.`}
        label={likes}
      />
      <ButtonWithImage
        onClick={downUpvote}
        image={arrowDown}
        alt={`${dislikes} people disliked this comment. Click to dislike.`}
        label={dislikes}
      />
    </Fragment>
  );
}

export default VoteCounter;
