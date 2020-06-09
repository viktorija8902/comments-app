import React, { useState } from "react";
import VoteCounter from "../common/VoteCounter";
import ButtonWithData from "../common/ButtonWithData";
import Button from "../common/Button";
import "./comment.scss";

function Comment({ comment }) {
  const [upvotes, upvote] = useState(comment.numberOfUpvotes);
  const [downvotes, downvote] = useState(comment.numberOfDownvotes);

  function handleReplyClick(e) {
    alert("reply clicked");
  }

  function handleRepliesClick(e) {
    alert("replies clicked");
  }

  function handleUpvoteClick() {
    upvote(upvotes + 1);
  }

  function handleDownvoteClick() {
    downvote(downvotes + 1);
  }

  return (
    <div className="comment">
      <div className="comment__left">
        <img src={comment.userPhoto} alt=""></img>
      </div>
      <div className="comment__right">
        <div className="comment__author-data">
          <b>{comment.userName}</b>
          <div>{comment.userGroup}</div>
          <div>{comment.time}</div>
        </div>
        <p className="comment__message">{comment.message}</p>
        <div className="comment__actions">
          <Button label="Reply" onClick={handleReplyClick} />
          <ButtonWithData
            data={comment.numberOfReplies}
            label={"replies"}
            onClick={handleRepliesClick}
          />
          <VoteCounter
            likes={upvotes}
            dislikes={downvotes}
            onUpvote={handleUpvoteClick}
            downUpvote={handleDownvoteClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Comment;
