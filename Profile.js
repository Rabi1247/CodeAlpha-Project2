import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [user] = useState({
    name: 'Rabiya Ibadat',
    profilePicture: 'https://via.placeholder.com/150',
    bio: 'Web developer and tech enthusiast. Loves coding and building cool apps.',
    posts: 120,
    followers: 300,
    following: 180
  });

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>

      <div className="profile-stats">
        <div>
          <strong>{user.posts}</strong> Posts
        </div>
        <div>
          <strong>{user.followers}</strong> Followers
        </div>
        <div>
          <strong>{user.following}</strong> Following
        </div>
      </div>

      <div className="profile-footer">
        <button className="follow-btn">Follow</button>
        <button className="message-btn">Message</button>
      </div>
    </div>
  );
}

export default Profile;
