import React from 'react';
import { useState } from 'react';

export default function Setting() {
//   return (
//     <>
//     <div className="container mt-4">
//         <h1 className="mb-4">Settings</h1>

//         <ul className="nav nav-tabs" id="settingsTabs" role="tablist">
//             <li className="nav-item">
//                 <Link className="nav-link active" id="system-settings-tab" data-toggle="tab" to="#systemSettings" role="tab" aria-controls="systemSettings" aria-selected="true">System Settings</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" id="communication-settings-tab" data-toggle="tab" to="#communicationSettings" role="tab" aria-controls="communicationSettings" aria-selected="false">Communication Settings</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" id="security-settings-tab" data-toggle="tab" to="#securitySettings" role="tab" aria-controls="securitySettings" aria-selected="false">Security Settings</Link>
//             </li>
//         </ul>

       
//         <div className="tab-content" id="settingsTabsContent">
//             <div className="tab-pane fade show active" id="systemSettings" role="tabpanel" aria-labelledby="system-settings-tab">
//                 <div className="mt-4">
//                     <h4>System Settings</h4>
//                     <form>
//                         <div className="form-group">
//                             <label for="appName">Application Name</label>
//                             <input type="text" className="form-control" id="appName" placeholder="Enter application name" value="Society Management"/>
//                         </div>
//                         <div className="form-group">
//                             <label for="timezone">Timezone</label>
//                             <select className="form-control" id="timezone">
//                                 <option selected>GMT</option>
//                                 <option>PST</option>
//                                 <option>EST</option>
//                                 <option>IST</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label for="language">Default Language</label>
//                             <select className="form-control" id="language">
//                                 <option selected>English</option>
//                                 <option>Spanish</option>
//                                 <option>French</option>
//                                 <option>German</option>
//                             </select>
//                         </div>
//                         <button type="submit" className="btn btn-primary">Save Settings</button>
//                     </form>
//                 </div>
//             </div>

//             <div className="tab-pane fade" id="communicationSettings" role="tabpanel" aria-labelledby="communication-settings-tab">
//                 <div className="mt-4">
//                     <h4>Communication Settings</h4>
//                     <form>
//                         <div className="form-group">
//                             <label for="emailNotifications">Email Notifications</label>
//                             <select className="form-control" id="emailNotifications">
//                                 <option>Enabled</option>
//                                 <option selected>Disabled</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label for="smsNotifications">SMS Notifications</label>
//                             <select className="form-control" id="smsNotifications">
//                                 <option selected>Enabled</option>
//                                 <option>Disabled</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label for="pushNotifications">Push Notifications</label>
//                             <select className="form-control" id="pushNotifications">
//                                 <option selected>Enabled</option>
//                                 <option>Disabled</option>
//                             </select>
//                         </div>
//                         <button type="submit" className="btn btn-primary">Save Communication Settings</button>
//                     </form>
//                 </div>
//             </div>

//             <div className="tab-pane fade" id="securitySettings" role="tabpanel" aria-labelledby="security-settings-tab">
//                 <div className="mt-4">
//                     <h4>Security Settings</h4>
//                     <form>
//                         <div className="form-group">
//                             <label for="passwordPolicy">Password Policy</label>
//                             <select className="form-control" id="passwordPolicy">
//                                 <option selected>Strong (8+ characters, symbols, and numbers)</option>
//                                 <option>Medium (6+ characters and numbers)</option>
//                                 <option>Weak (any password)</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label for="sessionTimeout">Session Timeout</label>
//                             <input type="number" className="form-control" id="sessionTimeout" placeholder="Enter timeout in minutes" value="15"/>
//                         </div>
//                         <div className="form-group">
//                             <label for="2fa">Two-Factor Authentication</label>
//                             <select className="form-control" id="2fa">
//                                 <option>Enabled</option>
//                                 <option selected>Disabled</option>
//                             </select>
//                         </div>
//                         <button type="submit" className="btn btn-primary">Save Security Settings</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   );

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
    <div className="container mt-4">
      <h1 className="mb-4">Settings</h1>

      {/* Tabs */}
      <ul className="nav nav-tabs" id="settingsTabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "systemSettings" ? "active" : ""
            }`}
            onClick={() => setActiveTab("systemSettings")}
          >
            System Settings
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "communicationSettings" ? "active" : ""
            }`}
            onClick={() => setActiveTab("communicationSettings")}
          >
            Communication Settings
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "securitySettings" ? "active" : ""
            }`}
            onClick={() => setActiveTab("securitySettings")}
          >
            Security Settings
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
