import React from 'react';

/* 
  PostItem Component:
  Displays a single post's content, author, and date.
*/
const PostItem = ({ content, author, date }) => {
  return (
    <div className='post-item'>
      <p>{content}</p>
      <small>Posted by {author} on {date}</small>
    </div>
  );
};

export default PostItem;
