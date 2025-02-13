// import React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import '../resident/css/profile_management.css';

// export default function Profile_Management() {

//   const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/120");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     password: "",
//   });
//   const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state

//   // Fetch user data (mocked here)
//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       // Simulated API call
//       const data = {
//         fullName: "Nikita Chadudhari",
//         email: "nikitachaudhari45800@gmail.com",
//         phone: "123-456-7890",
//         address: "123 Main Street, City, Country",
//         // profilePicture: "https://via.placeholder.com/120",
//       };
//       setFormData(data);
//       setProfilePicture(data.profilePicture);
//     };

//     fetchUserProfile();
//   }, []);

//   // Handle profile picture preview
//   const handleProfilePictureChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProfilePicture(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle input changes
//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Simulate API call to save data
//     setTimeout(() => {
//       setIsPopupVisible(true); // Show popup message
//     }, 500); // Mock API delay
//   };

//   // Close popup
//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <div className="profile-card resident-back">
//       <h3>Manage Your Profile</h3>
//       <div className='resident-back text-center'>
//         <ul class="breadcrumb list-inline mt-2">
//           <li class="list-inline-item">
//             <Link to="/resident" class="text-secondary text-decoration-none">Home</Link>
//           </li>
//           <li class="list-inline-item text-secondary">
//             &rarr;
//           </li>
//           <li class="list-inline-item text-dark">
//             Profile Management
//           </li>
//         </ul>
//       </div>

//       {/* Profile Picture */}
//       {/* <div className="profile-picture">
//         <label htmlFor="profilePictureInput">
//           <img src={profilePicture} alt="Profile" className="profile-picture-preview" />
//         </label>
//         <input
//           type="file"
//           id="profilePictureInput"
//           accept="image/*"
//           onChange={handleProfilePictureChange}
//           className="profile-picture-input"
//         />
//         <p
//           className="profile-picture-label"
//           onClick={() => document.getElementById("profilePictureInput").click()}
//         >
//           Change Profile Picture
//         </p>
//       </div> */}

//       {/* Profile Form */}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="fullName">Full Name</label>
//           <input
//             type="text"
//             id="fullName"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             type="tel"
//             id="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="address">Address</label>
//           <textarea
//             id="address"
//             rows="3"
//             value={formData.address}
//             onChange={handleInputChange}
//           />
//         </div>

//         {/* <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//           <small>Leave blank if you don't want to change the password.</small>
//         </div> */}

//         <button type="submit" className="btn-save save">
//           Save Changes
//         </button>
//       </form>

//       {/* Popup Modal */}
//       {isPopupVisible && (
//         <div className="popup-overlay">
//           <div className="popup">
//             <h4>Profile Updated!</h4>
//             <p>Your changes have been saved successfully.</p>
//             <button onClick={closePopup} className="popup-close-btn">
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../resident/css/profile_management.css";

export default function Profile_Management() {
  // const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/120");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Fetch user data from API
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:9085/resident", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT token if needed
          },
        });

        // const data = await response.json();

        // if (response.ok) {
        //   setFormData(data);
        //   setProfilePicture(data.profilePicture || "https://via.placeholder.com/120");
        // } else {
        //   alert(`Error: ${data.message || "Failed to load profile data!"}`);
        // }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle profile picture change
  // const handleProfilePictureChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       // setProfilePicture(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

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
      const response = await fetch("http://localhost:8089/resident/add", {
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
            <Link to="/resident" className="text-secondary text-decoration-none">
              Home
            </Link>
          </li>
          <li className="list-inline-item text-secondary">→</li>
          <li className="list-inline-item text-dark">Profile Management</li>
        </ul>
      </div>

      {/* Profile Picture
      <div className="profile-picture">
        <label htmlFor="profilePictureInput">
          <img src={profilePicture} alt="Profile" className="profile-picture-preview" />
        </label>
        <input
          type="file"
          id="profilePictureInput"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="profile-picture-input"
        />
        <p
          className="profile-picture-label"
          onClick={() => document.getElementById("profilePictureInput").click()}
        >
          Change Profile Picture
        </p>
      </div> */}

      {/* Profile Form */}
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
          <label htmlFor="address">Flat Number</label>
          <input 
            type="text"
            id="FlatNumber"
            rows="3"
            value={formData.flatNumber}
            onChange={handleInputChange}
          />
        </div> 

        {/* <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <small>Leave blank if you don't want to change the password.</small>
        </div> */}

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
