import React, { useState } from 'react';

/* 
  Settings Component:
  Purpose: 
  - Allows users to manage their account and privacy settings.
  
  Common Functions to Add:
  - updatePassword() -> Allows users to change their password.
  - updateEmail() -> Allows users to update their email address.
  - togglePrivacySettings() -> Users can enable/disable privacy features such as making their profile private.

  Suggestions:
  - Include options for account deletion, email updates, and privacy management.
  - Add real-time feedback (e.g., confirmation messages) when settings are changed.
*/

const Settings = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [privacy, setPrivacy] = useState(false);

  const handleUpdate = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Privacy Setting:', privacy);
    // Implement logic to update settings in Firebase
  };

  return (
    <div className='settings-container'>
      <h2>Account Settings</h2>

      <label>Email</label>
      <input 
        type='email' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder='Update your email'
      />

      <label>Password</label>
      <input 
        type='password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='Update your password'
      />

      <label>
        <input 
          type='checkbox' 
          checked={privacy} 
          onChange={() => setPrivacy(!privacy)} 
        />
        Make Profile Private
      </label>

      <button onClick={handleUpdate}>Update Settings</button>
    </div>
  );
};

export default Settings;
