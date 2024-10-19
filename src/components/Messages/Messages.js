import React, { useState, useEffect } from 'react';

/* 
  Messages Component:
  Purpose: 
  - Allows users to send and receive messages with their friends.
  
  Common Functions to Add:
  - fetchMessages() -> Retrieves message history between the user and their friends.
  - sendMessage() -> Sends a new message to a friend.

  Suggestions:
  - Implement real-time message updates using Firebase or WebSockets.
  - Include read receipts and timestamps for messages.
*/

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Placeholder function to simulate fetching messages
    const fetchMessages = () => {
      setMessages([
        { id: 1, from: 'John Doe', content: 'Hey, how are you?', timestamp: '2024-10-20 10:00' },
        { id: 2, from: 'Jane Smith', content: 'Are you coming to the event?', timestamp: '2024-10-20 10:05' }
      ]);
    };

    fetchMessages();
  }, []);

  const sendMessage = () => {
    console.log('New message:', newMessage);
    // Implement logic to send message to Firebase
    setNewMessage('');
  };

  return (
    <div className='messages-container'>
      <h2>Messages</h2>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <p><strong>{message.from}</strong>: {message.content}</p>
            <small>{message.timestamp}</small>
          </li>
        ))}
      </ul>

      <div className='message-input'>
        <input 
          type='text' 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder='Type your message here...'
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
