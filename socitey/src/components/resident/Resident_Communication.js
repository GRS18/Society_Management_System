
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../resident/css/resident_communication.css';

export default function Resident_Communication() {
  const [formInputs, setFormInputs] = useState({
    recipient: "",
    subject: "",
    messagecontent: "",
  });

  const [messages, setMessages] = useState([]);

  const API_BASE_URL = "http://localhost:8089/residentCommunication";
  const senderId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // Replace with logged-in user ID

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/all`);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formInputs.recipient || !formInputs.subject || !formInputs.messagecontent) {
      alert("Please fill out all fields.");
      return;
    }

    const newMessage = {
      subject: formInputs.subject.trim(),
      messagecontent: formInputs.messagecontent.trim(),
      recipient: formInputs.recipient === "management" ? "MANAGEMENT" : "ALL_RESIDENTS",
      sender_id: senderId,
      posted_on: new Date().toISOString(),
    };

    console.log("Sending Message Data:", newMessage); // Debugging output

    try {
      const response = await axios.post(`${API_BASE_URL}/add`, newMessage, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setMessages([...messages, response.data]);
        setFormInputs({ recipient: "", subject: "", messagecontent: "" });
        alert("Message sent successfully!");
      }
    } catch (error) {
      console.error("Error sending message:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="communication-section">
      <div className="communication-card">
        <div className='resident-back text-center'>
          <ul className="breadcrumb list-inline mt-2">
            <li className="list-inline-item">
              <Link to="/resident" className="text-secondary text-decoration-none">Home</Link>
            </li>
            <li className="list-inline-item text-secondary">&rarr;</li>
            <li className="list-inline-item text-dark">Resident Communication</li>
          </ul>
        </div>
        <h3 className="text-center">Send a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipient">Recipient</label>
            <select className="form-control" id="recipient" value={formInputs.recipient} onChange={handleInputChange} required>
              <option value="">Select...</option>
              <option value="management">Society Management</option>
              <option value="all-residents">All Residents</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Enter the subject"
              value={formInputs.subject} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="messagecontent">Message</label>
            <textarea className="form-control" id="messagecontent" rows="4" placeholder="Write your message here"
              value={formInputs.messagecontent} onChange={handleInputChange} required></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Send Message</button>
        </form>
      </div>

      <div className="communication-card mt-4">
        <h4>Message Board</h4>
        <div className="message-board">
          {messages.map((message) => (
            <div key={message.message_id} className={`message ${message.sender_id === senderId ? "sender" : ""}`}>
              <h6>{message.sender_id === senderId ? "You" : "Management"}</h6>
              <p>{message.messagecontent}</p>
              <small>Posted on: {new Date(message.posted_on).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
