import React, { useState } from 'react';

/* 
  ControlPanel Component:
  Allows users to update settings such as privacy options, notifications, and account details.
*/
const ControlPanel = () => {
  const [privacySettings, setPrivacySettings] = useState({
    showEmail: true,
    showProfile: true,
  });

  const handleSettingsChange = (event) => {
    const { name, checked } = event.target;
    setPrivacySettings({
      ...privacySettings,
      [name]: checked,
    });
  };

  return (
    <div className='control-panel'>
      <h2>User Settings</h2>
      <div>
        <label>
          <input
            type='checkbox'
            name='showEmail'
            checked={privacySettings.showEmail}
            onChange={handleSettingsChange}
          />
          Show Email to others
        </label>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            name='showProfile'
            checked={privacySettings.showProfile}
            onChange={handleSettingsChange}
          />
          Show Profile to others
        </label>
      </div>
      <button>Save Settings</button>
    </div>
  );
};

export default ControlPanel;
