import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../resident/css/resident_communication.css';

export default function Resident_Communication() {

const [formInputs, setFormInputs] = useState({
    recipient: "",
    subject: "",
    messageContent: "",
  });

  // State to store messages (could be fetched from an API)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Management",
      content: "Reminder: Maintenance charges are due by 2024-11-30. Kindly pay on time.",
      postedOn: "2024-11-25",
    },
    {
      id: 2,
      sender: "John Doe (Resident)",
      content: "Is the clubhouse open for bookings this weekend?",
      postedOn: "2024-11-24",
    },
    {
      id: 3,
      sender: "Management",
      content: "The swimming pool will be closed for maintenance on 2024-11-27.",
      postedOn: "2024-11-23",
    },
  ]);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation check
    if (!formInputs.recipient || !formInputs.subject || !formInputs.messageContent) {
      alert("Please fill out all fields.");
      return;
    }

    // Add new message to the messages state
    const newMessage = {
      id: messages.length + 1,
      sender: formInputs.recipient === "management" ? "Management" : "John Doe (Resident)",
      content: formInputs.messageContent,
      postedOn: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Clear form inputs
    setFormInputs({
      recipient: "",
      subject: "",
      messageContent: "",
    });

    alert("Your message has been sent!");
  };

  return (
    <div className="communication-section">
      {/* Message Sending Form */}
      <div className="communication-card">
      <div className='resident-back text-center'>
          <ul class="breadcrumb list-inline mt-2">
            <li class="list-inline-item">
              <Link to="/resident" class="text-secondary text-decoration-none">Home</Link>
            </li>
            <li class="list-inline-item text-secondary">
              &rarr;
            </li>
            <li class="list-inline-item text-dark">
              Resident Communication
            </li>
          </ul>
        </div>
        <h3 className="text-center">Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipient">Recipient</label>
            <select
              className="form-control"
              id="recipient"
              value={formInputs.recipient}
              onChange={handleInputChange}
              required
            >
              <option value="">Select...</option>
              <option value="management">Society Management</option>
              <option value="all-residents">All Residents</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter the subject"
              value={formInputs.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="messageContent">Message</label>
            <textarea
              className="form-control"
              id="messageContent"
              rows="4"
              placeholder="Write your message here"
              value={formInputs.messageContent}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Send Message
          </button>
        </form>
      </div>

      {/* Message Board */}
      <div className="communication-card mt-4">
        <h4>Message Board</h4>
        <div className="message-board">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === "John Doe (Resident)" ? "sender" : ""}`}
            >
              <h6>{message.sender}</h6>
              <p>{message.content}</p>
              <small>Posted on: {message.postedOn}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
