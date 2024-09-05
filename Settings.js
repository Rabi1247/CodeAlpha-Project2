import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [privacy, setPrivacy] = useState('Public');
  const [notifications, setNotifications] = useState(true);

  const handlePrivacyChange = (e) => {
    setPrivacy(e.target.value);
  };

  const handleNotificationsChange = (e) => {
    setNotifications(e.target.checked);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form>
        <div className="form-group">
          <label htmlFor="privacy">Privacy Settings</label>
          <select value={privacy} onChange={handlePrivacyChange} id="privacy">
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Friends Only">Friends Only</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notifications">Enable Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationsChange}
            id="notifications"
          />
        </div>

        <button type="submit" className="save-btn">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
