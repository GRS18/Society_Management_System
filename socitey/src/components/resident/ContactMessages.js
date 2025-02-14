import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ContactMessages() {
  const [messages, setMessages] = useState([]);

  // Fetch messages from backend
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8089/messages/all");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
      alert("Failed to load messages. Please try again later.");
    }
  };

  // Update message status to "resolved"
  const markAsResolved = async (id) => {
    try {
      await axios.put("http://localhost:8089/messages/update/${id}", { status: "resolved" });
      fetchMessages(); // Refresh data after update
      alert("Message marked as resolved.");
    } catch (error) {
      console.error("Error updating message status:", error);
      alert("Failed to update message. Please try again.");
    }
  };

  // Delete a message
  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      await axios.delete("http://localhost:8089/messages/delete/${id}");
      setMessages(messages.filter(msg => msg.id !== id)); // Remove from UI
      alert("Message deleted successfully.");
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Failed to delete message. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="booking-header resident-back text-center">
                <h3>Customer Response</h3>     
                <ul className="breadcrumb list-inline mt-2">
                  <li className="list-inline-item">
                    <Link to="/admin" className="text-secondary text-decoration-none">Home</Link>
                  </li>
                  <li className="list-inline-item text-secondary">&rarr;</li>
                  <li className="list-inline-item text-dark">Customer Response</li>
                </ul>
              </div>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            {/* <th>ID</th> */}
            <th>Full Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Status</th>
            <th>Scheduling Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.length > 0 ? (
            messages.map((msg) => (
              <tr key={msg.id}>
                {/* <td>{msg.id}</td> */}
                <td>{msg.fullName}</td>
                <td>{msg.email}</td>
                <td>{msg.subject}</td>
                <td>{msg.message}</td>
                <td>
                  <span
                    className={
                      msg.status === "new"
                        ? "badge badge-warning"
                        : "badge badge-success"
                    }
                  >
                    {msg.status}
                  </span>
                </td>
                <td>{new Date(msg.createdAt).toLocaleString()}</td>
                <td>
                  {/* {msg.status === "new" && (
                    <button className="btn btn-success btn-sm mr-2" onClick={() => markAsResolved(msg.id)}>
                      Resolve
                    </button>
                  )} */}
                  <button className="btn btn-danger btn-sm" onClick={() => deleteMessage(msg.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No contact messages found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}