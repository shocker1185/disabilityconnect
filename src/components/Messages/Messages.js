import React, { useState } from 'react';

/* 
  Messages Component:
  Purpose: 
  - Displays a messaging interface for users to chat with each other.
  - Future improvements: Allow real-time messaging using Firebase Realtime Database or Firestore.
  
  Common Functions to Add:
  - fetchMessages() -> Fetch messages between two users from Firestore.
  - sendMessage() -> Allows users to send new messages to each other.
  - deleteMessage() -> Enables users to delete individual messages.

  Tips:
  - Consider using websockets or Firebase's real-time database for live messaging.
  - Format timestamps properly, and group messages by date or time.
*/

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Placeholder function to simulate fetching messages
  const fetchMessages = () => {
    setMessages([
      { id: 1, sender: 'John', content: 'Hey, how are you?', timestamp: '10:30 AM' },
      { id: 2, sender: 'Jane', content: 'Doing well, thanks!', timestamp: '10:31 AM' }
    ]);
  };

  // Simulate sending a message
  const sendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { id: Date.now(), sender: 'Me', content: newMessage, timestamp: '10:35 AM' }]);
      setNewMessage(''); // Clear input after sending
    }
  };

  // When the component mounts, fetch messages
  useState(() => {
    fetchMessages();
  }, []);

  return (
    <div className='messages-container'>
      <h2>Messages</h2>
      {/* Display existing messages */}
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <strong>{message.sender}</strong>: {message.content} <small>({message.timestamp})</small>
          </li>
        ))}
      </ul>

      {/* Input for new messages */}
      <input 
        type='text' 
        value={newMessage} 
        onChange={(e) => setNewMessage(e.target.value)} 
        placeholder='Type your message here...' 
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Messages;
