
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
