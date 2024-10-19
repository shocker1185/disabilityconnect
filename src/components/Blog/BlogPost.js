import React from 'react';

/* 
  BlogPost Component:
  Displays details of a single blog post, including the title, content, and date.
*/
const BlogPost = ({ title, content, date }) => {
  return (
    <div className='blog-post-detail'>
      <h2>{title}</h2>
      <p>{content}</p>
      <small>Posted on: {date}</small>
    </div>
  );
};

export default BlogPost;
