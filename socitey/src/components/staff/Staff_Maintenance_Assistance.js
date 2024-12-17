import React from 'react';
import { useState } from 'react';
import '../staff/css/staff_maintenance_assistance.css';

export default function Staff_Maintenance_Assistance() {
//   return (
//    <>
//     <div className="card-custom">
//         <h3 className="text-center">Maintenance Assistance</h3>
//         <p className="text-center">Manage and assist with maintenance requests submitted by residents.</p>
//     </div>

//     <div className="card-custom mt-4">
//         <h4>Search and Filter</h4>
//         <form className="form-inline justify-content-between">
//             <input type="text" className="form-control mb-2 mr-sm-2" id="searchRequest" placeholder="Search by Request ID or Resident Name"/>
//             <select className="form-control mb-2 mr-sm-2" id="requestStatus">
//                 <option value="">All Status</option>
//                 <option value="pending">Pending</option>
//                 <option value="in-progress">In Progress</option>
//                 <option value="completed">Completed</option>
//             </select>
//             <select className="form-control mb-2 mr-sm-2" id="requestType">
//                 <option value="">All Request Types</option>
//                 <option value="plumbing">Plumbing</option>
//                 <option value="electrical">Electrical</option>
//                 <option value="cleaning">Cleaning</option>
//                 <option value="other">Other</option>
//             </select>
//             <button type="submit" className="btn btn-custom mb-2">Search</button>
//         </form>
//     </div>

//     <div className="card-custom mt-4">
//         <h4>Maintenance Request Overview</h4>
//         <table className="table table-bordered table-hover">
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Request ID</th>
//                     <th>Resident Name</th>
//                     <th>Request Type</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>REQ-001</td>
//                     <td>John Doe</td>
//                     <td>Plumbing</td>
//                     <td><span className="badge badge-warning">Pending</span></td>
//                     <td>
//                         <button className="btn btn-success btn-sm">Start Maintenance</button>
//                         <button className="btn btn-secondary btn-sm" disabled>Mark as Completed</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>REQ-002</td>
//                     <td>Maria Smith</td>
//                     <td>Electrical</td>
//                     <td><span className="badge badge-warning">Pending</span></td>
//                     <td>
//                         <button className="btn btn-success btn-sm">Start Maintenance</button>
//                         <button className="btn btn-secondary btn-sm" disabled>Mark as Completed</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>REQ-003</td>
//                     <td>Alex Brown</td>
//                     <td>Cleaning</td>
//                     <td><span className="badge badge-success">Completed</span></td>
//                     <td>
//                         <button className="btn btn-secondary btn-sm" disabled>Completed</button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//    </>
//   );

const [requests, setRequests] = useState([
    {
      id: 1,
      requestId: "REQ-001",
      residentName: "John Doe",
      requestType: "Plumbing",
      status: "Pending",
    },
    {
      id: 2,
      requestId: "REQ-002",
      residentName: "Maria Smith",
      requestType: "Electrical",
      status: "Pending",
    },
    {
      id: 3,
      requestId: "REQ-003",
      residentName: "Alex Brown",
      requestType: "Cleaning",
      status: "Completed",
    },
  ]);

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  // Function to handle "Start Maintenance"
  const startMaintenance = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "In Progress" } : request
      )
    );
  };

  // Function to handle "Mark as Completed"
  const markAsCompleted = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "Completed" } : request
      )
    );
  };

  // Filtered requests based on search and filters
  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.requestId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.residentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "" || request.status.toLowerCase() === statusFilter;
    const matchesType =
      typeFilter === "" || request.requestType.toLowerCase() === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="maintenance-assistance">
      {/* Header */}
      <div className="card-custom">
        <h3 className="text-center">Maintenance Assistance</h3>
        <p className="text-center">
          Manage and assist with maintenance requests submitted by residents.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="card-custom mt-4">
        <h4>Search and Filter</h4>
        <form
          className="form-inline justify-content-between"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Search by Request ID or Resident Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="form-control mb-2 mr-sm-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <select
            className="form-control mb-2 mr-sm-2"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All Request Types</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="cleaning">Cleaning</option>
            <option value="other">Other</option>
          </select>
        </form>
      </div>

      {/* Maintenance Request Table */}
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
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.requestId}</td>
                  <td>{request.residentName}</td>
                  <td>{request.requestType}</td>
                  <td>
                    <span
                      className={`badge ${
                        request.status === "Completed"
                          ? "badge-success"
                          : request.status === "In Progress"
                          ? "badge-info"
                          : "badge-warning"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td>
                    {request.status === "Pending" && (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => startMaintenance(request.id)}
                      >
                        Start Maintenance
                      </button>
                    )}
                    {request.status === "In Progress" && (
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => markAsCompleted(request.id)}
                      >
                        Mark as Completed
                      </button>
                    )}
                    {request.status === "Completed" && (
                      <button className="btn btn-secondary btn-sm" disabled>
                        Completed
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No matching requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
