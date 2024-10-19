import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../firebase/auth';  // Import Firebase functions

/* 
  UserProfile Component:
  Displays and allows the user to edit their profile information.
  Includes functionality for updating name, email, etc.
*/
const UserProfile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // Fetch user profile data on mount
    const fetchProfile = async () => {
      const data = await getUserProfile();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  const handleProfileUpdate = async () => {
    try {
      await updateUserProfile(profile);  // Update profile
      console.log('Profile updated');
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div className='profile-container'>
      <h2>User Profile</h2>
      <input 
        type='text' 
        placeholder='Name' 
        value={profile.name || ''}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })} 
      />
      <input 
        type='email' 
        placeholder='Email' 
        value={profile.email || ''}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })} 
      />
      <button onClick={handleProfileUpdate}>Save Profile</button>
    </div>
  );
};

export default UserProfile;
