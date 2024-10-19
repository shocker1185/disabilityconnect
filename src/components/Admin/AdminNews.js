import React, { useState } from 'react';

/* 
  AdminNews Component:
  Allows admins to post news and updates to the platform.
*/
const AdminNews = () => {
  const [news, setNews] = useState('');

  const handlePostNews = () => {
    console.log('News posted:', news);
    // Logic for posting news (e.g., Firestore)
  };

  return (
    <div className='admin-news'>
      <h2>Post News</h2>
      <textarea 
        value={news}
        onChange={(e) => setNews(e.target.value)}
        placeholder='Write your news here...'
      />
      <button onClick={handlePostNews}>Post News</button>
    </div>
  );
};

export default AdminNews;
