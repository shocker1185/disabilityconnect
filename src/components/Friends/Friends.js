import React, { useState } from 'react';

/* 
  Friends Component:
  Purpose:
  - Allows users to view and manage their list of friends.
  - Future improvements: Add ability to send/accept friend requests, remove friends, and view friend profiles.

  Common Functions to Add:
  - fetchFriends() -> Pulls the user's friend list from Firestore.
  - sendFriendRequest() -> Allows users to send a friend request.
  - removeFriend() -> Removes a friend from the list.
  - acceptFriendRequest() -> Accepts a pending friend request.
*/

const Friends = () => {
  const [friends, setFriends] = useState([]);

  // Placeholder function to simulate fetching friends list
  const fetchFriends = () => {
    setFriends([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ]);
  };

  // When the component mounts, fetch friends list
  useState(() => {
    fetchFriends();
  }, []);

  return (
    <div className='friends-container'>
      <h2>Your Friends</h2>
      {/* Display the list of friends */}
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            {friend.name}
            {/* Future feature: Add buttons for removing or messaging friends */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
