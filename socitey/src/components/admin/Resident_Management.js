import React from 'react';

export default function Resident_Management() {
  return (
    <>
    <div className="container mt-4">
        <h1 className="mb-4">Resident Management</h1>

        <div className="d-flex justify-content-between mb-3">
            <input type="text" className="form-control w-50" id="searchInput" placeholder="Search residents..."/>
            <button className="btn btn-primary" data-toggle="modal" data-target="#addEditResidentModal">Add Resident</button>
        </div>

        <table className="table table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Flat Number</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="residentTable">
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>A-101</td>
                    <td>johndoe@example.com</td>
                    <td>+1234567890</td>
                    <td>Active</td>
                    <td>
                        <button className="btn btn-sm btn-info" data-toggle="modal" data-target="#addEditResidentModal">Edit</button>
                        <button className="btn btn-sm btn-danger">Deactivate</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="modal fade" id="addEditResidentModal" tabindex="-1" aria-labelledby="addEditResidentModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addEditResidentModalLabel">Add/Edit Resident</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div className="modal-body">
                        <div className="form-group">
                            <label for="residentName">Name</label>
                            <input type="text" className="form-control" id="residentName" placeholder="Enter resident name" required/>
                        </div>
                        <div className="form-group">
                            <label for="residentFlat">Flat Number</label>
                            <input type="text" className="form-control" id="residentFlat" placeholder="Enter flat number" required/>
                        </div>
                        <div className="form-group">
                            <label for="residentEmail">Email</label>
                            <input type="email" className="form-control" id="residentEmail" placeholder="Enter email address" required/>
                        </div>
                        <div className="form-group">
                            <label for="residentPhone">Phone</label>
                            <input type="text" className="form-control" id="residentPhone" placeholder="Enter phone number" required/>
                        </div>
                        <div className="form-group">
                            <label for="residentStatus">Status</label>
                            <select className="form-control" id="residentStatus" required>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
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
