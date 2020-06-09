import React, { Fragment, useState } from "react";
import VoteCounter from "../common/VoteCounter";
import ButtonWithData from "../common/ButtonWithData";
import Button from "../common/Button";
import "./comment.scss";
import { getTime } from "./utils";

function Comment({ comment }) {
  const [upvotes, upvote] = useState(comment.numberOfUpvotes);
  const [downvotes, downvote] = useState(comment.numberOfDownvotes);
  const [replyBoxVisible, toggleReply] = useState(false);
  const [repliesVisible, toggleReplies] = useState(false);

  function handleReplyClick(e) {
    toggleReply(!replyBoxVisible);
    toggleReplies(false);
  }

  function handleRepliesClick(e) {
    toggleReply(false);
    toggleReplies(!repliesVisible);
  }

  function handleUpvoteClick() {
    upvote(upvotes + 1);
  }

  function handleDownvoteClick() {
    downvote(downvotes + 1);
  }

  return (
    <Fragment>
      <div className="comment">
        <div className="comment__left">
          <img className="comment__image" src={comment.userPhoto} alt=""></img>
        </div>
        <div className="comment__right">
          <div className="comment__author-data">
            <div className="comment__username">{comment.userName}</div>
            <div className="comment__user-group">{comment.userGroup}</div>
            <div className="comment__middle-dot">&middot;</div>
            <div className="comment__time">{getTime(comment.time)}</div>
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
      {replyBoxVisible && <div className="comment__reply">Reply here</div>}
      {repliesVisible && <div className="comment__replies">Replies</div>}
    </Fragment>
  );
}

export default Comment;
