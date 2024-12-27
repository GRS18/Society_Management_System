import React, { useState } from 'react';
import { Link } from "react-router-dom";
import backlogo from '../admin/assets/backlogo.png';
import '../admin/css/manage_vendor.css';
export default function Manage_Vendor() 
{
    const [requests, setRequests] = useState([
        {
          id: 1,
          residentName: "John Doe",
          requestType: "Plumbing",
          description: "Leaking pipe in the kitchen",
          preferredDate: "2024-12-01",
          vendor: null,
        },
        {
          id: 2,
          residentName: "Jane Smith",
          requestType: "Electrical",
          description: "Faulty power socket in the living room",
          preferredDate: "2024-12-02",
          vendor: null,
        },
      ]);
    
      // State for managing modal form
      const [selectedRequestId, setSelectedRequestId] = useState(null);
      const [selectedVendor, setSelectedVendor] = useState("");
    
      // Vendor list
      const vendors = [
        { id: 1, name: "ABC Plumbing Services", specialization: "Plumbing" },
        { id: 2, name: "XYZ Electrical Solutions", specialization: "Electrical" },
        { id: 3, name: "Sparkle Cleaning Services", specialization: "Cleaning" },
      ];
    
      // Handle Assign Vendor button click
      const handleAssignVendorClick = (requestId) => {
        setSelectedRequestId(requestId);
        setSelectedVendor("");
      };
    
      // Handle Assign Vendor form submission
      const handleAssignVendor = (e) => {
        e.preventDefault();
    
        if (!selectedVendor) {
          alert("Please select a vendor.");
          return;
        }
    
        // Update the request with the selected vendor
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.id === selectedRequestId
              ? {
                  ...request,
                  vendor: vendors.find((vendor) => vendor.id === parseInt(selectedVendor))?.name,
                }
              : request
          )
        );
    
        // Clear the selected vendor for re-assignment if needed
        setSelectedVendor("");
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
          <h1>Manage Vendor Requests</h1>
          <p>Below are pending service requests. Assign a vendor to handle them.</p>
    
          {/* Requests Table */}
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Resident Name</th>
                <th>Request Type</th>
                <th>Description</th>
                <th>Preferred Date</th>
                <th>Vendor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.residentName}</td>
                  <td>{request.requestType}</td>
                  <td>{request.description}</td>
                  <td>{request.preferredDate}</td>
                  <td>{request.vendor || "Not Assigned"}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm btn-vendor-assign"
                      onClick={() => handleAssignVendorClick(request.id)}
                    >
                      Assign Vendor
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
          {/* Assign Vendor Form */}
          {selectedRequestId && (
            <div className="mt-4 p-4 border rounded bg-light">
              <h5>Assign Vendor for Request #{selectedRequestId}</h5>
              <form onSubmit={handleAssignVendor}>
                {/* Select Vendor */}
                <div className="form-group">
                  <label htmlFor="vendorSelect">Select Vendor</label>
                  <select
                    className="form-control"
                    id="vendorSelect"
                    value={selectedVendor}
                    onChange={(e) => setSelectedVendor(e.target.value)}
                    required
                  >
                    <option value="">Choose Vendor</option>
                    {vendors
                      .filter(
                        (vendor) =>
                          vendor.specialization ===
                          requests.find((req) => req.id === selectedRequestId)?.requestType
                      )
                      .map((vendor) => (
                        <option key={vendor.id} value={vendor.id}>
                          {vendor.name}
                        </option>
                      ))}
                  </select>
                </div>
    
                <button type="submit" className="btn btn-success btn-vendor-assign">
                  Assign Vendor
                </button>
              </form>
            </div>
          )}
        </div>
      );
}