import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Notifications from './components/UserNotifications/UserNotifications';
import UserProfile from './components/UserProfile/UserProfile';
import UserProfileEdit from './components/UserProfileEdit/UserProfileEdit';
import Events from './components/Events/Events';
import NewsFeed from './components/NewsFeed/NewsFeed';
import FriendsList from './components/FriendsList/FriendsList';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Analytics from './components/Analytics/Analytics';
import UserControlPanel from './components/UserControlPanel/UserControlPanel';
import './App.css'; // Global styles
import AdminBlog from './components/AdminBlog/AdminBlog'; // Import the AdminBlog component




const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/friends">Friends</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/news-feed">News Feed</Link></li>
            <li><Link to="/control-panel">Control Panel</Link></li>
          </ul>
        </nav>

        {/* Page Routes */}
        <Routes>
		// Add this route to the Routes in App.js
		  <Route path="/admin-blog" element={<AdminBlog />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/edit-profile" element={<UserProfileEdit />} />
          <Route path="/events" element={<Events />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/news-feed" element={<NewsFeed />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/control-panel" element={<UserControlPanel />} />
          <Route exact path="/" element={<NewsFeed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
