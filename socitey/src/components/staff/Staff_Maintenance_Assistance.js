import React from 'react';

export default function Staff_Maintenance_Assistance() {
  return (
   <>
    <div className="card-custom">
        <h3 className="text-center">Maintenance Assistance</h3>
        <p className="text-center">Manage and assist with maintenance requests submitted by residents.</p>
    </div>

    <div className="card-custom mt-4">
        <h4>Search and Filter</h4>
        <form className="form-inline justify-content-between">
            <input type="text" className="form-control mb-2 mr-sm-2" id="searchRequest" placeholder="Search by Request ID or Resident Name"/>
            <select className="form-control mb-2 mr-sm-2" id="requestStatus">
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <select className="form-control mb-2 mr-sm-2" id="requestType">
                <option value="">All Request Types</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="cleaning">Cleaning</option>
                <option value="other">Other</option>
            </select>
            <button type="submit" className="btn btn-custom mb-2">Search</button>
        </form>
    </div>

    <div className="card-custom mt-4">
        <h4>Maintenance Request Overview</h4>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Request ID</th>
                    <th>Resident Name</th>
                    <th>Request Type</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>REQ-001</td>
                    <td>John Doe</td>
                    <td>Plumbing</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td>
                        <button className="btn btn-success btn-sm">Start Maintenance</button>
                        <button className="btn btn-secondary btn-sm" disabled>Mark as Completed</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>REQ-002</td>
                    <td>Maria Smith</td>
                    <td>Electrical</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td>
                        <button className="btn btn-success btn-sm">Start Maintenance</button>
                        <button className="btn btn-secondary btn-sm" disabled>Mark as Completed</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>REQ-003</td>
                    <td>Alex Brown</td>
                    <td>Cleaning</td>
                    <td><span className="badge badge-success">Completed</span></td>
                    <td>
                        <button className="btn btn-secondary btn-sm" disabled>Completed</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
   </>
  );
}
