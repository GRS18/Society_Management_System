import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/register.css";

export default function Register() {

  //  // Hooks for form data
  //  const [role, setRole] = useState("");
  //  const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");
  //  const [showPopup, setShowPopup] = useState(false); // Hook to control popup visibility
  //  const navigate = useNavigate();
 
  //  const handleRegister = (e) => {
  //    e.preventDefault();
 
  //    // Example validation
  //    if (!role || !email || !password) {
  //      alert("Please fill all fields!");
  //      return;
  //    }
 
  //    // Show the popup on successful registration
  //    setShowPopup(true);
 
  //    // Automatically redirect after 2 seconds
  //    setTimeout(() => {
  //      setShowPopup(false); // Hide the popup
  //      navigate("/login"); // Redirect to login page
  //    }, 4000);
  //  };
 
  //  return (
  //    <>
  //      <div className="register-card">
  //        <h3 className="text-center">Create an Account</h3>
  //        <form>
  //          <div className="form-group">
  //            <label htmlFor="name">Full Name</label>
  //            <input
  //              type="text"
  //              className="form-control"
  //              id="name"
  //              placeholder="Enter your full name"
  //              required
  //            />
  //          </div>
 
  //          <div className="form-group">
  //            <label htmlFor="email">Email Address</label>
  //            <input
  //              type="email"
  //              className="form-control"
  //              id="email"
  //              placeholder="Enter your email"
  //              required
  //              onChange={(e) => setEmail(e.target.value)}
  //            />
  //          </div>
 
  //          <div className="form-group">
  //            <label htmlFor="phone">Phone Number</label>
  //            <input
  //              type="tel"
  //              className="form-control"
  //              id="phone"
  //              placeholder="Enter your phone number"
  //              required
  //            />
  //          </div>
 
  //          <div className="form-group">
  //            <label htmlFor="role">User Role</label>
  //            <select
  //              className="form-control"
  //              id="role"
  //              required
  //              onChange={(e) => setRole(e.target.value)}
  //            >
  //              <option value="">Select Role</option>
  //              <option value="admin">Admin</option>
  //              <option value="staff">Staff</option>
  //              <option value="resident">Resident</option>
  //            </select>
  //          </div>
 
  //          <div className="form-group">
  //            <label htmlFor="password">Password</label>
  //            <input
  //              type="password"
  //              className="form-control"
  //              id="password"
  //              placeholder="Create a password"
  //              required
  //              onChange={(e) => setPassword(e.target.value)}
  //            />
  //          </div>
 
  //          <div className="form-group">
  //            <label htmlFor="confirm-password">Confirm Password</label>
  //            <input
  //              type="password"
  //              className="form-control"
  //              id="confirm-password"
  //              placeholder="Confirm your password"
  //              required
  //            />
  //          </div>
 
  //          <button
  //            type="submit"
  //            className="btn btn-primary btn-block"
  //            onClick={handleRegister}
  //          >
  //            Register
  //          </button>
 
  //          <p className="login-link">
  //            Already have an account? <Link to="/login">Login Here</Link>
  //          </p>
  //        </form>
  //      </div>
 
  //      {/* Popup Message */}
  //      {showPopup && (
  //        <div className="popup-overlay">
  //          <div className="popup-card">
  //            <h4>Registration Successful!</h4>
  //            <p>Redirecting to the login page...</p>
  //          </div>
  //        </div>
  //      )}
  //    </>









  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Hook to control popup visibility
  const [popupMessage, setPopupMessage] = useState(""); // Message in the popup
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Example validation
    if (!role || !email || !password) {
      setPopupMessage("Please fill all fields!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
      return;
    }

    // Show success popup on successful registration
    setPopupMessage("Registration Successful! Redirecting to Login...");
    setShowPopup(true);

    // Automatically redirect after 4 seconds
    setTimeout(() => {
      setShowPopup(false); // Hide the popup
      navigate("/login"); // Redirect to login page
    }, 4000);
  };

  return (
    <>
      <div className="register-card">
        <h3 className="text-center">Create an Account</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">User Role</label>
            <select
              className="form-control"
              id="role"
              required
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
              <option value="resident">Resident</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleRegister}
          >
            Register
          </button>

          <p className="login-link">
            Already have an account? <Link to="/login">Login Here</Link>
          </p>
        </form>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h4>{popupMessage}</h4>
          </div>
        </div>
      )}
    </>
  );
}
