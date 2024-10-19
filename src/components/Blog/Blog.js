import React from 'react';

/* 
  Blog Component:
  Displays a list of blog posts published by admins.
*/
const Blog = ({ posts }) => {
  return (
    <div className='blog-container'>
      <h2>Admin Blog</h2>
      <div className='blog-posts'>
        {posts.map((post, index) => (
          <div key={index} className='blog-post'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>Posted on: {post.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
