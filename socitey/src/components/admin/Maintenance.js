import React from 'react';
import { Link } from 'react-router-dom';

export default function Maintenance() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Society Management</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resident_management">Resident Management</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/visitor_management">Visitor Management</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/maintenance">Maintenance Management</Link>
                </li>
            </ul>
        </div>
    </nav>

    <div className="container mt-4">
        <h1 className="mb-4">Maintenance Management</h1>

        <div className="d-flex justify-content-between mb-3">
            <input type="text" className="form-control w-50" id="searchMaintenanceInput" placeholder="Search by resident or issue..."/>
            <button className="btn btn-primary" data-toggle="modal" data-target="#addMaintenanceModal">Add Maintenance Request</button>
        </div>

        <table className="table table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Resident Name</th>
                    <th>Flat Number</th>
                    <th>Issue Description</th>
                    <th>Reported On</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="maintenanceTable">
                <tr>
                    <td>1</td>
                    <td>Sarah Lee</td>
                    <td>B-202</td>
                    <td>Water Leakage in Bathroom</td>
                    <td>2024-11-15</td>
                    <td>In Progress</td>
                    <td>
                        <button className="btn btn-sm btn-info" data-toggle="modal" data-target="#addMaintenanceModal">Edit</button>
                        <button className="btn btn-sm btn-success">Mark as Done</button>
                        <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="modal fade" id="addMaintenanceModal" tabindex="-1" aria-labelledby="addMaintenanceModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addMaintenanceModalLabel">Add/Edit Maintenance Request</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div className="modal-body">
                        <div className="form-group">
                            <label for="residentName">Resident Name</label>
                            <input type="text" className="form-control" id="residentName" placeholder="Enter resident's name" required/>
                        </div>
                        <div className="form-group">
                            <label for="flatNumber">Flat Number</label>
                            <input type="text" className="form-control" id="flatNumber" placeholder="Enter flat number" required/>
                        </div>
                        <div className="form-group">
                            <label for="issueDescription">Issue Description</label>
                            <textarea className="form-control" id="issueDescription" rows="4" placeholder="Describe the maintenance issue" required></textarea>
                        </div>
                        <div className="form-group">
                            <label for="reportedOn">Reported On</label>
                            <input type="date" className="form-control" id="reportedOn" required/>
                        </div>
                        <div className="form-group">
                            <label for="maintenanceStatus">Status</label>
                            <select className="form-control" id="maintenanceStatus" required>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
   </>
  );
}
