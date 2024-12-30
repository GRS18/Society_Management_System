import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import "../admin/css/resident_management.css";

export default function Resident_Management() {

  const [residents, setResidents] = useState([
    {
      id: 1,
      name: "Nikita Chaudhari",
      flatNumber: "A-101",
      email: "Nikita@123.com",
      phone: "+1234567890",
      status: "Active",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    flatNumber: "",
    email: "",
    phone: "",
    status: "Active",
  });

  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      // Update existing resident
      setResidents((prevResidents) =>
        prevResidents.map((resident) =>
          resident.id === editingId ? { ...resident, ...formData } : resident
        )
      );
      setEditMode(false);
      setEditingId(null);
    } else {
      // Add a new resident
      setResidents([
        ...residents,
        { id: Date.now(), ...formData }, // Generate a unique ID
      ]);
    }

    // Clear the form and reset modal
    setFormData({
      name: "",
      flatNumber: "",
      email: "",
      phone: "",
      status: "Active",
    });
  };

  // Handle edit action
  const handleEdit = (id) => {
    const residentToEdit = residents.find((resident) => resident.id === id);
    setFormData(residentToEdit);
    setEditMode(true);
    setEditingId(id);
  };

  // Handle delete action
  const handleDelete = (id) => {
    setResidents((prevResidents) =>
      prevResidents.filter((resident) => resident.id !== id)
    );
  };

  return (
    <div className="container mt-4 admin-back text-center">
      <h1 className="mb-4">Resident Management</h1>
      <ul class="breadcrumb list-inline mt-2">
        <li class="list-inline-item">
          <Link to="/admin" class="text-secondary text-decoration-none">Home</Link>
        </li>
        <li class="list-inline-item text-secondary">
          &rarr;
        </li>
        <li class="list-inline-item text-dark">
          Resident Management
        </li>
      </ul>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search residents..."
        />
        <button
          className="btn btn-primary admin_button"
          data-toggle="modal"
          data-target="#addEditResidentModal"
          onClick={() => setEditMode(false)}
        >
          Add Resident
        </button>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Flat Number</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident, index) => (
            <tr key={resident.id}>
              <td>{index + 1}</td>
              <td>{resident.name}</td>
              <td>{resident.flatNumber}</td>
              <td>{resident.email}</td>
              <td>{resident.phone}</td>
              <td>{resident.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-info"
                  data-toggle="modal"
                  data-target="#addEditResidentModal"
                  onClick={() => handleEdit(resident.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(resident.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Resident Modal */}
      <div
        className="modal fade"
        id="addEditResidentModal"
        tabIndex="-1"
        aria-labelledby="addEditResidentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addEditResidentModalLabel">
                {editMode ? "Edit Resident" : "Add Resident"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="residentName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="residentName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter resident name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="residentFlat">Flat Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="residentFlat"
                    name="flatNumber"
                    value={formData.flatNumber}
                    onChange={handleChange}
                    placeholder="Enter flat number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="residentEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="residentEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="residentPhone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="residentPhone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="residentStatus">Status</label>
                  <select
                    className="form-control"
                    id="residentStatus"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
