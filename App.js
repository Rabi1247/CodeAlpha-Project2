import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Feed from './components/Feed';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import FriendRequests from './components/FriendRequests';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friend-requests" element={<FriendRequests />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

