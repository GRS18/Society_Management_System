import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../css/register.css";

// Register Component
export default function Register() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  // Validation regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleRegister = async (e) => {
    e.preventDefault();
  
    // Validation checks
    if (!fullName.trim()) {
      setPopupMessage("❗Please enter your full name!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }
  
    if (!email || !emailRegex.test(email)) {
      setPopupMessage("❗Please enter a valid email address!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }
  
    if (!phone || !phoneRegex.test(phone)) {
      setPopupMessage("❗Please enter a valid phone number (10-15 digits only)!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }
  
    if (!role) {
      setPopupMessage("❗Please select a user role!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }
  
    if (!password || !passwordRegex.test(password)) {
      setPopupMessage("❗Password must include uppercase, lowercase, number, and special character!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
      return;
    }
    
    // API Request
    try {
      const response = await fetch("http://localhost:8085/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          fullName,
          phone,
          role,
          password,
        }),
      });
  
      const result = await response.text();
  
      if (!response.ok) {
        throw new Error(result);
      }
  
      setPopupMessage("✅ Registration Successful! Redirecting to Login...");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/login");
      }, 1000);
    } catch (error) {
      setPopupMessage(`❌ ${error.message}`);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };
  
  return (
    <>
      {/* Header */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt="Logo"
                height="120"
                className="d-inline-block align-text-top logo"
              />
            </Link>
          </div>
        </nav>
      </div>

      {/* Register Form */}
      <div className="register">
        <div className="register-card">
          <h3 className="text-center">Create an Account</h3>
          <form onSubmit={handleRegister}>

          <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">User Role</label>
              <select
                className="form-control"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block rbtn">
              Register
            </button>

            <p className="text-center mt-3">
              Already have an account?{" "}
              <a href="/login" className="login-link">
                Login Here
              </a>
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
      </div>
    </>
  );
}
