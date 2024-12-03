import React from 'react';

export default function Visitor_Management2() {
  return (
    <>
    <div className="container mt-4">
        <h1 className="mb-4">Visitor Management</h1>

        <div className="d-flex justify-content-between mb-3">
            <input type="text" className="form-control w-50" id="searchVisitorInput" placeholder="Search visitors..."/>
            <button className="btn btn-primary" data-toggle="modal" data-target="#addVisitorModal">Add Visitor</button>
        </div>

        <table className="table table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Flat Visiting</th>
                    <th>Purpose</th>
                    <th>Check-In</th>
                    <th>Check-Out</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="visitorTable">
                <tr>
                    <td>1</td>
                    <td>Jane Smith</td>
                    <td>B-202</td>
                    <td>Delivery</td>
                    <td>10:00 AM</td>
                    <td>10:30 AM</td>
                    <td>
                        <button className="btn btn-sm btn-info" data-toggle="modal" data-target="#addVisitorModal">Edit</button>
                        <button className="btn btn-sm btn-danger">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="modal fade" id="addVisitorModal" tabindex="-1" aria-labelledby="addVisitorModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addVisitorModalLabel">Add/Edit Visitor</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div className="modal-body">
                        <div className="form-group">
                            <label for="visitorName">Visitor Name</label>
                            <input type="text" className="form-control" id="visitorName" placeholder="Enter visitor's name" required/>
                        </div>
                        <div className="form-group">
                            <label for="flatVisiting">Flat Visiting</label>
                            <input type="text" className="form-control" id="flatVisiting" placeholder="Enter flat number" required/>
                        </div>
                        <div className="form-group">
                            <label for="purpose">Purpose</label>
                            <select className="form-control" id="purpose" required>
                                <option value="Delivery">Delivery</option>
                                <option value="Guest">Guest</option>
                                <option value="Service">Service</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="checkInTime">Check-In Time</label>
                            <input type="time" className="form-control" id="checkInTime" required/>
                        </div>
                        <div className="form-group">
                            <label for="checkOutTime">Check-Out Time</label>
                            <input type="time" className="form-control" id="checkOutTime"/>
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
