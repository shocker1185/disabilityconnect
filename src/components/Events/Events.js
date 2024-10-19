import React, { useState, useEffect } from 'react';

/* 
  Events Component:
  Purpose: 
  - Allows users to create, view, and manage events they are hosting or attending.
  
  Common Functions to Add:
  - fetchEvents() -> Retrieves the list of events the user is attending or hosting.
  - createEvent() -> Allows users to create a new event.

  Suggestions:
  - Add calendar view to display events.
  - Allow users to RSVP for events directly from the list or calendar.
*/

const Events = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });

  useEffect(() => {
    // Placeholder function to simulate fetching events
    const fetchEvents = () => {
      setEvents([
        { id: 1, title: 'Therapy Session', date: '2024-11-02', description: 'Group therapy for parents.' },
        { id: 2, title: 'Social Gathering', date: '2024-11-10', description: 'Meetup for children with disabilities.' }
      ]);
    };

    fetchEvents();
  }, []);

  const createEvent = () => {
    console.log('Creating event:', newEvent);
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({ title: '', date: '', description: '' });
    // Implement logic to save the new event to Firebase
  };

  return (
    <div className='events-container'>
      <h2>Your Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <p><strong>{event.title}</strong></p>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>

      <div className='create-event'>
        <h3>Create a New Event</h3>
        <input 
          type='text' 
          placeholder='Event Title' 
          value={newEvent.title} 
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} 
        />
        <input 
          type='date' 
          value={newEvent.date} 
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} 
        />
        <textarea 
          placeholder='Event Description' 
          value={newEvent.description} 
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} 
        />
        <button onClick={createEvent}>Create Event</button>
      </div>
    </div>
  );
};

export default Events;
