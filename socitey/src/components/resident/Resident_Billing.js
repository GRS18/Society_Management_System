import React from 'react';

export default function Resident_Billing() {
  return (
   <>
    <div className="summary-card text-center">
        <h3>Billing Summary</h3>
        <div className="row">
            <div className="col-md-4">
                <p><strong>Total Due:</strong> $500</p>
            </div>
            <div className="col-md-4">
                <p><strong>Paid:</strong> $300</p>
            </div>
            <div className="col-md-4">
                <p><strong>Pending:</strong> $200</p>
            </div>
        </div>
    </div>

    <div className="billing-card">
        <h4>Billing Details</h4>
        <table className="table table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Invoice Number</th>
                    <th>Due Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>INV00123</td>
                    <td>2024-11-20</td>
                    <td>$200</td>
                    <td><span className="badge badge-pending">Pending</span></td>
                    <td><button className="btn btn-primary btn-sm">Pay Now</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>INV00122</td>
                    <td>2024-11-10</td>
                    <td>$100</td>
                    <td><span className="badge badge-paid">Paid</span></td>
                    <td><button className="btn btn-secondary btn-sm" disabled>Paid</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>INV00121</td>
                    <td>2024-10-30</td>
                    <td>$200</td>
                    <td><span className="badge badge-paid">Paid</span></td>
                    <td><button className="btn btn-secondary btn-sm" disabled>Paid</button></td>
                </tr>
            </tbody>
        </table>
    </div>

   </>
  );
}
