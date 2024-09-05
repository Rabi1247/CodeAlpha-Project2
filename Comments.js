import React, { useState } from 'react';
import './Comments.css';

function Comments({ comments }) {
  const [newComment, setNewComment] = useState('');
  const [allComments, setAllComments] = useState(comments);

  const handleAddComment = () => {
    setAllComments([...allComments, newComment]);
    setNewComment('');
  };

  return (
    <div className="comments">
      <h4>Comments</h4>
      {allComments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Submit</button>
    </div>
  );
}

export default Comments;
