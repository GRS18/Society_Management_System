// import React from 'react';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import '../resident/css/resident_communication.css';

// export default function Resident_Communication() {

// const [formInputs, setFormInputs] = useState({
//     recipient: "",
//     subject: "",
//     messageContent: "",
//   });

//   // State to store messages (could be fetched from an API)
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       sender: "Management",
//       content: "Reminder: Maintenance charges are due by 2024-11-30. Kindly pay on time.",
//       postedOn: "2024-11-25",
//     },
//     {
//       id: 2,
//       sender: "Girish Shinde (Resident)",
//       content: "Is the clubhouse open for bookings this weekend?",
//       postedOn: "2024-11-24",
//     },
//     {
//       id: 3,
//       sender: "Management",
//       content: "The swimming pool will be closed for maintenance on 2024-11-27.",
//       postedOn: "2024-11-23",
//     },
//   ]);

//   // Handle form input changes
//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     setFormInputs((prevInputs) => ({
//       ...prevInputs,
//       [id]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validation check
//     if (!formInputs.recipient || !formInputs.subject || !formInputs.messageContent) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     // Add new message to the messages state
//     const newMessage = {
//       id: messages.length + 1,
//       sender: formInputs.recipient === "management" ? "Management" : "John Doe (Resident)",
//       content: formInputs.messageContent,
//       postedOn: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
//     };

//     setMessages((prevMessages) => [...prevMessages, newMessage]);

//     // Clear form inputs
//     setFormInputs({
//       recipient: "",
//       subject: "",
//       messageContent: "",
//     });

//     alert("Your message has been sent!");
//   };

//   return (
//     <div className="communication-section">
//       {/* Message Sending Form */}
//       <div className="communication-card">
//       <div className='resident-back text-center'>
//           <ul class="breadcrumb list-inline mt-2">
//             <li class="list-inline-item">
//               <Link to="/resident" class="text-secondary text-decoration-none">Home</Link>
//             </li>
//             <li class="list-inline-item text-secondary">
//               &rarr;
//             </li>
//             <li class="list-inline-item text-dark">
//               Resident Communication
//             </li>
//           </ul>
//         </div>
//         <h3 className="text-center">Send a Message</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="recipient">Recipient</label>
//             <select
//               className="form-control"
//               id="recipient"
//               value={formInputs.recipient}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select...</option>
//               <option value="management">Society Management</option>
//               <option value="all-residents">All Residents</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="subject">Subject</label>
//             <input
//               type="text"
//               className="form-control"
//               id="subject"
//               placeholder="Enter the subject"
//               value={formInputs.subject}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="messageContent">Message</label>
//             <textarea
//               className="form-control"
//               id="messageContent"
//               rows="4"
//               placeholder="Write your message here"
//               value={formInputs.messageContent}
//               onChange={handleInputChange}
//               required
//             ></textarea>
//           </div>

//           <button type="submit" className="btn btn-primary btn-block">
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Message Board */}
//       <div className="communication-card mt-4">
//         <h4>Message Board</h4>
//         <div className="message-board">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`message ${message.sender === "John Doe (Resident)" ? "sender" : ""}`}
//             >
//               <h6>{message.sender}</h6>
//               <p>{message.content}</p>
//               <small>Posted on: {message.postedOn}</small>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios'; // Import axios
// import '../resident/css/resident_communication.css';

// export default function Resident_Communication() {
//   const [formInputs, setFormInputs] = useState({
//     recipient: "",
//     subject: "",
//     messagecontent: "", // Match DB field name
//   });

//   const [messages, setMessages] = useState([]);

//   // API Base URLs (Replace with actual endpoints)
//   const API_BASE_URL = "http://localhost:8089/residentCommunication";
  
//   // Sample sender_id (Replace with actual user ID)
//   const senderId = "f47ac10b-58cc-4372-a567-0e02b2c3d479"; // Replace with logged-in user ID

//   // Fetch Messages from API on Component Mount
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/all`);
//         setMessages(response.data);
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     };

//     fetchMessages();
//   }, []);

//   // Handle form input changes
//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     setFormInputs((prevInputs) => ({
//       ...prevInputs,
//       [id]: value,
//     }));
//   };

//   // Handle form submission (Send Message)
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validation check
//     if (!formInputs.recipient || !formInputs.subject || !formInputs.messagecontent) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     // Construct the message object
//     const newMessage = {
//       subject: formInputs.subject,
//       messagecontent: formInputs.messagecontent,
//       recipient: formInputs.recipient === "management" ? "MANAGEMENT" : "ALL_RESIDENTS",
//       sender_id: senderId,  // Use the correct sender ID
//       posted_on: new Date().toISOString(), // Current timestamp
//     };

//     try {
//       // Send the message to the API
//       const response = await axios.post(`${API_BASE_URL}/add`, newMessage, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.status === 201) {
//         // Update message list with the new message
//         setMessages([...messages, response.data]);
//         setFormInputs({ recipient: "", subject: "", messagecontent: "" });
//         alert("Message sent successfully!");
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   return (
//     <div className="communication-section">
//       {/* Message Sending Form */}
//       <div className="communication-card">
//         <div className='resident-back text-center'>
//           <ul className="breadcrumb list-inline mt-2">
//             <li className="list-inline-item">
//               <Link to="/resident" className="text-secondary text-decoration-none">Home</Link>
//             </li>
//             <li className="list-inline-item text-secondary">
//               &rarr;
//             </li>
//             <li className="list-inline-item text-dark">
//               Resident Communication
//             </li>
//           </ul>
//         </div>
//         <h3 className="text-center">Send a Message</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="recipient">Recipient</label>
//             <select
//               className="form-control"
//               id="recipient"
//               value={formInputs.recipient}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select...</option>
//               <option value="management">Society Management</option>
//               <option value="all-residents">All Residents</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="subject">Subject</label>
//             <input
//               type="text"
//               className="form-control"
//               id="subject"
//               placeholder="Enter the subject"
//               value={formInputs.subject}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="messagecontent">Message</label>
//             <textarea
//               className="form-control"
//               id="messagecontent"
//               rows="4"
//               placeholder="Write your message here"
//               value={formInputs.messagecontent}
//               onChange={handleInputChange}
//               required
//             ></textarea>
//           </div>

//           <button type="submit" className="btn btn-primary btn-block">
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Message Board */}
//       <div className="communication-card mt-4">
//         <h4>Message Board</h4>
//         <div className="message-board">
//           {messages.map((message) => (
//             <div key={message.message_id} className={`message ${message.sender_id === senderId ? "sender" : ""}`}>
//               <h6>{message.sender_id === senderId ? "You" : "Management"}</h6>
//               <p>{message.messagecontent}</p>
//               <small>Posted on: {new Date(message.posted_on).toLocaleDateString()}</small>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

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
