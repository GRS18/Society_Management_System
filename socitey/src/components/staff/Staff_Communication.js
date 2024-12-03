import React from 'react';

export default function Staff_Communication() {
  return (
    <>
    <div className="card-custom">
        <h3 className="text-center">Communication Assistance</h3>
        <p className="text-center">Manage communication threads between staff and residents.</p>
    </div>

    <div className="card-custom mt-4">
        <h4>Search and Filter</h4>
        <form className="form-inline justify-content-between">
            <input type="text" className="form-control mb-2 mr-sm-2" id="searchMessage" placeholder="Search by Resident Name or Message"/>
            <select className="form-control mb-2 mr-sm-2" id="communicationStatus">
                <option value="">All Status</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
                <option value="archived">Archived</option>
            </select>
            <button type="submit" className="btn btn-custom mb-2">Search</button>
        </form>
    </div>

    <div className="card-custom mt-4">
        <h4>Communication Overview</h4>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Resident Name</th>
                    <th>Message Subject</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>Water Supply Issue</td>
                    <td><span className="badge badge-primary">Unread</span></td>
                    <td>
                        <button className="btn btn-success btn-sm">Reply</button>
                        <button className="btn btn-secondary btn-sm">Archive</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maria Smith</td>
                    <td>Electrical Maintenance Request</td>
                    <td><span className="badge badge-secondary">Read</span></td>
                    <td>
                        <button className="btn btn-success btn-sm">Reply</button>
                        <button className="btn btn-secondary btn-sm">Archive</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Alex Brown</td>
                    <td>Request for Cleaning Services</td>
                    <td><span className="badge badge-secondary">Read</span></td>
                    <td>
                        <button className="btn btn-success btn-sm">Reply</button>
                        <button className="btn btn-secondary btn-sm">Archive</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    </>
  );
}
