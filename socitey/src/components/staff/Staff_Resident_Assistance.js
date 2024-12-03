import React from 'react';

export default function Staff_Resident_Assistance() {
  return (
   <>
    <div className="card-custom">
        <h3 className="text-center">Resident Assistance Requests</h3>
        <p className="text-center">Manage and resolve assistance requests submitted by residents.</p>
    </div>

    <div className="card-custom mt-4">
        <h4>Requests Overview</h4>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Resident Name</th>
                    <th>Flat Number</th>
                    <th>Type of Request</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>Flat A-101</td>
                    <td>Plumbing Issue</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td>
                        <button className="btn btn-update btn-sm">Mark as Completed</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>Flat B-202</td>
                    <td>Electrical Problem</td>
                    <td><span className="badge badge-warning">Pending</span></td>
                    <td>
                        <button className="btn btn-update btn-sm">Mark as Completed</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Robert Brown</td>
                    <td>Flat C-303</td>
                    <td>Cleaning Request</td>
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
