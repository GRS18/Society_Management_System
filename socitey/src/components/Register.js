import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
//   const register = () => {
//     const [message, setMessage] = useState(""); // To show success message
//     const navigate = useNavigate();
//     setMessage("You have successfully registered! Please go to login.");
//     setTimeout(() => {
//       navigate("/login"); // Redirect after 3 seconds
//     }, 3000);
//   };
  return (
    <>
      <div className="register-card">
        <h3 className="text-center">Create an Account</h3>
        <form>
          <div className="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label for="role">User Role</label>
            <select className="form-control" id="role" required>
              <option value="">Select Role</option>
              <option value="resident">Resident</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create Link password"
              required
            />
          </div>

          <div className="form-group">
            <label for="confirm-password">Confirm Password</label>
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
            // onClick={register}
          >
            Register
          </button>

          <p className="login-link">
            Already have an account? <Link to="/login">Login Here</Link>
          </p>
        </form>
      </div>
    </>
  );
}
