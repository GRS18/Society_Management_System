
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Maintenance() {
    const [maintenanceList, setMaintenanceList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchMaintenanceRequests();
    }, []);

    const fetchMaintenanceRequests = async () => {
        try {
            const response = await axios.get("http://localhost:8089/maintenancerequest/all");
            setMaintenanceList(response.data);
        } catch (error) {
            console.error("Error fetching maintenance requests:", error);
        }
    };

    const handleMarkAsDone = async (id) => {
        try {
            await axios.put(`http://localhost:8089/maintenancerequest/update/${id}`, { status: "RESOLVED" });
            setMaintenanceList(
                maintenanceList.map((request) =>
                    request.requestid === id ? { ...request, status: "RESOLVED" } : request
                )
            );
        } catch (error) {
            console.error("Error updating maintenance status:", error);
        }
    };

    const filteredMaintenance = maintenanceList.filter(
        (request) =>
            request.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            request.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4 admin-back text-center">
            <h1 className="mb-4">Maintenance Management</h1>
            <ul className="breadcrumb list-inline mt-2">
                <li className="list-inline-item">
                    <Link to="/admin" className="text-secondary text-decoration-none">Home</Link>
                </li>
                <li className="list-inline-item text-secondary">&rarr;</li>
                <li className="list-inline-item text-dark">Maintenance Management</li>
            </ul>

            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Description</th>
                        {/* <th>Reported On</th> */}
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMaintenance.map((request, index) => (
                        <tr key={request.requestid}>
                            <td>{index + 1}</td>
                            <td>{request.category}</td>
                            <td>{request.description}</td>
                            {/* <td>{new Date(request.created_at).toLocaleDateString()}</td> */}
                            <td>{request.status}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-success ml-2"
                                    onClick={() => handleMarkAsDone(request.requestid)}
                                    disabled={request.status === "RESOLVED"}
                                >
                                    Mark as Done
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
