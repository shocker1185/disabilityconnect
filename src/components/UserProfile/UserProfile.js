import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase/firebaseConfig'; // Correct path to firebaseConfig
import { signOut } from 'firebase/auth'; // Import signOut method
import './UserProfile.css'; // Ensure this points to your CSS

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "No Name Set",
          email: currentUser.email,
          photoURL: currentUser.photoURL || "default-profile-pic.png",
        });
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.reload(); // Reload the page after logging out
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <img src={user.photoURL} alt="Profile" className="profile-pic" />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button>Edit Profile</button>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default UserProfile;
