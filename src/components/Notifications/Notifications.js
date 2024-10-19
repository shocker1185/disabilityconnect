import React, { useState, useEffect } from 'react';

/* 
  Notifications Component:
  Purpose: 
  - Displays user notifications for messages, friend requests, event reminders, etc.
  
  Common Functions to Add:
  - fetchNotifications() -> Fetches notifications for the current user from Firestore.
  - markAsRead() -> Marks notifications as read when clicked.

  Suggestions:
  - Implement real-time notifications using Firebase or a socket-based solution.
  - Group notifications by type (e.g., messages, events, friend requests).
*/

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching notifications
    const fetchNotifications = () => {
      setNotifications([
        { id: 1, type: 'message', content: 'You have a new message from Jane.', read: false },
        { id: 2, type: 'event', content: 'Your event "Therapy Session" is tomorrow.', read: false },
        { id: 3, type: 'friend_request', content: 'John has sent you a friend request.', read: true }
      ]);
    };
    
    fetchNotifications();
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  return (
    <div className='notifications-container'>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notif => (
          <li 
            key={notif.id} 
            className={notif.read ? 'read' : 'unread'} 
            onClick={() => markAsRead(notif.id)}
          >
            {notif.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
