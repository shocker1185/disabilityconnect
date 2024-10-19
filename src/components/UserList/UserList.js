import React, { useState, useEffect } from 'react';

/* 
  UserList Component:
  Purpose: 
  - Displays a list of users on the platform, including their names, profile pictures, and roles (e.g., admin, user).
  
  Common Functions to Add:
  - fetchUsers() -> Retrieves the list of users from Firebase/Firestore.
  - handleUserClick() -> Handles clicking on a user, potentially navigating to their profile.

  Suggestions:
  - Add filters to view users by roles or activity status.
  - Implement a search function for finding specific users.
*/

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Placeholder function to simulate fetching users
    const fetchUsers = () => {
      setUsers([
        { id: 1, name: 'John Doe', profilePic: null, role: 'User' },
        { id: 2, name: 'Jane Smith', profilePic: null, role: 'Admin' },
        { id: 3, name: 'Emily Johnson', profilePic: null, role: 'Moderator' }
      ]);
    };

    fetchUsers();
  }, []);

  const handleUserClick = (userId) => {
    console.log('Clicked user with ID:', userId);
    // Implement navigation to user's profile
  };

  return (
    <div className='user-list-container'>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            <img 
              src={user.profilePic || 'default-profile-pic.png'} 
              alt={user.name} 
              className='user-profile-pic' 
            />
            <p>{user.name} - {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
