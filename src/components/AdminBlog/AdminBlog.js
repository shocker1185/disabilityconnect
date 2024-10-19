import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'; // Import Firestore db instance
import './AdminBlog.css';

const AdminBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const blogCollection = collection(db, 'blogPosts');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map(doc => doc.data());
      setPosts(blogList);
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-container">
      <h2>Admin Blog</h2>
      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <span className="blog-date">{post.date}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminBlog;
