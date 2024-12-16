import React from 'react';
import { useState } from 'react';
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



const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/120');

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main Street, City, Country',
    password: '',
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle profile picture preview
  const previewProfilePicture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Profile Updated Successfully!');
  };

  return (
    <div className="profile-card" 
    //style={styles.card}
    >
      <h3>Manage Your Profile</h3>

      {/* Profile Picture Upload */}
      <div 
      //style={styles.profilePictureContainer}
      >
        <label htmlFor="profilePictureInput">
          <img
            src={profilePicture}
            alt="Profile Picture"
            id="profilePicturePreview"
            //style={styles.profilePicture}
          />
        </label>
        <input
          type="file"
          id="profilePictureInput"
          accept="image/*"
        //   style={{ display: 'none' }}
          onChange={previewProfilePicture}
        />
        <label htmlFor="profilePictureInput" 
        //style={styles.uploadLabel}
        >
          Change Profile Picture
        </label>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div 
        //style={styles.formGroup}
        >
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            // style={styles.input}
            required
          />
        </div>

        <div 
        //style={styles.formGroup}
        >
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            //style={styles.input}
            required
          />
        </div>

        <div 
        //</form>style={styles.formGroup}
        >
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            //style={styles.input}
            required
          />
        </div>

        <div 
        //style={styles.formGroup}
        >
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            rows="3"
            //style={styles.textarea}
          />
        </div>

        <div 
        //style={styles.formGroup}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            //style={styles.input}
          />
          <small 
          //style={styles.smallText}
          >
            Leave blank if you don't want to change the password.
          </small>
        </div>

        <button type="submit" 
        //style={styles.button}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
