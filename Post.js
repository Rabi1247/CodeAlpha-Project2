import React, { useState } from 'react';
import Comments from './Comments';
import './Post.css';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <p>{post.text}</p>
      <button onClick={handleLike}>Like ({likes})</button>
      <Comments comments={post.comments} />
    </div>
  );
}

export default Post;
