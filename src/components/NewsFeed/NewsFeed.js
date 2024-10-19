import React, { useState, useEffect } from 'react';

/* 
  NewsFeed Component:
  Purpose: 
  - Displays blog-style news posts from admin or other content creators, which users can read and interact with.
  
  Common Functions to Add:
  - fetchNewsPosts() -> Retrieves news posts from Firebase/Firestore.
  - likePost() -> Allows users to like a post.
  - commentOnPost() -> Allows users to comment on a post.

  Suggestions:
  - Include share options for users to share posts.
  - Add the ability to filter or sort posts by date, popularity, or category.
*/

const NewsFeed = () => {
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    // Placeholder function to simulate fetching news posts
    const fetchNewsPosts = () => {
      setNewsPosts([
        { id: 1, title: 'Platform Updates', content: 'We’ve added new features!', likes: 10, comments: [] },
        { id: 2, title: 'Community Spotlight', content: 'Meet our members of the month!', likes: 5, comments: [] }
      ]);
    };

    fetchNewsPosts();
  }, []);

  const likePost = (postId) => {
    console.log('Liked post:', postId);
    // Implement logic to like the post in Firebase
  };

  const commentOnPost = (postId, comment) => {
    console.log('Comment on post:', postId, comment);
    // Implement logic to comment on the post in Firebase
  };

  return (
    <div className='news-feed-container'>
      <h2>News Feed</h2>
      <ul>
        {newsPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => likePost(post.id)}>Like ({post.likes})</button>
            <div className='comment-section'>
              <input 
                type='text' 
                placeholder='Leave a comment' 
                onKeyPress={(e) => {
                  if (e.key === 'Enter') commentOnPost(post.id, e.target.value);
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
