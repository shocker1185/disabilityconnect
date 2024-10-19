import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';

/* 
  Posts Component:
  Displays a feed of user posts.
*/
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the database (e.g., Firestore)
    setPosts([
      { id: 1, content: 'Hello World!', author: 'John Doe', date: '2024-10-18' },
      { id: 2, content: 'Another post...', author: 'Jane Doe', date: '2024-10-19' }
    ]);
  }, []);

  return (
    <div className='posts-container'>
      <h2>Posts Feed</h2>
      {posts.map(post => (
        <PostItem key={post.id} content={post.content} author={post.author} date={post.date} />
      ))}
    </div>
  );
};

export default Posts;
