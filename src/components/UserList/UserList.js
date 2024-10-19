import React, { useState, useEffect } from 'react';

/* 
  UserList Component:
  Displays a list of users, allowing for search functionality to find specific users.
*/
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch user list from the database
    setUsers([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alex Johnson' }
    ]);
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='user-list'>
      <h2>Find Users</h2>
      <input 
        type='text' 
        placeholder='Search users' 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
