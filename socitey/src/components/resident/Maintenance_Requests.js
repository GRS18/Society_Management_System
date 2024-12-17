import React from 'react';
import { useState } from 'react';
import '../resident/css/maintenance_request.css';

export default function Maintenance_Requests() {
//   return (
//     <>
//     <div className="maintenance-card">
//         <h3 className="text-center">Submit a Maintenance Request</h3>
//         <form>
//             <div className="form-group">
//                 <label for="issueCategory">Issue Category</label>
//                 <select className="form-control" id="issueCategory" required>
//                     <option value="">Select...</option>
//                     <option value="plumbing">Plumbing</option>
//                     <option value="electrical">Electrical</option>
//                     <option value="cleaning">Cleaning</option>
//                     <option value="other">Other</option>
//                 </select>
//             </div>

//             <div className="form-group">
//                 <label for="issueDescription">Issue Description</label>
//                 <textarea className="form-control" id="issueDescription" rows="4" placeholder="Describe the issue in detail" required></textarea>
//             </div>

//             <div className="form-group">
//                 <label for="attachment">Attachment (Optional)</label>
//                 <input type="file" className="form-control-file" id="attachment"/>
//                 <small className="form-text text-muted">You can attach an image or document for better clarity (Max: 2MB).</small>
//             </div>

//             <button type="submit" className="btn btn-primary btn-block">Submit Request</button>
//         </form>
//     </div>

//     <div className="maintenance-card mt-4">
//         <h4>My Maintenance Requests</h4>
//         <table className="table table-bordered table-hover">
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Category</th>
//                     <th>Description</th>
//                     <th>Status</th>
//                     <th>Submitted On</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>Plumbing</td>
//                     <td>Leaking faucet in the kitchen</td>
//                     <td><span className="badge badge-in-progress">In Progress</span></td>
//                     <td>2024-11-20</td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>Electrical</td>
//                     <td>Power outage in the living room</td>
//                     <td><span className="badge badge-completed">Completed</span></td>
//                     <td>2024-11-18</td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>Cleaning</td>
//                     <td>Stains on the hallway carpet</td>
//                     <td><span className="badge badge-pending">Pending</span></td>
//                     <td>2024-11-22</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//     </>
//   );

const [formInputs, setFormInputs] = useState({
    issueCategory: "",
    issueDescription: "",
    attachment: null,
  });

  // State to store maintenance requests
  const [maintenanceRequests, setMaintenanceRequests] = useState([
    {
      id: 1,
      category: "Plumbing",
      description: "Leaking faucet in the kitchen",
      status: "In Progress",
      submittedOn: "2024-11-20",
    },
    {
      id: 2,
      category: "Electrical",
      description: "Power outage in the living room",
      status: "Completed",
      submittedOn: "2024-11-18",
    },
    {
      id: 3,
      category: "Cleaning",
      description: "Stains on the hallway carpet",
      status: "Pending",
      submittedOn: "2024-11-22",
    },
  ]);

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
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation check
    if (!formInputs.issueCategory || !formInputs.issueDescription) {
      alert("Please fill out all required fields.");
      return;
    }

    // Add new maintenance request
    const newRequest = {
      id: maintenanceRequests.length + 1,
      category: formInputs.issueCategory,
      description: formInputs.issueDescription,
      status: "Pending",
      submittedOn: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
    };

    setMaintenanceRequests((prevRequests) => [...prevRequests, newRequest]);

    // Clear form inputs
    setFormInputs({
      issueCategory: "",
      issueDescription: "",
      attachment: null,
    });

    alert("Your maintenance request has been submitted!");
  };

  return (
    <div className="maintenance-section">
      {/* Maintenance Request Form */}
      <div className="maintenance-card">
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

          <div className="form-group">
            <label htmlFor="attachment">Attachment (Optional)</label>
            <input
              type="file"
              className="form-control-file"
              id="attachment"
              onChange={handleFileChange}
            />
            <small className="form-text text-muted">
              You can attach an image or document for better clarity (Max: 2MB).
            </small>
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
              <th>#</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
              <th>Submitted On</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.category}</td>
                <td>{request.description}</td>
                <td>
                  <span
                    className={
                      request.status === "Pending"
                        ? "badge badge-pending"
                        : request.status === "In Progress"
                        ? "badge badge-in-progress"
                        : "badge badge-completed"
                    }
                  >
                    {request.status}
                  </span>
                </td>
                <td>{request.submittedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
