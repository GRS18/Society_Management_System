
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Visitor_Management() {
  const [visitors, setVisitors] = useState([]);
  const [formData, setFormData] = useState({ name: "", contact: "", flatVisiting: "" });

  // Fetch visitors from backend
  useEffect(() => {
    axios.get("http://localhost:8089/visitors/all")
      .then(response => setVisitors(response.data))
      .catch(error => console.error("Error fetching visitors:", error));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8089/visitors/add", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setVisitors([...visitors, response.data]); // Add new visitor to the list
      setFormData({ name: "", contact: "", flatVisiting: "" }); // Reset form
      console.log("Visitor added successfully:", response.data);
    } catch (error) {
      console.error("Error adding visitor:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container mt-4 admin-back text-center">
      <h1 className="mb-4">Visitor Management</h1>
      <ul className="breadcrumb list-inline mt-2">
        <li className="list-inline-item"><Link to="/admin" className="text-secondary text-decoration-none">Home</Link></li>
        <li className="list-inline-item text-secondary">&rarr;</li>
        <li className="list-inline-item text-dark">Visitor Management</li>
      </ul>
      {/* <div className="d-flex justify-content-between mb-3">
        <input type="text" className="form-control w-50" placeholder="Search visitors..." />
        <button className="btn btn-primary" data-toggle="modal" data-target="#addVisitorModal">Add Visitor</button>
      </div> */}
      
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

      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Visitor Name</th>
            <th>Contact Number</th>
            <th>Flat Visiting</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor, index) => (
            <tr key={visitor.id}>
              <td>{index + 1}</td>
              <td>{visitor.name}</td>
              <td>{visitor.contact}</td>
              <td>{visitor.flatVisiting}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="modal fade" id="addVisitorModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Visitor</h5>
              <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
            </div>



            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Visitor Name</label>
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input type="text" className="form-control" name="contact" value={formData.contact} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Flat Visiting</label>
                  <input type="text" className="form-control" name="flatVisiting" value={formData.flatVisiting} onChange={handleChange} required />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Add Visitor</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
