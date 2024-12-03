import React from 'react';
import { Link } from 'react-router-dom';

export default function Setting() {
  return (
    <>
    <div className="container mt-4">
        <h1 className="mb-4">Settings</h1>

        <ul className="nav nav-tabs" id="settingsTabs" role="tablist">
            <li className="nav-item">
                <Link className="nav-link active" id="system-settings-tab" data-toggle="tab" to="#systemSettings" role="tab" aria-controls="systemSettings" aria-selected="true">System Settings</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" id="communication-settings-tab" data-toggle="tab" to="#communicationSettings" role="tab" aria-controls="communicationSettings" aria-selected="false">Communication Settings</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" id="security-settings-tab" data-toggle="tab" to="#securitySettings" role="tab" aria-controls="securitySettings" aria-selected="false">Security Settings</Link>
            </li>
        </ul>

       
        <div className="tab-content" id="settingsTabsContent">
            <div className="tab-pane fade show active" id="systemSettings" role="tabpanel" aria-labelledby="system-settings-tab">
                <div className="mt-4">
                    <h4>System Settings</h4>
                    <form>
                        <div className="form-group">
                            <label for="appName">Application Name</label>
                            <input type="text" className="form-control" id="appName" placeholder="Enter application name" value="Society Management"/>
                        </div>
                        <div className="form-group">
                            <label for="timezone">Timezone</label>
                            <select className="form-control" id="timezone">
                                <option selected>GMT</option>
                                <option>PST</option>
                                <option>EST</option>
                                <option>IST</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="language">Default Language</label>
                            <select className="form-control" id="language">
                                <option selected>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Settings</button>
                    </form>
                </div>
            </div>

            <div className="tab-pane fade" id="communicationSettings" role="tabpanel" aria-labelledby="communication-settings-tab">
                <div className="mt-4">
                    <h4>Communication Settings</h4>
                    <form>
                        <div className="form-group">
                            <label for="emailNotifications">Email Notifications</label>
                            <select className="form-control" id="emailNotifications">
                                <option>Enabled</option>
                                <option selected>Disabled</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="smsNotifications">SMS Notifications</label>
                            <select className="form-control" id="smsNotifications">
                                <option selected>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="pushNotifications">Push Notifications</label>
                            <select className="form-control" id="pushNotifications">
                                <option selected>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Communication Settings</button>
                    </form>
                </div>
            </div>

            <div className="tab-pane fade" id="securitySettings" role="tabpanel" aria-labelledby="security-settings-tab">
                <div className="mt-4">
                    <h4>Security Settings</h4>
                    <form>
                        <div className="form-group">
                            <label for="passwordPolicy">Password Policy</label>
                            <select className="form-control" id="passwordPolicy">
                                <option selected>Strong (8+ characters, symbols, and numbers)</option>
                                <option>Medium (6+ characters and numbers)</option>
                                <option>Weak (any password)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="sessionTimeout">Session Timeout</label>
                            <input type="number" className="form-control" id="sessionTimeout" placeholder="Enter timeout in minutes" value="15"/>
                        </div>
                        <div className="form-group">
                            <label for="2fa">Two-Factor Authentication</label>
                            <select className="form-control" id="2fa">
                                <option>Enabled</option>
                                <option selected>Disabled</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Security Settings</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
