import React from 'react';

export default function Billing() {
  return (
    <>
    <div className="container mt-4">
        <h1 className="mb-4">Billing & Payments</h1>

        <div className="d-flex justify-content-between mb-3">
            <input type="text" className="form-control w-50" id="searchBillingInput" placeholder="Search by resident or flat..."/>
            <button className="btn btn-primary" data-toggle="modal" data-target="#addBillModal">Generate Bill</button>
        </div>

        
        <table className="table table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Resident Name</th>
                    <th>Flat Number</th>
                    <th>Bill Amount</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="billingTable">
               
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>A-101</td>
                    <td>$150</td>
                    <td>2024-12-01</td>
                    <td>Unpaid</td>
                    <td>
                        <button className="btn btn-sm btn-info" data-toggle="modal" data-target="#addBillModal">Edit</button>
                        <button className="btn btn-sm btn-success">Pay</button>
                        <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

   
    <div className="modal fade" id="addBillModal" tabindex="-1" aria-labelledby="addBillModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addBillModalLabel">Generate/Edit Bill</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div className="modal-body">
                        <div className="form-group">
                            <label for="residentName">Resident Name</label>
                            <input type="text" className="form-control" id="residentName" placeholder="Enter resident's name" required/>
                        </div>
                        <div className="form-group">
                            <label for="flatNumber">Flat Number</label>
                            <input type="text" className="form-control" id="flatNumber" placeholder="Enter flat number" required/>
                        </div>
                        <div className="form-group">
                            <label for="billAmount">Bill Amount</label>
                            <input type="number" className="form-control" id="billAmount" placeholder="Enter bill amount" required/>
                        </div>
                        <div className="form-group">
                            <label for="dueDate">Due Date</label>
                            <input type="date" className="form-control" id="dueDate" required/>
                        </div>
                        <div className="form-group">
                            <label for="billStatus">Status</label>
                            <select className="form-control" id="billStatus" required>
                                <option value="Unpaid">Unpaid</option>
                                <option value="Paid">Paid</option>
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
