import React from 'react';
import { useState } from 'react';
import '../staff/css/staff_billing_assistance.css';


export default function Staff_Billing_Assistance() {
//   return (
//    <>
//     <div className="card-custom">
//         <h3 className="text-center">Billing Assistance</h3>
//         <p className="text-center">Manage and assist with residents' billing and payment statuses.</p>
//     </div>

//     <div className="card-custom mt-4">
//         <h4>Search and Filter</h4>
//         <form className="form-inline justify-content-between">
//             <input type="text" className="form-control mb-2 mr-sm-2" id="searchResident" placeholder="Search by Resident Name or Flat Number"/>
//             <select className="form-control mb-2 mr-sm-2" id="paymentStatus">
//                 <option value="">All Payment Status</option>
//                 <option value="paid">Paid</option>
//                 <option value="unpaid">Unpaid</option>
//                 <option value="overdue">Overdue</option>
//             </select>
//             <button type="submit" className="btn btn-custom mb-2">Search</button>
//         </form>
//     </div>

//     <div className="card-custom mt-4">
//         <h4>Resident Billing Overview</h4>
//         <table className="table table-bordered table-hover">
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Resident Name</th>
//                     <th>Flat Number</th>
//                     <th>Billing Period</th>
//                     <th>Amount Due</th>
//                     <th>Payment Status</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>John Doe</td>
//                     <td>A-101</td>
//                     <td>Oct 2024</td>
//                     <td>$200</td>
//                     <td><span className="badge badge-warning">Unpaid</span></td>
//                     <td>
//                         <button className="btn btn-custom btn-sm">View Details</button>
//                         <button className="btn btn-success btn-sm">Mark as Paid</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>Maria Smith</td>
//                     <td>B-202</td>
//                     <td>Sep 2024</td>
//                     <td>$180</td>
//                     <td><span className="badge badge-success">Paid</span></td>
//                     <td>
//                         <button className="btn btn-custom btn-sm">View Details</button>
//                         <button className="btn btn-secondary btn-sm" disabled>Paid</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>Robert Brown</td>
//                     <td>C-303</td>
//                     <td>Oct 2024</td>
//                     <td>$250</td>
//                     <td><span className="badge badge-warning">Unpaid</span></td>
//                     <td>
//                         <button className="btn btn-custom btn-sm">View Details</button>
//                         <button className="btn btn-success btn-sm">Mark as Paid</button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>

//    </>
//   );

  // State to manage resident billing data
  const [billingData, setBillingData] = useState([
    {
      id: 1,
      name: "John Doe",
      flatNumber: "A-101",
      billingPeriod: "Oct 2024",
      amountDue: "$200",
      paymentStatus: "Unpaid",
    },
    {
      id: 2,
      name: "Maria Smith",
      flatNumber: "B-202",
      billingPeriod: "Sep 2024",
      amountDue: "$180",
      paymentStatus: "Paid",
    },
    {
      id: 3,
      name: "Robert Brown",
      flatNumber: "C-303",
      billingPeriod: "Oct 2024",
      amountDue: "$250",
      paymentStatus: "Unpaid",
    },
  ]);

  // State for search and filters
  const [filters, setFilters] = useState({
    searchQuery: "",
    paymentStatus: "",
  });

  // Handle input change for search and filters
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  // Handle search
  const filteredData = billingData.filter((entry) => {
    const matchesSearch =
      entry.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      entry.flatNumber.toLowerCase().includes(filters.searchQuery.toLowerCase());
    const matchesStatus =
      filters.paymentStatus === "" ||
      entry.paymentStatus.toLowerCase() === filters.paymentStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Mark payment as Paid
  const markAsPaid = (id) => {
    setBillingData((prevBillingData) =>
      prevBillingData.map((entry) =>
        entry.id === id
          ? {
              ...entry,
              paymentStatus: "Paid",
            }
          : entry
      )
    );
  };

  return (
    <div className="billing-assistance">
      {/* Header */}
      <div className="card-custom">
        <h3 className="text-center">Billing Assistance</h3>
        <p className="text-center">
          Manage and assist with residents' billing and payment statuses.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="card-custom mt-4">
        <h4>Search and Filter</h4>
        <form
          className="form-inline justify-content-between"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="searchQuery"
            placeholder="Search by Resident Name or Flat Number"
            value={filters.searchQuery}
            onChange={handleFilterChange}
          />
          <select
            className="form-control mb-2 mr-sm-2"
            id="paymentStatus"
            value={filters.paymentStatus}
            onChange={handleFilterChange}
          >
            <option value="">All Payment Status</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
            <option value="overdue">Overdue</option>
          </select>
          <button type="submit" className="btn btn-custom mb-2">
            Search
          </button>
        </form>
      </div>

      {/* Billing Overview */}
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
            {filteredData.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.flatNumber}</td>
                <td>{entry.billingPeriod}</td>
                <td>{entry.amountDue}</td>
                <td>
                  <span
                    className={`badge ${
                      entry.paymentStatus === "Paid"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {entry.paymentStatus}
                  </span>
                </td>
                <td>
                  <button className="btn btn-custom btn-sm">View Details</button>
                  {entry.paymentStatus !== "Paid" ? (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => markAsPaid(entry.id)}
                    >
                      Mark as Paid
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
