import React, { useState, useEffect } from 'react';

import Post from './Post';
import './Feed.css';
import { useHref } from 'react-router-dom';

function Feed() {
  const [posts, setPosts] = useState([
    { id: 1, text: `I’m a tech-savvy and organized professional with experience in web development and freelance work, making me great at managing tasks, communicating effectively, and adapting to new challenges. I’m confident in my ability to support your team efficiently and seamlessly in a remote setting.`, likes: 2, comments: [] },
    { id: 2, text: 'Happy independence Day...Pakistan Zindabad', likes: 3, comments: [] },
  ]);

  return (
    <div className="feed">
      <h2>News Feed</h2>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
  
}

export default Feed;
