import React, { useState, useEffect } from 'react';

/* 
  FriendsList Component:
  Purpose: 
  - Displays the list of a user's friends, showing their names and profile pictures.
  
  Common Functions to Add:
  - fetchFriends() -> Retrieves the list of friends from Firebase/Firestore.
  - handleFriendClick() -> Handles clicking on a friend, potentially navigating to their profile.

  Suggestions:
  - Add the ability to search or filter friends.
  - Include placeholders for profile pictures if they don't exist yet.
*/

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Placeholder function to simulate fetching friends
    const fetchFriends = () => {
      setFriends([
        { id: 1, name: 'John Doe', profilePic: null },
        { id: 2, name: 'Jane Smith', profilePic: null },
        { id: 3, name: 'Emily Johnson', profilePic: null }
      ]);
    };

    fetchFriends();
  }, []);

  const handleFriendClick = (friendId) => {
    console.log('Clicked friend with ID:', friendId);
    // Implement navigation to friend's profile or chat
  };

  return (
    <div className='friends-list-container'>
      <h2>Your Friends</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id} onClick={() => handleFriendClick(friend.id)}>
            <img 
              src={friend.profilePic || 'default-profile-pic.png'} 
              alt={friend.name} 
              className='friend-profile-pic' 
            />
            <p>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
