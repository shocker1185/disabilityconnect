import React, { useState } from 'react';

/* 
  UserSettings Component:
  Purpose: 
  - Allows users to update their personal account settings such as password, notifications, and privacy.
  
  Common Functions to Add:
  - updatePassword() -> Allows users to change their password.
  - updateNotificationPreferences() -> Users can opt in or out of notifications.
  - togglePrivacy() -> Users can enable/disable privacy options like making their profile private.

  Suggestions:
  - Include confirmation messages when settings are changed.
  - Add password validation (e.g., minimum length, special characters).
*/

const UserSettings = () => {
  const [password, setPassword] = useState('');
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);

  const handleUpdate = () => {
    console.log('Password:', password);
    console.log('Notifications Enabled:', notificationEnabled);
    console.log('Profile Privacy:', isPrivate);
    // Implement logic to update user settings in Firebase
  };

  return (
    <div className='user-settings-container'>
      <h2>Account Settings</h2>

      <label>Password</label>
      <input 
        type='password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='Enter a new password'
      />

      <label>
        <input 
          type='checkbox' 
          checked={notificationEnabled} 
          onChange={() => setNotificationEnabled(!notificationEnabled)} 
        />
        Enable Notifications
      </label>

      <label>
        <input 
          type='checkbox' 
          checked={isPrivate} 
          onChange={() => setIsPrivate(!isPrivate)} 
        />
        Make Profile Private
      </label>

      <button onClick={handleUpdate}>Update Settings</button>
    </div>
  );
};

export default UserSettings;
