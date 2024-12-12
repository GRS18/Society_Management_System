import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Communication() {
//   return (
//     <>
    
//     <div className="container mt-4">
//         <h1 className="mb-4">Communication</h1>
        
//         <ul className="nav nav-tabs" id="communicationTabs" role="tablist">
//             <li className="nav-item">
//                 <Link className="nav-link active" id="announcements-tab" data-toggle="tab" to="" role="tab" aria-controls="announcements" aria-selected="true">Announcements</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" id="messaging-tab" data-toggle="tab" to="" role="tab" aria-controls="messaging" aria-selected="false">Messaging</Link>
//             </li>
//         </ul>

//         <div className="tab-content" id="communicationTabsContent">
//             <div className="tab-pane fade show active" id="announcements" role="tabpanel" aria-labelledby="announcements-tab">
//                 <div className="mt-4">
//                     <h4>Send New Announcement</h4>
//                     <form id="announcementForm">
//                         <div className="form-group">
//                             <label for="announcementTitle">Title</label>
//                             <input type="text" className="form-control" id="announcementTitle" placeholder="Enter title"/>
//                         </div>
//                         <div className="form-group">
//                             <label for="announcementMessage">Message</label>
//                             <textarea className="form-control" id="announcementMessage" rows="4" placeholder="Enter message"></textarea>
//                         </div>
//                         <button type="submit" className="btn btn-primary">Send Announcement</button>
//                     </form>
//                 </div>
//                 <hr/>
//                 <h4>Recent Announcements</h4>
//                 <div id="announcementList">
//                     <div className="alert alert-info" role="alert">
//                         <strong>Maintenance Alert:</strong> Water supply will be disrupted on Nov 30, 2024, from 9 AM to 3 PM.
//                     </div>
//                     <div className="alert alert-success" role="alert">
//                         <strong>Community Event:</strong> Join us for the annual holiday party on Dec 15, 2024.
//                     </div>
//                 </div>
//             </div>

//             <div className="tab-pane fade" id="messaging" role="tabpanel" aria-labelledby="messaging-tab">
//                 <div className="mt-4">
//                     <h4>Direct Messaging</h4>
//                     <form id="messageForm">
//                         <div className="form-group">
//                             <label for="recipient">Recipient</label>
//                             <select className="form-control" id="recipient">
//                                 <option value="admin">Admin</option>
//                                 <option value="maintenance">Maintenance Team</option>
//                                 <option value="security">Security Team</option>
//                                 <option value="all">All Residents</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label for="messageText">Message</label>
//                             <textarea className="form-control" id="messageText" rows="4" placeholder="Enter your message"></textarea>
//                         </div>
//                         <button type="submit" className="btn btn-primary">Send Message</button>
//                     </form>
//                 </div>
//                 <hr/>
//                 <h4>Message History</h4>
//                 <div id="messageHistory">
//                     <div className="media mb-3">
//                         <div className="media-body">
//                             <h6>To Admin:</h6>
//                             <p>Can we extend the pool hours during the holiday season? - <small><i>Sent Nov 27, 2024</i></small></p>
//                         </div>
//                     </div>
//                     <div className="media mb-3">
//                         <div className="media-body">
//                             <h6>From Maintenance Team:</h6>
//                             <p>The plumbing issue in Block B has been resolved. - <small><i>Received Nov 26, 2024</i></small></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//    </>
//   );



  const [tab, setTab] = useState("announcements"); 
  const [announcements, setAnnouncements] = useState([
    {
      title: "Maintenance Alert",
      message: "Water supply will be disrupted on Nov 30, 2024, from 9 AM to 3 PM.",
      type: "info",
    },
    {
      title: "Community Event",
      message: "Join us for the annual holiday party on Dec 15, 2024.",
      type: "success",
    },
  ]);

  const [messages, setMessages] = useState([
    {
      recipient: "Admin",
      message: "Can we extend the pool hours during the holiday season?",
      type: "sent",
      date: "Nov 27, 2024",
    },
    {
      recipient: "Maintenance Team",
      message: "The plumbing issue in Block B has been resolved.",
      type: "received",
      date: "Nov 26, 2024",
    },
  ]);

  const [announcementForm, setAnnouncementForm] = useState({
    title: "",
    message: "",
  });

  const [messageForm, setMessageForm] = useState({
    recipient: "admin",
    message: "",
  });

  
  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    setAnnouncements([
      ...announcements,
      { title: announcementForm.title, message: announcementForm.message, type: "primary" },
    ]);
    setAnnouncementForm({ title: "", message: "" });
  };

  
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        recipient: messageForm.recipient,
        message: messageForm.message,
        type: "sent",
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      },
    ]);
    setMessageForm({ recipient: "admin", message: "" });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Communication</h1>

      <ul className="nav nav-tabs" id="communicationTabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "announcements" ? "active" : ""}`}
            onClick={() => setTab("announcements")}
          >
            Announcements
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "messaging" ? "active" : ""}`}
            onClick={() => setTab("messaging")}
          >
            Messaging
          </button>
        </li>
      </ul>

      <div className="tab-content mt-4">
        {tab === "announcements" && (
          <div id="announcements" role="tabpanel">
            <h4>Send New Announcement</h4>
            <form onSubmit={handleAnnouncementSubmit}>
              <div className="form-group">
                <label htmlFor="announcementTitle">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="announcementTitle"
                  value={announcementForm.title}
                  onChange={(e) => setAnnouncementForm({ ...announcementForm, title: e.target.value })}
                  placeholder="Enter title"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="announcementMessage">Message</label>
                <textarea
                  className="form-control"
                  id="announcementMessage"
                  value={announcementForm.message}
                  onChange={(e) => setAnnouncementForm({ ...announcementForm, message: e.target.value })}
                  rows="4"
                  placeholder="Enter message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Announcement
              </button>
            </form>
            <hr />
            <h4>Recent Announcements</h4>
            <div id="announcementList">
              {announcements.map((announcement, index) => (
                <div key={index} className={`alert alert-${announcement.type}`} role="alert">
                  <strong>{announcement.title}:</strong> {announcement.message}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "messaging" && (
          <div id="messaging" role="tabpanel">
            <h4>Direct Messaging</h4>
            <form onSubmit={handleMessageSubmit}>
              <div className="form-group">
                <label htmlFor="recipient">Recipient</label>
                <select
                  className="form-control"
                  id="recipient"
                  value={messageForm.recipient}
                  onChange={(e) => setMessageForm({ ...messageForm, recipient: e.target.value })}
                >
                  <option value="admin">Admin</option>
                  <option value="maintenance">Maintenance Team</option>
                  <option value="security">Security Team</option>
                  <option value="all">All Residents</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="messageText">Message</label>
                <textarea
                  className="form-control"
                  id="messageText"
                  value={messageForm.message}
                  onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
            <hr />
            <h4>Message History</h4>
            <div id="messageHistory">
              {messages.map((msg, index) => (
                <div key={index} className="media mb-3">
                  <div className="media-body">
                    <h6>{msg.type === "sent" ? `To ${msg.recipient}:` : `From ${msg.recipient}:`}</h6>
                    <p>
                      {msg.message} - <small><i>Sent {msg.date}</i></small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );


}
