import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    socket.on('newPost', (post) => {
      setPosts([post, ...posts]);
    });
  }, [posts]);

  const addPost = () => {
    const newPost = { text: 'New Post!', likes: 0, comments: [] };
    socket.emit('addPost', newPost);
  };

  return (
    <div>
      <h2>Feed</h2>
      <button onClick={addPost}>Add Post</button>
      {/* Render posts */}
    </div>
  );
}

export default Feed;
