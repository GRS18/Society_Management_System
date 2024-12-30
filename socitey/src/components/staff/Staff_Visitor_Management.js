import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../staff/css/staff_visitor_management.css';

export default function Staff_Visitor_Management() {
  //   return (
  //    <>
  //     <div class="card-custom">
  //         <h3 class="text-center">Visitor Management</h3>
  //         <p class="text-center">Track and manage visitor entries and exits efficiently.</p>
  //     </div>

  //     <div class="card-custom mt-4">
  //         <h4>Visitor Log</h4>
  //         <table class="table table-bordered table-hover">
  //             <thead>
  //                 <tr>
  //                     <th>#</th>
  //                     <th>Visitor Name</th>
  //                     <th>Flat Number</th>
  //                     <th>Purpose</th>
  //                     <th>Time In</th>
  //                     <th>Time Out</th>
  //                     <th>Status</th>
  //                 </tr>
  //             </thead>
  //             <tbody>
  //                 <tr>
  //                     <td>1</td>
  //                     <td>Alex Johnson</td>
  //                     <td>A-101</td>
  //                     <td>Delivery</td>
  //                     <td>10:00 AM</td>
  //                     <td>10:30 AM</td>
  //                     <td><span class="badge badge-success">Exited</span></td>
  //                 </tr>
  //                 <tr>
  //                     <td>2</td>
  //                     <td>Maria Garcia</td>
  //                     <td>B-202</td>
  //                     <td>Guest</td>
  //                     <td>11:15 AM</td>
  //                     <td>-</td>
  //                     <td><span class="badge badge-warning">In Premises</span></td>
  //                 </tr>
  //             </tbody>
  //         </table>
  //     </div>

  //     <div class="card-custom mt-4">
  //         <h4>Add New Visitor</h4>
  //         <form>
  //             <div class="form-row">
  //                 <div class="form-group col-md-6">
  //                     <label for="visitorName">Visitor Name</label>
  //                     <input type="text" class="form-control" id="visitorName" placeholder="Enter visitor's name" required/>
  //                 </div>

  //                 <div class="form-group col-md-3">
  //                     <label for="flatNumber">Flat Number</label>
  //                     <input type="text" class="form-control" id="flatNumber" placeholder="e.g., A-101" required/>
  //                 </div>

  //                 <div class="form-group col-md-3">
  //                     <label for="purpose">Purpose</label>
  //                     <select class="form-control" id="purpose" required>
  //                         <option value="">Select...</option>
  //                         <option value="guest">Guest</option>
  //                         <option value="delivery">Delivery</option>
  //                         <option value="maintenance">Maintenance</option>
  //                         <option value="other">Other</option>
  //                     </select>
  //                 </div>
  //             </div>

  //             <div class="form-group">
  //                 <label for="timeIn">Time In</label>
  //                 <input type="time" class="form-control" id="timeIn" required/>
  //             </div>

  //             <button type="submit" class="btn btn-custom btn-block">Add Visitor</button>
  //         </form>
  //     </div>
  //    </>
  //   );

  const [visitors, setVisitors] = useState([
    {
      id: 1,
      name: "Sagar Rupnar",
      flatNumber: "A-101",
      purpose: "Delivery",
      timeIn: "10:00 AM",
      timeOut: "10:30 AM",
      status: "Exited",
    },
    {
      id: 2,
      name: "Girirsh Shinde",
      flatNumber: "B-202",
      purpose: "Guest",
      timeIn: "11:15 AM",
      timeOut: "-",
      status: "In Premises",
    },
  ]);

  // State for new visitor form
  const [newVisitor, setNewVisitor] = useState({
    name: "",
    flatNumber: "",
    purpose: "",
    timeIn: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewVisitor((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Function to add a new visitor
  const addVisitor = (e) => {
    e.preventDefault();

    if (
      !newVisitor.name ||
      !newVisitor.flatNumber ||
      !newVisitor.purpose ||
      !newVisitor.timeIn
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const newId = visitors.length + 1;
    setVisitors([
      ...visitors,
      {
        id: newId,
        name: newVisitor.name,
        flatNumber: newVisitor.flatNumber,
        purpose: newVisitor.purpose,
        timeIn: newVisitor.timeIn,
        timeOut: "-",
        status: "In Premises",
      },
    ]);

    // Reset form fields
    setNewVisitor({
      name: "",
      flatNumber: "",
      purpose: "",
      timeIn: "",
    });
  };

  // Function to mark visitor as exited
  const markAsExited = (id) => {
    setVisitors((prevVisitors) =>
      prevVisitors.map((visitor) =>
        visitor.id === id
          ? {
            ...visitor,
            timeOut: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            status: "Exited",
          }
          : visitor
      )
    );
  };

  return (
    <div className="visitor-management staff-back text-center">
      {/* Header */}
      <div className="card-custom">
        <h3 className="text-center">Visitor Management</h3>
        <p className="text-center">
          Track and manage visitor entries and exits efficiently.
        </p>
        <ul class="breadcrumb list-inline mt-2">
          <li class="list-inline-item">
            <Link to="/staff" class="text-secondary text-decoration-none">Home</Link>
          </li>
          <li class="list-inline-item text-secondary">
            &rarr;
          </li>
          <li class="list-inline-item text-dark">
            Visitor Management
          </li>
        </ul>
      </div>

      {/* Visitor Log */}
      <div className="card-custom mt-4">
        <h4>Visitor Log</h4>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Visitor Name</th>
              <th>Flat Number</th>
              <th>Purpose</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor) => (
              <tr key={visitor.id}>
                <td>{visitor.id}</td>
                <td>{visitor.name}</td>
                <td>{visitor.flatNumber}</td>
                <td>{visitor.purpose}</td>
                <td>{visitor.timeIn}</td>
                <td>{visitor.timeOut}</td>
                <td>
                  <span
                    className={`badge ${visitor.status === "Exited"
                        ? "badge-success"
                        : "badge-warning"
                      }`}
                  >
                    {visitor.status}
                  </span>
                </td>
                <td>
                  {visitor.status === "In Premises" && (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => markAsExited(visitor.id)}
                    >
                      Mark as Exited
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Visitor
      <div className="card-custom mt-4">
        <h4>Add New Visitor</h4>
        <form onSubmit={addVisitor}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Visitor Name</label>
              <input
                type="text"
                className="form-control visit"
                id="name"
                placeholder="Enter visitor's name"
                value={newVisitor.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="flatNumber">Flat Number</label>
              <input
                type="text"
                className="form-control visit"
                id="flatNumber"
                placeholder="e.g., A-101"
                value={newVisitor.flatNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="purpose">Purpose</label>
              <select
                className="form-control visit"
                id="purpose"
                value={newVisitor.purpose}
                onChange={handleInputChange}
                required
              >
                <option value="">Select...</option>
                <option value="Guest">Guest</option>
                <option value="Delivery">Delivery</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="timeIn">Time In</label>
            <input
              type="time"
              className="form-control visit"
              id="timeIn"
              value={newVisitor.timeIn}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-custom btn-block but">
            Add Visitor
          </button>
        </form>
      </div> */}


      {/* Add New Visitor */}
      <div className="card-custom mt-4 add-visitor-section">
        <div className="add-visitor-left">
          <h4>Add New Visitor</h4>
          <form onSubmit={addVisitor}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Visitor Name</label>
                <input
                  type="text"
                  className="form-control visit"
                  id="name"
                  placeholder="Enter visitor's name"
                  value={newVisitor.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="flatNumber">Flat Number</label>
                <input
                  type="text"
                  className="form-control visit"
                  id="flatNumber"
                  placeholder="e.g., A-101"
                  value={newVisitor.flatNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="purpose">Purpose</label>
                <select
                  className="form-control visit"
                  id="purpose"
                  value={newVisitor.purpose}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="Guest">Guest</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="timeIn">Time In</label>
              <input
                type="time"
                className="form-control visit"
                id="timeIn"
                value={newVisitor.timeIn}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-custom btn-block but">
              Add Visitor
            </button>
          </form>
        </div>

        {/* <div className="add-visitor-right">
    <img
      src="https://via.placeholder.com/300x200"
      alt="Add Visitor Illustration"
      className="add-visitor-image"
    />
  </div> */}
      </div>


    </div>
  );
}
