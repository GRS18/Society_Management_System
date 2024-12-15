import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../css/login.css";
export default function Login() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Hook to control popup visibility
  const [popupMessage, setPopupMessage] = useState(""); // Message in the popup
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Example validation
    if (!role || !email || !password) {
      setPopupMessage("❗Please fill all fields!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
      return;
    }

    // Show popup and navigate based on role
    if (role === "admin") {
      setPopupMessage("✅Login successful! Redirecting to Admin Dashboard...");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/admin");
      }, 3000);
    } else if (role === "staff") {
      setPopupMessage("✅Login successful! Redirecting to Staff Dashboard...");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/staff");
      }, 3000);
    } else if (role === "resident") {
      setPopupMessage(
        "✅Login successful! Redirecting to Resident Dashboard..."
      );
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/resident");
      }, 3000);
    } else {
      setPopupMessage("❌Invalid role selected!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <>
      {/* Header start */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img
                src={logo}
                alt="Logo"
                height="120"
                className="d-inline-block align-text-top"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Header end */}

      <div className="login-card">
        <h3 className="text-center">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="role">User Role</label>
            <select
              className="form-control"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option className = "opt" value="">Select Role</option>
              <option  className = "opt" value="admin">Admin</option>
              <option  className = "opt" value="staff">Staff</option>
              <option  className = "opt" value="resident">Resident</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email/Username</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mt-3 lbtn">
            Login
          </button>

          <a href="#" className="forgot-link text-muted text-center d-block">
            Forgot Password?
          </a>

          <p className="text-center mt-3">
            Don't have an account?{" "}
            <a href="/register" className="register-link">
              Register Here
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
    </>
  );
}
