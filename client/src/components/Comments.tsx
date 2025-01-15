import React from "react";

interface Comment {
    status:string;
    content:string;
    id:string;
}
interface CommentProps {
   comments : Comment[]
}

const Comments: React.FC<CommentProps> = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    return <li key={comment.id} className="text-sm">{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default Comments;
