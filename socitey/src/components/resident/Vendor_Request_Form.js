
// import react from 'react';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import '../resident/css/vendor_request_form.css';

// export default function Vendor_Request_Form() 
// {
//     const [requestType, setRequestType] = useState("");
//   const [description, setDescription] = useState("");
//   const [preferredDate, setPreferredDate] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!requestType || !description || !preferredDate) {
//       alert("All fields are required.");
//       return;
//     }

//     setIsSubmitting(true); // Show loading state

//     // Simulate form submission
//     setTimeout(() => {
//       alert(
//         `Service request submitted successfully!\n\nDetails:\n- Request Type: ${requestType}\n- Description: ${description}\n- Preferred Date: ${preferredDate}`
//       );

//       // Reset form fields
//       setRequestType("");
//       setDescription("");
//       setPreferredDate("");
//       setIsSubmitting(false); // Hide loading state
//     }, 1000); // Simulate a delay for submission
//   };

//   return (
//     <div className="container mt-4 form">
//       <h1>Submit a Service Request</h1>
//       <p>Use the form below to request a service or report an issue.</p>
//       <div className='resident-back text-center'>
//           <ul class="breadcrumb list-inline mt-2">
//             <li class="list-inline-item">
//               <Link to="/resident" class="text-secondary text-decoration-none">Home</Link>
//             </li>
//             <li class="list-inline-item text-secondary">
//               &rarr;
//             </li>
//             <li class="list-inline-item text-dark">
//               Maintenance Request
//             </li>
//           </ul>
//         </div>
//       <form onSubmit={handleSubmit}>
//         {/* Request Type */}
//         <div className="form-group">
//           <label htmlFor="requestType">Request Type</label>
//           <select
//             className="form-control"
//             id="requestType"
//             value={requestType}
//             onChange={(e) => setRequestType(e.target.value)}
//             required
//           >
//             <option value="">Select Request Type</option>
//             <option value="Plumbing">Plumbing</option>
//             <option value="Electrical">Electrical</option>
//             <option value="Cleaning">Cleaning</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         {/* Description */}
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             className="form-control"
//             id="description"
//             rows="4"
//             placeholder="Provide details about the issue"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>

//         {/* Preferred Date */}
//         <div className="form-group">
//           <label htmlFor="preferredDate">Preferred Date</label>
//           <input
//             type="date"
//             className="form-control"
//             id="preferredDate"
//             value={preferredDate}
//             onChange={(e) => setPreferredDate(e.target.value)}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit Request"}
//         </button>
//       </form>
//     </div>
//   );

// }








// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import '../resident/css/vendor_request_form.css';
// import { v4 as uuidv4 } from 'uuid'; // Generate UUID for requestid

// export default function Vendor_Request_Form() {
//   const [residentID, setResidentID] = useState(""); // Resident ID input field
//   const [requestType, setRequestType] = useState("");
//   const [description, setDescription] = useState("");
//   const [preferredDate, setPreferredDate] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!residentID || !requestType || !description || !preferredDate) {
//       alert("All fields are required.");
//       return;
//     }

//     setIsSubmitting(true);

//     const requestData = {
//       requestid: uuidv4(), // Generate a new UUID for requestid
//       description,
//       preferred_date: preferredDate,
//       request_type: requestType.toUpperCase(), // Ensure ENUM consistency
//       residentid: residentID, // Taken from user input
//       status: "PENDING", // Default status
//     };

//     try {
//       const response = await axios.post("http://localhost:8089/vendorrequest/add", requestData);

//       alert(`Service request submitted successfully!\n\nDetails:\n- Request ID: ${response.data.requestid}\n- Request Type: ${response.data.request_type}\n- Description: ${response.data.description}\n- Preferred Date: ${response.data.preferred_date}\n- Status: ${response.data.status}`);

//       // Reset form fields
//       setResidentID("");
//       setRequestType("");
//       setDescription("");
//       setPreferredDate("");
//     } catch (error) {
//       console.error("Error submitting request:", error);
//       alert("Failed to submit the request. Please try again.");
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <div className="container mt-4 form">
//       <h1>Submit a Service Request</h1>
//       <p>Use the form below to request a service or report an issue.</p>

//       <div className='resident-back text-center'>
//         <ul className="breadcrumb list-inline mt-2">
//           <li className="list-inline-item">
//             <Link to="/resident" className="text-secondary text-decoration-none">Home</Link>
//           </li>
//           <li className="list-inline-item text-secondary">
//             &rarr;
//           </li>
//           <li className="list-inline-item text-dark">
//             Maintenance Request
//           </li>
//         </ul>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {/* Resident ID */}
//         <div className="form-group">
//           <label htmlFor="residentID">Resident ID</label>
//           <input
//             type="text"
//             className="form-control"
//             id="residentID"
//             placeholder="Enter your Resident ID"
//             value={residentID}
//             onChange={(e) => setResidentID(e.target.value)}
//             required
//           />
//         </div>

//         {/* Request Type */}
//         <div className="form-group">
//           <label htmlFor="requestType">Request Type</label>
//           <select
//             className="form-control"
//             id="requestType"
//             value={requestType}
//             onChange={(e) => setRequestType(e.target.value)}
//             required
//           >
//             <option value="">Select Request Type</option>
//             <option value="CLEANING">Cleaning</option>
//             <option value="ELECTRICAL">Electrical</option>
//             <option value="PLUMBING">Plumbing</option>
//             <option value="OTHER">Other</option>
//           </select>
//         </div>

//         {/* Description */}
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             className="form-control"
//             id="description"
//             rows="4"
//             placeholder="Provide details about the issue"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>

//         {/* Preferred Date */}
//         <div className="form-group">
//           <label htmlFor="preferredDate">Preferred Date</label>
//           <input
//             type="date"
//             className="form-control"
//             id="preferredDate"
//             value={preferredDate}
//             onChange={(e) => setPreferredDate(e.target.value)}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit Request"}
//         </button>
//       </form>
//     </div>
//   );
// }




import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../resident/css/vendor_request_form.css";
import { v4 as uuidv4 } from "uuid"; // Generate UUID for requestid

export default function Vendor_Request_Form() {
  const [residentID, setResidentID] = useState("");
  const [requestType, setRequestType] = useState("");
  const [description, setDescription] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!residentID || !requestType || !description || !preferredDate) {
      alert("All fields are required.");
      return;
    }

    setIsSubmitting(true);

    const formattedRequestType = requestType.trim().toUpperCase(); // Ensure ENUM consistency

    if (!["CLEANING", "ELECTRICAL", "OTHER", "PLUMBING"].includes(formattedRequestType)) {
      alert("Invalid Request Type. Please select a valid option.");
      setIsSubmitting(false);
      return;
    }

    const requestData = {
      requestid: uuidv4(), // Generate a new UUID for requestid
      description: description.trim(),
      preferred_date: preferredDate,
      requesttype: formattedRequestType, // ✅ Matches DB field name
      residentid: residentID.trim(),
      status: "PENDING", // Default status
      submitted_on: new Date().toISOString().slice(0, 19).replace("T", " "), // Optional if not auto-generated in DB
    };

    console.log("Submitting Data:", requestData); // Debugging

    try {
      const response = await axios.post("http://localhost:8089/vendorrequest/add", requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(
        `Service request submitted successfully!\n\nRequest ID: ${response.data.requestid}`
      );

      // Reset form fields
      setResidentID("");
      setRequestType("");
      setDescription("");
      setPreferredDate("");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert(`Failed to submit the request. Error: ${error.response?.data || error.message}`);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container mt-4 form">
      <h1>Submit a Service Request</h1>
      <p>Use the form below to request a service or report an issue.</p>

      <div className="resident-back text-center">
        <ul className="breadcrumb list-inline mt-2">
          <li className="list-inline-item">
            <Link to="/resident" className="text-secondary text-decoration-none">
              Home
            </Link>
          </li>
          <li className="list-inline-item text-secondary">→</li>
          <li className="list-inline-item text-dark">Maintenance Request</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Resident ID */}
        <div className="form-group">
          <label htmlFor="residentID">Resident ID</label>
          <input
            type="text"
            className="form-control"
            id="residentID"
            placeholder="Enter your Resident ID"
            value={residentID}
            onChange={(e) => setResidentID(e.target.value)}
            required
          />
        </div>

        {/* Request Type */}
        <div className="form-group">
          <label htmlFor="requestType">Request Type</label>
          <select
            className="form-control"
            id="requestType"
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
            required
          >
            <option value="">Select Request Type</option>
            <option value="CLEANING">Cleaning</option>
            <option value="ELECTRICAL">Electrical</option>
            <option value="PLUMBING">Plumbing</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            placeholder="Provide details about the issue"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Preferred Date */}
        <div className="form-group">
          <label htmlFor="preferredDate">Preferred Date</label>
          <input
            type="date"
            className="form-control"
            id="preferredDate"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
