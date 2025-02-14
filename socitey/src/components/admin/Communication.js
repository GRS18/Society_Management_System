// import React from 'react';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import '../admin/css/communication.css';
// export default function Communication() {

//   const [tab, setTab] = useState("announcements"); 
//   const [announcements, setAnnouncements] = useState([
//     {
//       title: "Maintenance Alert",
//       message: "Water supply will be disrupted on Nov 30, 2024, from 9 AM to 3 PM.",
//       type: "info",
//     },
//     {
//       title: "Community Event",
//       message: "Join us for the annual holiday party on Dec 15, 2024.",
//       type: "success",
//     },
//   ]);

//   const [messages, setMessages] = useState([
//     {
//       recipient: "Admin",
//       message: "Can we extend the pool hours during the holiday season?",
//       type: "sent",
//       date: "Nov 27, 2024",
//     },
//     {
//       recipient: "Maintenance Team",
//       message: "The plumbing issue in Block B has been resolved.",
//       type: "received",
//       date: "Nov 26, 2024",
//     },
//   ]);

//   const [announcementForm, setAnnouncementForm] = useState({
//     title: "",
//     message: "",
//   });

//   const [messageForm, setMessageForm] = useState({
//     recipient: "admin",
//     message: "",
//   });

  
//   const handleAnnouncementSubmit = (e) => {
//     e.preventDefault();
//     setAnnouncements([
//       ...announcements,
//       { title: announcementForm.title, message: announcementForm.message, type: "primary" },
//     ]);
//     setAnnouncementForm({ title: "", message: "" });
//   };

  
//   const handleMessageSubmit = (e) => {
//     e.preventDefault();
//     setMessages([
//       ...messages,
//       {
//         recipient: messageForm.recipient,
//         message: messageForm.message,
//         type: "sent",
//         date: new Date().toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//         }),
//       },
//     ]);
//     setMessageForm({ recipient: "admin", message: "" });
//   };

//   return (
//     <div className="container mt-4 admin-back text-center">
//       <h1 className="mb-4">Communication</h1>
//       <ul class="breadcrumb list-inline mt-2">
//               <li class="list-inline-item">
//                 <Link to="/admin" class="text-secondary text-decoration-none">Home</Link>
//               </li>
//               <li class="list-inline-item text-secondary">
//                 &rarr;
//               </li>
//               <li class="list-inline-item text-dark">
//                 Communication
//               </li>
//             </ul>
//       <ul className="nav nav-tabs " id="communicationTabs" role="tablist">
//         <li className="nav-item">
//           <button
//             className={ `nav-link comm ${tab === "announcements" ? "active" : ""}`}
//             onClick={() => setTab("announcements")}
//           >
//            <strong>Announcements</strong>
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link comm ${tab === "messaging" ? "active" : ""}`}
//             onClick={() => setTab("messaging")}
//           >
//             <strong>Messaging</strong>
//           </button>
//         </li>
//       </ul>

//       <div className="tab-content mt-4">
//         {tab === "announcements" && (
//           <div id="announcements" role="tabpanel">
//             <h4>Send New Announcement</h4>
//             <form onSubmit={handleAnnouncementSubmit}>
//               <div className="form-group">
//                 <label htmlFor="announcementTitle">Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="announcementTitle"
//                   value={announcementForm.title}
//                   onChange={(e) => setAnnouncementForm({ ...announcementForm, title: e.target.value })}
//                   placeholder="Enter title"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="announcementMessage">Message</label>
//                 <textarea
//                   className="form-control"
//                   id="announcementMessage"
//                   value={announcementForm.message}
//                   onChange={(e) => setAnnouncementForm({ ...announcementForm, message: e.target.value })}
//                   rows="4"
//                   placeholder="Enter message"
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Send Announcement
//               </button>
//             </form>
//             <hr />
//             <h4>Recent Announcements</h4>
//             <div id="announcementList">
//               {announcements.map((announcement, index) => (
//                 <div key={index} className={`alert alert-${announcement.type}`} role="alert">
//                   <strong>{announcement.title}:</strong> {announcement.message}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {tab === "messaging" && (
//           <div id="messaging" role="tabpanel">
//             <h4>Direct Messaging</h4>
//             <form onSubmit={handleMessageSubmit}>
//               <div className="form-group">
//                 <label htmlFor="recipient">Recipient</label>
//                 <select
//                   className="form-control"
//                   id="recipient"
//                   value={messageForm.recipient}
//                   onChange={(e) => setMessageForm({ ...messageForm, recipient: e.target.value })}
//                 >
//                   <option value="admin">Admin</option>
//                   <option value="maintenance">Maintenance Team</option>
//                   <option value="security">Security Team</option>
//                   <option value="all">All Residents</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="messageText">Message</label>
//                 <textarea
//                   className="form-control"
//                   id="messageText"
//                   value={messageForm.message}
//                   onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
//                   rows="4"
//                   placeholder="Enter your message"
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Send Message
//               </button>
//             </form>
//             <hr />
//             <h4>Message History</h4>
//             <div id="messageHistory">
//               {messages.map((msg, index) => (
//                 <div key={index} className="media mb-3">
//                   <div className="media-body">
//                     <h6>{msg.type === "sent" ? `To ${msg.recipient}:` : `From ${msg.recipient}:`}</h6>
//                     <p>
//                       {msg.message} - <small><i>Sent {msg.date}</i></small>
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );


// }








// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Import axios for API calls
// import "../admin/css/communication.css";

// export default function Communication() {
//   const [tab, setTab] = useState("announcements");
//   const [messages, setMessages] = useState([]);

//   const [messageForm, setMessageForm] = useState({
//     subject: "",
//     messagecontent: "",
//     recipient: "ALL_RESIDENTS",
//   });

//   // API Base URL (replace with actual API endpoint)
//   const API_BASE_URL = "http://localhost:8089/residentCommunication/add";

//   // Handle Message Submission
//   const handleMessageSubmit = async (e) => {
//     e.preventDefault();

//     const newMessage = {
//       subject: messageForm.subject,
//       messagecontent: messageForm.messagecontent,
//       recipient: messageForm.recipient,
//       // sender_id: "YOUR_USER_ID", // Replace with actual sender ID
//       posted_on: new Date().toISOString(),
//     };

//     try {
//       const response = await axios.post(API_BASE_URL, newMessage, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.status === 201) {
//         setMessages([...messages, response.data]); // Add new message to list
//         setMessageForm({ subject: "", messagecontent: "", recipient: "ALL_RESIDENTS" });
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   return (
//     <div className="container mt-4 admin-back text-center">
//       <h1 className="mb-4">Communication</h1>
//       <ul className="breadcrumb list-inline mt-2">
//         <li className="list-inline-item">
//           <Link to="/admin" className="text-secondary text-decoration-none">Home</Link>
//         </li>
//         <li className="list-inline-item text-secondary">&rarr;</li>
//         <li className="list-inline-item text-dark">Communication</li>
//       </ul>

//       <ul className="nav nav-tabs" id="communicationTabs" role="tablist">
//         <li className="nav-item">
//           <button
//             className={`nav-link comm ${tab === "messaging" ? "active" : ""}`}
//             onClick={() => setTab("messaging")}
//           >
//             <strong>Messaging</strong>
//           </button>
//         </li>
//       </ul>

//       <div className="tab-content mt-4">
//         {tab === "messaging" && (
//           <div id="messaging" role="tabpanel">
//             <h4>Direct Messaging</h4>
//             <form onSubmit={handleMessageSubmit}>
//               <div className="form-group">
//                 <label htmlFor="subject">Subject</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="subject"
//                   value={messageForm.subject}
//                   onChange={(e) => setMessageForm({ ...messageForm, subject: e.target.value })}
//                   placeholder="Enter subject"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="recipient">Recipient</label>
//                 <select
//                   className="form-control"
//                   id="recipient"
//                   value={messageForm.recipient}
//                   onChange={(e) => setMessageForm({ ...messageForm, recipient: e.target.value })}
//                 >
//                   <option value="ALL_RESIDENTS">All Residents</option>
//                   <option value="MANAGEMENT">Management</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="messageText">Message</label>
//                 <textarea
//                   className="form-control"
//                   id="messageText"
//                   value={messageForm.message_content}
//                   onChange={(e) => setMessageForm({ ...messageForm, messagecontent: e.target.value })}
//                   rows="4"
//                   placeholder="Enter your message"
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">Send Message</button>
//             </form>

//             <hr />
//             <h4>Message History</h4>
//             <div id="messageHistory">
//               {messages.map((msg, index) => (
//                 <div key={index} className="media mb-3">
//                   <div className="media-body">
//                     <h6>To {msg.recipient}:</h6>
//                     <p>{msg.messagecontent} - <small><i>Sent on {msg.posted_on}</i></small></p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import "../admin/css/communication.css";

export default function Communication() {
  const [tab, setTab] = useState("announcements");
  const [messages, setMessages] = useState([]);

  const [messageForm, setMessageForm] = useState({
    subject: "",
    messageContent: "", // ✅ Changed to match backend
    recipient: "ALL_RESIDENTS",
  });

  // API Base URL (replace with actual API endpoint)
  const API_BASE_URL = "http://localhost:8089/residentCommunication/add";

  // Handle Message Submission
  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      subject: messageForm.subject,
      messageContent: messageForm.messageContent, // ✅ Fixed property name
      recipient: messageForm.recipient,
      senderId: "YOUR_USER_ID", // ✅ Replace with actual sender ID
      postedOn: new Date().toISOString(), // ✅ Correct format
    };

    try {
      const response = await axios.post(API_BASE_URL, newMessage, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setMessages([...messages, response.data]); // Add new message to list
        setMessageForm({ subject: "", messageContent: "", recipient: "ALL_RESIDENTS" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="container mt-4 admin-back text-center">
      <h1 className="mb-4">Communication</h1>
      <ul className="breadcrumb list-inline mt-2">
        <li className="list-inline-item">
          <Link to="/admin" className="text-secondary text-decoration-none">
            Home
          </Link>
        </li>
        <li className="list-inline-item text-secondary">&rarr;</li>
        <li className="list-inline-item text-dark">Communication</li>
      </ul>

      <ul className="nav nav-tabs" id="communicationTabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link comm ${tab === "messaging" ? "active" : ""}`}
            onClick={() => setTab("messaging")}
          >
            <strong>Messaging</strong>
          </button>
        </li>
      </ul>

      <div className="tab-content mt-4">
        {tab === "messaging" && (
          <div id="messaging" role="tabpanel">
            <h4>Direct Messaging</h4>
            <form onSubmit={handleMessageSubmit}>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={messageForm.subject}
                  onChange={(e) =>
                    setMessageForm({ ...messageForm, subject: e.target.value })
                  }
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipient">Recipient</label>
                <select
                  className="form-control"
                  id="recipient"
                  value={messageForm.recipient}
                  onChange={(e) =>
                    setMessageForm({ ...messageForm, recipient: e.target.value })
                  }
                >
                  <option value="ALL_RESIDENTS">All Residents</option>
                  <option value="MANAGEMENT">Management</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="messageText">Message</label>
                <textarea
                  className="form-control"
                  id="messageText"
                  value={messageForm.messageContent} // ✅ Fixed to match state
                  onChange={(e) =>
                    setMessageForm({ ...messageForm, messageContent: e.target.value })
                  }
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
                    <h6>To {msg.recipient}:</h6>
                    <p>
                      {msg.messageContent} -{" "}
                      <small>
                        <i>Sent on {new Date(msg.postedOn).toLocaleString()}</i>
                      </small>
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
