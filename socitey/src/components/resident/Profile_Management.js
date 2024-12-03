import React from 'react';

export default function Profile_Management() {
  return (
   <>
    <div className="profile-card">
        <h3>Manage Your Profile</h3>

        <div className="profile-picture">
            <label for="profilePictureInput">
                <img src="https://via.placeholder.com/120" alt="Profile Picture" id="profilePicturePreview"/>
            </label>
            <input type="file" id="profilePictureInput" accept="image/*" onchange="previewProfilePicture(event)"/>
            <label className="upload-label" for="profilePictureInput">Change Profile Picture</label>
        </div>

        <form>
            <div className="form-group">
                <label for="fullName">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" value="John Doe" required/>
            </div>

            <div className="form-group">
                <label for="email">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" value="johndoe@example.com" required/>
            </div>

            <div className="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" value="123-456-7890" required/>
            </div>

            <div className="form-group">
                <label for="address">Address</label>
                <textarea className="form-control" id="address" rows="3" placeholder="Enter your address">123 Main Street, City, Country</textarea>
            </div>

            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter a new password"/>
                <small className="form-text text-muted">Leave blank if you don't want to change the password.</small>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
        </form>
    </div>
   </>
  );
}
