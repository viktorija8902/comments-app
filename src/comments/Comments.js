import React from "react";
import Comment from "./Comment";
import "./comments.scss";

function Comments({ comments }) {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment}></Comment>
      ))}
    </div>
  );
}

export default Comments;
