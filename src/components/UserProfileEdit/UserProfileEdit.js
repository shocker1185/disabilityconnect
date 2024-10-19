import React, { useState } from 'react';
import './UserProfileEdit.css';

/* 
  UserProfileEdit Component:
  Purpose: 
  - Allows users to edit their profile information, including name, location, bio, and profile picture.
  
  Common Functions to Add:
  - updateProfile() -> Allows users to save updated profile information.
  - handleProfilePictureUpload() -> Handles uploading a new profile picture.

  Suggestions:
  - Add validation for inputs (e.g., ensure name and location are not empty).
  - Provide image cropping for profile pictures before uploading.
*/

const UserProfileEdit = () => {
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    bio: '',
    profilePic: ''
  });

  const updateProfile = () => {
    console.log('Updated profile:', profile);
    // Implement logic to save profile updates to Firebase
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    console.log('Uploading profile picture:', file);
    // Implement logic to handle file upload to Firebase storage
  };

  return (
    <div className='user-profile-edit-container'>
      <h2>Edit Profile</h2>

      <label>Name</label>
      <input 
        type='text' 
        value={profile.name} 
        onChange={(e) => setProfile({ ...profile, name: e.target.value })} 
        placeholder='Enter your name'
      />

      <label>Location</label>
      <input 
        type='text' 
        value={profile.location} 
        onChange={(e) => setProfile({ ...profile, location: e.target.value })} 
        placeholder='Enter your location'
      />

      <label>Bio</label>
      <textarea 
        value={profile.bio} 
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })} 
        placeholder='Write something about yourself'
      />

      <label>Profile Picture</label>
      <input type='file' onChange={handleProfilePictureUpload} />

      <button onClick={updateProfile}>Save Profile</button>
    </div>
  );
};

export default UserProfileEdit;
