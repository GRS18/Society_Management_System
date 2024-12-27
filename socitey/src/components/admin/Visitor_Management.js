import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import backlogo from '../admin/assets/backlogo.png';
export default function Visitor_Management() {

  // State to manage visitors list
  const [visitors, setVisitors] = useState([
    {
      id: 1,
      name: "Jane Doe",
      contact: "+1234567890",
      flatVisiting: "A-102",
      entryTime: "10:30 AM",
      exitTime: "12:00 PM",
      status: "Checked Out",
    },
    {
      id: 2,
      name: "Mike Smith",
      contact: "+9876543210",
      flatVisiting: "B-201",
      entryTime: "09:00 AM",
      exitTime: "-",
      status: "In Premises",
    },
  ]);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    flatVisiting: "",
    entryTime: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new visitor to the list
    setVisitors([
      ...visitors,
      {
        id: Date.now(),
        name: formData.name,
        contact: formData.contact,
        flatVisiting: formData.flatVisiting,
        entryTime: new Date(`1970-01-01T${formData.entryTime}`).toLocaleTimeString(
          "en-US",
          { hour: "2-digit", minute: "2-digit" }
        ),
        exitTime: "-",
        status: "In Premises",
      },
    ]);

    // Clear form and close modal
    setFormData({
      name: "",
      contact: "",
      flatVisiting: "",
      entryTime: "",
    });

    // Close the modal (Bootstrap functionality)
    document.querySelector("#addVisitorModal .close").click();
  };

  // Handle marking exit
  const markExit = (id) => {
    setVisitors((prevVisitors) =>
      prevVisitors.map((visitor) =>
        visitor.id === id
          ? {
              ...visitor,
              exitTime: new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              status: "Checked Out",
            }
          : visitor
      )
    );
  };

  return (
    <div className="container mt-4">
      <Link className="navbar-brand backbutton" to="/admin">
          <img
            src={backlogo}
            alt="Logo"
            height="50"
            width="70"
            className="d-inline-block align-text-top"
          />
        </Link>
      <h1 className="mb-4">Visitor Management</h1>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search visitors..."
        />
        <button
          className="btn btn-primary admin_button"
          data-toggle="modal"
          data-target="#addVisitorModal"
        >
          Add Visitor
        </button>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Visitor Name</th>
            <th>Contact Number</th>
            <th>Flat Visiting</th>
            <th>Entry Time</th>
            <th>Exit Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor, index) => (
            <tr key={visitor.id}>
              <td>{index + 1}</td>
              <td>{visitor.name}</td>
              <td>{visitor.contact}</td>
              <td>{visitor.flatVisiting}</td>
              <td>{visitor.entryTime}</td>
              <td>{visitor.exitTime}</td>
              <td>{visitor.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => markExit(visitor.id)}
                  disabled={visitor.status === "Checked Out"}
                >
                  Mark Exit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Visitor Modal */}
      <div
        className="modal fade"
        id="addVisitorModal"
        tabIndex="-1"
        aria-labelledby="addVisitorModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addVisitorModalLabel">
                Add Visitor
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
                  <label htmlFor="visitorName">Visitor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="visitorName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter visitor name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="visitorContact">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="visitorContact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="flatVisiting">Flat Visiting</label>
                  <input
                    type="text"
                    className="form-control"
                    id="flatVisiting"
                    name="flatVisiting"
                    value={formData.flatVisiting}
                    onChange={handleChange}
                    placeholder="Enter flat number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="entryTime">Entry Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="entryTime"
                    name="entryTime"
                    value={formData.entryTime}
                    onChange={handleChange}
                    required
                  />
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
                  Add Visitor
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

