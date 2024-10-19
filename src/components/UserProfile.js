import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../firebase/firebaseConfig';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Button, TextField, Box, Typography } from '@mui/material';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState('');

  useEffect(() => {
    // Fetch the logged-in user's data from Firestore
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setName(userData.name || '');
          setBio(userData.bio || '');
          setProfilePicUrl(userData.profilePicUrl || '');
        }
      }
    };
    fetchUserData();
  }, []);

  const handleProfileUpdate = async () => {
    if (user) {
      const userData = {
        name,
        bio,
        profilePicUrl
      };
      await setDoc(doc(db, "users", user.uid), userData);
      alert('Profile updated successfully!');
    }
  };

  const handleProfilePicUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `profile-pictures/${user.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setProfilePicUrl(downloadURL);
      alert('Profile picture uploaded successfully!');
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">Edit Profile</Typography>

      <Box sx={{ marginTop: '20px' }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{ marginBottom: '10px' }}
        />
        <TextField
          label="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          fullWidth
          multiline
          rows={3}
          sx={{ marginBottom: '10px' }}
        />

        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant="h6">Profile Picture</Typography>
          {profilePicUrl && (
            <img src={profilePicUrl} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          )}
          <input type="file" onChange={handleProfilePicUpload} />
        </Box>

        <Button variant="contained" onClick={handleProfileUpdate}>Save Profile</Button>
      </Box>
    </Box>
  );
}

export default UserProfile;
