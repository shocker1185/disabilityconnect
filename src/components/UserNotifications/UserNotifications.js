import React, { useState, useEffect } from 'react';

/* 
  UserNotifications Component:
  Purpose: 
  - Displays notifications for the user about messages, events, friend requests, and other updates.
  
  Common Functions to Add:
  - fetchNotifications() -> Retrieves notifications from Firebase/Firestore.
  - markNotificationAsRead() -> Marks notifications as read.
*/

const UserNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = () => {
      setNotifications([
        { id: 1, type: 'message', content: 'New message from Jane', isRead: false },
        { id: 2, type: 'event', content: 'Upcoming event tomorrow', isRead: false },
        { id: 3, type: 'friend', content: 'John sent you a friend request', isRead: true }
      ]);
    };

    fetchNotifications();
  }, []);

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  return (
    <div className='notifications'>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li 
            key={notification.id} 
            className={notification.isRead ? 'read' : 'unread'}
            onClick={() => markNotificationAsRead(notification.id)}
          >
            {notification.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserNotifications;
