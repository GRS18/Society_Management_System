import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import backlogo from '../admin/assets/backlogo.png';
import '../admin/css/access_control.css';
export default function Access_Control() {

  const [activeTab, setActiveTab] = useState("staff");
  const [staffList, setStaffList] = useState([
    { name: "John Doe", role: "Security", access: "Full Access" },
    { name: "Jane Smith", role: "Maintenance", access: "Limited Access" },
  ]);
  const [residentList, setResidentList] = useState([
    { apartment: "101", status: "Active" },
    { apartment: "102", status: "Restricted" },
  ]);
  const [visitorList, setVisitorList] = useState([
    { name: "Mark Johnson", reason: "Delivery", date: "2024-11-28" },
  ]);


  const handleAddStaff = (e) => {
    e.preventDefault();
    const name = e.target.staffName.value;
    const role = e.target.staffRole.value;
    const access = e.target.staffAccessLevel.value;
    if (name && role && access) {
      setStaffList([...staffList, { name, role, access }]);
      e.target.reset();
    }
  };


  const handleAddVisitor = (e) => {
    e.preventDefault();
    const name = e.target.visitorName.value;
    const reason = e.target.visitReason.value;
    const date = e.target.visitDate.value;
    if (name && reason && date) {
      setVisitorList([...visitorList, { name, reason, date }]);
      e.target.reset();
    }
  };


  const toggleResidentStatus = (index) => {
    const updatedList = residentList.map((resident, i) =>
      i === index
        ? {
          ...resident,
          status: resident.status === "Active" ? "Restricted" : "Active",
        }
        : resident
    );
    setResidentList(updatedList);
  };


  const handleRevoke = (list, setList, index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
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
      
      <h1 className="mb-4">Access Control</h1>

      {/* Tabs */}
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link access ${activeTab === "staff" ? "active" : ""}`}
            onClick={() => setActiveTab("staff")}
          >
            <strong>Staff Access</strong>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link access ${activeTab === "resident" ? "active" : ""}`}
            onClick={() => setActiveTab("resident")}
          >
           <strong> Resident Access</strong>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link access ${activeTab === "visitor" ? "active" : ""}`}
            onClick={() => setActiveTab("visitor")}
          >
           <strong>Visitor Access</strong>
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-4">
        {/* Staff Access Tab */}
        {activeTab === "staff" && (
          <div>
            <h4>Manage Staff Access</h4>
            <form onSubmit={handleAddStaff}>
              <div className="form-group">
                <label>Staff Name</label>
                <input type="text" className="form-control" name="staffName" required />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select className="form-control" name="staffRole" required>
                  <option>Security</option>
                  <option>Maintenance</option>
                  <option>Admin</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Access Level</label>
                <select className="form-control" name="staffAccessLevel" required>
                  <option>Full Access</option>
                  <option>Limited Access</option>
                  <option>No Access</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Save Access</button>
            </form>
            <hr />
            <h4>Staff Access List</h4>
            <ul className="list-group access-shadow">
              {staffList.map((staff, index) => (
                <li key={index} className="list-group-item">
                  <strong>{staff.name}</strong> - Role: {staff.role}, Access: {staff.access}
                  <button
                    className="btn btn-danger btn-sm float-right"
                    onClick={() => handleRevoke(staffList, setStaffList, index)}
                  >
                    Revoke
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Resident Access Tab */}
        {activeTab === "resident" && (
          <div>
            <h4>Resident Access Control</h4>
            <p>
              Residents are granted automatic access to common areas. Use this tab to
              temporarily restrict or modify access.
            </p>
            <ul className="list-group access-shadow">
              {residentList.map((resident, index) => (
                <li key={index} className="list-group-item">
                  <strong>Apartment {resident.apartment}</strong> - Status: {resident.status}
                  <button
                    className={`btn btn-sm float-right ${resident.status === "Active" ? "btn-warning" : "btn-success"
                      }`}
                    onClick={() => toggleResidentStatus(index)}
                  >
                    {resident.status === "Active" ? "Restrict" : "Reinstate"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Visitor Access Tab */}
        {activeTab === "visitor" && (
          <div>
            <h4>Manage Visitor Access</h4>
            <form onSubmit={handleAddVisitor}>
              <div className="form-group">
                <label>Visitor Name</label>
                <input type="text" className="form-control" name="visitorName" required />
              </div>
              <div className="form-group">
                <label>Reason for Visit</label>
                <input type="text" className="form-control" name="visitReason" required />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" className="form-control" name="visitDate" required />
              </div>
              <button type="submit" className="btn btn-primary">Grant Access</button>
            </form>
            <hr />
            <h4>Active Visitor Access</h4>
            <ul className="list-group access-shadow">
              {visitorList.map((visitor, index) => (
                <li key={index} className="list-group-item">
                  <strong>{visitor.name}</strong> - Reason: {visitor.reason}, Date: {visitor.date}
                  <button
                    className="btn btn-danger btn-sm float-left"
                    onClick={() => handleRevoke(visitorList, setVisitorList, index)}
                  >
                    Revoke
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
