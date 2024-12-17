import React from 'react';
import { useState } from 'react';
import '../resident/css/resident_billing.css';


export default function Resident_Billing() {
//   return (
//    <>
//     <div className="summary-card text-center">
//         <h3>Billing Summary</h3>
//         <div className="row">
//             <div className="col-md-4">
//                 <p><strong>Total Due:</strong> $500</p>
//             </div>
//             <div className="col-md-4">
//                 <p><strong>Paid:</strong> $300</p>
//             </div>
//             <div className="col-md-4">
//                 <p><strong>Pending:</strong> $200</p>
//             </div>
//         </div>
//     </div>

//     <div className="billing-card">
//         <h4>Billing Details</h4>
//         <table className="table table-bordered table-hover">
//             <thead className="thead-dark">
//                 <tr>
//                     <th>#</th>
//                     <th>Invoice Number</th>
//                     <th>Due Date</th>
//                     <th>Amount</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>INV00123</td>
//                     <td>2024-11-20</td>
//                     <td>$200</td>
//                     <td><span className="badge badge-pending">Pending</span></td>
//                     <td><button className="btn btn-primary btn-sm">Pay Now</button></td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>INV00122</td>
//                     <td>2024-11-10</td>
//                     <td>$100</td>
//                     <td><span className="badge badge-paid">Paid</span></td>
//                     <td><button className="btn btn-secondary btn-sm" disabled>Paid</button></td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>INV00121</td>
//                     <td>2024-10-30</td>
//                     <td>$200</td>
//                     <td><span className="badge badge-paid">Paid</span></td>
//                     <td><button className="btn btn-secondary btn-sm" disabled>Paid</button></td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>

//    </>
//   );



const [billingData, setBillingData] = useState({
    totalDue: 500,
    paid: 300,
    pending: 200,
    invoices: [
      {
        id: 1,
        invoiceNumber: "INV00123",
        dueDate: "2024-11-20",
        amount: 200,
        status: "Pending",
      },
      {
        id: 2,
        invoiceNumber: "INV00122",
        dueDate: "2024-11-10",
        amount: 100,
        status: "Paid",
      },
      {
        id: 3,
        invoiceNumber: "INV00121",
        dueDate: "2024-10-30",
        amount: 200,
        status: "Paid",
      },
    ],
  });

  // Handle payment action
  const handlePayNow = (invoiceId) => {
    setBillingData((prevData) => {
      // Update the invoices list
      const updatedInvoices = prevData.invoices.map((invoice) =>
        invoice.id === invoiceId ? { ...invoice, status: "Paid" } : invoice
      );

      // Recalculate totalPaid and pending amounts
      const newlyPaidInvoice = prevData.invoices.find((inv) => inv.id === invoiceId);
      const newPaid = prevData.paid + newlyPaidInvoice.amount;
      const newPending = prevData.pending - newlyPaidInvoice.amount;

      return {
        ...prevData,
        invoices: updatedInvoices,
        paid: newPaid,
        pending: newPending,
      };
    });
  };

  return (
    <div className="billing-section">
      {/* Billing Summary */}
      <div className="summary-card text-center">
        <h3>Billing Summary</h3>
        <div className="row">
          <div className="col-md-4">
            <p>
              <strong>Total Due:</strong> ${billingData.totalDue}
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Paid:</strong> ${billingData.paid}
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <strong>Pending:</strong> ${billingData.pending}
            </p>
          </div>
        </div>
      </div>

      {/* Billing Details */}
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
            {billingData.invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.invoiceNumber}</td>
                <td>{invoice.dueDate}</td>
                <td>${invoice.amount}</td>
                <td>
                  <span
                    className={
                      invoice.status === "Pending"
                        ? "badge badge-pending"
                        : "badge badge-paid"
                    }
                  >
                    {invoice.status}
                  </span>
                </td>
                <td>
                  {invoice.status === "Pending" ? (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handlePayNow(invoice.id)}
                    >
                      Pay Now
                    </button>
                  ) : (
                    <button className="btn btn-secondary btn-sm" disabled>
                      Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
