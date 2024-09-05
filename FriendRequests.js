import React, { useState } from 'react';
import './FriendRequests.css';

function FriendRequests() {
  const [requests, setRequests] = useState([
    { id: 1, name: 'John Smith', profilePicture: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Alice Johnson', profilePicture: 'https://via.placeholder.com/50' }
  ]);

  const handleAccept = (id) => {
    // Logic for accepting a friend request
    setRequests(requests.filter(request => request.id !== id));
    alert('Friend request accepted!');
  };

  const handleDecline = (id) => {
    // Logic for declining a friend request
    setRequests(requests.filter(request => request.id !== id));
    alert('Friend request declined!');
  };

  return (
    <div className="friend-requests-container">
      <h2>Friend Requests</h2>
      {requests.length > 0 ? (
        requests.map(request => (
          <div key={request.id} className="friend-request">
            <img src={request.profilePicture} alt="Profile" className="profile-picture" />
            <span>{request.name}</span>
            <div className="friend-request-actions">
              <button className="accept-btn" onClick={() => handleAccept(request.id)}>Accept</button>
              <button className="decline-btn" onClick={() => handleDecline(request.id)}>Decline</button>
            </div>
          </div>
        ))
      ) : (
        <p>No new friend requests.</p>
      )}
    </div>
  );
}

export default FriendRequests;
