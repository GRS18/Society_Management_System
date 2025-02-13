import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../resident/css/profile_management.css";

export default function Profile_Management() {
  // const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/120");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Fetch user data from API
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:8089/staff/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT token if needed
          },
        });

      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle input changes
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission with API call
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8089/staff/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token if required
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsPopupVisible(true); // Show success message
      } else {
        alert(`Error: ${result.message || "Something went wrong!"}`);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  // Close popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="profile-card resident-back">
      <h3>Manage Your Profile</h3>
      <div className="resident-back text-center">
        <ul className="breadcrumb list-inline mt-2">
          <li className="list-inline-item">
            <Link to="/staff" className="text-secondary text-decoration-none">
              Home
            </Link>
          </li>
          <li className="list-inline-item text-secondary">→</li>
          <li className="list-inline-item text-dark">Profile Management</li>
        </ul>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
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

        
        <button type="submit" className="btn-save save">
          Save Changes
        </button>
      </form>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h4>Profile Updated!</h4>
            <p>Your changes have been saved successfully.</p>
            <button onClick={closePopup} className="popup-close-btn">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
