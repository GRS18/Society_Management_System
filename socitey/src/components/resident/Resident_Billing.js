// import React from 'react';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import '../resident/css/resident_billing.css';


// export default function Resident_Billing() {

// const [billingData, setBillingData] = useState({
//     totalDue: 500,
//     paid: 300,
//     pending: 200,
//     invoices: [
//       {
//         id: 1,
//         invoiceNumber: "INV00123",
//         dueDate: "2024-11-20",
//         amount: 200,
//         status: "Pending",
//       },
//       {
//         id: 2,
//         invoiceNumber: "INV00122",
//         dueDate: "2024-11-10",
//         amount: 100,
//         status: "Paid",
//       },
//       {
//         id: 3,
//         invoiceNumber: "INV00121",
//         dueDate: "2024-10-30",
//         amount: 200,
//         status: "Paid",
//       },
//     ],
//   });

//   // Handle payment action
//   const handlePayNow = (invoiceId) => {
//     setBillingData((prevData) => {
//       // Update the invoices list
//       const updatedInvoices = prevData.invoices.map((invoice) =>
//         invoice.id === invoiceId ? { ...invoice, status: "Paid" } : invoice
//       );

//       // Recalculate totalPaid and pending amounts
//       const newlyPaidInvoice = prevData.invoices.find((inv) => inv.id === invoiceId);
//       const newPaid = prevData.paid + newlyPaidInvoice.amount;
//       const newPending = prevData.pending - newlyPaidInvoice.amount;

//       return {
//         ...prevData,
//         invoices: updatedInvoices,
//         paid: newPaid,
//         pending: newPending,
//       };
//     });
//   };

//   return (
//     <div className="billing-section">
//       {/* Billing Summary */}
//       <div className="summary-card text-center resident-back text-center">
//       <ul class="breadcrumb list-inline mt-2">
//           <li class="list-inline-item">
//             <Link to="/resident" class="text-secondary text-decoration-none">Home</Link>
//           </li>
//           <li class="list-inline-item text-secondary">
//             &rarr;
//           </li>
//           <li class="list-inline-item text-dark">
//             Billing Summary
//           </li>
//         </ul>
//         <h3><strong>Billing Summary</strong></h3>
//         <br/>
//         <div className="row">
//           <div className="col-md-4">
//             <p>
//               <strong>Total Due:</strong> ${billingData.totalDue}
//             </p>
//           </div>
//           <div className="col-md-4">
//             <p>
//               <strong>Paid:</strong> ${billingData.paid}
//             </p>
//           </div>
//           <div className="col-md-4">
//             <p>
//               <strong>Pending:</strong> ${billingData.pending}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Billing Details */}
//       <div className="billing-card">
//         <h4>Billing Details</h4>
//         <table className="table table-bordered table-hover">
//           <thead className="thead-dark">
//             <tr>
//               <th>#</th>
//               <th>Invoice Number</th>
//               <th>Due Date</th>
//               <th>Amount</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {billingData.invoices.map((invoice) => (
//               <tr key={invoice.id}>
//                 <td>{invoice.id}</td>
//                 <td>{invoice.invoiceNumber}</td>
//                 <td>{invoice.dueDate}</td>
//                 <td>${invoice.amount}</td>
//                 <td>
//                   <span
//                     className={
//                       invoice.status === "Pending"
//                         ? "badge badge-pending"
//                         : "badge badge-paid"
//                     }
//                   >
//                     {invoice.status}
//                   </span>
//                 </td>
//                 <td>
//                   {invoice.status === "Pending" ? (
//                     <button
//                       className="btn btn-primary btn-sm"
//                       onClick={() => handlePayNow(invoice.id)}
//                     >
//                       Pay Now
//                     </button>
//                   ) : (
//                     <button className="btn btn-secondary btn-sm" disabled>
//                       Paid
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import '../resident/css/resident_billing.css';

// export default function Resident_Billing() {
//   const [billingData, setBillingData] = useState({
//     totalDue: 500,
//     paid: 300,
//     pending: 200,
//     invoices: [
//       {
//         id: 1,
//         invoiceNumber: "INV00123",
//         dueDate: "2024-11-20",
//         amount: 200,
//         status: "Pending",
//       },
//       {
//         id: 2,
//         invoiceNumber: "INV00122",
//         dueDate: "2024-11-10",
//         amount: 100,
//         status: "Paid",
//       },
//       {
//         id: 3,
//         invoiceNumber: "INV00121",
//         dueDate: "2024-10-30",
//         amount: 200,
//         status: "Paid",
//       },
//     ],
//   });

//   // Handle payment action
//   const handlePayNow = (invoiceId) => {
//     setBillingData((prevData) => {
//       // Update the invoices list
//       const updatedInvoices = prevData.invoices.map((invoice) =>
//         invoice.id === invoiceId ? { ...invoice, status: "Paid" } : invoice
//       );

//       // Recalculate totalPaid and pending amounts
//       const newlyPaidInvoice = prevData.invoices.find((inv) => inv.id === invoiceId);
//       const newPaid = prevData.paid + newlyPaidInvoice.amount;
//       const newPending = prevData.pending - newlyPaidInvoice.amount;

//       return {
//         ...prevData,
//         invoices: updatedInvoices,
//         paid: newPaid,
//         pending: newPending,
//       };
//     });

//     // Fetch the order details from your backend
//     const amount = 200; // You can fetch the actual amount from the invoice
//     fetch('http://localhost:8080/api/payment/create-order', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ amount: amount }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.orderId) {
//           // Initialize Razorpay checkout
//           const options = {
//             key: "rzp_test_rUtk2gJAuflYje", // Your Razorpay key id
//             amount: data.amount, // Amount from the order response (in paise)
//             currency: data.currency,
//             name: "Resident Payment",
//             description: "Payment for invoice #" + invoiceId,
//             image: "https://example.com/logo.png", // Optional logo for your company
//             order_id: data.orderId,
//             handler: function (response) {
//               // Here, we verify payment and save payment details
//               verifyPayment(response);
//             },
//             prefill: {
//               name: "Resident Name", // Optional - fill with user data
//               email: "email@example.com", // Optional - fill with user data
//               contact: "9999999999", // Optional - fill with user data
//             },
//             notes: {
//               address: "Customer address", // Optional
//             },
//           };

//           const razorpay = new window.Razorpay(options);
//           razorpay.open();
//         }
//       })
//       .catch(error => {
//         console.error('Error creating order:', error);
//         alert('Error initiating payment');
//       });
//   };

//   // Payment verification function
//   const verifyPayment = (paymentResponse) => {
//     const paymentData = {
//       orderId: paymentResponse.order_id,
//       paymentId: paymentResponse.razorpay_payment_id,
//     };

//     fetch('http://localhost:8080/api/payment/verify-payment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(paymentData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.status === "success") {
//           alert('Payment successful!');
//         } else {
//           alert('Payment verification failed!');
//         }
//       })
//       .catch(error => {
//         console.error('Error verifying payment:', error);
//         alert('Payment verification failed!');
//       });
//   };

//   return (
//     <div className="billing-section">
//       {/* Billing Summary */}
//       <div className="summary-card text-center resident-back text-center">
//         <ul className="breadcrumb list-inline mt-2">
//           <li className="list-inline-item">
//             <Link to="/resident" className="text-secondary text-decoration-none">Home</Link>
//           </li>
//           <li className="list-inline-item text-secondary">
//             &rarr;
//           </li>
//           <li className="list-inline-item text-dark">
//             Billing Summary
//           </li>
//         </ul>
//         <h3><strong>Billing Summary</strong></h3>
//         <br />
//         <div className="row">
//           <div className="col-md-4">
//             <p>
//               <strong>Total Due:</strong> ${billingData.totalDue}
//             </p>
//           </div>
//           <div className="col-md-4">
//             <p>
//               <strong>Paid:</strong> ${billingData.paid}
//             </p>
//           </div>
//           <div className="col-md-4">
//             <p>
//               <strong>Pending:</strong> ${billingData.pending}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Billing Details */}
//       <div className="billing-card">
//         <h4>Billing Details</h4>
//         <table className="table table-bordered table-hover">
//           <thead className="thead-dark">
//             <tr>
//               <th>#</th>
//               <th>Invoice Number</th>
//               <th>Due Date</th>
//               <th>Amount</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {billingData.invoices.map((invoice) => (
//               <tr key={invoice.id}>
//                 <td>{invoice.id}</td>
//                 <td>{invoice.invoiceNumber}</td>
//                 <td>{invoice.dueDate}</td>
//                 <td>${invoice.amount}</td>
//                 <td>
//                   <span
//                     className={
//                       invoice.status === "Pending"
//                         ? "badge badge-pending"
//                         : "badge badge-paid"
//                     }
//                   >
//                     {invoice.status}
//                   </span>
//                 </td>
//                 <td>
//                   {invoice.status === "Pending" ? (
//                     <button
//                       className="btn btn-primary btn-sm"
//                       onClick={() => handlePayNow(invoice.id)}
//                     >
//                       Pay Now
//                     </button>
//                   ) : (
//                     <button className="btn btn-secondary btn-sm" disabled>
//                       Paid
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';  // Import axios
import '../resident/css/resident_billing.css';

export default function Resident_Billing() {
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

    // Fetch the order details from your backend using axios
    const amount = 200; // You can fetch the actual amount from the invoice
    axios
      .post('http://localhost:8080/api/payment/create-order', { amount: amount })
      .then(response => {
        const data = response.data;
        if (data.orderId) {
          // Initialize Razorpay checkout
          const options = {
            key: "rzp_test_rUtk2gJAuflYje", // Your Razorpay key id
            amount: data.amount, // Amount from the order response (in paise)
            currency: data.currency,
            name: "Resident Payment",
            description: "Payment for invoice #" + invoiceId,
            image: "https://example.com/logo.png", // Optional logo for your company
            order_id: data.orderId,
            handler: function (response) {
              // Here, we verify payment and save payment details
              verifyPayment(response);
            },
            prefill: {
              name: "Resident Name", // Optional - fill with user data
              email: "email@example.com", // Optional - fill with user data
              contact: "9999999999", // Optional - fill with user data
            },
            notes: {
              address: "Customer address", // Optional
            },
          };

          const razorpay = new window.Razorpay(options);
          razorpay.open();
        }
      })
      .catch(error => {
        console.error('Error creating order:', error);
        alert('Error initiating payment');
      });
  };

  // Payment verification function using axios
  const verifyPayment = (paymentResponse) => {
    const paymentData = {
      orderId: paymentResponse.order_id,
      paymentId: paymentResponse.razorpay_payment_id,
    };

    axios
      .post('http://localhost:8080/api/payment/verify-payment', paymentData)
      .then(response => {
        const data = response.data;
        if (data.status === "success") {
          alert('Payment successful!');
        } else {
          alert('Payment verification failed!');
        }
      })
      .catch(error => {
        console.error('Error verifying payment:', error);
        alert('Payment verification failed!');
      });
  };

  return (
    <div className="billing-section">
      {/* Billing Summary */}
      <div className="summary-card text-center resident-back text-center">
        <ul className="breadcrumb list-inline mt-2">
          <li className="list-inline-item">
            <Link to="/resident" className="text-secondary text-decoration-none">Home</Link>
          </li>
          <li className="list-inline-item text-secondary">
            &rarr;
          </li>
          <li className="list-inline-item text-dark">
            Billing Summary
          </li>
        </ul>
        <h3><strong>Billing Summary</strong></h3>
        <br />
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

