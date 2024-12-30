import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../admin/css/setting.css';
export default function Setting() {

  const [activeTab, setActiveTab] = useState("systemSettings");

  // States for System Settings
  const [appName, setAppName] = useState("Society Management");
  const [timezone, setTimezone] = useState("GMT");
  const [language, setLanguage] = useState("English");

  // States for Communication Settings
  const [emailNotifications, setEmailNotifications] = useState("Disabled");
  const [smsNotifications, setSmsNotifications] = useState("Enabled");
  const [pushNotifications, setPushNotifications] = useState("Enabled");

  // States for Security Settings
  const [passwordPolicy, setPasswordPolicy] = useState(
    "Strong (8+ characters, symbols, and numbers)"
  );
  const [sessionTimeout, setSessionTimeout] = useState(15);
  const [twoFactorAuth, setTwoFactorAuth] = useState("Disabled");

  const handleSaveSystemSettings = (e) => {
    e.preventDefault();
    console.log("System Settings Saved:", { appName, timezone, language });
  };

  const handleSaveCommunicationSettings = (e) => {
    e.preventDefault();
    console.log("Communication Settings Saved:", {
      emailNotifications,
      smsNotifications,
      pushNotifications,
    });
  };

  const handleSaveSecuritySettings = (e) => {
    e.preventDefault();
    console.log("Security Settings Saved:", {
      passwordPolicy,
      sessionTimeout,
      twoFactorAuth,
    });
  };

  return (
    <div className="container mt-4 admin-back text-center">
      <h1 className="mb-4">Settings</h1>
      <ul class="breadcrumb list-inline mt-2">
              <li class="list-inline-item">
                <Link to="/admin" class="text-secondary text-decoration-none">Home</Link>
              </li>
              <li class="list-inline-item text-secondary">
                &rarr;
              </li>
              <li class="list-inline-item text-dark">
                Settings
              </li>
            </ul>
      {/* Tabs */}
      <ul className="nav nav-tabs" id="settingsTabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link setting ${activeTab === "systemSettings" ? "active" : ""
              }`}
            onClick={() => setActiveTab("systemSettings")}
          >
            <strong>System Settings</strong>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link setting ${activeTab === "communicationSettings" ? "active" : ""
              }`}
            onClick={() => setActiveTab("communicationSettings")}
          >
            <strong>Communication Settings</strong>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link setting ${activeTab === "securitySettings" ? "active" : ""
              }`}
            onClick={() => setActiveTab("securitySettings")}
          >
           <strong>Security Settings</strong>
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="settingsTabsContent">
        {/* System Settings Tab */}
        {activeTab === "systemSettings" && (
          <div className="tab-pane fade show active">
            <div className="mt-4">
              <h4>System Settings</h4>
              <form onSubmit={handleSaveSystemSettings}>
                <div className="form-group">
                  <label htmlFor="appName">Application Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="appName"
                    placeholder="Enter application name"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="timezone">Timezone</label>
                  <select
                    className="form-control"
                    id="timezone"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                  >
                    <option>GMT</option>
                    <option>PST</option>
                    <option>EST</option>
                    <option>IST</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="language">Default Language</label>
                  <select
                    className="form-control"
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Settings
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Communication Settings Tab */}
        {activeTab === "communicationSettings" && (
          <div className="tab-pane fade show active">
            <div className="mt-4">
              <h4>Communication Settings</h4>
              <form onSubmit={handleSaveCommunicationSettings}>
                <div className="form-group">
                  <label htmlFor="emailNotifications">Email Notifications</label>
                  <select
                    className="form-control"
                    id="emailNotifications"
                    value={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.value)}
                  >
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="smsNotifications">SMS Notifications</label>
                  <select
                    className="form-control"
                    id="smsNotifications"
                    value={smsNotifications}
                    onChange={(e) => setSmsNotifications(e.target.value)}
                  >
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="pushNotifications">Push Notifications</label>
                  <select
                    className="form-control"
                    id="pushNotifications"
                    value={pushNotifications}
                    onChange={(e) => setPushNotifications(e.target.value)}
                  >
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Communication Settings
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Security Settings Tab */}
        {activeTab === "securitySettings" && (
          <div className="tab-pane fade show active">
            <div className="mt-4">
              <h4>Security Settings</h4>
              <form onSubmit={handleSaveSecuritySettings}>
                <div className="form-group">
                  <label htmlFor="passwordPolicy">Password Policy</label>
                  <select
                    className="form-control"
                    id="passwordPolicy"
                    value={passwordPolicy}
                    onChange={(e) => setPasswordPolicy(e.target.value)}
                  >
                    <option>Strong (8+ characters, symbols, and numbers)</option>
                    <option>Medium (6+ characters and numbers)</option>
                    <option>Weak (any password)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="sessionTimeout">Session Timeout</label>
                  <input
                    type="number"
                    className="form-control"
                    id="sessionTimeout"
                    placeholder="Enter timeout in minutes"
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="2fa">Two-Factor Authentication</label>
                  <select
                    className="form-control"
                    id="2fa"
                    value={twoFactorAuth}
                    onChange={(e) => setTwoFactorAuth(e.target.value)}
                  >
                    <option>Enabled</option>
                    <option>Disabled</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Security Settings
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
