import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
export default function Maintenance() {

    const [maintenanceList, setMaintenanceList] = useState([
        {
            id: 1,
            residentName: "Rama Rao",
            flatNumber: "B-202",
            issueDescription: "Water Leakage in Bathroom",
            reportedOn: "2024-11-15",
            status: "In Progress",
        },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [modalData, setModalData] = useState({
        id: null,
        residentName: "",
        flatNumber: "",
        issueDescription: "",
        reportedOn: "",
        status: "Pending",
    });
    const [isEdit, setIsEdit] = useState(false);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModalData({ ...modalData, [name]: value });
    };

    const openModal = (request) => {
        if (request) {
            setModalData(request);
            setIsEdit(true);
        } else {
            setModalData({
                id: null,
                residentName: "",
                flatNumber: "",
                issueDescription: "",
                reportedOn: "",
                status: "Pending",
            });
            setIsEdit(false);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (isEdit) {
            setMaintenanceList(
                maintenanceList.map((request) =>
                    request.id === modalData.id ? modalData : request
                )
            );
        } else {
            setMaintenanceList([
                ...maintenanceList,
                { ...modalData, id: maintenanceList.length + 1 },
            ]);
        }

        setModalData({
            id: null,
            residentName: "",
            flatNumber: "",
            issueDescription: "",
            reportedOn: "",
            status: "Pending",
        });
        setIsEdit(false);
    };

    const handleDelete = (id) => {
        setMaintenanceList(maintenanceList.filter((request) => request.id !== id));
    };

    const handleMarkAsDone = (id) => {
        setMaintenanceList(
            maintenanceList.map((request) =>
                request.id === id ? { ...request, status: "Completed" } : request
            )
        );
    };

    const filteredMaintenance = maintenanceList.filter(
        (request) =>
            request.residentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            request.issueDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4 admin-back text-center">
            <h1 className="mb-4">Maintenance Management</h1>
            <ul class="breadcrumb list-inline mt-2">
                <li class="list-inline-item">
                    <Link to="/admin" class="text-secondary text-decoration-none">Home</Link>
                </li>
                <li class="list-inline-item text-secondary">
                    &rarr;
                </li>
                <li class="list-inline-item text-dark">
                    Maintenance Management
                </li>
            </ul>
            {/* <div className="d-flex justify-content-between mb-3">
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search by resident or issue..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button
                    className="btn btn-primary admin_button"
                    data-toggle="modal"
                    data-target="#addMaintenanceModal"
                    onClick={() => openModal(null)}
                >
                    Add Maintenance Request
                </button>
            </div> */}

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
                <tbody>
                    {filteredMaintenance.map((request) => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.residentName}</td>
                            <td>{request.flatNumber}</td>
                            <td>{request.issueDescription}</td>
                            <td>{request.reportedOn}</td>
                            <td>{request.status}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-info"
                                    data-toggle="modal"
                                    data-target="#addMaintenanceModal"
                                    onClick={() => openModal(request)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-success ml-2"
                                    onClick={() => handleMarkAsDone(request.id)}
                                    disabled={request.status === "Completed"}
                                >
                                    Mark as Done
                                </button>
                                <button
                                    className="btn btn-sm btn-danger ml-2"
                                    onClick={() => handleDelete(request.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div
                className="modal fade"
                id="addMaintenanceModal"
                tabIndex="-1"
                aria-labelledby="addMaintenanceModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addMaintenanceModalLabel">
                                {isEdit ? "Edit Maintenance Request" : "Add Maintenance Request"}
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
                        <form onSubmit={handleSave}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="residentName">Resident Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="residentName"
                                        name="residentName"
                                        placeholder="Enter resident's name"
                                        value={modalData.residentName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="flatNumber">Flat Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="flatNumber"
                                        name="flatNumber"
                                        placeholder="Enter flat number"
                                        value={modalData.flatNumber}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="issueDescription">Issue Description</label>
                                    <textarea
                                        className="form-control"
                                        id="issueDescription"
                                        name="issueDescription"
                                        rows="4"
                                        placeholder="Describe the maintenance issue"
                                        value={modalData.issueDescription}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reportedOn">Reported On</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="reportedOn"
                                        name="reportedOn"
                                        value={modalData.reportedOn}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="maintenanceStatus">Status</label>
                                    <select
                                        className="form-control"
                                        id="maintenanceStatus"
                                        name="status"
                                        value={modalData.status}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
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
