import React from 'react';

export default function Visitor_Management() {
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
                    <th>Visitor Name</th>
                    <th>Contact Number</th>
                    <th>Flat Visiting</th>
                    <th>Entry Time</th>
                    <th>Exit Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="visitorTable">
                <tr>
                    <td>1</td>
                    <td>Jane Doe</td>
                    <td>+1234567890</td>
                    <td>A-102</td>
                    <td>10:30 AM</td>
                    <td>12:00 PM</td>
                    <td>Checked Out</td>
                    <td>
                        <button className="btn btn-sm btn-success" disabled>Mark Exit</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mike Smith</td>
                    <td>+9876543210</td>
                    <td>B-201</td>
                    <td>09:00 AM</td>
                    <td>-</td>
                    <td>In Premises</td>
                    <td>
                        <button className="btn btn-sm btn-danger">Mark Exit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="modal fade" id="addVisitorModal" tabindex="-1" aria-labelledby="addVisitorModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addVisitorModalLabel">Add Visitor</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div className="modal-body">
                        <div className="form-group">
                            <label for="visitorName">Visitor Name</label>
                            <input type="text" className="form-control" id="visitorName" placeholder="Enter visitor name" required/>
                        </div>
                        <div className="form-group">
                            <label for="visitorContact">Contact Number</label>
                            <input type="text" className="form-control" id="visitorContact" placeholder="Enter contact number" required/>
                        </div>
                        <div className="form-group">
                            <label for="flatVisiting">Flat Visiting</label>
                            <input type="text" className="form-control" id="flatVisiting" placeholder="Enter flat number"required/>
                        </div>
                        <div className="form-group">
                            <label for="entryTime">Entry Time</label>
                            <input type="time" className="form-control" id="entryTime" required/>
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
   </>
  );
}
