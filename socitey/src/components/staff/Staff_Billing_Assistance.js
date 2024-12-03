import React from 'react';

export default function Staff_Billing_Assistance() {
  return (
   <>
    <div className="card-custom">
        <h3 className="text-center">Billing Assistance</h3>
        <p className="text-center">Manage and assist with residents' billing and payment statuses.</p>
    </div>

    <div className="card-custom mt-4">
        <h4>Search and Filter</h4>
        <form className="form-inline justify-content-between">
            <input type="text" className="form-control mb-2 mr-sm-2" id="searchResident" placeholder="Search by Resident Name or Flat Number"/>
            <select className="form-control mb-2 mr-sm-2" id="paymentStatus">
                <option value="">All Payment Status</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="overdue">Overdue</option>
            </select>
            <button type="submit" className="btn btn-custom mb-2">Search</button>
        </form>
    </div>

    <div className="card-custom mt-4">
        <h4>Resident Billing Overview</h4>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Resident Name</th>
                    <th>Flat Number</th>
                    <th>Billing Period</th>
                    <th>Amount Due</th>
                    <th>Payment Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>A-101</td>
                    <td>Oct 2024</td>
                    <td>$200</td>
                    <td><span className="badge badge-warning">Unpaid</span></td>
                    <td>
                        <button className="btn btn-custom btn-sm">View Details</button>
                        <button className="btn btn-success btn-sm">Mark as Paid</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maria Smith</td>
                    <td>B-202</td>
                    <td>Sep 2024</td>
                    <td>$180</td>
                    <td><span className="badge badge-success">Paid</span></td>
                    <td>
                        <button className="btn btn-custom btn-sm">View Details</button>
                        <button className="btn btn-secondary btn-sm" disabled>Paid</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Robert Brown</td>
                    <td>C-303</td>
                    <td>Oct 2024</td>
                    <td>$250</td>
                    <td><span className="badge badge-warning">Unpaid</span></td>
                    <td>
                        <button className="btn btn-custom btn-sm">View Details</button>
                        <button className="btn btn-success btn-sm">Mark as Paid</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

   </>
  );
}
