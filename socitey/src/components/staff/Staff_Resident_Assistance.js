import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../staff/css/staff_resident_assistance.css';

export default function Staff_Resident_Assistance() {

  const [requests, setRequests] = useState([
    {
      id: 1,
      residentName: "Nikita Chaudhari",
      flatNumber: "Flat A-101",
      type: "Plumbing Issue",
      status: "Pending",
    },
    {
      id: 2,
      residentName: "Girirsh Shinde",
      flatNumber: "Flat B-202",
      type: "Electrical Problem",
      status: "Pending",
    },
    {
      id: 3,
      residentName: "Sagar Rupnar",
      flatNumber: "Flat C-303",
      type: "Cleaning Request",
      status: "Completed",
    },
  ]);

  // States for new request inputs
  const [newResidentName, setNewResidentName] = useState("");
  const [newFlatNumber, setNewFlatNumber] = useState("");
  const [newRequestType, setNewRequestType] = useState("");

  // Function to handle marking a request as completed
  const markAsCompleted = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "Completed" } : request
      )
    );
  };

  // Function to add a new assistance request
  const addNewRequest = () => {
    if (!newResidentName || !newFlatNumber || !newRequestType) {
      alert("Please fill out all fields before adding a new request.");
      return;
    }

    const newRequest = {
      id: requests.length + 1,
      residentName: newResidentName,
      flatNumber: newFlatNumber,
      type: newRequestType,
      status: "Pending",
    };

    setRequests((prevRequests) => [...prevRequests, newRequest]);

    // Clear input fields after submission
    setNewResidentName("");
    setNewFlatNumber("");
    setNewRequestType("");
  };

  return (
    <div className="assistance-requests staff-back text-center">
      {/* Header */}
      <div className="card-custom">
        <h3 className="text-center">Resident Assistance Requests</h3>
        <p className="text-center">Manage and resolve assistance requests submitted by residents.</p>
        <ul class="breadcrumb list-inline mt-2">
          <li class="list-inline-item">
            <Link to="/staff" class="text-secondary text-decoration-none">Home</Link>
          </li>
          <li class="list-inline-item text-secondary">
            &rarr;
          </li>
          <li class="list-inline-item text-dark">
            Resident Assistance
          </li>
        </ul>
      </div>

      {/* Requests Overview Table */}
      <div className="card-custom mt-4">
        <h4>Requests Overview</h4>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Resident Name</th>
              <th>Flat Number</th>
              <th>Type of Request</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.residentName}</td>
                <td>{request.flatNumber}</td>
                <td>{request.type}</td>
                <td>
                  <span
                    className={`badge ${request.status === "Completed"
                        ? "badge-success"
                        : "badge-warning"
                      }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td>
                  {request.status === "Pending" ? (
                    <button
                      className="btn btn-update btn-sm"
                      onClick={() => markAsCompleted(request.id)}
                    >
                      Mark as Completed
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary btn-sm"
                      disabled
                    >
                      Completed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Request Form */}
      <div className="card-custom mt-4 add-request-section">
        <div className="add-request-left">
          <h4>Add New Request</h4>
          <div className="form-group">
            <input
              type="text"
              placeholder="Resident Name"
              className="form-control mb-2 assist"
              value={newResidentName}
              onChange={(e) => setNewResidentName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Flat Number"
              className="form-control mb-2 assist"
              value={newFlatNumber}
              onChange={(e) => setNewFlatNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Type of Request"
              className="form-control mb-2 assist"
              value={newRequestType}
              onChange={(e) => setNewRequestType(e.target.value)}
            />
            <button className="btn btn-custom btn-block assist" onClick={addNewRequest}>
              Add Request
            </button>
          </div>
        </div>
        <div className="add-request-right">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Request Illustration"
            className="add-request-image"
          />
        </div>
      </div>


    </div>
  );
}
