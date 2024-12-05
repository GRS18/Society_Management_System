import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  // return (
  //   <>
  //     <div className="login-card">
  //       <h3 className="text-center">Login</h3>
  //       <form>
  //         <div className="form-group">
  //           <label for="role">User Role</label>
  //           <select className="form-control" id="role" required>
  //             <option value="">Select Role</option>
  //             <option value="resident">Resident</option>
  //             <option value="admin">Admin</option>
  //           </select>
  //         </div>

  //         <div className="form-group">
  //           <label for="email">Email/Username</label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="email"
  //             placeholder="Enter email or username"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label for="password">Password</label>
  //           <input
  //             type="password"
  //             className="form-control"
  //             id="password"
  //             placeholder="Enter password"
  //             required
  //           />
  //         </div>

  //         <div className="form-check">
  //           <input
  //             type="checkbox"
  //             className="form-check-input"
  //             id="rememberMe"
  //           />
  //           <label className="form-check-label" for="rememberMe">
  //             Remember Me
  //           </label>
  //         </div>

  //         <button type="submit" className="btn btn-primary btn-block mt-3">
  //           Login
  //         </button>

  //         <a href="#" className="forgot-link text-muted text-center d-block">
  //           Forgot Password?
  //         </a>

  //         <p className="text-center mt-3">
  //           Don't have an account?{" "}
  //           <Link to="/register" className="register-link">
  //             Register Here
  //           </Link>
  //         </p>
  //       </form>
  //     </div>
  //   </>
  // );
  // import React from "react";
  // import { Link } from "react-router-dom";
  // import React, { useState } from "react";
  // import { useNavigate } from "react-router-dom";
  // import "../css/login.css";

  // export default function Login() {
  // //   const Login = () => {
  //     const [role, setRole] = useState("");
  //     const [email, setEmail] = useState("");
  //     const [password, setPassword] = useState("");
  //     const navigate = useNavigate();

  //     const handleLogin = (e) => {
  //       e.preventDefault();

  //       // Example validation
  //       if (!role || !email || !password) {
  //         alert("Please fill all fields!");
  //         return;
  //       }

  //       // Navigate to specific dashboard based on role
  //       if (role === "admin") {
  //         navigate("/admin");
  //       } else if (role === "staff") {
  //         navigate("/staff");
  //       } else if (role === "resident") {
  //         navigate("/resident");
  //       } else {
  //         alert("Invalid role selected!");
  //       }
  //     };

  //     return (
  //       <div className="login-card">
  //         <h3 className="text-center">Login</h3>
  //         <form onSubmit={handleLogin}>
  //           <div className="form-group">
  //             <label htmlFor="role">User Role</label>
  //             <select
  //               className="form-control"
  //               id="role"
  //               value={role}
  //               onChange={(e) => setRole(e.target.value)}
  //               required
  //             >
  //               <option value="">Select Role</option>
  //               <option value="admin">Admin</option>
  //               <option value="staff">Staff</option>
  //               <option value="resident">Resident</option>
  //             </select>
  //           </div>

  //           <div className="form-group">
  //             <label htmlFor="email">Email/Username</label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="email"
  //               placeholder="Enter email or username"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               required
  //             />
  //           </div>

  //           <div className="form-group">
  //             <label htmlFor="password">Password</label>
  //             <input
  //               type="password"
  //               className="form-control"
  //               id="password"
  //               placeholder="Enter password"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //               required
  //             />
  //           </div>

  //           <div className="form-check">
  //             <input
  //               type="checkbox"
  //               className="form-check-input"
  //               id="rememberMe"
  //             />
  //             <label className="form-check-label" htmlFor="rememberMe">
  //               Remember Me
  //             </label>
  //           </div>

  //           <button type="submit" className="btn btn-primary btn-block mt-3">
  //             Login
  //           </button>

  //           <a href="#" className="forgot-link text-muted text-center d-block">
  //             Forgot Password?
  //           </a>

  //           <p className="text-center mt-3">
  //             Don't have an account?{" "}
  //             <a href="/register" className="register-link">
  //               Register Here
  //             </a>
  //           </p>
  //         </form>
  //       </div>

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
      setPopupMessage("Please fill all fields!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
      return;
    }

    // Show popup and navigate based on role
    if (role === "admin") {
      setPopupMessage("Login successful! Redirecting to Admin Dashboard...");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/admin");
      }, 3000);
    } else if (role === "staff") {
      setPopupMessage("Login successful! Redirecting to Staff Dashboard...");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/staff");
      }, 3000);
    } else if (role === "resident") {
      setPopupMessage("Login successful! Redirecting to Resident Dashboard...");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/resident");
      }, 3000);
    } else {
      setPopupMessage("Invalid role selected!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <>
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
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
              <option value="resident">Resident</option>
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

          <button type="submit" className="btn btn-primary btn-block mt-3">
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
