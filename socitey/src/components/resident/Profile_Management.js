
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../resident/css/profile_management.css";

export default function AddResident() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    flatNumber: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Handle Input Changes
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle Form Submission (POST Request)
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8089/resident/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT if needed
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsPopupVisible(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          flatNumber: "",
        });
      } else {
        alert(`Error: ${result.message || "Failed to add resident!"}`);
      }
    } catch (error) {
      console.error("Error adding resident:", error);
      alert("Failed to add resident. Please try again.");
    }
  };

  // Close Popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="profile-card resident-back">
      <h3>Add New Resident</h3>
      <div className="resident-back text-center">
        <ul className="breadcrumb list-inline mt-2">
          <li className="list-inline-item">
            <Link to="/resident" className="text-secondary text-decoration-none">
              Home
            </Link>
          </li>
          <li className="list-inline-item text-secondary">→</li>
          <li className="list-inline-item text-dark">Add Resident</li>
        </ul>
      </div>

      {/* Resident Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="flatNumber">Flat Number</label>
          <input
            type="text"
            id="flatNumber"
            value={formData.flatNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn-save save">
          Add Resident
        </button>
      </form>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h4>Resident Added!</h4>
            <p>The new resident has been added successfully.</p>
            <button onClick={closePopup} className="popup-close-btn">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
