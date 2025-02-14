// import React from 'react';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import '../resident/css/maintenance_request.css';

// export default function Maintenance_Requests() {

//   const [formInputs, setFormInputs] = useState({
//     issueCategory: "",
//     issueDescription: "",
//     attachment: null,
//   });

//   // State to store maintenance requests
//   const [maintenanceRequests, setMaintenanceRequests] = useState([
//     {
//       id: 1,
//       category: "Plumbing",
//       description: "Leaking faucet in the kitchen",
//       status: "In Progress",
//       submittedOn: "2024-11-20",
//     },
//     {
//       id: 2,
//       category: "Electrical",
//       description: "Power outage in the living room",
//       status: "Completed",
//       submittedOn: "2024-11-18",
//     },
//     {
//       id: 3,
//       category: "Cleaning",
//       description: "Stains on the hallway carpet",
//       status: "Pending",
//       submittedOn: "2024-11-22",
//     },
//   ]);

//   // Handle form inputs change
//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     setFormInputs((prevInputs) => ({
//       ...prevInputs,
//       [id]: value,
//     }));
//   };

//   // Handle file attachment
//   const handleFileChange = (event) => {
//     setFormInputs((prevInputs) => ({
//       ...prevInputs,
//       attachment: event.target.files[0],
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validation check
//     if (!formInputs.issueCategory || !formInputs.issueDescription) {
//       alert("Please fill out all required fields.");
//       return;
//     }

//     // Add new maintenance request
//     const newRequest = {
//       id: maintenanceRequests.length + 1,
//       category: formInputs.issueCategory,
//       description: formInputs.issueDescription,
//       status: "Pending",
//       submittedOn: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
//     };

//     setMaintenanceRequests((prevRequests) => [...prevRequests, newRequest]);

//     // Clear form inputs
//     setFormInputs({
//       issueCategory: "",
//       issueDescription: "",
//       attachment: null,
//     });

//     alert("Your maintenance request has been submitted!");
//   };

//   return (
//     <div className="maintenance-section">
//       {/* Maintenance Request Form */}
//       <div className="maintenance-card">
//         <div className='resident-back text-center'>
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
//         <h3 className="text-center">Submit a Maintenance Request</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="issueCategory">Issue Category</label>
//             <select
//               className="form-control"
//               id="issueCategory"
//               value={formInputs.issueCategory}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select...</option>
//               <option value="Plumbing">Plumbing</option>
//               <option value="Electrical">Electrical</option>
//               <option value="Cleaning">Cleaning</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="issueDescription">Issue Description</label>
//             <textarea
//               className="form-control"
//               id="issueDescription"
//               rows="4"
//               placeholder="Describe the issue in detail"
//               value={formInputs.issueDescription}
//               onChange={handleInputChange}
//               required
//             ></textarea>
//           </div>

          

//           <button type="submit" className="btn btn-primary btn-block">
//             Submit Request
//           </button>
//         </form>
//       </div>

//       {/* Maintenance Requests Table */}
//       <div className="maintenance-card mt-4">
//         <h4>My Maintenance Requests</h4>
//         <table className="table table-bordered table-hover">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Category</th>
//               <th>Description</th>
//               <th>Status</th>
//               <th>Submitted On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {maintenanceRequests.map((request) => (
//               <tr key={request.id}>
//                 <td>{request.id}</td>
//                 <td>{request.category}</td>
//                 <td>{request.description}</td>
//                 <td>
//                   <span
//                     className={
//                       request.status === "Pending"
//                         ? "badge badge-pending"
//                         : request.status === "In Progress"
//                           ? "badge badge-in-progress"
//                           : "badge badge-completed"
//                     }
//                   >
//                     {request.status}
//                   </span>
//                 </td>
//                 <td>{request.submittedOn}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../resident/css/maintenance_request.css';

export default function Maintenance_Requests() {

  const [formInputs, setFormInputs] = useState({
    issueCategory: "",
    issueDescription: "",
    attachment: null,
    createdAt:"",
  });

  // State to store maintenance requests
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);

  // Fetch maintenance requests from backend API
  useEffect(() => {
    fetchMaintenanceRequests();
  }, []);

  const fetchMaintenanceRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8089/maintenancerequest/all');
      setMaintenanceRequests(response.data);
    } catch (error) {
      console.error("Error fetching maintenance requests:", error);
      alert("Failed to load maintenance requests. Please try again later.");
    }
  };

  // Handle form inputs change
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  };

  // Handle file attachment
  const handleFileChange = (event) => {
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      attachment: event.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formInputs.issueCategory || !formInputs.issueDescription) {
      alert("Please fill out all required fields.");
      return;
    }

    const newRequest = {
      category: formInputs.issueCategory,
      description: formInputs.issueDescription,
      createdAt: formInputs.createdAt
    };

    try {
      // Send the POST request
      await axios.post('http://localhost:8089/maintenancerequest/add', newRequest);

      // Fetch updated maintenance requests after successful submission
      await fetchMaintenanceRequests();

      // Clear form inputs
      setFormInputs({
        issueCategory: "",
        issueDescription: "",
        attachment: null,
        createdAt:""
      });

      alert("Your maintenance request has been submitted!");

    } catch (error) {
      console.error("Error submitting maintenance request:", error);
      alert("Failed to submit your request. Please try again.");
    }
  };

  return (
    <div className="maintenance-section">
      {/* Maintenance Request Form */}
      <div className="maintenance-card">
        <div className='resident-back text-center'>
          <ul className="breadcrumb list-inline mt-2">
            <li className="list-inline-item">
              <Link to="/resident" className="text-secondary text-decoration-none">Home</Link>
            </li>
            <li className="list-inline-item text-secondary">&rarr;</li>
            <li className="list-inline-item text-dark">Maintenance Request</li>
          </ul>
        </div>
        <h3 className="text-center">Submit a Maintenance Request</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="issueCategory">Issue Category</label>
            <select
              className="form-control"
              id="issueCategory"
              value={formInputs.issueCategory}
              onChange={handleInputChange}
              required
            >
              <option value="">Select...</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="issueDescription">Issue Description</label>
            <textarea
              className="form-control"
              id="issueDescription"
              rows="4"
              placeholder="Describe the issue in detail"
              value={formInputs.issueDescription}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary btn-block">
            Submit Request
          </button>
        </form>
      </div>

      {/* Maintenance Requests Table */}
      <div className="maintenance-card mt-4">
        <h4>My Maintenance Requests</h4>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
              {/* <th>Submitted On</th> */}
            </tr>
          </thead>
          <tbody>
            {maintenanceRequests.length > 0 ? (
              maintenanceRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.category}</td>
                  <td>{request.description}</td>
                  <td>
                    <span
                      className={
                        request.status === "PENDING"
                          ? "badge badge-pending"
                          : request.status === "IN_PROGRESS"
                          ? "badge badge-in-progress"
                          : "badge badge-completed"
                      }
                    >
                      {request.status}
                    </span>
                  </td>
                  {/* <td>{request.submittedOn}</td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No maintenance requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
