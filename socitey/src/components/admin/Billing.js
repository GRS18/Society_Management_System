import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
export default function Billing() {

const [billingData, setBillingData] = useState([
    {
      id: 1,
      residentName: "Girish Shinde",
      flatNumber: "A-101",
      billAmount: 150,
      dueDate: "2024-12-01",
      status: "Unpaid",
    },
  ]);

  // State for form data
  const [formData, setFormData] = useState({
    id: null,
    residentName: "",
    flatNumber: "",
    billAmount: "",
    dueDate: "",
    status: "Unpaid",
  });

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (add or edit)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.id) {
      // Edit existing record
      setBillingData((prevData) =>
        prevData.map((bill) =>
          bill.id === formData.id
            ? { ...bill, ...formData, billAmount: Number(formData.billAmount) }
            : bill
        )
      );
    } else {
      // Add new record
      setBillingData((prevData) => [
        ...prevData,
        {
          id: Date.now(),
          ...formData,
          billAmount: Number(formData.billAmount),
        },
      ]);
    }

    // Clear form and close modal
    setFormData({
      id: null,
      residentName: "",
      flatNumber: "",
      billAmount: "",
      dueDate: "",
      status: "Unpaid",
    });

    // Close the modal
    document.querySelector("#addBillModal .close").click();
  };

  // Handle edit button click
  const handleEdit = (bill) => {
    setFormData({ ...bill });
    document.querySelector("#addBillModal").classList.add("show");
  };

  // Handle delete
  const handleDelete = (id) => {
    setBillingData((prevData) => prevData.filter((bill) => bill.id !== id));
  };

  // Handle payment
  const handlePayment = (id) => {
    setBillingData((prevData) =>
      prevData.map((bill) =>
        bill.id === id ? { ...bill, status: "Paid" } : bill
      )
    );
  };

  // Filter billing data based on search term
  const filteredBillingData = billingData.filter(
    (bill) =>
      bill.residentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.flatNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4 admin-back text-center">
      <h1 className="mb-4">Billing & Payments</h1>
      <ul class="breadcrumb list-inline mt-2">
              <li class="list-inline-item">
                <Link to="/admin" class="text-secondary text-decoration-none">Home</Link>
              </li>
              <li class="list-inline-item text-secondary">
                &rarr;
              </li>
              <li class="list-inline-item text-dark">
                Billing & Payments
              </li>
            </ul>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by resident or flat..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-primary admin_button"
          data-toggle="modal"
          data-target="#addBillModal"
        >
          Generate Bill
        </button>
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
        <tbody>
          {filteredBillingData.map((bill, index) => (
            <tr key={bill.id}>
              <td>{index + 1}</td>
              <td>{bill.residentName}</td>
              <td>{bill.flatNumber}</td>
              <td>${bill.billAmount}</td>
              <td>{bill.dueDate}</td>
              <td>{bill.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => handleEdit(bill)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => handlePayment(bill.id)}
                  disabled={bill.status === "Paid"}
                >
                  Pay
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(bill.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <div
        className="modal fade"
        id="addBillModal"
        tabIndex="-1"
        aria-labelledby="addBillModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addBillModalLabel">
                {formData.id ? "Edit Bill" : "Generate Bill"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="residentName">Resident Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="residentName"
                    name="residentName"
                    value={formData.residentName}
                    onChange={handleChange}
                    placeholder="Enter resident's name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="flatNumber">Flat Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="flatNumber"
                    name="flatNumber"
                    value={formData.flatNumber}
                    onChange={handleChange}
                    placeholder="Enter flat number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="billAmount">Bill Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="billAmount"
                    name="billAmount"
                    value={formData.billAmount}
                    onChange={handleChange}
                    placeholder="Enter bill amount"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="billStatus">Status</label>
                  <select
                    className="form-control"
                    id="billStatus"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="Unpaid">Unpaid</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
