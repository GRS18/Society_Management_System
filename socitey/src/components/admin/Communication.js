import React from 'react';
import { Link } from 'react-router-dom';

export default function Communication() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Society Management</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resident_management">Resident Management</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/visitor_management">Visitor Management</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/reports_analytics">Reports & Analytics</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/communication">Communication</Link>
                </li>
            </ul>
        </div>
    </nav>

    <div className="container mt-4">
        <h1 className="mb-4">Communication</h1>
        
        <ul className="nav nav-tabs" id="communicationTabs" role="tablist">
            <li className="nav-item">
                <Link className="nav-link active" id="announcements-tab" data-toggle="tab" to="" role="tab" aria-controls="announcements" aria-selected="true">Announcements</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" id="messaging-tab" data-toggle="tab" to="" role="tab" aria-controls="messaging" aria-selected="false">Messaging</Link>
            </li>
        </ul>

        <div className="tab-content" id="communicationTabsContent">
            <div className="tab-pane fade show active" id="announcements" role="tabpanel" aria-labelledby="announcements-tab">
                <div className="mt-4">
                    <h4>Send New Announcement</h4>
                    <form id="announcementForm">
                        <div className="form-group">
                            <label for="announcementTitle">Title</label>
                            <input type="text" className="form-control" id="announcementTitle" placeholder="Enter title"/>
                        </div>
                        <div className="form-group">
                            <label for="announcementMessage">Message</label>
                            <textarea className="form-control" id="announcementMessage" rows="4" placeholder="Enter message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Announcement</button>
                    </form>
                </div>
                <hr/>
                <h4>Recent Announcements</h4>
                <div id="announcementList">
                    <div className="alert alert-info" role="alert">
                        <strong>Maintenance Alert:</strong> Water supply will be disrupted on Nov 30, 2024, from 9 AM to 3 PM.
                    </div>
                    <div className="alert alert-success" role="alert">
                        <strong>Community Event:</strong> Join us for the annual holiday party on Dec 15, 2024.
                    </div>
                </div>
            </div>

            <div className="tab-pane fade" id="messaging" role="tabpanel" aria-labelledby="messaging-tab">
                <div className="mt-4">
                    <h4>Direct Messaging</h4>
                    <form id="messageForm">
                        <div className="form-group">
                            <label for="recipient">Recipient</label>
                            <select className="form-control" id="recipient">
                                <option value="admin">Admin</option>
                                <option value="maintenance">Maintenance Team</option>
                                <option value="security">Security Team</option>
                                <option value="all">All Residents</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="messageText">Message</label>
                            <textarea className="form-control" id="messageText" rows="4" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                <hr/>
                <h4>Message History</h4>
                <div id="messageHistory">
                    <div className="media mb-3">
                        <div className="media-body">
                            <h6>To Admin:</h6>
                            <p>Can we extend the pool hours during the holiday season? - <small><i>Sent Nov 27, 2024</i></small></p>
                        </div>
                    </div>
                    <div className="media mb-3">
                        <div className="media-body">
                            <h6>From Maintenance Team:</h6>
                            <p>The plumbing issue in Block B has been resolved. - <small><i>Received Nov 26, 2024</i></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  );
}
