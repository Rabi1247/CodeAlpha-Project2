import React, { useState, useEffect } from 'react';
import './Notifications.css';

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'John liked your post.' },
    { id: 2, message: 'Alice commented on your photo.' },
    { id: 3, message: 'You have a new friend request from Mike.' }
  ]);

  useEffect(() => {
    // Simulate receiving new notifications
    const newNotification = { id: 4, message: 'Tom started following you.' };
    setTimeout(() => {
      setNotifications([...notifications, newNotification]);
    }, 5000);
  }, [notifications]);

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
