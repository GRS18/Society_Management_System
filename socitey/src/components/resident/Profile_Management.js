import React from 'react';
import { useState,useEffect } from 'react';
import '../resident/css/profile_management.css';

export default function Profile_Management() {
//   return (
//    <>
//     <div className="profile-card">
//         <h3>Manage Your Profile</h3>

//         <div className="profile-picture">
//             <label for="profilePictureInput">
//                 <img src="https://via.placeholder.com/120" alt="Profile Picture" id="profilePicturePreview"/>
//             </label>
//             <input type="file" id="profilePictureInput" accept="image/*" onchange="previewProfilePicture(event)"/>
//             <label className="upload-label" for="profilePictureInput">Change Profile Picture</label>
//         </div>

//         <form>
//             <div className="form-group">
//                 <label for="fullName">Full Name</label>
//                 <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" value="John Doe" required/>
//             </div>

//             <div className="form-group">
//                 <label for="email">Email Address</label>
//                 <input type="email" className="form-control" id="email" placeholder="Enter your email" value="johndoe@example.com" required/>
//             </div>

//             <div className="form-group">
//                 <label for="phone">Phone Number</label>
//                 <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" value="123-456-7890" required/>
//             </div>

//             <div className="form-group">
//                 <label for="address">Address</label>
//                 <textarea className="form-control" id="address" rows="3" placeholder="Enter your address">123 Main Street, City, Country</textarea>
//             </div>

//             <div className="form-group">
//                 <label for="password">Password</label>
//                 <input type="password" className="form-control" id="password" placeholder="Enter a new password"/>
//                 <small className="form-text text-muted">Leave blank if you don't want to change the password.</small>
//             </div>

//             <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
//         </form>
//     </div>
//    </>
//   );



const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/120");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state

  // Fetch user data (mocked here)
  useEffect(() => {
    const fetchUserProfile = async () => {
      // Simulated API call
      const data = {
        fullName: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        address: "123 Main Street, City, Country",
        profilePicture: "https://via.placeholder.com/120",
      };
      setFormData(data);
      setProfilePicture(data.profilePicture);
    };

    fetchUserProfile();
  }, []);

  // Handle profile picture preview
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle input changes
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simulate API call to save data
    setTimeout(() => {
      setIsPopupVisible(true); // Show popup message
    }, 500); // Mock API delay
  };

  // Close popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="profile-card">
      <h3>Manage Your Profile</h3>

      {/* Profile Picture */}
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
      </div>

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
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            rows="3"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <small>Leave blank if you don't want to change the password.</small>
        </div>

        <button type="submit" className="btn-save">
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
